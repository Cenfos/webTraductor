// src/i18n.js
import en from './translations/en.json';
import es from './translations/es.json';

const translations = { en, es };

export function getTranslations(locale) {
  return translations[locale] || translations['en'];
}
