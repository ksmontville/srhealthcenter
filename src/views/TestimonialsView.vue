<template>
  <v-container class="pa-8">
    <h1 class="text-display-large text-white text-center my-16">
      What Families Say About Us
    </h1>

    <v-row justify="center">
      <v-col cols="12" md="10" lg="9">
        <v-lazy>
          <v-img
            :src="childPhoto"
            class="rounded-lg mb-8"
            alt="A young patient playing outdoors in autumn leaves"
            max-height="360"
            cover
          />
        </v-lazy>

        <p class="body-text text-body-large text-white mb-8">
          Families across the Upper Valley have trusted South Royalton Health Center
          with their children's care for years. Here is what some of them have said
          about our pediatric team.
        </p>

        <testimonial-cards :items="testimonials" :min-width="320" />

        <v-sheet color="primary" class="rounded-lg mt-12 pa-8" elevation="8">
          <h2 class="text-headline-small text-white text-center mb-4">
            Ready to join our practice?
          </h2>
          <p class="body-text text-body-large text-white text-center mb-6">
            We welcome new patients from newborns through young adults.
          </p>
          <div class="cta-actions">
            <v-btn :to="{ path: '/new-patients' }" color="highlight" size="large">
              New Patient Information
            </v-btn>
            <v-btn :href="appStore.officePhone" color="highlight" size="large">
              Call {{ appStore.officePhoneStr }}
            </v-btn>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useAppStore } from "@/store/app";
import TestimonialCards from "@/components/TestimonialCards.vue";
import { testimonials } from "@/assets/testimonials";
import childPhoto from "@/assets/img/office/child-sm.jpg";
import { useSeo } from "@/composables/useSeo";
import { breadcrumbSchema } from "@/config/schema";

const appStore = useAppStore();

// No Review/AggregateRating markup here — see the note in assets/testimonials.js.
// Google excludes self-serving reviews from review rich results, so the schema
// would earn nothing and carries manual-action risk. The text indexes fine.
useSeo({
  title: "Patient Testimonials & Reviews",
  description:
    "Read what parents across the Upper Valley say about South Royalton Health Center — an independent, woman-owned pediatric practice in South Royalton, Vermont.",
  schema: [
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Patient Testimonials", path: "/patient-testimonials" },
    ]),
  ],
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

.cta-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}
</style>
