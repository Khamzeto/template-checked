import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/common.json',
    },
    react: {
      useSuspense: false,
    },
    load: 'languageOnly',
    interpolation: {
      escapeValue: false,
    },
    debug: true, // Включите debug-режим для отладки
  });

export default i18n;
