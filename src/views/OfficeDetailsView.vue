<template>
  <v-container class="pa-8">
    <p class="text-display-large text-white text-center my-16">Office Details</p>

    <p class="text-title-large text-primary font-weight-bold my-4">Appointments</p>
    <p class="body-text text-body-large text-white">
      SRHC takes pride in offering a range of clinicians and appointment times
      to accommodate your schedule. Please
      <a :href="appStore.officePhone">call</a> our office to schedule your
      appointment and our front desk staff will work with you to find the best
      time for your family. We also offer appointments at several of the
      surrounding
      <router-link
        :to="{ path: 'school-visits' }"
        @click="appStore.setActiveId('school-visits')"
        >schools</router-link
      >, so feel free to ask if that would be appropriate for your child as
      well.
    </p>

    <p class="text-title-large text-primary font-weight-bold my-4">
      Insurance and Billing
    </p>
    <p class="body-text text-body-large text-white">
      Please call or
      <router-link
        :to="{ path: 'contact' }"
        @click="appStore.setActiveId('contact')"
        >contact us</router-link
      >
      via the portal for information specific to your insurance company and
      plan. We accept most plans except medicare, but are happy to discuss this
      further with you.
    </p>

    <p class="text-title-large text-primary font-weight-bold my-4">Payment Options</p>
    <p class="body-text text-body-large text-white">
      We accept checks, cash or credit cards and you can now pay through the
      <router-link
        :to="{ path: 'patient-portal' }"
        @click="appStore.setActiveId('patient-portal')"
        >portal</router-link
      >! We also offer a flexible payment plan. Please
      <router-link
        :to="{ path: 'contact' }"
        @click="appStore.setActiveId('contact')"
        >contact us</router-link
      >
      for details.
    </p>
  </v-container>

  <!--  Carousel -->
  <v-lazy>
    <v-container class="my-8">
      <v-sheet
        class="d-flex flex-column justify-center align-center rounded-lg mx-auto my-8"
        max-width="800"
        height="400"
        color="primary"
      >
        <p class="text-body-large text-white text-center font-weight-bold my-4">
          Photos of South Royalton Health Center
        </p>
        <small class="my-2">Click to Enlarge</small>
        <v-carousel color="white" cycle continuous>
          <v-carousel-item
            v-for="officePhoto in officePhotos"
            :key="officePhoto.id"
          >
            <v-img
              :src="officePhoto.image"
              :alt="officePhoto.alt"
              cover
              height="400"
              @click="openImage(officePhoto.image)"
            />
          </v-carousel-item>
        </v-carousel>
      </v-sheet>
    </v-container>
  </v-lazy>
</template>

<script setup>
import { useAppStore } from "@/store/app";
import srhcBuilding from "@/assets/img/office/srhc-building.jpg";
import srhcHandyHouse from "@/assets/img/office/srhc-handy-house.jpg";
import srhcSign from "@/assets/img/office/srhc-sign.jpg";
import examRoomThree from "@/assets/img/office/exam-room-3.jpg";
import examRoomFour from "@/assets/img/office/exam-room-4.jpg";
import examRoomFive from "@/assets/img/office/exam-room-5.jpg";
import examRoomSix from "@/assets/img/office/exam-room-six.jpg";

const appStore = useAppStore();

const openImage = (src) => {
  window.open(src);
};

const officePhotos = [
  {
    id: 0,
    image: srhcBuilding,
    alt: "The South Royalton Health Center historic building.",
  },
  {
    id: 1,
    image: srhcHandyHouse,
    alt: "The Handy Houses historic sign.",
  },
  {
    id: 2,
    image: srhcSign,
    alt: "The signage for South Royalton Health Center.",
  },
  {
    id: 3,
    image: examRoomThree,
    alt: "An exam room at South Royalton Health Center.",
  },
  {
    id: 4,
    image: examRoomFour,
    alt: "An exam room at South Royalton Health Center.",
  },
  {
    id: 5,
    image: examRoomFive,
    alt: "An exam room at South Royalton Health Center.",
  },
  {
    id: 6,
    image: examRoomSix,
    alt: "An exam room at South Royalton Health Center.",
  },
];
</script>

<style scoped>
a:not(.v-btn) {
  color: #f0ebce;
}

/*a:visited, router-link:visited {*/
/*  color: #AA8B56;*/
/*}*/

a:not(.v-btn):hover {
  color: #4e6c50;
}

a:not(.v-btn):focus {
  color: sandybrown;
}
</style>
