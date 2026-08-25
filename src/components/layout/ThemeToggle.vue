<script setup>
import { useTheme } from '../../composables/useTheme'
import { useLocale } from '../../composables/useLocale'
import BaseIcon from '../ui/BaseIcon.vue'

const { theme, cycleTheme } = useTheme()
const { t } = useLocale()

const icons = { system: 'fa-solid fa-circle-half-stroke', light: 'fa-solid fa-sun', dark: 'fa-solid fa-moon' }
</script>

<template>
  <button
    type="button"
    class="theme-toggle"
    :title="t('theme.toggle')"
    :aria-label="t('theme.toggle')"
    @click="cycleTheme"
  >
    <BaseIcon :icon="icons[theme]" />
  </button>
</template>

<style scoped>
.theme-toggle {
  background: transparent;
  border: 1px solid var(--color-border);
  color: var(--color-text);
  border-radius: var(--radius-sm);
  width: 2rem;
  height: 2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>
