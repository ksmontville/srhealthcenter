// Utilities
import { defineStore } from 'pinia'
import {ref} from "vue";

export const useAppStore = defineStore('app', () => {

  const officePhone = "tel:8027637575"

  const navLinks = ref([
  {
  id: 0,
  name: "Patient Portal",
  route: "patient-portal"
  },
  {
  id: 1,
  name: "About Us",
  route: "about"
  },
  {
  id: 2,
  name: "Office Details",
  route: "office-details"
  },
  {
  id: 3,
  name: "New Patients",
  route: "new-patients"
  },
  {
  id: 4,
  name: "Expecting",
  route: "expecting"
  },
  {
  id: 5,
  name: "Patient Forms",
  route: "forms"
  },
  {
  id: 6,
  name: "Education",
  route: "education"
  },
  {
  id: 7,
  name: "Services",
  route: "services"
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

  return {officePhone, navLinks, activeId,
          setActiveId,
  }
})
