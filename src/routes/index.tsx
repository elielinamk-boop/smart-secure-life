import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  Sparkles,
  Smartphone,
  Send,
  Monitor,
  Headphones,
  Car,
  Building2,
  Heart,
  Cpu,
  BarChart3,
  MessageSquare,
  ArrowRight,
  Check,
  ScanFace,
  QrCode,
  Bluetooth,
  Video as VideoIcon,
  Wifi,
  Lightbulb,
  Thermometer,
  Lock,
  Home as HomeIcon,
} from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import meetAsset from "@/assets/meet-talesso.png.asset.json";
import collageAsset from "@/assets/solutions-collage.png.asset.json";
import buildingsAsset from "@/assets/buildings-map.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Talesso — AI Solutions for Security, Access and Smart Living" },
      { name: "description", content: "Intelligent biometric access, smart home, video analytics, and building management — all powered by our proprietary AI platform." },
      { property: "og:title", content: "Talesso — AI for Security & Smart Living" },
      { property: "og:description", content: "Biometric access, smart home, video analytics, building management." },
    ],
  }),
  component: Landing,
});

const solutions = [
  {
    icon: ShieldCheck,
    title: "Security",
    desc: "Face biometrics, liveness detection, video analytics, perimeter control, license plate recognition.",
  },
  {
    icon: Car,
    title: "Comfort",
    desc: "Keyless access via BLE, NFC, Apple Wallet. Voice control. Auto-open parking.",
  },
  {
    icon: Building2,
    title: "Organization",
    desc: "QR/PIN invitations, office & coworking booking, OCR registration, smart routing.",
  },
  {
    icon: Sparkles,
    title: "Automation",
    desc: "KNX / Smart Home: lights, blinds, climate, doors — all by scenarios.",
  },
  {
    icon: Heart,
    title: "Health Care",
    desc: "Air quality: CO₂, humidity, ventilation. Auto control. AI concierge.",
  },
];

const aiPillars = [
  {
    icon: MessageSquare,
    title: "AI Communication",
    points: ["Voice & text commands", "Smart feedback & alerts", "Instant answers to operational questions"],
  },
  {
    icon: BarChart3,
    title: "AI Analytics",
    points: ["Detects anomalies automatically", "Suspicious behavior detection", "Generates daily & weekly reports"],
  },
  {
    icon: Cpu,
    title: "Autonomous System",
    points: ["Optimizes energy consumption", "Creates tickets from sensor data", "Predicts failures before they happen"],
  },
];

const channels = [
  { icon: Smartphone, title: "Mobile App", desc: "Full control in your pocket — iOS & Android." },
  { icon: Send, title: "Telegram Bot", desc: "Quick commands and alerts in chat." },
  { icon: Monitor, title: "Web Dashboard", desc: "Manage buildings, users and analytics from any browser." },
  { icon: Headphones, title: "24/7 Support", desc: "Real humans, anytime — alongside the AI." },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <SiteNav />
      <Hero />
      <VideoShowcase />
      <Solutions />
      <PhotoShowcase />
      <AISection />
      <BuildingsShowcase />
      <Channels />
      <CTA />
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* soft blurred gradient blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-accent-peach/50 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -right-32 h-[32rem] w-[32rem] rounded-full bg-accent-peach/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-[20rem] w-[20rem] rounded-full bg-accent-blue/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-28 md:pt-32 md:pb-40 text-center">
        <span className="inline-flex items-center rounded-full border border-accent-blue/60 bg-background/70 px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground">
          TALESSO · AI-POWERED TECHNOLOGY
        </span>
        <h1 className="mt-8 font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-[-0.04em] leading-[0.95]">
          AI Solutions for
          <br /> Security, Access
          <br /> and Smart Living
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
          We provide intelligent biometric access control, smart home automation, video analytics, and building
          management — all powered by our proprietary AI platform.
        </p>
        <div className="mt-10 flex items-center justify-center gap-6 flex-wrap">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-accent-blue/70 bg-background/80 px-6 py-3 text-sm font-medium hover:bg-foreground hover:text-background hover:border-foreground transition-colors"
          >
            Get a consultation <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/solutions" className="text-sm font-medium hover:opacity-70">
            Our Solutions →
          </Link>
        </div>
      </div>
    </section>
  );
}

function VideoShowcase() {
  return (
    <section className="relative pb-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative aspect-video overflow-hidden rounded-[2rem] border border-border/70 bg-card shadow-[0_40px_120px_-40px_rgba(0,40,120,0.4)]">
          <iframe
            className="absolute inset-0 h-full w-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1"
            title="Talesso — The Future of Smart Buildings"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <p className="mt-5 text-center text-sm text-muted-foreground">
          Talesso — The Future of Smart Buildings.
        </p>
      </div>
    </section>
  );
}

type PhotoTile = {
  title: string;
  caption: string;
  bg: string;
  icons: { Icon: typeof ScanFace; label: string }[];
};

const PHOTO_TILES: PhotoTile[] = [
  {
    title: "Face Recognition",
    caption: "Sub-second biometric ID with liveness detection.",
    bg: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1600&q=80",
    icons: [{ Icon: ScanFace, label: "Face" }],
  },
  {
    title: "QR / PIN / BLE Access",
    caption: "Keyless entry via mobile, Apple Wallet, or PIN.",
    bg: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80",
    icons: [
      { Icon: QrCode, label: "QR" },
      { Icon: Bluetooth, label: "BLE" },
    ],
  },
  {
    title: "ALPR · Parking",
    caption: "Auto-open barriers via license plate recognition.",
    bg: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1600&q=80",
    icons: [{ Icon: Car, label: "ALPR" }],
  },
  {
    title: "Video Intercom",
    caption: "HD two-way intercom on every device.",
    bg: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1600&q=80",
    icons: [{ Icon: VideoIcon, label: "Video" }],
  },
];

function PhotoShowcase() {
  return (
    <section className="relative pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">In action</p>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-[-0.03em]">
            Smart access, every entry point.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PHOTO_TILES.map((t) => (
            <article key={t.title} className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-border/70">
              <img
                src={t.bg}
                alt={t.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-white/10" />

              <div className="absolute top-4 left-5 font-serif tracking-wide text-foreground text-lg">
                TAL<span className="text-[#1e6bff]">E</span>SSO
              </div>

              <div className="absolute top-4 right-4 flex flex-col gap-2">
                {t.icons.map(({ Icon, label }) => (
                  <div
                    key={label}
                    title={label}
                    className="glass flex h-10 w-10 items-center justify-center rounded-2xl text-foreground"
                  >
                    <Icon className="h-4.5 w-4.5" strokeWidth={1.7} />
                  </div>
                ))}
              </div>

              <div className="absolute inset-x-6 bottom-6">
                <h3 className="font-display text-xl md:text-2xl font-semibold">{t.title}</h3>
                <div className="mt-1 h-[2px] w-10 rounded-full bg-[#e85d3a]" />
                <p className="mt-2 max-w-sm text-sm text-foreground/85">{t.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

type Pin = { Icon: typeof Wifi; label: string; x: number; y: number };

const OFFICE_PINS: Pin[] = [
  { Icon: Wifi, label: "Internet", x: 50, y: 14 },
  { Icon: Lightbulb, label: "Lighting", x: 18, y: 34 },
  { Icon: Thermometer, label: "Climate", x: 78, y: 38 },
  { Icon: VideoIcon, label: "Cameras", x: 16, y: 60 },
  { Icon: Lock, label: "Access", x: 52, y: 70 },
];

const HOME_PINS: Pin[] = [
  { Icon: Wifi, label: "Internet", x: 46, y: 12 },
  { Icon: Lightbulb, label: "Lighting", x: 84, y: 26 },
  { Icon: Thermometer, label: "Climate", x: 16, y: 36 },
  { Icon: Lock, label: "Smart Locks", x: 84, y: 56 },
  { Icon: Car, label: "Garage", x: 86, y: 76 },
];

function MiniMap({
  title,
  subtitle,
  HeaderIcon,
  bg,
  pins,
}: {
  title: string;
  subtitle: string;
  HeaderIcon: typeof Building2;
  bg: string;
  pins: Pin[];
}) {
  return (
    <div className="relative rounded-3xl border border-border/70 bg-card overflow-hidden">
      <div className="flex items-center gap-3 p-5">
        <div className="glass flex h-10 w-10 items-center justify-center rounded-xl">
          <HeaderIcon className="h-5 w-5 text-[#1e6bff]" strokeWidth={1.75} />
        </div>
        <div>
          <h3 className="font-display text-xl font-bold tracking-tight">{title}</h3>
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        </div>
      </div>
      <div className="relative mx-3 mb-3 aspect-[16/10] overflow-hidden rounded-2xl">
        <img src={bg} alt={title} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-white/15" />
        {pins.map((p) => (
          <div
            key={p.label}
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2"
          >
            <span className="glass flex items-center gap-1.5 rounded-full pl-1.5 pr-3 py-1 text-[11px] font-medium text-foreground">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/60">
                <p.Icon className="h-3 w-3 text-[#1e6bff]" strokeWidth={2} />
              </span>
              {p.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function BuildingsShowcase() {
  return (
    <section className="relative pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Where Talesso lives</p>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-[-0.03em]">
            Offices &amp; Residences.
          </h2>
          <p className="mt-3 text-muted-foreground text-sm">
            One AI platform — two environments. <Link to="/clients" className="underline underline-offset-4">Explore the interactive map →</Link>
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <MiniMap
            title="Offices"
            subtitle="Intelligent spaces for productivity"
            HeaderIcon={Building2}
            bg="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80"
            pins={OFFICE_PINS}
          />
          <MiniMap
            title="Residences"
            subtitle="Smart living, connected and secure"
            HeaderIcon={HomeIcon}
            bg="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80"
            pins={HOME_PINS}
          />
        </div>
      </div>
    </section>
  );
}

function Solutions() {
  return (
    <section id="solutions" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Solutions</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-[-0.03em]">
              One platform. Every layer of the building.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            From the front gate to indoor air quality — a unified system that sees, decides, and acts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {solutions.map((s) => (
            <div
              key={s.title}
              className="group relative rounded-3xl border border-border/70 bg-card p-6 transition-all hover:border-foreground/30 hover:-translate-y-1 hover:shadow-[0_20px_60px_-30px_rgba(0,0,0,0.2)]"
            >
              <div className="mb-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-blue/40 to-accent-peach/40">
                <s.icon className="h-6 w-6 text-foreground" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AISection() {
  return (
    <section id="ai-platform" className="relative py-24 md:py-32 overflow-hidden">
      <div className="pointer-events-none absolute top-1/2 -left-40 h-[24rem] w-[24rem] -translate-y-1/2 rounded-full bg-accent-peach/30 blur-3xl" />
      <div className="pointer-events-none absolute top-10 right-0 h-[20rem] w-[20rem] rounded-full bg-accent-blue/25 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">AI Integrated</p>
          <h2 className="mt-3 font-display text-4xl md:text-6xl font-bold tracking-[-0.03em] leading-[1.05]">
            Talesso transforms
            <br /> buildings into
            <br /> intelligent systems.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {aiPillars.map((p) => (
            <div
              key={p.title}
              className="rounded-3xl border border-border/70 bg-card/80 backdrop-blur-sm p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-foreground text-background">
                <p.icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight">{p.title}</h3>
              <ul className="mt-5 space-y-3">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 mt-0.5 text-foreground/70 flex-shrink-0" strokeWidth={2} />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Channels() {
  return (
    <section id="channels" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Connected experience</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-[-0.03em]">
            Instant interaction. Full management.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Talesso meets your team where they already work — phone, chat, or browser.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {channels.map((c) => (
            <div
              key={c.title}
              className="rounded-3xl border border-border/70 bg-card p-8 hover:border-foreground/30 transition-colors"
            >
              <c.icon className="h-7 w-7" strokeWidth={1.5} />
              <h3 className="mt-8 font-display text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="relative pb-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card p-12 md:p-20 text-center">
          <div className="pointer-events-none absolute -top-20 -right-20 h-[24rem] w-[24rem] rounded-full bg-accent-peach/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-[24rem] w-[24rem] rounded-full bg-accent-blue/30 blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-[-0.03em] leading-[1.05]">
              Ready to make your
              <br /> building intelligent?
            </h2>
            <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
              Book a 20-minute consultation with our team. We'll map out the AI stack for your space.
            </p>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Get a consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

