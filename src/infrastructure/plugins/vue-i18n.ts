import { en } from '@/infrastructure/local/en.local'
import { es } from '@/infrastructure/local/es.local'

import { createI18n } from 'vue-i18n'

const [userLanguage] = navigator.language.split('-')

const vueI18n = createI18n({
  legacy: false,
  locale: userLanguage,
  fallbackLocale: 'en',
  missing: (locale, key) => {
    console.warn(`Missing translation key: ${key}, in locale: ${locale}`)
    return ''
  },
  messages: {
    en,
    es
  }
})

export { vueI18n }
