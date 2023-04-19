<template>

  <v-card v-for="testimonial in testimonials" :key="testimonial.id" max-width="400"
          color="highlight" class="testimonial-card mx-auto my-4" elevation="8">
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
      text: "Everyone here cares about my kids, knows how to connect with them, and answers hundreds of questions for me. " +
        "It is the sweetest small practice, and we love Dr Ashley and Sabra!",
    }
]
</script>

<style scoped>

  .testimonial-card {
      font-family: "Kalam", Roboto, Arial, sans-serif !important;
    }


</style>
