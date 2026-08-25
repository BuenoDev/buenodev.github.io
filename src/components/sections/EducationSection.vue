<script setup>
import { useLocale } from '../../composables/useLocale'
import portfolio from '../../data/portfolio.json'

const { t, localized } = useLocale()
</script>

<template>
  <section class="resume-section" id="education">
    <div class="w-100">
      <h2>{{ t('sections.education') }}</h2>

      <article v-for="item in portfolio.education" :key="item.institution" class="resume-item">
        <div class="resume-content">
          <h3>{{ item.institution }}</h3>
          <div class="subheading">{{ localized(item.degree) }}</div>
        </div>
        <div class="resume-date">
          <span class="text-primary">{{ localized(item.period) }}</span>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.resume-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--space-sm);
}

@media (min-width: 768px) {
  .resume-item {
    flex-direction: row;
  }

  .resume-date {
    text-align: right;
    white-space: nowrap;
  }
}
</style>
