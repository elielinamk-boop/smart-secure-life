import { createFileRoute } from "@tanstack/react-router";
import { ScanFace, QrCode, Bluetooth, Grid3x3, Car, Video, Users, Key, Radio } from "lucide-react";
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

type Tile = {
  title: string;
  bg: string;
  glassIcons: { Icon: typeof ScanFace; label: string }[];
  caption: string;
};

const TILES: Tile[] = [
  {
    title: "Face Recognition",
    bg: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1600&q=80",
    glassIcons: [{ Icon: ScanFace, label: "Liveness" }],
    caption: "High-precision biometric identification with liveness detection.",
  },
  {
    title: "QR / PIN / BLE Access",
    bg: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80",
    glassIcons: [
      { Icon: QrCode, label: "QR" },
      { Icon: Grid3x3, label: "PIN" },
      { Icon: Bluetooth, label: "BLE" },
    ],
    caption: "Keyless access via mobile app, Apple Wallet, or one-time codes.",
  },
  {
    title: "ALPR — Parking",
    bg: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1600&q=80",
    glassIcons: [{ Icon: Car, label: "ALPR" }],
    caption: "Automatic license plate recognition. Auto-open gates for residents.",
  },
  {
    title: "Video Intercom",
    bg: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1600&q=80",
    glassIcons: [
      { Icon: Users, label: "Visitors" },
      { Icon: Key, label: "Unlock" },
      { Icon: Radio, label: "Call" },
    ],
    caption: "HD two-way video intercom integrated with your mobile app.",
  },
];

function SolutionsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-10">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Solutions</p>
        <h1 className="mt-3 font-display text-4xl md:text-6xl font-bold tracking-[-0.03em]">
          Smart access, end to end.
        </h1>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          A modular suite covering identification, entry, parking, and intercom — unified by the Talesso AI platform.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {TILES.map((t) => (
            <article
              key={t.title}
              className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-border/70"
            >
              <img
                src={t.bg}
                alt={t.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/10" />

              {/* Logo */}
              <div className="absolute top-5 left-5 font-serif tracking-wide text-foreground text-xl">
                TAL<span className="text-[#1e6bff]">E</span>SSO
              </div>

              {/* Glass icons stack */}
              <div className="absolute top-5 right-5 flex flex-col gap-2.5">
                {t.glassIcons.map(({ Icon, label }) => (
                  <div
                    key={label}
                    title={label}
                    className="glass flex h-11 w-11 items-center justify-center rounded-2xl text-foreground"
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                ))}
              </div>

              {/* Title */}
              <div className="absolute left-6 bottom-6 right-6">
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
                  {t.title}
                </h3>
                <div className="mt-1 h-[2px] w-12 rounded-full bg-[#e85d3a]" />
                <p className="mt-3 max-w-md text-sm text-foreground/80">{t.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}