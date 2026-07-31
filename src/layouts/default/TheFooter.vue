<template>
  <v-footer class="footer" color="secondary">
    <v-container :class="mobile ? '' : 'd-flex flex-row justify-center align-center'">
      <v-row class="my-4" align="center" justify="center" no-gutters>
        <v-col cols="12">
          <p class="text-body-medium text-center font-weight-bold mb-4">
            Patient Links
          </p>
        </v-col>

        <v-col
          v-for="footerLink in footerLinks"
          :key="footerLink.id"
          class="d-flex flex-row justify-center"
        >
          <v-btn
            :to="footerLink.route"
            class="footer-link my-2"
            size="x-small"
            variant="text"
            >{{ footerLink.name }}</v-btn
          >
        </v-col>
      </v-row>

      <v-row class="my-8" align="center" justify="center" no-gutters>
        <v-col cols="12" class="d-flex justify-center align-center my-2">
          <small class="text-center"
            >79 South Windsor Street, PO Box 119, South Royalton, VT 05068</small
          >
        </v-col>
        <v-col cols="12" class="d-flex justify-center align-center my-2">
          <small><a :href="appStore.officePhone">Phone: (802) 763-7575</a></small>
        </v-col>
        <v-col cols="12" class="d-flex justify-center align-center my-2">
          <small><a :href="appStore.officeFax">Fax: (844) 289-8252</a></small>
        </v-col>
        <v-col cols="12" class="d-flex justify-center align-center my-2">
          <small class="">{{ copy }}</small>
          <!-- A real link, not a click-handled icon: the old version rendered an
               <i role="button"> with no accessible name, and wasn't keyboard
               reachable or openable in a new tab. -->
          <a
            :href="appStore.facebookUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="footer-social mx-4 d-inline-flex"
            aria-label="South Royalton Health Center on Facebook (opens in a new tab)"
          >
            <v-icon :icon="mdiFacebook" />
          </a>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
import { useDisplay } from "vuetify";
import { useAppStore } from "@/store/app";
import { mdiFacebook } from "@mdi/js";

const { mobile } = useDisplay();
const appStore = useAppStore();

// Derived rather than hardcoded so it doesn't go stale each January.
const copy = `Copyright © ${new Date().getFullYear()} South Royalton Health Center`;

const footerLinks = [
  {
    id: 0,
    name: "Portal",
    route: "/patient-portal",
  },
  {
    id: 1,
    name: "Forms",
    route: "/patient-forms",
  },
  // {
  //   id: 2,
  //   name: "Education",
  //   route: "education",
  // },
  {
    id: 3,
    name: "Contact",
    route: "/contact",
  },
];
</script>

<style scoped>
.footer {
  opacity: 85%;
}

a:not(.v-btn) {
  color: #f0ebce;
}

/*a:visited, router-link:visited {*/
/*  color: #AA8B56;*/
/*}*/

a:not(.v-btn):hover {
  color: #395144;
}

a:not(.v-btn):focus {
  color: sandybrown;
}
</style>
