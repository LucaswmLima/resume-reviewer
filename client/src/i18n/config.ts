import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import ptTranslation from "./locales/pt.json";
import enTranslation from "./locales/en.json";
import esTranslation from "./locales/es.json";
import frTranslation from "./locales/fr.json";
import deTranslation from "./locales/de.json";
import zhTranslation from "./locales/zh.json";

export const defaultNS = "translation";

i18next.use(initReactI18next).init({
  lng: "pt",
  fallbackLng: "en",
  debug: false,
  resources: {
    pt: { translation: ptTranslation },
    en: { translation: enTranslation },
    es: { translation: esTranslation },
    fr: { translation: frTranslation },
    de: { translation: deTranslation },
    zh: { translation: zhTranslation },
  },
  defaultNS,
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
