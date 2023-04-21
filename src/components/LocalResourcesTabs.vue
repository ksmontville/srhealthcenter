<template>
<v-row>
  <v-col cols="12" lg="3">
    <v-card color="secondary">
      <v-toolbar color="primary" density="comfortable">
        <v-toolbar-title class="text-center">Available Resources</v-toolbar-title>
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
    </v-card>
  </v-col>

  <v-col cols="12" lg="9">
    <v-window v-model="tab" class="text-white">
<!--      GENERAL HELP-->
      <v-window-item value="general">
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
        <v-container>
          <v-row no-gutters>
            <v-col v-for="item in foodResources" :key="item.id" cols="12" md="6" lg="4">
              <v-list bg-color="transparent">
                <v-list-item  :key="item.id">
                  <a v-if="item.url" :href="item.url" target="_blank">{{ item.text }}</a>
                  <p v-else><strong>{{ item.text }}</strong></p>
                  <v-img v-if="item.text === 'Veggie VanGo'" class="my-2"
                       :src="veggieVanGo"  alt="Logo for the Veggie VanGo food pantry." width="200" height="200"/>

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
            </v-col>
          </v-row>
        </v-container>
      </v-window-item>

<!--      EXPENSES-->
      <v-window-item value="expenses">
        <v-container fluid>
          <v-row no-gutters>
            <v-col v-for="item in expenseResources" :key="item.id" cols="12" md="6" lg="4">
              <v-list bg-color="transparent">
                <v-list-item>
                  <a v-if="item.url" :href="item.url" target="_blank">{{ item.text }}</a>
                  <p v-else><strong>{{ item.text }}</strong></p>
                  <v-img v-if="item.text === 'Capstone'" class="my-2"
                   :src="capstoneLogo" alt="Logo for Capstone." width="200" height="56"/>
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
            </v-col>
          </v-row>
        </v-container>
      </v-window-item>

<!--      MENTAL HEALTH-->
      <v-window-item value="mental-health">
        <v-container>
          <v-row no-gutters>
            <v-col cols="12">
              <v-list bg-color="transparent">
                <v-list-item>
                  <strong>National Suicide Help Line: <a href="tel:18002738255">1-800-273-8255</a></strong>
                </v-list-item>
                <v-list-item>
                  <p>
                    Also
                    <a href="https://suicidepreventionlifeline.org" target="_blank">https://suicidepreventionlifeline.org/chat/</a>
                    allows for live chat for emotional support and other resources.
                  </p>
                </v-list-item>
              </v-list>
            </v-col>

            <v-col v-for="item in mentalHealthResources" :key="item.id" cols="12" md="6" lg="4">
              <v-list bg-color="transparent">
                <v-list-item>

                  <a v-if="item.url" :href="item.url" target="_blank">{{ item.text }}</a>
                  <p v-else><strong>{{ item.text }}</strong></p>
                  <v-img v-if="item.text === 'Clara Martin Center (CMC)'" class="my-2"
                         :src="claramartinLogo" alt="Logo for the Clara Martin Center." width="200" height="56"/>
                  <v-img v-if="item.text === 'Suicide, Drug, and Alcohol Crisis Hotline'"  class="my-2"
                       :src="headrestLogo" alt="Logo for the Suicide, Drug, and Alcohol Crisis Center." width="200" height="56"/>

                  <v-list-item class="text-body-2">
                    <p v-if="item.subtext">{{ item.subtext }}</p>
                    <p v-if="item.contact">{{ item.contact }}</p>
                    <p v-if="item.address">{{ item.address }}</p>
                    <p v-if="item.phone">
                      <a :href="item.tel">{{ item.phone }}</a>
                    </p>
                  </v-list-item>

                  <v-list v-if="item.list" bg-color="transparent">
                    <v-list-item v-for="item in item.list" :key="item" class="text-body-2">
                      <p><strong>{{ item.name }}</strong></p>
                      <a v-if="item.url" :href="item.url" target="blank">{{ item.contact }}</a>
                      <p v-else>{{ item.contact }}</p>
                      <p>{{ item.text }}</p>
                      <a :href="item.tel">{{ item.phone }}</a>
                    </v-list-item>
                  </v-list>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </v-container>
      </v-window-item>

<!--      PARENTING AND CHILDCARE-->
      <v-window-item value="parenting-childcare">
        <v-container>
          <v-row no-gutters>
            <v-col v-for="item in parentingAndChildResources" :key="item.id" cols="12" md="6" lg="4">
              <v-list bg-color="transparent">
                <v-list-item>
                  <a v-if="item.url" :href="item.url" target="_blank">{{ item.text }}</a>
                  <p v-else><strong>{{ item.text }}</strong></p>
                  <v-img v-if="item.text === 'The Family Place'" class="my-2"
                         :src="theFamilyPlaceLogo" alt="Logo for The Family Place childcare center." width="200" height="56"/>
                  <v-img v-if="item.text === 'Orange County Parent Child Center'"  class="my-2"
                         :src="ocpccLogo" alt="Logo for the Orange County Parent Child Center" width="200" height="56"/>

                  <v-list-item class="text-body-2">
                    <p v-if="item.subtext" class="my-2">{{ item.subtext }}</p>
                    <p v-if="item.contact">{{ item.contact }}</p>
                    <p v-if="item.address">{{ item.address }}</p>
                    <p v-if="item.phone">
                      <a :href="item.tel">{{ item.phone }}</a>
                    </p>
                  </v-list-item>

                  <v-list v-if="item.list" bg-color="transparent">
                    <v-list-item v-for="item in item.list" :key="item" class="text-body-2">
                      <p><strong>{{ item.name }}</strong></p>
                      <a v-if="item.url" :href="item.url" target="blank">{{ item.contact }}</a>
                      <p v-else>{{ item.contact }}</p>
                      <p>{{ item.text }}</p>
                      <a :href="item.tel">{{ item.phone }}</a>
                    </v-list-item>
                  </v-list>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </v-container>
      </v-window-item>

<!--    TRANSPORTATION-->
      <v-window-item value="transportation">
        <v-container>
          <v-row no-gutters>
            <v-col v-for="item in transportationResources" :key="item.id" cols="12" md="6">
              <v-list bg-color="transparent">
                <v-list-item>
                  <a v-if="item.url" :href="item.url" target="_blank">{{ item.text }}</a>
                  <p v-else><strong>{{ item.text }}</strong></p>

                  <v-list-item class="text-body-2">
                    <p v-if="item.subtext" class="my-2">{{ item.subtext }}</p>
                    <p v-if="item.contact">{{ item.contact }}</p>
                    <p v-if="item.address">{{ item.address }}</p>
                    <p v-if="item.phone">
                      <a :href="item.tel">{{ item.phone }}</a>
                    </p>
                  </v-list-item>

                  <v-list v-if="item.list" bg-color="transparent">
                    <v-list-item v-for="item in item.list" :key="item" class="text-body-2">
                      <p><strong>{{ item.name }}</strong></p>
                      <a v-if="item.url" :href="item.url" target="blank">{{ item.contact }}</a>
                      <p v-else>{{ item.contact }}</p>
                      <p>{{ item.text }}</p>
                      <a :href="item.tel">{{ item.phone }}</a>
                    </v-list-item>
                  </v-list>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </v-container>
      </v-window-item>

<!--      DOMESTIC VIOLENCE-->
      <v-window-item value="domestic-violence">
        <v-container>
          <v-row no-gutters>
            <v-col v-for="item in domesticViolenceResources" :key="item.id" cols="12" md="6" lg="4">
              <v-list bg-color="transparent">
                <v-list-item>
                  <a v-if="item.url" :href="item.url" target="_blank">{{ item.text }}</a>
                  <p v-else><strong>{{ item.text }}</strong></p>
                  <v-img v-if="item.text === 'Wise'" class="my-2"
                         :src="wiseLogo" alt="Logo for WISE organization." width="200" height="96"/>
                  <v-img v-if="item.text === 'New Hampshire Coalition'" class="my-2"
                         :src="nhcLogo" alt="Logo for the New Hampshire Coalition against domestic violence" width="128" height="96"/>
                  <v-img v-if="item.text === 'Safeline Inc'" class="my-2"
                         :src="safelineLogo" alt="Logo for the Safeline Domestic Violence Victims Hotline" width="128" height="96"/>

                  <v-list-item class="text-body-2">
                    <p v-if="item.subtext" class="my-2">{{ item.subtext }}</p>
                    <p v-if="item.contact">{{ item.contact }}</p>
                    <p v-if="item.address">{{ item.address }}</p>
                    <p v-if="item.phone">
                      <a :href="item.tel">{{ item.phone }}</a>
                    </p>
                  </v-list-item>

                  <v-list v-if="item.list" bg-color="transparent">
                    <v-list-item v-for="item in item.list" :key="item" class="text-body-2">
                      <p><strong>{{ item.name }}</strong></p>
                      <a v-if="item.url" :href="item.url" target="blank">{{ item.contact }}</a>
                      <p v-else>{{ item.contact }}</p>
                      <p>{{ item.text }}</p>
                      <a :href="item.tel">{{ item.phone }}</a>
                    </v-list-item>
                  </v-list>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </v-container>
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
  import mentalHealthResources from "../assets/mentalHealthResources.json"
  import parentingAndChildResources from "../assets/parentingAndChildcareResources.json"
  import transportationResources from "../assets/transportationResources.json"
  import domesticViolenceResources from "../assets/domesticViolenceResources.json"
  import veggieVanGo from "../../public/img/localresources/veggievango.jpg"
  import capstoneLogo from "../../public/img/localresources/capstone.jpg"
  import claramartinLogo from "../../public/img/localresources/claramartin.jpg"
  import headrestLogo from "../../public/img/localresources/headrestlogo.jpg"
  import theFamilyPlaceLogo from "../../public/img/localresources/thefamilyplace.png"
  import ocpccLogo from "../../public/img/localresources/orangecountypcc.jpg"
  import wiseLogo from "../../public/img/localresources/wiselogofinallogo.png"
  import nhcLogo from"../../public/img/localresources/nhcadsv.jpg"
  import safelineLogo from "../../public/img/localresources/safeline.jpg"

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
