<script setup>
import { ref } from 'vue'
import { useLocale } from '../../composables/useLocale'
import portfolio from '../../data/portfolio.json'
import LanguageSwitcher from './LanguageSwitcher.vue'
import ThemeToggle from './ThemeToggle.vue'

const { t } = useLocale()
const isOpen = ref(false)

const navItems = [
  { id: 'about', key: 'about' },
  { id: 'experience', key: 'experience' },
  { id: 'education', key: 'education' },
  { id: 'skills', key: 'skills' },
  { id: 'interests', key: 'interests' },
  { id: 'awards', key: 'awards' },
]

function closeMenu() {
  isOpen.value = false
}
</script>

<template>
  <header class="app-header" id="sideNav">
    <a class="app-header__brand" href="#page-top" @click="closeMenu">
      <img
        class="app-header__photo"
        :src="portfolio.meta.photo"
        :alt="`Foto de ${portfolio.profile.firstName} ${portfolio.profile.lastName}`"
      />
      <span class="app-header__name">{{ portfolio.profile.firstName }} <strong>{{ portfolio.profile.lastName }}</strong></span>
    </a>

    <button
      class="app-header__toggle"
      type="button"
      :aria-expanded="isOpen"
      aria-controls="app-header-nav"
      aria-label="Abrir navegação"
      @click="isOpen = !isOpen"
    >
      <span></span><span></span><span></span>
    </button>

    <nav id="app-header-nav" class="app-header__nav" :class="{ 'is-open': isOpen }">
      <ul>
        <li v-for="item in navItems" :key="item.id">
          <a :href="`#${item.id}`" @click="closeMenu">{{ t(`nav.${item.key}`) }}</a>
        </li>
      </ul>
      <div class="app-header__controls">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
    </nav>
  </header>
</template>

<style scoped>
.app-header {
  position: fixed;
  inset: 0 auto 0 0;
  width: var(--sidebar-width);
  background: var(--color-bg-alt);
  border-right: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--space-lg) var(--space-md);
  z-index: 100;
  overflow-y: auto;
}

.app-header__brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);
  text-decoration: none;
  color: var(--color-text);
}

.app-header__photo {
  width: 9rem;
  height: 9rem;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: var(--shadow-md);
}

.app-header__name {
  font-family: var(--font-heading);
  font-size: 1.3rem;
}

.app-header__toggle {
  display: none;
}

.app-header__nav {
  margin-top: var(--space-lg);
  width: 100%;
}

.app-header__nav ul {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  text-align: center;
}

.app-header__nav a {
  color: var(--color-text);
  font-family: var(--font-heading);
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.app-header__nav a:hover,
.app-header__nav a:focus-visible {
  color: var(--color-primary);
  text-decoration: none;
}

.app-header__controls {
  margin-top: var(--space-lg);
  display: flex;
  justify-content: center;
  gap: var(--space-sm);
}

@media (max-width: 991px) {
  .app-header {
    position: fixed;
    width: 100%;
    height: auto;
    flex-direction: row;
    justify-content: space-between;
    padding: var(--space-sm) var(--space-md);
    border-right: none;
    border-bottom: 1px solid var(--color-border);
  }

  .app-header__photo {
    display: none;
  }

  .app-header__toggle {
    display: flex;
    flex-direction: column;
    gap: 4px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: var(--space-xs);
  }

  .app-header__toggle span {
    width: 22px;
    height: 2px;
    background: var(--color-text);
    display: block;
  }

  .app-header__nav {
    position: fixed;
    top: 56px;
    left: 0;
    right: 0;
    background: var(--color-bg-alt);
    border-bottom: 1px solid var(--color-border);
    padding: var(--space-md);
    margin-top: 0;
    display: none;
  }

  .app-header__nav.is-open {
    display: block;
  }
}
</style>
