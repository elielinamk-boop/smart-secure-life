import { createFileRoute } from "@tanstack/react-router";
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
      <FeatureRoadmap />
      <SiteFooter />
    </div>
  );
}