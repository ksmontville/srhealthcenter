import { useHead } from "@unhead/vue";
import { useRoute } from "vue-router";
import { SITE_NAME, absoluteUrl } from "@/config/site";

/**
 * Per-route document head: title, meta description, canonical and Open Graph.
 *
 * The prerender step captures the DOM after the router has settled, so whatever
 * this sets ends up baked into the static HTML for each route.
 *
 * @param {object}   opts
 * @param {string}   opts.title        Page title, without the site-name suffix.
 * @param {string}   opts.description  Meta description (~150-160 chars).
 * @param {string}  [opts.image]       Absolute or root-relative OG image path.
 * @param {object[]}[opts.schema]      JSON-LD objects to embed on this page.
 */
export function useSeo({
  title,
  description,
  image = "/srhc-logo-white.png",
  schema = [],
}) {
  const route = useRoute();
  const url = absoluteUrl(route.path);
  // Home already leads with the practice name; don't repeat it.
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const imageUrl = image.startsWith("http") ? image : `${absoluteUrl(image)}`;

  useHead({
    title: fullTitle,
    link: [{ rel: "canonical", href: url }],
    meta: [
      { name: "description", content: description },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: imageUrl },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: fullTitle },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: imageUrl },
    ],
    script: schema.length
      ? schema.map((node) => ({
          type: "application/ld+json",
          innerHTML: JSON.stringify(node),
        }))
      : [],
  });
}
