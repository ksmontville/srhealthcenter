<template>
  <v-container class="pa-8">
    <h1 class="text-display-large text-white text-center my-16">
      So, You're Expecting?
    </h1>

    <v-row justify="center">
      <v-col cols="12" md="10" lg="9">
        <!-- Intro nested in the same content column as the sections below so the
             left edges line up. -->
        <v-row align="start">
          <v-col cols="12" md="6" lg="7" class="pl-0">
            <p class="body-text text-body-large text-white mb-4">
              Welcoming a new baby into your family is one of life's greatest joys—and
              one of its biggest adventures. <strong>Congratulations!</strong>
            </p>
            <p class="body-text text-body-large text-white mb-4">
              Choosing your child's pediatric team is one of the first important
              decisions you'll make as a parent. At South Royalton Health Center, we're
              honored to be considered as your child's medical home and would love the
              opportunity to partner with your family from those very first days through
              every stage of childhood.
            </p>
            <p class="body-text text-body-large text-white">
              We believe pediatric care is about more than treating illness. It's about
              building relationships, answering your questions, celebrating milestones,
              and supporting your family as your child grows and thrives.
            </p>
          </v-col>

          <v-col cols="12" md="6" lg="5">
            <!-- TODO(client): swap for the new newborn/family photo once images are chosen. -->
            <figure class="ma-0">
              <v-img
                class="rounded-lg"
                :src="babyPhoto"
                :srcset="`${babyPhotoSm} 480w, ${babyPhoto} 800w, ${babyPhotoLg} 1200w`"
                :max-height="380"
                cover
                alt="An infant patient cared for at South Royalton Health Center."
              />
              <figcaption class="text-white text-center mt-2">
                <small>
                  We care for babies from their very first days through young adulthood.
                </small>
              </figcaption>
            </figure>
          </v-col>
        </v-row>

        <h2 class="text-headline-small text-heading font-weight-bold mt-12 mb-4">
          Why Families Choose South Royalton Health Center
        </h2>
        <p class="body-text text-body-large text-white mb-2">
          Our goal is to provide personalized, relationship-centered care that helps
          children and families flourish. As a small, independent pediatric practice, we
          take the time to get to know your family and create a care plan that fits your
          child's unique needs.
        </p>
        <p class="body-text text-body-large text-white">
          Families choose us because we offer:
        </p>
        <icon-list :items="whyChooseUs" />

        <h2 class="text-headline-small text-heading font-weight-bold mt-12 mb-4">
          We'd Love to Meet You
        </h2>
        <p class="body-text text-body-large text-white mb-2">
          Choosing a pediatrician is a personal decision, and we want you to feel
          confident in your choice.
        </p>
        <p class="body-text text-body-large text-white mb-2">
          We invite expecting parents to schedule a complimentary prenatal "Get
          Acquainted" visit. This is an opportunity to
          <router-link to="/meet-our-providers-staff"
            >meet one of our clinicians</router-link
          >, tour our office, learn about our approach to care, and ask any questions
          you may have about newborn care, feeding, sleep, immunizations, or those first
          few weeks at home.
        </p>
        <p class="body-text text-body-large text-white">
          There is no obligation—just an opportunity to get to know us and decide if
          we're the right fit for your growing family.
        </p>

        <h2 class="text-headline-small text-heading font-weight-bold mt-12 mb-4">
          When Your Baby Arrives
        </h2>
        <p class="body-text text-body-large text-white mb-2">
          If your baby is born at one of our local hospitals, simply let your obstetric
          provider and the hospital staff know that you have chosen South Royalton
          Health Center as your baby's pediatric practice.
        </p>
        <p class="body-text text-body-large text-white">
          The hospital will notify us after your baby's birth. Before you leave the
          hospital, please call our office to schedule your baby's first appointment,
          which is typically within the first few days after discharge.
        </p>

        <h2 class="text-headline-small text-heading font-weight-bold mt-12 mb-4">
          Helpful Resources
        </h2>
        <p class="body-text text-body-large text-white">
          While you're preparing for your baby's arrival, we encourage you to:
        </p>
        <icon-list :items="resources" />
        <p class="body-text text-body-large text-white mt-4">
          We look forward to meeting your family and supporting you through one of
          life's most exciting journeys.
        </p>

        <v-sheet color="primary" class="rounded-lg mt-12 pa-8" elevation="8">
          <h2 class="text-headline-small text-white text-center mb-4">
            Schedule a complimentary prenatal visit
          </h2>
          <div class="d-flex flex-column flex-sm-row justify-center ga-4">
            <v-btn :href="appStore.officePhone" color="highlight" size="large">
              Call {{ appStore.officePhoneStr }}
            </v-btn>
            <v-btn to="/new-patients" color="highlight" size="large">
              New Patients
            </v-btn>
            <v-btn to="/faq" color="highlight" size="large">FAQ</v-btn>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useAppStore } from "@/store/app";
import IconList from "@/components/IconList.vue";
import babyPhotoSm from "@/assets/img/stock/stock-baby-sm.jpg";
import babyPhoto from "@/assets/img/stock/stock-baby-md.jpg";
import babyPhotoLg from "@/assets/img/stock/stock-baby-lg.jpg";
import { useSeo } from "@/composables/useSeo";

const appStore = useAppStore();

const whyChooseUs = [
  'Complimentary prenatal "Get Acquainted" visits',
  "Unhurried appointments with time for questions",
  "A collaborative team that truly knows your family",
  {
    text: "Lifestyle Medicine and whole-child care —",
    to: "/integrative-pediatric-care",
    linkLabel: "more on Lifestyle Medicine",
  },
  "Breastfeeding and lactation support",
  {
    text: "Integrated behavioral health and school-based services as your child grows —",
    to: "/school-visits",
    linkLabel: "more on school-based care",
  },
  "Care from infancy through adolescence",
];

const resources = [
  {
    text: "",
    to: "/meet-our-providers-staff",
    linkLabel: "Meet our team",
    after: ".",
  },
  {
    text: "Learn more about our",
    to: "/our-mission-and-services",
    linkLabel: "pediatric services",
    after: ".",
  },
  {
    text: "Explore our",
    to: "/srhc-recommended-books",
    linkLabel: "education library",
    after: " for trusted newborn resources.",
  },
  {
    text: "Sign up for our",
    to: "/patient-portal",
    linkLabel: "Patient Portal",
    after:
      " to securely communicate with our office and complete paperwork before your baby's first visit.",
  },
];

useSeo({
  title: "So, You're Expecting? Prenatal Visits",
  description:
    'Expecting a baby in the Upper Valley? Schedule a complimentary prenatal "Get Acquainted" visit at South Royalton Health Center and meet the pediatric team who will care for your newborn.',
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
