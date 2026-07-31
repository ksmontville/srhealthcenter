<template>
  <!-- pa-8 matches the container padding used by every other page. -->
  <v-container class="mt-8 pa-8" id="hero">
    <v-row class="mx-auto">
      <v-sheet
        color="primary"
        class="rounded-lg ma-auto pa-4 w-100"
        elevation="16"
      >
        <v-col cols="12">
          <v-lazy>
            <v-img
              :src="logo"
              alt="South Royal Health Center Logo"
              max-height="256"
            />
          </v-lazy>
        </v-col>

        <v-col cols="12" class="my-4">
          <h1 class="hero-text text-display-large text-white text-center">
            Welcome to Your Medical Home
          </h1>
        </v-col>

        <v-col class="d-flex flex-column align-center justify-center my-4">
          <v-btn :href="appStore.officePhone" color="highlight" size="large">
            Call for Appointments
          </v-btn>
        </v-col>

        <v-col class="d-flex flex-column align-center justify-center my-4">
          <v-btn
            color="highlight"
            size="large"
            @click="openUrl(appStore.onlineBookingUrl)"
          >
            Book Appointment Online
          </v-btn>
        </v-col>

        <v-col class="d-flex flex-column align-center justify-center my-4">
          <v-btn
            color="highlight"
            size="large"
            @click="openUrl(appStore.patientPortalUrl)"
          >
            Patient Portal
          </v-btn>
        </v-col>
      </v-sheet>
    </v-row>

    <v-row class="mx-auto my-8" justify="center" align="center">
      <v-row align="start" class="ma-auto">
        <v-col cols="12" md="8">
          <v-row class="bg-secondary rounded-lg my-16 pa-4">
            <v-col cols="12">
              <h2 class="text-white text-display-small text-md-display-large pa-2">
                When you're ready to stop...
              </h2></v-col
            >
            <v-divider :thickness="8" color="black" />
            <v-container class="text-body text-body-large ma-2 pa-2">
              <v-row align="center">
                <v-col cols="12" lg="6">
                  <v-col cols="12" class="ma-4"
                    ><strong>Waiting weeks</strong> or months to get in to see a
                    doctor;</v-col
                  >
                  <v-divider :thickness="4" color="highlight" />
                  <v-col cols="12" class="ma-4"
                    ><strong>Feeling rushed</strong> in the treatment
                    room;</v-col
                  >
                  <v-divider :thickness="4" color="highlight" />
                  <v-col cols="12" class="ma-4"
                    ><strong>Having your treatment limited</strong> to symptoms
                    for just one ailment per visit—and not having the time to
                    explore the source of your problem...</v-col
                  >

                  <v-divider :thickness="4" color="highlight" />
                </v-col>
                <v-col cols="12" lg="6">
                  <v-lazy>
                    <v-img
                      :src="stockBabySm"
                      :srcset="`${stockBabySm} 480w, ${stockBabyMd} 800w, ${stockBabyLg} 1200w`"
                      class="rounded ma-auto"
                      cover
                    />
                  </v-lazy>
                </v-col>
              </v-row>
            </v-container>
          </v-row>
          <v-row class="rounded-lg my-16 pa-4">
            <v-col cols="12"
              ><p class="text-white text-display-small text-md-display-large pa-2">
                Come experience pediatrics in private practice!
              </p></v-col
            >
          </v-row>
          <v-row class="bg-secondary rounded-lg my-16 pa-4">
            <v-col cols="12"
              ><h2 class="text-white text-display-small text-md-display-large pa-2">
                Now imagine how it would feel to...
              </h2></v-col
            >
            <v-divider :thickness="8" color="black" />
            <v-container class="text-body text-body-large ma-2 pa-2">
              <v-row align="center">
                <v-col cols="12" lg="6">
                  <v-col cols="12" class="ma-4"
                    ><strong>Have the same, highly-trained doctor</strong> who
                    knows your family well, and has managed your childrens'
                    health from newborns to young adults;</v-col
                  >
                  <v-divider :thickness="4" color="highlight" />
                  <v-col cols="12" class="ma-4"
                    ><strong
                      >Get same or next business day in-office or telehealth
                      visits</strong
                    >
                    with unhurried, longer appointments as needed;</v-col
                  >
                  <v-divider :thickness="4" color="highlight" />

                  <v-col cols="12" class="ma-4"
                    >Know you can
                    <strong
                      >text, email, and call your doctor's office
                      directly</strong
                    >, even after hours!
                  </v-col>
                  <v-divider :thickness="4" color="highlight" />
                </v-col>
                <v-col cols="12" lg="6" class="">
                  <v-lazy>
                    <v-img
                      :src="stockTeddySm"
                      :srcset="`${stockTeddySm} 480w, ${stockTeddyMd} 800w, ${stockTeddyLg} 1200w`"
                      class="rounded"
                      cover
                    />
                  </v-lazy>
                </v-col>
              </v-row>
            </v-container>
          </v-row>
          <v-row class="rounded-lg my-16 pa-4">
            <v-col cols="12" class="mx-auto my-auto">
              <p class="text-white text-headline-small text-md-display-medium pa-2">
                Get ready for a long-lasting, doctor-patient relationship that’s
                all about meaningful connection -- not a cold transaction.
              </p>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" md="4">
          <v-container>
            <v-lazy>
              <v-img
                :src="childSm"
                class="rounded"
                :max-height="!mobile ? 400 : null"
                alt="A young patient at South Royalton Health Center"
              />
            </v-lazy>
            <testimonial-cards />
          </v-container>
        </v-col>
      </v-row>
    </v-row>
    <v-row class="bg-primary pa-2 pa-md-8 rounded-lg w-auto" align="start">
      <v-col cols="12">
        <h2 class="text-white text-center text-headline-small text-md-display-medium pa-2">
          Hello, I'm Dr. Ashley Miller
        </h2>
      </v-col>
      <v-divider :thickness="8" color="black" />
      <v-col cols="12" md="7" class="mt-8">
        <v-container class="body-text text-body-large text-white pa-4">
          <v-col cols="12">
            I've had the privilege of caring for children and families throughout
            the Upper Valley for nearly two decades. As the owner of South Royalton
            Health Center, I'm committed to providing relationship-based,
            evidence-based pediatric care that helps every child thrive.
          </v-col>
          <v-col cols="12">
            Our independent, woman-owned pediatric practice offers longer
            appointments, direct access to your pediatric team, and comprehensive
            care—from newborns to young adults—in a welcoming, family-centered
            environment.
          </v-col>
          <v-col cols="12">
            <router-link to="/meet-our-providers-staff" class="font-weight-bold">
              Learn more about our story and meet our team →
            </router-link>
          </v-col>
        </v-container>
      </v-col>
      <v-col cols="12" md="5" class="mt-8">
        <v-img
          :src="millerPhoto"
          class="rounded-lg ma-auto"
          :max-width="360"
          alt="Dr. Ashley Miller, board-certified pediatrician and owner of South Royalton Health Center"
        />
      </v-col>
    </v-row>
    <v-row class="flex flex-column ma-8 pa-4" justify="center" align="center">
      <v-col cols="12">
        <p
          class="hero-text text-headline-small text-md-display-medium text-white pa-4 my-8 rounded text-center"
        >
          Accessible pediatric care in a youth friendly environment
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useAppStore } from "@/store/app";
import { useDisplay } from "vuetify";
import TestimonialCards from "@/components/TestimonialCards.vue";
import logo from "../assets/img/srhc-logo-white.png";
import millerPhoto from "../assets/img/staff/dr-miller-card-photo.jpeg";
import childSm from "@/assets/img/office/child-sm.jpg";
import stockTeddySm from "@/assets/img/stock/stock-teddy-sm.jpg";
import stockTeddyMd from "@/assets/img/stock/stock-teddy-md.jpg";
import stockTeddyLg from "@/assets/img/stock/stock-teddy-lg.jpg";
import stockBabySm from "@/assets/img/stock/stock-baby-sm.jpg";
import stockBabyMd from "@/assets/img/stock/stock-baby-md.jpg";
import stockBabyLg from "@/assets/img/stock/stock-baby-lg.jpg";

const appStore = useAppStore();
const { mobile } = useDisplay();

const openUrl = (url) => {
  window.open(url);
};

//const aboutUsText =
//  "Welcome to South Royalton Health Center. If you're looking for accessible pediatric care, " +
//  "a child–friendly environment, and a responsive team of pediatricians in the Upper Valley/Central Vermont, " +
//  "then look no further. A medical home is defined as patient-centered, comprehensive, team-based, coordinated, accessible, " +
//  "and focused on quality and safety, and that's us! We love kids, and our goal is to have a positive impact in the " +
//  "lives of children by providing exceptional evidence based health care and compassionate service to the families we serve.\n" +
//  "At South Royalton Health Center, we offer a full range of pediatric care including prenatal visits for " +
//  "expecting parents, well–child check–ups, immunizations, sick appointments, mental health and women's health care. " +
//  "Our caring team is committed to providing quality service in a comfortable, safe office setting where children and " +
//  "parents can feel at ease. We also set aside time to equip parents with the tools and education necessary for the " +
//  "development of healthy children from birth to adolescence. We have a dedicated nurse care coordinator to help " +
//  "patients and families coordinate their specialty care and community/school education to achieve the best quality " +
//  "of life possible and to help in the transition to adult medicine.\n";
</script>

<style scoped>
.hero-text {
  font-family: "Kalam", Roboto, Arial, sans-serif !important;
}
a:not(.v-btn) {
  color: #f0ebce;
}
</style>
