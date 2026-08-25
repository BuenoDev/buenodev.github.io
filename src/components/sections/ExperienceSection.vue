<script setup>
import { useLocale } from '../../composables/useLocale'
import portfolio from '../../data/portfolio.json'

const { t, localized } = useLocale()
</script>

<template>
  <section class="resume-section" id="experience">
    <div class="w-100">
      <h2>{{ t('sections.experience') }}</h2>

      <article v-for="item in portfolio.experience" :key="item.company + item.period['pt-BR']" class="resume-item">
        <div class="resume-content">
          <h3>{{ localized(item.role) }}</h3>
          <div class="subheading">
            <a v-if="item.companyUrl" :href="item.companyUrl" target="_blank" rel="noopener noreferrer">{{ item.company }}</a>
            <span v-else>{{ item.company }}</span>
          </div>
          <p>{{ localized(item.description) }}</p>
          <ul v-if="item.technologies?.length" class="tech-list">
            <li v-for="tech in item.technologies" :key="tech">{{ tech }}</li>
          </ul>
        </div>
        <div class="resume-date">
          <span class="text-primary">{{ localized(item.period) }}</span>
          <img v-if="item.image" :src="item.image" class="resume-image" alt="" />
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
  margin-bottom: var(--space-lg);
  padding-bottom: var(--space-lg);
  border-bottom: 1px solid var(--color-border);
}

.resume-item:last-child {
  border-bottom: none;
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
  margin-top: var(--space-xs);
}

.tech-list li {
  background: var(--color-bg-alt);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: 0.15rem 0.6rem;
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

.resume-image {
  margin-top: var(--space-sm);
  max-width: 260px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);
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
