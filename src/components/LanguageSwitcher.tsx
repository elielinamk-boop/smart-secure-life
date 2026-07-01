import { useEffect, useRef, useState } from "react";
import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGS } from "@/i18n";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const current =
    SUPPORTED_LANGS.find((l) => l.code === i18n.language?.split("-")[0]) ??
    SUPPORTED_LANGS[0];

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div ref={wrapRef} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="glass flex items-center gap-1.5 rounded-full px-4 py-2.5 min-h-11 text-xs font-semibold tracking-wider uppercase"
        aria-label="Change language"
      >
        <Globe className="h-4 w-4" strokeWidth={1.75} />
        {current.code.toUpperCase()}
      </button>
      {open && (
        <div className="glass absolute end-0 mt-2 w-40 rounded-xl p-1.5 z-50">
          {SUPPORTED_LANGS.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                i18n.changeLanguage(l.code);
                setOpen(false);
              }}
              className={`block w-full text-start rounded-lg px-3 py-2.5 min-h-10 text-xs tracking-wider hover:bg-white/40 ${
                current.code === l.code ? "text-foreground font-semibold" : "text-foreground/70"
              }`}
            >
              {l.native}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}