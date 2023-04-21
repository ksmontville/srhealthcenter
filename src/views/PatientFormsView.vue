<template>
  <v-container class="pa-8">

    <p class="text-h2 text-white text-center my-16">Patient Forms</p>
    <p class="body-text text-body-1 text-white my-8">
      We are happy to provide our office forms for convenient online secure submission. Questions about which forms you
      need to fill out? Please call our office and our staff will assist you in preparing for your visit.
    </p>

    <v-row>
      <v-col>
        <p class="text-h6 text-primary font-weight-bold my-4">New Patient Forms</p>
        <p class="body-text text-body-1 text-white">
          Please fill out before your first appointment.
        </p>
      </v-col>

      <v-col>
        <v-list>
          <v-list-item>One</v-list-item>
          <v-list-item>Two</v-list-item>
        </v-list>
      </v-col>

      <v-col>
        <v-img :src="playroom" alt="A child enjoying the playroom at South Royalton Health Center"  aspect-ratio="1.7"/>
      </v-col>
    </v-row>


    <p class="text-h6 text-primary font-weight-bold my-4">Well Visits Forms</p>
    <p class="body-text text-body-1 text-white">
      Save time at your visit! Click on the links below and fill out the developmental screeners and health history
      updates electronically, it will be sent to our office securely and ready for your visit!
    </p>

    <p class="text-h6 text-primary font-weight-bold my-4">Mental Health Visits</p>
    <p class="body-text text-body-1 text-white"></p>

    <p class="text-h6 text-primary font-weight-bold my-4">Asthma Visits</p>
    <p class="body-text text-body-1 text-white"></p>

  </v-container>
</template>

<script setup>
  import playroom from '../../public/img/forms/playroom.jpg'
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
