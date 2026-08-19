<template>
  <router-view />
</template>

<script setup>
import { useHead } from "@unhead/vue";
import { clinicSchema } from "@/config/schema";

// Practice entity, emitted once for the whole site. Per-page schema (FAQPage,
// Physician, MedicalWebPage) references this by @id rather than repeating it.
useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(clinicSchema()),
    },
  ],
});
</script>

<style>
/*
 * Roboto, self-hosted and subset to Latin. See public/font/README.md.
 *
 * Previously pulled from Google Fonts, which cost two extra DNS + TLS round
 * trips before any text could render, and requested six weights when the site
 * only uses 400 and 700. Self-hosting removes a third-party dependency that
 * fails closed on an unreliable connection.
 */
@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(/font/Roboto-Regular.woff2) format("woff2");
}

@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(/font/Roboto-Bold.woff2) format("woff2");
}

/*
 * Kalam, subset to Latin + common punctuation and served as woff2.
 *
 * The original was a 417 KB TrueType file containing the full Devanagari
 * character set, downloaded on every page for a handful of decorative
 * headings. Subsetting to the characters the site actually uses brings it to
 * 13 KB.
 *
 * Regenerate with:
 *   pyftsubset Kalam-Regular.ttf --output-file=Kalam-Regular.woff2 \
 *     --flavor=woff2 --no-hinting --desubroutinize \
 *     --unicodes="U+0020-007E,U+00A0-00FF,U+2010-2027,U+2030-205E,U+20AC,U+2122" \
 *     --layout-features="kern,liga,clig,calt"
 */
@font-face {
  font-family: "Kalam";
  /* swap: show the fallback immediately rather than blocking on the download */
  font-display: swap;
  src:
    local("Kalam"),
    url(/font/Kalam-Regular.woff2) format("woff2");
}
</style>
