<template>
  <v-app-bar class="navbar" color="primary" density="prominent">
    <v-img :src="navbarBg" cover>
    <v-container fluid>

      <v-row>
        <v-col cols="4">
          <v-app-bar-title>
            <v-container class="d-flex flex-column align-center">
              <v-row>
                <v-col class="d-flex justify-center align-center" @click="appStore.activeId = null">
                  <v-btn @click="$router.push({path: '/'})" variant="text"
                         class="brand text-h2 d-flex justify-center">SRHC</v-btn>
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
          <v-row justify="center" align="center">
            <v-col cols="2" v-for="navLink in appStore.navLinks" :key="navLink.id" class="mx-2">
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
  import navbarBg from '../../../public/img/background/navbar-bg.jpg'
  import backgroundMedium from '../../assets/img/sr-bg-2-md.jpg'
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
