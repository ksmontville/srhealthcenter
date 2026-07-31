<template>
  <!-- The `prominent` density (128px) clipped the brand subtext, which needs ~155px.
       Note density multiplies an explicit height, so set the height on its own. -->
  <v-app-bar class="navbar" color="primary" :height="176">
    <v-img :src="navbarBg" alt="" cover>
      <v-container fluid>
        <v-row justify="center" align="center">
          <v-col cols="3">
            <v-app-bar-title>
              <v-row justify="center" align="center">
                <v-col class="py-2">
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
              </v-row>
            </v-app-bar-title>
          </v-col>

          <v-col cols="9">
            <nav aria-label="Main">
              <v-row justify="end" align="center" no-gutters>
                <template v-for="navLink in appStore.navLinks" :key="navLink.id">
                  <!-- Dropdown group -->
                  <v-menu v-if="navLink.children" open-on-hover>
                    <template v-slot:activator="{ props }">
                      <v-btn
                        v-bind="props"
                        variant="text"
                        class="nav-link mx-1"
                        :active="isGroupActive(navLink)"
                        :append-icon="mdiChevronDown"
                      >
                        {{ navLink.name }}
                      </v-btn>
                    </template>

                    <v-list bg-color="primary" density="compact">
                      <v-list-item
                        v-for="child in navLink.children"
                        :key="child.id"
                        :to="child.route"
                        :active="isActive(child.route)"
                        color="highlight"
                      >
                        <v-list-item-title>{{ child.name }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>

                  <!-- Plain top-level link.
                       `:active` is set explicitly because v-btn otherwise derives it
                       from router-link-active, which is prefix-based — that made
                       "Home" (`/`) highlight on every page. -->
                  <v-btn
                    v-else
                    :to="navLink.route"
                    variant="text"
                    class="nav-link mx-1"
                    :active="isActive(navLink.route)"
                  >
                    {{ navLink.name }}
                  </v-btn>
                </template>
              </v-row>
            </nav>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
  </v-app-bar>
</template>

<script setup>
import { useRoute } from "vue-router";
import { mdiChevronDown } from "@mdi/js";
import navbarBg from "@/assets/img/background/navbar-bg.jpg";
import logo from "@/assets/img/srhc-logo-white.png";
import { useAppStore } from "@/store/app";

const appStore = useAppStore();
const route = useRoute();

// Home should only match exactly; every other route matches on its own path.
const isActive = (target) =>
  target === "/" ? route.path === "/" : route.path === target;

// A group highlights when any of its children is the current page.
const isGroupActive = (group) =>
  (group.children ?? []).some((child) => isActive(child.route));
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
