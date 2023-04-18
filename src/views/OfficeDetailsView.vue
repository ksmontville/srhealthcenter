<template>
  <v-container>

    <p class="text-h2 text-white text-center my-16">Office Details</p>

    <p class="text-h6 text-white font-weight-bold my-4">Appointments</p>
    <p class="body-text text-body-1 text-white">SRHC takes pride in offering a range of providers and appointment times to accommodate
      your schedule. Please <a :href="appStore.officePhone">call</a> our office to schedule your appointment and our
      front desk staff will work with you to find the best time for your family.
      We also offer appointments at several of the surrounding
      <router-link :to="{path: 'school-visits'}" @click="appStore.setActiveId('school-visits')">schools</router-link>,
      so feel free to ask if that would be appropriate for your child as well.
    </p>

    <p class="text-h6 text-white font-weight-bold my-4">Insurance and Billing</p>
    <p class="body-text text-body-1 text-white">
      Please call or <router-link :to="{path: 'contact'}" @click="appStore.setActiveId('contact')">contact us</router-link> via the portal for information
      specific to your insurance company and plan. We accept most plans except medicare, but are happy to discuss this further with you.
    </p>

    <p class="text-h6 text-white font-weight-bold my-4">Payment Options</p>
    <p class="body-text text-body-1 text-white">
      We accept checks, cash or credit cards and you can now pay through the
      <router-link :to="{path: 'patient-portal'}" @click="appStore.setActiveId('patient-portal')">portal</router-link>!
      We also offer a flexible payment plan.
      Please <router-link :to="{path: 'contact'}" @click="appStore.setActiveId('contact')">contact us</router-link> for details.
    </p>

  </v-container>

<!--  Carousel -->
  <v-container class="my-8">

    <v-sheet class="d-flex flex-column justify-center align-center rounded-lg mx-auto my-8"
             max-width="800" height="400" color="primary">

      <p class="text-body-1 text-white text-center font-weight-bold my-4">
        Photos of South Royalton Health Center
      </p>
      <small class="my-2">Click to Enlarge</small>
      <v-carousel color="white" cycle continuous>

        <v-carousel-item v-for="officePhoto in officePhotos" :key="officePhoto.id">
          <v-img :src="officePhoto.image" :alt="officePhoto.alt" cover height="400"
                 @click="openImage(officePhoto.image)"/>
        </v-carousel-item>
      </v-carousel>

    </v-sheet>
 </v-container>

</template>

<script setup>
  import { useAppStore } from "@/store/app";
  import srhcBuilding from '../../public/img/office/srhc-building.jpg'
  import srhcEntrance from '../../public/img/office/srhc-entrance.jpg'
  import srhcSign from '../../public/img/office/srhc-sign.jpg'
  import srhcHandyHouse from '../../public/img/office/srhc-handy-house.jpg'
  import officeOne from '../../public/img/office/office-1.jpg'
  import officeTwo from '../../public/img/office/office-2.jpg'
  import officeThree from '../../public/img/office/office-3.jpg'

  const appStore = useAppStore()

  const openImage = (src) => {
    window.open(src)
  }

  const officePhotos = [
    {
      id: 0,
      image: srhcBuilding,
      alt: "The South Royalton Health Center historic building."
    },
    {
      id: 1,
      image: srhcEntrance,
      alt: "The entrance to South Royal Health Center."
    },
    {
      id: 2,
      image: srhcSign,
      alt: "The South Royal Health Center signpost."
    },
    {
      id: 3,
      image: srhcHandyHouse,
      alt: "The Handy Houses historic sign."
    },
    {
      id: 4,
      image: officeOne,
      alt: "Checkin desk at South Royalton Health Center."
    },
    {
      id: 5,
      image: officeTwo,
      alt: "Playroom at South Royalton Health Center."
    },
    {
      id: 6,
      image: officeThree,
      alt: "An office workspace at South Royalton Health Center."
    },
  ]

</script>

<style scoped>

  a, router-link {
    color: #F0EBCE;
  }

  /*a:visited, router-link:visited {*/
  /*  color: #AA8B56;*/
  /*}*/

  a:hover, router-link:hover {
    color: #4E6C50;
  }

  a:focus, router-link:focus {
    color: sandybrown;
  }

</style>
