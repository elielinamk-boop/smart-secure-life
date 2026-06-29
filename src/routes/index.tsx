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
import galleryFaceAsset from "@/assets/gallery-face.jpg.asset.json";
import galleryQrAsset from "@/assets/gallery-qr.jpg.asset.json";
import galleryPlateAsset from "@/assets/gallery-plate.jpg.asset.json";
import galleryMonitorAsset from "@/assets/gallery-monitor.jpg.asset.json";
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
      <ProductGallery />
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
          From the front gate to indoor air quality —{"\u00a0"}
          <br />
          a unified system that sees, decides, and acts.
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
        <div className="mb-12 max-w-none">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Meet the platform</p>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-[-0.03em] whitespace-nowrap">
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
                  className="inline-block h-[1.05em] w-auto align-baseline translate-y-[0.12em] select-none"
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
              <span className={lineCls("")} style={{ animationDelay: "0.45s" }}>THE{"\u00A0"}</span>
              <span className={lineCls("")} style={{ animationDelay: "0.60s" }}>SMART BUILDING</span>{" "}
              <span className={lineCls("")} style={{ animationDelay: "0.75s" }}>PLATFORM THAT UNIFIES EVERYTHING</span>
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
              <div ref={deviceInner} className="relative animate-eyecid-float will-change-transform" style={{ transformStyle: "preserve-3d" }}>
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

/* ============================================================
   Section 4 — Interactive Product Gallery
   2x2 edge-to-edge grid with subtle "alive" overlays,
   cinematic staggered reveal, parallax & cursor tilt.
   ============================================================ */

type GalleryTileKind = "face" | "qr" | "plate" | "monitor";

const galleryTiles: {
  kind: GalleryTileKind;
  src: string;
  alt: string;
  focal: string;
}[] = [
  { kind: "face",    src: galleryFaceAsset.url,    alt: "Face recognition biometric access",       focal: "center 35%" },
  { kind: "qr",      src: galleryQrAsset.url,      alt: "Mobile QR access on EYECID terminal",     focal: "center" },
  { kind: "plate",   src: galleryPlateAsset.url,   alt: "License plate recognition at the gate",   focal: "center 60%" },
  { kind: "monitor", src: galleryMonitorAsset.url, alt: "EYECID indoor monitor with video call",   focal: "center" },
];

function ProductGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const tileRefs = useRef<(HTMLDivElement | null)[]>([]);
  const reveal = useInView<HTMLDivElement>({ threshold: 0.15, once: true });

  // Scroll parallax — each tile gets a slightly different speed (max 20px).
  useEffect(() => {
    let raf = 0;
    const speeds = [0.06, 0.10, 0.14, 0.18];
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const sec = sectionRef.current;
        if (!sec) return;
        const rect = sec.getBoundingClientRect();
        const progress = 1 - rect.top / window.innerHeight; // ~0..2
        tileRefs.current.forEach((el, i) => {
          if (!el) return;
          const offset = Math.max(-20, Math.min(20, (progress - 0.5) * 40 * speeds[i] * 4));
          el.style.setProperty("--py", `${offset.toFixed(2)}px`);
        });
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 overflow-hidden">
      <style>{`
        @keyframes pg-fade-up {
          0%   { opacity: 0; transform: translate3d(0,14px,0) scale(0.98); filter: blur(8px); }
          100% { opacity: 1; transform: translate3d(0,0,0) scale(1);       filter: blur(0); }
        }
        @keyframes pg-pulse-dot {
          0%, 100% { opacity: 0.55; transform: scale(1); }
          50%      { opacity: 1;    transform: scale(1.35); }
        }
        @keyframes pg-line-glow {
          0%, 100% { opacity: 0.25; }
          50%      { opacity: 0.85; }
        }
        @keyframes pg-scan-ring {
          0%   { transform: translate(-50%,-50%) scale(0.55); opacity: 0; }
          15%  { opacity: 0.55; }
          100% { transform: translate(-50%,-50%) scale(1.6); opacity: 0; }
        }
        @keyframes pg-particle {
          0%   { transform: translate(0,0); opacity: 0; }
          15%  { opacity: 1; }
          100% { transform: translate(var(--dx), var(--dy)); opacity: 0; }
        }
        @keyframes pg-corner-glow {
          0%, 100% { opacity: 0.45; box-shadow: 0 0 0 rgba(255,255,255,0); }
          50%      { opacity: 1;    box-shadow: 0 0 14px rgba(255,255,255,0.55); }
        }
        @keyframes pg-qr-scan {
          0%   { transform: translateY(-100%); opacity: 0; }
          10%  { opacity: 0.9; }
          90%  { opacity: 0.9; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        @keyframes pg-breath {
          0%, 100% { opacity: 0.35; }
          50%      { opacity: 0.85; }
        }
        @keyframes pg-confirm-pulse {
          0%   { transform: scale(0.9); opacity: 0.7; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        @keyframes pg-trace {
          0%   { stroke-dashoffset: 240; opacity: 0.2; }
          40%  { opacity: 1; }
          100% { stroke-dashoffset: 0;   opacity: 0.4; }
        }
        @keyframes pg-plate-scan {
          0%   { transform: translateX(-110%); opacity: 0; }
          10%  { opacity: 0.9; }
          90%  { opacity: 0.9; }
          100% { transform: translateX(110%);  opacity: 0; }
        }
        @keyframes pg-screen-brightness {
          0%, 100% { opacity: 0; }
          50%      { opacity: 0.18; }
        }
        @keyframes pg-light-sweep {
          0%   { transform: translateX(-60%) skewX(-18deg); }
          100% { transform: translateX(160%) skewX(-18deg); }
        }
        .pg-tile {
          opacity: 0;
          will-change: transform, opacity, filter;
        }
        .pg-tile.in {
          animation: pg-fade-up 0.8s cubic-bezier(0.22,0.61,0.36,1) both;
        }
        .pg-inner {
          transform: translate3d(var(--mx,0), calc(var(--py,0px) + var(--my,0px)), 0) scale(var(--s,1));
          transition: transform 600ms cubic-bezier(0.22,0.61,0.36,1), box-shadow 600ms ease;
          will-change: transform;
        }
        .pg-tile:hover .pg-inner {
          --s: 1.01;
          box-shadow: 0 30px 80px -30px rgba(0,0,0,0.45);
        }
        .pg-tile:hover .pg-border {
          opacity: 1;
        }
        .pg-border {
          opacity: 0.6;
          transition: opacity 500ms ease;
        }
      `}</style>

      <div ref={reveal.ref} className="px-4 md:px-8">
        <div className="mx-auto mb-10 max-w-7xl">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">AI in action</p>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-[-0.03em]">
            Intelligence you can see.
          </h2>
          <p className="mt-3 text-muted-foreground text-sm max-w-xl">
            Four products. One platform. Hover to feel each system come alive.
          </p>
        </div>

        <div
          ref={gridRef}
          className="mx-auto max-w-[1920px] grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-1.5"
        >
          {galleryTiles.map((t, i) => (
            <GalleryTile
              key={t.kind}
              tile={t}
              index={i}
              registerRef={(el) => (tileRefs.current[i] = el)}
              visible={reveal.inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryTile({
  tile,
  index,
  registerRef,
  visible,
}: {
  tile: (typeof galleryTiles)[number];
  index: number;
  registerRef: (el: HTMLDivElement | null) => void;
  visible: boolean;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  // Cursor parallax — max ~6px translate.
  useEffect(() => {
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    if (!wrap || !inner) return;
    const onMove = (e: MouseEvent) => {
      const r = wrap.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width - 0.5;
      const ny = (e.clientY - r.top) / r.height - 0.5;
      inner.style.setProperty("--mx", `${(nx * 6).toFixed(2)}px`);
      inner.style.setProperty("--my", `${(ny * 6).toFixed(2)}px`);
    };
    const onLeave = () => {
      inner.style.setProperty("--mx", "0px");
      inner.style.setProperty("--my", "0px");
    };
    wrap.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseleave", onLeave);
    return () => {
      wrap.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={(el) => {
        wrapRef.current = el;
        registerRef(el);
      }}
      className={`pg-tile group relative aspect-[16/10] overflow-hidden ${visible ? "in" : ""}`}
      style={{ animationDelay: visible ? `${index * 0.18}s` : undefined }}
    >
      <div
        ref={innerRef}
        className="pg-inner absolute inset-0"
      >
        <img
          src={tile.src}
          alt={tile.alt}
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover select-none"
          style={{ objectPosition: tile.focal }}
        />

        {/* Slow moving light reflection (almost invisible) */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute -inset-y-10 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            style={{
              animation: `pg-light-sweep ${9 + index * 1.7}s linear ${index * 1.3}s infinite`,
            }}
          />
        </div>

        {/* Tech-specific overlay */}
        {tile.kind === "face" && <FaceOverlay />}
        {tile.kind === "qr" && <QrOverlay />}
        {tile.kind === "plate" && <PlateOverlay />}
        {tile.kind === "monitor" && <MonitorOverlay />}

        {/* Hover border highlight */}
        <div className="pg-border pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/15" />
      </div>
    </div>
  );
}

/* ---------- Per-image overlays ---------- */

function FaceOverlay() {
  // Approximate facial-landmark points (percent of tile box).
  const pts: [number, number][] = [
    [29, 38], [31, 48], [33, 58], [36, 66], [41, 72],
    [47, 75], [53, 74], [57, 70], [60, 64], [62, 56],
    [33, 44], [38, 41], [44, 42], [52, 42], [57, 43],
    [46, 52], [48, 58], [43, 62], [50, 64],
  ];
  const lines: [number, number][] = [
    [0, 10], [10, 11], [11, 12], [12, 13], [13, 14],
    [14, 15], [15, 9], [9, 8], [8, 7], [7, 6], [6, 5],
    [5, 4], [4, 3], [3, 2], [2, 1], [1, 0],
    [15, 17], [17, 18], [18, 16], [16, 11],
  ];
  return (
    <div className="pointer-events-none absolute inset-0">
      {/* Soft scanning ring */}
      <div
        className="absolute"
        style={{
          left: "46%",
          top: "55%",
          width: "38%",
          aspectRatio: "1 / 1",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.55)",
          transform: "translate(-50%,-50%)",
          animation: "pg-scan-ring 5s ease-out infinite",
        }}
      />
      {/* Connection lines */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {lines.map(([a, b], i) => (
          <line
            key={i}
            x1={pts[a][0]}
            y1={pts[a][1]}
            x2={pts[b][0]}
            y2={pts[b][1]}
            stroke="rgba(255,255,255,0.85)"
            strokeWidth={0.25}
            vectorEffect="non-scaling-stroke"
            style={{ animation: `pg-line-glow ${3 + (i % 4) * 0.4}s ease-in-out ${i * 0.08}s infinite` }}
          />
        ))}
      </svg>
      {/* Pulsing landmark dots */}
      {pts.map(([x, y], i) => (
        <span
          key={i}
          className="absolute block rounded-full bg-white"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            width: 4,
            height: 4,
            transform: "translate(-50%,-50%)",
            boxShadow: "0 0 6px rgba(255,255,255,0.85)",
            animation: `pg-pulse-dot ${2 + (i % 5) * 0.3}s ease-in-out ${i * 0.07}s infinite`,
          }}
        />
      ))}
      {/* Particles between landmarks */}
      {[0, 1, 2, 3].map((k) => {
        const a = pts[(k * 5) % pts.length];
        const b = pts[(k * 5 + 6) % pts.length];
        return (
          <span
            key={`p-${k}`}
            className="absolute block rounded-full bg-white"
            style={{
              left: `${a[0]}%`,
              top: `${a[1]}%`,
              width: 2,
              height: 2,
              ["--dx" as string]: `${(b[0] - a[0]) * 0.01 * 100}px`,
              ["--dy" as string]: `${(b[1] - a[1]) * 0.01 * 100}px`,
              animation: `pg-particle ${3 + k * 0.7}s linear ${k * 0.9}s infinite`,
            }}
          />
        );
      })}
      {/* Scanning frame corners */}
      {[
        { top: "10%", left: "18%", b: "tl" },
        { top: "10%", right: "22%", b: "tr" },
        { bottom: "8%", left: "18%", b: "bl" },
        { bottom: "8%", right: "22%", b: "br" },
      ].map((c, i) => (
        <span
          key={i}
          className="absolute block"
          style={{
            ...c,
            width: 28,
            height: 28,
            borderColor: "rgba(255,255,255,0.85)",
            borderStyle: "solid",
            borderWidth: 0,
            borderTopWidth: c.b.startsWith("t") ? 2 : 0,
            borderBottomWidth: c.b.startsWith("b") ? 2 : 0,
            borderLeftWidth: c.b.endsWith("l") ? 2 : 0,
            borderRightWidth: c.b.endsWith("r") ? 2 : 0,
            animation: `pg-corner-glow ${3.2}s ease-in-out ${i * 0.25}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

function QrOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0">
      {/* Phone screen soft glow — over the phone area (~38%-52% x, 38%-72% y) */}
      <div
        className="absolute rounded-[8px]"
        style={{
          left: "37%",
          top: "37%",
          width: "16%",
          height: "36%",
          background: "radial-gradient(closest-side, rgba(80,255,140,0.28), transparent 70%)",
          mixBlendMode: "screen",
          animation: "pg-breath 4s ease-in-out infinite",
        }}
      />
      {/* QR scanning light */}
      <div
        className="absolute overflow-hidden rounded"
        style={{ left: "39%", top: "41%", width: "11%", height: "16%" }}
      >
        <div
          className="absolute inset-x-0 h-[18%]"
          style={{
            background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.85), transparent)",
            animation: "pg-qr-scan 3.2s ease-in-out infinite",
          }}
        />
      </div>
      {/* Access granted confirmation pulse */}
      <div
        className="absolute rounded-full"
        style={{
          left: "44%",
          top: "60%",
          width: "5%",
          aspectRatio: "1 / 1",
          border: "1.5px solid rgba(80,255,140,0.85)",
          transform: "translate(-50%,-50%)",
          animation: "pg-confirm-pulse 2.4s ease-out infinite",
        }}
      />
      {/* Terminal breathing light */}
      <div
        className="absolute"
        style={{
          left: "60%",
          top: "40%",
          width: "22%",
          height: "36%",
          background: "radial-gradient(closest-side, rgba(255,255,255,0.18), transparent 75%)",
          mixBlendMode: "screen",
          animation: "pg-breath 5s ease-in-out infinite",
        }}
      />
      {/* Interactive tech icons on the right side */}
      {[{ top: "20%" }, { top: "37%" }, { top: "54%" }].map((pos, i) => (
        <button
          key={i}
          aria-hidden
          tabIndex={-1}
          className="absolute pointer-events-auto rounded-full transition-all duration-500 ease-out hover:scale-110 hover:rotate-6"
          style={{
            right: "4%",
            top: pos.top,
            width: "5.4%",
            aspectRatio: "1 / 1",
            background: "radial-gradient(closest-side, rgba(255,255,255,0.0), rgba(255,255,255,0.0))",
          }}
        >
          <span
            className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 hover:opacity-100 group-hover:opacity-100"
            style={{ boxShadow: "0 0 24px 4px rgba(255,255,255,0.55)" }}
          />
        </button>
      ))}
    </div>
  );
}

function PlateOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0">
      {/* Plate frame pulse + trace — license plate sits around (40-62% x, 78-90% y) */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <rect
          x="40" y="78" width="22" height="8" rx="0.6"
          fill="none"
          stroke="rgba(255,255,255,0.9)"
          strokeWidth={0.35}
          vectorEffect="non-scaling-stroke"
          strokeDasharray="240"
          style={{ animation: "pg-trace 4.5s ease-in-out infinite, pg-line-glow 4.5s ease-in-out infinite" }}
        />
      </svg>
      {/* Recognition brackets */}
      {[
        { left: "40%", top: "78%", b: "tl" },
        { right: "38%", top: "78%", b: "tr" },
        { left: "40%", top: "85%", b: "bl" },
        { right: "38%", top: "85%", b: "br" },
      ].map((c, i) => (
        <span
          key={i}
          className="absolute block"
          style={{
            ...c,
            width: 14,
            height: 14,
            borderColor: "rgba(255,255,255,0.9)",
            borderStyle: "solid",
            borderWidth: 0,
            borderTopWidth: c.b.startsWith("t") ? 2 : 0,
            borderBottomWidth: c.b.startsWith("b") ? 2 : 0,
            borderLeftWidth: c.b.endsWith("l") ? 2 : 0,
            borderRightWidth: c.b.endsWith("r") ? 2 : 0,
            animation: `pg-corner-glow 3s ease-in-out ${i * 0.2}s infinite`,
          }}
        />
      ))}
      {/* Scanning line over the plate */}
      <div
        className="absolute overflow-hidden"
        style={{ left: "40%", top: "78%", width: "22%", height: "8%" }}
      >
        <div
          className="absolute inset-y-0 w-[22%]"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.85), transparent)",
            animation: "pg-plate-scan 3.6s ease-in-out infinite",
          }}
        />
      </div>
    </div>
  );
}

function MonitorOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0">
      {/* Screen brightness flicker — monitor sits around (55-92% x, 25-78% y) */}
      <div
        className="absolute"
        style={{
          left: "55%",
          top: "25%",
          width: "37%",
          height: "53%",
          background: "radial-gradient(closest-side, rgba(180,210,255,0.35), transparent 75%)",
          mixBlendMode: "screen",
          animation: "pg-screen-brightness 6s ease-in-out infinite",
        }}
      />
      {/* Call button pulse — green answer button area */}
      <div
        className="absolute rounded-full"
        style={{
          left: "82%",
          top: "62%",
          width: "3.2%",
          aspectRatio: "1 / 1",
          border: "1.5px solid rgba(80,255,140,0.85)",
          transform: "translate(-50%,-50%)",
          animation: "pg-confirm-pulse 4.8s ease-out infinite",
        }}
      />
      {/* Three circular icons reactive area */}
      {[{ left: "62%" }, { left: "74%" }, { left: "86%" }].map((pos, i) => (
        <button
          key={i}
          aria-hidden
          tabIndex={-1}
          className="absolute pointer-events-auto rounded-full transition-transform duration-500 ease-out hover:scale-110"
          style={{
            left: pos.left,
            top: "88%",
            width: "6%",
            aspectRatio: "1 / 1",
            transform: "translate(-50%,-50%)",
          }}
        >
          <span
            className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 hover:opacity-100"
            style={{ boxShadow: "0 0 22px 4px rgba(255,255,255,0.55)" }}
          />
        </button>
      ))}
    </div>
  );
}

