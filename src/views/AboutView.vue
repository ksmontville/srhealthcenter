<template>
  <v-container class="pa-8">
    <h1 class="text-display-large text-white text-center my-16">
      Comprehensive Pediatric Care for Families in the Upper Valley
    </h1>

    <v-row justify="center">
      <v-col cols="12" md="10" lg="9">
        <p class="body-text text-body-large text-white mb-4">
          At <strong>South Royalton Health Center</strong>, we believe every child
          deserves compassionate, relationship-based medical care close to home. As an
          <strong>independent, woman-owned pediatric practice</strong>, we provide
          comprehensive care for
          <strong>newborns, infants, children, adolescents, and young adults</strong>
          throughout South Royalton, Bethel, Sharon, Tunbridge, Randolph, Chelsea,
          Woodstock, Strafford, Norwich, Hartford, and
          <strong>the greater Upper Valley of Vermont and New Hampshire</strong>.
        </p>
        <p class="body-text text-body-large text-white mb-4">
          We provide comprehensive
          <router-link to="/our-mission-and-services">
            pediatric primary care</router-link
          >
          — from <strong>newborn care</strong> and
          <strong>preventive medicine</strong> to <strong>behavioral health</strong>,
          <strong>adolescent medicine</strong>, and
          <router-link to="/integrative-pediatric-care">
            integrative pediatric services</router-link
          >
          — for children and families throughout the
          <strong>Upper Valley</strong>.
        </p>
        <p class="body-text text-body-large text-white mb-4">
          Our goal is simple: to provide exceptional
          <strong>whole-child pediatric care</strong> while building lasting
          relationships with the families we serve.
        </p>
        <p class="body-text text-body-large text-white">
          Unlike many larger healthcare systems, you'll see
          <strong>independent pediatricians</strong> who know your child, understand
          your family's goals, and work closely with you through every stage of
          development.
        </p>
      </v-col>
    </v-row>

    <h2 class="text-headline-small text-white text-center mt-16 mb-2">
      It's a Pleasure to Meet You
    </h2>
    <p class="text-body-large text-white text-center mb-4">
      To reach our office staff please call our main office number at
      <a :href="appStore.officePhone">{{ appStore.officePhoneStr }}</a>
    </p>

    <staff-cards />

    <v-row justify="center" class="mt-8">
      <v-col cols="12" md="10" lg="9">
        <p class="body-text text-body-large text-white text-center">
          Beyond the exam room, Dr. Ashley contributes to pediatric medicine across
          Vermont through advocacy, medical education, and community partnerships.
          <router-link to="/community-leadership-media-advocacy">
            Read about her community leadership, media, and advocacy work</router-link
          >.
        </p>
      </v-col>
    </v-row>
  </v-container>

  <!-- Office photo carousel, relocated here from the retired Office Details page. -->
  <v-container class="my-8">
    <!-- Heading deliberately outside v-lazy: lazy content is absent from the DOM
         until scrolled into view, which would hide it from crawlers. -->
    <h2 class="text-headline-small text-white text-center mb-4">
      Photos of South Royalton Health Center
    </h2>
    <v-lazy>
      <v-sheet
        class="d-flex flex-column justify-center align-center rounded-lg mx-auto my-8"
        max-width="800"
        height="400"
        color="primary"
      >
        <small class="my-2">Click to Enlarge</small>
        <v-carousel color="white" cycle continuous>
          <v-carousel-item v-for="officePhoto in officePhotos" :key="officePhoto.id">
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
    </v-lazy>
  </v-container>
</template>

<script setup>
import StaffCards from "@/components/StaffCards.vue";
import { useAppStore } from "@/store/app";
import srhcBuilding from "@/assets/img/office/srhc-building.jpg";
import srhcHandyHouse from "@/assets/img/office/srhc-handy-house.jpg";
import srhcSign from "@/assets/img/office/srhc-sign.jpg";
import examRoomThree from "@/assets/img/office/exam-room-3.jpg";
import examRoomFour from "@/assets/img/office/exam-room-4.jpg";
import examRoomFive from "@/assets/img/office/exam-room-5.jpg";
import examRoomSix from "@/assets/img/office/exam-room-six.jpg";
import { useSeo } from "@/composables/useSeo";
import { physicianSchema } from "@/config/schema";

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

useSeo({
  title: "Meet Our Pediatric Team",
  description:
    "Meet Dr. Ashley Miller and the clinicians, nurses and staff of South Royalton Health Center — an independent, woman-owned pediatric practice serving the Upper Valley of Vermont and New Hampshire.",
  schema: [physicianSchema()],
});
</script>

<style scoped>
a:not(.v-btn) {
  color: rgb(var(--v-theme-highlight));
}

a:not(.v-btn):hover {
  color: rgb(var(--v-theme-heading));
}

a:not(.v-btn):focus {
  color: sandybrown;
}
</style>
