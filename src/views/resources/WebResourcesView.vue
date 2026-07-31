<template>
  <v-container class="pa-8">

    <p class="text-display-large text-white text-center my-16">Child Health Web Links</p>
    <p class="text-display-small text-white text-center my-16"><em>SRHC Recommended</em></p>

    <p class="text-title-large text-primary font-weight-bold">Disclaimer</p>
    <p class="body-text text-body-large text-white">
      This website is an informational guide only; it cannot answer personal health-related questions, legal questions,
      or research questions. The information presented here should not be substituted for medical, legal or other
      professional advice. Please feel free to call us about your child's health!
    </p>

    <p class="text-title-large text-white text-center font-weight-bold my-16">
      Please like us on <a :href="appStore.facebookUrl" target="_blank">Facebook <v-icon :icon="mdiFacebook" class="mx02" /></a>
      for current hot topic news and fun!</p>

    <p class="text-title-large text-white font-weight-bold my-4"></p>
    <p class="body-text text-body-large text-white">
    </p>

    <p class="text-title-large text-white font-weight-bold my-4"></p>
    <p class="body-text text-body-large text-white"></p>

    <v-container class="my-8">
      <v-row justify="center" align="start">
        <v-col cols="12" md="3">
          <p class="body-text text-title-large tex-center text-white">Select a topic panel for links to helpful resources.</p>
        </v-col>
        <v-col cols="12" md="9">
          <web-resources-expansion-panels />
        </v-col>
      </v-row>

    </v-container>

</v-container>
</template>

<script setup>
  import {mdiFacebook} from "@mdi/js";
  import {useAppStore} from "@/store/app";
  import WebResourcesExpansionPanels from "@/components/WebResourcesExpansionPanels.vue";

  const appStore = useAppStore()


</script>

<style scoped>

  a:not(.v-btn) {
    color: #F0EBCE;
  }

  /*a:visited, router-link:visited {*/
  /*  color: #AA8B56;*/
  /*}*/

  a:not(.v-btn):hover {
    color: #4E6C50;
  }

  a:not(.v-btn):focus {
    color: sandybrown;
  }

</style>
