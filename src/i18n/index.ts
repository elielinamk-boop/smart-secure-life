import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en.json";
import ru from "./locales/ru.json";
import ar from "./locales/ar.json";
import el from "./locales/el.json";

export const SUPPORTED_LANGS = [
  { code: "en", label: "English", native: "English" },
  { code: "ru", label: "Russian", native: "Русский" },
  { code: "ar", label: "Arabic", native: "العربية" },
  { code: "el", label: "Greek", native: "Ελληνικά" },
] as const;

export type LangCode = (typeof SUPPORTED_LANGS)[number]["code"];

export const RTL_LANGS: LangCode[] = ["ar"];

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: { translation: en },
        ru: { translation: ru },
        ar: { translation: ar },
        el: { translation: el },
      },
      fallbackLng: "en",
      supportedLngs: ["en", "ru", "ar", "el"],
      interpolation: { escapeValue: false },
      detection: {
        order: ["localStorage", "navigator", "htmlTag"],
        lookupLocalStorage: "talesso.lang",
        caches: ["localStorage"],
      },
      react: { useSuspense: false },
    });
}

export default i18n;