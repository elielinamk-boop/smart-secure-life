import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Talesso" },
      { name: "description", content: "Talesso builds AI-powered smart access, automation and analytics for modern buildings." },
      { property: "og:title", content: "About — Talesso" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <section className="mx-auto max-w-4xl px-6 pt-16 pb-24">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">About</p>
        <h1 className="mt-3 font-display text-4xl md:text-6xl font-bold tracking-[-0.03em]">
          Engineering buildings that think.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Talesso is an AI technology company building a unified platform for smart access, automation, video analytics and
          building management. We replace dozens of disconnected systems with a single intelligent layer that sees, decides,
          and acts — autonomously.
        </p>

        <div className="mt-10 grid sm:grid-cols-3 gap-4">
          {[
            { k: "150+", v: "Buildings managed" },
            { k: "99.99%", v: "Uptime SLA" },
            { k: "24/7", v: "Human support" },
          ].map((s) => (
            <div key={s.k} className="glass rounded-2xl p-6">
              <div className="font-display text-3xl font-bold">{s.k}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.v}</div>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}