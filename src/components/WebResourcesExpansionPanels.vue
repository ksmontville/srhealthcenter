<template>
  <v-sheet class="rounded mx-auto" elevation="8">
    <v-expansion-panels variant="accordion" >
      <v-expansion-panel v-for="key in Object.entries(webLinks)" :key="key" bg-color="secondary">

<!--        Key[0] gives the category, key[1] gives a list of objects-->

        <v-expansion-panel-title color="primary">
          {{ key[0] }}
        </v-expansion-panel-title>

        <v-expansion-panel-text>
          <v-list bg-color="transparent">
            <v-list-item v-for="object in key[1]" :key="object.id">
              <a :href="object.url" target="_blank">
                <v-icon :icon="mdiHospital" class="mx-2" color="white"/>{{ object.text }}
              </a>
              <v-list v-if="object.subtext" bg-color="transparent">
                <v-list-item>
                  <small>-- {{ object.subtext }}</small>
                </v-list-item>
              </v-list>
            </v-list-item>
          </v-list>
        </v-expansion-panel-text>

      </v-expansion-panel>

    </v-expansion-panels>
</v-sheet>
</template>

<script setup>
  import {mdiHospital} from "@mdi/js";
  import weblinks from "@/assets/weblinks.json"


  const webLinks = weblinks

</script>

<style scoped>

  a, router-link {
    color: #F0EBCE;
  }

  /*a:visited, router-link:visited {*/
  /*  color: #AA8B56;*/
  /*}*/

  a:hover, router-link:hover {
    color: #AA8B56;
  }

  a:focus, router-link:focus {
    color: sandybrown;
  }

</style>
