<template>
  <v-container class="pa-8">
    <h1 class="text-display-large text-white text-center my-16">Vaccine Information</h1>

    <v-row justify="center">
      <v-col cols="12" md="10" lg="9">
        <p class="body-text text-body-large text-white my-4">
          South Royalton Health Center follows the immunization guidelines recommended
          by the American Academy of Pediatrics (AAP). For information about these
          vaccines and the diseases they protect against, please visit
          <a
            href="https://healthychildren.org/English/safety-prevention/immunizations/Pages/default.aspx"
            target="_blank"
            rel="noopener noreferrer"
          >
            healthychildren.org</a
          >
          and the
          <a
            href="https://www.chop.edu/centers-programs/vaccine-education-center"
            target="_blank"
            rel="noopener noreferrer"
            >Vaccine Education Center</a
          >.
        </p>

        <h2 class="text-title-large text-primary font-weight-bold my-4">
          Our Vaccine Philosophy
        </h2>
        <p class="body-text text-body-large text-white">
          Our practice believes that all children should receive the recommended
          vaccines according to the guidelines provided by the AAP. Vaccines are safe
          and effective in preventing diseases and health complications in children and
          young adults. Regular vaccinations help children ward off infections, and are
          administered as one of the safest and best methods of disease prevention.
        </p>
        <p class="body-text text-body-large text-white my-4">
          We are happy to discuss your concerns about vaccines at your child's next
          visit.
        </p>

        <v-list bg-color="primary" class="rounded mx-auto my-8" max-width="512">
          <p class="body-text text-body-large text-white text-center pa-2">
            <strong>Why vaccinate?</strong>
          </p>
          <v-list-item>
            <v-icon :icon="mdiHospital" class="mx-2" color="white" />Click
            <a
              href="https://www.healthychildren.org/English/safety-prevention/immunizations/Pages/Why-I-Vaccinate-Parent-Testimonials.aspx?_gl=1*188lr2s*_ga*NTM5Mjg4MDQ2LjE2ODMwNTg0NTM.*_ga_FD9D3XZVQQ*MTY4MzgzMTgyMS4zLjAuMTY4MzgzMTgyNi4wLjAuMA..&_ga=2.200534894.1563832976.1683831821-539288046.1683058453"
              target="_blank"
              rel="noopener noreferrer"
            >
              here</a
            >
            for an informative article and parent testimonials.
          </v-list-item>

          <v-list-item>
            <v-icon :icon="mdiHospital" class="mx-2" color="white" /><a
              href="https://www.healthychildren.org/English/safety-prevention/immunizations/Pages/Vaccine-Safety-The-Facts.aspx"
              target="_blank"
              rel="noopener noreferrer"
              >Vaccine Safety: The Facts</a
            >
            from the AAP.
          </v-list-item>

          <v-list-item>
            <v-icon :icon="mdiHospital" class="mx-2" color="white" />Dr. Ari Brown's
            informative
            <a
              href="https://www.youtube.com/watch?v=-QKyI2ujtvg"
              target="_blank"
              rel="noopener noreferrer"
            >
              video</a
            >
            on the vaccine schedule.
          </v-list-item>
        </v-list>

        <h2 class="text-title-large text-primary font-weight-bold my-4">
          Recommended Immunization Schedule
        </h2>
        <p class="body-text text-body-large text-white">
          <v-list bg-color="transparent">
            <v-list-item v-for="vaccineLink in vaccineLinks" :key="vaccineLink.id">
              <a :href="vaccineLink.url" target="_blank" rel="noopener noreferrer">
                <v-icon :icon="mdiHospital" class="mx-2" color="secondary" />{{
                  vaccineLink.text
                }}</a
              >
            </v-list-item>
          </v-list>
        </p>

        <!-- <p class="body-text text-body-large text-white my-4">
      For detailed informational sheets published by the Centers for Disease
      Control (CDC) please visit
      <a href="https://www.cdc.gov/vaccines/hcp/current-vis/" target="_blank"
        rel="noopener noreferrer">
        www.cdc.gov/vaccines/hcp/current-vis/</a
      >
    </p> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { mdiHospital } from "@mdi/js";

const vaccineLinks = [
  {
    id: 0,
    text: "Recommended Immunization Schedules",
    url: "https://www.healthychildren.org/English/safety-prevention/immunizations/Pages/Recommended-Immunization-Schedules.aspx",
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
