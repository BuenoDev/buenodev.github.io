<script setup>
import { useLocale } from '../../composables/useLocale'
import portfolio from '../../data/portfolio.json'

const { t, localized } = useLocale()
</script>

<template>
  <section class="resume-section" id="awards">
    <div class="w-100">
      <h2>{{ t('sections.awards') }}</h2>
      <ul class="awards-list">
        <li v-for="award in portfolio.awards" :key="award.url">
          <i class="fa-solid fa-trophy award-icon" aria-hidden="true"></i>
          <a :href="award.url" target="_blank" rel="noopener noreferrer">{{ localized(award.title) }}</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.awards-list li {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  margin-bottom: var(--space-sm);
}

.award-icon {
  color: #f1c40f;
}
</style>
