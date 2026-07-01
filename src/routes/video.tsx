import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PlayCircle } from "lucide-react";

export const Route = createFileRoute("/video")({
  head: () => ({
    meta: [
      { title: i18n.t("meta.video.title") },
      { name: "description", content: i18n.t("meta.video.description") },
      { property: "og:title", content: i18n.t("meta.video.ogTitle") },
      { property: "og:url", content: "/video" },
    ],
    links: [{ rel: "canonical", href: "/video" }],
  }),
  component: VideoPage,
});

function VideoPage() {
  const { t } = useTranslation();
  const features = [
    { k: "liveness" },
    { k: "match" },
    { k: "edge" },
  ] as const;
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <section className="mx-auto max-w-6xl px-6 pt-14 pb-24">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">{t("videoPage.eyebrow")}</p>
        <h1 className="mt-3 font-display text-4xl md:text-6xl font-bold tracking-[-0.03em]">
          {t("videoPage.title")}
        </h1>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          {t("videoPage.subtitle")}
        </p>

        <div className="mt-10 relative aspect-video overflow-hidden rounded-3xl border border-border/70 bg-card shadow-[0_30px_80px_-30px_rgba(0,40,120,0.35)]">
          <iframe
            className="absolute inset-0 h-full w-full"
            src="https://www.youtube.com/embed/sBGc4nlGZzY?rel=0&modestbranding=1"
            title={t("meta.video.ogTitle")}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-4">
          {features.map((f) => (
            <div key={f.k} className="glass rounded-2xl p-5">
              <div className="flex items-center gap-2 font-display font-semibold">
                <PlayCircle className="h-5 w-5 text-[#1e6bff]" />
                {t(`videoPage.features.${f.k}.t`)}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{t(`videoPage.features.${f.k}.d`)}</p>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}