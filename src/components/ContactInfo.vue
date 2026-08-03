<template>
  <h2 id="location-and-hours" class="text-heading text-display-small text-center mb-6">
    Location and Hours
  </h2>

  <v-row justify="center" align="stretch">
    <v-col cols="12" md="5">
      <div class="info-card bg-panel rounded-lg elevation-8">
        <h3 class="info-card__label text-title-small">Visit us</h3>
        <!-- A real <address>: the practice's own contact details, which is the
             one thing this element is actually for. -->
        <address class="info-card__address text-body-large">
          <span v-for="line in contactInfo.address" :key="line">{{ line }}</span>
        </address>

        <v-divider class="info-card__rule" />

        <h3 class="info-card__label text-title-small">Hours</h3>
        <ul class="hours-list text-body-medium">
          <li v-for="entry in contactInfo.hours" :key="entry.text">
            <svg
              class="hours-list__icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path :d="entry.icon" />
            </svg>
            <span>{{ entry.text }}</span>
          </li>
        </ul>

        <v-divider class="info-card__rule" />

        <v-btn
          :href="appStore.officePhone"
          color="action"
          class="info-card__phone"
          :prepend-icon="mdiPhoneInTalk"
          block
        >
          Call {{ contactInfo.phoneStr }}
        </v-btn>
      </div>
    </v-col>

    <v-col cols="12" md="7" class="map-col">
      <!--
        One responsive frame rather than a mobile/desktop pair at fixed pixel
        widths. `title` gives it an accessible name, and `loading="lazy"` keeps
        the Maps embed — easily the heaviest thing on this page — off the
        critical path on a slow connection.
      -->
      <iframe
        class="map-frame rounded-lg"
        title="Google Map showing South Royalton Health Center at 79 South Windsor Street, South Royalton, Vermont"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.725689746604!2d-72.52253408449688!3d43.820048979115896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb4d98940037329%3A0xac84825b6f3017a!2sSouth%20Royalton%20Health%20Center!5e0!3m2!1sen!2sus!4v1681841801514!5m2!1sen!2sus"
        loading="lazy"
        allowfullscreen
        referrerpolicy="no-referrer-when-downgrade"
      />
    </v-col>
  </v-row>
</template>

<script setup>
import { mdiClockOutline, mdiSilverwareForkKnife, mdiPhoneInTalk } from "@mdi/js";
import { useAppStore } from "@/store/app";

const appStore = useAppStore();

const contactInfo = {
  address: ["79 South Windsor Street", "PO Box 119", "South Royalton, VT 05068"],
  hours: [
    {
      icon: mdiClockOutline,
      text: "Open Monday through Friday at 8:00 am with appointments beginning at 9:00 am until 5:00 pm",
    },
    {
      icon: mdiSilverwareForkKnife,
      text: "Closed for lunch from 12:00 pm to 1:00 pm",
    },
    {
      icon: mdiPhoneInTalk,
      text: "On-call clinician available after hours and on weekends for established patients at our primary phone number.",
    },
  ],
  phoneStr: "(802) 763-7575",
};
</script>

<style scoped>
.info-card {
  padding: 1.5rem;
  height: 100%;
}

.info-card__label {
  text-transform: uppercase;
  letter-spacing: 0.08em;
  opacity: 0.7;
  margin-bottom: 0.5rem;
}

.info-card__address {
  font-style: normal;
  line-height: 1.5;
}

.info-card__address span {
  display: block;
}

.info-card__rule {
  margin-block: 1.25rem;
  opacity: 0.25;
}

.info-card__phone {
  margin-top: 0.25rem;
}

.hours-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.hours-list li {
  /* Flex rather than an inline icon inside the <p>: previously a wrapped line
     ran back under the icon instead of aligning with the text above it. */
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  padding: 0.45rem 0;
  line-height: 1.45;
}

.hours-list__icon {
  flex: 0 0 auto;
  width: 20px;
  height: 20px;
  margin-top: 0.15em;
  /* currentColor, so the glyph tracks the card's own text colour. The previous
     `color="primary"` was near-black on the dark-theme panel and unreadable. */
  fill: currentColor;
  opacity: 0.8;
}

.map-col {
  display: flex;
}

.map-frame {
  flex: 1 1 auto;
  width: 100%;
  border: 0;
  display: block;
  aspect-ratio: 4 / 3;
}

@media (min-width: 960px) {
  .map-frame {
    /* Fills the row height set by the card, so the two columns end level. */
    aspect-ratio: auto;
    height: 100%;
    min-height: 340px;
  }
}
</style>
