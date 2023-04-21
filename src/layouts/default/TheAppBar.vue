<template>
  <v-app-bar class="navbar" color="primary" density="prominent">
    <v-img :src="navbarBg" class="navbar-bg" cover>
    <v-app-bar-title>
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="" class="text-center" @click="$router.push({path: '/'})">
            <p class="brand text-h3 fon" id="brand">SRHC</p>
            <p class="brand text-h6">Improving the lives of children</p>
          </v-col>
          <v-col cols="2">
            <v-app-bar-nav-icon class="" @click="toggleNav" />
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar-title>
    </v-img>
  </v-app-bar>

  <v-navigation-drawer v-model="navOpen" location="right" temporary width="200" color="highlight">
    <v-list class="">
      <v-list-item>
        <v-btn class="my-4" variant="elevated" color="secondary" @click="openPatientPortal">Patient Portal</v-btn>
      </v-list-item>
      <v-list-item v-for="navLink in appStore.navLinks.filter(object => object.name !== 'Patient Portal')" :key="navLink.id"
                   :title="navLink.name" :to="navLink.route" class="nav-link"/>
    </v-list>
  </v-navigation-drawer>

</template>

<script setup>
  import {ref} from "vue";
  import {useAppStore} from "@/store/app";
  import navbarBg from '../../../public/img/background/navbar-bg.jpg'
  import backgroundSmall from "../../../public/img/background/sr-bg-2-sm.jpg"
  const appStore = useAppStore()

  const navOpen = ref(null)

  const toggleNav = () => {
    navOpen.value = !navOpen.value
  }


  const openPatientPortal = () => {
  window.open(appStore.patientPortalUrl)
  }

</script>

<style scoped>

  .navbar {
    opacity: 95%;
  }

  .navbar-bg {

  }

  .navbar-icon {

  }

  .brand, .nav-link {
    font-family: "Kalam", Roboto, Arial, sans-serif !important;
  }

</style>
