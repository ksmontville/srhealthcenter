/**
 * Generates dist/sitemap.xml from the page manifest.
 *
 * Emitted at build time rather than committed so it cannot drift from the
 * router — adding a page to src/router/pages.js is enough to get it listed.
 *
 * Run as part of `npm run build`, before the prerender step so the prerender
 * server can serve it.
 */
import { writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { sitemapPages } from "../src/router/pages.js";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

// Apex host, matching config/site.js, robots.txt and the canonical tags.
const SITE_URL = "https://srhealthcenter.com";

const lastmod = new Date().toISOString().slice(0, 10);

const entries = sitemapPages().map((page) => {
  const loc = page.path === "/" ? SITE_URL : `${SITE_URL}${page.path}`;
  return [
    "    <url>",
    `        <loc>${loc}</loc>`,
    `        <lastmod>${lastmod}</lastmod>`,
    `        <changefreq>${page.sitemap.changefreq}</changefreq>`,
    `        <priority>${page.sitemap.priority}</priority>`,
    "    </url>",
  ].join("\n");
});

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...entries,
  "</urlset>",
  "",
].join("\n");

await writeFile(join(ROOT, "dist", "sitemap.xml"), xml, "utf8");

console.log(
  `  sitemap.xml: ${entries.length} urls, lastmod ${lastmod}, host ${SITE_URL}`,
);
