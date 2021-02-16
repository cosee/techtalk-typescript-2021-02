import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import {deTranslations, enTranslations} from "src/i18n/translations";

i18n.use(initReactI18next).init({
  resources: {
    en: {translation: enTranslations},
    de: {translation: deTranslations},
  },
  lng: "en",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});
