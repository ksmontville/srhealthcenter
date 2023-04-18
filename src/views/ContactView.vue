<template>

  <v-container>

    <p class="text-h2 text-white text-center my-16">Contact Us</p>

    <p class="body-text text-body-1 text-white my-4">
      Do you have a
      <router-link :to="{path: 'patient-portal'}" @click="appStore.setActiveId('patient-portal')">
        patient portal account
      </router-link>?
    </p>

    <p class="body-text text-body-1 text-white my-4">
      This is the most secure method of contacting us over the internet. The patient portal allows you to request
      appointments and refills, view and print off immunization records and labs, see summaries of your visit and any
      handouts your provider thought might be helpful. You can also communicate securely your medical questions with
      staff and providers.  You can even upload a picture of yourself/your child that will go into our electronic
      medical record, it's always great to have a face with a name!  Now you can even pay your bill online!
    </p>

    <p class="body-text text-body-1 text-white my-4">
      Otherwise just call us <a :href="appStore.officePhone">(802) 763-7575</a> and we'll set something up today!
    </p>

     <p class="body-text text-body-1 text-white mt-4 mb-8">
       As always if this is an emergency please call 911.
     </p>


    <contact-info />

  </v-container>
</template>

<script setup>
  import { useAppStore } from "@/store/app";
  import ContactInfo from "@/components/ContactInfo.vue";

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
    color: #AA8B56;
  }

  a:focus, router-link:focus {
    color: sandybrown;
  }

</style>
