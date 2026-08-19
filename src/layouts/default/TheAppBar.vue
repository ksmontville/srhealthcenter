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

            <v-col cols="2" class="d-flex align-center justify-end">
              <theme-toggle />
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
    color="panel"
  >
    <nav aria-label="Main">
      <v-list density="compact" nav role="none">
        <template v-for="navLink in appStore.navLinks" :key="navLink.id">
          <!-- Group: expands in place, open when the current page is inside it -->
          <v-list-group v-if="navLink.children" :value="navLink.name">
            <!--
              The activator is a disclosure control, so it is spelled as one.

              Vuetify derives a list item's role from whether it is selectable,
              and a group activator carries a `value`, so it ships
              `role="option" aria-selected="false"`. Combined with the
              `role="none"` on the list above — which is there because the items
              are links, not listitems — that leaves an `option` with no
              `listbox` ancestor: invalid ARIA, and it fails axe's
              `aria-required-parent`. `aria-selected` is likewise not allowed
              outside listbox/grid/tab contexts.

              Vuetify also never emits `aria-expanded` here, so a screen reader
              had no way to know these open a submenu at all — the worse of the
              two problems, and one no automated audit reports.
            -->
            <template v-slot:activator="{ props, isOpen }">
              <v-list-item
                v-bind="props"
                :title="navLink.name"
                class="font-weight-bold"
                role="button"
                :aria-expanded="isOpen"
                :aria-selected="null"
              />
            </template>

            <v-list-item
              v-for="child in navLink.children"
              :key="child.id"
              :to="child.route"
              :title="child.name"
              :active="isActive(child.route)"
              @click="navOpen = false"
            />
          </v-list-group>

          <!-- Plain top-level link -->
          <v-list-item
            v-else
            :to="navLink.route"
            :title="navLink.name"
            :active="isActive(navLink.route)"
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
import ThemeToggle from "@/components/ThemeToggle.vue";
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

/*
 * Active drawer link.
 *
 * This was `color="primary"`, which paints the *text* dark green. On the dark
 * theme's panel that measured 1.24:1 — the current page was the one item you
 * couldn't read. Marking it with an amber wash instead leaves the text at the
 * panel's own foreground colour, so it stays legible in both themes by
 * construction rather than by a hand-picked hex (8.6:1 dark, 15.3:1 light).
 */
:deep(.v-list-item--active) {
  background-color: rgba(var(--v-theme-accent), 0.2);
}

:deep(.v-list-item--active .v-list-item-title) {
  font-weight: 700;
}
</style>
