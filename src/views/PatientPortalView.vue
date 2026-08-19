<template>
  <v-container class="pa-8">
    <h1 class="text-display-large text-white text-center my-16">Patient Portal</h1>

    <v-row justify="center">
      <v-col cols="12" md="10" lg="9">
        <h2 class="text-title-large text-heading font-weight-bold my-4">
          Sign Up or Log In
        </h2>
        <p class="body-text text-body-large text-white">
          The Patient Portal is the easiest way to manage your appointments and
          communicate securely with your medical care provider.
        </p>
        <p class="body-text text-body-large text-white">
          Click the button below to sign up or log in to the patient portal.
        </p>

        <v-btn @click="openUrl(appStore.patientPortalUrl)" class="my-8" color="primary">
          Go to Patient Portal
        </v-btn>

        <h2 class="text-title-large text-heading font-weight-bold my-4">
          Pay Bill Online
        </h2>
        <p class="body-text text-body-large text-white">
          Patients can now pay their bill online safely and securely using Weave! Just
          press the button below to be taken to our encrypted online payment portal.
        </p>

        <v-row>
          <v-col cols="12">
            <v-btn
              @click="openUrl(appStore.onlinePaymentUrl)"
              class="my-8"
              color="primary"
            >
              Pay Bill
            </v-btn>
          </v-col>

          <!--    <v-col cols="12">-->
          <!--      <a href="https://weavebillpay.com/c9ad33ec" target="_blank"><img src="https://api.weaveconnect.com/payments/v1/download/qr?data=c9ad33ec"/></a>-->
          <!--    </v-col>-->
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useAppStore } from "@/store/app";
import { useSeo } from "@/composables/useSeo";

const appStore = useAppStore();

const openUrl = (url) => {
  window.open(url);
};

useSeo({
  title: "Patient Portal & Online Bill Pay",
  description:
    "Message your pediatric team securely, request appointments, access immunization records and pay your bill online through the South Royalton Health Center Patient Portal.",
});
</script>

<style scoped></style>
