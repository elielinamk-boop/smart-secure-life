import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Globe, Menu, X, ArrowRight } from "lucide-react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 animate-nav-in">
      <div
        className={`mx-auto mt-3 max-w-7xl rounded-2xl px-4 md:px-6 h-16 flex items-center justify-between gap-3 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl bg-background/70 border border-white/40 shadow-[0_10px_40px_-20px_rgba(0,40,120,0.25)]"
            : "glass"
        }`}
      >
        <Logo />

        <nav className="hidden lg:flex items-center gap-2 text-[0.82rem] tracking-[0.18em] font-semibold text-foreground/80">
          {NAV.map((item) => {
            const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`relative inline-flex items-center px-4 py-2.5 min-h-11 rounded-full transition-colors hover:text-foreground hover:bg-white/40 active:bg-white/60 ${active ? "text-foreground bg-white/50" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-accent-blue/70 bg-background/80 px-5 py-2.5 min-h-11 text-sm font-medium hover:bg-foreground hover:text-background hover:border-foreground transition-colors"
          >
            Get started <ArrowRight className="h-4 w-4" />
          </Link>
          <div className="relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="glass flex items-center gap-1.5 rounded-full px-4 py-2.5 min-h-11 text-xs font-semibold tracking-wider"
            >
              <Globe className="h-4 w-4" strokeWidth={1.75} />
              {lang}
            </button>
            {langOpen && (
              <div className="glass absolute right-0 mt-2 w-28 rounded-xl p-1.5 z-50">
                {LANGS.map((l) => (
                  <button
                    key={l}
                    onClick={() => {
                      setLang(l);
                      setLangOpen(false);
                    }}
                    className={`block w-full text-left rounded-lg px-3 py-2.5 min-h-10 text-xs tracking-wider hover:bg-white/40 ${lang === l ? "text-foreground font-semibold" : "text-foreground/70"}`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button
            className="lg:hidden glass rounded-full p-3 min-h-11 min-w-11 flex items-center justify-center"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden glass mx-auto mt-2 max-w-7xl rounded-2xl px-4 py-3 flex flex-col gap-1">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 min-h-12 text-sm tracking-[0.18em] font-semibold text-foreground/80 hover:text-foreground hover:bg-white/40 active:bg-white/60"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full border border-accent-blue/70 bg-background/80 px-4 py-3 min-h-12 text-center text-sm font-semibold hover:bg-foreground hover:text-background transition-colors"
          >
            Get started →
          </Link>
        </div>
      )}
    </header>
  );
}