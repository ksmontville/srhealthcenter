<template>
  <v-container>

    <p class="text-h2 text-white text-center my-16">Expecting</p>

    <p class="text-h6 text-white font-weight-bold my-4">Congratulations</p>
    <p class="body-text text-body-1 text-white">
      Having a baby is one of the most exciting times in your life. Nothing is more rewarding than the privilege of
      caring for this new life and providing an environment in which both you and your child will thrive and develop.
      Choosing the pediatric provider that can best care for your child is an important decision.
      At South Royalton Health Center, we share your joy and enthusiasm and look forward to the opportunity in
      partnering with you on the exciting journey of raising a child.
    </p>

    <p class="text-h6 text-white font-weight-bold my-4">Getting Acquainted</p>
    <p class="body-text text-body-1 text-white">
      Please feel free to call our office if you have additional questions about us. Or, if you prefer, call today to
      schedule a free prenatal, "get acquainted" meeting.
    </p>

    <p class="text-h6 text-white font-weight-bold my-4">Upon Arrival</p>
    <p class="body-text text-body-1 text-white">
      When your baby is born at an affiliated hospital, simply tell your obstetrician and the hospital staff that you
      have chosen South Royalton Health Center as your child's pediatric provider. Our office will be notified of
      your baby's birth by the hospital staff. Prior to discharge, please contact our office about scheduling your
      baby's first visit to our office.
    </p>

    <p class="text-h6 text-white font-weight-bold my-4">Useful Resources</p>
    <p class="body-text text-body-1 text-white">
      Visit our <router-link :to="{path: 'services'}" @click="appStore.setActiveId('services')">Our Mission and Services</router-link> section to learn more about
      our practice and doctors.
    </p>
    <p class="body-text text-body-1 text-white">
      Explore our <router-link :to="{path: 'reading'}" @click="appStore.setActiveId('reading')">Education</router-link> section for some great tips on newborn care.
    </p>
    <p class="body-text text-body-1 text-white">
      Again, Congratulations! Enjoy this exciting time.
    </p>

  </v-container>

</template>

<script setup>
  import { useAppStore } from "@/store/app";

  const appStore = useAppStore()

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
