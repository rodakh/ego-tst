import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import translationEN from './en/home.json'
import translationUA from './ua/home.json'

const resources = {
  en: {
    home: translationEN,
  },
  ua: {
    home: translationUA,
  },
}

i18next.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

export default i18next
