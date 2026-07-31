<template>
  <!--
    Native <details>/<summary> disclosure.

    Vuetify's v-expansion-panel-text renders its contents lazily, so a collapsed
    panel contributes nothing to the DOM — crawlers, in-page browser search
    (Ctrl+F), and text extractors all miss it. A native <details> keeps the body
    in the document at all times, works without JavaScript, and browsers will
    even auto-expand it to reveal a Ctrl+F match.
  -->
  <details class="disclosure" :open="open" :name="name">
    <summary class="disclosure__summary text-title-large">
      <span><slot name="title">{{ title }}</slot></span>
      <svg class="disclosure__chevron" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path :d="mdiChevronDown" />
      </svg>
    </summary>

    <div class="disclosure__body text-body-large">
      <slot />
    </div>
  </details>
</template>

<script setup>
import { mdiChevronDown } from "@mdi/js";

defineProps({
  title: { type: String, default: "" },
  open: { type: Boolean, default: false },
  /**
   * Shared `name` turns a set of panels into an exclusive accordion using the
   * native HTML behaviour — no JS state required.
   */
  name: { type: String, default: undefined },
});
</script>

<style scoped>
.disclosure__summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background-color: #395144;
  color: #fff;
  cursor: pointer;
  list-style: none;
  transition: background-color 0.2s ease;
}

.disclosure__summary::-webkit-details-marker {
  display: none;
}

.disclosure__summary:hover,
.disclosure__summary:focus-visible {
  background-color: #4e6c50;
}

.disclosure__summary:focus-visible {
  outline: 2px solid sandybrown;
  outline-offset: -2px;
}

.disclosure__chevron {
  flex: 0 0 auto;
  width: 24px;
  height: 24px;
  fill: currentColor;
  transition: transform 0.2s ease;
}

.disclosure[open] .disclosure__chevron {
  transform: rotate(180deg);
}

.disclosure__body {
  padding: 1.25rem;
  background-color: #4e6c50;
  color: #fff;
}

@media (prefers-reduced-motion: reduce) {
  .disclosure__summary,
  .disclosure__chevron {
    transition: none;
  }
}
</style>
