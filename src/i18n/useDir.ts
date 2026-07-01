import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { RTL_LANGS, type LangCode } from "./index";

export function useDir() {
  const { i18n } = useTranslation();
  useEffect(() => {
    const apply = (lng: string) => {
      const code = (lng.split("-")[0] as LangCode) || "en";
      const dir = RTL_LANGS.includes(code) ? "rtl" : "ltr";
      if (typeof document !== "undefined") {
        document.documentElement.setAttribute("lang", code);
        document.documentElement.setAttribute("dir", dir);
      }
    };
    apply(i18n.language);
    i18n.on("languageChanged", apply);
    return () => i18n.off("languageChanged", apply);
  }, [i18n]);
}