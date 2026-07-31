// Utilities
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStore = defineStore("app", () => {
  const officePhoneStr = "(802) 763-7575";
  const officePhone = ref("tel:8027637575");
  const officeFax = ref("fax:8442898252");
  const officeFaxStr = "(844) 289-8252";

  const patientPortalUrl = ref("https://12904.portal.athenahealth.com/");
  const onlineBookingUrl = ref(
    "https://book2.getweave.com/62731e39-480c-4e5b-99d5-fd864ed4fa63/request-appointment/",
  );
  const onlinePaymentUrl = ref("https://12904.portal.athenahealth.com/");
  const facebookUrl = ref("https://www.facebook.com/southroyaltonhealthcenter/");

  /**
   * Primary navigation.
   *
   * Top-level entries either link somewhere (`route`) or open a dropdown
   * (`children`). Grouping became necessary once the four new pages landed —
   * a flat bar of 12 links wrapped to two rows at 1440px.
   *
   * Routes are absolute so they resolve the same from any depth.
   */
  const navLinks = ref([
    {
      id: 0,
      name: "Home",
      route: "/",
    },
    {
      id: 1,
      name: "About Us",
      children: [
        { id: 10, name: "Meet Our Team", route: "/meet-our-providers-staff" },
        {
          id: 11,
          name: "Community Leadership, Media & Advocacy",
          route: "/community-leadership-media-advocacy",
        },
      ],
    },
    {
      id: 2,
      name: "Services",
      children: [
        { id: 20, name: "Our Mission & Services", route: "/our-mission-and-services" },
        {
          id: 21,
          name: "Integrative Pediatric Care",
          route: "/integrative-pediatric-care",
        },
        { id: 22, name: "Auricular Acupuncture", route: "/auricular-acupuncture" },
        { id: 23, name: "School Visits", route: "/school-visits" },
      ],
    },
    {
      id: 3,
      name: "Patients",
      children: [
        { id: 30, name: "New Patients", route: "/new-patients" },
        { id: 31, name: "Expecting", route: "/expecting" },
        { id: 32, name: "Patient Forms", route: "/patient-forms" },
        { id: 33, name: "Patient Portal", route: "/patient-portal" },
        { id: 34, name: "Frequently Asked Questions", route: "/faq" },
      ],
    },
    {
      id: 4,
      name: "Contact Us",
      route: "/contact",
    },
  ]);

  // Active-link state is derived from the current route in the nav components
  // (see `isActive` / `isGroupActive` in TheNavBar and TheAppBar). The previous
  // implementation tracked it manually and poked `classList` on a
  // `querySelectorAll("a[href='/']")[0]` lookup, which broke as soon as links
  // were nested and would throw if that anchor wasn't mounted.

  return {
    officePhoneStr,
    officePhone,
    officeFax,
    officeFaxStr,
    patientPortalUrl,
    onlineBookingUrl,
    onlinePaymentUrl,
    facebookUrl,
    navLinks,
  };
});
