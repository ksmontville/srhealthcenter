<template>
  <!--
    A real <ul>/<li> rather than v-list, which renders nested <div>s. Service and
    condition lists are exactly the content search engines and AI crawlers need to
    parse, so the semantics matter more here than the Vuetify component styling.
  -->
  <ul class="icon-list text-body-large" :class="{ 'icon-list--dense': dense }">
    <li v-for="item in items" :key="typeof item === 'string' ? item : item.text">
      <svg
        class="icon-list__icon"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <path :d="mdiHospital" />
      </svg>
      <span>
        <template v-if="typeof item === 'string'">{{ item }}</template>
        <template v-else>
          {{ item.text }}
          <router-link v-if="item.to" :to="item.to">{{ item.linkLabel }}</router-link>
          <a
            v-else-if="item.href"
            :href="item.href"
            target="_blank"
            rel="noopener noreferrer"
            >{{ item.linkLabel }}</a
          >
          <template v-if="item.after">{{ item.after }}</template>
        </template>
      </span>
    </li>
  </ul>
</template>

<script setup>
import { mdiHospital } from "@mdi/js";

defineProps({
  /**
   * Either a plain string, or `{ text, to | href, linkLabel, after }` to embed a
   * link mid-sentence (the client italicised these link targets in their documents).
   */
  items: { type: Array, required: true },
  dense: { type: Boolean, default: false },
  color: { type: String, default: "#4e6c50" },
});
</script>

<style scoped>
.icon-list {
  list-style: none;
  padding: 0;
  margin: 0.75rem 0;
  color: #fff;
}

.icon-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  padding: 0.4rem 0;
}

.icon-list--dense li {
  padding: 0.15rem 0;
}

.icon-list__icon {
  flex: 0 0 auto;
  width: 20px;
  height: 20px;
  margin-top: 0.3em;
  fill: v-bind(color);
}

.icon-list a {
  color: #f0ebce;
}

.icon-list a:hover {
  color: #aa8b56;
}

.icon-list a:focus {
  color: sandybrown;
}
</style>
