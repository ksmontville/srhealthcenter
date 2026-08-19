<template>
  <v-container class="pa-8">
    <h1 class="text-display-large text-white text-center my-16">
      Comprehensive Pediatric Care for Families in the Upper Valley
    </h1>

    <v-row justify="center">
      <v-col cols="12" md="10" lg="9">
        <p class="body-text text-body-large text-white mb-4">
          At <strong>South Royalton Health Center</strong>, we believe every child
          deserves compassionate, relationship-based medical care close to home. As an
          <strong>independent, woman-owned pediatric practice</strong>, we provide
          comprehensive care for
          <strong>newborns, infants, children, adolescents, and young adults</strong>
          throughout South Royalton, Bethel, Sharon, Tunbridge, Randolph, Chelsea,
          Woodstock, Strafford, Norwich, Hartford, and
          <strong>the greater Upper Valley of Vermont and New Hampshire</strong>.
        </p>
        <p class="body-text text-body-large text-white mb-4">
          We provide comprehensive
          <router-link to="/our-mission-and-services">
            pediatric primary care</router-link
          >
          — from <strong>newborn care</strong> and
          <strong>preventive medicine</strong> to <strong>behavioral health</strong>,
          <strong>adolescent medicine</strong>, and
          <router-link to="/integrative-pediatric-care">
            integrative pediatric services</router-link
          >
          — for children and families throughout the
          <strong>Upper Valley</strong>.
        </p>
        <p class="body-text text-body-large text-white mb-4">
          Our goal is simple: to provide exceptional
          <strong>whole-child pediatric care</strong> while building lasting
          relationships with the families we serve.
        </p>
        <p class="body-text text-body-large text-white">
          Unlike many larger healthcare systems, you'll see
          <strong>independent pediatricians</strong> who know your child, understand
          your family's goals, and work closely with you through every stage of
          development.
        </p>
      </v-col>
    </v-row>

    <h2 class="text-headline-small text-heading text-center mt-16 mb-2">
      It's a Pleasure to Meet You
    </h2>
    <!-- Not inside v-lazy: a single feature image does not need it, and lazy
         content is absent from the DOM until scrolled to, which hides it from
         crawlers. The prerender step tags below-fold images `loading="lazy"`. -->
    <v-row justify="center" class="mb-6">
      <v-col cols="12" md="10" lg="9">
        <v-img
          :src="teamPhoto"
          class="rounded-lg"
          alt="Six members of the South Royalton Health Center team together on the porch of the practice"
        />
      </v-col>
    </v-row>

    <p class="text-body-large text-white text-center mb-4">
      To reach our office staff please call our main office number at
      <a :href="appStore.officePhone">{{ appStore.officePhoneStr }}</a>
    </p>

    <staff-cards />

    <v-row justify="center" class="mt-8">
      <v-col cols="12" md="10" lg="9">
        <p class="body-text text-body-large text-white text-center">
          Beyond the exam room, Dr. Ashley contributes to pediatric medicine across
          Vermont through advocacy, medical education, and community partnerships.
          <router-link to="/community-leadership-media-advocacy">
            Read about her community leadership, media, and advocacy work</router-link
          >.
        </p>
      </v-col>
    </v-row>
  </v-container>

  <!-- Office photo carousel, relocated here from the retired Office Details page. -->
  <v-container class="my-8">
    <!-- Heading deliberately outside v-lazy: lazy content is absent from the DOM
         until scrolled into view, which would hide it from crawlers. -->
    <h2 class="text-headline-small text-heading text-center mb-4">
      Photos of South Royalton Health Center
    </h2>
    <v-lazy>
      <v-sheet
        class="d-flex flex-column justify-center align-center rounded-lg mx-auto my-8"
        max-width="800"
        height="400"
        color="primary"
      >
        <small class="my-2">Select a photo to enlarge</small>
        <v-carousel color="white" cycle continuous>
          <v-carousel-item v-for="officePhoto in officePhotos" :key="officePhoto.id">
            <!--
              A real button, not a click handler on the image.

              This used to call window.open() with the asset URL, which navigates
              to the raw .webp file rather than enlarging anything — and whether
              the browser renders or downloads it depends on the browser and the
              content type it is served with. It was also a bare <div>, so it was
              unreachable by keyboard and announced as nothing at all.
            -->
            <button type="button" class="photo-button" @click="enlarged = officePhoto">
              <v-img
                :src="officePhoto.image"
                :alt="officePhoto.alt"
                cover
                height="400"
              />
              <span class="d-sr-only">Enlarge this photo</span>
            </button>
          </v-carousel-item>
        </v-carousel>
      </v-sheet>
    </v-lazy>

    <v-dialog
      :model-value="enlarged !== null"
      max-width="1100"
      :aria-label="enlarged?.alt"
      @update:model-value="enlarged = null"
    >
      <v-card color="panel" class="pa-2">
        <v-img :src="enlarged?.image" :alt="enlarged?.alt" max-height="80vh" contain />
        <v-card-actions class="justify-center">
          <v-btn color="action" @click="enlarged = null">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import StaffCards from "@/components/StaffCards.vue";
import { useAppStore } from "@/store/app";
import teamPhoto from "@/assets/img/office/srhc-team.jpg";
import srhcSign from "@/assets/img/office/srhc-sign.jpg";
import srhcPorch from "@/assets/img/office/srhc-porch.jpg";
import srhcReception from "@/assets/img/office/srhc-reception.jpg";
import srhcPlayArea from "@/assets/img/office/srhc-play-area.jpg";
import srhcPuzzleTable from "@/assets/img/office/srhc-puzzle-table.jpg";
import srhcExamForest from "@/assets/img/office/srhc-exam-forest.jpg";
import srhcExamBlue from "@/assets/img/office/srhc-exam-blue.jpg";
import { useSeo } from "@/composables/useSeo";
import { physicianSchema } from "@/config/schema";

const appStore = useAppStore();

// Which photo the lightbox is showing; null when closed.
const enlarged = ref(null);

/*
 * Ordered as a visit: arrive, be greeted, wait, be seen.
 *
 * Replaces the 2025 set, which was four near-identical exam rooms plus three
 * bare-tree exteriors — and whose street view showed the roadside sign still
 * advertising clinicians who left before the practice changed hands.
 *
 * Each alt describes its own photo. The old set gave all four exam rooms the
 * identical string, which tells a screen-reader user nothing about which is which.
 */
const officePhotos = [
  {
    id: 0,
    image: srhcSign,
    alt: "The South Royalton Health Center sign beside the entrance, reading Pediatrics and Adolescent Medicine.",
  },
  {
    id: 1,
    image: srhcPorch,
    alt: "Purple and yellow irises in bloom in the garden beside the front porch.",
  },
  {
    id: 2,
    image: srhcReception,
    alt: "A member of the front desk team at the reception window, beside a rack of children's books.",
  },
  {
    id: 3,
    image: srhcPlayArea,
    alt: "The play corner of the waiting area, with a children's book rack, a wooden rocking horse and a table of toys.",
  },
  {
    id: 4,
    image: srhcPuzzleTable,
    alt: "A part-finished jigsaw puzzle on a table between two armchairs in a quiet corner.",
  },
  {
    id: 5,
    image: srhcExamForest,
    alt: "An exam room painted with a forest mural of deer, a rabbit and pine trees.",
  },
  {
    id: 6,
    image: srhcExamBlue,
    alt: "A blue exam room with a privacy curtain, exam table and butterfly decals.",
  },
];

useSeo({
  title: "Meet Our Pediatric Team",
  description:
    "Meet Dr. Ashley Miller and the clinicians, nurses and staff of South Royalton Health Center — an independent, woman-owned pediatric practice serving the Upper Valley of Vermont and New Hampshire.",
  schema: [physicianSchema()],
});
</script>

<style scoped>
/* The button is only a hit target and focus ring; the image supplies the visuals. */
.photo-button {
  display: block;
  width: 100%;
  padding: 0;
  border: 0;
  background: none;
  cursor: zoom-in;
}

.photo-button:focus-visible {
  outline: 3px solid rgb(var(--v-theme-heading));
  outline-offset: -3px;
}

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
