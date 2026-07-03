import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ShieldCheck, Sofa, Building2, Settings, Heart } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { FeatureRoadmap } from "@/components/FeatureRoadmap";
import i18n from "@/i18n";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: i18n.t("meta.solutions.title") },
      { name: "description", content: i18n.t("meta.solutions.description") },
      { property: "og:title", content: i18n.t("meta.solutions.ogTitle") },
      { property: "og:url", content: "/solutions" },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
  component: SolutionsPage,
});

const SOLUTIONS = [
  { icon: ShieldCheck, key: "security" },
  { icon: Sofa, key: "comfort" },
  { icon: Building2, key: "organization" },
  { icon: Settings, key: "automation" },
  { icon: Heart, key: "healthCare" },
] as const;

function GlassSphere({ children }: { children: ReactNode; index?: number }) {
  return (
    <div className="relative mx-auto h-20 w-20">
      <div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-[#eef1f5] via-[#e3e7ed] to-[#cfd6de] shadow-[inset_0_2px_6px_rgba(255,255,255,0.7),inset_0_-6px_12px_rgba(80,110,150,0.22),0_10px_24px_-12px_rgba(40,60,100,0.3)]"
      />
      <div className="absolute inset-[3px] rounded-full border border-white/50" />
      <div className="absolute left-2 top-1.5 h-3 w-5 rounded-full bg-white/50 blur-[2px]" />
      <div className="relative z-10 flex h-full w-full items-center justify-center">{children}</div>
    </div>
  );
}

function SolutionsPage() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <section className="mx-auto max-w-[88rem] px-6 md:px-10 pt-16 pb-10">
        <p className="text-xs uppercase tracking-[0.28em] text-foreground/50">{t("solutions.eyebrow")}</p>
        <h1 className="mt-4 font-display text-3xl md:text-5xl font-bold tracking-[-0.03em] max-w-3xl">
          {t("solutions.pageTitle1")}
        </h1>
        <p className="mt-4 max-w-md text-sm text-foreground/55 leading-relaxed">
          {t("solutions.pageSubtitle")}
        </p>
      </section>

      <section className="mx-auto max-w-[88rem] px-6 md:px-10 pb-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {SOLUTIONS.map((s, i) => (
            <div
              key={s.key}
              className="group relative rounded-3xl border border-white/60 bg-gradient-to-b from-white/70 to-white/30 backdrop-blur-md p-7 text-center transition-all hover:-translate-y-1 hover:shadow-[0_20px_60px_-30px_rgba(0,40,120,0.25)]"
            >
              <GlassSphere index={i}>
                <s.icon
                  className="h-7 w-7 text-foreground/45 transition-colors duration-300 group-hover:text-[#77DDFF]"
                  strokeWidth={1.6}
                />
              </GlassSphere>
              <h3 className="mt-8 font-display text-lg font-bold tracking-tight">{t(`solutions.items.${s.key}.title`)}</h3>
              <p className="mt-4 text-sm text-foreground/60 leading-relaxed">{t(`solutions.items.${s.key}.desc`)}</p>
            </div>
          ))}
        </div>
      </section>
      <FeatureRoadmap />
      <SiteFooter />
    </div>
  );
}