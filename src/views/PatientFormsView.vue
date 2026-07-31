<template>
  <v-container class="pa-8">
    <h1 class="text-display-large text-white text-center my-16">Patient Forms</h1>

    <v-row justify="center">
      <v-col cols="12" md="10" lg="9">
        <p class="body-text text-body-large text-white my-8">
          We are happy to provide our office forms for convenient online secure
          submission. Questions about which forms you need to fill out? Please call our
          office and our staff will assist you in preparing for your visit.
        </p>

        <patient-forms-accordion />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import PatientFormsAccordion from "@/components/PatientFormsAccordion.vue";
import { useSeo } from "@/composables/useSeo";

useSeo({
  title: "Patient Forms",
  description:
    "Download and complete South Royalton Health Center patient forms online — new patient paperwork, well visit screeners, mental health and asthma visit forms.",
});
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
