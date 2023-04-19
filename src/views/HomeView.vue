<template>

  <v-container class="my-8" id="hero">
    <v-row>
    <v-sheet color="primary" class="rounded-lg ma-auto pa-4" elevation="16">
      <v-col cols="12">

        <v-img :src="logo" alt="South Royal Health Center Logo" max-height="400"></v-img>
      </v-col>

      <v-col cols="12" class="my-4">
        <p class="hero-text text-h2 text-white text-center">Welcome to Your Medical Home</p>
      </v-col>

      <v-col class="d-flex flex-column align-center justify-center my-4">
        <v-btn :href="appStore.officePhone" color="highlight" size="large">
          Call for Appointments
        </v-btn>
      </v-col>

      <v-col class="d-flex flex-column align-center justify-center my-4">
        <v-btn color="highlight" size="large" @click="openPatientPortal(appStore.patientPortalUrl)">
          Patient Portal
        </v-btn>
      </v-col>
</v-sheet>
    </v-row>
    <v-row class="my-16" justify="center" align="start">
      <v-col cols="12" md="8">
        <p class="body-text text-body-1 text-white">
          {{ aboutUsText }}
        </p>
      </v-col>

      <v-col cols="12" md="4">
        <testimonial-cards />
      </v-col>
    </v-row>
  </v-container>

</template>

<script setup>
  import {useAppStore} from "@/store/app";
  import TestimonialCards from "@/components/TestimonialCards.vue";
  import logo from '../assets/img/srhc-logo-white.png'

  const appStore = useAppStore()

  const openPatientPortal = (url) => {
    window.open(url)
  }

  const aboutUsText = "Welcome to South Royalton Health Center. If you're looking for accessible pediatric care, " +
  "a child–friendly environment, and a responsive team of pediatricians in the Upper Valley/Central Vermont, " +
  "then look no further. A medical home is defined as patient-centered, comprehensive, team-based, coordinated, accessible, " +
  "and focused on quality and safety, and that's us! We love kids, and our goal is to have a positive impact in the " +
  "lives of children by providing exceptional health care and compassionate service to the families we serve.\n" +
  "At South Royalton Health Center, we offer a full range of pediatric care including prenatal visits for " +
  "expecting parents, well–child check–ups, immunizations, sick appointments, mental health and women's health care. " +
  "Our caring team is committed to providing quality service in a comfortable, safe office setting where children and " +
  "parents can feel at ease. We also set aside time to equip parents with the tools and resources necessary for the " +
  "development of healthy children from birth to adolescence. We have a dedicated nurse care coordinator to help " +
  "patients and families coordinate their specialty care and community/school resources to achieve the best quality " +
  "of life possible and to help in the transition to adult medicine.\n"

</script>

<style scoped>

  .hero-text {
    font-family: "Kalam", Roboto, Arial, sans-serif !important;
  }
</style>
