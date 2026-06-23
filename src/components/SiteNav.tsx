import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Globe, Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const NAV = [
  { label: "HOME", to: "/" },
  { label: "SOLUTIONS", to: "/solutions" },
  { label: "CLIENTS", to: "/clients" },
  { label: "ABOUT", to: "/about" },
  { label: "CONTACT", to: "/contact" },
] as const;

const LANGS = ["EN", "GR", "RUS", "AR"];

export function SiteNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [lang, setLang] = useState("EN");
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="glass mx-auto mt-3 max-w-7xl rounded-2xl px-5 md:px-7 h-16 flex items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center gap-9 text-[0.78rem] tracking-[0.18em] font-medium text-foreground/70">
          {NAV.map((item) => {
            const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`relative py-1 transition-colors hover:text-foreground ${active ? "text-foreground" : ""}`}
              >
                {item.label}
                {active && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-[#9ec5ff] to-[#1e6bff]" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <div className="relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="glass flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium tracking-wider"
            >
              <Globe className="h-3.5 w-3.5" strokeWidth={1.75} />
              {lang}
            </button>
            {langOpen && (
              <div className="glass absolute right-0 mt-2 w-24 rounded-xl p-1 z-50">
                {LANGS.map((l) => (
                  <button
                    key={l}
                    onClick={() => {
                      setLang(l);
                      setLangOpen(false);
                    }}
                    className={`block w-full text-left rounded-lg px-3 py-1.5 text-xs tracking-wider hover:bg-white/40 ${lang === l ? "text-foreground font-semibold" : "text-foreground/70"}`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button
            className="lg:hidden glass rounded-full p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden glass mx-auto mt-2 max-w-7xl rounded-2xl px-5 py-4 flex flex-col gap-3">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="text-sm tracking-[0.18em] font-medium text-foreground/80 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}