import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import {
  ChevronLeft,
  ChevronRight,
  Users,
  Activity,
  Building2,
  Globe2,
  type LucideIcon,
} from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import door1 from "@/assets/clients-door-1.png.asset.json";
import jbg2 from "@/assets/clients-jbg-2.png.asset.json";
import gate3 from "@/assets/clients-gate-3.png.asset.json";
import gdprEu from "@/assets/gdpr-eu.webp.asset.json";

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: i18n.t("meta.clients.title") },
      { name: "description", content: i18n.t("meta.clients.description") },
      { property: "og:title", content: i18n.t("meta.clients.ogTitle") },
      { property: "og:url", content: "/clients" },
    ],
    links: [{ rel: "canonical", href: "/clients" }],
  }),
  component: ClientsPage,
});

const PHOTOS: { src: string; alt: string }[] = [
  { src: door1.url, alt: "Talesso face-recognition terminal at a seaside office entrance" },
  { src: jbg2.url, alt: "Talesso access terminal at JBG commercial building entrance" },
  { src: gate3.url, alt: "Talesso terminal integrated on a residential gate" },
];

function useInView<T extends Element>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function CountUp({
  value,
  active,
  duration = 1600,
}: {
  value: string;
  active: boolean;
  duration?: number;
}) {
  // Parse the numeric portion; keep prefix/suffix (e.g. "99.9%" or "100+").
  const match = value.match(/^(\D*)([\d.,]+)(.*)$/);
  const prefix = match?.[1] ?? "";
  const numStr = match?.[2] ?? value;
  const suffix = match?.[3] ?? "";
  const target = parseFloat(numStr.replace(",", "."));
  const hasDecimal = numStr.includes(".");
  const [display, setDisplay] = useState(active ? target : 0);

  useEffect(() => {
    if (!active || !isFinite(target)) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(target * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);

  if (!isFinite(target)) return <>{value}</>;
  const rendered = hasDecimal ? display.toFixed(1) : Math.round(display).toString();
  return (
    <>
      {prefix}
      {rendered}
      {suffix}
    </>
  );
}

type Stat = { icon: LucideIcon; valueKey: string; labelKey: string };
const STATS: Stat[] = [
  { icon: Users, valueKey: "clientsPage.stats.usersValue", labelKey: "clientsPage.stats.usersLabel" },
  { icon: Activity, valueKey: "clientsPage.stats.uptimeValue", labelKey: "clientsPage.stats.uptimeLabel" },
  { icon: Building2, valueKey: "clientsPage.stats.buildingsValue", labelKey: "clientsPage.stats.buildingsLabel" },
  { icon: Globe2, valueKey: "clientsPage.stats.countriesValue", labelKey: "clientsPage.stats.countriesLabel" },
];

function Gallery() {
  const { t } = useTranslation();
  const { ref, inView } = useInView<HTMLDivElement>(0.15);
  const [index, setIndex] = useState(0);
  const [parallax, setParallax] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const el = ref.current;
        if (el) {
          const rect = el.getBoundingClientRect();
          const vh = window.innerHeight || 1;
          const progress = (vh - rect.top) / (vh + rect.height);
          setParallax(Math.max(-20, Math.min(20, (progress - 0.5) * 40)));
        }
        raf = 0;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ref]);

  const go = (dir: -1 | 1) =>
    setIndex((i) => (i + dir + PHOTOS.length) % PHOTOS.length);

  return (
    <div ref={ref} className="relative">
      {/* GDPR badge */}
      <div
        className={`absolute -top-3 right-2 z-20 transition-all duration-[900ms] ease-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        }`}
        style={{ transitionDelay: "700ms" }}
      >
        <div
          className="flex items-center gap-2.5 rounded-full border border-white/70 bg-white/70 pl-1.5 pr-4 py-1.5 backdrop-blur-md shadow-[0_10px_30px_-15px_rgba(30,60,120,0.25)]"
          aria-label={t("clientsPage.gdpr")}
        >
          <img
            src={gdprEu.url}
            alt="GDPR"
            className="h-11 w-11 rounded-full object-cover"
          />
          <span className="text-[12px] font-semibold tracking-wide text-foreground/80">
            {t("clientsPage.gdpr")}
          </span>
        </div>
      </div>

      {/* Carousel viewport */}
      <div className="relative overflow-hidden rounded-[28px]">
        <div
          className="flex transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ transform: `translate3d(-${index * 100}%, ${parallax * 0.15}px, 0)` }}
        >
          {PHOTOS.map((p, i) => (
            <div key={p.src} className="w-full shrink-0 px-1">
              <div
                className={`group relative aspect-[4/5] overflow-hidden rounded-[28px] border border-white/60 bg-white/40 shadow-[0_30px_80px_-40px_rgba(20,40,90,0.35)] transition-all duration-700 ease-out will-change-transform ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading={i === 0 ? "eager" : "lazy"}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out will-change-transform group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </div>
          ))}
        </div>

        {/* Nav arrows */}
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label={t("clientsPage.prev")}
          className="absolute left-4 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/70 bg-white/75 text-foreground/70 backdrop-blur-md shadow-[0_10px_30px_-12px_rgba(30,60,120,0.35)] transition-all duration-300 hover:scale-105 hover:text-foreground hover:shadow-[0_16px_36px_-14px_rgba(30,60,120,0.4)]"
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={1.75} />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label={t("clientsPage.next")}
          className="absolute right-4 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/70 bg-white/75 text-foreground/70 backdrop-blur-md shadow-[0_10px_30px_-12px_rgba(30,60,120,0.35)] transition-all duration-300 hover:scale-105 hover:text-foreground hover:shadow-[0_16px_36px_-14px_rgba(30,60,120,0.4)]"
        >
          <ChevronRight className="h-5 w-5" strokeWidth={1.75} />
        </button>
      </div>

      {/* Dots */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {PHOTOS.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Project ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === index
                ? "w-8 bg-foreground/70"
                : "w-1.5 bg-foreground/20 hover:bg-foreground/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function StatsRow() {
  const { t } = useTranslation();
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  return (
    <div ref={ref} className="mt-24 grid grid-cols-2 gap-4 md:mt-28 md:grid-cols-4 md:gap-6">
      {STATS.map((s, i) => (
        <div
          key={s.labelKey}
          className={`group relative overflow-hidden rounded-3xl border border-white/70 bg-gradient-to-b from-white/80 to-white/40 p-6 backdrop-blur-md shadow-[0_20px_60px_-30px_rgba(20,40,90,0.28)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_60px_-24px_rgba(119,221,255,0.45)] ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: `${i * 120}ms` }}
        >
          <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 [background:radial-gradient(circle_at_50%_0%,rgba(119,221,255,0.25),transparent_60%)]" />
          <div className="relative flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl border border-white/40 bg-foreground/5 backdrop-blur-md transition-all duration-500 group-hover:border-[#77DDFF]/60 group-hover:bg-[#77DDFF]/15 group-hover:shadow-[0_0_20px_-4px_rgba(119,221,255,0.7)]">
              <s.icon className="h-4 w-4 text-foreground/50 transition-colors duration-500 group-hover:text-[#77DDFF]" strokeWidth={1.75} />
            </div>
          </div>
          <div className="relative mt-5 font-display text-3xl md:text-4xl font-bold tracking-[-0.02em]">
            <CountUp value={t(s.valueKey)} active={inView} />
          </div>
          <p className="relative mt-1.5 text-sm text-foreground/60">{t(s.labelKey)}</p>
        </div>
      ))}
    </div>
  );
}

function ClientsPage() {
  const { t } = useTranslation();
  const { ref: heroRef, inView: heroIn } = useInView<HTMLDivElement>(0.15);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <section
        ref={heroRef}
        className="relative overflow-hidden py-24 md:py-32"
        aria-label={t("clientsPage.headline")}
      >
        {/* Ambient background */}
        <div className="pointer-events-none absolute inset-0 -z-0">
          <div className="absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full bg-[#DDE7F5] opacity-60 blur-3xl" />
          <div className="absolute top-1/2 -right-32 h-[560px] w-[560px] rounded-full bg-[#FBE8E9] opacity-50 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-[92rem] gap-14 px-6 md:px-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,6fr)] lg:gap-16">
          {/* LEFT */}
          <div className="flex flex-col justify-center">
            <p
              className={`text-xs uppercase tracking-[0.32em] text-accent-blue/90 font-semibold transition-all duration-700 ease-out ${
                heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
            >
              {"\n"}
            </p>
            <h1
              className={`mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] transition-all duration-[900ms] ease-out ${
                heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "80ms" }}
            >
              {t("clientsPage.headline")}
            </h1>
            <p
              className={`mt-6 max-w-xl text-base md:text-lg leading-relaxed text-foreground/60 transition-all duration-[900ms] ease-out ${
                heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              {t("clientsPage.description")}
            </p>
          </div>

          {/* RIGHT */}
          <div id="projects" className="relative">
            <Gallery />
          </div>
        </div>

        <div className="relative mx-auto max-w-[92rem] px-6 md:px-10">
          <StatsRow />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}