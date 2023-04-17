<template>
  <v-app-bar class="" color="primary" density="prominent">

    <v-app-bar-title @click="$router.push({path: '/'})">
      <v-container class="d-flex flex-column align-center">
        <v-row justify="center" align="center">
          <v-col>
            <p class="brand text-h4" id="brand">SRHC</p>
          </v-col>

<!--          <v-col>-->
<!--            <v-icon :icon="mdiFacebook" @click="openFacebook"/>-->
<!--          </v-col>-->
        </v-row>

        <v-row>
          <v-col>
            <p class="brand text-body-1">Improving the lives of children</p>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar-title>

    <v-app-bar-nav-icon class="ma-auto" @click="toggleNav" />

  </v-app-bar>

  <v-navigation-drawer v-model="navOpen" location="right" temporary width="200">
    <v-list class="">
      <v-list-item>
        <v-btn class="my-4" variant="elevated" color="secondary" @click="openPatientPortal">Patient Portal</v-btn>
      </v-list-item>
      <v-list-item v-for="navLink in appStore.navLinks.filter(object => object.name !== 'Patient Portal')" :key="navLink.id"
                   :title="navLink.name" :to="navLink.route" />
    </v-list>
  </v-navigation-drawer>

</template>

<script setup>
  import {ref} from "vue";
  import {mdiFacebook} from "@mdi/js";
  import {useAppStore} from "@/store/app";

  const appStore = useAppStore()

  const patientPortalUrl = "https://12904.portal.athenahealth.com/"
  const facebookUrl = "https://www.facebook.com/southroyaltonhealthcenter"

  const navOpen = ref(null)

  const toggleNav = () => {
    navOpen.value = !navOpen.value
  }


  const openPatientPortal = () => {
  window.open(patientPortalUrl)
  }

  const openFacebook = () => {
    window.open(facebookUrl)
  }

</script>

<style scoped>

  .brand {
    font-family: "Kalam", Roboto, Arial, sans-serif !important;
  }

</style>
