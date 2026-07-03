import { createFileRoute } from "@tanstack/react-router";
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
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <FeatureRoadmap />
      <SiteFooter />
    </div>
  );
}