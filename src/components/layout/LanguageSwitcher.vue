<script setup>
import { useLocale } from '../../composables/useLocale'

const { locale, setLocale, locales } = useLocale()

const labels = { 'pt-BR': 'PT', en: 'EN' }
</script>

<template>
  <div class="language-switcher" role="group" aria-label="Idioma / Language">
    <button
      v-for="loc in locales"
      :key="loc"
      type="button"
      class="language-switcher__btn"
      :class="{ 'is-active': locale === loc }"
      :aria-pressed="locale === loc"
      @click="setLocale(loc)"
    >
      {{ labels[loc] }}
    </button>
  </div>
</template>

<style scoped>
.language-switcher {
  display: inline-flex;
  gap: var(--space-xs);
}

.language-switcher__btn {
  background: transparent;
  border: 1px solid var(--color-border);
  color: var(--color-text);
  border-radius: var(--radius-sm);
  padding: 0.25rem 0.6rem;
  font-size: 0.85rem;
  cursor: pointer;
  transition: background-color var(--transition-fast), color var(--transition-fast);
}

.language-switcher__btn.is-active {
  background: var(--color-primary);
  color: var(--color-primary-contrast);
  border-color: var(--color-primary);
}
</style>
