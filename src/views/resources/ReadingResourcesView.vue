<template>
  <v-container class="pa-8">
    <h1 class="text-display-large text-white text-center my-16">Reading Resources</h1>

    <v-row justify="center" align="start">
      <v-col cols="12" md="10" lg="9">
        <h2 class="text-title-large text-primary font-weight-bold">Disclaimer</h2>
        <p class="body-text text-body-large text-white">
          This website is an informational guide only; it cannot answer personal
          health-related questions, legal questions, or research questions. The
          information presented here should not be substituted for medical, legal or
          other professional advice. Please feel free to call us about your child's
          health!
        </p>

        <h2 class="text-headline-small text-primary font-weight-bold mt-12 mb-4">
          Reading by Topic
        </h2>
        <p class="body-text text-body-large text-white mb-6">
          Books our clinicians recommend to families, grouped by topic. Select a topic
          to see the titles.
        </p>

        <!-- No v-lazy wrapper: it kept the whole list out of the DOM until scrolled
             into view, which hid it from crawlers along with the tab panes. -->
        <reading-accordion />

        <v-sheet
          class="d-flex flex-column justify-center align-center rounded-lg mx-auto my-12"
          max-width="800"
          height="400"
          color="primary"
        >
          <p class="text-body-large text-white text-center font-weight-bold my-4">
            SRHC Loves to Read!
          </p>
          <small class="my-2">Click to Enlarge</small>
          <v-carousel color="white" cycle continuous>
            <v-carousel-item v-for="photo in photos" :key="photo.id">
              <v-img
                :src="photo.image"
                :alt="photo.alt"
                height="400"
                cover
                @click="openImage(photo.image)"
              />
            </v-carousel-item>
          </v-carousel>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import ReadingAccordion from "@/components/ReadingAccordion.vue";
import bookshelf from "@/assets/img/education/bookshelf.jpg";
import readingPoster from "@/assets/img/education/reading-poster.jpg";
import recommendedBooks from "@/assets/img/education/recommended-books.jpg";

const openImage = (src) => {
  window.open(src);
};

const photos = [
  {
    id: 0,
    image: bookshelf,
    alt: "Bookshelf for children in the playroom.",
  },
  {
    id: 1,
    image: readingPoster,
    alt: "Poster to encourage reading in the office playroom.",
  },
  {
    id: 2,
    image: recommendedBooks,
    alt: "Poster for recommended books in the office playroom.",
  },
];
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
