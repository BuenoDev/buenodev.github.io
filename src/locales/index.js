import { createI18n } from 'vue-i18n'
import ptBR from './pt-BR.json'
import en from './en.json'

export const SUPPORTED_LOCALES = ['pt-BR', 'en']
export const FALLBACK_LOCALE = 'pt-BR'
const STORAGE_KEY = 'portfolio-locale'

function detectLocale() {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved && SUPPORTED_LOCALES.includes(saved)) return saved

  const browserLocale = navigator.language || FALLBACK_LOCALE
  if (SUPPORTED_LOCALES.includes(browserLocale)) return browserLocale

  return browserLocale.toLowerCase().startsWith('pt') ? 'pt-BR' : 'en'
}

export const i18n = createI18n({
  legacy: false,
  locale: detectLocale(),
  fallbackLocale: FALLBACK_LOCALE,
  messages: {
    'pt-BR': ptBR,
    en,
  },
})

export function persistLocale(locale) {
  localStorage.setItem(STORAGE_KEY, locale)
}
