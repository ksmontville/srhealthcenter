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

    <v-btn @click="openUrl(appStore.patientPortalUrl)" class="my-8" color="primary">
      Go to Patient Portal
    </v-btn>

    <p class="text-h6 text-primary font-weight-bold my-4">Pay Bill Online</p>
    <p class="body-text text-body-1 text-white">
    Patients can now pay their bill online safely and securely using Weave! Just press the button below or scan the QR code to begin.
    </p>

  <v-row>
    <v-col cols="12">
      <v-btn @click="openUrl(appStore.onlinePaymentUrl)" class="my-8" color="primary">
        Pay Bill
      </v-btn>
    </v-col>

<!--    <v-col cols="12">-->
<!--      <a href="https://weavebillpay.com/c9ad33ec" target="_blank"><img src="https://api.weaveconnect.com/payments/v1/download/qr?data=c9ad33ec"/></a>-->
<!--    </v-col>-->
  </v-row>

  </v-container>
</template>

<script setup>
  import { useAppStore } from "@/store/app";

  const appStore = useAppStore()

  const openUrl = (url) => {
    window.open(url)
  }

</script>

<style scoped>


</style>
