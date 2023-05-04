<template>
  <v-container class="pa-8">
    <p class="text-h2 text-white text-center my-16">Patient Forms</p>

    <p class="body-text text-body-1 text-white my-8">
      We are happy to provide our office forms for convenient online secure submission. Questions about which forms you
      need to fill out? Please call our office and our staff will assist you in preparing for your visit.
    </p>

    <patient-forms-expansion-panels />

  </v-container>
</template>

<script setup>
  import PatientFormsExpansionPanels from "@/components/PatientFormsExpansionPanels.vue";

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
