// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {clientDataEN,blogDataEN,serviceDataEN,TitleEN} from './locales/en/translation';
import {clientDataFr,blogDataFR,serviceDataFR,Titlefr} from './locales/fr/translation';
import { clientDataAR,blogDataAR,serviceDataAR,TitleAR} from './locales/ar/translation';
// Initialize i18next
i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    resources: {
      en: {
        translation: clientDataEN,blogDataEN,serviceDataEN,TitleEN
      },
      fr: {
        translation: clientDataFr,blogDataFR,serviceDataFR,Titlefr
      },
      ar:{
        translation:clientDataAR,blogDataAR,serviceDataAR,TitleAR
      }
    },
    fallbackLng: 'en', // Default language if detection fails
    interpolation: {
      escapeValue: false, // React already safely escapes values
    },
  });

export default i18n;
