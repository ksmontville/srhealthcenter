<template>

  <p class="text-white text-h4 text-center my-4">Location and Hours</p>
  <v-row justify="center" align="stretch">
    <v-col>
      <v-list class="rounded" bg-color="highlight" elevation="8">
        <v-list-item v-for="address in contactInfo.address" :key="address">
          <p class="text-center font-weight-bold">{{ address }}</p>
        </v-list-item>
        <v-list-item v-for="hours in contactInfo.hours" :key="hours">
          <p class="body-text text-body-1">
            <v-icon :icon="mdiHospital" class="mx-2" />
            {{ hours }}
          </p>
        </v-list-item>
        <v-list-item class="d-flex align-center justify-center my-4">
          <p class="text-center font-weight-bold my-2">Office Phone</p>
          <v-btn :href="appStore.officePhone" color="secondary">{{contactInfo.phoneStr}}</v-btn>
        </v-list-item>
      </v-list>
    </v-col>

    <v-col v-if="mobile" class="d-flex justify-center my-4">
      <iframe class="rounded" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.725689746604!2d-72.52253408449688!3d43.820048979115896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb4d98940037329%3A0xac84825b6f3017a!2sSouth%20Royalton%20Health%20Center!5e0!3m2!1sen!2sus!4v1681841801514!5m2!1sen!2sus" width="324" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
    </v-col>
    <v-col v-else>
      <iframe class="rounded" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.725689746604!2d-72.52253408449688!3d43.820048979115896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb4d98940037329%3A0xac84825b6f3017a!2sSouth%20Royalton%20Health%20Center!5e0!3m2!1sen!2sus!4v1681841801514!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
    </v-col>

  </v-row>

</template>

<script setup>
  import { mdiHospital } from "@mdi/js";
  import { useAppStore } from "@/store/app";
  import { useDisplay } from "vuetify";

  const appStore = useAppStore()
  const { mobile } = useDisplay()

  const contactInfo = {
    "address": ["79 South Windsor Drive", "PO Box 119", "South Royalton, VT 05068"],
    "hours": ["Open Monday through Friday at 8:00 am with appointments beginning at 9:00 am until 5:00 pm",
      "Closed for lunch from 12:00 pm to 1:00 pm",
      "On-call clinician available after hours and on weekends at our primary phone number."
    ],
    "phoneStr": "(802) 763-7575",
  }
</script>

<style scoped>

</style>
