<script setup>
import { useLocale } from '../../composables/useLocale'
import portfolio from '../../data/portfolio.json'
import BaseIcon from '../ui/BaseIcon.vue'

const { localized } = useLocale()
</script>

<template>
  <section class="resume-section" id="about">
    <div class="w-100">
      <h1 class="mb-0">
        {{ portfolio.profile.firstName }}
        <span class="text-primary">{{ portfolio.profile.lastName }}</span>
      </h1>
      <div class="subheading about__subheading">
        {{ portfolio.profile.location }} ·
        <a :href="`mailto:${portfolio.profile.email}`">{{ portfolio.profile.email }}</a>
      </div>
      <p class="about__title">{{ localized(portfolio.profile.title) }}</p>
      <p class="lead">{{ localized(portfolio.profile.summary) }}</p>

      <div class="social-icons">
        <a v-for="item in portfolio.social" :key="item.url" :href="item.url" target="_blank" rel="noopener noreferrer">
          <BaseIcon :icon="item.icon" :label="item.label" />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about__subheading {
  margin-bottom: var(--space-lg);
}

.about__title {
  font-family: var(--font-heading);
  font-size: 1.4rem;
  color: var(--color-text-muted);
  margin-bottom: var(--space-sm);
}

.lead {
  font-size: 1.15rem;
  margin-bottom: var(--space-lg);
}

.social-icons {
  display: flex;
  gap: var(--space-md);
  font-size: 1.4rem;
}

.social-icons a {
  color: var(--color-text);
}

.social-icons a:hover,
.social-icons a:focus-visible {
  color: var(--color-primary);
}
</style>
