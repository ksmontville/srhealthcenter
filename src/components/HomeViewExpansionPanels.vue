<template>

  <v-expansion-panels>

    <v-expansion-panel id="aboutUs">
      <v-expansion-panel-title color="highlight">About Us</v-expansion-panel-title>
      <v-expansion-panel-text>
        <p class="body-text text-body-1 pa-4">{{ aboutUsText }}</p>
      </v-expansion-panel-text>
    </v-expansion-panel>

    <v-expansion-panel id="ourMission">
      <v-expansion-panel-title color="highlight">Our Mission</v-expansion-panel-title>
      <v-expansion-panel-text>
        <p class="body-text text-body-1 pa-4">{{ missionText.text }}</p>
        <v-list>
          <v-list-item v-for="bullet in missionText.bullets" :key="bullet">
            <p class="body-text text-body-2 pa-2">* {{ bullet }}</p>
          </v-list-item>
        </v-list>
        <p class="body-text text-body-1 pa-4">"{{ missionText.subtext }}"</p>
        <p class="text-subtitle-2 my-4 pa-4"> -- {{ missionText.signed }}</p>
      </v-expansion-panel-text>
    </v-expansion-panel>

    <v-expansion-panel id="testimonials">
      <v-expansion-panel-title color="highlight">Testimonials</v-expansion-panel-title>
      <v-expansion-panel-text v-for="testimonial in testimonials" :key="testimonial.id">
        <p class="body-text text-body-1 pa-4">"{{ testimonial.text }}"</p>
        <p class="body-text text-subtitle-2 my-4 pa-4"> -- {{ testimonial.signed }}</p>
      </v-expansion-panel-text>
    </v-expansion-panel>

    <v-expansion-panel id="contact">
      <v-expansion-panel-title color="highlight">Office Hours</v-expansion-panel-title>
      <v-expansion-panel-text>
        <contact-info />
      </v-expansion-panel-text>
    </v-expansion-panel>

  </v-expansion-panels>

</template>

<script setup>

  import ContactInfo from "@/components/ContactInfo.vue";

  const aboutUsText = "Welcome to South Royalton Health Center. If you're looking for accessible pediatric care, " +
    "a child–friendly environment, and a responsive team of pediatricians in the Upper Valley/Central Vermont, " +
    "then look no further. A medical home is defined as patient-centered, comprehensive, team-based, coordinated, accessible, " +
    "and focused on quality and safety, and thats us! We love kids, and our goal is to have a positive impact in the " +
    "lives of children by providing exceptional health care and compassionate service to the families we serve.\n" +
    "At South Royalton Health Center, we offer a full range of pediatric care including prenatal visits for " +
    "expecting parents, well–child check–ups, immunizations, sick appointments, mental health and women's health care. " +
    "Our caring team is committed to providing quality service in a comfortable, safe office setting where children and " +
    "parents can feel at ease. We also set aside time to equip parents with the tools and education necessary for the " +
    "development of healthy children from birth to adolescence. We have a dedicated nurse care coordinator to help " +
    "patients and families coordinate their specialty care and community/school education to achieve the best quality " +
    "of life possible and to help in the transition to adult medicine.\n"


  const testimonials = [
    {
      id: 0,
      text: "Everyone here cares about my kids, knows how to connect with them, and answers hundreds of questions for me. " +
        "It is the sweetest small practice, and we love Dr Ashley and Sabra!",
      signed: "Laura DiCicco"
    }
  ]

  const missionText = {
    "text": "Our practice is working together to build life-long relationships between our staff and our patients by " +
      "consistently providing our patients with compassion, excellence and value. To fulfill this mission, we are committed to:",
    "bullets": ["Improving the lives of the children we serve by providing quality care in a child-centered environment.\n",
      "Listening to our patients and their families who we are privileged to serve.\n",
      "Guiding our patients along a path of optimal health and wellness.\n",
      "Continually pursuing excellence at all levels through continuing education.\n",
    ],
    "subtext": "One of the reasons we are trusted advisers for parents is because we are a safe harbor" +
  "where they can ask questions, tell us their fears, be taken seriously and receive evidence-based information," +
    "reassurance and guidance,",
    "signed": "AAP President Moira A. Szilagyi, M.D., Ph.D., FAAP,"
  }
</script>

<style scoped>

</style>
