<template>

  <v-table>
    <thead>
      <tr>
        <th v-for="column in columns" :key="column" class="text-center">
          <strong>{{ column }}</strong>
        </th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="playGroup in playGroups" :key="playGroup.id">
        <td class="text-center">{{ playGroup.town }}</td>
        <td class="text-center">{{ playGroup.day }}</td>
        <td class="text-center"><em>{{ playGroup.time }}</em></td>
        <td class="text-center">{{ playGroup.place }}</td>
        <td class="text-center">{{ playGroup.contact }}</td>
        <td class="text-center">{{ playGroup.phone }}</td>
      </tr>
    </tbody>
  </v-table>

</template>

<script setup>

  const columns = ["Town", "Day", "Time (am)", "Place", "Contact", "Phone"]

  const playGroups = [
    {
      id: 0,
      town: "Bradford",
      day: "Tuesday",
      time: "9:00 - 11:00",
      place: "Grace Methodist Church",
      contact: "OCPCC",
      phone: "(802) 685-2264"
    },
    {
      id: 1,
      town: "Brookfield",
      day: "Tuesday",
      time: "9:30 - 11:30",
      place: "First Congregational Church",
      contact: "OCPCC",
      phone: "(802) 685-2264"
    },
    {
      id: 2,
      town: "Randolph",
      day: "Thursday",
      time: "9:30 - 11:30",
      place: "St. John's Church, 15 Summer Street",
      contact: "OCPCC",
      phone: "(802) 685-2264"
    },
    {
      id: 3,
      town: "South Royalton",
      day: "Wednesday",
      time: "9:30 - 11:00",
      place: "United Church on the Green",
      contact: "OCPCC",
      phone: "(802) 685-2264"
    },
    {
      id: 4,
      town: "Tunbridge",
      day: "TBD",
      time: "9:00 - 11:00",
      place: "Orange County Parent Child Center, 693 VT RT 110",
      contact: "OCPCC",
      phone: "(802) 685-2264"
    },
    {
      id: 5,
      town: "West Fairlee",
      day: "Thursday",
      time: "9:00 - 11:00",
      place: "Westshire School",
      contact: "OCPCC",
      phone: "(802) 685-2264"
    },
  ]

</script>

<style scoped>

</style>
