<template>
  <v-footer class="footer" color="secondary">
    <v-container :class="mobile ? '' : 'd-flex flex-row justify-center align-center'">
      <!--
        A single centred flex row. Each link used to sit in its own auto-sized
        v-col, so the three split the container's full width and ended up ~250px
        apart on desktop.
      -->
      <nav class="footer-nav my-4" aria-label="Patient links">
        <p class="text-body-medium text-center font-weight-bold mb-2">Patient Links</p>
        <div class="footer-nav__links">
          <v-btn
            v-for="footerLink in footerLinks"
            :key="footerLink.id"
            :to="footerLink.route"
            class="footer-link"
            size="small"
            variant="text"
            >{{ footerLink.name }}</v-btn
          >
        </div>
      </nav>

      <v-row class="my-8" align="center" justify="center" no-gutters>
        <v-col cols="12" class="d-flex justify-center align-center my-2">
          <small class="footer-address text-center">{{ address }}</small>
        </v-col>
        <v-col cols="12" class="d-flex justify-center align-center my-2">
          <small><a :href="appStore.officePhone">Phone: (802) 763-7575</a></small>
        </v-col>
        <v-col cols="12" class="d-flex justify-center align-center my-2">
          <small><a :href="appStore.officeFax">Fax: (844) 289-8252</a></small>
        </v-col>
        <!--
          Stacked on mobile, side by side from sm up. Sharing one flex row at
          every width left the copyright wrapping to two ragged lines with the
          Facebook icon pushed off to the right of them.
        -->
        <v-col cols="12" class="footer-bottom my-2">
          <small class="text-center">{{ copy }}</small>
          <!-- A real link, not a click-handled icon: the old version rendered an
               <i role="button"> with no accessible name, and wasn't keyboard
               reachable or openable in a new tab. -->
          <a
            :href="appStore.facebookUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="footer-social d-inline-flex"
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

/**
 * Street address for the footer. The spaces inside each unit are non-breaking
 * (\u00A0), so a wrap can only ever land on one of the commas. As a single
 * plain string it broke as "PO Box" / "119"; split into <span>s the spaces
 * between them were dropped by Vue's whitespace condensing.
 */
const address = [
  "79\u00A0South\u00A0Windsor\u00A0Street",
  "PO\u00A0Box\u00A0119",
  "South\u00A0Royalton,\u00A0VT\u00A005068",
].join(", ");

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

/* The container is a flex row on desktop; without this the nav is treated as
   shrinkable and the last link wraps to its own line. */
.footer-nav {
  flex: 0 0 auto;
}

.footer-nav__links {
  display: flex;
  justify-content: center;
  gap: 0.25rem;
}

/* Balanced lines instead of orphaning "VT 05068" onto its own row. */
.footer-address {
  text-wrap: balance;
}

.footer-bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

@media (min-width: 600px) {
  .footer-bottom {
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
  }
}

a:not(.v-btn) {
  color: rgb(var(--v-theme-highlight));
}

/*a:visited, router-link:visited {*/
/*  color: rgb(var(--v-theme-heading));*/
/*}*/

a:not(.v-btn):hover {
  color: rgb(var(--v-theme-primary));
}

a:not(.v-btn):focus {
  color: sandybrown;
}
</style>
