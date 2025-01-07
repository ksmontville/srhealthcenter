<template>
  <v-card
    v-for="testimonial in testimonials"
    :key="testimonial.id"
    max-width="400"
    color="highlight"
    class="testimonial-card mx-auto my-4"
    elevation="8"
  >
    <v-card-title class="">
      {{ testimonial.name }}
    </v-card-title>
    <v-card-subtitle>
      {{ testimonial.role }}
    </v-card-subtitle>
    <v-card-text class="body-text pa-4">
      {{ testimonial.text }}
    </v-card-text>
  </v-card>
</template>

<script setup>
const testimonials = [
  {
    id: 0,
    name: "Laura DiCicco",
    role: "Parent",
    text:
      "Everyone here cares about my kids, knows how to connect with them, and answers hundreds of questions for me. " +
      "It is the sweetest small practice, and we love Dr Ashley and Sabra!",
  },
  {
    id: 1,
    name: "Monique Braman",
    role: "Parent",
    text: "Dr. Ashley is an amazing person who cares deeply about her patients and families. She takes her time and is just wonderful. We are lucky to have her!",
  },
  {
    id: 2,
    name: "Rachel Chapin",
    role: "Parent",
    text: "The staff are amazing and patient. They all care about my son and his needs listens to my concerns as well. Been bringing my son for over 5 years.",
  },
  {
    id: 3,
    name: "Mary Etna Haac",
    role: "Parent",
    text: "Wonderful experience! Dr. Miller was attentive and helped my nervous 2 -yr old feel comfortable. We did not feel rushed and felt the space to ask questions comfortably.",
  },
];
</script>

<style scoped>
.testimonial-card {
  font-family: "Kalam", Roboto, Arial, sans-serif !important;
}
</style>
