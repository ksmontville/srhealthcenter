<template>
  <v-container class="pa-8">
    <h1 class="text-display-large text-white text-center my-16">
      Child Health Web Links
    </h1>
    <p class="text-display-small text-white text-center mt-n8 mb-16">
      <em>SRHC Recommended</em>
    </p>

    <v-row justify="center">
      <v-col cols="12" md="10" lg="9">
        <h2 class="text-title-large text-heading font-weight-bold">Disclaimer</h2>
        <p class="body-text text-body-large text-white">
          This website is an informational guide only; it cannot answer personal
          health-related questions, legal questions, or research questions. The
          information presented here should not be substituted for medical, legal or
          other professional advice. Please feel free to call us about your child's
          health!
        </p>

        <p class="text-title-large text-white text-center font-weight-bold my-12">
          Please like us on
          <a :href="appStore.facebookUrl" target="_blank" rel="noopener noreferrer"
            >Facebook <v-icon :icon="mdiFacebook" class="mx-1"
          /></a>
          for current hot topic news and fun!
        </p>

        <h2 class="text-headline-small text-heading font-weight-bold mt-12 mb-4">
          Recommended Links by Topic
        </h2>
        <p class="body-text text-body-large text-white mb-6">
          Select a topic panel for links to helpful resources.
        </p>

        <web-resources-accordion />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { mdiFacebook } from "@mdi/js";
import { useAppStore } from "@/store/app";
import WebResourcesAccordion from "@/components/WebResourcesAccordion.vue";
import { useSeo } from "@/composables/useSeo";

const appStore = useAppStore();

useSeo({
  title: "Recommended Child Health Web Links",
  description:
    "Child health websites recommended by the clinicians at South Royalton Health Center — general health, early childhood development, parenting, adolescence and mental health resources.",
});
</script>

<style scoped>
a:not(.v-btn) {
  color: rgb(var(--v-theme-highlight));
}

a:not(.v-btn):hover {
  color: rgb(var(--v-theme-heading));
}

a:not(.v-btn):focus {
  color: sandybrown;
}
</style>
