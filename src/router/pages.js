/**
 * The site's page manifest — the single source of truth for what routes exist.
 *
 * Three things consume this:
 *   - src/router/index.js      builds the vue-router route table
 *   - scripts/prerender.mjs    decides which routes to prerender
 *   - scripts/generate-sitemap.mjs  writes public sitemap entries
 *
 * Previously each of those kept its own hand-maintained copy of the list, which
 * meant adding a page in three places and silently shipping an unprerendered,
 * unlisted route whenever one was missed.
 *
 * IMPORTANT: this module is imported by plain Node (the build scripts), so it
 * must have no top-level imports and no Vite-only syntax. The `view` functions
 * hold `@/…` specifiers, but they are only ever *called* by Vite, never by Node.
 *
 * @property path       Absolute route path. "/" is the home page.
 * @property name       vue-router route name.
 * @property view       Lazy component loader.
 * @property prerender  Set false to route it client-side only (default true).
 * @property sitemap    Omit to exclude from sitemap.xml.
 */
export const pages = [
  {
    path: "/",
    name: "Home",
    view: () => import("@/views/HomeView.vue"),
    sitemap: { priority: "1.0", changefreq: "monthly" },
  },
  {
    path: "/our-mission-and-services",
    name: "Services",
    view: () => import("@/views/ServicesView.vue"),
    sitemap: { priority: "0.9", changefreq: "monthly" },
  },
  {
    path: "/meet-our-providers-staff",
    name: "About",
    view: () => import("@/views/AboutView.vue"),
    sitemap: { priority: "0.8", changefreq: "monthly" },
  },
  {
    path: "/patient-testimonials",
    name: "Testimonials",
    view: () => import("@/views/TestimonialsView.vue"),
    sitemap: { priority: "0.7", changefreq: "monthly" },
  },
  {
    path: "/faq",
    name: "FAQ",
    view: () => import("@/views/FaqView.vue"),
    sitemap: { priority: "0.8", changefreq: "monthly" },
  },
  {
    path: "/integrative-pediatric-care",
    name: "Integrative Care",
    view: () => import("@/views/IntegrativeCareView.vue"),
    sitemap: { priority: "0.8", changefreq: "monthly" },
  },
  {
    path: "/auricular-acupuncture",
    name: "Auricular Acupuncture",
    view: () => import("@/views/AuricularAcupunctureView.vue"),
    sitemap: { priority: "0.8", changefreq: "monthly" },
  },
  {
    path: "/community-leadership-media-advocacy",
    name: "Community Leadership",
    view: () => import("@/views/CommunityLeadershipView.vue"),
    sitemap: { priority: "0.7", changefreq: "monthly" },
  },
  {
    path: "/new-patients",
    name: "New Patients",
    view: () => import("@/views/NewPatientsView.vue"),
    sitemap: { priority: "0.7", changefreq: "monthly" },
  },
  {
    path: "/expecting",
    name: "Expecting",
    view: () => import("@/views/ExpectingView.vue"),
    sitemap: { priority: "0.7", changefreq: "monthly" },
  },
  {
    path: "/school-visits",
    name: "School Visits",
    view: () => import("@/views/SchoolVisitsView.vue"),
    sitemap: { priority: "0.6", changefreq: "monthly" },
  },
  {
    path: "/patient-forms",
    name: "Patient Forms",
    view: () => import("@/views/PatientFormsView.vue"),
    sitemap: { priority: "0.6", changefreq: "monthly" },
  },
  {
    path: "/patient-portal",
    name: "Patient Portal",
    view: () => import("@/views/PatientPortalView.vue"),
    sitemap: { priority: "0.6", changefreq: "monthly" },
  },
  {
    path: "/contact",
    name: "Contact Us",
    view: () => import("@/views/ContactView.vue"),
    sitemap: { priority: "0.6", changefreq: "monthly" },
  },
  {
    path: "/srhc-recommended-child-health-web-links",
    name: "Web Resources",
    view: () => import("@/views/resources/WebResourcesView.vue"),
    sitemap: { priority: "0.5", changefreq: "yearly" },
  },
  {
    path: "/srhc-recommended-books",
    name: "Reading",
    view: () => import("@/views/resources/ReadingResourcesView.vue"),
    sitemap: { priority: "0.5", changefreq: "yearly" },
  },
  {
    path: "/vaccine-information",
    name: "Vaccines",
    view: () => import("@/views/resources/VaccineResourcesView.vue"),
    sitemap: { priority: "0.5", changefreq: "yearly" },
  },
];

/** Routes the prerenderer should emit static HTML for. */
export const prerenderPaths = () =>
  pages.filter((page) => page.prerender !== false).map((page) => page.path);

/** Pages that belong in sitemap.xml. */
export const sitemapPages = () => pages.filter((page) => page.sitemap);
