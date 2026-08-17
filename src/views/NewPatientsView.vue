<template>
  <v-container class="pa-8">
    <h1 class="text-display-large text-white text-center my-16">
      Welcome to South Royalton Health Center!
    </h1>

    <v-row justify="center">
      <v-col cols="12" md="10" lg="9">
        <!-- Intro nested in the same content column as the sections below so the
             left edges line up. -->
        <v-row align="start">
          <v-col cols="12" md="6" lg="7" class="pl-0">
            <p class="body-text text-body-large text-white mb-4">
              We're so glad you're here!
            </p>
            <p class="body-text text-body-large text-white mb-4">
              Whether you're new to the Upper Valley, changing pediatric practices, or
              joining us with your first child, we're honored you've chosen South
              Royalton Health Center as your child's medical home.
            </p>
            <p class="body-text text-body-large text-white">
              Our team is committed to making your first visit — and every visit after
              that — as welcoming, organized, and stress-free as possible.
              <router-link to="/meet-our-providers-staff">Meet our team</router-link>
              before you come in.
            </p>
          </v-col>

          <v-col cols="12" md="6" lg="5">
            <figure class="ma-0">
              <v-img
                class="rounded-lg"
                :src="waitingAreaPhoto"
                :max-height="380"
                cover
                alt="The waiting area at South Royalton Health Center, with a wooden climbing slide, armchairs and houseplants by the window."
              />
              <figcaption class="text-white text-center mt-2">
                <small>
                  Our playroom gives children time to settle in before their visit.
                </small>
              </figcaption>
            </figure>
          </v-col>
        </v-row>

        <h2 class="text-headline-small text-heading font-weight-bold mt-12 mb-4">
          Before Your First Appointment
        </h2>
        <p class="body-text text-body-large text-white">
          To help us get to know your child and make the most of your visit, please send
          or drop off the following before your appointment whenever possible:
        </p>
        <icon-list :items="beforeVisit" />

        <p class="body-text text-body-large text-white mt-4">
          Please complete your
          <router-link to="/patient-forms">New Patient Forms</router-link> before your
          visit and bring:
        </p>
        <icon-list :items="whatToBring" />

        <p class="body-text text-body-large text-white mt-4">
          We ask that you arrive about <strong>15 minutes early</strong> so your child
          has time to explore our playroom while we complete your registration. That
          means more time focused on your child and less time completing paperwork.
        </p>

        <h2 class="text-headline-small text-heading font-weight-bold mt-12 mb-4">
          During Your Visit
        </h2>
        <p class="body-text text-body-large text-white">
          To help us provide the best possible care, we'll ask about:
        </p>
        <icon-list :items="duringVisit" />
        <p class="body-text text-body-large text-white mt-4">
          The more we know about your child and family, the better we can partner with
          you to support their health and well-being.
        </p>

        <h2 class="text-headline-small text-heading font-weight-bold mt-12 mb-4">
          Stay Connected
        </h2>
        <p class="body-text text-body-large text-white">
          Our <router-link to="/patient-portal">Patient Portal</router-link> makes it
          easy to stay connected with our office. Through the portal, you can:
        </p>
        <icon-list :items="portalFeatures" />
        <p class="body-text text-body-large text-white mt-4">
          If you have questions before your first visit, please don't hesitate to call
          us. We're always happy to help — you may also find your answer on our
          <router-link to="/faq">frequently asked questions</router-link> page.
        </p>
        <p class="body-text text-body-large text-white mt-4">
          We look forward to welcoming your family to South Royalton Health Center!
        </p>

        <v-sheet color="primary" class="rounded-lg mt-12 pa-8" elevation="8">
          <h2 class="text-headline-small text-white text-center mb-4">
            Ready to schedule?
          </h2>
          <div class="d-flex flex-column flex-sm-row justify-center ga-4">
            <v-btn :href="appStore.officePhone" color="highlight" size="large">
              Call {{ appStore.officePhoneStr }}
            </v-btn>
            <v-btn to="/patient-forms" color="highlight" size="large">
              New Patient Forms
            </v-btn>
            <v-btn to="/patient-portal" color="highlight" size="large">
              Patient Portal
            </v-btn>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useAppStore } from "@/store/app";
import IconList from "@/components/IconList.vue";
import waitingAreaPhoto from "@/assets/img/office/srhc-waiting-area.jpg";
import { useSeo } from "@/composables/useSeo";

const appStore = useAppStore();

const beforeVisit = [
  "Complete immunization records",
  "Medical records from your previous pediatrician",
];

const whatToBring = [
  "Your insurance card",
  "A list of your child's current medications, vitamins, and supplements",
  "A list of questions or concerns you'd like to discuss (we love when families bring a list!)",
];

const duringVisit = [
  "Your child's medical history, medications, allergies, vitamins, and supplements",
  "Your family's medical history",
  "Any recent care received outside our practice",
  "How your child is doing at home, school, and in the community",
];

const portalFeatures = [
  "Securely message our team",
  "Request appointments",
  "Access immunization records and health forms",
  "Complete paperwork",
  "Pay your bill online",
];

useSeo({
  title: "New Patients",
  description:
    "Welcome to South Royalton Health Center. What to bring, what to expect at your first visit, new patient forms and how to get set up on our Patient Portal.",
});
</script>

<style scoped>
a:not(.v-btn) {
  color: rgb(var(--v-theme-highlight));
}

a:not(.v-btn):hover {
  color: rgb(var(--v-theme-heading));
}

a:not(.v-btn):focus {
  color: sandybrown;
}
</style>
