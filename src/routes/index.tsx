import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import {
  ShieldCheck,
  Sparkles,
  Settings,
  Smartphone,
  Send,
  Monitor,
  Headphones,
  Sofa,
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
import buildingsAsset from "@/assets/buildings-map.png.asset.json";
import eyecidAsset from "@/assets/eyecid-device.png.asset.json";
import eyecidLogoAsset from "@/assets/eyecid-logo.png.asset.json";
import { useInView, AnimatedNumber } from "@/hooks/use-in-view";

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
      <Solutions />
      <MeetEyecid />
      <VideoShowcase />
      <AISection />
      <BuildingsShowcase />
      <Channels />
      <CTA />
      <SiteFooter />
    </div>
  );
}

function Hero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let raf = 0;
    let tx = 0, ty = 0, cx = 0, cy = 0;
    const onMove = (e: MouseEvent) => {
      const r = wrap.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
    };
    const tick = () => {
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;
      if (bgRef.current)   bgRef.current.style.transform   = `translate3d(${cx * 12}px, ${cy * 12}px, 0)`;
      if (badgeRef.current)badgeRef.current.style.transform= `translate3d(${cx * 3}px, ${cy * 3}px, 0)`;
      if (headRef.current) headRef.current.style.transform = `translate3d(${cx * 7}px, ${cy * 7}px, 0)`;
      if (ctaRef.current)  ctaRef.current.style.transform  = `translate3d(${cx * 5}px, ${cy * 5}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section ref={wrapRef} className="relative px-4 sm:px-6 lg:px-8 pt-6 pb-16">
      <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[48px] min-h-[calc(100vh-7rem)] flex items-center justify-center isolate">
        {/* Base wash */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(135deg,#ffe5d9_0%,#fff1ea_28%,#f6f1ff_58%,#e6efff_100%)]" />
        {/* Animated gradient blobs */}
        <div ref={bgRef} className="pointer-events-none absolute inset-0 -z-10 will-change-transform">
          <div className="absolute -left-[10%] top-[8%] h-[55rem] w-[55rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,193,170,0.85),transparent_70%)] blur-3xl hero-gradient-a" />
          <div className="absolute right-[-15%] bottom-[-10%] h-[55rem] w-[55rem] rounded-full bg-[radial-gradient(closest-side,rgba(205,222,255,0.85),transparent_70%)] blur-3xl hero-gradient-a" style={{ animationDelay: "-6s" }} />
          <div className="absolute left-[35%] top-[35%] h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,232,220,0.7),transparent_75%)] blur-3xl hero-gradient-b" />
        </div>
        {/* Noise */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          }}
        />
        {/* Floating particles */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          {Array.from({ length: 14 }).map((_, i) => (
            <span
              key={i}
              className="absolute h-1 w-1 rounded-full bg-white/70"
              style={{
                left: `${(i * 73) % 100}%`,
                top: `${(i * 41) % 100}%`,
                animation: `hero-particle ${10 + (i % 5) * 2}s linear ${i * 0.7}s infinite`,
                ["--px" as never]: `${(i % 2 ? 1 : -1) * (20 + (i % 4) * 10)}px`,
                ["--py" as never]: `${80 + (i % 3) * 60}px`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative w-full px-6 py-20 md:py-28 text-center mx-auto max-w-5xl">
          <div ref={badgeRef} className="will-change-transform animate-line-in" style={{ animationDelay: "0.05s" }}>
            <span className="group inline-flex items-center rounded-full border border-accent-blue/60 bg-background/80 px-5 py-2 text-[0.72rem] font-medium tracking-[0.15em] text-foreground/70 transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-10px_rgba(80,130,255,0.55)]">
              TALESSO · AI-POWERED TECHNOLOGY
            </span>
          </div>
          <h1
            ref={headRef}
            className="mt-8 font-display text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-[-0.04em] leading-[0.95] will-change-transform"
          >
            <span className="block animate-line-in" style={{ animationDelay: "0.25s" }}>AI Solutions for</span>
            <span className="block animate-line-in" style={{ animationDelay: "0.40s" }}>Security, Access</span>
            <span className="block animate-line-in" style={{ animationDelay: "0.55s" }}>and Smart Living</span>
          </h1>
          <p
            className="mx-auto mt-8 max-w-2xl text-base md:text-lg text-foreground/60 leading-relaxed animate-line-in"
            style={{ animationDelay: "0.85s" }}
          >
            We provide intelligent biometric access control, smart home automation,{"\u00A0"}
            <br />
            video analytics, and building management —{"\u00A0"}
            <br />
            all powered by our proprietary AI platform.
          </p>
          <div
            ref={ctaRef}
            className="mt-12 flex items-center justify-center gap-4 md:gap-8 flex-wrap will-change-transform animate-line-in"
            style={{ animationDelay: "1.05s" }}
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full border border-accent-blue/70 bg-background/85 px-7 py-3.5 min-h-12 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:bg-foreground hover:text-background hover:border-foreground hover:shadow-[0_18px_40px_-18px_rgba(80,130,255,0.7)] active:scale-[0.97]"
            >
              Get a consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/solutions"
              className="group relative inline-flex items-center px-4 py-3.5 min-h-12 text-sm font-semibold text-foreground/85 hover:text-foreground transition-colors"
            >
              <span className="relative">
                Our Solutions
                <span className="absolute left-0 -bottom-0.5 h-px w-full origin-left scale-x-0 bg-foreground transition-transform duration-300 group-hover:scale-x-100" />
              </span>
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
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
            src="https://www.youtube.com/embed/jfzARicSq_c?rel=0&modestbranding=1"
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
  const intro = useInView<HTMLDivElement>({ threshold: 0.2 });
  const grid = useInView<HTMLDivElement>({ threshold: 0.15 });
  return (
    <section id="solutions" className="relative py-20 md:py-28 overflow-hidden">
      {/* Soft moving background reflections */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-[10%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,210,225,0.35),transparent_70%)] blur-3xl hero-gradient-a" />
        <div className="absolute bottom-[-12rem] right-[5%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(closest-side,rgba(200,225,255,0.4),transparent_70%)] blur-3xl hero-gradient-a" style={{ animationDelay: "-7s" }} />
      </div>

      <div ref={intro.ref} className="mx-auto max-w-[88rem] px-6 md:px-10">
        <p
          className={`text-xs uppercase tracking-[0.28em] text-foreground/50 transition-all duration-500 ease-out ${intro.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          Solutions
        </p>
        <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold tracking-[-0.03em] max-w-3xl">
          <span
            className={`block transition-all duration-700 ease-out ${intro.inView ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-4 blur-md"}`}
            style={{ transitionDelay: "150ms" }}
          >
            One platform.
          </span>
          <span
            className={`block transition-all duration-700 ease-out ${intro.inView ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-4 blur-md"}`}
            style={{ transitionDelay: "300ms" }}
          >
            Every layer of the building.
          </span>
        </h2>
        <p
          className={`mt-4 max-w-md text-sm text-foreground/55 leading-relaxed transition-all duration-700 ease-out ${intro.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
          style={{ transitionDelay: "500ms" }}
        >
          From the front gate to indoor air quality — a unified system that sees, decides, and acts.
        </p>

        <div ref={grid.ref} className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {solutions.map((s, i) => (
            <SolutionCard
              key={s.title}
              index={i}
              icon={s.icon}
              title={s.title}
              desc={s.desc}
              inView={grid.inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionCard({
  index,
  icon: Icon,
  title,
  desc,
  inView,
}: {
  index: number;
  icon: typeof ShieldCheck;
  title: string;
  desc: string;
  inView: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const iconWrapRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const r = card.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 2;
    const y = ((e.clientY - r.top) / r.height - 0.5) * 2;
    card.style.transform = `translate3d(${x * 3}px, ${y * 3 - 8}px, 0)`;
    if (iconWrapRef.current) iconWrapRef.current.style.transform = `translate3d(${x * 6}px, ${y * 6}px, 0)`;
  };
  const onLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = "";
    if (iconWrapRef.current) iconWrapRef.current.style.transform = "";
  };

  const delay = 700 + index * 100;

  return (
    <div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`group relative rounded-3xl border border-white/60 bg-gradient-to-b from-white/70 to-white/30 backdrop-blur-md p-7 text-center will-change-transform transition-[transform,box-shadow,background,border-color] duration-[350ms] ease-out hover:border-white/80 hover:bg-gradient-to-b hover:from-white/85 hover:to-white/40 hover:shadow-[0_30px_70px_-30px_rgba(0,40,120,0.35)] ${inView ? "animate-card-rise" : "opacity-0"}`}
      style={{ animationDelay: inView ? `${delay}ms` : undefined }}
    >
      <div
        ref={iconWrapRef}
        className="will-change-transform transition-transform duration-300"
      >
        <div
          className={`${inView ? "animate-icon-pop" : "opacity-0"}`}
          style={{ animationDelay: inView ? `${delay + 120}ms` : undefined }}
        >
          <GlassSphere index={index}>
            <Icon
              className="h-7 w-7 text-foreground/45 transition-all duration-300 group-hover:text-[#77DDFF] group-hover:scale-110 group-hover:rotate-[6deg]"
              strokeWidth={1.6}
            />
          </GlassSphere>
        </div>
      </div>
      <h3
        className="mt-8 font-display text-lg font-bold tracking-tight transition-colors duration-200 group-hover:text-foreground"
      >
        {title}
      </h3>
      <p className="mt-4 text-sm text-foreground/60 leading-relaxed transition-colors duration-200 group-hover:text-foreground/75">
        {desc}
      </p>
    </div>
  );
}

function GlassSphere({ children, index }: { children: ReactNode; index: number }) {
  const tinted = index % 2 === 1;
  return (
    <div
      className="relative mx-auto h-20 w-20"
      style={{
        animation: `icon-float ${6 + (index % 3)}s ease-in-out ${index * 0.3}s infinite`,
      }}
    >
      <div
        className={`absolute inset-0 rounded-full ${
          tinted
            ? "bg-gradient-to-br from-[#cfe6ff] via-white to-[#bcd9ff]"
            : "bg-gradient-to-br from-white via-[#f3f6fb] to-[#dfe6ef]"
        } shadow-[inset_0_2px_8px_rgba(255,255,255,0.9),inset_0_-6px_12px_rgba(80,110,150,0.25),0_10px_24px_-12px_rgba(40,60,100,0.35)]`}
        style={{
          animation: `sphere-breath ${5 + (index % 2)}s ease-in-out ${index * 0.4}s infinite`,
        }}
      />
      <div className="absolute inset-[3px] rounded-full border border-white/70" />
      <div className="absolute left-2 top-1.5 h-4 w-6 rounded-full bg-white/80 blur-[2px]" />
      {/* One-shot light sweep after entrance */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
        <div
          className="absolute -inset-1 bg-[linear-gradient(115deg,transparent_35%,rgba(255,255,255,0.85)_50%,transparent_65%)]"
          style={{ animation: `sphere-sheen 1.2s ease-out ${1.0 + index * 0.1}s 1 both` }}
        />
      </div>
      <div className="relative z-10 flex h-full w-full items-center justify-center">{children}</div>
    </div>
  );
}

function MeetEyecid() {
  const section = useInView<HTMLElement>({ threshold: 0.18 });
  const deviceWrap = useRef<HTMLDivElement | null>(null);
  const deviceInner = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const target = useRef({ rx: 0, ry: 0 });
  const current = useRef({ rx: 0, ry: 0 });
  const rafId = useRef<number | null>(null);

  // Mouse-follow elastic rotation + scroll parallax on device
  useEffect(() => {
    const loop = () => {
      current.current.rx += (target.current.rx - current.current.rx) * 0.08;
      current.current.ry += (target.current.ry - current.current.ry) * 0.08;
      if (deviceInner.current) {
        deviceInner.current.style.transform = `perspective(900px) rotateX(${current.current.rx.toFixed(2)}deg) rotateY(${current.current.ry.toFixed(2)}deg)`;
      }
      rafId.current = requestAnimationFrame(loop);
    };
    rafId.current = requestAnimationFrame(loop);
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (!stageRef.current || !deviceWrap.current) return;
      const rect = stageRef.current.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const progress = (vh - rect.top) / (vh + rect.height); // 0..1 through view
      const clamped = Math.max(0, Math.min(1, progress));
      const ty = (clamped - 0.5) * -40; // device drifts up slower
      deviceWrap.current.style.setProperty("--py", `${ty}px`);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    target.current.ry = x * 8; // ±4deg
    target.current.rx = -y * 8;
  };
  const handleLeave = () => {
    target.current.rx = 0;
    target.current.ry = 0;
  };

  const lineCls = (delay: string) =>
    section.inView
      ? "inline-block animate-line-in"
      : "inline-block opacity-0";

  // Scanning particle positions inside the screen (relative %)
  const particles = [
    { left: "22%", top: "55%", dx: "8px",  dy: "-40px", delay: "0.2s",  dur: "5.5s" },
    { left: "38%", top: "70%", dx: "-6px", dy: "-55px", delay: "1.1s",  dur: "6.2s" },
    { left: "55%", top: "50%", dx: "10px", dy: "-48px", delay: "0.6s",  dur: "5.8s" },
    { left: "70%", top: "65%", dx: "-8px", dy: "-60px", delay: "1.6s",  dur: "6.8s" },
    { left: "30%", top: "40%", dx: "12px", dy: "-35px", delay: "2.2s",  dur: "5.4s" },
    { left: "62%", top: "38%", dx: "-10px",dy: "-42px", delay: "0.9s",  dur: "6.0s" },
  ];

  return (
    <section
      ref={section.ref}
      className={`relative py-20 md:py-28 transition-all duration-[800ms] ease-out ${
        section.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="mx-auto max-w-[88rem] px-6 md:px-10">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Meet the platform</p>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-[-0.03em]">
            The all-in-one smart building platform.
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr_0.7fr] gap-10 lg:gap-8 items-center">
          {/* Left: heading */}
          <div>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.1]">
              <span className={lineCls("")} style={{ animationDelay: "0.05s" }}>MEET</span>{" "}
              <span
                className={`relative inline-flex items-baseline font-bold overflow-hidden ${lineCls("")}`}
                style={{ animationDelay: "0.25s" }}
              >
                <img
                  src={eyecidLogoAsset.url}
                  alt="EYECID"
                  className="inline-block h-[0.85em] w-auto align-baseline select-none"
                  draggable={false}
                />
                {/* one-shot light sweep across EYECID */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 left-0 w-2/3 bg-[linear-gradient(110deg,transparent_35%,rgba(255,255,255,0.85)_50%,transparent_65%)] mix-blend-screen"
                  style={{ animation: section.inView ? "eyecid-text-sweep 1.4s ease-out 0.9s 1 both" : undefined }}
                />
              </span>
            </h2>
            <h3 className="mt-6 font-display text-2xl md:text-4xl font-extrabold tracking-tight leading-[1.1]">
              <span className={`block ${lineCls("")}`} style={{ animationDelay: "0.45s" }}>THE ALL-IN-ONE</span>
              <span className={`block ${lineCls("")}`} style={{ animationDelay: "0.6s" }}>SMART BUILDING</span>
              <span className={`block ${lineCls("")}`} style={{ animationDelay: "0.75s" }}>PLATFORM</span>
            </h3>
          </div>

          {/* Center: device */}
          <div
            ref={stageRef}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            className="relative flex justify-center"
          >
            <div
              ref={deviceWrap}
              className={`relative w-full max-w-md md:max-w-lg lg:max-w-xl transition-all duration-1000 ease-out will-change-transform ${
                section.inView ? "opacity-100 scale-100 translate-y-0 blur-0" : "opacity-0 scale-95 translate-y-6 blur-sm"
              }`}
              style={{ transform: "translateY(var(--py, 0px))" }}
            >
              <div ref={deviceInner} className="relative animate-eyecid-float will-change-transform -scale-x-100" style={{ transformStyle: "preserve-3d" }}>
                <img
                  src={eyecidAsset.url}
                  alt="EYECID — face recognition access terminal"
                  width={1024}
                  height={1536}
                  loading="lazy"
                  className="w-full h-auto drop-shadow-[0_40px_80px_rgba(20,30,60,0.35)] select-none"
                  draggable={false}
                />
                {/* Scanning overlay over screen area (~10-78% of image height) */}
                <div className="pointer-events-none absolute inset-x-[14%] top-[10%] bottom-[22%] overflow-hidden rounded-[10px]">
                  {/* faint scanning pulse */}
                  <div
                    className="absolute inset-x-0 h-[2px] bg-[linear-gradient(90deg,transparent,rgba(119,221,255,0.55),transparent)]"
                    style={{ top: "40%", animation: "eyecid-scan-pulse 3.4s ease-in-out infinite" }}
                  />
                  {/* particles */}
                  {particles.map((p, i) => (
                    <span
                      key={i}
                      className="absolute h-1 w-1 rounded-full bg-[#77DDFF]"
                      style={{
                        left: p.left,
                        top: p.top,
                        boxShadow: "0 0 8px rgba(119,221,255,0.75)",
                        // @ts-expect-error custom props
                        "--dx": p.dx,
                        "--dy": p.dy,
                        animation: `eyecid-particle ${p.dur} ease-out ${p.delay} infinite`,
                      }}
                    />
                  ))}
                </div>
                {/* Diagonal reflection sweep across the whole device every ~9s */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[24px]">
                  <div
                    className="absolute -inset-y-1/2 left-0 w-1/2 bg-[linear-gradient(115deg,transparent_40%,rgba(255,255,255,0.35)_50%,transparent_60%)] mix-blend-screen"
                    style={{ animation: "eyecid-device-sheen 9s ease-in-out 1.6s infinite" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: stats */}
          <div className="space-y-8">
            <StatRow accent={1} label="Platform" inView={section.inView} delay={0} />
            <StatRow accent={1} label="Interface" inView={section.inView} delay={300} />
            <StatRow accent="FULL" label="Control" inView={section.inView} delay={600} />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatRow({
  accent,
  label,
  inView,
  delay,
}: {
  accent: number | string;
  label: string;
  inView: boolean;
  delay: number;
}) {
  const isFull = typeof accent === "string";
  return (
    <div className="group cursor-default transition-transform duration-300 ease-out hover:-translate-y-0.5">
      <div className="relative overflow-hidden leading-none">
        <div
          className={`font-display text-5xl md:text-6xl italic font-bold text-[#c8102e] leading-none transition-transform duration-300 group-hover:scale-[1.05] ${
            inView ? (isFull ? "animate-eyecid-full" : "animate-eyecid-stat-num") : "opacity-0"
          }`}
          style={{ animationDelay: `${delay}ms` }}
        >
          {accent}
        </div>
        {isFull && inView && (
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_35%,rgba(255,255,255,0.85)_50%,transparent_65%)] mix-blend-screen"
            style={{ animation: `eyecid-full-sheen 1.2s ease-out ${delay + 300}ms 1 both` }}
          />
        )}
      </div>
      <div
        className={`mt-1 font-display text-3xl md:text-4xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-foreground ${
          inView ? "animate-eyecid-stat-text" : "opacity-0"
        }`}
        style={{ animationDelay: `${delay + 350}ms` }}
      >
        {label}
      </div>
    </div>
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

