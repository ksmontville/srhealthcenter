<template>
  <!-- pa-8 matches the container padding used by every other page. -->
  <v-container class="mt-8 pa-8" id="hero">
    <v-row class="mx-auto my-8" justify="center" align="center">
      <v-row align="start" class="ma-auto">
        <v-col cols="12">
          <v-sheet color="primary" class="hero rounded-lg" elevation="16">
            <v-lazy>
              <v-img :src="logo" alt="South Royalton Health Center" max-height="256" />
            </v-lazy>

            <h1 class="hero-text hero__title text-display-large text-white text-center">
              Welcome to Your Medical Home
            </h1>

            <div class="hero__actions">
              <v-btn :href="appStore.officePhone" color="highlight" size="large">
                Call for Appointments
              </v-btn>

              <!-- Weave online booking was retired; requests come in by text or
                   through the portal instead. -->
              <v-btn :href="appStore.officeText" color="highlight" size="large">
                Text Us a Request
              </v-btn>

              <v-btn
                color="highlight"
                size="large"
                @click="openUrl(appStore.patientPortalUrl)"
              >
                Patient Portal
              </v-btn>
            </div>
          </v-sheet>

          <!--
            Narrative flow: problem → invitation → promise → close.

            The alternation between green panels and open background is
            deliberate, but it previously read as disconnected because each row
            carried my-16 (64px top *and* bottom, so ~128px between blocks) and
            the pull-quotes floated alone in the gap. The rhythm is now a
            consistent 32px, and the quotes sit tight against the panel they
            follow so they read as a beat in the sentence rather than an orphan.
          -->
          <section class="story-panel rounded-lg bg-secondary">
            <h2 class="text-heading text-headline-large text-md-display-small">
              When you're ready to stop...
            </h2>
            <v-divider :thickness="6" color="black" class="story-panel__rule" />

            <v-row align="center" no-gutters class="story-panel__body">
              <v-col cols="12" lg="7">
                <ul class="story-list text-body-large text-white">
                  <li>
                    <strong>Waiting weeks</strong> or months to get in to see a doctor;
                  </li>
                  <li><strong>Feeling rushed</strong> in the treatment room;</li>
                  <li>
                    <strong>Having your treatment limited</strong> to symptoms for just
                    one ailment per visit—and not having the time to explore the source
                    of your problem...
                  </li>
                </ul>
              </v-col>
              <v-col cols="12" lg="5" class="story-panel__media">
                <v-lazy>
                  <v-img
                    :src="stockBabySm"
                    :srcset="`${stockBabySm} 480w, ${stockBabyMd} 800w, ${stockBabyLg} 1200w`"
                    class="rounded story-panel__img"
                    alt="An infant resting in a caregiver's hands"
                    cover
                  />
                </v-lazy>
              </v-col>
            </v-row>
          </section>

          <p
            class="story-quote text-white text-headline-large text-md-display-small text-center"
          >
            Come experience pediatrics in private practice!
          </p>

          <section class="story-panel rounded-lg bg-secondary">
            <h2 class="text-heading text-headline-large text-md-display-small">
              Now imagine how it would feel to...
            </h2>
            <v-divider :thickness="6" color="black" class="story-panel__rule" />

            <v-row align="center" no-gutters class="story-panel__body">
              <v-col cols="12" lg="7">
                <ul class="story-list text-body-large text-white">
                  <li>
                    <strong>Have the same, highly-trained doctor</strong> who knows your
                    family well, and has managed your childrens' health from newborns to
                    young adults;
                  </li>
                  <li>
                    <strong
                      >Get same or next business day in-office or telehealth
                      visits</strong
                    >
                    with unhurried, longer appointments as needed;
                  </li>
                  <li>
                    Know you can
                    <strong>text, email, and call your doctor's office directly</strong
                    >, even after hours!
                  </li>
                </ul>
              </v-col>
              <v-col cols="12" lg="5" class="story-panel__media">
                <v-lazy>
                  <v-img
                    :src="stockTeddySm"
                    :srcset="`${stockTeddySm} 480w, ${stockTeddyMd} 800w, ${stockTeddyLg} 1200w`"
                    class="rounded story-panel__img"
                    alt="A teddy bear beside a face mask and syringe"
                    cover
                  />
                </v-lazy>
              </v-col>
            </v-row>
          </section>

          <p
            class="story-quote story-quote--close text-white text-headline-medium text-md-headline-large text-center"
          >
            Get ready for a long-lasting, doctor-patient relationship that's all about
            meaningful connection — not a cold transaction.
          </p>

          <!--
            A personal greeting, so it's laid out like one: portrait and text on the
            same line, vertically centred and close together. The previous version
            top-aligned a short paragraph next to a tall portrait, which left a well
            of empty green beneath the text, and set a first-person line in the UI
            sans, which read as corporate boilerplate.
          -->
          <section class="greeting rounded-lg bg-primary">
            <h2
              class="greeting__title text-heading text-headline-large text-md-display-small"
            >
              Hello, I'm Dr. Ashley Miller
            </h2>
            <v-divider :thickness="6" color="black" class="greeting__rule" />

            <v-row align="center" no-gutters class="greeting__body">
              <!--
                Photo first in the DOM so it still follows the greeting on a
                phone, but ordered to the right from sm up, where it matches the
                story panels: text on the left edge, image on the right.
              -->
              <v-col
                cols="12"
                sm="4"
                md="3"
                order="1"
                order-sm="2"
                class="greeting__media"
              >
                <v-img
                  :src="ashleyPhoto"
                  class="rounded-lg greeting__img"
                  alt="Dr. Ashley Miller, board-certified pediatrician and owner of South Royalton Health Center"
                  cover
                />
              </v-col>
              <v-col
                cols="12"
                sm="8"
                md="9"
                order="2"
                order-sm="1"
                class="greeting__text"
              >
                <p class="body-text text-body-large text-white">
                  I've had the privilege of caring for children and families throughout
                  the Upper Valley for nearly two decades. As the owner of South
                  Royalton Health Center, I'm committed to providing relationship-based,
                  evidence-based pediatric care that helps every child thrive.
                </p>
                <p class="body-text text-body-large text-white">
                  Our independent, woman-owned pediatric practice offers longer
                  appointments, direct access to your pediatric team, and comprehensive
                  care—from newborns to young adults—in a welcoming, family-centered
                  environment.
                </p>
                <p class="text-body-large">
                  <router-link to="/meet-our-providers-staff" class="font-weight-bold">
                    Learn more about our story and meet our team →
                  </router-link>
                </p>
              </v-col>
            </v-row>
          </section>

          <!--
            Social proof stays on the home page, next to the calls to action
            where it does its work, but as a band rather than a 300px rail: the
            rail forced the whole narrative into a two-thirds column and still
            ran out of cards a thousand pixels before the page ended.
          -->
          <section class="testimonials" aria-labelledby="testimonials-heading">
            <h2
              id="testimonials-heading"
              class="text-heading text-headline-large text-md-display-small text-center testimonials__title"
            >
              What families say
            </h2>

            <testimonial-cards :items="homeTestimonials" />

            <p class="testimonials__more text-body-large text-center">
              <router-link to="/patient-testimonials" class="font-weight-bold">
                Read all patient testimonials →
              </router-link>
            </p>
          </section>

          <p
            class="story-quote story-tagline hero-text text-headline-small text-md-display-medium text-white text-center"
          >
            Accessible pediatric care in a youth friendly environment
          </p>
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>

<script setup>
import { useAppStore } from "@/store/app";
import TestimonialCards from "@/components/TestimonialCards.vue";
import { testimonials, HOME_TESTIMONIAL_COUNT } from "@/assets/testimonials";
import logo from "../assets/img/srhc-logo-white.png";
// A 3:4 crop framed head-and-torso: the full portrait is a standing shot,
// which left her tiny in this 220px slot.
import ashleyPhoto from "../assets/img/staff/ashley-greeting.jpg";
import stockTeddySm from "@/assets/img/stock/stock-teddy-sm.jpg";
import stockTeddyMd from "@/assets/img/stock/stock-teddy-md.jpg";
import stockTeddyLg from "@/assets/img/stock/stock-teddy-lg.jpg";
import stockBabySm from "@/assets/img/stock/stock-baby-sm.jpg";
import stockBabyMd from "@/assets/img/stock/stock-baby-md.jpg";
import stockBabyLg from "@/assets/img/stock/stock-baby-lg.jpg";
import { useSeo } from "@/composables/useSeo";

const appStore = useAppStore();

// A preview on the home page; the full list lives on /patient-testimonials.
const homeTestimonials = testimonials.slice(0, HOME_TESTIMONIAL_COUNT);

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

useSeo({
  title: "Pediatrician in South Royalton, VT | South Royalton Health Center",
  description:
    "Independent, woman-owned pediatric practice in South Royalton, Vermont. Same-day sick visits, newborn care, behavioral health and integrative pediatrics for families across the Upper Valley.",
});
</script>

<style scoped>
.hero-text {
  font-family: "Kalam", Roboto, Arial, sans-serif !important;
}

/*
 * The banner lives inside the narrative column, so it shares its edges with the
 * story panels and the greeting at every width. A fixed cap here was the wrong
 * tool: at 880px centred in the container it happened to match the column's
 * width at ~2000px but sat 228px to its right, and by 2560px the offset was
 * 528px — it read as a floating slab rather than the top of the column.
 */
.hero {
  padding: 3rem 2rem;
}

@media (min-width: 960px) {
  .hero {
    padding: 3.5rem 3rem;
  }
}

.hero__title {
  margin-block: 2rem;
}

/* Wrap rather than a viewport media query: now that the banner sits in a column,
   what constrains the buttons is the column's width, not the window's. Letting
   them flow means three on a line where there is room and a clean break where
   there isn't, at any width. */
.hero__actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

/* ---- Home narrative section -------------------------------------------
   One spacing scale for the whole sequence so the eye moves at a steady
   pace instead of crossing a 128px gap between every block. */

.story-panel {
  padding: 1.75rem 1.5rem 1.5rem;
  margin-block: 2rem;
}

/* The narrative headings and pull-quotes are written as spoken lines — "when
   you're ready to stop...", "now imagine how it would feel to...". Setting them
   in the brand's handwriting face rather than the UI sans keeps that voice, and
   matches the hero and closing tagline that already bookend the page.
   Kalam has a small x-height and reads large, so it is sized down a step and
   given tighter leading than the Roboto equivalent would need. */
.story-panel h2,
.story-quote {
  font-family: "Kalam", Roboto, Arial, sans-serif;
  font-weight: 400;
  letter-spacing: 0.01em;
}

.story-panel h2 {
  margin-bottom: 1rem;
  line-height: 1.2;
}

/*
 * Heading, rule and body share one measure, so the panel reads as a single
 * block whatever width the panel itself happens to be. Bounding only the body
 * left the heading stranded at the panel's left edge on a wide display.
 */
.story-panel h2,
.story-panel__rule,
.story-panel__body,
.greeting__rule {
  max-width: 1000px;
  margin-inline: auto;
}

.story-panel__rule {
  opacity: 0.35;
}

.story-panel__body {
  margin-top: 1.5rem;
  gap: 1.5rem 0;
}

/* Image fills the column height so a short list no longer leaves a well of
   dead space beside a tall photo (the old row used align="center").
   The intermediate v-lazy wrapper needs to stretch too, or the v-img inside
   resolves `width: 100%` against a zero-width flex item. */
.story-panel__media {
  display: flex;
}

.story-panel__media > * {
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
}

/*
 * Bounded, and vertically centred against the bullets rather than stretched to
 * the row. `height: 100%` in a `stretch` row was right when the panel was two
 * thirds of the page; once the narrative became a single full-width column the
 * media track grew to ~780px, the photo sized itself to that width, and three
 * short bullets were left sitting above a well of empty green. Capping it means
 * the panel is only ever as tall as its tallest real content.
 *
 * The ratio applies at every width — a fixed min-height would reserve an empty
 * green box before the lazy image arrives.
 */
.story-panel__img {
  width: 100%;
  aspect-ratio: 16 / 10;
}

@media (min-width: 1280px) {
  .story-panel__media {
    padding-left: 1.5rem;
  }
}

.story-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.story-list li {
  padding: 0.85rem 0;
  border-bottom: 2px solid rgba(var(--v-theme-highlight), 0.45);
}

.story-list li:first-child {
  padding-top: 0;
}

.story-list li:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

/* Sits tight under the panel it answers, so it reads as the next beat rather
   than a stranded line of text. */
.story-quote {
  margin: 2.5rem auto;
  max-width: 42ch;
  line-height: 1.25;
}

.story-quote--close {
  max-width: 52ch;
}

/* The closing beat. Previously a full-width row of its own, so it centred on the
   container while everything above it centred on the narrative column. */
.story-tagline {
  max-width: 30ch;
  margin-block: 3.5rem;
}

/* ---- Testimonial strip ------------------------------------------------- */

.testimonials {
  margin-block: 2.5rem;
}

.testimonials__title {
  font-family: "Kalam", Roboto, Arial, sans-serif;
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

.testimonials__more {
  margin-top: 1.5rem;
}

/* ---- Greeting ---------------------------------------------------------- */

.greeting {
  padding: 1.75rem 1.5rem 1.75rem;
  margin-block: 2rem;
}

/* First-person copy, so it carries the same handwriting voice as the hero and
   the narrative headings rather than the UI sans. */
.greeting__title {
  font-family: "Kalam", Roboto, Arial, sans-serif;
  font-weight: 400;
  line-height: 1.2;
  text-align: center;
  margin-bottom: 1rem;
}

.greeting__rule {
  opacity: 0.35;
}

.greeting__body {
  margin-top: 1.75rem;
  gap: 1.5rem 0;
  /* Bounded and centred, on the same 1000px measure as the story panels so the
     text in all three blocks starts on one vertical line. The paragraphs carry
     their own 68ch cap, so widening the body here costs nothing in line length.
     Without the bound, a wide panel pooled the cap's leftover width on the
     right as a slab of empty green — 796px of it at 2560. */
  max-width: 1000px;
  margin-inline: auto;
}

.greeting__img {
  /* Bounded so a portrait photo can't stretch the panel past its text. */
  width: 100%;
  max-width: 220px;
  aspect-ratio: 3 / 4;
}

.greeting__media {
  display: flex;
  justify-content: center;
}

@media (min-width: 600px) {
  /* Flush right, so the portrait's outer edge lands on the same line as the
     story panels' photos rather than 15px inside it. */
  .greeting__media {
    justify-content: flex-end;
  }
}

@media (min-width: 600px) {
  .greeting__text {
    padding-right: 2rem;
  }
}

.greeting__text p + p {
  margin-top: 0.85rem;
}

/* Capped measure. The panel is full-width, so without this the paragraphs ran
   to ~120 characters per line at 1920px (81 at 1440) against a readable range
   of 45–75. */
.greeting__text p {
  max-width: 68ch;
}
a:not(.v-btn) {
  color: rgb(var(--v-theme-highlight));
}
</style>
