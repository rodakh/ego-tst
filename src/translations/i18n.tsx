import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import translationHomeEN from './en/home.json'
import translationHomeUA from './ua/home.json'
import translationCommonEN from './en/common.json'
import translationCommonUA from './ua/common.json'
import translationNewsEN from './en/news.json'
import translationNewsUA from './ua/news.json'
import translationProfileEN from './en/profile.json'
import translationProfileUA from './ua/profile.json'

const resources = {
  en: {
    home: translationHomeEN,
    common: translationCommonEN,
    news: translationNewsEN,
    profile: translationProfileEN,
  },
  ua: {
    home: translationHomeUA,
    common: translationCommonUA,
    news: translationNewsUA,
    profile: translationProfileUA,
  },
}

i18next.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

export default i18next
