<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="4" v-for="staffDetail in staffDetails" :key="staffDetail.id">
        <v-card color="secondary" max-width="400"  elevation="8"
                :title="staffDetail.name"
                :subtitle="staffDetail.cert"
                class="staff-card-header overflow-hidden ma-auto my-2">

          <template v-slot:append>
              <v-avatar size="x-large" class="ma-auto">
              <v-img :src="staffDetail.avatar" :alt="staffDetail.alt" cover/>
            </v-avatar>
          </template>

            <v-card-item :subtitle="staffDetail.field" />

            <v-card-text>
              <v-dialog v-model="staffDetail.showText"
                      :fullscreen="mobile"
                      transition="dialog-top-transition"
                      scrollable>

                <v-sheet color="highlight mx-auto" max-width="600">
                  <v-container class="my-4 pa-8">
                    <v-row align="center" justify="center">
                      <v-col cols="12">
                        <v-img :src="staffDetail.photo" class="staff-photo"
                               :alt="staffDetail.alt"
                               :aspect-ratio="mobile ? 1.33 : 1.7"/>
                      </v-col>

                      <v-col class="d-flex flex-column justify-center">
                        <p class="staff-card-text body-text text-body-2 pa-4">{{ staffDetail.text }}</p>
                        <v-btn @click="staffDetail.showText = false" color="primary" class="align-self-center my-8">Close</v-btn>
                      </v-col>

                    </v-row>
                  </v-container>
                </v-sheet>
              </v-dialog>
            </v-card-text>


          <v-sheet color="primary" class="staff-card-footer">
            <v-card-actions class="staff-card-actions justify-center">
              <v-btn class="staff-card-button" variant="flat" color="highlight"
                     @click="staffDetail.showText = !staffDetail.showText">
                Learn More
              </v-btn>
            </v-card-actions>
          </v-sheet>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<script setup>
  import {reactive } from "vue";
  import {useDisplay} from "vuetify";
  import millerPhoto from '@/assets/img/staff/dr-miller-card-photo.jpeg'
  import millerAvatar from '@/assets/img/staff/dr-miller-card-photo.jpeg'
  import freydaPhoto from '@/assets/img/staff/freyda-card-photo.jpg'
  import freydaAvatar from '@/assets/img/staff/freyda-card-avatar.jpg'
  import lincolnPhoto from '@/assets/img/staff/lincoln-card-photo.jpg'
  import lincolnAvatar from '@/assets/img/staff/lincoln-card-avatar.jpg'
  import durkeePhoto from '@/assets/img/staff/durkee-card-photo.jpg'
  import durkeeAvatar from '@/assets/img/staff/durkee-card-avatar.jpg'
  import ishamPhoto from '@/assets/img/staff/isham-card-photo.jpg'
  import ishamAvatar from '@/assets/img/staff/isham-card-avatar.jpg'
  import amberPhoto from '@/assets/img/staff/amber-card-photo.jpg'
  import amberAvatar from '@/assets/img/staff/amber-card-avatar.jpg'
  import williamsPhoto from '@/assets/img/staff/williams-card-photo.jpg'
  import williamsAvatar from '@/assets/img/staff/williams-card-avatar.jpg'

  const { mobile } = useDisplay()

  const staffDetails = reactive([
    {
      id: 0,
      name: "Ashley Miller",
      cert: "MD, FAAP",
      field: "Clinician",
      text: "Dr. Ashley was born and raised in southern New Hampshire, left briefly for college, returned to the " +
        "Upper Valley for medical school at Dartmouth and never left. She was lucky to spend time at " +
        "South Royalton Health Center during training and was very excited to join her practice in 2014 and become " +
        "the owner when Dr. Becky retired." +
        "She has a special interest in adolescent medicine and mental health, but truly enjoys following families " +
        "from birth to graduation. She is a fellow of the American Academy of Pediatrics, and before has been actively involved " +
        "at the state and national level. When not seeing patients you can find Dr. Ashley competing at local horse " +
        "trials (triathlons on horse back), hiking or snowshoeing in the surrounding mountains, and swimming in the " +
        "local rivers with her dogs.",
      avatar: millerAvatar,
      photo: millerPhoto,
      alt: "Photo of Dr. Ashley Miller at South Royalton Health Center",
      showText: false,
    },
    {
      id: 1,
      name: "Freyda Neyman",
      cert: "MD, FAAP",
      field: "Clinician",
      text: "Dr Freyda Neyman was raised in The Bronx but spent 30+ years in Philadelphia, where she went to college, " +
        "medical school and completed her pediatric residency. Dr Freyda spent most of her pediatric career in " +
        "Philadelphia academic centers teaching medical students and residents in both the  outpatient and pediatric " +
        "emergency care settings. She has a special interest in childhood, and youth, health and development. \n" +
        "\n" +
        "She and her partner live in Central Vermont and have three grown children, two German Shepherds and two cats. " +
        "When not seeing patients at SRHC or in the HealthHub school-based health clinics , she enjoys hiking , " +
        "kayaking and playing with her animals. ",
      avatar: freydaAvatar,
      photo: freydaPhoto,
      alt: "Photo of Freyda Neyman at South Royalton Health Center",
      showText: false,
    },
    {
      id: 2,
      name: "Amelia Lincoln",
      cert: "MCMHC",
      field: "Clinician",
      text: "Amelia P. Lincoln has worked with youth in Upper Valley schools for over 15 years, most recently as a " +
        "Student Assistance Professional at White River Valley Schools. Amelia has a master’s in education from " +
        "New England College, her master’s in clinical mental health counseling through " +
        "Northern Vermont University, and is a clinical mental health counselor and alcohol and drug counselor. " +
        "She is especially interested in working in the area of substance use prevention " +
        "and early intervention and helping youth value themselves. She is affectionately known by many as ‘the lady " +
        "with the dog,’ as her English Shepherd True has been a school therapy dog for many years and the two are most " +
        "often together. Amelia sees patients at SRHC and at the local schools.",
      avatar: lincolnAvatar,
      photo: lincolnPhoto,
      alt: "Photo of Amelia Lincoln at South Royalton Health Center",
      showText: false,
    },
    {
      id: 3,
      name: "Sabra Durkee",
      cert: "RN, Office Manager",
      field: "Nursing",
      text: "Answering your questions over the phone, rooming patients, giving shots, obtaining labs, managing " +
        "referrals, Sabra does it all!",
      avatar: durkeeAvatar,
      photo: durkeePhoto,
      alt: "Photo of Sabra Durkee at South Royalton Health Center",
      showText: false,
    },
    {
      id: 4,
      name: "Danielle Isham",
      cert: "RN, Care Coordinator",
      field: "Nursing",
      text: "Danielle grew up in Vermont, and graduated with her BSN from the University of Vermont School of " +
        "Nursing in 2011. During her years at school she spent time working as a Medical Assistant and EMT for a " +
        "local hospital and rescue squad. After graduating with her BSN Danielle worked at DHMC for several years on " +
        "their orthopedic/trauma/plastics unit prior to becoming the School Nurse at the " +
        "White River School-Bethel Campus in 2014. She continued her Nursing Career there until joining us in the " +
        "fall of 2022. When not in the office Danielle enjoys spending time at the lake with her family and friends.",
      avatar: ishamAvatar,
      photo: ishamPhoto,
      alt: "Photo of Danielle Isham at South Royalton Health Center",
      showText: false,
    },
    {
      id: 5,
      name: "Amber Barnard",
      cert: "Front Desk",
      field: "Support Staff",
      text: "Amber grew up in VT and left seeking adventure. Luckily she came back to us and found that she could " +
        "combine her passion of working/being around children and her previous office experience. " +
        "Now you can find her at the front desk at South Royalton Health Center ready to help patients and families " +
        "check into their appointments, answering the phones, and helping with billing questions. Come say Hi!",
      avatar: amberAvatar,
      photo: amberPhoto,
      alt: "Photo of Amber Barnard at South Royalton Health Center",
      showText: false,
    },
    {
      id: 6,
      name: "Catherine Williams",
      cert: "Front Desk",
      field: "Support Staff",
      text: "I am a local from South Royalton, VT, who grew up and went to school at South Royalton School K-12, " +
        "so I know many of the people from the area. When I’m not here you can find me doing what I love the most; " +
        "being a mom to my adorable 16mo old boy. I love children and have lots of experience working in an " +
        "office setting, so this job is a perfect fit for me!",
      avatar: williamsAvatar,
      photo: williamsPhoto,
      alt: "Photo of Catherine Williams at South Royalton Health Center",
      showText: false,
    },
  ])
</script>


<style scoped>

  .staff-card-header, .staff-card-footer {
    opacity: 90%;
  }

</style>
