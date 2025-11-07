<template>
  <v-container class="pa-8">

    <p class="text-h2 text-white text-center my-16">Services</p>

    <p class="text-h6 text-primary font-weight-bold my-4">Our Mission</p>
    <p class="body-text text-body-1 text-white">
      Our practice is working together to build life-long relationships between our staff and our patients by
      consistently providing our patients with compassion, excellence and value. To fulfill this mission, we are committed to:
      <v-list bg-color="transparent">
        <v-list-item v-for="missionBullet in missionBullets" :key="missionBullet">
          <v-icon :icon="mdiHospital" class="mx-2" color="secondary"/>
          {{ missionBullet }}
        </v-list-item>
      </v-list>
    </p>

    <p class="text-h6 text-primary font-weight-bold my-4">Services</p>
    <p class="body-text text-body-1 text-white">
      If you are preparing for your child's first visit, you can do a few things to help expedite the appointment
      <router-link :to="{path: 'new-patients'}" @click="appStore.setActiveId('new-patients')">please see our new patient page.</router-link>
    </p>
    <p class="body-text text-body-1 text-white">
      South Royalton Health Center offers a full array of services to help your child maintain good health.
      <v-list class="rounded mx-auto my-4" bg-color="highlight" density="compact" max-height="256" max-width="512">
        <p class="text-center pa-2"><strong>SRHC Services</strong></p>
        <v-list-item v-for="serviceBullet in serviceBullets" :key="serviceBullet">
          <v-icon :icon="mdiHospital" class="mx-2" color="primary"/>
          {{ serviceBullet }}
        </v-list-item>
        <v-list-item>
          <v-icon :icon="mdiHospital" class="mx-2" color="primary"/>
          Prescribing and Counseling for:
          <v-list bg-color="transparent">
            <v-list-item v-for="counselingBullet in counselingBullets" :key="counselingBullet">
              <v-icon :icon="mdiHospital" class="mx-2" color="primary"/>
              {{ counselingBullet }}
            </v-list-item>
          </v-list>
        </v-list-item>
      </v-list>
    </p>

    <v-row justify="center" align="center">
      <v-col cols="12" md="8">
        <p class="text-h6 text-primary font-weight-bold my-4">Free Weekly Play Group</p>
<!--        <p class="body-text text-body-1 text-white">-->
<!--          Danielle Isham, our Care Coordinator, teams up with Orange County Child Center and the Family Place with the-->
<!--          free weekly playgroup for families and caregivers with children birth to age five at the Red Door Church in South Royalton.-->
<!--        </p>-->
        <p class="body-text text-body-1 text-white my-4">
          Playgroups are a great way for families to connect, find out about other resources in the area and provide
          conversations and written information about child development and parenting.
<!--          Throughout the year we explore-->
<!--          activities that support fine motor and large motor development through crafts and manipulatives.-->
<!--          The room has many toys to expand the imagination and help little ones learn social cues, and we always end the-->
<!--          morning with some stories and nutritious snacks.  During the summer months we enjoy the outside with a large set-->
<!--          of swings and places to climb. We hope you will join us  on Wednesdays from 9:30-11 AM!-->
        </p>
        <p class="body-text text-body-1 text-white my-4">
          Local playgroups are funded by the Agency of Human Services, Department for Children and Families,
          Child Development Division through a Vermont Parent Child Center Network master grant.
        </p>
        <p class="body-text text-body-1 text-white my-4">
          The list of playgroups available in the area provided by Orange County and the Family Place can be found at websites below.
        </p>

        <v-list class="rounded my-4" bg-color="primary" density="compact" max-height="256" max-width="400">
          <p class="text-center pa-2"><strong>Free Local Playgroups</strong></p>
          <v-list-item>
            <v-icon :icon="mdiHospital" class="mx-2" color="white"/>
            <a href="https://www.orangecountypcc.org/" target="blank">Orange County Parent Child Center</a>
          </v-list-item>
          <v-list-item>
            <v-icon :icon="mdiHospital" class="mx-2" color="white"/>
            <a href="https://www.familyplacevt.org/playgroups/" target="blank">The Family Place</a>
          </v-list-item>
        </v-list>
      </v-col>

      <v-col cols="12" md="4">
        <figure>
          <v-img class="rounded-lg" :src="playgroupPhoto"
                 alt="A child plays with a book in the South Royalton Health Center patient waiting room." />
        </figure>
        <figcaption class="text-white text-center">
          <small>A child plays with a book in the South Royalton Health Center patient waiting room.</small>
        </figcaption>
      </v-col>
    </v-row>

<!--  <p class="body-text text-h6 text-primary text-center my-8">Weekly Playgroup Locations and Schedule</p>-->
<!--  <playgroup-table class="rounded mx-auto my-8"/>-->

  </v-container>
</template>

<script setup>
  import {useAppStore} from "@/store/app";
  import { mdiHospital } from "@mdi/js";
  import PlaygroupTable from "@/components/PlaygroupTable.vue";
  import playgroupPhoto from "@/assets/img/services/playgroup.jpg"

  const appStore = useAppStore()

  const missionBullets = [
    "Improving the lives of the children we serve by providing quality care in a child-centered environment.",
    "Listening to our patients and their families who we are privileged to serve.",
    "Guiding our patients along a path of optimal health and wellness.",
    "Continually pursuing excellence at all levels through continuing education.",
    "“One of the reasons we are trusted advisers for parents is because we are a safe harbor where they can ask questions, " +
    "tell us their fears, be taken seriously and receive evidence-based information, reassurance and guidance.” " +
    "-- AAP President Moira A. Szilagyi, M.D., Ph.D., FAAP"
  ]

  const serviceBullets = [
    "Preventative Health Care/Well Care",
    "Diaper Bank",
    "Vaccines",
    "Prenatal Visits (Meet Your Pediatrician)",
    "Menstrual and contraceptive care",
    "Same Day Acute Visits for Illness and Injury",
    "Concussion Management",
    "Lactation Support",
    "Nutritional Counseling",
    "On Site Basic Labs and Phlebotomy",
    "Support for those transitioning",
    "Developmental Evaluations",
    "Care Coordination",
    "504/IEP/School Meeting Attendance",
    "In-School Appointments",
    "Mental Health Care",
    "24 Hour Provider Availability (after-hours by phone)"
  ]

  const counselingBullets = [
    "ADHD",
    "Depression/Anxiety/OCD",
    "Eating Disorders",
    "PTSD",
    "ODD",
    "DMDD"
  ]

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
