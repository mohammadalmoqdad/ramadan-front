import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translations from "./data/translations";
import LanguageDetector from "i18next-browser-languagedetector";

// English is default language if no value in the local storage OR someone inserted non-desired value
const VALID_LANGUAGES = ["ar", "en"];
let selectedLanguage = localStorage.getItem("lang");
if (!selectedLanguage || !VALID_LANGUAGES.includes(selectedLanguage))
  selectedLanguage = "en";

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: "ar",
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
    lng: selectedLanguage,
    resources: translations,
  });

export default i18n;
