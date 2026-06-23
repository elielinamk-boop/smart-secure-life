import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Building2,
  Home,
  Wifi,
  Lightbulb,
  Thermometer,
  Camera,
  Lock,
  Droplet,
  Car,
  Shield,
} from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: "Clients — Talesso for Offices & Residences" },
      { name: "description", content: "Interactive overview of Talesso features for offices and residences — click any pin to explore." },
      { property: "og:title", content: "Clients — Talesso" },
      { property: "og:url", content: "/clients" },
    ],
    links: [{ rel: "canonical", href: "/clients" }],
  }),
  component: ClientsPage,
});

type Feature = {
  id: string;
  Icon: typeof Wifi;
  label: string;
  detail: string;
  // position in %
  x: number;
  y: number;
};

const OFFICE_BG =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80";
const HOME_BG =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80";

const OFFICE_FEATURES: Feature[] = [
  { id: "wifi", Icon: Wifi, label: "Internet", x: 50, y: 12, detail: "Enterprise-grade Wi-Fi 6 mesh with seamless roaming across floors." },
  { id: "lights", Icon: Lightbulb, label: "Lighting", x: 15, y: 32, detail: "DALI/KNX lighting scenes by occupancy and daylight harvesting." },
  { id: "climate", Icon: Thermometer, label: "Climate", x: 78, y: 36, detail: "Per-zone HVAC with CO₂-driven ventilation and night setback." },
  { id: "cam", Icon: Camera, label: "Cameras", x: 12, y: 55, detail: "AI video analytics: intrusion, loitering, tailgating, and people counting." },
  { id: "access", Icon: Lock, label: "Access Control", x: 48, y: 64, detail: "Face ID, QR, BLE and PIN — one credential across every door." },
  { id: "leak", Icon: Droplet, label: "Leak Detection", x: 18, y: 78, detail: "Wireless sensors auto-close valves on the first drop of water." },
];

const HOME_FEATURES: Feature[] = [
  { id: "wifi", Icon: Wifi, label: "Internet", x: 45, y: 10, detail: "Whole-home Wi-Fi 6E with guest network and parental controls." },
  { id: "lights", Icon: Lightbulb, label: "Lighting", x: 85, y: 22, detail: "Tunable white scenes for morning, work, dinner, and movie modes." },
  { id: "climate", Icon: Thermometer, label: "Climate", x: 14, y: 32, detail: "Room-by-room comfort with AI learning your daily rhythm." },
  { id: "cam", Icon: Camera, label: "Security Cameras", x: 18, y: 50, detail: "Perimeter + indoor cameras with person/pet/vehicle classification." },
  { id: "lock", Icon: Lock, label: "Smart Locks", x: 86, y: 50, detail: "Keyless entry by face, phone, or temporary PIN for guests." },
  { id: "garage", Icon: Car, label: "Garage Access", x: 88, y: 70, detail: "ALPR auto-opens the garage as your car approaches the driveway." },
  { id: "leak", Icon: Droplet, label: "Leak Detection", x: 50, y: 80, detail: "Sensors in kitchens and bathrooms close shut-off valves instantly." },
];

function InteractiveMap({
  title,
  subtitle,
  HeaderIcon,
  bg,
  features,
}: {
  title: string;
  subtitle: string;
  HeaderIcon: typeof Building2;
  bg: string;
  features: Feature[];
}) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="relative rounded-3xl border border-border/70 bg-card overflow-hidden">
      <div className="flex items-center gap-3 p-6">
        <div className="glass flex h-10 w-10 items-center justify-center rounded-xl">
          <HeaderIcon className="h-5 w-5 text-[#1e6bff]" strokeWidth={1.75} />
        </div>
        <div>
          <h3 className="font-display text-2xl font-bold tracking-tight">{title}</h3>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
      </div>

      <div className="relative mx-4 mb-4 aspect-[16/10] overflow-hidden rounded-2xl">
        <img src={bg} alt={title} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-white/15" />

        {features.map((f) => {
          const isActive = active === f.id;
          return (
            <button
              key={f.id}
              onMouseEnter={() => setActive(f.id)}
              onMouseLeave={() => setActive((v) => (v === f.id ? null : v))}
              onClick={() => setActive(isActive ? null : f.id)}
              style={{ left: `${f.x}%`, top: `${f.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 group"
            >
              <span className="glass flex items-center gap-1.5 rounded-full pl-1.5 pr-3 py-1 text-xs font-medium text-foreground transition-transform group-hover:scale-105">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/60">
                  <f.Icon className="h-3.5 w-3.5 text-[#1e6bff]" strokeWidth={2} />
                </span>
                {f.label}
              </span>
              {isActive && (
                <div className="glass absolute left-1/2 top-[calc(100%+8px)] z-10 w-60 -translate-x-1/2 rounded-2xl p-3 text-left">
                  <div className="text-xs font-semibold tracking-wider uppercase text-foreground">{f.label}</div>
                  <p className="mt-1 text-xs text-foreground/80 leading-relaxed">{f.detail}</p>
                </div>
              )}
            </button>
          );
        })}
      </div>

      <div className="px-6 pb-6">
        <div className="glass rounded-2xl p-4 text-sm text-foreground/80">
          {active
            ? features.find((f) => f.id === active)?.detail
            : "Hover or tap any pin to see how each subsystem works."}
        </div>
      </div>
    </div>
  );
}

function ClientsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <section className="mx-auto max-w-7xl px-6 pt-14 pb-10">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Clients</p>
        <h1 className="mt-3 font-display text-4xl md:text-6xl font-bold tracking-[-0.03em]">
          One platform. Two worlds.
        </h1>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          Explore how Talesso powers intelligent offices and connected residences. Click any pin to learn more.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <InteractiveMap
          title="Offices"
          subtitle="Intelligent spaces for productivity"
          HeaderIcon={Building2}
          bg={OFFICE_BG}
          features={OFFICE_FEATURES}
        />
        <InteractiveMap
          title="Residences"
          subtitle="Smart living, connected and secure"
          HeaderIcon={Home}
          bg={HOME_BG}
          features={HOME_FEATURES}
        />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="glass rounded-3xl p-8 flex items-center gap-4">
          <Shield className="h-6 w-6 text-[#1e6bff]" />
          <p className="text-sm text-foreground/80">
            Every integration is unified under the proprietary Talesso AI platform — one dashboard, one mobile app, one source of truth.
          </p>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}