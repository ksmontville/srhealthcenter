<template>
  <v-container class="pa-8">
    <h1 class="text-display-large text-white text-center my-16">
      Oops! Page does not exist.
    </h1>

    <v-row justify="center">
      <v-col cols="12" md="10" lg="9" class="text-center">
        <p class="body-text text-body-large text-white mb-8">
          The page you're looking for may have moved or no longer exists. Try one of
          these instead, or
          <router-link to="/contact">get in touch</router-link> and we'll help.
        </p>

        <div class="d-flex flex-column flex-sm-row justify-center ga-4">
          <v-btn to="/" color="primary" size="large">Home</v-btn>
          <v-btn to="/our-mission-and-services" color="primary" size="large">
            Our Services
          </v-btn>
          <v-btn to="/faq" color="primary" size="large">FAQ</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useHead } from "@unhead/vue";

// Keep 404s out of the index. Netlify also returns a real 404 status for unknown
// paths (see public/_redirects) so these aren't treated as soft 404s.
useHead({
  title: "Page Not Found | South Royalton Health Center",
  meta: [{ name: "robots", content: "noindex, follow" }],
});
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
