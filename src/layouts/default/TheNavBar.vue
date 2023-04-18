<template>
  <v-app-bar class="navbar" color="primary" density="prominent">
    <v-img :src="backgroundMedium" cover>
    <v-container fluid>
      <v-row align="stretch">

        <v-col>
          <v-app-bar-title>
            <v-container class="d-flex flex-column align-center">
              <v-row>
                <v-col class="d-flex justify-center align-center" @click="appStore.activeId = null">
                  <v-btn @click="$router.push({path: '/'})" variant="text"
                         class="brand text-h3 d-flex justify-center">SRHC</v-btn>
                </v-col>
<!--                <v-col>-->
<!--                  <v-icon :icon="mdiFacebook" class="mx-4" @click="openFacebook"/>-->
<!--                </v-col>-->
              </v-row>
              <v-row>
                <v-col>
                  <p class="brand text-h6">Improving the lives of children</p>
                </v-col>
              </v-row>
            </v-container>
          </v-app-bar-title>
        </v-col>

        <v-col cols="8">
          <v-row class="d-flex justify-center ma-auto">
            <v-col v-for="navLink in appStore.navLinks" :key="navLink.id" class="d-flex justify-center">
              <v-btn :text="navLink.name" :to="navLink.route" variant="text"
              @click="appStore.activeId = navLink.id"
                     class="nav-link"
                     :class="appStore.activeId === navLink.id ? 'highlight' : ''"
              />
            </v-col>
          </v-row>
        </v-col>

      </v-row>
    </v-container>
</v-img>
  </v-app-bar>

</template>

<script setup>
  import backgroundSmall from '../../../src/assets/img/sr-bg-2-sm.jpg'
  import backgroundMedium from '../../../src/assets/img/sr-bg-2-md.jpg'
  import backgroundLarge from '../../../src/assets/img/sr-bg-2-lg.jpg'
  import {useAppStore} from "@/store/app";

  // const openFacebook = () => {
  // window.open(facebookUrl)
  // }

  const appStore = useAppStore()

</script>

<style scoped>

  .navbar {
    opacity: 95%;
  }

  .brand, .nav-link {
    font-family: "Kalam", Roboto, Arial, sans-serif !important;
  }

  .highlight {
    background-color: rgba(200, 200, 200, 0.2);
  }
</style>
