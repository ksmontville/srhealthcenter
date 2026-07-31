<template>
  <v-container class="pa-8">
    <h1 class="text-display-large text-white text-center my-16">Local Resources</h1>

    <v-row justify="center">
      <v-col cols="12" md="10" lg="9">
        <p class="body-text text-body-large text-white mb-6">
          Local organizations that support Upper Valley families — food, housing,
          transportation, parenting, mental health, and more. Select a category to see
          contacts.
        </p>

        <local-resources-tabs />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import LocalResourcesTabs from "@/components/LocalResourcesTabs.vue";
</script>

<style scoped>
a:not(.v-btn) {
  color: #f0ebce;
}

a:not(.v-btn):hover {
  color: #4e6c50;
}

a:not(.v-btn):focus {
  color: sandybrown;
}
</style>
