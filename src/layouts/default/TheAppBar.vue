<template>
  <v-app-bar class="navbar" color="primary" density="prominent">
    <v-img :src="navbarBg" class="navbar-bg" cover>
    <v-app-bar-title>
      <v-container>

        <v-row justify="center" align="center">

          <v-col cols="10" class="">
            <v-img :src="logo" max-width="128" @click="$router.push('/')"/>
            <p class="brand text-subtitle-2">Improving the lives of children</p>
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
        <v-btn variant="outlined" color="primary" :to="{path: '/'}" @click="appStore.setActiveId('/')">Home</v-btn>
      </v-list-item>
<!--      <v-list-item>-->
<!--        <v-btn variant="plain" @click="openPatientPortal">Patient Portal</v-btn>-->
<!--      </v-list-item>-->
      <v-list-item v-for="navLink in appStore.navLinks.filter(
        object => object.name !== 'Home')" :key="navLink.id" class="nav-link">
        <v-btn variant="text" :to="{path: navLink.route}" @click="appStore.setActiveId(navLink.route)">{{ navLink.name }}</v-btn>
        </v-list-item>
    </v-list>
  </v-navigation-drawer>

</template>

<script setup>
  import {ref} from "vue";
  import {useAppStore} from "@/store/app";
  import navbarBg from '@/assets/img/background/navbar-bg.jpg'
  import logo from "@/assets/img/srhc-logo-white.png";
  const appStore = useAppStore()

  const navOpen = ref(null)

  const toggleNav = () => {
    navOpen.value = !navOpen.value
  }


  // const openPatientPortal = () => {
  // window.open(appStore.patientPortalUrl)
  // }

</script>

<style scoped>

  .navbar {
    opacity: 95%;
  }

  .navbar-bg {

  }

  .navbar-icon {

  }

  .brand {
    font-family: "Kalam", Roboto, Arial, sans-serif !important;
  }

</style>
