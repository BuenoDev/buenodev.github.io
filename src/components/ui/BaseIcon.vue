<script setup>
defineProps({
  icon: { type: String, required: true },
  label: { type: String, default: '' },
})
</script>

<template>
  <i :class="icon" aria-hidden="true"></i>
  <span v-if="label" class="sr-only">{{ label }}</span>
</template>
