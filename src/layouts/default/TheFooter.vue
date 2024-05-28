<template>

  <v-footer class="footer" color="secondary">
    <v-container :class="mobile? '' : 'd-flex flex-row justify-center align-center'">

      <v-row class="my-4" align="center" justify="center" no-gutters>
        <v-col cols="12">
          <p class="text-body-2 text-center font-weight-bold mb-4">Patient Links</p>
        </v-col>

        <v-col v-for="footerLink in footerLinks" :key="footerLink.id" class="d-flex flex-row justify-center">
          <v-btn :to="footerLink.route" @click="appStore.setActiveId(footerLink.route)"
                       class="footer-link my-2" size="x-small" variant="text">{{ footerLink.name }}</v-btn>
        </v-col>
      </v-row>

      <v-row class="my-8" align="center" justify="center" no-gutters>
        <v-col cols="12" class="d-flex justify-center align-center my-2">
          <small class="text-center">79 South Windsor Street, PO Box 119, South Royalton, VT 05068</small>
        </v-col>
        <v-col cols="12" class="d-flex justify-center align-center my-2">
          <small><a :href="appStore.officePhone">(802) 763-7575</a></small>
        </v-col>
        <v-col cols="12" class="d-flex justify-center align-center my-2">
          <small class="">{{ copy }}</small>
          <v-icon :icon="mdiFacebook" class="mx-4" @click="openFacebook"/>
        </v-col>
      </v-row>

    </v-container>
  </v-footer>

</template>

<script setup>
  import {useDisplay} from "vuetify";
  import { useAppStore } from "@/store/app";
  import { mdiFacebook } from "@mdi/js";

  const { mobile } = useDisplay()
  const appStore = useAppStore()

  const copy = "Copyright © 2023 South Royalton Health Center"

  const footerLinks = [
    {
      id: 0,
      name: "Portal",
      route: "patient-portal",
    },
    {
      id: 1,
      name: "Forms",
      route: "patient-forms",
    },
    // {
    //   id: 2,
    //   name: "Education",
    //   route: "education",
    // },
    {
      id: 3,
      name: "Contact",
      route: "contact",
    },
  ]

  const openFacebook = () => {
    window.open(appStore.facebookUrl)
  }

</script>

<style scoped>

  .footer {
    opacity: 85%;
  }

  a, router-link {
    color: #F0EBCE;
  }

  /*a:visited, router-link:visited {*/
  /*  color: #AA8B56;*/
  /*}*/

  a:hover, router-link:hover {
    color: #395144;
  }

  a:focus, router-link:focus {
    color: sandybrown;
  }

</style>
