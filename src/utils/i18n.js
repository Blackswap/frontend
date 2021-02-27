import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import fr from '../lang/fr.json'
import en from '../lang/en.json'
// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: en
  },
  fr: {
    translation: fr
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
