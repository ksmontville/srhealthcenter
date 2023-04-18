<template>

  <v-table class="rounded">
    <thead>
      <tr>
        <th v-for="service in services" :key="service" class="text-center">
          <strong>{{ service }}</strong>
        </th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="dentalService in dentalServices" :key="dentalService.id">
        <td class="text-center">{{ dentalService.name }}</td>
        <td class="text-center">{{ dentalService.costChild}}</td>
        <td class="text-center">{{ dentalService.costAdult }}</td>
      </tr>
    </tbody>
  </v-table>

</template>

<script setup>

  const services = ["Service", "Ages 2-12", "Ages 13-Adult"]

  const dentalServices = [
    {
      id: 0,
      name: "Cleaning",
      costChild: "$65",
      costAdult: "$98"
    },
    {
      id: 1,
      name: "Fluoride",
      costChild: "$20",
      costAdult: "$20"
    },
    {
      id: 2,
      name: "Bite Wing X-Rays",
      costChild: "$45 (2 films)",
      costAdult: "$75 (4 films)"
    },
    {
      id: 3,
      name: "Sealants",
      costChild: "$40 per molar",
      costAdult: "$40 per molar"
    },
  ]

</script>

<style scoped>

</style>
