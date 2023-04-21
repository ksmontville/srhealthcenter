<template>
  <v-container class="pa-8">
    <p class="text-h2 text-white text-center my-16">Patient Portal</p>

    <p class="text-h6 text-primary font-weight-bold my-4">Sign Up or Log In</p>
    <p class="body-text text-body-1 text-white">
    The Patient Portal is the easiest way to manage your appointments and communicate securely with your medical
    care provider.
    </p>
    <p class="body-text text-body-1 text-white">
    Click the button below to sign up or log in to the patient portal.
    </p>

    <v-btn @click="openPatientPortal(appStore.patientPortalUrl)" class="my-8" color="primary">
      Go to Patient Portal
    </v-btn>
  </v-container>
</template>

<script setup>
  import { useAppStore } from "@/store/app";

  const appStore = useAppStore()

  const openPatientPortal = (url) => {
    window.open(url)
  }

</script>

<style scoped>


</style>
