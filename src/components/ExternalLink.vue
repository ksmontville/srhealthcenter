<template>
  <!--
    Per the client's SEO notes: external links open in a new tab, carry
    rel="noopener noreferrer", and always use descriptive link text rather than a
    raw URL. Publication and date are surfaced alongside where known.
  -->
  <component :is="block ? 'div' : 'span'" class="external-link">
    <a
      :href="href"
      target="_blank"
      rel="noopener noreferrer"
      class="external-link__anchor"
    >
      <span>{{ label }}</span>
      <svg
        class="external-link__icon"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <path :d="mdiOpenInNew" />
      </svg>
      <span class="external-link__sr">(opens in a new tab)</span>
    </a>

    <span v-if="publication || date" class="external-link__meta text-body-medium">
      <em v-if="publication">{{ publication }}</em>
      <template v-if="publication && date"> · </template>
      <time v-if="date" :datetime="date">{{ formattedDate }}</time>
    </span>
  </component>
</template>

<script setup>
import { computed } from "vue";
import { mdiOpenInNew } from "@mdi/js";

const props = defineProps({
  href: { type: String, required: true },
  label: { type: String, required: true },
  publication: { type: String, default: "" },
  // ISO 8601 (YYYY-MM-DD) so the <time datetime> attribute stays machine-readable.
  date: { type: String, default: "" },
  // Render as a block (own line + meta beneath) rather than inline.
  block: { type: Boolean, default: false },
});

const formattedDate = computed(() => {
  if (!props.date) return "";
  // Parse as UTC so a YYYY-MM-DD string doesn't shift a day in western timezones.
  const parsed = new Date(`${props.date}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return props.date;
  return parsed.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
});
</script>

<style scoped>
.external-link__anchor {
  color: #f0ebce;
  font-weight: 700;
  text-decoration: underline;
}

.external-link__anchor:hover {
  color: #aa8b56;
}

.external-link__anchor:focus-visible {
  color: sandybrown;
  outline: 2px solid sandybrown;
  outline-offset: 2px;
}

.external-link__icon {
  display: inline-block;
  width: 0.9em;
  height: 0.9em;
  margin-left: 0.25em;
  fill: currentColor;
  vertical-align: -0.1em;
}

.external-link__meta {
  display: block;
  margin-top: 0.15rem;
  color: rgba(255, 255, 255, 0.85);
}

/* Visually hidden but available to screen readers. */
.external-link__sr {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
