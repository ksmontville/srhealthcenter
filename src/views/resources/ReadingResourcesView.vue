<template>
 <v-container class="pa-8">

  <p class="text-h2 text-white text-center my-16">Reading Resources</p>

  <v-row justify="center" align="start">
     <v-col class="my-4" cols="12">
      <p class="text-h6 text-primary font-weight-bold">Disclaimer</p>
      <p class="body-text text-body-1 text-white">
        This website is an informational guide only; it cannot answer personal health-related questions, legal questions,
        or research questions. The information presented here should not be substituted for medical, legal or other
        professional advice. Please feel free to call us about your child's health!
      </p>
    </v-col>

<!--    <v-col class="my-4" cols="12">-->
<!--      <p class="text-h4 text-white text-center font-weight-bold my-4">Reading by Topic</p>-->
<!--     </v-col>-->

    <v-col class="mb-4" cols="12">
      <v-lazy>
        <education-tabs />
      </v-lazy>
    </v-col>

    <v-col cols="12" class="my-4">
      <v-lazy>
        <v-sheet class="d-flex flex-column justify-center align-center rounded-lg mx-auto my-8"
               max-width="800" height="400" color="primary">
        <p class="text-body-1 text-white text-center font-weight-bold my-4">SRHC Loves to Read!</p>
        <small class="my-2">Click to Enlarge</small>
        <v-carousel color="white" cycle continuous>
          <v-carousel-item v-for="photo in photos" :key="photo.id">
            <v-img :src="photo.image" :alt="photo.alt" height="400" cover @click="openImage(photo.image)" />
          </v-carousel-item>
        </v-carousel>
        </v-sheet>
      </v-lazy>
    </v-col>
  </v-row>

 </v-container>

</template>

<script setup>

  import EducationTabs from "@/components/ReadingTabs.vue";
  import bookshelf from '@/assets/img/education/bookshelf.jpg'
  import readingPoster from '@/assets/img/education/reading-poster.jpg'
  import recommendedBooks from '@/assets/img/education/recommended-books.jpg'

   const openImage = (src) => {
    window.open(src)
  }

  const photos = [
    {
      id: 0,
      image: bookshelf,
      alt: "Bookshelf for children in the playroom."
    },
    {
      id: 1,
      image: readingPoster,
      alt: "Poster to encourage reading in the office playroom."
    },
    {
      id: 2,
      image: recommendedBooks,
      alt: "Poster for recommended books in the office playroom."
    },
  ]
</script>

<style scoped>

</style>
