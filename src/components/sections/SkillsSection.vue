<script setup>
import { useLocale } from '../../composables/useLocale'
import portfolio from '../../data/portfolio.json'
import BaseIcon from '../ui/BaseIcon.vue'

const { t, localized } = useLocale()
</script>

<template>
  <section class="resume-section" id="skills">
    <div class="w-100">
      <h2>{{ t('sections.skills') }}</h2>

      <ul class="dev-icons" :aria-label="t('sections.skills')">
        <li v-for="skill in portfolio.skills.tools" :key="skill.name" :title="skill.name">
          <BaseIcon :icon="skill.icon" :label="skill.name" />
        </li>
      </ul>

      <div class="subheading">{{ t('sections.languages') }}</div>
      <ul class="languages">
        <li v-for="(lang, idx) in portfolio.skills.languages" :key="idx">{{ localized(lang) }}</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.dev-icons {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);
  font-size: 2rem;
  margin-bottom: var(--space-lg);
  color: var(--color-primary);
}

.languages {
  margin-top: var(--space-xs);
}
</style>
