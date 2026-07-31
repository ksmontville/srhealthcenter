<template>
  <v-container class="pa-8">
    <h1 class="text-display-large text-white text-center my-16">
      Frequently Asked Questions
    </h1>

    <v-row justify="center">
      <v-col cols="12" md="10" lg="9">
        <p class="body-text text-body-large text-white mb-8">
          Answers to the questions families ask us most often — about scheduling,
          insurance, after-hours care, and the kinds of pediatric care we provide at
          South Royalton Health Center. If you don't find what you're looking for,
          please
          <router-link to="/contact">get in touch</router-link> — we're always happy
          to help.
        </p>

        <faq-accordion :items="faqItems" />

        <v-sheet color="primary" class="rounded-lg mt-12 pa-8" elevation="8">
          <h2 class="text-headline-small text-white text-center mb-4">
            Still have questions?
          </h2>
          <p class="body-text text-body-large text-white text-center mb-6">
            Call or text our office during business hours, or send us a secure message
            through the Patient Portal. Our on-call pediatric team is available by
            phone after hours for urgent concerns.
          </p>
          <div class="d-flex flex-column flex-sm-row justify-center ga-4">
            <v-btn :href="appStore.officePhone" color="highlight" size="large">
              Call {{ appStore.officePhoneStr }}
            </v-btn>
            <v-btn to="/patient-portal" color="highlight" size="large">
              Patient Portal
            </v-btn>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import FaqAccordion from "@/components/FaqAccordion.vue";
import { faqItems } from "@/assets/faq";
import { useAppStore } from "@/store/app";

const appStore = useAppStore();
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
