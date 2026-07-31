<template>
  <!-- The `prominent` density (128px) clipped the brand subtext, which needs ~155px.
       Note density multiplies an explicit height, so set the height on its own. -->
  <v-app-bar class="navbar" color="primary" :height="176">
    <v-img :src="navbarBg" cover>
      <v-container fluid>
        <v-row justify="center" align="center">
          <v-col cols="3">
            <v-app-bar-title>
              <v-row justify="center" align="center">
                <v-col class="py-2" @click="appStore.setActiveId('/')">
                  <v-img
                    :src="logo"
                    max-width="128"
                    alt="South Royalton Health Center"
                    @click="$router.push('/')"
                  />
                  <p class="brand text-title-small mt-1">
                    Improving the lives of children
                  </p>
                </v-col>
              </v-row>
            </v-app-bar-title>
          </v-col>

          <v-col cols="9">
            <v-row justify="center" align="center">
              <v-col
                v-for="navLink in appStore.navLinks"
                :key="navLink.id"
                class="mx-2"
              >
                <v-btn
                  :text="navLink.name"
                  :to="navLink.route"
                  variant="text"
                  @click="appStore.setActiveId(navLink.route)"
                  class="nav-link"
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
import navbarBg from "@/assets/img/background/navbar-bg.jpg";
import logo from "../../assets/img/srhc-logo-white.png";
import { useAppStore } from "@/store/app";

// const openFacebook = () => {
// window.open(facebookUrl)
// }

const appStore = useAppStore();
</script>

<style scoped>
.navbar {
  opacity: 95%;
}

.brand {
  font-family: "Kalam", Roboto, Arial, sans-serif !important;
}

.highlight {
  background-color: rgba(200, 200, 200, 0.2);
}
</style>
