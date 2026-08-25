import { ref, watchEffect } from 'vue'

const STORAGE_KEY = 'portfolio-theme'
const THEMES = ['system', 'light', 'dark']

const theme = ref(localStorage.getItem(STORAGE_KEY) || 'system')

function applyTheme(value) {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const resolved = value === 'system' ? (prefersDark ? 'dark' : 'light') : value
  document.documentElement.setAttribute('data-theme', resolved)
}

watchEffect(() => {
  applyTheme(theme.value)
  localStorage.setItem(STORAGE_KEY, theme.value)
})

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  if (theme.value === 'system') applyTheme('system')
})

export function useTheme() {
  function setTheme(value) {
    if (!THEMES.includes(value)) return
    theme.value = value
  }

  function cycleTheme() {
    const idx = THEMES.indexOf(theme.value)
    theme.value = THEMES[(idx + 1) % THEMES.length]
  }

  return { theme, themes: THEMES, setTheme, cycleTheme }
}
