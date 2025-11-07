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
  const facebookUrl = ref(
    "https://www.facebook.com/southroyaltonhealthcenter/",
  );

  const navLinks = ref([
    {
      id: 0,
      name: "Home",
      route: "/",
    },
    {
      id: 1,
      name: "About Us",
      route: "meet-our-providers-staff",
    },
    {
      id: 2,
      name: "Office Details",
      route: "office-details",
    },
    {
      id: 3,
      name: "New Patients",
      route: "new-patients",
    },
    {
      id: 4,
      name: "Expecting",
      route: "expecting",
    },
    {
      id: 5,
      name: "Patient Forms",
      route: "patient-forms",
    },
    {
      id: 6,
      name: "Services",
      route: "our-mission-and-services",
    },
    {
      id: 7,
      name: "School Visits",
      route: "school-visits",
    },
    {
      id: 8,
      name: "Contact Us",
      route: "contact",
    },
  ]);

  // ID of active nav-link for styling purposes
  let activeId = ref(null);
  const setActiveId = (route) => {
    activeId.value = null;
    for (let i = 0; i < navLinks.value.length; i++) {
      if (navLinks.value[i].route === route) {
        activeId.value = navLinks.value[i].id;
      }
    }
    if (activeId.value === 0) {
      document
        .querySelectorAll("a[href='/']")[0]
        .classList.add("v-btn--active");
    }
    if (activeId.value !== 0) {
      document
        .querySelectorAll("a[href='/']")[0]
        .classList.remove("v-btn--active");
    }
  };

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
    activeId,
    setActiveId,
  };
});
