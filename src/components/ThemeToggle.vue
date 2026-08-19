<template>
  <v-btn
    :icon="icon"
    variant="text"
    :aria-label="label"
    :title="tooltip"
    class="theme-toggle"
    @click="cycle"
  />
</template>

<script setup>
import { computed } from "vue";
import { mdiThemeLightDark, mdiWhiteBalanceSunny, mdiWeatherNight } from "@mdi/js";
import { useThemePreference } from "@/composables/useThemePreference";

const { preference, resolved, cycle, label } = useThemePreference();

const icon = computed(() => {
  if (preference.value === "light") return mdiWhiteBalanceSunny;
  if (preference.value === "dark") return mdiWeatherNight;
  return mdiThemeLightDark; // following the system
});

// Short hover text; `label` carries the fuller description for screen readers.
const tooltip = computed(() =>
  preference.value === "system"
    ? `System theme (${resolved.value})`
    : `${preference.value[0].toUpperCase()}${preference.value.slice(1)} theme`,
);
</script>

<style scoped>
.theme-toggle {
  color: #fff;
}
</style>
