<template>

  <v-container class="pa-8">

    <p class="text-h2 text-white text-center my-16">New Patients</p>

    <p class="body-text text-body-1 text-white my-4">
      Thank you for choosing South Royalton Health Center as your child's medical home, where we always provide a
      comfortable, caring environment so our patients and their families can feel at ease. We've included helpful items
      on this page to ensure you and your child's first trip, and every trip, to our office is productive, stress-free and enjoyable.
      Also please check out the
      <router-link :to="{path: 'patient-portal'}" @click="appStore.setActiveId('patient-portal')">patient portal page</router-link>.
      Our patient portal allows you to communicate securely with your provider and office staff, request appointments,
      download immunization and health forms, and  even pay your bill online!
    </p>

    <p class="text-h6 text-primary font-weight-bold my-4">The Initial Visit</p>
    <p class="body-text text-body-1 text-white">
      Our compassionate pediatric providers do whatever it takes to make every visit to our office a pleasant, relaxed experience.
      With all of the important information about our practice available on our website, you can feel confident that
      you and your child are well-prepared for your first appointment. We also invite you to review our about us page in
      order to get to know our
      <router-link :to="{path: 'meet-our-providers-staff'}" @click="appStore.setActiveId('meet-our-providers-staff')">clinicians and staff</router-link>
      before you come in. We look forward to meeting you!
    </p>

    <p class="text-h6 text-primary font-weight-bold my-4">Prior to your first appointment pleases send or drop off:</p>
    <v-list class="body-text text-body-1 text-white" bg-color="transparent">
      <v-list-item><v-icon :icon="mdiHospital" class="mx-2" color="secondary"/>Complete immunization records</v-list-item>
      <v-list-item><v-icon :icon="mdiHospital" class="mx-2" color="secondary"/>Medical records from your previous pediatrician</v-list-item>
    </v-list>
    <p class="body-text text-body-1 text-white">
      For your first appointment, please fill out the
      <router-link :to="{path: 'patient-forms'}" @click="appStore.setActiveId('patient-forms')">New Patient Forms</router-link>.
      Please your <strong>insurance card</strong> with you and any questions or concerns for your provider (we love when people bring their list!).
      Please plan on arriving <strong>15 minutes early</strong> so your child can play in our playroom while we assure your paperwork is in order.
      These steps allow you to have the full time with your provider, and your child to get comfortable with our office
      prior to the appointment.
    </p>

    <p class="text-h6 text-primary font-weight-bold my-4">What to Bring to Your Appointment</p>
    <p class="body-text text-body-1 text-white">
      <v-list bg-color="transparent">
        <v-list-item><v-icon :icon="mdiHospital" class="mx-2" color="secondary"/>Insurance cards</v-list-item>
        <v-list-item><v-icon :icon="mdiHospital" class="mx-2" color="secondary"/>Co-Payment/deductible payment</v-list-item>
        <v-list-item><v-icon :icon="mdiHospital" class="mx-2" color="secondary"/>List of any questions or concerns for provider</v-list-item>
      </v-list>
    </p>

    <p class="text-h6 text-primary font-weight-bold my-4">Please be Ready to Tell Provider:</p>
    <p class="body-text text-body-1 text-white">
      <v-list class="" bg-color="transparent">
        <v-list-item><v-icon :icon="mdiHospital" class="mx-2" color="secondary"/>
          Child's medical history, medications, over the counter medications and supplements, and any allergies</v-list-item>
        <v-list-item><v-icon :icon="mdiHospital" class="mx-2" color="secondary"/>
          Details about your family medical history</v-list-item>
        <v-list-item><v-icon :icon="mdiHospital" class="mx-2" color="secondary"/>
          Recent care obtained outside our practice</v-list-item>
        <v-list-item><v-icon :icon="mdiHospital" class="mx-2" color="secondary"/>
          Info on how your child is doing at home, school, etc</v-list-item>
      </v-list>
    </p>

  </v-container>

</template>

<script setup>
  import { useAppStore } from "@/store/app";
  import { mdiHospital } from "@mdi/js";

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
