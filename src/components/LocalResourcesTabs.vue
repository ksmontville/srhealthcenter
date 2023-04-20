<template>
<v-row>

  <v-col cols="12" md="3">
    <v-card>
      <v-toolbar>
        <v-toolbar-title>Resources by Need</v-toolbar-title>
      </v-toolbar>
      <v-card-title>
        <v-tabs v-model="tab" :direction="mobile? 'horizontal' : 'vertical'" :show-arrows="mobile">
          <v-tab value="general">General Help</v-tab>
          <v-tab value="food">Food</v-tab>
          <v-tab value="expenses">Expenses</v-tab>
          <v-tab value="mental-health">Mental Health</v-tab>
          <v-tab value="parenting-childcare">Parenting & Childcare</v-tab>
          <v-tab value="transportation">Transportation</v-tab>
          <v-tab value="domestic-violence">Domestic Violence</v-tab>
        </v-tabs>
      </v-card-title>
      <v-card-text>
        HELLO
      </v-card-text>
    </v-card>
  </v-col>

  <v-col cols="12" md="9">
    <v-window v-model="tab" class="text-white">
<!--      GENERAL HELP-->
      <v-window-item value="general">
        <p class="text-h6 ma-auto text-decoration-underline">General Help</p>
        <v-list bg-color="transparent">
          <v-list-item v-for="item in generalHelp" :key="item.id">
            <a :href="item.url" target="_blank"><strong>{{ item.text }}</strong></a>
            <v-list-item v-if="item.subtext" class="text-body-2">{{ item.subtext }}</v-list-item>

            <v-list v-if="item.list" bg-color="transparent" class="text-body-2">
              <v-list-item v-for="item in item.list" :key="item">
                {{ item.text }}: <a :href="item.tel">{{ item.phone }}</a>
              </v-list-item>
            </v-list>
          </v-list-item>
        </v-list>
      </v-window-item>

<!--      FOOD RESOURCES-->
      <v-window-item value="food">
        <p class="text-h6 ma-auto text-decoration-underline">Food Pantries</p>
         <v-list bg-color="transparent">
          <v-list-item v-for="item in foodResources" :key="item.id">

            <a v-if="item.url" :href="item.url" target="_blank">{{ item.text }}</a>
            <p v-else><strong>{{ item.text }}</strong></p>
            <v-img v-if="item.text === 'Veggie VanGo'" :src="veggieVanGo"  max-width="200"/>

            <v-list-item v-if="item.subtext" class="text-body-2">{{ item.subtext }}</v-list-item>
            <v-list v-if="item.list" bg-color="transparent">
              <v-list-item v-for="item in item.list" :key="item" class="text-body-2">
                <p>{{ item.contact }}</p>
                <p>{{ item.text }}</p>
                <a :href="item.tel">{{ item.phone }}</a>
              </v-list-item>
            </v-list>
          </v-list-item>
        </v-list>
      </v-window-item>

<!--      EXPENSES-->
      <v-window-item value="expenses">
        <p class="text-h6 ma-auto text-decoration-underline">Help With Bills and Expenses</p>
         <v-list bg-color="transparent">
          <v-list-item v-for="item in expenseResources" :key="item.id">

            <a v-if="item.url" :href="item.url" target="_blank">{{ item.text }}</a>
            <p v-else><strong>{{ item.text }}</strong></p>
            <v-img v-if="item.text === 'Capstone'" :src="capstoneLogo" max-width="200"/>

            <v-list-item class="text-body-2">
              <p v-if="item.subtext">{{ item.subtext }}</p>
              <p v-if="item.address">{{ item.address }}</p>
              <p v-if="item.phone">
                <a :href="item.tel">{{ item.phone }}</a>
              </p>
            </v-list-item>

            <v-list v-if="item.list" bg-color="transparent">
              <v-list-item v-for="item in item.list" :key="item" class="text-body-2">
                <p><strong>{{ item.name }}</strong></p>
                <a v-if="item.url" :href="item.url" target="blank">{{ item.contact }}</a>
                <p v-else><em>{{ item.contact }}</em></p>
                <p>{{ item.text }}</p>
                <a :href="item.tel">{{ item.phone }}</a>
              </v-list-item>
            </v-list>
          </v-list-item>
        </v-list>
      </v-window-item>

    </v-window>

  </v-col>


</v-row>
</template>

<script setup>
  import {ref} from "vue";
  import {useDisplay} from "vuetify";
  import generalHelp from "../assets/generalHelp.json"
  import foodResources from "../assets/foodResources.json"
  import expenseResources from "../assets/expenseResources.json"

  import veggieVanGo from "../../public/img/localresources/veggievango.jpg"
  import capstoneLogo from "../../public/img/localresources/capstone.jpg"

  const { mobile } = useDisplay()

  const tab = ref(null)

</script>

<style scoped>

  a, router-link {
    color: #F0EBCE;
  }

  /*a:visited, router-link:visited {*/
  /*  color: #AA8B56;*/
  /*}*/

  a:hover, router-link:hover {
    color: #4E6C50;
  }

  a:focus, router-link:focus {
    color: sandybrown;
  }

</style>
