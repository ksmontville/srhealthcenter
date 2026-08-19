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
      <span class="disclosure__label">
        <slot name="title">{{ title }}</slot>
        <span
          v-if="count !== null"
          class="disclosure__count"
          :aria-label="`${count} ${count === 1 ? 'item' : 'items'}`"
        >
          {{ count }}
        </span>
      </span>
      <svg
        class="disclosure__chevron"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
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
  /**
   * Optional badge showing how many entries the panel holds, so visitors can see
   * the size of a section before opening it. Omit for panels that hold a single
   * block of prose (e.g. an FAQ answer) rather than a list.
   */
  count: { type: Number, default: null },
});
</script>

<style scoped>
.disclosure__summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background-color: rgb(var(--v-theme-primary));
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
  background-color: rgb(var(--v-theme-secondary));
}

.disclosure__summary:focus-visible {
  outline: 2px solid sandybrown;
  outline-offset: -2px;
}

.disclosure__label {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 0;
}

.disclosure__count {
  flex: 0 0 auto;
  min-width: 1.75rem;
  padding: 0.05rem 0.45rem;
  border-radius: 999px;
  background-color: rgba(var(--v-theme-highlight), 0.2);
  color: rgb(var(--v-theme-highlight));
  font-size: 0.8rem;
  line-height: 1.5;
  text-align: center;
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
  background-color: rgb(var(--v-theme-secondary));
  color: #fff;
}

@media (prefers-reduced-motion: reduce) {
  .disclosure__summary,
  .disclosure__chevron {
    transition: none;
  }
}
</style>
