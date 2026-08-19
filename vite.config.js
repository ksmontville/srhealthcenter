// Plugins
import vue from "@vitejs/plugin-vue";
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
import { imagetools } from "vite-imagetools";

// Utilities
import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

/**
 * Widest each image is ever displayed, by folder.
 *
 * The source files are full-resolution camera output (4000–5000px) but nothing
 * renders above ~800px, so the overwhelming majority of those pixels were being
 * downloaded and thrown away. Anything not listed falls back to `default`.
 */
const MAX_WIDTH = {
  "img/staff": 600, // card avatars (~64px) and the dialog photo (~520px)
  "img/office": 1200, // carousel at 800px; click-to-enlarge opens the same file
  "img/education": 1200, // carousel
  "img/stock": 900, // two-column feature images, ~640px at most
  "img/services": 900,
  "img/forms": 900,
  // Decorative backdrop behind a ~176px-tall app bar. Cropped hard, sits under
  // text, and loads on every page — it was the heaviest asset on the site.
  // Slight upscaling on very wide displays is imperceptible on blurred foliage.
  "img/background": 1100,
  default: 1200,
};

/**
 * Quality is tuned down deliberately: the practice serves a rural area where
 * connections are slow and unreliable, so bytes matter more than fidelity.
 * Faces keep a little more headroom than decorative art.
 */
const QUALITY = {
  "img/staff": 68,
  "img/background": 45,
  default: 60,
};

const lookup = (table, path) => {
  for (const [dir, value] of Object.entries(table)) {
    if (dir !== "default" && path.includes(dir)) return value;
  }
  return table.default;
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
      styles: {
        configFile: "src/styles/settings.scss",
      },
    }),
    // Resize + re-encode every imported image at build time. Applied via
    // defaultDirectives so no import statement has to change, and the original
    // files stay untouched in source control.
    imagetools({
      defaultDirectives: (url) => {
        if (url.searchParams.has("raw")) return new URLSearchParams();
        return new URLSearchParams({
          format: "webp",
          quality: String(lookup(QUALITY, url.pathname)),
          w: String(lookup(MAX_WIDTH, url.pathname)),
          withoutEnlargement: "true",
        });
      },
    }),
  ],
  build: {
    // One stylesheet instead of ~16 per-component files. Each split stylesheet
    // is render-blocking, so on a high-latency rural connection the round trips
    // cost far more than the extra bytes of a single bundle.
    cssCodeSplit: false,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"],
  },
  server: {
    port: 3000,
  },
});
