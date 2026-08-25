<script setup>
import { useLocale } from '../../composables/useLocale'

const { t } = useLocale()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="app-footer">
    <p>&copy; {{ year }} Gustavo Bueno. {{ t('footer.rights') }}</p>
  </footer>
</template>

<style scoped>
.app-footer {
  text-align: center;
  padding: var(--space-md);
  color: var(--color-text-muted);
  font-size: 0.85rem;
  border-top: 1px solid var(--color-border);
}
</style>
