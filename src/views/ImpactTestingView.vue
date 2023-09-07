<template>

  <v-container class="pa-8">

    <p class="text-h2 text-white text-center my-16">ImPACT Concussion Testing</p>

    <p class="body-text text-body-1 text-white my-4">
      Because <strong>concussions can happen to anyone, anywhere,</strong> and they can change your life for the worse if
      you’re not prepared, <strong>ImPACT™</strong> (Immediate Post-Concussion Assessment and Cognitive Testing) should
      be part of your return to school plan. Just like an annual physical, it is recommended that you take a
      baseline test every year.
    </p>

    <p class="body-text text-body-1 text-white my-4">
      In order to take the baseline ImPACT Test <strong>for free</strong> you must be a patient SRHC or a student of one of the
      HealthHubVT Schools.
    </p>

    <p class="body-text text-body-1 text-white my-4">
      Once you complete this baseline test, your results will be stored in our records. If you have a head injury
      or think you have a concussion any time after taking the test, make an appointment at SRHC or
      HealthHubVT within 2-3 days. We will evaluate your injury and possibly repeat the ImPACT test at the
      clinic and compare the results with your baseline test results. This will help us manage your recovery
      from the concussion and effectively guide your return to play.
    </p>

    <p class="bg-primary body-text text-body-1 text-white text-center pa-2 my-4 rounded">
      <strong>Notes Before Starting the Test</strong>
    </p>

    <p class="body-text text-body-1 text-white my-4">
      This test is intended as <strong>baseline testing only</strong> for people who are currently <strong>symptom-free</strong>.
      If you need to be evaluated for a recent head injury, call the office directly at 802-763-7575 to make an appointment;
      we will perform the ImPACT test in the office if necessary.

      <v-list class="body-text text-body-2 pa-4 my-4" bg-color="highlight" rounded>
        <v-list-item>
          <v-icon :icon="mdiHospital" class="mx-2" color="secondary"/>
          <strong>DO NOT</strong> take this test if you have recently sustained a head injury and/or are currently experiencing symptoms.
        </v-list-item>

        <v-list-item>
          <v-icon :icon="mdiHospital" class="mx-2" color="secondary"/>
          Be sure that you have at least <strong>30 minutes</strong> to take the test.
        </v-list-item>

        <v-list-item>
          <v-icon :icon="mdiHospital" class="mx-2" color="secondary"/>
          We are able to interpret test results for <strong>ages 12 and up</strong>. Younger children should not take this test.
        </v-list-item>

        <v-list-item>
          <v-icon :icon="mdiHospital" class="mx-2" color="secondary"/>
          Adult supervision is highly recommended for ages 12-17.
        </v-list-item>

        <v-list-item>
          <v-icon :icon="mdiHospital" class="mx-2" color="secondary"/>
          Do not use a laptop computer unless you have an external mouse or touchpad, touch screens and cell phones/ipads will not work.
        </v-list-item>

        <v-list-item>
          <v-icon :icon="mdiHospital" class="mx-2" color="secondary"/>
          Remember that we will use this test to help treat you if you get a concussion, so take the test seriously and try your best.
        </v-list-item>

        <v-list-item>
          <v-icon :icon="mdiHospital" class="mx-2" color="secondary"/>
          This is a difficult test; do not be discouraged by incorrect answers. Just continue to give your best effort.
        </v-list-item>

        <v-list-item>
          <v-icon :icon="mdiHospital" class="mx-2" color="secondary"/>
          Occasionally, the results of a baseline test will return to us as being potentially “invalid.” This
          occurs in a small percentage of cases and may be due to multiple reasons, including not
          understanding the directions, not paying attention, a bad environment, feeling poorly at the
          time of the test, an underlying learning disability, etc. It does not necessarily indicate any
          physical abnormality. If this occurs with your baseline test, we will call you with
          recommendations on how to proceed.
        </v-list-item>
      </v-list>
    </p>

    <v-row justify="center">
      <v-btn class="ma-4" size="x-large" color="primary" @click="openLink(testLink)">TAKE THE TEST</v-btn>
    </v-row>
      <p class="body-text text-body-1 text-white text-center my-4">
        <em>Please contact SRHC for an access code if you do not already have one.</em>
      </p>
  </v-container>

</template>

<script setup>

  import {mdiHospital} from "@mdi/js";

  const testLink = "https://www.impacttestonline.com/htmllauncher/"

  const openLink = (link) => {
    window.open(link)
  }

</script>

<style scoped>

</style>
