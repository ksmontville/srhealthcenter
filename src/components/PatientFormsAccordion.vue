<template>
  <disclosure-group elevated class="mx-auto">
    <disclosure-panel v-for="group in patientForms" :key="group.id" :title="group.type">
      <p v-if="group.text" class="body-text mb-3">{{ group.text }}</p>

      <ul class="form-list">
        <li v-for="item in group.forms" :key="item.id">
          <svg
            class="form-list__icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path :d="mdiHospital" />
          </svg>
          <span>
            <a :href="item.link" target="_blank" rel="noopener noreferrer">
              {{ item.form }}
            </a>
            <small v-if="item.text"> ({{ item.text }})</small>
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
import patientForms from "@/assets/patientForms.json";
</script>

<style scoped>
.form-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.form-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 0.35rem 0;
}

.form-list__icon {
  flex: 0 0 auto;
  width: 20px;
  height: 20px;
  margin-top: 0.2em;
  fill: #fff;
}

.form-list a {
  color: #f0ebce;
}

.form-list a:hover {
  color: #aa8b56;
}

.form-list a:focus {
  color: sandybrown;
}
</style>
