<template>
  <!--
    Jump-to-section nav ("on this page").

    Deliberately plain <a href="#id"> anchors, not JS scroll handlers: real anchors
    are crawlable, are what Google reads to build "Jump to" sitelinks for a long
    page, and work without JavaScript. Note this is the opposite of the scrolling
    service list it replaced — that one hid content inside a fixed-height scroll
    box; this exposes the page's structure while every section stays fully
    expanded below.
  -->
  <nav class="section-nav rounded-lg pa-6" :aria-label="label">
    <p class="section-nav__title text-title-large font-weight-bold mb-3">
      {{ label }}
    </p>
    <ul class="section-nav__list">
      <li v-for="item in items" :key="item.id">
        <a :href="`#${item.id}`">{{ item.label }}</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
defineProps({
  /** `[{ id, label }]` — `id` must match the target element's id attribute. */
  items: { type: Array, required: true },
  label: { type: String, default: "On this page" },
});
</script>

<style scoped>
.section-nav {
  background-color: rgba(var(--v-theme-primary), 0.9);
  border: 1px solid rgba(var(--v-theme-highlight), 0.25);
}

.section-nav__title {
  color: rgb(var(--v-theme-highlight));
}

.section-nav__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.4rem 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
}

.section-nav__list a {
  display: block;
  padding: 0.25rem 0;
  color: #fff;
  text-decoration: none;
  border-bottom: 1px solid transparent;
}

.section-nav__list a::before {
  content: "→";
  margin-right: 0.5rem;
  color: rgb(var(--v-theme-heading));
}

.section-nav__list a:hover {
  color: rgb(var(--v-theme-highlight));
  border-bottom-color: rgba(var(--v-theme-highlight), 0.5);
}

.section-nav__list a:focus-visible {
  outline: 2px solid sandybrown;
  outline-offset: 2px;
}
</style>
