<template>
  <v-container class="pa-8">

    <p class="text-h2 text-white text-center my-16">Vaccine Information</p>

    <p class="body-text text-body-1 text-white my-4">
      South Royalton Health Center follows the immunization guidelines recommended by the American Academy of Pediatrics (AAP).
      For information about these vaccines and the diseases they protect against,
      please visit
      <a href="https://healthychildren.org/English/safety-prevention/immunizations/Pages/default.aspx" target="_blank">
      healthychildren.org</a> and the <a href="https://www.chop.edu/centers-programs/vaccine-education-center" target="_blank">Vaccine Education Center</a>.
    </p>

    <p class="body-text text-body-1 text-white my-4">
      For detailed informational sheets published by the Centers for Disease Control (CDC) please visit
      <a href="https://www.cdc.gov/vaccines/hcp/current-vis/" target="_blank">
        www.cdc.gov/vaccines/hcp/current-vis/</a>
    </p>

    <p class="text-h6 text-primary font-weight-bold my-4">Our Vaccine Philosophy</p>
    <p class="body-text text-body-1 text-white">
      Our practice believes that all children should receive the recommended vaccines according to the guidelines
      provided by the AAP and the CDC. Vaccines are safe and effective in preventing diseases and health complications
      in children and young adults. Regular vaccinations help children ward off infections, and are administered as one
      of the safest and best methods of disease prevention.
    </p>
    <p class="body-text text-body-1 text-white my-4">
      We are happy to discuss your concerns about vaccines at your child's next visit.
    </p>

    <v-list bg-color="primary" class="rounded mx-auto my-8" max-width="512">
      <h6 class="body-text text-body-1 text-white text-center pa-2"><strong>Why vaccinate?</strong></h6>
      <v-list-item>
        <v-icon :icon="mdiHospital" class="mx-2" color="white"/>Click
        <a href="https://www.healthychildren.org/English/safety-prevention/immunizations/Pages/Why-I-Vaccinate-Parent-Testimonials.aspx?_gl=1*188lr2s*_ga*NTM5Mjg4MDQ2LjE2ODMwNTg0NTM.*_ga_FD9D3XZVQQ*MTY4MzgzMTgyMS4zLjAuMTY4MzgzMTgyNi4wLjAuMA..&_ga=2.200534894.1563832976.1683831821-539288046.1683058453" target="_blank">
          here</a> for an informative article and parent testimonials.
      </v-list-item>

      <v-list-item>
        <v-icon :icon="mdiHospital" class="mx-2" color="white"/><a href="https://www.healthychildren.org/English/safety-prevention/immunizations/Pages/Vaccine-Safety-The-Facts.aspx" target="_blank">Vaccine Safety: The Facts</a> from the AAP.
      </v-list-item>

      <v-list-item>
        <v-icon :icon="mdiHospital" class="mx-2" color="white"/>Dr. Ari Brown's informative
        <a href="https://www.youtube.com/watch?v=-QKyI2ujtvg" target="_blank">
        video</a> on the vaccine schedule.
      </v-list-item>
    </v-list>

    <p class="text-h6 text-primary font-weight-bold my-4">Recommended Immunization Schedule</p>
    <p class="body-text text-body-1 text-white">
      <v-list bg-color="transparent">
        <v-list-item v-for="vaccineLink in vaccineLinks" :key="vaccineLink.id">
          <a :href="vaccineLink.url" target="_blank">
            <v-icon :icon="mdiHospital" class="mx-2" color="secondary"/>{{ vaccineLink.text }}</a>
        </v-list-item>
      </v-list>
    </p>
  </v-container>
</template>

<script setup>
  import {mdiHospital} from "@mdi/js";

  const vaccineLinks = [
    {
      id: 0,
      text: "Recommended Immunization Schedules",
      url: "https://www.healthychildren.org/English/safety-prevention/immunizations/Pages/Recommended-Immunization-Schedules.aspx"
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
    color: #4E6C50;
  }

  a:focus, router-link:focus {
    color: sandybrown;
  }

</style>
