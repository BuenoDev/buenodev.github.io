<script setup>
import { useLocale } from '../../composables/useLocale'
import portfolio from '../../data/portfolio.json'

const { t, localized } = useLocale()
</script>

<template>
  <section class="resume-section" id="interests">
    <div class="w-100">
      <h2>{{ t('sections.interests') }}</h2>
      <p>{{ localized(portfolio.interests) }}</p>
    </div>
  </section>
</template>
