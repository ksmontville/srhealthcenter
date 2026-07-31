<template>
  <v-container class="pa-8">
    <h1 class="text-display-large text-white text-center my-16">
      Integrative Pediatric Care
    </h1>

    <v-row justify="center">
      <v-col cols="12" md="10" lg="9">
        <p class="body-text text-body-large text-white mb-4">
          At South Royalton Health Center, we believe the best pediatric care combines
          the strengths of modern medicine with evidence-based complementary approaches
          that support the whole child.
        </p>
        <p class="body-text text-body-large text-white mb-4">
          Our pediatricians consider nutrition, sleep, physical activity, stress, family
          relationships, and emotional well-being as important parts of every child's
          health. When appropriate, we may incorporate additional therapies into your
          child's care plan to address these, including:
        </p>

        <icon-list dense :items="therapies" />

        <p class="body-text text-body-large text-white mt-4">
          These therapies are always used to complement — not replace — traditional
          medical care.
        </p>

        <!-- Lifestyle Medicine -->
        <h2 class="text-headline-small text-heading font-weight-bold mt-12 mb-4">
          Lifestyle Medicine
        </h2>
        <p class="body-text text-body-large text-white mb-4">
          Lifestyle Medicine is an evidence-based approach to preventing and treating
          disease by focusing on the daily habits that have the greatest impact on
          health. Dr. Ashley is a board-certified Lifestyle Medicine physician
          (DipABLM).
        </p>
        <p class="body-text text-body-large text-white">
          Our recommendations are personalized for each child and family and are guided
          by the six pillars of Lifestyle Medicine:
        </p>

        <icon-list dense :items="pillars" />

        <p class="body-text text-body-large text-white mt-4">
          These principles are woven into everyday pediatric care — from
          <router-link to="/our-mission-and-services">well-child visits</router-link>
          to chronic disease management — to help children build lifelong healthy
          habits.
        </p>

        <!-- Nutrition -->
        <h2 class="text-headline-small text-heading font-weight-bold mt-12 mb-4">
          Nutrition
        </h2>
        <p class="body-text text-body-large text-white mb-4">
          Healthy nutrition and daily habits are the foundation of lifelong health. We
          partner with children, adolescents, and families to develop personalized,
          evidence-based nutrition and Lifestyle Medicine plans that support healthy
          growth, development, mental health, athletic performance, and overall
          well-being.
        </p>
        <p class="body-text text-body-large text-white">Services include:</p>

        <icon-list :items="nutritionServices" />

        <p class="body-text text-body-large text-white mt-4">
          Our goal is to help children and families build healthy habits that support
          lifelong health and well-being.
        </p>

        <!-- Auricular Acupuncture -->
        <h2 class="text-headline-small text-heading font-weight-bold mt-12 mb-4">
          Auricular Acupuncture
        </h2>
        <p class="body-text text-body-large text-white mb-4">
          Dr. Ashley offers physician-provided auricular acupuncture, an evidence-based
          therapy that uses tiny needles or ear seeds on carefully selected points on
          the outer ear. It may be used alongside traditional pediatric care to support
          children and teens with anxiety, ADHD symptoms, headaches, pain, sleep
          concerns, emotional regulation, injury recovery, and overall wellness.
        </p>
        <p class="body-text text-body-large text-white mb-6">
          Because Dr. Ashley is also your child's pediatrician, every treatment is
          integrated into their overall care plan.
        </p>

        <v-btn to="/auricular-acupuncture" color="primary" size="large">
          Learn more about auricular acupuncture
        </v-btn>

        <v-sheet color="primary" class="rounded-lg mt-12 pa-8" elevation="8">
          <h2 class="text-headline-small text-white text-center mb-4">
            Talk with us about whole-child care
          </h2>
          <p class="body-text text-body-large text-white text-center mb-6">
            Integrative approaches are always discussed as part of your child's
            individualized care plan. Call our office or send a secure message through
            the Patient Portal to learn more.
          </p>
          <div class="d-flex flex-column flex-sm-row justify-center ga-4">
            <v-btn :href="appStore.officePhone" color="highlight" size="large">
              Call {{ appStore.officePhoneStr }}
            </v-btn>
            <v-btn to="/our-mission-and-services" color="highlight" size="large">
              All Our Services
            </v-btn>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import IconList from "@/components/IconList.vue";
import { useAppStore } from "@/store/app";
import { useSeo } from "@/composables/useSeo";
import { medicalWebPageSchema } from "@/config/schema";

const appStore = useAppStore();

const therapies = [
  "Nutrition counseling",
  "Movement",
  "Mind-body strategies for stress and anxiety",
  "Auricular acupuncture",
];

const pillars = [
  "Healthy nutrition",
  "Regular physical activity",
  "Restorative sleep",
  "Healthy stress management",
  "Avoiding tobacco, vaping, alcohol, and other harmful substances",
  "Strong family, community, and social connections",
];

const nutritionServices = [
  "Growth and nutrition assessments",
  "Pediatric nutritional counseling",
  "Nutrition support for picky or selective eating",
  "Healthy weight management, including prescription medications when appropriate",
  "Sports nutrition and optimization for athletic performance",
  "Nutrition support for ADHD and other chronic health conditions",
  "Eating disorder care as part of a multidisciplinary treatment team",
];

const integrativeSchema = medicalWebPageSchema({
  path: "/integrative-pediatric-care",
  name: "Integrative Pediatric Care",
  description:
    "Evidence-based complementary approaches — Lifestyle Medicine, nutrition counseling and auricular acupuncture — integrated into traditional pediatric care.",
  services: [
    "Lifestyle Medicine",
    "Pediatric nutrition counseling",
    "Auricular acupuncture",
    "Mind-body strategies for stress and anxiety",
  ],
});

useSeo({
  title: "Integrative Pediatric Care & Lifestyle Medicine",
  description:
    "Evidence-based integrative pediatric care at South Royalton Health Center — Lifestyle Medicine, nutrition counseling and auricular acupuncture, integrated into your child's overall care plan.",
  schema: [integrativeSchema],
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
