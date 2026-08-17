<template>
  <v-container class="pa-8">
    <h1 class="text-display-large text-white text-center my-16">
      Auricular Acupuncture
    </h1>

    <v-row justify="center">
      <v-col cols="12" md="10" lg="9">
        <!-- Intro nested in the same content column as the sections below so the
             left edges line up. -->
        <v-row align="start">
          <v-col cols="12" md="6" lg="7" class="pl-0">
            <p class="body-text text-body-large text-white mb-4">
              Every child is different, and sometimes traditional medical care benefits
              from additional tools. Dr. Ashley offers physician-provided auricular
              acupuncture as one evidence-based option to support children and teens
              with concerns such as anxiety, headaches, sleep difficulties, pain, weight
              regulation, concussion recovery, and emotional well-being.
            </p>
            <p class="body-text text-body-large text-white">
              Because Dr. Ashley is also your child's pediatrician, every treatment is
              thoughtfully integrated into your child's overall
              <router-link to="/integrative-pediatric-care">care plan</router-link> and
              tailored to your child's individual needs.
            </p>
          </v-col>

          <v-col cols="12" md="6" lg="5">
            <figure class="ma-0">
              <v-img
                :src="ashleyPhoto"
                class="rounded-lg"
                :max-height="380"
                cover
                alt="Dr. Ashley Miller, board-certified pediatrician at South Royalton Health Center"
              />
              <figcaption class="text-white text-center mt-2">
                <small>
                  Dr. Ashley Miller, board-certified pediatrician and Lifestyle Medicine
                  physician.
                </small>
              </figcaption>
            </figure>
          </v-col>
        </v-row>

        <h2 class="text-headline-small text-heading font-weight-bold mt-12 mb-6">
          Common Questions About Auricular Acupuncture
        </h2>

        <faq-accordion :items="acupunctureFaqItems" />

        <v-sheet color="primary" class="rounded-lg mt-12 pa-8" elevation="8">
          <h2 class="text-headline-small text-white text-center mb-4">
            Interested in learning more?
          </h2>
          <p class="body-text text-body-large text-white text-center mb-6">
            If you're wondering whether auricular acupuncture may be appropriate for
            your child, we'd love to talk with you. Contact South Royalton Health Center
            to schedule a consultation or to discuss whether it may be a helpful
            addition to your child's individualized care plan.
          </p>
          <div class="d-flex flex-column flex-sm-row justify-center ga-4">
            <v-btn :href="appStore.officePhone" color="highlight" size="large">
              Call {{ appStore.officePhoneStr }}
            </v-btn>
            <v-btn to="/new-patients" color="highlight" size="large">
              New Patients
            </v-btn>
            <v-btn to="/faq" color="highlight" size="large"> FAQ </v-btn>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import FaqAccordion from "@/components/FaqAccordion.vue";
import { acupunctureFaqItems } from "@/assets/acupunctureFaq";
import { useAppStore } from "@/store/app";
// The square face crop, not the standing portrait: this slot is roughly
// square and uses `cover`, which would otherwise crop her head off.
import ashleyPhoto from "@/assets/img/staff/ashley-card-avatar.jpg";
import { useSeo } from "@/composables/useSeo";
import { faqPageSchema } from "@/config/schema";
import { acupunctureAnswerText } from "@/assets/acupunctureFaq";

const appStore = useAppStore();

useSeo({
  title: "Auricular Acupuncture for Children & Teens",
  description:
    "Physician-provided auricular acupuncture at South Royalton Health Center for anxiety, ADHD symptoms, headaches, pain, sleep and concussion recovery — integrated into your child's pediatric care.",
  schema: [faqPageSchema(acupunctureFaqItems, acupunctureAnswerText)],
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
