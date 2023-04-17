<template>


    <v-row align="center" justify="center">
      <v-col cols="">
        <p class="text-white text-h4 text-center">Office Hours</p>
        <v-list class="rounded">
          <v-list-item v-for="address in contactInfo.address" :key="address">
            <p class="text-center font-weight-bold">{{ address }}</p>
          </v-list-item>
          <v-list-item v-for="hours in contactInfo.hours" :key="hours">
            <p class="body-text text-body-1">* {{ hours }} </p>
          </v-list-item>
          <v-list-item class="d-flex align-center justify-center my-4">
            <p class="text-center font-weight-bold my-2">Office Phone</p>
            <v-btn :href="phone" color="secondary">{{contactInfo.phoneStr}}</v-btn>
          </v-list-item>
        </v-list>
      </v-col>

  <!--    <v-col class="d-flex flex-row justify-center">-->
  <!--      <v-btn :href="phone">{{contactInfo.phoneStr}}</v-btn>-->
  <!--    </v-col>-->
    </v-row>

</template>

<script setup>

  const phone = "tel:8027637575"

  const contactInfo = {
    "address": ["79 South Windsor Drive", "PO Box 119", "South Royalton, VT 05068"],
    "hours": ["Open Monday through Friday at 8:00 am with appointments beginning at 9:00 am until 5:00 pm",
      "Closed for lunch from 12:00 pm to 1:00 pm",
      "On-call clinician available after hours and on weekends at our primary phone number."
    ],
    "phoneStr": "(802) 763-7575",
  }
</script>

<style scoped>

</style>
