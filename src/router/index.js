// Composables
import { createRouter, createWebHistory } from "vue-router";
import { pages } from "./pages";

// Route table is derived from the page manifest so the router, the prerenderer
// and the sitemap can never disagree about which pages exist. Add a page in
// ./pages.js and all three pick it up.
const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/DefaultView.vue"),
    children: [
      ...pages.map((page) => ({
        // Children take paths relative to the layout route.
        path: page.path === "/" ? "" : page.path.replace(/^\//, ""),
        name: page.name,
        component: page.view,
      })),
      {
        path: "/:pathMatch(.*)*",
        name: "error",
        component: () => import("@/views/ErrorPage.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    // Honour #anchor targets (jump-to-section links, and links into a section
    // from another page).
    //
    // vue-router scrolls with window.scrollTo, which does NOT respect the CSS
    // `scroll-margin-top` set in settings.scss — and it overrides the native
    // anchor scroll that would have. Without an explicit offset the heading
    // lands underneath the fixed app bar. Measuring the bar keeps this correct
    // across breakpoints and if its height changes again.
    if (to.hash) {
      const appBar = document.querySelector(".v-app-bar");
      const offset = appBar ? appBar.getBoundingClientRect().height + 8 : 184;
      return { el: to.hash, top: offset, behavior: "smooth" };
    }
    return { top: 0 };
  },
});

export default router;
