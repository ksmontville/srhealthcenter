// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/DefaultView.vue"),
    children: [
      {
        path: "",
        name: "Home",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ "@/views/HomeView.vue"),
      },
      {
        path: "meet-our-providers-staff",
        name: "About",
        component: () =>
          import(
            /*webpackChunkName: "meet-our-providers-staff": */ "@/views/AboutView.vue"
          ),
      },
      {
        path: "new-patients",
        name: "New Patients",
        component: () =>
          import(/*webpackChunkName: "new-patients": */ "@/views/NewPatientsView.vue"),
      },
      {
        path: "expecting",
        name: "Expecting",
        component: () =>
          import(/*webpackChunkName: "expecting": */ "@/views/ExpectingView.vue"),
      },
      {
        path: "patient-forms",
        name: "Patient Forms",
        component: () =>
          import(
            /*webpackChunkName: "patient-forms": */ "@/views/PatientFormsView.vue"
          ),
      },
      {
        path: "our-mission-and-services",
        name: "Services",
        component: () =>
          import(
            /*webpackChunkName: "our-mission-and-services": */ "@/views/ServicesView.vue"
          ),
      },
      {
        path: "integrative-pediatric-care",
        name: "Integrative Care",
        component: () =>
          import(
            /*webpackChunkName: "integrative-pediatric-care": */ "@/views/IntegrativeCareView.vue"
          ),
      },
      {
        path: "auricular-acupuncture",
        name: "Auricular Acupuncture",
        component: () =>
          import(
            /*webpackChunkName: "auricular-acupuncture": */ "@/views/AuricularAcupunctureView.vue"
          ),
      },
      {
        path: "community-leadership-media-advocacy",
        name: "Community Leadership",
        component: () =>
          import(
            /*webpackChunkName: "community-leadership-media-advocacy": */ "@/views/CommunityLeadershipView.vue"
          ),
      },
      {
        path: "faq",
        name: "FAQ",
        component: () => import(/*webpackChunkName: "faq": */ "@/views/FaqView.vue"),
      },
      {
        path: "school-visits",
        name: "School Visits",
        component: () =>
          import(
            /*webpackChunkName: "school-visits": */ "@/views/SchoolVisitsView.vue"
          ),
      },
      {
        path: "contact",
        name: "Contact Us",
        component: () =>
          import(/*webpackChunkName: "contact": */ "@/views/ContactView.vue"),
      },
      {
        path: "srhc-recommended-child-health-web-links",
        name: "Web Resources",
        component: () =>
          import(
            /*webpackChunkName: "srhc-recommended-child-health-web-links": */ "@/views/resources/WebResourcesView.vue"
          ),
      },
      {
        path: "local-resources",
        name: "Local Resources",
        component: () =>
          import(
            /*webpackChunkName: "local-resources": */ "@/views/resources/LocalResourcesView.vue"
          ),
      },
      {
        path: "srhc-recommended-books",
        name: "Reading",
        component: () =>
          import(
            /*webpackChunkName: "srhc-recommended-books": */ "@/views/resources/ReadingResourcesView.vue"
          ),
      },
      {
        path: "vaccine-information",
        name: "Vaccines",
        component: () =>
          import(
            /*webpackChunkName: "vaccine-information": */ "@/views/resources/VaccineResourcesView.vue"
          ),
      },
      {
        path: "patient-portal",
        name: "Patient Portal",
        component: () =>
          import(
            /*webpackChunkName: "patient-portal": */ "@/views/PatientPortalView.vue"
          ),
      },
      {
        path: "/:pathMatch(.*)*",
        name: "error",
        component: () =>
          import(/*webpackChunkName: "error-page": */ "@/views/ErrorPage.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    // Honour #anchor targets (jump-to-section links, and links into a section
    // from another page). scroll-margin-top on the headings handles the offset
    // for the fixed app bar.
    if (to.hash) {
      return { el: to.hash, behavior: "smooth" };
    }
    return { top: 0 };
  },
});

export default router;
