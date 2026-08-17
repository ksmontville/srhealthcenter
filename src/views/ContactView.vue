<template>
  <v-container class="pa-8">
    <h1 class="text-display-large text-white text-center my-16">Contact Us</h1>

    <v-row justify="center">
      <v-col cols="12" md="10" lg="9">
        <p class="body-text text-body-large text-white my-4">
          Do you have a
          <router-link to="/patient-portal"> patient portal account </router-link>?
        </p>

        <p class="body-text text-body-large text-white my-4">
          This is the most secure method of contacting us over the internet. The patient
          portal allows you to request appointments and refills, view and print off
          immunization records and labs, see summaries of your visit and any handouts
          your provider thought might be helpful. You can also communicate securely your
          medical questions with staff and providers. You can even upload a picture of
          yourself/your child that will go into our electronic medical record, it's
          always great to have a face with a name! Now you can even pay your bill
          online!
        </p>

        <p class="body-text text-body-large text-white my-4">
          Otherwise just call us <a :href="appStore.officePhone">(802) 763-7575</a> and
          we'll set something up today!
        </p>

        <!-- The boundary is stated explicitly: text is convenient but not a secure
             channel for health information, and it is not monitored out of hours. -->
        <p class="body-text text-body-large text-white my-4">
          Prefer to text? You can reach us at
          <a :href="appStore.officeText">(802) 763-7575</a> for non-medical questions —
          appointment requests, forms, directions and the like. Please send medical
          questions through the patient portal instead, where they reach your care team
          securely, and call us if something is urgent.
        </p>

        <p class="body-text text-body-large text-white mt-4 mb-8">
          As always if this is an emergency please call 911.
        </p>

        <contact-info />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useAppStore } from "@/store/app";
import ContactInfo from "@/components/ContactInfo.vue";
import { useSeo } from "@/composables/useSeo";

const appStore = useAppStore();

useSeo({
  title: "Contact Us",
  description:
    "Call, text or message South Royalton Health Center in South Royalton, Vermont. On-call pediatric clinician available after hours for established patients.",
});
</script>

<style scoped>
a:not(.v-btn) {
  color: rgb(var(--v-theme-highlight));
}

/*a:visited, router-link:visited {*/
/*  color: rgb(var(--v-theme-heading));*/
/*}*/

a:not(.v-btn):hover {
  color: rgb(var(--v-theme-heading));
}

a:not(.v-btn):focus {
  color: sandybrown;
}
</style>
