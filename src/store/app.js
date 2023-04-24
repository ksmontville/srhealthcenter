// Utilities
import { defineStore } from 'pinia'
import {ref} from "vue";

export const useAppStore = defineStore('app', () => {

  const officePhoneStr = "(802) 763-7575"
  const officePhone = ref("tel:8027637575")

  const patientPortalUrl = ref("https://12904.portal.athenahealth.com/")
  const facebookUrl = ref("https://www.facebook.com/southroyaltonhealthcenter/")

  const navLinks = ref([

   {
  id: 0,
  name: "Home",
  route: "/"
  },
  {
  id: 1,
  name: "Patient Portal",
  route: "patient-portal"
  },
  {
  id: 2,
  name: "About Us",
  route: "meet-our-providers-staff"
  },
  {
  id: 3,
  name: "Office Details",
  route: "office-details"
  },
  {
  id: 4,
  name: "New Patients",
  route: "new-patients"
  },
  {
  id: 5,
  name: "Expecting",
  route: "expecting"
  },
  {
  id: 6,
  name: "Patient Forms",
  route: "patient-forms"
  },
  {
  id: 7,
  name: "Services",
  route: "our-mission-and-services"
  },
  {
  id: 8,
  name: "School Visits",
  route: "school-visits"
  },
  {
  id: 9,
  name: "Contact Us",
  route: "contact"
  },
  ])

  // ID of active nav-link for styling purposes
  const activeId = ref(null)
  const setActiveId = (route) => {
    for(let i=0;  i < navLinks.value.length; i++) {
      if(navLinks.value[i].route === route) {
        activeId.value = navLinks.value[i].id
      }
    }
  }

  return {officePhoneStr, officePhone, patientPortalUrl, facebookUrl, navLinks, activeId,
          setActiveId,
  }
})
