<template>

  <v-container class="my-8" id="hero">
    <v-row>
      <v-col cols="12">
        <v-img :src="logo" alt="South Royal Health Center Logo" max-height="400">
        </v-img>
      </v-col>

      <v-col cols="12" class="my-4">
        <p class="hero-text text-h2 text-white text-center">Welcome to Your Medical Home</p>
      </v-col>

      <v-col class="d-flex flex-column align-center justify-center my-4">
        <v-btn :href="appStore.officePhone" color="accent">
          Call for Appointments
        </v-btn>
      </v-col>
    </v-row>
  </v-container>


  <v-sheet id="expansionPanels" max-width="800" class="rounded-lg mx-auto my-16">
    <home-view-expansion-panels />
  </v-sheet>


<!--  <v-sheet id="contactInfo" max-width="800" class="rounded-lg mx-auto my-16">-->
<!--    <home-view-contact-info />-->
<!--  </v-sheet>-->

</template>

<script setup>
  import {useAppStore} from "@/store/app";
  import HomeViewExpansionPanels from "@/components/HomeViewExpansionPanels.vue";
  import HomeViewContactInfo from "@/components/ContactInfo.vue";
  import logo from '../assets/img/srhc-logo-white.png'

  const appStore = useAppStore()

</script>

<style scoped>

  .hero-text {
    font-family: "Kalam", Roboto, Arial, sans-serif !important;
  }
</style>
