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
            src="https://www.youtube.com/embed/_S-U8Ts5OTU?rel=0&modestbranding=1"
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

function PhotoShowcase() {
  return (
    <section className="relative pb-24 pt-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Meet the platform</p>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-[-0.03em]">
            The all-in-one smart building platform.
          </h2>
        </div>
        <img
          src={meetAsset.url}
          alt="Meet Talesso — the all-in-one smart building platform"
          className="w-full h-auto rounded-3xl border border-border/70"
        />
        <img
          src={collageAsset.url}
          alt="Talesso solutions — Face Recognition, QR/PIN/BLE Access, ALPR, Video Intercom"
          className="mt-6 w-full h-auto rounded-3xl border border-border/70"
        />
      </div>
    </section>
  );
}

function BuildingsShowcase() {
  return (
    <section className="relative pb-24">
      <div className="px-4 md:px-8">
        <div className="mx-auto mb-10 max-w-7xl">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Where Talesso lives</p>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-[-0.03em]">
            Offices &amp; Residences.
          </h2>
          <p className="mt-3 text-muted-foreground text-sm">
            One AI platform — two environments.{" "}
            <Link to="/clients" className="underline underline-offset-4">
              Open the interactive map →
            </Link>
          </p>
        </div>
        <img
          src={buildingsAsset.url}
          alt="Talesso for Offices and Residences — smart device control across the building"
          className="w-full h-auto rounded-3xl border border-border/70"
        />
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

