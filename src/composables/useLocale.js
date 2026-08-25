import { useI18n } from 'vue-i18n'
import { SUPPORTED_LOCALES, persistLocale } from '../locales'

export function useLocale() {
  const { locale, t } = useI18n()

  function setLocale(newLocale) {
    if (!SUPPORTED_LOCALES.includes(newLocale)) return
    locale.value = newLocale
    persistLocale(newLocale)
    document.documentElement.setAttribute('lang', newLocale)
  }

  /** Pega o valor traduzido de um campo bilíngue vindo do JSON de conteúdo,
   * ex: { "pt-BR": "...", "en": "..." } */
  function localized(field) {
    if (field == null) return ''
    if (typeof field === 'string') return field
    return field[locale.value] ?? field[SUPPORTED_LOCALES[0]] ?? ''
  }

  return { locale, t, setLocale, localized, locales: SUPPORTED_LOCALES }
}
