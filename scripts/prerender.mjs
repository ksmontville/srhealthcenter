/**
 * Build-time prerender.
 *
 * Why: the app is a client-rendered SPA. Google executes JavaScript, but most AI
 * crawlers (GPTBot, ClaudeBot, PerplexityBot) do not — they would otherwise see
 * an empty `<div id="app">`. This walks every route in a headless browser and
 * writes the settled DOM to `dist/<route>/index.html`, so the served HTML
 * already contains the headings, body copy, per-route meta and JSON-LD.
 *
 * Chosen over vite-ssg because it needs no changes to the app itself and is
 * independent of the Vite major version.
 *
 * Run automatically as part of `npm run build`.
 */
import { createServer } from "node:http";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";
import { prerenderPaths } from "../src/router/pages.js";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = join(ROOT, "dist");
const PORT = 4181;

// Derived from the same manifest the router builds its route table from, so a
// new page is prerendered automatically rather than silently shipping as an
// empty SPA shell.
const ROUTES = prerenderPaths();

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".ico": "image/x-icon",
  ".ttf": "font/ttf",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".pdf": "application/pdf",
};

/** Minimal static server with SPA fallback, mirroring Netlify's behaviour. */
function serveDist() {
  return createServer(async (req, res) => {
    try {
      const urlPath = decodeURIComponent(new URL(req.url, "http://x").pathname);
      let filePath = join(DIST, urlPath);
      if (!extname(filePath)) filePath = join(DIST, "index.html");
      if (!existsSync(filePath)) filePath = join(DIST, "index.html");
      const body = await readFile(filePath);
      res.writeHead(200, {
        "content-type": MIME[extname(filePath)] ?? "application/octet-stream",
      });
      res.end(body);
    } catch {
      res.writeHead(500).end("prerender static server error");
    }
  });
}

const server = serveDist();
await new Promise((resolve) => server.listen(PORT, resolve));

/*
 * Launch, with a legible failure.
 *
 * Prerendering is the reason AI crawlers see anything on this site at all, so a
 * broken browser must fail the build rather than quietly shipping an empty SPA
 * shell. But the raw Playwright error is cryptic in CI, so translate the two
 * ways it actually breaks: the browser was never downloaded, or it downloaded
 * but the host is missing a shared library it links against.
 */
let browser;
try {
  browser = await chromium.launch();
} catch (error) {
  const message = String(error);
  console.error("\n✗ Could not start Chromium — cannot prerender.\n");
  if (/Executable doesn't exist|Please run the following command/.test(message)) {
    console.error("  The browser was never downloaded. The build must run:");
    console.error("    npx playwright install chromium\n");
  } else if (/error while loading shared libraries|libnss3|libgbm/.test(message)) {
    console.error("  Chromium is present but the host is missing a shared library.");
    console.error("  On a machine where you can install packages:");
    console.error("    npx playwright install --with-deps chromium");
    console.error("  On Netlify, `--with-deps` cannot work (it needs root); the build");
    console.error("  image is expected to supply these already.\n");
  }
  console.error(`  Original error: ${message.split("\n")[0]}\n`);
  console.error("  To ship without prerendering — which removes the site's");
  console.error("  visibility to AI crawlers — use `npm run build:spa`.\n");
  server.close();
  process.exit(1);
}
// Wide viewport so responsive content renders in its desktop form, and tall so
// less of the page depends on scrolling to become visible.
const context = await browser.newContext({ viewport: { width: 1440, height: 2000 } });

const failures = [];
let written = 0;

for (const route of ROUTES) {
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(String(e).slice(0, 200)));

  try {
    await page.goto(`http://localhost:${PORT}${route}`, {
      waitUntil: "networkidle",
      timeout: 30000,
    });

    // v-lazy and IntersectionObserver content is absent from the DOM until it
    // scrolls into view — walk the page so those sections are captured too.
    await page.evaluate(async () => {
      const step = 600;
      for (let y = 0; y < document.body.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 60));
      }
      window.scrollTo(0, 0);
      await new Promise((r) => setTimeout(r, 150));
    });
    await page.waitForTimeout(300);

    // Mark below-the-fold images for lazy loading.
    //
    // Two problems this solves at once. Scrolling above materialises v-lazy
    // content into the DOM, so those images would otherwise ship as eager
    // `<img src>` in the static HTML and download immediately. And Vuetify's
    // VImg builds its `<img>` from a fixed prop list with no attribute spread,
    // so a `loading="lazy"` written in the template is silently dropped.
    //
    // Doing it here means crawlers still see every image and its alt text,
    // while browsers defer the bytes until they are near the viewport —
    // which matters on the slow rural connections this practice serves.
    const lazied = await page.evaluate((foldPx) => {
      let n = 0;
      for (const img of document.querySelectorAll("img")) {
        const top = img.getBoundingClientRect().top + window.scrollY;
        if (top > foldPx) {
          img.setAttribute("loading", "lazy");
          img.setAttribute("decoding", "async");
          n += 1;
        } else {
          // Above the fold: hint the decoder but keep the fetch eager so LCP
          // isn't delayed.
          img.setAttribute("decoding", "sync");
          img.setAttribute("fetchpriority", "high");
        }
      }
      return n;
    }, 900);

    // Sanity-check the route actually rendered before writing it out.
    const check = await page.evaluate(() => ({
      title: document.title,
      h1: document.querySelectorAll("h1").length,
      chars: document.querySelector(".v-main")?.textContent.trim().length ?? 0,
      notFound: document.body.textContent.includes("Page does not exist"),
    }));

    if (check.notFound) throw new Error("rendered the 404 view");
    if (check.h1 !== 1) throw new Error(`expected 1 <h1>, found ${check.h1}`);
    if (check.chars < 200) throw new Error(`only ${check.chars} chars of content`);
    if (errors.length) throw new Error(`page errors: ${errors.join(" | ")}`);

    let html = await page.content();

    // Vite injects modulepreload/stylesheet links at runtime with hrefs resolved
    // against the current origin, so page.content() bakes in the prerender
    // server's address. Left as-is these would point at localhost in production.
    const origin = `http://localhost:${PORT}`;
    const leaked = (html.match(new RegExp(origin, "g")) ?? []).length;
    html = html.split(origin).join("");
    if (html.includes("localhost")) {
      throw new Error("localhost reference survived rewriting");
    }

    html = "<!doctype html>\n" + html.replace(/^<!DOCTYPE html>/i, "").trim();

    const outDir = route === "/" ? DIST : join(DIST, route);
    await mkdir(outDir, { recursive: true });
    await writeFile(join(outDir, "index.html"), html, "utf8");

    written += 1;
    console.log(
      `  ✓ ${route.padEnd(38)} ${String(check.chars).padStart(6)} chars  ${String(leaked).padStart(2)} urls  ${String(lazied).padStart(2)} lazy  ${check.title.slice(0, 30)}`,
    );
  } catch (err) {
    failures.push({ route, message: err.message });
    console.error(`  ✗ ${route.padEnd(44)} ${err.message}`);
  } finally {
    await page.close();
  }
}

await browser.close();
await new Promise((resolve) => server.close(resolve));

console.log(`\nprerendered ${written}/${ROUTES.length} routes`);

if (failures.length) {
  console.error("\nprerender failed for:");
  failures.forEach((f) => console.error(`  ${f.route}: ${f.message}`));
  // Fail the build rather than silently shipping empty shells for these routes.
  process.exit(1);
}
