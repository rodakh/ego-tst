import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import translationHomeEN from './en/home.json'
import translationHomeUA from './ua/home.json'
import translationCommonEN from './en/common.json'
import translationCommonUA from './ua/common.json'

const resources = {
  en: {
    home: translationHomeEN,
    common: translationCommonEN,
  },
  ua: {
    home: translationHomeUA,
    common: translationCommonUA,
  },
}

i18next.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

export default i18next
