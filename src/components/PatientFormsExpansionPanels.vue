<template>

  <v-sheet class="rounded mx-auto" elevation="8">

    <v-expansion-panels variant="accordion">
      <v-expansion-panel v-for="index in patientForms" :key="index.id" bg-color="secondary">

        <v-expansion-panel-title color="primary">
          {{ index.type }}
        </v-expansion-panel-title>

        <v-expansion-panel-text>
          <p v-if="index.text" class="body-text text-body-1 text-white my-4">{{ index.text }}</p>

          <v-list bg-color="transparent">
            <v-list-item v-for="item in index.forms" :key="item.id">
              <v-icon :icon="mdiHospital" color="white" />
              <a :href="item.link" target="_blank">{{ item.form }}</a>
              <small v-if="item.text"> ({{ item.text }})</small>
            </v-list-item>
          </v-list>
        </v-expansion-panel-text>

      </v-expansion-panel>
    </v-expansion-panels>

  </v-sheet>

</template>

<script setup>
  import {mdiHospital} from "@mdi/js";
  import patientForms from '@/assets/patientForms.json'

</script>

<style scoped>

  a, router-link {
    color: #F0EBCE;
  }

  /*a:visited, router-link:visited {*/
  /*  color: #AA8B56;*/
  /*}*/

  a:hover, router-link:hover {
    color: #AA8B56;
  }

  a:focus, router-link:focus {
    color: sandybrown;
  }

</style>
