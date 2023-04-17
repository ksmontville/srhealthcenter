<template>
  <v-app class="app">
    <app-bar v-if="mobile"/>
    <nav-bar v-else />
      <v-parallax :src="mobile ? backgroundSmall : backgroundMedium">
        <default-view />
      </v-parallax>
    <default-footer />
  </v-app>
</template>

<script setup>
  import AppBar from './TheAppBar.vue'
  import NavBar from './TheNavBar.vue'
  import DefaultView from './View.vue'
  import DefaultFooter from "./TheFooter.vue";
  import backgroundSmall from '../../../src/assets/img/sr-bg-2-sm.jpg'
  import backgroundMedium from '../../../src/assets/img/sr-bg-2-md.jpg'
  import backgroundLarge from '../../../src/assets/img/sr-bg-2-lg.jpg'
  import { useDisplay } from "vuetify";
  import { ref } from "vue";

  const { mobile, height, width } = useDisplay()


</script>

<style scoped>

  .app {
    background-image: url("../../../src/assets/img/sr-bg-2-sm.jpg");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
  }

  @media (min-width: 768px) {
    .app {
      background-image: url("../../../src/assets/img/sr-bg-2-md.jpg");
    }
  }

</style>
