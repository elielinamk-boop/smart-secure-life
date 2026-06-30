import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ShieldCheck, Sofa, Building2, Settings, Heart } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — Talesso" },
      { name: "description", content: "Face recognition, QR/PIN/BLE access, ALPR parking management, and video intercom — modular smart access from Talesso." },
      { property: "og:title", content: "Solutions — Talesso" },
      { property: "og:url", content: "/solutions" },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
  component: SolutionsPage,
});

const SOLUTIONS = [
  {
    icon: ShieldCheck,
    title: "Security",
    desc: "Face biometrics, liveness detection, video analytics, perimeter control, license plate recognition.",
  },
  {
    icon: Sofa,
    title: "Comfort",
    desc: "Keyless access via BLE, NFC, Apple Wallet. Voice control. Auto-open parking.",
  },
  {
    icon: Building2,
    title: "Organization",
    desc: "QR/PIN invitations, office & coworking booking, OCR registration, smart routing.",
  },
  {
    icon: Settings,
    title: "Automation",
    desc: "KNX / Smart Home: lights, blinds, climate, doors — all by scenarios.",
  },
  {
    icon: Heart,
    title: "Health Care",
    desc: "Air quality: CO₂, humidity, ventilation. Auto control. AI concierge.",
  },
];

function GlassSphere({ children }: { children: ReactNode; index?: number }) {
  return (
    <div className="relative mx-auto h-20 w-20">
      <div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-white via-[#f3f6fb] to-[#dfe6ef] shadow-[inset_0_2px_8px_rgba(255,255,255,0.9),inset_0_-6px_12px_rgba(80,110,150,0.25),0_10px_24px_-12px_rgba(40,60,100,0.35)]"
      />
      <div className="absolute inset-[3px] rounded-full border border-white/70" />
      <div className="absolute left-2 top-1.5 h-4 w-6 rounded-full bg-white/80 blur-[2px]" />
      <div className="relative z-10 flex h-full w-full items-center justify-center">{children}</div>
    </div>
  );
}

function SolutionsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <section className="mx-auto max-w-[88rem] px-6 md:px-10 pt-16 pb-10">
        <p className="text-xs uppercase tracking-[0.28em] text-foreground/50">Solutions</p>
        <h1 className="mt-4 font-display text-3xl md:text-5xl font-bold tracking-[-0.03em] max-w-3xl">
          One platform. Every layer of the building.
        </h1>
        <p className="mt-4 max-w-md text-sm text-foreground/55 leading-relaxed">
          From the front gate to indoor air quality — a unified system that sees, decides, and acts.
        </p>
      </section>

      <section className="mx-auto max-w-[88rem] px-6 md:px-10 pb-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {SOLUTIONS.map((s, i) => (
            <div
              key={s.title}
              className="group relative rounded-3xl border border-white/60 bg-gradient-to-b from-white/70 to-white/30 backdrop-blur-md p-7 text-center transition-all hover:-translate-y-1 hover:shadow-[0_20px_60px_-30px_rgba(0,40,120,0.25)]"
            >
              <GlassSphere index={i}>
                <s.icon
                  className="h-7 w-7 text-foreground/45 transition-colors duration-300 group-hover:text-[#77DDFF]"
                  strokeWidth={1.6}
                />
              </GlassSphere>
              <h3 className="mt-8 font-display text-lg font-bold tracking-tight">{s.title}</h3>
              <p className="mt-4 text-sm text-foreground/60 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}