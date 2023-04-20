<template>
  <v-container>

    <p class="text-h2 text-white text-center my-16">Vaccine Information</p>

    <p class="body-text text-body-1 text-white my-4">
      South Royalton Health Center follows the immunization guidelines recommended by the American Academy of Pediatrics (AAP).
      For information about these vaccines and the diseases they protect against,
      please visit
      <a href="https://healthychildren.org/English/safety-prevention/immunizations/Pages/default.aspx" target="_blank">
      healthychildren.org.</a>
    </p>

    <p class="body-text text-body-1 text-white my-4">
      For detailed informational sheets published by the Centers for Disease Control (CDC) please visit
      <a href="https://www.cdc.gov/vaccines/pubs/vis/" target="_blank">
        www.cdc.gov/vaccines/pubs/vis/</a>
    </p>

    <p class="text-h6 text-white font-weight-bold my-4">Our Vaccine Philosophy</p>
    <p class="body-text text-body-1 text-white">
      Our practice believes that all children should receive the recommended vaccines according to the guidelines
      provided by the AAP and the CDC. Vaccines are safe and effective in preventing diseases and health complications
      in children and young adults. Regular vaccinations help children ward off infections, and are administered as one
      of the safest and best methods of disease prevention.
    </p>
    <p class="body-text text-body-1 text-white my-4">
      We are happy to discuss your concerns about vaccines at your child's next visit.
    </p>
    <p class="body-text text-body-1 text-white my-4">
      Why vaccinate? click
      <a href="http://www.parents.com/videos/v/75585933/vaccines-for-babies-and-older-kids.htm" target="_blank">
        here [LINK BROKEN]</a>
      for video.</p>
    <p class="body-text text-body-1 text-white my-4">
      <a href="https://www.healthychildren.org/English/safety-prevention/immunizations/Pages/Vaccine-Safety-The-Facts.aspx" target="_blank">
        Vaccine Safety: The Facts</a>
      from the AAP.
    </p>

    <p class="text-h6 text-white font-weight-bold my-4">Recommended Immunization Schedule</p>
    <p class="body-text text-body-1 text-white">
      <v-list bg-color="transparent">
        <v-list-item v-for="vaccineLink in vaccineLinks" :key="vaccineLink.id">
          <a :href="vaccineLink.url" target="_blank">
            <v-icon :icon="mdiHospital" class="mx-2" />{{ vaccineLink.text }}</a>
        </v-list-item>
      </v-list>
    </p>

    <p class="body-text text-body-1 text-white my-4">
      Check out Dr. Ari Brown's informative
      <a href="https://www.youtube.com/watch?v=-QKyI2ujtvg" target="_blank">
        video</a>
      on the vaccine schedule.
    </p>

  </v-container>
</template>

<script setup>
  import {mdiHospital} from "@mdi/js";

  const vaccineLinks = [
    {
      id: 0,
      text: "0-6 Years -Schedule for Persons Aged 0 Through 6 Years",
      url: "https://www.cdc.gov/vaccines/schedules/easy-to-read/child.html"
    },
    {
      id: 1,
      text: "7-18 Years-Schedule for Persons Aged 7 Through 18 Years",
      url: "https://www.cdc.gov/vaccines/schedules/easy-to-read/preteen-teen.html"
    },
    {
      id: 2,
      text: "Catch-up Schedule -Schedule for Persons Aged 4 Months Through 18 Years Who Start Late or Who Are More than One Month Behind",
      url: "https://www.cdc.gov/vaccines/schedules/hcp/child-adolescent.html"
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
