<template>
  <router-view />
</template>

<script setup>
import { useHead } from "@unhead/vue";
import { clinicSchema } from "@/config/schema";

// Practice entity, emitted once for the whole site. Per-page schema (FAQPage,
// Physician, MedicalWebPage) references this by @id rather than repeating it.
useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(clinicSchema()),
    },
  ],
});
</script>

<style>
@font-face {
  font-family: "Kalam";
  src:
    local("Kalam"),
    url(/font/Kalam-Regular.ttf) format("truetype");
}
</style>
