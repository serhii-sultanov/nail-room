import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {},
    },
    ua: {
      translation: {},
    },
    ru: {
      translation: {},
    },
  },
  lng: 'ua',
  fallbackLng: 'ua',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
