<template>
<v-container class="pa-8">

  <p class="text-h2 text-white text-center my-16">School Visits</p>
  <p class="text-h6 text-primary text-center my-16">
    South Royalton, Strafford, Chelsea, Sharon, Bethel, Tunbridge,
    Orange, Washington, and Williamstown, Vermont
  </p>
  <v-row justify="center" align="baseline">
    <v-col cols="12" id="schoolServices">
      <p class="body-text text-body-1 text-white">
        <a href="https://www.healthhubvt.org/" target="_blank">HealthHUB</a> was started in the 1990s by Robert Wood Johnson Foundation grants.
        It is a non-profit, 501(c3) organization. HealthHUB operates in collaboration with the
        South Royalton Health Center providing school based health care. Our shared vision is to make
        comprehensive health services available to children in a  location that is readily accessible to all,
        thereby improving their overall health and wellbeing, helping them be ready to learn.
      </p>

      <p class="text-h6 text-primary text-center font-weight-bold my-8">Why School Based?</p>
      <p class="body-text text-body-1 text-white">
        Since school is where students spend a considerable part of their day, providing health services, there are many benefits.
      </p>
      <v-row align="end" justify="center">
        <v-col cols="12" md="4">
          <v-list class="rounded mt-4 pa-4 mx-auto" bg-color="highlight" max-width="400">
            <v-list-item>
              <v-icon :icon="mdiHospital" class="mx-2" color="primary"/>
              <strong>Parents benefit</strong> by not losing time from work and getting prompt treatment for their children.
            </v-list-item>
            <v-list-item>
              <v-icon :icon="mdiHospital" class="mx-2" color="primary"/>
              <strong>Students and teachers benefit</strong> by having more class time because appointments are scheduled in
              coordination with the student’s schedule.
            </v-list-item>
            <v-list-item>
              <v-icon :icon="mdiHospital" class="mx-2" color="primary"/>
              <strong>Everyone benefits</strong> by having a health care professional regularly in the school available for questions
              and able to provide accurate information to children in a timely and friendly manner.
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="12" md="4">
          <v-sheet color="secondary" class="rounded pa-4 mx-auto pa-8" elevation="8" max-width="400">
            <p class="my-4 text-h5"><strong>Did you know...</strong></p>
            <p class="text-h6">... that the average in-school visit SAVES parents 2 hours of travel and work time, while reducing lost
              classroom time for students and teachers by 1.5 hours!</p>
          </v-sheet>
        </v-col>
      </v-row>
    </v-col>

    <v-col>
      <p class="text-h6 text-primary text-center font-weight-bold my-8">To Schedule Appointments:</p>
      <p class="body-text text-body-1 text-white">Currently to schedule for medical or counseling
        please <a :href="appStore.officePhone">call</a> the SRHC main office and we will get you connected!
        For more information please feel free to email us at <a href="mailto:HealthHubVT@gmail.com.">HealthHubVT@gmail.com</a>
      or visit the HealthHUB webpage at <a href="https://www.healthhubvt.org/" target="_blank">https://www.healthhubvt.org/</a> for more information.</p>

    </v-col>

<!--    <v-col cols="12">-->
<!--      <p class="text-h5 text-primary text-center body-text my-8">HealthHub provides the following services to schools:</p>-->
<!--    </v-col>-->

<!--    <v-col cols="12" md="6" id="medicalServices">-->
<!--      <p class="text-h6 text-primary text-center font-weight-bold my-4">Medical Services</p>-->
<!--      <v-list bg-color="highlight" class="rounded" elevation="8">-->
<!--        <v-list-item v-for="medicalService in medicalServices" :key="medicalService" class="rounded">-->
<!--          <v-icon :icon="mdiHospital" class="mx-2" color="primary"/>-->
<!--          {{ medicalService }}-->
<!--        </v-list-item>-->
<!--      </v-list>-->
<!--    </v-col>-->


<!--    <v-col cols="12" md="6" id="mentalHealthServices">-->
<!--      <p class="text-h6 text-primary text-center font-weight-bold my-4">Mental Health Services</p>-->
<!--      <p class="body-text text-body-1 text-white">-->
<!--        <strong>Kimberly J. Therrien</strong> is a Licensed Independent Clinical Social Worker (LICSW) who has 25 years of experience-->
<!--        working with children and families. Kim utilizes a variety of therapeutic approaches in her clinical work-->
<!--        including, Psychodynamic Therapy, Trauma Focused Cognitive Behavior Therapy,-->
<!--        The Helping the Non-Compliant Child Curriculum, Attachment Theory, as well as other evidenced based curriculums.-->
<!--        She provides services in her office at the South Royalton Health Center and at schools in Strafford, South Royalton,-->
<!--        Bethel, and Tunbridge.-->
<!--      </p>-->
<!--      <p class="body-text text-body-1 text-white">-->
<!--        Please <a :href="appStore.officePhone">call</a> SRHC and live a message on Kim Therrien's voicemail to schedule an appointment.-->
<!--        You may also start the process by reaching out to your child’s school nurse or guidance counselor.-->
<!--      </p>-->
<!--    </v-col>-->

<!--    <v-col cols="12" id="dentalServices">-->
<!--      <p class="text-h6 text-primary text-center font-weight-bold my-4">Dental Services</p>-->
<!--      <p class="body-text text-body-1 text-white my-4">The clinic’s dental hygienist provides dental cleanings, screenings fluoride, digital diagnostic x-rays,-->
<!--        and sealants every six to seven months for the schools of South Royalton, Strafford, Chelsea, Sharon, Bethel,-->
<!--        Tunbridge, Orange, Washington, Stockbridge, Rochester, and Williamstown, Vermont. The school clinic has a-->
<!--        dental trailer that travels from school to school. After a cleaning, if a child needs restorative work,-->
<!--        the dental hygienist refers the child back to their own dentist, or helps the parents find a dental home.</p>-->

<!--      <p class="body-text text-body-1 text-white my-4">-->
<!--        Our dental hygienist, Janine Reeves, RDH, is able to bill most dental insurance companies,-->
<!--        including Dr. Dynosaur. If you don’t have dental insurance for your child, the fees for services are as follows:-->
<!--      </p>-->

<!--      <v-row justify="center" align="start">-->
<!--        <v-col cols="12" md="3">-->
<!--          <v-sheet class="mx-auto my-8" max-width="400">-->
<!--            <v-sheet color="amber-lighten-1" class="text-h6 text-center pa-4">-->
<!--              <strong>NEW!</strong> We are now offering these dental services to adults!-->
<!--            </v-sheet>-->
<!--            <v-sheet color="blue-grey-lighten-2" class="pa-4">-->
<!--              <p class="body-text text-body-1 text-center my-2">To schedule appointments call</p>-->
<!--              <p class="text-center mb-4"><a href="tel:8024316060">(802) 431-6060</a></p>-->
<!--            </v-sheet>-->
<!--          </v-sheet>-->
<!--        </v-col>-->

<!--        <v-col cols="12" md="6">-->
<!--          <dental-services-table class="my-8"/>-->
<!--        </v-col>-->

<!--        <v-col cols="12" md="3">-->
<!--          <p class="text-h6 text-primary text-center font-weight-bold my-4">Resources for adults without dental insurance:</p>-->
<!--          <v-list bg-color="transparent" class="text-white text-center pa-4">-->
<!--            <v-list-item v-for="dentalResource in dentalResources" :key="dentalResource.id">-->
<!--              <p><strong>{{ dentalResource.name }}</strong>, {{ dentalResource.address }}</p>-->
<!--              <a :href="dentalResource.tel">{{ dentalResource.phone }}</a>-->
<!--            </v-list-item>-->
<!--          </v-list>-->
<!--        </v-col>-->
<!--      </v-row>-->



<!--    </v-col>-->
  </v-row>

  </v-container>

</template>

<script setup>
  import { mdiHospital } from "@mdi/js";
  import {useAppStore} from "@/store/app";
  import DentalServicesTable from "@/components/DentalServicesTable.vue";

  const appStore = useAppStore()

  const medicalServices = [
    "Diagnosis, treatment and follow-up of illness and injuries",
    "Approriate prescriptions and medications",
    "Monitoring of chronic conditions",
    "Immunizations",
    "Audiological and vision screenings",
    "Wellness exams and sports physicals",
    "Nutrition and weight programs",
    "Resources for reducing “at-risk” behavior such as teen pregnancies, sexually transmitted diseases, and substance abuse."
  ]

  const dentalResources = [
    {
      id: 0,
      name: "The Health Center",
      address: "Plainfield, VT",
      phone: "(802) 454-1047",
      tel: "tel:8024541047"
    },
    {
      id: 1,
      name: "Red Logan Dental Clinic",
      address: "White River Jct., VT",
      phone: "(802) 295-7573",
      tel: "tel:8022957573"
    },
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
