import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
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
      { title: i18n.t("meta.clients.title") },
      { name: "description", content: i18n.t("meta.clients.description") },
      { property: "og:title", content: i18n.t("meta.clients.ogTitle") },
      { property: "og:url", content: "/clients" },
    ],
    links: [{ rel: "canonical", href: "/clients" }],
  }),
  component: ClientsPage,
});

type Feature = {
  id: string;
  Icon: typeof Wifi;
  labelKey: string;
  detailKey: string;
  // position in %
  x: number;
  y: number;
};

const OFFICE_BG =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80";
const HOME_BG =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80";

const OFFICE_FEATURES: Feature[] = [
  { id: "wifi", Icon: Wifi, labelKey: "wifi", detailKey: "wifiOffice", x: 50, y: 12 },
  { id: "lights", Icon: Lightbulb, labelKey: "lights", detailKey: "lightsOffice", x: 15, y: 32 },
  { id: "climate", Icon: Thermometer, labelKey: "climate", detailKey: "climateOffice", x: 78, y: 36 },
  { id: "cam", Icon: Camera, labelKey: "cam", detailKey: "camOffice", x: 12, y: 55 },
  { id: "access", Icon: Lock, labelKey: "access", detailKey: "accessOffice", x: 48, y: 64 },
  { id: "leak", Icon: Droplet, labelKey: "leak", detailKey: "leakOffice", x: 18, y: 78 },
];

const HOME_FEATURES: Feature[] = [
  { id: "wifi", Icon: Wifi, labelKey: "wifi", detailKey: "wifiHome", x: 45, y: 10 },
  { id: "lights", Icon: Lightbulb, labelKey: "lights", detailKey: "lightsHome", x: 85, y: 22 },
  { id: "climate", Icon: Thermometer, labelKey: "climate", detailKey: "climateHome", x: 14, y: 32 },
  { id: "cam", Icon: Camera, labelKey: "camHome", detailKey: "camHome", x: 18, y: 50 },
  { id: "lock", Icon: Lock, labelKey: "lock", detailKey: "lockHome", x: 86, y: 50 },
  { id: "garage", Icon: Car, labelKey: "garage", detailKey: "garageHome", x: 88, y: 70 },
  { id: "leak", Icon: Droplet, labelKey: "leak", detailKey: "leakHome", x: 50, y: 80 },
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
  const { t } = useTranslation();
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
          const label = t(`clientsPage.features.${f.labelKey}`);
          const detail = t(`clientsPage.details.${f.detailKey}`);
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
                {label}
              </span>
              {isActive && (
                <div className="glass absolute left-1/2 top-[calc(100%+8px)] z-10 w-60 -translate-x-1/2 rounded-2xl p-3 text-left">
                  <div className="text-xs font-semibold tracking-wider uppercase text-foreground">{label}</div>
                  <p className="mt-1 text-xs text-foreground/80 leading-relaxed">{detail}</p>
                </div>
              )}
            </button>
          );
        })}
      </div>

      <div className="px-6 pb-6">
        <div className="glass rounded-2xl p-4 text-sm text-foreground/80">
          {active
            ? t(`clientsPage.details.${features.find((f) => f.id === active)?.detailKey}`)
            : t("clientsPage.hoverHint")}
        </div>
      </div>
    </div>
  );
}

function ClientsPage() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <section className="mx-auto max-w-7xl px-6 pt-14 pb-10">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">{t("clientsPage.eyebrow")}</p>
        <h1 className="mt-3 font-display text-4xl md:text-6xl font-bold tracking-[-0.03em]">
          {t("clientsPage.title")}
        </h1>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          {t("clientsPage.subtitle")}
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <InteractiveMap
          title={t("clientsPage.offices")}
          subtitle={t("clientsPage.officesSubtitle")}
          HeaderIcon={Building2}
          bg={OFFICE_BG}
          features={OFFICE_FEATURES}
        />
        <InteractiveMap
          title={t("clientsPage.residences")}
          subtitle={t("clientsPage.residencesSubtitle")}
          HeaderIcon={Home}
          bg={HOME_BG}
          features={HOME_FEATURES}
        />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="glass rounded-3xl p-8 flex items-center gap-4">
          <Shield className="h-6 w-6 text-[#1e6bff]" />
          <p className="text-sm text-foreground/80">
            {t("clientsPage.unified")}
          </p>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}