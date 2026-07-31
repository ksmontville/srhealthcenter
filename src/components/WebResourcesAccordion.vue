<template>
  <disclosure-group elevated class="mx-auto">
    <!-- Each entry is [category, links[]] from weblinks.json -->
    <disclosure-panel
      v-for="[category, links] in Object.entries(webLinks)"
      :key="category"
      :title="category"
    >
      <ul class="link-list">
        <li v-for="link in links" :key="link.url">
          <svg
            class="link-list__icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path :d="mdiHospital" />
          </svg>
          <span>
            <a :href="link.url" target="_blank" rel="noopener noreferrer">
              {{ link.text }}
            </a>
            <small v-if="link.subtext" class="link-list__subtext">
              — {{ link.subtext }}
            </small>
          </span>
        </li>
      </ul>
    </disclosure-panel>
  </disclosure-group>
</template>

<script setup>
import { mdiHospital } from "@mdi/js";
import DisclosureGroup from "@/components/DisclosureGroup.vue";
import DisclosurePanel from "@/components/DisclosurePanel.vue";
import weblinks from "@/assets/weblinks.json";

const webLinks = weblinks;
</script>

<style scoped>
.link-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.link-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 0.4rem 0;
}

.link-list__icon {
  flex: 0 0 auto;
  width: 20px;
  height: 20px;
  margin-top: 0.2em;
  fill: #fff;
}

.link-list__subtext {
  display: block;
  color: rgba(255, 255, 255, 0.8);
}

.link-list a {
  color: #f0ebce;
}

.link-list a:hover {
  color: #aa8b56;
}

.link-list a:focus {
  color: sandybrown;
}
</style>
