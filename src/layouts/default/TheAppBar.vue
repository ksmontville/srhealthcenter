<template>
  <!-- Matches TheNavBar: the prominent density clips the brand subtext. -->
  <v-app-bar class="navbar" color="primary" :height="168">
    <v-img :src="navbarBg" class="navbar-bg" alt="" cover>
      <v-app-bar-title>
        <v-container>
          <v-row justify="center" align="center">
            <v-col cols="10" class="py-2">
              <router-link to="/" class="brand-link">
                <v-img
                  :src="logo"
                  max-width="128"
                  alt="South Royalton Health Center — home"
                />
                <p class="brand text-title-small mt-1">
                  Improving the lives of children
                </p>
              </router-link>
            </v-col>

            <v-col cols="2">
              <v-app-bar-nav-icon
                aria-label="Open navigation menu"
                @click="toggleNav"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-app-bar-title>
    </v-img>
  </v-app-bar>

  <v-navigation-drawer
    v-model="navOpen"
    location="right"
    temporary
    width="280"
    color="highlight"
  >
    <nav aria-label="Main">
      <v-list density="compact" nav>
        <template v-for="navLink in appStore.navLinks" :key="navLink.id">
          <!-- Group: expands in place, open when the current page is inside it -->
          <v-list-group v-if="navLink.children" :value="navLink.name">
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                :title="navLink.name"
                class="font-weight-bold"
              />
            </template>

            <v-list-item
              v-for="child in navLink.children"
              :key="child.id"
              :to="child.route"
              :title="child.name"
              :active="isActive(child.route)"
              color="primary"
              @click="navOpen = false"
            />
          </v-list-group>

          <!-- Plain top-level link -->
          <v-list-item
            v-else
            :to="navLink.route"
            :title="navLink.name"
            :active="isActive(navLink.route)"
            color="primary"
            class="font-weight-bold"
            @click="navOpen = false"
          />
        </template>
      </v-list>
    </nav>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useAppStore } from "@/store/app";
import navbarBg from "@/assets/img/background/navbar-bg.jpg";
import logo from "@/assets/img/srhc-logo-white.png";

const appStore = useAppStore();
const route = useRoute();

const navOpen = ref(false);

const toggleNav = () => {
  navOpen.value = !navOpen.value;
};

const isActive = (target) =>
  target === "/" ? route.path === "/" : route.path === target;

// Close the drawer on navigation, including browser back/forward.
watch(
  () => route.path,
  () => {
    navOpen.value = false;
  },
);
</script>

<style scoped>
.navbar {
  opacity: 95%;
}

.brand-link {
  display: block;
  color: inherit;
  text-decoration: none;
}

.brand {
  font-family: "Kalam", Roboto, Arial, sans-serif !important;
}
</style>
