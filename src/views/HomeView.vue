<template>
  <v-container class="mt-8" id="hero">
    <v-row class="mx-auto" align="">
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
          <p class="hero-text text-h2 text-white text-center">
            Welcome to Your Medical Home
          </p>
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
              <p class="body-text text-white text-h2 pa-2">
                When you're ready to stop...
              </p></v-col
            >
            <v-container class="text-body text-body-1 ma-2 pa-2">
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
                <v-spacer />
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
              ><p class="body-text text-white text-h2 pa-2">
                Come experience pediatrics in private practice!
              </p></v-col
            >
          </v-row>
          <v-row class="bg-secondary rounded-lg my-16 pa-4">
            <v-col cols="12"
              ><p class="body-text text-white text-h2 pa-2">
                Now imagine how it would feel to...
              </p></v-col
            >
            <v-container class="text-body text-body-1 ma-2 pa-2">
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
                      >Get same next business day in-office or telehealth
                      visits</strong
                    >
                    with unhurried, longer appointments when needed;</v-col
                  >
                  <v-divider :thickness="4" color="highlight" />

                  <v-spacer />
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
              <p class="body-text text-white text-h2 pa-2">
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
              />
            </v-lazy>
            <testimonial-cards />
          </v-container>
        </v-col>
      </v-row>
    </v-row>
    <v-row
      class="bg-primary mx-auto w-100 pa-2 pa-md-8 rounded-lg"
      align="center"
    >
      <v-col cols="12" md="8" class="mt-8">
        <p class="body-text text-white text-h4 pa-2">
          Hello, I'm Dr. Ashley Miller
        </p>
        <v-divider :thickness="8" color="black" />
        <v-container class="body-text text-body-1 text-white pa-4">
          <v-col>
            Board Certified Pediatrician since 2009. I help local families and
            individuals get the level of care they deserve with the convenience
            and intimacy of a small practice. But without the usual high
            concierge membership fees you’d expect to pay for personalized care.
          </v-col>
          <v-col>
            South Royalton Health Center is a patient-centered, comprehensive,
            team-based, coordinated, accessible, medical home focused on quality
            and safety. We love kids, and our goal is to have a positive impact
            in the lives of children by providing exceptional evidence based
            health care and compassionate service to the families we serve.
          </v-col>
          <v-col>
            We offer a full range of pediatric care including prenatal visits
            for expecting parents, well–child check–ups, immunizations, sick
            appointments, mental health and women's health care. We set aside
            time to allow families to feel at ease, and to equip parents with
            the tools and education necessary for the development of healthy
            children from birth to adolescence. We have a dedicated nurse care
            coordinator to help patients and families coordinate their specialty
            care and community/school education to achieve the best quality of
            life possible and to help in the transition to adult medicine.
          </v-col>
          <v-col
            >Get the full introduction on our
            <router-link
              :to="{ path: 'meet-our-providers-staff' }"
              @click="appStore.setActiveId('meet-our-providers-staff')"
              >About Us</router-link
            >
            page.</v-col
          >
        </v-container>
      </v-col>
      <v-col cols="12" md="4">
        <v-lazy>
          <v-img :src="millerPhoto" class="rounded-lg" max-height="800" />
        </v-lazy>
      </v-col>
    </v-row>
    <v-row class="flex flex-column ma-8 pa-4" justify="center" align="center">
      <v-col cols="12">
        <p
          class="hero-text body-text text-h5 text-md-h3 text-white pa-4 my-8 rounded text-center"
        >
          Accessible pediatric care in a child friendly environment
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
a,
router-link {
  color: #f0ebce;
}
</style>
