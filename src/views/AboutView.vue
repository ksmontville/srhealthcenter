<template>

  <p class="text-h2 text-white text-center my-16">It's a Pleasure to Meet You</p>
  <p class="text-white text-center">To reach our office staff please call our main office number at
    <a :href="`tel:${appStore.officePhoneStr}`">{{ appStore.officePhoneStr }}</a></p>

  <staff-cards />

</template>

<script setup>
  import StaffCards from "@/components/StaffCards.vue";
  import { useAppStore } from "@/store/app";

  const appStore = useAppStore();

</script>

<style scoped>

  a {
    color: #F0EBCE;
  }

</style>
