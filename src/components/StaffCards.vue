<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="4"
        v-for="staffDetail in staffDetails"
        :key="staffDetail.id"
      >
        <v-card
          color="secondary"
          max-width="400"
          elevation="8"
          :title="staffDetail.name"
          :subtitle="staffDetail.cert"
          class="staff-card-header overflow-hidden ma-auto my-2"
        >
          <template v-slot:append>
            <v-avatar size="x-large" class="ma-auto">
              <v-img
                v-if="staffDetail.avatar"
                :src="staffDetail.avatar"
                :alt="staffDetail.alt"
                cover
              />
              <span v-else class="staff-initials">{{
                initials(staffDetail.name)
              }}</span>
            </v-avatar>
          </template>

          <v-card-item :subtitle="staffDetail.field" />

          <v-card-text>
            <v-dialog
              v-model="staffDetail.showText"
              :fullscreen="mobile"
              transition="dialog-top-transition"
              scrollable
            >
              <v-sheet color="highlight mx-auto" max-width="600">
                <v-container class="my-4 pa-8">
                  <v-row align="center" justify="center">
                    <v-col cols="12" v-if="staffDetail.photo">
                      <v-img
                        :src="staffDetail.photo"
                        class="staff-photo"
                        :alt="staffDetail.alt"
                        :aspect-ratio="mobile ? 1.33 : 1.7"
                      />
                    </v-col>

                    <v-col class="d-flex flex-column justify-center">
                      <h2 class="text-headline-small px-4">
                        {{ staffDetail.name
                        }}<span v-if="staffDetail.cert">, {{ staffDetail.cert }}</span>
                      </h2>

                      <p
                        v-for="(para, i) in staffDetail.bio"
                        :key="i"
                        class="staff-card-text body-text text-body-medium px-4 pt-4"
                      >
                        {{ para }}
                      </p>

                      <p
                        v-if="staffDetail.links?.length"
                        class="staff-card-text body-text text-body-medium px-4 pt-4"
                      >
                        <template
                          v-for="(link, i) in staffDetail.links"
                          :key="link.label"
                        >
                          <a
                            :href="link.href"
                            v-bind="externalAttrs(link.href)"
                            >{{ link.label }}</a
                          >
                          <span v-if="i < staffDetail.links.length - 1"> · </span>
                        </template>
                      </p>

                      <v-btn
                        @click="staffDetail.showText = false"
                        color="primary"
                        class="align-self-center my-8"
                        >Close</v-btn
                      >
                    </v-col>
                  </v-row>
                </v-container>
              </v-sheet>
            </v-dialog>
          </v-card-text>

          <v-sheet color="primary" class="staff-card-footer">
            <v-card-actions class="staff-card-actions justify-center">
              <v-btn
                class="staff-card-button"
                variant="flat"
                color="highlight"
                @click="staffDetail.showText = !staffDetail.showText"
              >
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
import { reactive } from "vue";
import { useDisplay } from "vuetify";
import millerPhoto from "@/assets/img/staff/dr-miller-card-photo.jpeg";
import abbiPhoto from "@/assets/img/staff/abbi-card-photo.jpeg";
import cindyPhoto from "@/assets/img/staff/cindy-card-photo.jpg";
import lincolnPhoto from "@/assets/img/staff/lincoln-card-photo.jpg";
import lincolnAvatar from "@/assets/img/staff/lincoln-card-avatar.jpg";
import ishamPhoto from "@/assets/img/staff/isham-card-photo.jpg";
import ishamAvatar from "@/assets/img/staff/isham-card-avatar.jpg";
import amberPhoto from "@/assets/img/staff/amber-card-photo.jpg";
import amberAvatar from "@/assets/img/staff/amber-card-avatar.jpg";

const { mobile } = useDisplay();

const initials = (name) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

const externalAttrs = (href) =>
  href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {};

// Bios rewritten from the client document "website edits.docx" (2026-07).
// TODO(client): Kahlee Holden still has no headshot — falls back to initials.
const staffDetails = reactive([
  {
    id: 0,
    name: "Ashley Miller",
    cert: "MD, FAAP, DipABLM",
    field: "Pediatrician & Practice Owner",
    bio: [
      "Ashley Miller, MD, FAAP, DipABLM, is a board-certified Pediatrician and Lifestyle Medicine physician and owner of South Royalton Health Center. She is passionate about partnering with children and families to build healthy habits that support lifelong wellness and empower children to become healthy, resilient adults.",
      "Originally from southern New Hampshire, Dr. Ashley returned to New Hampshire to attend the Geisel School of Medicine at Dartmouth and completed her pediatric residency at Dartmouth-Hitchcock Medical Center in 2009. After several years practicing pediatrics in New Hampshire, she was thrilled to join South Royalton Health Center in 2014 and became the practice owner in 2019.",
      "Today, Dr. Ashley is proud to lead an independent, woman-owned pediatric medical home dedicated to providing relationship-based, evidence-based, whole-child care for families throughout Vermont and New Hampshire.",
      "In addition to caring for patients, Dr. Ashley is a Fellow of the American Academy of Pediatrics (FAAP), a Clinical Assistant Professor of Pediatrics at the Geisel School of Medicine at Dartmouth, and remains active in the American Academy of Pediatrics at both the state and national levels. She was honored to be named the 2022 Green Mountain Pediatrician of the Year.",
      "When she's not caring for patients, you'll likely find Dr. Ashley competing in local dressage shows (think ice dancing on horseback!), hiking or snowshoeing in the surrounding mountains, or swimming in Vermont's rivers and lakes with her dogs. She feels incredibly fortunate to live and work in the community she calls home.",
    ],
    links: [
      {
        label: "Community leadership & media",
        href: "/community-leadership-media-advocacy",
      },
      { label: "Auricular acupuncture", href: "/auricular-acupuncture" },
    ],
    avatar: millerPhoto,
    photo: millerPhoto,
    alt: "Photo of Dr. Ashley Miller at South Royalton Health Center",
    showText: false,
  },
  {
    id: 1,
    name: "Abbi Henderson",
    cert: "MSN, APRN, CPNP-PC",
    field: "Pediatric Nurse Practitioner",
    bio: [
      "Abbi Henderson, MSN, APRN, CPNP-PC, is a Pediatric Nurse Practitioner at South Royalton Health Center who grew up in Rutland County and is proud to care for children and families in her home state of Vermont.",
      "As the mother of three young children, Abbi understands many of the joys and challenges families experience. She has special interests in newborn care, lactation support, and pediatric mental health. She enjoys partnering with families through every stage of childhood and believes compassionate, relationship-based care helps children and parents feel confident, supported, and empowered.",
      "Through HealthHubVT, Abbi serves as South Royalton Health Center's school-based pediatric clinician, providing medical care for students in local schools, participating in school team meetings, and collaborating with teachers, counselors, and other school professionals to strengthen the connection between healthcare and education so children can thrive both in and out of the classroom.",
      "Abbi earned her Bachelor of Science in Nursing from the University of Connecticut and her Master of Science in Nursing from Maryville University. She is also credentialed as a Forensic Nurse Examiner, providing compassionate, trauma-informed care for children and adolescents who have experienced physical or sexual abuse.",
      "When she's not caring for patients, Abbi enjoys spending time with her husband, their three young children, and their collection of animals. You'll often find her mountain biking, snowboarding, hiking, running, horseback riding, or exploring Vermont's beautiful outdoors.",
    ],
    links: [
      { label: "HealthHubVT", href: "https://www.healthhubvt.org/" },
      { label: "School-based visits", href: "/school-visits" },
    ],
    avatar: abbiPhoto,
    photo: abbiPhoto,
    alt: "Photo of Abbi Henderson at South Royalton Health Center",
    showText: false,
  },
  {
    id: 2,
    name: "Danielle Isham",
    cert: "BSN, RN",
    field: "Care Coordinator",
    bio: [
      "Danielle Isham, BSN, RN, is the Care Coordinator at South Royalton Health Center, where she helps children and families navigate the healthcare system and connect with the services they need. She works closely with families, schools, specialists, therapists, and community organizations to ensure every child receives coordinated, compassionate care. Whether she's helping a family access resources, facilitating referrals, or supporting communication between a child's healthcare team and school, Danielle is dedicated to making care more connected and less overwhelming.",
      "A Vermont native, Danielle earned her Bachelor of Science in Nursing from the University of Vermont in 2011. Her diverse nursing experience includes working as a medical assistant and EMT, caring for patients on Dartmouth Hitchcock Medical Center's orthopedic, trauma, and plastics unit, and serving as the school nurse at White River Valley School–Bethel Campus for eight years. This unique combination of hospital, school, and community-based nursing gives Danielle a well-rounded perspective on helping children and families navigate complex healthcare needs.",
      "Outside of work, Danielle enjoys spending time at the lake with her family and friends and taking advantage of everything Vermont has to offer.",
    ],
    avatar: ishamAvatar,
    photo: ishamPhoto,
    alt: "Photo of Danielle Isham at South Royalton Health Center",
    showText: false,
  },
  {
    id: 3,
    name: "Cindy Eggleston",
    cert: "LPN",
    field: "Nursing",
    bio: [
      "Cindy Eggleston, LPN, is one of the nurses families know and trust at South Royalton Health Center and an integral part of our clinical team. Working closely alongside Dr. Ashley, Cindy helps care for patients throughout the day, provides telephone triage and nursing advice, performs in-office blood draws, follows up with families after emergency department visits and hospitalizations, and helps ensure every child receives timely, compassionate care. She understands that a reassuring voice and a thoughtful conversation can make all the difference when parents are worried about their child, and she strives to make every interaction as calm and supportive as possible.",
      "A lifelong Vermonter, Cindy grew up in Bradford and is proud to care for families in the community she calls home. Before pursuing nursing, she managed horse farms and worked in a pediatric office, where she discovered her passion for caring for children and supporting families. She earned her Practical Nursing degree from Vermont State University and is currently pursuing her lactation counselor certification to better support breastfeeding families. She also has a special interest in behavioral health and is committed to continuing her education to provide even more comprehensive care.",
      "Outside of work, Cindy enjoys reading novels, hiking with her beloved dogs, and fishing Vermont's lakes and ponds for bass.",
    ],
    avatar: cindyPhoto,
    photo: cindyPhoto,
    alt: "Photo of Cindy Eggleston at South Royalton Health Center",
    showText: false,
  },
  {
    id: 4,
    name: "Amber Barnard",
    cert: "Office Manager",
    field: "Billing Specialist",
    bio: [
      "Amber Barnard is the Office Manager and Billing Specialist at South Royalton Health Center, where she helps ensure every family's experience is welcoming, organized, and seamless from the moment they contact our office. Whether she's answering scheduling questions, assisting with billing, or greeting families at the front desk, Amber is committed to making every interaction a positive one.",
      "A Vermont native, Amber left the state in search of adventure before ultimately finding her way back home. She enjoys being part of a close-knit pediatric practice where she can build lasting relationships with local children and families while helping keep the office running smoothly.",
      "When you visit South Royalton Health Center, there's a good chance Amber will be one of the first friendly faces to welcome you.",
    ],
    avatar: amberAvatar,
    photo: amberPhoto,
    alt: "Photo of Amber Barnard at South Royalton Health Center",
    showText: false,
  },
  {
    id: 5,
    name: "Kahlee Holden",
    cert: "Front Desk",
    field: "Support Staff",
    bio: [
      "Kahlee Holden is one of the first friendly faces you'll see when you visit South Royalton Health Center. She helps families navigate every step of their child's visit — from scheduling appointments and coordinating referrals to ensuring lab orders and follow-up are completed. Whether you're checking in for a visit or calling with a question, Kahlee is always happy to help.",
      "A lifelong Vermonter, Kahlee grew up in West Fairlee before raising her family in Groton and later settling in Bradford. As a mom herself, she understands the joys and challenges of raising children and enjoys helping make the healthcare experience a little easier for other families. She takes pride in helping families navigate the details of their child's care with kindness, organization, and efficiency.",
      "Outside of work, Kahlee enjoys reading and spending time with her family.",
    ],
    avatar: null,
    photo: null,
    alt: "Kahlee Holden at South Royalton Health Center",
    showText: false,
  },
  {
    id: 6,
    name: "Amelia Lincoln",
    cert: "MEd, LCMHC, LADC",
    field: "True Paths Counseling LLC",
    bio: [
      "Amelia P. Lincoln, MEd, LCMHC, LADC has been working with youth in the Upper Valley for over twenty years. She is known to many as 'the lady with the dog' as her English Shepherd True was the school therapy dog at White River Valley School and the two are most often seen together.",
      "Amelia is especially interested in substance use prevention and early intervention and in helping youth find their way. She sees patients via Telehealth, at SRHC and in the local schools through her private practice True Paths Counseling LLC.",
    ],
    links: [
      { label: "802-282-9281", href: "tel:8022829281" },
      {
        label: "amelia@truepathscounseling.net",
        href: "mailto:amelia@truepathscounseling.net",
      },
    ],
    avatar: lincolnAvatar,
    photo: lincolnPhoto,
    alt: "Photo of Amelia Lincoln at South Royalton Health Center",
    showText: false,
  },
]);
</script>

<style scoped>
.staff-card-header,
.staff-card-footer {
  opacity: 90%;
}

.staff-initials {
  font-weight: 700;
  color: #395144;
}

.staff-card-text a {
  color: #395144;
  font-weight: 700;
}

.staff-card-text a:hover {
  color: #4e6c50;
}
</style>
