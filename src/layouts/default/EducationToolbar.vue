<template>
  <v-bottom-navigation v-if="mobile" bg-color="highlight" grow>
    <v-btn :to="{ path: 'srhc-recommended-child-health-web-links' }">
      <v-icon :icon="mdiMedicalBag" />
      SRHC Recs
    </v-btn>
    <v-btn :to="{ path: 'local-resources' }">
      <v-icon :icon="mdiNearMe" />
      Local
    </v-btn>
    <v-btn :to="{ path: 'srhc-recommended-books' }">
      <v-icon :icon="mdiBookOpenPageVariantOutline" />
      Reading
    </v-btn>
    <v-btn :to="{ path: 'vaccine-information' }">
      <v-icon :icon="mdiNeedle" />
      Vaccines
    </v-btn>
  </v-bottom-navigation>

  <v-navigation-drawer
    v-else
    location="right"
    permanent
    floating
    color="highlight"
    elevation="8"
  >
    <v-sheet
      color="primary"
      class="rounded text-h6 text-center ma-4 pa-3"
      elevation="4"
      >{{ toolBarTitle }}</v-sheet
    >
    <v-list>
      <v-list-item :to="{ path: 'srhc-recommended-child-health-web-links' }"
        ><v-icon :icon="mdiMedicalBag" class="mx-2" />SRHC Recs</v-list-item
      >
      <v-list-item :to="{ path: 'local-resources' }"
        ><v-icon :icon="mdiNearMe" class="mx-2" />Local</v-list-item
      >
      <v-list-item :to="{ path: 'srhc-recommended-books' }"
        ><v-icon
          :icon="mdiBookOpenPageVariantOutline"
          class="mx-2"
        />Reading</v-list-item
      >
      <v-list-item :to="{ path: 'vaccine-information' }"
        ><v-icon :icon="mdiNeedle" class="mx-2" />Vaccines</v-list-item
      >

      <v-sheet
        color="primary"
        class="rounded text-h6 text-center ma-4"
        elevation="4"
        >Office Hours</v-sheet
      >
      <v-list>
        <v-list-item v-for="hour in hours" :key="hour">
          <v-icon :icon="mdiHospitalBoxOutline" class="mx-2" />
          <small>{{ hour }}</small>
        </v-list-item>
        <v-list-item class="d-flex align-center justify-center my-4">
          <v-btn @click="openUrl(appStore.patientPortalUrl)" color="primary" block>
            Patient Portal
          </v-btn>
        </v-list-item>
        <v-list-item class="d-flex align-center justify-center my-4">
          <p class="text-center font-weight-bold mx-auto my-2">Office Phone</p>
          <v-btn :href="appStore.officePhone" color="secondary">{{
            appStore.officePhoneStr
          }}</v-btn>
        </v-list-item>
        <v-list-item class="d-flex align-center justify-center my-4">
          <p class="text-center font-weight-bold mx-auto my-2">Office Fax</p>
          <v-btn :href="appStore.officeFax" color="secondary">{{
            appStore.officeFaxStr
          }}</v-btn>
        </v-list-item>
      </v-list>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { useDisplay } from "vuetify";
import {
  mdiMedicalBag,
  mdiNearMe,
  mdiBookOpenPageVariantOutline,
  mdiNeedle,
  mdiHospitalBoxOutline,
} from "@mdi/js";
import { useAppStore } from "@/store/app";

const { mobile } = useDisplay();

const appStore = useAppStore();
const toolBarTitle = "Resources for Healthy Kids & Families";

const openUrl = (url) => {
  window.open(url);
};

const hours = [
  "Open Monday through Friday at 8:00 am with appointments beginning at 9:00 am until 5:00 pm",
  "Closed for lunch from 12:00 pm to 1:00 pm",
  "On-call clinician available after hours and on weekends at our primary phone number.",
];
// const webResources = [
//   {},
// ]
</script>

<style scoped></style>
