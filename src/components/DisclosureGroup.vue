<template>
  <!-- Shared chrome for a stack of <disclosure-panel> children. -->
  <div class="disclosure-group rounded overflow-hidden" :class="{ 'disclosure-group--elevated': elevated }">
    <slot />
  </div>
</template>

<script setup>
defineProps({
  elevated: { type: Boolean, default: false },
});
</script>

<style scoped>
.disclosure-group {
  border: 1px solid rgba(240, 235, 206, 0.25);
}

.disclosure-group--elevated {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
}

/* Divider between adjacent panels (they are separate child components). */
.disclosure-group :deep(details + details) {
  border-top: 1px solid rgba(240, 235, 206, 0.25);
}
</style>
