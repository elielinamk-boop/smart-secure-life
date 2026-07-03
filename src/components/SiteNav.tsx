import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";

const NAV = [
  { key: "home", to: "/" },
  { key: "solutions", to: "/solutions" },
  { key: "clients", to: "/clients" },
  { key: "about", to: "/about" },
  { key: "contact", to: "/contact" },
] as const;

export function SiteNav() {
  const { t } = useTranslation();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = prev; };
    }
  }, [open]);

  useEffect(() => { setOpen(false); }, [pathname]);

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
                {t(`nav.${item.key}`)}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-accent-blue/70 bg-background/80 px-5 py-2.5 min-h-11 text-sm font-medium hover:bg-foreground hover:text-background hover:border-foreground transition-colors"
          >
            {t("common.getStarted")} <ArrowRight className="h-4 w-4 rtl:-scale-x-100" />
          </Link>
          <LanguageSwitcher />
          <button
            className="lg:hidden glass rounded-full p-3 min-h-11 min-w-11 flex items-center justify-center"
            onClick={() => setOpen((v) => !v)}
            aria-label={t("nav.menu")}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <>
          <div
            className="lg:hidden fixed inset-0 z-40 bg-background/70 backdrop-blur-xl animate-mobile-nav-fade"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div
            className="lg:hidden fixed left-0 right-0 top-[calc(3.75rem+0.75rem)] z-50 mx-3 rounded-3xl border border-white/60 bg-white/85 backdrop-blur-2xl shadow-[0_30px_80px_-30px_rgba(15,23,42,0.35)] p-3 flex flex-col gap-1 animate-mobile-nav-slide"
            role="dialog"
            aria-modal="true"
          >
            {NAV.map((item, i) => {
              const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  style={{ animationDelay: `${60 + i * 55}ms` }}
                  className={`animate-mobile-link-in rounded-2xl px-5 py-4 min-h-12 text-[13px] tracking-[0.22em] font-semibold transition-colors ${active ? "text-foreground bg-white shadow-[0_6px_20px_-10px_rgba(30,60,120,0.35)]" : "text-foreground/70 hover:text-foreground hover:bg-white/70 active:bg-white/80"}`}
                >
                  {t(`nav.${item.key}`)}
                </Link>
              );
            })}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              style={{ animationDelay: `${60 + NAV.length * 55}ms` }}
              className="animate-mobile-link-in mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-accent-blue/70 bg-foreground text-background px-5 py-4 min-h-12 text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              {t("common.getStarted")} <ArrowRight className="h-4 w-4 rtl:-scale-x-100" />
            </Link>
          </div>
        </>
      )}
    </header>
  );
}