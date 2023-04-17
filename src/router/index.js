// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/DefaultView.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/HomeView.vue'),
      },
      {
        path: 'about',
        name: "About",
        component: () => import(/*webpackChunkName: "about: */ '@/views/AboutView.vue'),
      },
      {
        path: 'office-details',
        name: "Office Details",
        component: () => import(/*webpackChunkName: "office-details: */ '@/views/OfficeDetailsView.vue'),
      },
      {
        path: 'new-patients',
        name: "New Patients",
        component: () => import(/*webpackChunkName: "new-patients: */ '@/views/NewPatientsView.vue'),
      },
      {
        path: 'expecting',
        name: "Expecting",
        component: () => import(/*webpackChunkName: "expecting: */ '@/views/ExpectingView.vue'),
      },
      {
        path: 'forms',
        name: "Patient Forms",
        component: () => import(/*webpackChunkName: "patient-forms: */ '@/views/PatientFormsView.vue'),
      },
      {
        path: 'services',
        name: "Services",
        component: () => import(/*webpackChunkName: "services: */ '@/views/ServicesView.vue'),
      },
      {
        path: 'education',
        name: "Education",
        component: () => import(/*webpackChunkName: "education: */ '@/views/EducationView.vue'),
      },
      {
        path: 'school-visits',
        name: "School Visits",
        component: () => import(/*webpackChunkName: "school-visits: */ '@/views/SchoolVisitsView.vue'),
      },
      {
        path: 'contact',
        name: "Contact Us",
        component: () => import(/*webpackChunkName: "contact: */ '@/views/ContactView.vue'),
      },
      {
        path: 'patient-portal',
        name: "Patient Portal",
        component: () => import(/*webpackChunkName: "patient-portal: */ '@/views/PatientPortalView.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
