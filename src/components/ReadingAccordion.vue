<template>
  <disclosure-group elevated>
    <disclosure-panel v-for="group in readingList" :key="group.id">
      <template #title>
        {{ group.topic }}
        <span class="reading-count">{{ group.books.length }}</span>
      </template>

      <ul class="reading-list">
        <li v-for="book in group.books" :key="book">
          <svg
            class="reading-list__icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path :d="mdiBookOpenOutline" />
          </svg>
          <span>{{ book }}</span>
        </li>
      </ul>
    </disclosure-panel>
  </disclosure-group>
</template>

<script setup>
import { mdiBookOpenOutline } from "@mdi/js";
import DisclosureGroup from "@/components/DisclosureGroup.vue";
import DisclosurePanel from "@/components/DisclosurePanel.vue";
import { readingList } from "@/assets/readingList";
</script>

<style scoped>
.reading-count {
  display: inline-block;
  min-width: 1.75rem;
  margin-left: 0.5rem;
  padding: 0.05rem 0.45rem;
  border-radius: 999px;
  background-color: rgba(240, 235, 206, 0.2);
  color: #f0ebce;
  font-size: 0.8rem;
  text-align: center;
  vertical-align: middle;
}

.reading-list {
  list-style: none;
  padding: 0;
  margin: 0;
  /* Long titles read better in a single column; on wide screens two columns
     keep the taller topics from becoming an endless scroll. */
  columns: 1;
  column-gap: 2.5rem;
}

@media (min-width: 1100px) {
  .reading-list {
    columns: 2;
  }
}

.reading-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  padding: 0.4rem 0;
  break-inside: avoid;
}

.reading-list__icon {
  flex: 0 0 auto;
  width: 20px;
  height: 20px;
  margin-top: 0.25em;
  fill: #f0ebce;
}
</style>
