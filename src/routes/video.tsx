import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PlayCircle } from "lucide-react";

export const Route = createFileRoute("/video")({
  head: () => ({
    meta: [
      { title: "Watch — Talesso. The Future of Smart Buildings." },
      { name: "description", content: "Watch a high-performance biometric system in action — Talesso, the future of smart buildings." },
      { property: "og:title", content: "Talesso — The Future of Smart Buildings" },
      { property: "og:url", content: "/video" },
    ],
    links: [{ rel: "canonical", href: "/video" }],
  }),
  component: VideoPage,
});

function VideoPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <section className="mx-auto max-w-6xl px-6 pt-14 pb-24">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Watch</p>
        <h1 className="mt-3 font-display text-4xl md:text-6xl font-bold tracking-[-0.03em]">
          The Future of Smart Buildings.
        </h1>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          A high-performance biometric system that turns every entrance into an intelligent checkpoint.
        </p>

        <div className="mt-10 relative aspect-video overflow-hidden rounded-3xl border border-border/70 bg-card shadow-[0_30px_80px_-30px_rgba(0,40,120,0.35)]">
          <iframe
            className="absolute inset-0 h-full w-full"
            src="https://www.youtube.com/embed/sBGc4nlGZzY?rel=0&modestbranding=1"
            title="Talesso — The Future of Smart Buildings"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-4">
          {[
            { t: "Liveness detection", d: "Blocks photo, video and mask spoofing attempts in real time." },
            { t: "Sub-second match", d: "Identifies authorized people in under 300 ms at the door." },
            { t: "Edge + cloud AI", d: "Privacy-first inference at the edge, dashboards in the cloud." },
          ].map((f) => (
            <div key={f.t} className="glass rounded-2xl p-5">
              <div className="flex items-center gap-2 font-display font-semibold">
                <PlayCircle className="h-5 w-5 text-[#1e6bff]" />
                {f.t}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}