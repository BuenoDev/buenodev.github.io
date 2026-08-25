<script setup>
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'
import AboutSection from './components/sections/AboutSection.vue'
import ExperienceSection from './components/sections/ExperienceSection.vue'
import EducationSection from './components/sections/EducationSection.vue'
import SkillsSection from './components/sections/SkillsSection.vue'
import InterestsSection from './components/sections/InterestsSection.vue'
import AwardsSection from './components/sections/AwardsSection.vue'
</script>

<template>
  <AppHeader />
  <main class="app-content">
    <AboutSection />
    <hr />
    <ExperienceSection />
    <hr />
    <EducationSection />
    <hr />
    <SkillsSection />
    <hr />
    <InterestsSection />
    <hr />
    <AwardsSection />
    <AppFooter />
  </main>
</template>

<style>
.app-content {
  margin-left: 0;
  padding-top: 4.5rem;
}

hr {
  border: none;
  border-top: 1px solid var(--color-border);
  margin: 0;
}

.resume-section {
  padding: var(--space-lg) var(--space-md);
  max-width: 900px;
  margin: 0 auto;
}

@media (min-width: 992px) {
  .app-content {
    margin-left: var(--sidebar-width);
    padding-top: 0;
  }

  .resume-section {
    padding: var(--space-xl) var(--space-lg);
  }
}
</style>
