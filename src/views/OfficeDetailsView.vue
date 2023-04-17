<template>
  <v-container>

    <p class="text-h2 text-white text-center my-16">Office Details</p>

    <p class="text-body-1 text-white font-weight-bold my-4">Appointments</p>
    <p class="body-text text-body-2 text-white">SRHC takes pride in offering a range of providers and appointment times to accommodate
      your schedule. Please <a :href="appStore.officePhone">call</a> our office to schedule your appointment and our
      front desk staff will work with you to find the best time for your family.
      We also offer appointments at several of the surrounding <router-link :to="{path: 'school-visits'}">schools</router-link>,
      so feel free to ask if that would be appropriate for your child as well.
    </p>

    <p class="text-body-1 text-white font-weight-bold  my-4">Insurance and Billing</p>
    <p class="body-text text-body-2 text-white">
      Please call or <router-link :to="{path: 'contact'}">contact us</router-link> via the portal for information
      specific to your insurance company and plan. We accept most plans except medicare, but are happy to discuss this further with you.
    </p>

    <p class="text-body-1 text-white font-weight-bold my-4">Payment Options</p>
    <p class="body-text text-body-2 text-white">
      We accept checks, cash or credit cards and you can now pay through the <router-link :to="{path: 'patient-portal'}">portal</router-link>!
      We also offer a flexible payment plan. Please <router-link :to="{path: 'contact'}">contact us</router-link> for details.
    </p>

  </v-container>

  <v-container class="my-8">

    <p class="text-body-1 text-white text-center font-weight-bold my-4">Photos of our Office</p>
    <v-carousel color="white" cycle hide-delimiter-background>

<!--      <template v-slot:prev="{ props }">-->
<!--        <v-btn variant="flat" color="highlight" @click="props.onClick">Previous</v-btn>-->
<!--      </template>-->

<!--      <template v-slot:next="{ props }">-->
<!--        <v-btn variant="flat" color="highlight" @click="props.onClick">Next</v-btn>-->
<!--      </template>-->

      <v-carousel-item v-for="officePhoto in officePhotos" :key="officePhoto.id">
        <v-img class="rounded-lg" :src="officePhoto.image" :alt="officePhoto.alt" cover min-height="400"/>
      </v-carousel-item>
    </v-carousel>

  </v-container>


</template>

<script setup>
  import { useAppStore } from "@/store/app";
  import officeOne from '../../public/img/office/office-1.jpg'
  import officeTwo from '../../public/img/office/office-2.jpg'
  import officeThree from '../../public/img/office/office-3.jpg'
  import bookshelf from '../../public/img/office/bookshelf.jpg'
  import examRoomOne from '../../public/img/office/examroom-1.jpg'
  import examRoomTwo from '../../public/img/office/examroom-2.jpg'

  const appStore = useAppStore()

  const officePhotos = [
    {
      id: 0,
      image: officeOne,
      alt: "Checkin desk at South Royalton Health Center."
    },
    {
      id: 1,
      image: officeTwo,
      alt: "Playroom at South Royalton Health Center."
    },
    {
      id: 2,
      image: officeThree,
      alt: "An office workspace at South Royalton Health Center."
    },
    {
      id: 3,
      image: bookshelf,
      alt: "A bookshelf for patients who are waiting to be seen."
    },
    {
      id: 4,
      image: examRoomOne,
      alt: "An exam room at South Royalton Health Center."
    },
    {
      id: 5,
      image: examRoomTwo,
      alt: "Another exam room at South Royalton Health Center."
    },
    {
      id: 6,
      image: bookshelf,
      alt: "Bookshelf for children in the office space."
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
    color: #AA8B56;
  }

  a:focus, router-link:focus {
    color: sandybrown;
  }

</style>
