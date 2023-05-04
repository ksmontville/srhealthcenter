<template>
  <v-container class="pa-8">
    <p class="text-h2 text-white text-center my-16">Patient Forms</p>

    <v-row align="center">
      <v-col cols="8">
        <p class="body-text text-body-1 text-white my-8">
          We are happy to provide our office forms for convenient online secure submission. Questions about which forms you
          need to fill out? Please call our office and our staff will assist you in preparing for your visit.
        </p>
      </v-col>

<!--      <v-col cols="4">-->
<!--        <v-img :src="playroom" alt="A child enjoying the playroom at South Royalton Health Center"  aspect-ratio="1.7"/>-->
<!--      </v-col>-->
    </v-row>

    <v-row id="newPatientForms">
      <v-col cols="12">
        <p class="text-h6 text-primary font-weight-bold">New Patient Forms</p>
      </v-col>

      <v-col cols="12">
        <p class="body-text text-body-1 text-white">
          Please fill out before your first appointment.
        </p>
      </v-col>

      <v-col cols="12" md="4">
        <v-list bg-color="transparent">
          <v-list-item v-for="item in patientForms[0].forms" :key="item.id">
            <v-icon :icon="mdiHospital" color="primary" />
            <a :href="item.link" target="_blank">{{ item.form }}</a>
            <small v-if="item.text"> ({{ item.text }})</small>
          </v-list-item>
        </v-list>
      </v-col>

<!--      <v-col md="8">-->
<!--        <v-img :src="playroom" alt="A child enjoying the playroom at South Royalton Health Center" max-width="400"/>-->
<!--      </v-col>-->
    </v-row>

    <v-row id="wellVisitForms">
      <v-col cols="12">
         <p class="text-h6 text-primary font-weight-bold my-4">Well Visits Forms</p>
      </v-col>
      <v-col cols="12">
        <p class="body-text text-body-1 text-white">
          Save time at your visit! Click on the links below and fill out the developmental screeners and health history
          updates electronically, it will be sent to our office securely and ready for your visit!
        </p>
      </v-col>

      <v-col>
        <v-list bg-color="transparent">
          <v-list-item v-for="item in patientForms[1].forms" :key="item.id">
            <v-icon :icon="mdiHospital" color="primary" />
            <a :href="item.link" target="_blank">{{ item.form }}</a>
            <small v-if="item.text"> ({{ item.text }})</small>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>

    <v-row id="mentalHealthVisits">
      <v-col cols="12">
        <p class="text-h6 text-primary font-weight-bold my-4">Mental Health Visits</p>
      </v-col>

      <v-col>
        <v-list bg-color="transparent">
          <v-list-item v-for="item in patientForms[2].forms" :key="item.id">
            <v-icon :icon="mdiHospital" color="primary" />
            <a :href="item.link" target="_blank">{{ item.form }}</a>
            <small v-if="item.text"> ({{ item.text }})</small>
          </v-list-item>
        </v-list>
      </v-col>

    </v-row>

    <v-row id="asthmaVisits">
      <v-col cols="12">
        <p class="text-h6 text-primary font-weight-bold my-4">Mental Health Visits</p>
      </v-col>

      <v-col>
        <v-list bg-color="transparent">
          <v-list-item v-for="item in patientForms[3].forms" :key="item.id">
            <v-icon :icon="mdiHospital" color="primary" />
            <a :href="item.link" target="_blank">{{ item.form }}</a>
            <small v-if="item.text"> ({{ item.text }})</small>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>

    <div data-secure-form="srhealthcenter-intake-form-child"></div>
  </v-container>
</template>

<script setup>
  import {mdiHospital} from "@mdi/js";
  import patientForms from '@/assets/patientForms.json'
  import playroom from '../../public/img/forms/playroom.jpg'

  const embedFormScript = document.createElement('script')
  embedFormScript.setAttribute('src', 'https://hushforms.com/f/public/javascript/embed-hush-form.js')
  document.head.appendChild(embedFormScript)


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
