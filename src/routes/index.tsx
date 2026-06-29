import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { useEffect, useRef, useState, useCallback } from "react";
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
  Camera,
  Droplet,
  RefreshCw,
  ParkingSquare,
  DoorOpen,
  X as XIcon,
  ArrowUp,
  type LucideIcon,
} from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import buildingsCleanAsset from "@/assets/buildings-clean.png.asset.json";
import hotelSceneAsset from "@/assets/hotel-scene.jpg.asset.json";
import connectedExperienceAsset from "@/assets/connected-experience.png.asset.json";
import officeSceneAsset from "@/assets/office-scene.jpg.asset.json";
import eyecidAsset from "@/assets/eyecid-device.png.asset.json";
import eyecidLogoAsset from "@/assets/eyecid-logo.png.asset.json";
import galleryFaceAsset from "@/assets/gallery-face.jpg.asset.json";
import galleryQrAsset from "@/assets/gallery-qr.jpg.asset.json";
import galleryPlateAsset from "@/assets/gallery-plate.jpg.asset.json";
import galleryMonitorAsset from "@/assets/gallery-monitor.jpg.asset.json";
import gallery2TvAsset from "@/assets/gallery2-tv.jpg.asset.json";
import gallery2PanelAsset from "@/assets/gallery2-panel.jpg.asset.json";
import gallery2EntryAsset from "@/assets/gallery2-entry.jpg.asset.json";
import gallery2ControlAsset from "@/assets/gallery2-control.jpg.asset.json";
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
      <ProductGallery2 />
      <VideoShowcase />
      <BuildingsShowcase />
      <ScenesShowcase />
      <Channels />
      <Partners />
      <AboutUs />
      <ContactSection />
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
    <section className="relative pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-6">
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

/* ============================================================
   Section — Interactive Smart Building Demonstration
   ============================================================ */

type FeatureKey =
  | "internet" | "lighting" | "climate" | "cameras" | "access"
  | "leak" | "integrations" | "parking"
  | "smart-locks" | "garage"
  // Hotel scene
  | "ai-concierge" | "keyless-checkin" | "personalized-service"
  | "room-automation" | "hotel-temperature" | "hotel-lighting"
  | "energy-management" | "housekeeping"
  // Commercial real estate scene
  | "analytics" | "temp-access" | "office-lighting"
  | "access-management" | "office-temperature" | "occupancy"
  | "energy-optimization" | "meeting-rooms";

type FeatureInfo = {
  name: string;
  short: string;
  benefits: string[];
  example: string;
  icon: LucideIcon;
  /* tinted overlay color */
  tint: string;
  /* overlay focal point inside the card (% of card box) */
  focus: { x: number; y: number; r: number };
  /* which visual effect to render — defaults to feature key */
  effect?: FeatureKey;
};

const FEATURE_INFO: Record<FeatureKey, FeatureInfo> = {
  internet: {
    name: "Internet",
    short: "A dedicated, secure mesh network connects every device in the building.",
    benefits: ["Whole-building Wi-Fi coverage", "Isolated IoT VLAN", "Auto-failover backbone"],
    example: "Tenants roam from lobby to rooftop without ever dropping a video call.",
    icon: Wifi,
    tint: "rgba(59,130,246,0.55)",
    focus: { x: 50, y: 28, r: 42 },
  },
  lighting: {
    name: "Lighting",
    short: "Control every light in the building remotely. Create schedules, automate scenes and reduce energy consumption.",
    benefits: ["Per-room scenes", "Sunrise / sunset automation", "Up to 40% energy saved"],
    example: "At 7pm the lobby dims and the workspace lights warm — automatically.",
    icon: Lightbulb,
    tint: "rgba(255,196,90,0.55)",
    focus: { x: 50, y: 45, r: 40 },
  },
  climate: {
    name: "Climate",
    short: "Smart HVAC keeps every room at the perfect temperature and air quality.",
    benefits: ["Per-zone thermostats", "Indoor air-quality sensing", "Predictive scheduling"],
    example: "Conference rooms cool down 10 minutes before a meeting begins.",
    icon: Thermometer,
    tint: "rgba(96,165,250,0.55)",
    focus: { x: 50, y: 50, r: 42 },
  },
  cameras: {
    name: "Security Cameras",
    short: "AI-powered cameras watch every entry point and recognise events in real time.",
    benefits: ["Person / vehicle detection", "License plate recognition", "Cloud + edge recording"],
    example: "An unknown person at the side door triggers an instant alert to security.",
    icon: Camera,
    tint: "rgba(96,165,250,0.5)",
    focus: { x: 35, y: 55, r: 32 },
  },
  access: {
    name: "Access Control",
    short: "Biometric, mobile and PIN access on every door — fully audited.",
    benefits: ["Face + QR + plate", "Time-based permissions", "Full audit trail"],
    example: "Cleaners get access between 6am–9am only, no keys required.",
    icon: Lock,
    tint: "rgba(74,222,128,0.5)",
    focus: { x: 50, y: 60, r: 28 },
  },
  leak: {
    name: "Leak Detection",
    short: "Sensors near plumbing instantly catch leaks before they cause damage.",
    benefits: ["Per-pipe monitoring", "Auto shut-off valve", "Push alerts"],
    example: "A burst pipe under the sink shuts itself off in under 4 seconds.",
    icon: Droplet,
    tint: "rgba(56,189,248,0.5)",
    focus: { x: 30, y: 70, r: 30 },
  },
  integrations: {
    name: "Integrations",
    short: "Every system speaks the same language — lighting, climate, security and access connect into one platform.",
    benefits: ["Open API", "1000+ device drivers", "One mobile app"],
    example: "Tapping ‘leave home’ arms cameras, locks doors and turns off lights.",
    icon: RefreshCw,
    tint: "rgba(168,85,247,0.45)",
    focus: { x: 50, y: 78, r: 38 },
  },
  parking: {
    name: "Parking Management",
    short: "License-plate driven access and live spot availability.",
    benefits: ["Plate-based entry", "Live occupancy map", "Reserved-spot routing"],
    example: "A visitor’s plate is recognised and the gate opens to their reserved spot.",
    icon: ParkingSquare,
    tint: "rgba(74,222,128,0.5)",
    focus: { x: 70, y: 85, r: 28 },
  },
  "smart-locks": {
    name: "Smart Locks",
    short: "Keyless entry on every door — mobile, biometric or temporary codes.",
    benefits: ["Mobile unlock", "Time-limited guest codes", "Tamper alerts"],
    example: "Send a one-time code to a delivery courier that expires in 10 minutes.",
    icon: Lock,
    tint: "rgba(74,222,128,0.55)",
    focus: { x: 85, y: 50, r: 26 },
  },
  garage: {
    name: "Garage Access",
    short: "License-plate recognition opens the garage automatically as you approach.",
    benefits: ["Hands-free entry", "Vehicle whitelist", "Visitor pre-approval"],
    example: "The garage opens 5 metres before you reach it — no remote needed.",
    icon: DoorOpen,
    tint: "rgba(74,222,128,0.5)",
    focus: { x: 82, y: 70, r: 26 },
  },

  /* ---------- Hotel scene ---------- */
  "ai-concierge": {
    name: "AI Concierge",
    short: "Multilingual AI assistant that answers guest questions, gives recommendations, and handles requests 24/7.",
    benefits: ["24/7 multilingual chat", "Personalised recommendations", "Instant request handling"],
    example: "A late-arriving guest asks for a nearby restaurant in Japanese — and gets a 90-second answer.",
    icon: MessageSquare,
    tint: "rgba(59,130,246,0.5)",
    focus: { x: 40, y: 80, r: 28 },
    effect: "integrations",
  },
  "keyless-checkin": {
    name: "Keyless Check-In",
    short: "Guests check in using mobile credentials without waiting at reception.",
    benefits: ["Mobile key on arrival", "Skip the front-desk queue", "Secure remote check-out"],
    example: "A guest walks straight from the taxi to their suite — phone in hand, no key card.",
    icon: Smartphone,
    tint: "rgba(96,165,250,0.5)",
    focus: { x: 44, y: 80, r: 22 },
    effect: "access",
  },
  "personalized-service": {
    name: "Personalized Service",
    short: "The platform remembers guest preferences — lighting, temperature, and room settings.",
    benefits: ["Saved guest profiles", "Auto-applied room scenes", "Preference-based upgrades"],
    example: "Returning guests find their preferred temperature, lighting and curtain position already set.",
    icon: Heart,
    tint: "rgba(244,114,182,0.45)",
    focus: { x: 50, y: 50, r: 30 },
    effect: "internet",
  },
  "room-automation": {
    name: "Room Automation",
    short: "Rooms automatically adjust lighting, temperature, and devices based on occupancy or preferences.",
    benefits: ["Occupancy-aware scenes", "Voice & app control", "Energy-saving standby"],
    example: "When a guest leaves the room, lights dim, curtains close, and the AC steps down by 2°C.",
    icon: Settings,
    tint: "rgba(168,85,247,0.45)",
    focus: { x: 50, y: 45, r: 30 },
    effect: "lighting",
  },
  "hotel-temperature": {
    name: "Temperature Control",
    short: "Automatically maintains ideal room temperature while reducing energy consumption.",
    benefits: ["Per-room thermostats", "Predictive scheduling", "Up to 30% HVAC savings"],
    example: "Empty floors quietly drop a few degrees overnight — and warm back up before sunrise.",
    icon: Thermometer,
    tint: "rgba(96,165,250,0.55)",
    focus: { x: 35, y: 50, r: 28 },
    effect: "climate",
  },
  "hotel-lighting": {
    name: "Smart Lighting",
    short: "Warm, layered lighting across exterior, lobby, rooms and gardens — fully automated.",
    benefits: ["Sunset-based scenes", "Per-zone control", "Hospitality-grade dimming"],
    example: "At dusk the gardens, lobby and façade glow into life — all on one scene.",
    icon: Lightbulb,
    tint: "rgba(255,196,90,0.6)",
    focus: { x: 50, y: 70, r: 50 },
    effect: "lighting",
  },
  "energy-management": {
    name: "Energy Management",
    short: "Optimise HVAC, lighting and utilities automatically to reduce operating costs.",
    benefits: ["Live consumption dashboard", "Anomaly alerts", "Up to 35% lower bills"],
    example: "A leaking chiller is flagged the moment its energy draw drifts outside normal range.",
    icon: BarChart3,
    tint: "rgba(74,222,128,0.45)",
    focus: { x: 50, y: 60, r: 38 },
    effect: "integrations",
  },
  housekeeping: {
    name: "Housekeeping Notifications",
    short: "Automatically notify housekeeping when rooms become available for service.",
    benefits: ["Live room status", "Optimised cleaning routes", "Guest-do-not-disturb aware"],
    example: "The moment a guest checks out, housekeeping gets the room added to their route.",
    icon: Send,
    tint: "rgba(56,189,248,0.45)",
    focus: { x: 60, y: 45, r: 28 },
    effect: "internet",
  },

  /* ---------- Commercial real estate scene ---------- */
  analytics: {
    name: "Analytics & Insights",
    short: "Real-time analytics for occupancy, energy, security and building performance.",
    benefits: ["Live KPI dashboards", "Trend & anomaly detection", "Exportable reports"],
    example: "Facility managers see which floors are underused this week — and re-plan in minutes.",
    icon: BarChart3,
    tint: "rgba(59,130,246,0.5)",
    focus: { x: 45, y: 28, r: 30 },
    effect: "internet",
  },
  "temp-access": {
    name: "Temporary Access Passes",
    short: "Issue secure visitor credentials instantly — from a single screen.",
    benefits: ["QR or mobile passes", "Time-bound permissions", "Full audit trail"],
    example: "A contractor receives a 4-hour QR pass that unlocks only the floors they need.",
    icon: QrCode,
    tint: "rgba(96,165,250,0.55)",
    focus: { x: 55, y: 50, r: 28 },
    effect: "access",
  },
  "office-lighting": {
    name: "Smart Lighting",
    short: "Automated lighting based on occupancy and schedules across the entire workspace.",
    benefits: ["Per-zone scenes", "Daylight harvesting", "Up to 45% energy saved"],
    example: "Empty meeting rooms dim automatically — corridors stay softly lit for walk-throughs.",
    icon: Lightbulb,
    tint: "rgba(255,196,90,0.55)",
    focus: { x: 38, y: 32, r: 36 },
    effect: "lighting",
  },
  "access-management": {
    name: "Access Management",
    short: "Control employee and visitor access from one unified platform.",
    benefits: ["Role-based permissions", "Face + mobile + QR", "Real-time revocation"],
    example: "A departing employee's badge stops working on every door the moment HR confirms exit.",
    icon: ShieldCheck,
    tint: "rgba(74,222,128,0.5)",
    focus: { x: 78, y: 48, r: 26 },
    effect: "access",
  },
  "office-temperature": {
    name: "Temperature Control",
    short: "Maintain comfortable indoor conditions while minimising energy use.",
    benefits: ["Per-zone HVAC", "Schedule-aware climate", "CO₂-based ventilation"],
    example: "Conference rooms cool down ten minutes before the calendar says a meeting begins.",
    icon: Thermometer,
    tint: "rgba(96,165,250,0.55)",
    focus: { x: 30, y: 30, r: 28 },
    effect: "climate",
  },
  occupancy: {
    name: "Occupancy Monitoring",
    short: "Monitor workspace usage to optimise layouts and improve efficiency.",
    benefits: ["Live desk & room counts", "Weekly heatmaps", "Layout suggestions"],
    example: "Two underused desk pods are merged into a quiet zone — based on a month of data.",
    icon: ScanFace,
    tint: "rgba(168,85,247,0.45)",
    focus: { x: 36, y: 68, r: 34 },
    effect: "internet",
  },
  "energy-optimization": {
    name: "Energy Optimization",
    short: "AI automatically optimises energy usage across all building systems.",
    benefits: ["HVAC + lighting sync", "Off-hours auto-shutdown", "Carbon-aware scheduling"],
    example: "On a sunny afternoon, lights dim and the AC tunes back — without anyone lifting a finger.",
    icon: Cpu,
    tint: "rgba(74,222,128,0.5)",
    focus: { x: 50, y: 45, r: 36 },
    effect: "integrations",
  },
  "meeting-rooms": {
    name: "Meeting Room Booking",
    short: "Employees reserve meeting rooms instantly with automatic scheduling.",
    benefits: ["One-tap booking", "Calendar sync", "Auto-release if no-show"],
    example: "An unused booking auto-releases after 10 minutes, freeing the room for a walk-in team.",
    icon: DoorOpen,
    tint: "rgba(96,165,250,0.5)",
    focus: { x: 80, y: 60, r: 24 },
    effect: "access",
  },
};

type LabelDef = { key: FeatureKey; x: number; y: number };

const OFFICE_LABELS: LabelDef[] = [
  { key: "internet",     x: 52, y: 16 },
  { key: "lighting",     x: 18, y: 30 },
  { key: "climate",      x: 66, y: 38 },
  { key: "cameras",      x: 16, y: 50 },
  { key: "access",       x: 50, y: 58 },
  { key: "leak",         x: 18, y: 70 },
  { key: "integrations", x: 45, y: 80 },
  { key: "parking",      x: 75, y: 82 },
];

const RESIDENCE_LABELS: LabelDef[] = [
  { key: "internet",      x: 30, y: 18 },
  { key: "lighting",      x: 82, y: 32 },
  { key: "climate",       x: 14, y: 40 },
  { key: "cameras",       x: 14, y: 52 },
  { key: "smart-locks",   x: 84, y: 50 },
  { key: "garage",        x: 84, y: 64 },
  { key: "leak",          x: 30, y: 72 },
  { key: "integrations",  x: 64, y: 82 },
];

const HOTEL_LABELS: LabelDef[] = [
  { key: "keyless-checkin",      x: 52, y: 27 },
  { key: "personalized-service", x: 66, y: 40 },
  { key: "room-automation",      x: 64, y: 55 },
  { key: "ai-concierge",         x: 22, y: 50 },
  { key: "hotel-temperature",    x: 18, y: 62 },
  { key: "hotel-lighting",       x: 36, y: 74 },
  { key: "energy-management",    x: 30, y: 86 },
  { key: "housekeeping",         x: 68, y: 84 },
];

const CRE_LABELS: LabelDef[] = [
  { key: "analytics",           x: 42, y: 22 },
  { key: "office-lighting",     x: 82, y: 30 },
  { key: "temp-access",         x: 18, y: 38 },
  { key: "access-management",   x: 48, y: 44 },
  { key: "office-temperature",  x: 24, y: 53 },
  { key: "occupancy",           x: 42, y: 64 },
  { key: "meeting-rooms",       x: 82, y: 66 },
  { key: "energy-optimization", x: 50, y: 80 },
];

function BuildingsShowcase() {
  const reveal = useInView<HTMLDivElement>({ threshold: 0.15 });
  const [pinned, setPinned] = useState<{ side: "office" | "residence"; key: FeatureKey } | null>(null);

  return (
    <section className="relative pb-24">
      <style>{`
        @keyframes ibs-card-in {
          0%   { opacity: 0; transform: translate3d(0, 18px, 0) scale(0.98); filter: blur(8px); }
          100% { opacity: 1; transform: translate3d(0, 0, 0)    scale(1);    filter: blur(0); }
        }
        .ibs-card { opacity: 0; will-change: transform, opacity, filter; }
        .ibs-card.in { animation: ibs-card-in 0.8s cubic-bezier(0.22,0.61,0.36,1) both; }

        @keyframes ibs-float-a { 0%,100% { transform: translate3d(0,0,0); } 50% { transform: translate3d(0,-3px,0); } }
        @keyframes ibs-float-b { 0%,100% { transform: translate3d(0,0,0); } 50% { transform: translate3d(0,-2px,0); } }
        .ibs-label {
          position: absolute;
          transform: translate(-50%, -50%);
          display: inline-flex; align-items: center; gap: 8px;
          padding: 8px 14px;
          background: #fff;
          border-radius: 999px;
          box-shadow: 0 8px 24px rgba(15,30,80,0.12), 0 1px 0 rgba(255,255,255,0.7) inset;
          font: 600 13px/1 var(--font-sans);
          color: #0f172a;
          white-space: nowrap;
          cursor: pointer;
          transition: transform 240ms cubic-bezier(0.16,1,0.3,1), box-shadow 240ms ease, background 240ms ease;
          will-change: transform;
        }
        .ibs-label > .ibs-label-inner { display: inline-flex; align-items: center; gap: 8px; }
        .ibs-label .ibs-icon {
          display: inline-flex; color: #77DDFF;
          transition: filter 240ms ease, transform 240ms ease;
        }
        .ibs-label.float-a .ibs-label-inner { animation: ibs-float-a 4.8s ease-in-out infinite; }
        .ibs-label.float-b .ibs-label-inner { animation: ibs-float-b 5.6s ease-in-out infinite; }
        .ibs-label.is-hot {
          transform: translate(-50%, calc(-50% - 2px)) scale(1.06);
          box-shadow: 0 14px 38px rgba(15,30,80,0.22);
        }
        .ibs-label.is-hot .ibs-icon { filter: drop-shadow(0 0 6px rgba(37,99,235,0.7)); transform: scale(1.08); }
        .ibs-label.is-active {
          background: #0f172a; color: #fff;
          box-shadow: 0 16px 42px rgba(15,30,80,0.32), 0 0 0 2px rgba(37,99,235,0.45);
        }
        .ibs-label.is-active .ibs-icon { color: #93c5fd; filter: drop-shadow(0 0 8px rgba(147,197,253,0.9)); }

        .ibs-hot {
          position: absolute; border-radius: 50%;
          transform: translate(-50%, -50%);
          background: transparent; cursor: pointer;
          transition: background 260ms ease, box-shadow 260ms ease;
        }
        .ibs-hot.is-hot {
          background: radial-gradient(circle, rgba(147,197,253,0.18) 0%, rgba(147,197,253,0) 70%);
          box-shadow: inset 0 0 0 1px rgba(147,197,253,0.35);
        }

        @keyframes ibs-tint-in {
          0%   { opacity: 0; }
          100% { opacity: 1; }
        }
        .ibs-fx { position: absolute; inset: 0; pointer-events: none; overflow: hidden; border-radius: inherit; }
        .ibs-fx > * { animation: ibs-tint-in 0.35s ease-out both; }

        @keyframes ibs-warm-pulse {
          0%,100% { opacity: 0.55; transform: translate(-50%, -50%) scale(0.9); }
          50%     { opacity: 0.95; transform: translate(-50%, -50%) scale(1.08); }
        }
        @keyframes ibs-spark { 0%,100% { opacity: 0.2; } 50% { opacity: 1; } }
        .ibs-warm {
          position: absolute; width: 55%; aspect-ratio: 1/1; border-radius: 50%;
          background: radial-gradient(circle, rgba(255,196,90,0.55) 0%, rgba(255,196,90,0.25) 35%, transparent 70%);
          mix-blend-mode: screen;
          animation: ibs-warm-pulse 2.6s ease-in-out infinite;
        }
        @keyframes ibs-airflow {
          0%   { stroke-dashoffset: 80; opacity: 0; }
          20%  { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
        .ibs-airflow path { animation: ibs-airflow 2.4s ease-in-out infinite; }
        @keyframes ibs-sweep { 0%,100% { transform: rotate(-25deg);} 50% { transform: rotate(25deg);} }
        .ibs-cone-wrap { position: absolute; transform: translate(-50%, -50%); transform-origin: center; }
        .ibs-cone { transform-origin: 50% 0%; animation: ibs-sweep 3.6s ease-in-out infinite; }
        @keyframes ibs-node { 0%,100% { r: 3; opacity: 0.5; } 50% { r: 5; opacity: 1; } }
        .ibs-net circle.node { animation: ibs-node 1.8s ease-in-out infinite; }
        @keyframes ibs-door-pulse { 0%,100% { opacity: 0.55; } 50% { opacity: 1; } }
        @keyframes ibs-check-pop {
          0% { transform: translate(-50%,-50%) scale(0.6); opacity: 0;}
          60% { transform: translate(-50%,-50%) scale(1.1); opacity: 1;}
          100% { transform: translate(-50%,-50%) scale(1); opacity: 0.9;}
        }
        .ibs-door {
          position: absolute; transform: translate(-50%,-50%);
          width: 12%; aspect-ratio: 3/5;
          border: 2px solid rgba(96,165,250,0.85);
          border-radius: 6px;
          box-shadow: 0 0 24px rgba(96,165,250,0.55), inset 0 0 18px rgba(96,165,250,0.35);
          animation: ibs-door-pulse 1.8s ease-in-out infinite;
        }
        .ibs-check {
          position: absolute; width: 36px; height: 36px; border-radius: 50%;
          background: rgba(74,222,128,0.9); color: #fff;
          display: flex; align-items: center; justify-content: center;
          animation: ibs-check-pop 1.6s ease-out infinite;
        }
        @keyframes ibs-ripple {
          0% { transform: translate(-50%,-50%) scale(0.4); opacity: 0.8;}
          100% { transform: translate(-50%,-50%) scale(1.8); opacity: 0;}
        }
        .ibs-pipe { stroke: rgba(56,189,248,0.9); stroke-width: 3; fill: none; filter: drop-shadow(0 0 6px rgba(56,189,248,0.8)); }
        .ibs-ripple {
          position: absolute; width: 22%; aspect-ratio: 1/1; border-radius: 50%;
          border: 2px solid rgba(56,189,248,0.7);
          animation: ibs-ripple 2.2s ease-out infinite;
        }
        @keyframes ibs-park-glow { 0%,100% { opacity: 0.5;} 50% { opacity: 1;} }
        .ibs-park rect { animation: ibs-park-glow 2s ease-in-out infinite; }
        @keyframes ibs-path { from { stroke-dashoffset: 60; } to { stroke-dashoffset: 0; } }
        .ibs-park path.route { stroke-dasharray: 6 6; animation: ibs-path 1.2s linear infinite; }
        @keyframes ibs-web { 0% { stroke-dashoffset: 200; opacity: 0;} 30% { opacity: 1;} 100% { stroke-dashoffset: 0; opacity: 0.9;} }
        .ibs-web path { stroke-dasharray: 200; animation: ibs-web 2.6s ease-in-out infinite; }
        @keyframes ibs-lock-pulse {
          0%,100% { transform: translate(-50%,-50%) scale(1); opacity:0.7;}
          50% { transform: translate(-50%,-50%) scale(1.15); opacity:1;}
        }
        .ibs-lock {
          position: absolute; transform: translate(-50%,-50%);
          width: 44px; height: 44px; border-radius: 50%;
          background: rgba(74,222,128,0.2);
          border: 2px solid rgba(74,222,128,0.9);
          display:flex; align-items:center; justify-content:center;
          color: #16a34a;
          animation: ibs-lock-pulse 1.6s ease-in-out infinite;
        }
        @keyframes ibs-arrow {
          0% { transform: translate(-150%, -50%); opacity: 0;}
          30% { opacity:1;}
          100% { transform: translate(0%, -50%); opacity:0;}
        }
        .ibs-arrow {
          position: absolute; left: 0; top: 50%;
          width: 100%; height: 4px;
          background: linear-gradient(90deg, transparent, rgba(74,222,128,0.85));
          animation: ibs-arrow 2s ease-in-out infinite;
        }

        .ibs-card-bg {
          position: absolute; inset: 0;
          background-image: var(--ibs-img);
          background-size: 200% auto;
          background-repeat: no-repeat;
          will-change: transform;
          transition: filter 400ms ease, transform 200ms linear;
        }
        .ibs-card:hover .ibs-card-bg { filter: brightness(1.04) saturate(1.05); }
        .ibs-card.has-active .ibs-card-bg { filter: brightness(0.85) saturate(0.95); }

        @keyframes ibs-panel-in {
          0%   { opacity: 0; transform: translate3d(0, 12px, 0) scale(0.98); }
          100% { opacity: 1; transform: translate3d(0, 0, 0)    scale(1); }
        }
        .ibs-panel { animation: ibs-panel-in 0.35s cubic-bezier(0.22,0.61,0.36,1) both; }
        .ibs-panel-arrow {
          position: absolute; width: 14px; height: 14px;
          background: rgba(255,255,255,0.95);
          border: 1px solid hsl(var(--border) / 0.6);
          transform: rotate(45deg);
        }
      `}</style>

      <div className="px-4 md:px-8">
        <div className="mx-auto mb-10 max-w-7xl">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Where Talesso lives</p>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-[-0.03em]">
            Offices &amp; Residences.
          </h2>
          <p className="mt-3 text-muted-foreground text-sm">
            Tap any feature to see how it works.
          </p>
        </div>

        <div
          ref={reveal.ref}
          className="mx-auto grid max-w-[88rem] grid-cols-1 gap-6 md:grid-cols-2"
        >
          <BuildingCard
            side="office"
            title="Offices"
            subtitle="Intelligent spaces for productivity"
            Icon={Building2}
            labels={OFFICE_LABELS}
            visible={reveal.inView}
            delay={0}
            pinned={pinned && pinned.side === "office" ? pinned.key : null}
            onPin={(key) => setPinned((p) => (p && p.side === "office" && p.key === key ? null : { side: "office", key }))}
            onClose={() => setPinned(null)}
          />
          <BuildingCard
            side="residence"
            title="Residences"
            subtitle="Smart living, connected and secure"
            Icon={HomeIcon}
            labels={RESIDENCE_LABELS}
            visible={reveal.inView}
            delay={250}
            pinned={pinned && pinned.side === "residence" ? pinned.key : null}
            onPin={(key) => setPinned((p) => (p && p.side === "residence" && p.key === key ? null : { side: "residence", key }))}
            onClose={() => setPinned(null)}
          />
        </div>
      </div>
    </section>
  );
}

function ScenesShowcase() {
  const reveal = useInView<HTMLDivElement>({ threshold: 0.15 });
  const [pinned, setPinned] = useState<{ side: "hotel" | "cre"; key: FeatureKey } | null>(null);

  return (
    <section className="relative pb-24">
      <div className="px-4 md:px-8">
        <div className="mx-auto mb-10 max-w-7xl">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
            {"\n"}
          </p>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-[-0.03em]">
            Hotels &amp; Commercial Real Estate.
          </h2>
          <p className="mt-3 text-muted-foreground text-sm">
            Tap any feature to see how it works inside each building.
          </p>
        </div>

        <div
          ref={reveal.ref}
          className="mx-auto grid max-w-[88rem] grid-cols-1 gap-6 md:grid-cols-2"
        >
          <BuildingCard
            side="office"
            title="Hotels"
            subtitle="Exceptional stays, intelligently managed"
            Icon={Building2}
            labels={HOTEL_LABELS}
            visible={reveal.inView}
            delay={0}
            pinned={pinned && pinned.side === "hotel" ? pinned.key : null}
            onPin={(key) => setPinned((p) => (p && p.side === "hotel" && p.key === key ? null : { side: "hotel", key }))}
            onClose={() => setPinned(null)}
            imageUrl={hotelSceneAsset.url}
            bgMode="cover"
            headerLight
          />
          <BuildingCard
            side="residence"
            title="Commercial Real Estates"
            subtitle="Smarter spaces, better experiences"
            Icon={Building2}
            labels={CRE_LABELS}
            visible={reveal.inView}
            delay={250}
            pinned={pinned && pinned.side === "cre" ? pinned.key : null}
            onPin={(key) => setPinned((p) => (p && p.side === "cre" && p.key === key ? null : { side: "cre", key }))}
            onClose={() => setPinned(null)}
            imageUrl={officeSceneAsset.url}
            bgMode="cover"
            headerLight
          />
        </div>
      </div>
    </section>
  );
}

function BuildingCard({
  side,
  title,
  subtitle,
  Icon,
  labels,
  visible,
  delay,
  pinned,
  onPin,
  onClose,
  imageUrl,
  bgMode = "split",
  headerLight = false,
}: {
  side: "office" | "residence";
  title: string;
  subtitle: string;
  Icon: LucideIcon;
  labels: LabelDef[];
  visible: boolean;
  delay: number;
  pinned: FeatureKey | null;
  onPin: (k: FeatureKey) => void;
  onClose: () => void;
  imageUrl?: string;
  bgMode?: "split" | "cover";
  headerLight?: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const labelsRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<FeatureKey | null>(null);

  const active: FeatureKey | null = hovered ?? pinned;

  // Mouse parallax on the building + labels
  const onMouseMove = useCallback((e: React.MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = ((e.clientX - r.left) / r.width - 0.5) * 2;  // -1..1
    const dy = ((e.clientY - r.top) / r.height - 0.5) * 2;
    if (bgRef.current) bgRef.current.style.transform = `translate3d(${dx * 8}px, ${dy * 8}px, 0)`;
    if (labelsRef.current) labelsRef.current.style.transform = `translate3d(${dx * 4}px, ${dy * 4}px, 0)`;
  }, []);
  const onMouseLeave = useCallback(() => {
    if (bgRef.current) bgRef.current.style.transform = "";
    if (labelsRef.current) labelsRef.current.style.transform = "";
    setHovered(null);
  }, []);

  // Half of the composite image to show
  const bgPos = bgMode === "cover" ? "center" : side === "office" ? "0% center" : "100% center";
  const bgSize = bgMode === "cover" ? "cover" : "200% auto";
  const bgImg = imageUrl ?? buildingsCleanAsset.url;
  const activeInfo = active ? FEATURE_INFO[active] : null;

  // Place the panel near the active feature, but always fully inside the card
  // and pulled toward the visual center of the image.
  // Center the panel, then nudge it slightly toward the active feature so each
  // hotspot's description sits in a subtly different spot — never cropped.
  const panelPos = activeInfo
    ? { left: "50%", top: "50%", transform: "translate(-50%, -50%)" }
    : null;

  return (
    <div
      ref={cardRef}
      className={`ibs-card relative rounded-3xl border border-border/70 bg-card shadow-[0_30px_80px_-40px_rgba(15,30,80,0.35)] ${visible ? "in" : ""} ${active ? "has-active" : ""}`}
      style={{ animationDelay: visible ? `${delay}ms` : undefined }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {/* Aspect box to keep the card a stable height */}
      <div className="relative aspect-[688/768]">
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
        <div
          ref={bgRef}
          className="ibs-card-bg"
          style={{
            // @ts-expect-error css var
            "--ibs-img": `url('${bgImg}')`,
            backgroundPosition: bgPos,
            backgroundSize: bgSize,
          }}
        />

        {activeInfo && active ? (
          <div className="ibs-fx" key={active}>
            <FeatureEffect feature={activeInfo.effect ?? active} focus={activeInfo.focus} />
          </div>
        ) : null}
        </div>

        {/* Header */}
        <div className="absolute left-6 top-6 z-10 flex items-center gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm backdrop-blur">
            <Icon className="h-6 w-6 text-[#0f172a]" />
          </span>
          <div>
            <h3 className={`font-display text-2xl md:text-3xl font-bold tracking-[-0.02em] ${headerLight ? "text-white" : "text-[#0f172a]"}`}>
              {title}
            </h3>
            <p className={`text-sm ${headerLight ? "text-white/80" : "text-muted-foreground"}`}>{subtitle}</p>
          </div>
        </div>

        {/* Invisible hotspots over building regions */}
        <div className="absolute inset-0 z-10">
          {labels.map((l) => {
            const info = FEATURE_INFO[l.key];
            const isHot = active === l.key;
            const size = Math.max(info.focus.r * 0.7, 14);
            return (
              <div
                key={`hot-${l.key}`}
                className={`ibs-hot ${isHot ? "is-hot" : ""}`}
                style={{
                  left: `${info.focus.x}%`,
                  top: `${info.focus.y}%`,
                  width: `${size}%`,
                  height: `${size}%`,
                }}
                onMouseEnter={() => setHovered(l.key)}
                onClick={() => onPin(l.key)}
                role="button"
                aria-label={`${info.name} hotspot`}
              />
            );
          })}
        </div>

        {/* Floating labels */}
        <div ref={labelsRef} className="absolute inset-0 z-20" style={{ transition: "transform 200ms linear" }}>
          {labels.map((l, i) => {
            const info = FEATURE_INFO[l.key];
            const I = info.icon;
            const isHot = active === l.key;
            const isPinned = pinned === l.key;
            return (
              <button
                key={`${l.key}-${i}`}
                type="button"
                aria-pressed={isPinned}
                onMouseEnter={() => setHovered(l.key)}
                onClick={() => onPin(l.key)}
                className={`ibs-label ${i % 2 ? "float-a" : "float-b"} ${isHot ? "is-hot" : ""} ${isPinned ? "is-active" : ""}`}
                style={{ left: `${l.x}%`, top: `${l.y}%`, animationDelay: `${(i % 4) * 0.4}s` }}
              >
                <span className="ibs-label-inner">
                  <span className="ibs-icon"><I className="h-4 w-4" /></span>
                  <span>{info.name}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Info panel with arrow pointing at hotspot */}
        {activeInfo && panelPos ? (
          <div
            key={`panel-${active}`}
            className="ibs-panel absolute z-30 w-[min(19rem,calc(100%-1.5rem))] rounded-2xl border border-border/60 bg-white/95 p-5 shadow-[0_24px_60px_-20px_rgba(15,30,80,0.35)] backdrop-blur"
            style={panelPos}
          >
            {/* arrow removed — panel is centered, no longer pointing at the hotspot */}
            <div className="flex items-start gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0f172a]/5">
                <activeInfo.icon className="h-5 w-5 text-[#77DDFF]" />
              </span>
              <div className="flex-1">
                <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Feature</p>
                <h4 className="font-display text-lg font-bold tracking-[-0.01em] text-[#0f172a]">
                  {activeInfo.name}
                </h4>
              </div>
              {pinned ? (
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close"
                  className="rounded-full p-1 text-muted-foreground transition hover:bg-muted hover:text-foreground"
                >
                  <XIcon className="h-4 w-4" />
                </button>
              ) : null}
            </div>
            <p className="mt-3 text-sm text-foreground/80 leading-relaxed">{activeInfo.short}</p>
            <ul className="mt-3 space-y-1.5">
              {activeInfo.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2 text-xs text-foreground/70">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#77DDFF]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-3 rounded-lg bg-[#0f172a]/5 px-3 py-2 text-xs text-foreground/70 italic">
              {activeInfo.example}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

/* Per-feature animated overlay positioned at the hotspot focus point */
function FeatureEffect({ feature, focus }: { feature: FeatureKey; focus: { x: number; y: number; r: number } }) {
  const cx = `${focus.x}%`;
  const cy = `${focus.y}%`;

  switch (feature) {
    case "lighting":
      return (
        <>
          <div className="ibs-warm" style={{ left: cx, top: cy, transform: "translate(-50%,-50%)" }} />
          {[0, 1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className="absolute h-1 w-1 rounded-full bg-[#fde68a]"
              style={{
                left: `calc(${cx} + ${(i - 2) * 22}px)`,
                top: `calc(${cy} + ${(i % 2 ? -1 : 1) * 18}px)`,
                boxShadow: "0 0 10px rgba(253,230,138,0.95)",
                animation: `ibs-spark ${1.2 + i * 0.2}s ease-in-out ${i * 0.15}s infinite`,
              }}
            />
          ))}
        </>
      );

    case "climate":
      return (
        <svg className="ibs-airflow absolute inset-0 h-full w-full" preserveAspectRatio="none">
          {[0, 1, 2].map((i) => (
            <path
              key={i}
              d={`M ${focus.x - 14}% ${focus.y - 8 + i * 8}% Q ${focus.x}% ${focus.y - 14 + i * 8}% ${focus.x + 14}% ${focus.y - 8 + i * 8}%`}
              stroke="rgba(96,165,250,0.9)"
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
              strokeDasharray="10 70"
              style={{ animationDelay: `${i * 0.4}s`, filter: "drop-shadow(0 0 4px rgba(96,165,250,0.6))" }}
            />
          ))}
        </svg>
      );

    case "cameras":
      return (
        <div className="ibs-cone-wrap" style={{ left: cx, top: cy, width: "30%", aspectRatio: "1/1" }}>
          <svg viewBox="0 0 100 100" className="h-full w-full">
            <defs>
              <radialGradient id="coneG" cx="50%" cy="0%" r="100%">
                <stop offset="0%" stopColor="rgba(96,165,250,0.55)" />
                <stop offset="100%" stopColor="rgba(96,165,250,0)" />
              </radialGradient>
            </defs>
            <g className="ibs-cone">
              <path d="M 50 0 L 18 90 L 82 90 Z" fill="url(#coneG)" />
              <path d="M 50 0 L 18 90 L 82 90 Z" fill="none" stroke="rgba(147,197,253,0.7)" strokeWidth="0.6" />
            </g>
            <circle cx="50" cy="0" r="3" fill="#60a5fa" />
          </svg>
        </div>
      );

    case "internet": {
      const nodes = [
        { x: focus.x - 14, y: focus.y - 6 },
        { x: focus.x + 12, y: focus.y - 10 },
        { x: focus.x - 8, y: focus.y + 10 },
        { x: focus.x + 14, y: focus.y + 6 },
        { x: focus.x, y: focus.y },
      ];
      return (
        <svg className="ibs-net absolute inset-0 h-full w-full" preserveAspectRatio="none">
          {nodes.slice(0, -1).map((n, i) => (
            <line
              key={i}
              x1={`${n.x}%`} y1={`${n.y}%`}
              x2={`${nodes[4].x}%`} y2={`${nodes[4].y}%`}
              stroke="rgba(59,130,246,0.55)" strokeWidth={1}
              strokeDasharray="4 4"
            />
          ))}
          {nodes.map((n, i) => (
            <circle key={`n${i}`} className="node" cx={`${n.x}%`} cy={`${n.y}%`} r={3} fill="#3b82f6"
              style={{ filter: "drop-shadow(0 0 6px rgba(59,130,246,0.9))", animationDelay: `${i * 0.2}s` }} />
          ))}
        </svg>
      );
    }

    case "access":
      return (
        <>
          <div className="ibs-door" style={{ left: cx, top: cy }} />
          <div className="ibs-check" style={{ left: `calc(${cx} + 60px)`, top: cy }}>
            <Check className="h-4 w-4" />
          </div>
        </>
      );

    case "leak":
      return (
        <>
          <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
            <path className="ibs-pipe" d={`M ${focus.x - 18}% ${focus.y + 6}% L ${focus.x}% ${focus.y + 6}% L ${focus.x}% ${focus.y - 8}% L ${focus.x + 16}% ${focus.y - 8}%`} />
          </svg>
          <div className="ibs-ripple" style={{ left: cx, top: cy }} />
          <div className="ibs-ripple" style={{ left: cx, top: cy, animationDelay: "0.7s" }} />
        </>
      );

    case "parking":
      return (
        <svg className="ibs-park absolute inset-0 h-full w-full" preserveAspectRatio="none">
          {[0, 1, 2, 3].map((i) => (
            <rect
              key={i}
              x={`${focus.x - 12 + i * 6}%`} y={`${focus.y + 2}%`}
              width="5%" height="6%"
              fill="rgba(74,222,128,0.45)"
              stroke="rgba(74,222,128,0.9)" strokeWidth="0.5"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
          <path className="route" d={`M ${focus.x - 18}% ${focus.y - 6}% Q ${focus.x}% ${focus.y - 12}% ${focus.x - 4}% ${focus.y + 5}%`}
            stroke="rgba(74,222,128,0.95)" strokeWidth="2" fill="none" />
        </svg>
      );

    case "integrations":
      return (
        <svg className="ibs-web absolute inset-0 h-full w-full" preserveAspectRatio="none">
          {[
            { x: 22, y: 28 }, { x: 78, y: 24 }, { x: 18, y: 70 }, { x: 82, y: 72 }, { x: 50, y: 50 },
          ].flatMap((n, i, arr) =>
            arr.slice(i + 1).map((m, j) => (
              <path
                key={`${i}-${j}`}
                d={`M ${n.x}% ${n.y}% L ${m.x}% ${m.y}%`}
                stroke="rgba(168,85,247,0.7)" strokeWidth={1} fill="none"
                style={{ animationDelay: `${(i + j) * 0.15}s`, filter: "drop-shadow(0 0 4px rgba(168,85,247,0.6))" }}
              />
            ))
          )}
        </svg>
      );

    case "smart-locks":
      return (
        <div className="ibs-lock" style={{ left: cx, top: cy }}>
          <Lock className="h-5 w-5" />
        </div>
      );

    case "garage":
      return (
        <div className="absolute" style={{ left: `${focus.x - 18}%`, top: cy, width: "36%", height: "8%", transform: "translateY(-50%)" }}>
          <div className="ibs-arrow" />
          <div className="ibs-arrow" style={{ animationDelay: "0.6s" }} />
        </div>
      );

    default:
      return null;
  }
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
  return <ConnectedExperience />;
}

/* ---------------- Connected Experience (independent components) ---------------- */

type CxFeatureKey = "mobile" | "telegram" | "dashboard" | "support";

const CX_FEATURES: { id: CxFeatureKey; title: string; desc: string; Icon: LucideIcon; extra: string }[] = [
  { id: "mobile",    title: "Mobile App",    desc: "Full control in your pocket — iOS & Android.", Icon: Smartphone, extra: "Remote unlock · Push alerts · Live monitoring" },
  { id: "telegram",  title: "Telegram Bot",  desc: "Quick commands and alerts in chat.",            Icon: Send,       extra: "Unlock door · Camera snapshot · Status" },
  { id: "dashboard", title: "Web Dashboard", desc: "Manage buildings, users and analytics from any browser.", Icon: Monitor, extra: "Occupancy · Access events · Live charts" },
  { id: "support",   title: "24/7 Support",  desc: "Real humans, anytime — alongside the AI.",      Icon: Headphones, extra: "AI assistant + on-call humans" },
];

function ConnectedExperience() {
  const [hovered, setHovered] = useState<CxFeatureKey | null>(null);

  return (
    <section id="channels" className="relative py-20 md:py-28 overflow-hidden">
      <style>{`
        @keyframes cx-fadeup { from { opacity:0; transform: translateY(18px);} to { opacity:1; transform: translateY(0);} }
        @keyframes cx-float-a { 0%,100% { transform: translateY(0);} 50% { transform: translateY(-6px);} }
        @keyframes cx-float-b { 0%,100% { transform: translateY(0) rotate(-2deg);} 50% { transform: translateY(-5px) rotate(-2deg);} }
        @keyframes cx-float-c { 0%,100% { transform: translateY(0) rotate(3deg);} 50% { transform: translateY(-4px) rotate(3deg);} }
        @keyframes cx-spin-slow { from { transform: rotate(0);} to { transform: rotate(360deg);} }
        @keyframes cx-pulse-dot { 0%,100% { opacity:.4; transform: scale(1);} 50% { opacity:1; transform: scale(1.25);} }
        @keyframes cx-scan { 0% { transform: translateY(-100%); } 100% { transform: translateY(220%); } }
        @keyframes cx-msg { from { opacity:0; transform: translateY(8px);} to { opacity:1; transform: translateY(0);} }
        @keyframes cx-typing { 0%,60%,100% { transform: translateY(0); opacity:.35;} 30% { transform: translateY(-3px); opacity:1;} }
        @keyframes cx-ripple { 0% { transform: translate(-50%,-50%) scale(.3); opacity:.7;} 100% { transform: translate(-50%,-50%) scale(2.4); opacity:0;} }
        .cx-enter { opacity:0; animation: cx-fadeup .8s ease-out forwards; }
        .cx-card { background:#fff; border:1px solid rgba(15,23,42,0.08); border-radius:22px; padding:28px; transition:transform .35s ease, box-shadow .35s ease, border-color .35s ease; }
        .cx-card:hover { transform: translateY(-4px); border-color:#77DDFF; box-shadow: 0 24px 60px -28px rgba(119,221,255,.65); }
        .cx-card:hover .cx-card-icon { color:#0f172a; background:#77DDFF; }
        .cx-card-icon { width:48px; height:48px; border-radius:12px; display:flex; align-items:center; justify-content:center; color:#475569; transition: background .3s, color .3s; }
        .cx-extra { max-height:0; opacity:0; overflow:hidden; transition: max-height .4s ease, opacity .3s ease, margin-top .3s ease; font-size:12.5px; color:#64748b; }
        .cx-card:hover .cx-extra { max-height:60px; opacity:1; margin-top:12px; }
        .cx-typing { display:inline-flex; gap:3px; padding:6px 9px; background:#fff; border-radius:12px; box-shadow:0 6px 18px rgba(0,0,0,.08); }
        .cx-typing span { width:5px; height:5px; border-radius:9999px; background:#0f172a; opacity:.4; animation: cx-typing 1.2s infinite ease-in-out; }
        .cx-typing span:nth-child(2){ animation-delay:.15s; }
        .cx-typing span:nth-child(3){ animation-delay:.3s; }
        .cx-phone { background:#0b0b0b; border-radius:38px; padding:7px; box-shadow: 0 30px 60px -20px rgba(0,0,0,.35); }
        .cx-phone-inner { background:#eaf3ea; border-radius:32px; overflow:hidden; position:relative; }
        .cx-notch { position:absolute; top:8px; left:50%; transform:translateX(-50%); width:80px; height:18px; background:#0b0b0b; border-radius:9999px; z-index:2; }
        .cx-msg-in { animation: cx-msg .6s ease-out both; }
        .cx-qr-scan { position:absolute; left:0; right:0; height:18%; background: linear-gradient(180deg, transparent, rgba(119,221,255,.55), transparent); animation: cx-scan 2.6s ease-in-out infinite; }
        .cx-pulse-dot { animation: cx-pulse-dot 1.6s ease-in-out infinite; }
        .cx-ripple { position:absolute; left:50%; top:50%; width:60px; height:60px; border-radius:9999px; border:2px solid #77DDFF; animation: cx-ripple 1.8s ease-out infinite; pointer-events:none; }
      `}</style>

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center cx-enter" style={{ animationDelay: "0ms" }}>
          <div className="text-xs tracking-[0.4em] text-muted-foreground uppercase mb-4">Connected Experience</div>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-[-0.03em] leading-[1.05]">
            Instant interaction. Full management.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
            Talesso meets your team where they already work — phone, chat, or browser.
          </p>
        </div>

        {/* Stage */}
        <div className="relative mt-16 grid grid-cols-12 gap-6 items-start">
          {/* LEFT column */}
          <div className="col-span-12 lg:col-span-3 relative flex flex-col items-center gap-6">
            {/* Welcome message card */}
            <div className="cx-enter w-full bg-white rounded-2xl p-4 shadow-[0_18px_40px_-22px_rgba(0,0,0,0.25)] border border-black/5" style={{ animationDelay: "120ms" }}>
              <div className="text-sm font-semibold">👋 Welcome to Eyecid</div>
              <div className="text-xs mt-2 text-slate-700">🔒 Access Control System<br />Your role: Administrator</div>
              <div className="text-xs mt-2 text-slate-600">Use the buttons below or <span className="text-sky-600">/help</span> for a list of commands.</div>
              <div className="text-[10px] text-right text-slate-400 mt-1">12:30</div>
            </div>

            {/* Telegram logo */}
            <div className="cx-enter self-start ml-2" style={{ animationDelay: "260ms", animation: "cx-float-a 5s ease-in-out infinite" }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg" style={{ background: "linear-gradient(135deg,#3aa9e6,#1f8fd1)" }}>
                <Send className="w-5 h-5 text-white -translate-x-[1px]" />
              </div>
            </div>

            {/* Telegram phone */}
            <div className="cx-enter w-[210px]" style={{ animationDelay: "320ms", animation: "cx-float-b 6s ease-in-out infinite" }}>
              <div className="cx-phone">
                <div className="cx-phone-inner" style={{ height: 340 }}>
                  <div className="cx-notch" />
                  <div className="px-3 pt-7 pb-2 bg-white flex items-center gap-2 border-b border-black/5">
                    <div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center text-[9px] font-bold text-sky-700">E</div>
                    <div className="text-[11px] font-semibold">EYECID <span className="text-slate-400 font-normal">bot</span></div>
                  </div>
                  <div className="p-3 space-y-2">
                    <div className="cx-msg-in bg-white rounded-lg p-2 text-[10px] shadow-sm" style={{ animationDelay: "500ms" }}>
                      <div className="font-semibold">👋 Welcome to Eyecid</div>
                      <div className="text-slate-600 mt-1">Smart Building Access Control</div>
                    </div>
                    <div className="cx-msg-in flex justify-end" style={{ animationDelay: "900ms" }}>
                      <div className="bg-emerald-100 rounded-lg px-2 py-1 text-[10px]">/start</div>
                    </div>
                    <div className="cx-msg-in" style={{ animationDelay: "1300ms" }}>
                      <div className="cx-typing"><span/><span/><span/></div>
                    </div>
                    <div className="cx-msg-in grid grid-cols-2 gap-1 pt-1" style={{ animationDelay: "1700ms" }}>
                      {["Alerts","Tickets","Events","Access","Parking","Smart Home"].map(l => (
                        <div key={l} className="bg-white rounded px-2 py-1 text-[9px] text-slate-700 shadow-sm text-center">{l}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mini dashboard chip card */}
            <div className="cx-enter w-[210px] bg-white rounded-xl p-2.5 border border-black/5 shadow-sm" style={{ animationDelay: "420ms" }}>
              <div className="grid grid-cols-2 gap-1.5">
                {["Open Eyecid","Alerts","Tickets","Events","Access","Parking","Smart Home","Settings"].map(l => (
                  <div key={l} className="flex items-center gap-1.5 bg-slate-50 rounded px-2 py-1 text-[9px] text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#77DDFF] cx-pulse-dot" />{l}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CENTER - feature cards */}
          <div className="col-span-12 lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {CX_FEATURES.map((f, i) => (
                <div
                  key={f.id}
                  className="cx-card cx-enter"
                  style={{ animationDelay: `${180 + i * 120}ms` }}
                  onMouseEnter={() => setHovered(f.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className="cx-card-icon">
                    <f.Icon className="w-6 h-6" />
                  </div>
                  <h3 className="mt-20 text-xl font-semibold">{f.title}</h3>
                  <p className="mt-3 text-sm text-slate-600">{f.desc}</p>
                  <div className="cx-extra">{f.extra}</div>
                  {hovered === f.id && (
                    <div className="mt-3 inline-flex items-center gap-2 text-[11px] text-[#0a8fb8]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#77DDFF]" /> Live
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT column */}
          <div className="col-span-12 lg:col-span-3 relative flex flex-col items-center gap-6">
            {/* QR card */}
            <div className="cx-enter relative w-[180px] bg-white rounded-2xl p-3 shadow-[0_18px_40px_-22px_rgba(0,0,0,0.25)] border border-black/5" style={{ animationDelay: "200ms", animation: "cx-float-c 5.5s ease-in-out infinite" }}>
              <div className="text-[10px] text-slate-500 mb-1">Guest Access</div>
              <div className="relative overflow-hidden rounded">
                <div className="grid grid-cols-8 gap-[2px] bg-white p-1">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div key={i} className="aspect-square" style={{ background: (i * 37) % 5 < 2 ? "#0b0b0b" : "transparent" }} />
                  ))}
                </div>
                <div className="cx-qr-scan" />
              </div>
              <div className="mt-2 text-[10px] text-slate-500">PIN Code</div>
              <div className="text-lg font-bold tracking-wider">1234</div>
            </div>

            {/* NFC Smart Home card */}
            <div className="cx-enter self-end mr-2 w-[120px] rounded-xl p-3 text-white shadow-lg" style={{ animationDelay: "320ms", background: "linear-gradient(135deg,#1f5d3a,#0e3a23)", animation: "cx-float-a 4.8s ease-in-out infinite" }}>
              <ArrowUp className="w-4 h-4" />
              <div className="text-[10px] mt-2 font-semibold">Smart Home</div>
              <div className="text-[8px] opacity-70">KNX Devices</div>
            </div>

            {/* 24/7 badge */}
            <div className="cx-enter self-start ml-4" style={{ animationDelay: "380ms" }}>
              <div className="w-14 h-14 rounded-full flex items-center justify-center border-2 border-dashed border-rose-400 text-rose-500 text-xs font-bold" style={{ animation: "cx-spin-slow 18s linear infinite" }}>
                24/7
              </div>
            </div>

            {/* Right phone with hand */}
            <div className="cx-enter relative" style={{ animationDelay: "260ms", animation: "cx-float-a 6s ease-in-out infinite" }}>
              <div className="cx-phone w-[200px]">
                <div className="cx-phone-inner bg-white" style={{ height: 360 }}>
                  <div className="cx-notch" />
                  <div className="pt-8 px-3 pb-2 flex items-center justify-between text-[10px] text-slate-500">
                    <span>12:36</span>
                    <div className="flex gap-1"><Wifi className="w-3 h-3" /></div>
                  </div>
                  <div className="px-3 flex items-center justify-between border-b border-slate-100 pb-2">
                    <XIcon className="w-3.5 h-3.5 text-slate-500" />
                    <div className="text-[10px] font-semibold tracking-wider">EYECID</div>
                    <div className="text-slate-400 text-[10px]">⋮</div>
                  </div>
                  <div className="text-center pt-3">
                    <div className="font-display text-lg font-bold tracking-tight">EYE<span style={{ color: "#77DDFF" }}>C</span>ID</div>
                    <div className="text-[8px] text-slate-500">Smart Building Access Control</div>
                    <div className="text-[8px] text-slate-400">Dev mode</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 p-3">
                    {[
                      { l: "Alerts", I: Lightbulb, c: "#ef4444", n: 2 },
                      { l: "Tickets", I: Settings, c: "#0f172a", n: 5 },
                      { l: "Access Events", I: DoorOpen, c: "#0f172a" },
                      { l: "Access Control", I: Lock, c: "#0f172a" },
                      { l: "Parking", I: ParkingSquare, c: "#2563eb" },
                      { l: "Smart Home", I: HomeIcon, c: "#ef4444" },
                      { l: "People", I: ScanFace, c: "#0f172a" },
                      { l: "Settings", I: Settings, c: "#0f172a" },
                    ].map((m, i) => (
                      <div key={i} className="bg-slate-50 rounded-lg py-2 flex flex-col items-center gap-1 relative">
                        <m.I className="w-4 h-4" style={{ color: m.c }} />
                        <div className="text-[8px] text-slate-600">{m.l}</div>
                        {m.n ? <div className="absolute top-1 right-2 bg-red-500 text-white text-[7px] rounded-full w-3 h-3 flex items-center justify-center">{m.n}</div> : null}
                      </div>
                    ))}
                  </div>
                  <div className="text-center text-[7px] text-slate-400">EYECID · MVPFR © 2026</div>
                </div>
              </div>
              {/* Touch ripple */}
              <div className="absolute" style={{ right: 30, bottom: 80 }}>
                <div className="cx-ripple" />
              </div>
              {/* Hand silhouette */}
              <div className="absolute -bottom-6 -right-8 w-28 h-40 rounded-t-[60%] bg-gradient-to-b from-amber-100 to-amber-200/70 opacity-60 blur-[2px] -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Partners ---------------- */

const PARTNER_MANUFACTURERS = ["Ajax Systems", "2N", "Dahua", "Hikvision", "ZKTeco", "Suprema", "Telpo"];
const PARTNER_CLIENTS = ["FUN CORP", "SVG", "DEPCON", "JBG", "mena aerospace", "{evest}", "Св. Николая"];

function Partners() {
  return (
    <section id="clients" className="relative py-24 md:py-32">
      <style>{`
        @keyframes pt-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .pt-track { display:flex; gap:4rem; width:max-content; animation: pt-marquee 38s linear infinite; }
        .pt-track-slow { animation-duration: 52s; }
        .pt-mask { -webkit-mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent); mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent); }
      `}</style>
      <div className="mx-auto max-w-7xl px-6 space-y-20">
        <div>
          <div className="text-center text-xs tracking-[0.4em] uppercase text-muted-foreground mb-10">
            Compatible with Leading Manufacturers
          </div>
          <div className="pt-mask overflow-hidden">
            <div className="pt-track">
              {[...PARTNER_MANUFACTURERS, ...PARTNER_MANUFACTURERS].map((name, i) => (
                <div key={i} className="flex items-center gap-16">
                  <span className="text-2xl md:text-3xl font-medium text-slate-700 whitespace-nowrap">{name}</span>
                  <span className="h-6 w-px bg-slate-300" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="text-center text-xs tracking-[0.4em] uppercase text-muted-foreground mb-10">
            Trusted by Leading Clients
          </div>
          <div className="pt-mask overflow-hidden">
            <div className="pt-track pt-track-slow">
              {[...PARTNER_CLIENTS, ...PARTNER_CLIENTS].map((name, i) => (
                <div key={i} className="flex items-center gap-14 shrink-0">
                  <div className="h-20 w-44 rounded-2xl bg-white border border-black/5 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.25)] flex items-center justify-center text-slate-700 font-semibold text-base px-4 text-center">
                    {name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- About Us (animated waves) ---------------- */

function AboutUs() {
  const cards = [
    { Icon: Sparkles, label: "Proven Smart Home & Biometric Projects" },
    { Icon: Cpu, label: "Own Software — Full Stack Control" },
    { Icon: Settings, label: "Full Cycle: Design to Service" },
    { Icon: MessageSquare, label: "AI Differentiation: LLM on Terminals" },
  ];
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      <style>{`
        @keyframes au-wave-a { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes au-wave-b { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        @keyframes au-shimmer { 0%,100% { opacity:.55; } 50% { opacity:.85; } }
        .au-bg { background: linear-gradient(180deg, #eef3f8 0%, #d8e4ee 55%, #c5d4e1 100%); }
        .au-wave { position:absolute; left:0; width:200%; height:140px; will-change: transform; }
        .au-wave-a { animation: au-wave-a 14s linear infinite; }
        .au-wave-b { animation: au-wave-b 22s linear infinite; opacity:.6; }
        .au-wave-c { animation: au-wave-a 30s linear infinite; opacity:.4; }
        .au-shimmer { animation: au-shimmer 5s ease-in-out infinite; }
      `}</style>

      {/* Animated sea background */}
      <div className="absolute inset-0 au-bg" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 h-[55%] overflow-hidden" aria-hidden>
        <svg className="au-wave au-wave-c" style={{ bottom: 90 }} viewBox="0 0 2880 140" preserveAspectRatio="none">
          <path d="M0,70 C360,20 720,120 1440,70 C2160,20 2520,120 2880,70 L2880,140 L0,140 Z" fill="#b9cad9" />
        </svg>
        <svg className="au-wave au-wave-b" style={{ bottom: 40 }} viewBox="0 0 2880 140" preserveAspectRatio="none">
          <path d="M0,60 C360,100 720,10 1440,60 C2160,110 2520,20 2880,60 L2880,140 L0,140 Z" fill="#a9bdcf" />
        </svg>
        <svg className="au-wave au-wave-a au-shimmer" style={{ bottom: 0 }} viewBox="0 0 2880 140" preserveAspectRatio="none">
          <path d="M0,80 C360,30 720,130 1440,80 C2160,30 2520,130 2880,80 L2880,140 L0,140 Z" fill="#94aec3" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Text */}
        <div className="lg:col-span-5 bg-white/55 backdrop-blur-md border border-white/60 rounded-3xl p-8 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.25)] text-[15px] leading-relaxed text-slate-700 space-y-4">
          <p>Founded as a small company specializing in biometric access systems, we have grown into a comprehensive technology ecosystem encompassing access control, intelligent management platforms, AI-driven solutions, automation, and smart environments.</p>
          <p>Based in the heart of the Mediterranean, Cyprus, we design and develop our own products with a clear mission: to create technology that makes everyday life simpler, safer, and more connected.</p>
          <p>We believe that our environment affects how we feel, what we wish and what we think about. So we decided to design and develop technology that transforms the way people interact with their spaces.</p>
          <p>By seamlessly integrating technology into homes, workplaces, and commercial environments, we create intelligent spaces that work for people.</p>
          <p>At the core of everything we build is a commitment to improving the way people experience their environment —</p>
          <p className="font-semibold text-slate-900">one smart solution at a time.</p>
        </div>

        {/* Right - heading + cards */}
        <div className="lg:col-span-7">
          <h2 className="font-display text-5xl md:text-6xl font-bold tracking-[-0.03em] text-center lg:text-left text-slate-900">About Us</h2>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {cards.map(({ Icon, label }, i) => (
              <div key={i} className="bg-white/90 backdrop-blur rounded-2xl border border-white/70 shadow-[0_18px_40px_-22px_rgba(15,23,42,0.25)] p-5 flex flex-col items-center text-center min-h-[180px] transition-transform hover:-translate-y-1">
                <div className="w-14 h-14 rounded-full bg-white shadow-inner border border-slate-200 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#77DDFF]" />
                </div>
                <div className="text-sm text-slate-700 leading-snug">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact Section ---------------- */

function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-5">Get in Touch</div>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-[-0.03em] leading-[1.05]">
            Fill out the form and we'll get<br className="hidden md:block" /> back to you within 24 hours.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">We're here to answer your questions and provide the support you need.</p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="lg:col-span-2 relative rounded-3xl p-8 border border-white/60 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.25)]"
            style={{ background: "linear-gradient(135deg, rgba(190,219,238,0.55), rgba(255,225,210,0.45))" }}
          >
            {[
              { id: "name", placeholder: "Your Name", Icon: ScanFace, type: "text" },
              { id: "email", placeholder: "Email", Icon: MessageSquare, type: "email" },
              { id: "phone", placeholder: "Phone", Icon: Send, type: "tel" },
            ].map(({ id, placeholder, Icon, type }) => (
              <div key={id} className="flex items-center gap-3 bg-white/80 rounded-2xl px-4 py-3 mb-4 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-slate-500 shadow-inner border border-slate-100">
                  <Icon className="w-5 h-5" />
                </div>
                <input id={id} name={id} type={type} placeholder={placeholder} className="bg-transparent outline-none flex-1 text-slate-700 placeholder:text-slate-400" />
              </div>
            ))}
            <div className="flex items-start gap-3 bg-white/80 rounded-2xl px-4 py-3 mb-6 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-slate-500 shadow-inner border border-slate-100">
                <MessageSquare className="w-5 h-5" />
              </div>
              <textarea name="message" placeholder="Message" rows={4} className="bg-transparent outline-none flex-1 resize-none text-slate-700 placeholder:text-slate-400" />
            </div>
            <button
              type="submit"
              className="w-full rounded-full py-4 font-medium text-slate-900 border border-sky-200 transition hover:shadow-[0_18px_40px_-18px_rgba(119,221,255,0.7)]"
              style={{ background: "linear-gradient(90deg, rgba(190,219,238,0.7), rgba(255,225,210,0.6))" }}
            >
              {submitted ? "✓ Message sent" : "Send message →"}
            </button>
          </form>

          <div className="space-y-7 text-slate-700">
            <h3 className="font-semibold text-slate-900 text-lg">Contact Information</h3>
            <div>
              <div className="font-semibold text-slate-900">Email</div>
              <a href="mailto:Sales@Talesso.tech" className="text-[#3aa9e6] hover:underline">Sales@Talesso.tech</a>
            </div>
            <div>
              <div className="font-semibold text-slate-900">Phone</div>
              <div>+357 97 879 940</div>
            </div>
            <div>
              <div className="font-semibold text-slate-900">Address</div>
              <div>Limassol, Cyprus</div>
            </div>
            <div>
              <div className="font-semibold text-slate-900">Company</div>
              <div>TALESSO LTD (HE 407732)</div>
            </div>
          </div>
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
   Section 4 — Product Gallery
   Simple 2x2 grid of four uncropped product images.
   ============================================================ */

type TileKind = "face" | "qr" | "plate" | "platepop" | "terminal" | "tv" | "lights" | "motion" | "alert";

const galleryTiles: { src: string; alt: string; kind: TileKind }[] = [
  { src: galleryFaceAsset.url,    alt: "Face recognition biometric access",       kind: "face" },
  { src: galleryQrAsset.url,      alt: "Mobile QR access on EYECID terminal",     kind: "qr" },
  { src: galleryPlateAsset.url,   alt: "License plate recognition at the gate",   kind: "platepop" },
  { src: galleryMonitorAsset.url, alt: "EYECID indoor monitor with video call",   kind: "terminal" },
];

function ProductGallery() {
  const reveal = useInView<HTMLDivElement>({ threshold: 0.15 });
  return (
    <section className="relative w-full overflow-hidden">
      <style>{`
        @keyframes pg4-fade-up {
          0%   { opacity: 0; transform: translate3d(0, 36px, 0) scale(1.03); filter: blur(10px); }
          100% { opacity: 1; transform: translate3d(0, 0, 0)    scale(1);    filter: blur(0); }
        }
        .pg4-tile {
          opacity: 0;
          will-change: transform, opacity, filter;
          overflow: hidden;
        }
        .pg4-tile.in {
          animation: pg4-fade-up 1s cubic-bezier(0.22, 0.61, 0.36, 1) both;
        }
        .pg4-img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: translate3d(0, var(--py, 0px), 0) scale(1.2);
          transition: transform 200ms linear;
          will-change: transform;
        }
        .pg4-fx { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
        /* face scan */
        @keyframes pg4-scan-y {
          0%   { transform: translateY(0%);   opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        .pg4-scanline {
          position: absolute; left: 0; right: 0; top: 0; height: 3px;
          background: linear-gradient(90deg, transparent, rgba(0,255,200,0.95), transparent);
          box-shadow: 0 0 18px 4px rgba(0,255,200,0.55);
          animation: pg4-scan-y 2.6s ease-in-out infinite;
        }
        .pg4-corner {
          position: absolute; width: 22px; height: 22px;
          border: 2px solid rgba(0,255,200,0.85);
          filter: drop-shadow(0 0 6px rgba(0,255,200,0.55));
        }
        .pg4-corner.tl { top: 14%; left: 14%; border-right: none;  border-bottom: none; }
        .pg4-corner.tr { top: 14%; right: 14%; border-left: none;  border-bottom: none; }
        .pg4-corner.bl { bottom: 14%; left: 14%; border-right: none; border-top: none; }
        .pg4-corner.br { bottom: 14%; right: 14%; border-left: none; border-top: none; }
        /* qr pop */
        @keyframes pg4-qr-pop {
          0%   { opacity: 0; transform: translate(-50%, -50%) scale(0.4) rotate(-6deg); }
          25%  { opacity: 1; transform: translate(-50%, -50%) scale(1.08) rotate(0deg); }
          70%  { opacity: 1; transform: translate(-50%, -50%) scale(1) rotate(0deg); }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(0.9) rotate(0deg); }
        }
        .pg4-qr {
          position: absolute; left: 38%; top: 50%;
          width: 24%; aspect-ratio: 1/1;
          padding: 8px; background: #fff;
          border-radius: 8px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.45);
          animation: pg4-qr-pop 3.2s ease-in-out infinite;
        }
        /* plate sweep */
        @keyframes pg4-plate-scan {
          0%   { transform: translateX(-4%); opacity: 0; }
          15%  { opacity: 1; }
          85%  { opacity: 1; }
          100% { transform: translateX(104%); opacity: 0; }
        }
        .pg4-plate-box {
          position: absolute;
          left: 42%; top: 55%; width: 36%; height: 13%;
          overflow: hidden;
        }
        .pg4-plate-corner {
          position: absolute; width: 14px; height: 14px;
          border: 2px solid rgba(0,255,200,0.9);
          filter: drop-shadow(0 0 6px rgba(0,255,200,0.55));
        }
        .pg4-plate-corner.tl { top: -2px; left: -2px; border-right: none;  border-bottom: none; }
        .pg4-plate-corner.tr { top: -2px; right: -2px; border-left: none;  border-bottom: none; }
        .pg4-plate-corner.bl { bottom: -2px; left: -2px; border-right: none; border-top: none; }
        .pg4-plate-corner.br { bottom: -2px; right: -2px; border-left: none; border-top: none; }
        .pg4-plate-scanner {
          position: absolute; top: 0; bottom: 0; left: 0; width: 3px;
          background: linear-gradient(180deg, transparent, rgba(0,255,200,0.95), transparent);
          box-shadow: 0 0 18px 4px rgba(0,255,200,0.55);
          animation: pg4-plate-scan 2.6s ease-in-out infinite;
        }
        /* plate popup badge */
        @keyframes pg4-platepop {
          0%   { opacity: 0; transform: translateX(-50%) translateY(8px) scale(0.6); }
          20%  { opacity: 1; transform: translateX(-50%) translateY(0)   scale(1.06); }
          35%  { transform: translateX(-50%) translateY(0) scale(1); }
          80%  { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); }
          100% { opacity: 0; transform: translateX(-50%) translateY(-6px) scale(0.95); }
        }
        .pg4-platepop {
          position: absolute; left: 50%; top: 32%;
          display: inline-flex; align-items: stretch;
          background: #f3f4f6; color: #0b0b0b;
          border: 4px solid #0b0b0b; border-radius: 10px;
          font: 800 26px/1 ui-monospace, "SF Mono", Menlo, monospace;
          letter-spacing: 0.12em;
          box-shadow: 0 18px 44px rgba(0,0,0,0.55), inset 0 0 0 2px #f3f4f6;
          overflow: hidden;
          animation: pg4-platepop 3.2s ease-in-out infinite;
        }
        .pg4-platepop-eu {
          background: #0b3aa8; color: #ffcc00;
          font: 700 9px/1.05 ui-sans-serif, system-ui;
          padding: 6px 6px;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          gap: 3px;
          min-width: 22px;
        }
        .pg4-platepop-stars { font-size: 10px; line-height: 1; letter-spacing: -1px; }
        .pg4-platepop-num { padding: 10px 16px; background: #f3f4f6; }
        /* tv now playing */
        @keyframes pg4-tv-on {
          0%, 100% { opacity: 0.85; }
          50% { opacity: 1; }
        }
        .pg4-tv-badge {
          position: absolute; bottom: 8%; left: 8%;
          display: inline-flex; align-items: center; gap: 8px;
          padding: 8px 14px; border-radius: 999px;
          background: rgba(0,0,0,0.55); color: #fff;
          font: 600 12px/1 ui-sans-serif, system-ui;
          letter-spacing: 0.06em; text-transform: uppercase;
          backdrop-filter: blur(6px);
          animation: pg4-tv-on 2s ease-in-out infinite;
        }
        .pg4-tv-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: #ef4444; box-shadow: 0 0 10px #ef4444;
        }
        /* lights dimming */
        @keyframes pg4-lights {
          0%, 18%   { opacity: 0; }
          45%, 75%  { opacity: 0.72; }
          100%      { opacity: 0; }
        }
        .pg4-dim {
          position: absolute; left: 10%; right: 10%; top: 0; height: 55%;
          background: radial-gradient(ellipse at 50% 25%, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0) 75%);
          animation: pg4-lights 5s ease-in-out infinite;
        }
        /* motion detect box */
        @keyframes pg4-motion-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.0); border-color: rgba(34,197,94,0.5); }
          50%      { box-shadow: 0 0 0 6px rgba(34,197,94,0.0); border-color: rgba(34,197,94,1); }
        }
        @keyframes pg4-motion-shift {
          0%   { transform: translate(0%, 0%); }
          50%  { transform: translate(6%, -3%); }
          100% { transform: translate(0%, 0%); }
        }
        .pg4-motion-box {
          position: absolute; left: 38%; top: 32%; width: 24%; height: 38%;
          border: 2px solid rgba(34,197,94,0.8);
          border-radius: 4px;
          animation: pg4-motion-pulse 1.4s ease-in-out infinite, pg4-motion-shift 5s ease-in-out infinite;
        }
        .pg4-motion-label {
          position: absolute; top: -22px; left: 0;
          font: 600 10px/1 ui-sans-serif, system-ui;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: #fff; background: rgba(34,197,94,0.85);
          padding: 4px 6px; border-radius: 3px;
        }
        /* security alert */
        @keyframes pg4-alert-blink {
          0%, 49%, 100% { opacity: 1; }
          50%, 99%      { opacity: 0.35; }
        }
        @keyframes pg4-alert-ping {
          0%   { transform: translate(-50%, -50%) scale(0.6); opacity: 0.9; }
          100% { transform: translate(-50%, -50%) scale(2.4); opacity: 0; }
        }
        .pg4-alert {
          position: absolute; top: 10%; right: 8%;
          display: inline-flex; align-items: center; gap: 8px;
          padding: 8px 12px; border-radius: 6px;
          background: rgba(220,38,38,0.92); color: #fff;
          font: 700 11px/1 ui-sans-serif, system-ui;
          letter-spacing: 0.08em; text-transform: uppercase;
          box-shadow: 0 8px 24px rgba(220,38,38,0.45);
          animation: pg4-alert-blink 1.2s ease-in-out infinite;
        }
        .pg4-ping-wrap {
          position: absolute; left: 32%; top: 58%;
          width: 14px; height: 14px;
        }
        .pg4-ping-dot {
          position: absolute; left: 50%; top: 50%;
          width: 10px; height: 10px; border-radius: 50%;
          background: #ef4444; transform: translate(-50%, -50%);
          box-shadow: 0 0 10px #ef4444;
        }
        .pg4-ping-ring {
          position: absolute; left: 50%; top: 50%;
          width: 14px; height: 14px; border-radius: 50%;
          border: 2px solid rgba(239,68,68,0.8);
          animation: pg4-alert-ping 1.8s ease-out infinite;
        }
      `}</style>
      <div
        ref={reveal.ref}
        className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full"
      >
        {galleryTiles.map((t, i) => (
          <GalleryTile
            key={t.src}
            src={t.src}
            alt={t.alt}
            index={i}
            visible={reveal.inView}
            kind={t.kind}
          />
        ))}
      </div>
    </section>
  );
}

function GalleryTile({
  src,
  alt,
  index,
  visible,
  kind,
}: {
  src: string;
  alt: string;
  index: number;
  visible: boolean;
  kind?: TileKind;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let raf = 0;
    // Same parallax speed per row so left/right tiles stay vertically aligned.
    const row = Math.floor(index / 2);
    const speed = 0.08 + (row % 2) * 0.04;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const el = wrapRef.current;
        const img = imgRef.current;
        if (!el || !img) return;
        const r = el.getBoundingClientRect();
        const center = r.top + r.height / 2 - window.innerHeight / 2;
        const py = Math.max(-24, Math.min(24, -center * speed));
        img.style.setProperty("--py", `${py.toFixed(2)}px`);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [index]);

  return (
    <div
      ref={wrapRef}
      className={`pg4-tile relative aspect-[16/9] ${visible ? "in" : ""}`}
      style={{ animationDelay: visible ? `${index * 0.15}s` : undefined }}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        width={1512}
        height={850}
        className="pg4-img select-none"
        draggable={false}
      />
      {visible && kind ? <TileOverlay kind={kind} /> : null}
    </div>
  );
}

function TileOverlay({ kind }: { kind: TileKind }) {
  switch (kind) {
    case "face":
      return (
        <div className="pg4-fx" aria-hidden>
          <div className="pg4-corner tl" />
          <div className="pg4-corner tr" />
          <div className="pg4-corner bl" />
          <div className="pg4-corner br" />
          <div className="pg4-scanline" />
        </div>
      );
    case "qr":
      return (
        <div className="pg4-fx" aria-hidden>
          <div className="pg4-qr">
            <svg viewBox="0 0 29 29" width="100%" height="100%" shapeRendering="crispEdges">
              <rect width="29" height="29" fill="#fff" />
              {[
                [0,0,7,7],[22,0,7,7],[0,22,7,7],
                [2,2,3,3],[24,2,3,3],[2,24,3,3],
                [10,0,2,2],[14,0,1,3],[18,0,2,1],
                [9,4,1,2],[12,4,2,1],[17,5,1,2],[20,4,1,2],
                [0,10,2,2],[4,10,1,2],[10,10,3,3],[15,10,2,2],[19,10,2,1],[24,11,1,2],
                [3,14,2,1],[8,14,2,2],[13,14,1,3],[17,14,2,2],[22,14,1,2],[26,14,1,1],
                [0,18,1,2],[5,18,2,1],[10,18,2,2],[15,18,1,2],[19,18,2,1],[23,18,2,2],
                [10,23,2,1],[14,22,1,3],[18,24,2,2],[22,23,1,2],
              ].map(([x,y,w,h], i) => (
                <rect key={i} x={x} y={y} width={w} height={h} fill="#000" />
              ))}
            </svg>
          </div>
        </div>
      );
    case "plate":
      return (
        <div className="pg4-fx" aria-hidden>
          <div className="pg4-plate-box">
            <span className="pg4-plate-corner tl" />
            <span className="pg4-plate-corner tr" />
            <span className="pg4-plate-corner bl" />
            <span className="pg4-plate-corner br" />
            <span className="pg4-plate-scanner" />
          </div>
        </div>
      );
    case "platepop":
      return (
        <div className="pg4-fx" aria-hidden>
          <span className="pg4-platepop">
            <span className="pg4-platepop-eu">
              <span className="pg4-platepop-stars">★★</span>
              <span>EU</span>
            </span>
            <span className="pg4-platepop-num">AB 123 CD</span>
          </span>
        </div>
      );
    case "tv":
      return (
        <div className="pg4-fx" aria-hidden>
          <span className="pg4-tv-badge">
            <span className="pg4-tv-dot" />
            Now playing
          </span>
        </div>
      );
    case "lights":
      return (
        <div className="pg4-fx" aria-hidden>
          <div className="pg4-dim" />
        </div>
      );
    case "motion":
      return (
        <div className="pg4-fx" aria-hidden>
          <div className="pg4-motion-box">
            <span className="pg4-motion-label">Motion</span>
          </div>
        </div>
      );
    case "alert":
      return (
        <div className="pg4-fx" aria-hidden>
          <div className="pg4-ping-wrap">
            <span className="pg4-ping-ring" />
            <span className="pg4-ping-dot" />
          </div>
          <span className="pg4-alert">⚠ Intrusion · Building A</span>
        </div>
      );
    default:
      return null;
  }
}

/* ============================================================
   Section 5 — Smart Living Gallery (2x2, scroll effects)
   ============================================================ */

const gallery2Tiles: { src: string; alt: string; kind: TileKind }[] = [
  { src: gallery2TvAsset.url,      alt: "Smart living room with EYECID hub",                              kind: "tv" },
  { src: gallery2PanelAsset.url,   alt: "EYECID smart home control panel and thermostat",                 kind: "lights" },
  { src: gallery2EntryAsset.url,   alt: "Outdoor security camera, keypad and modern home entrance",       kind: "motion" },
  { src: gallery2ControlAsset.url, alt: "Security operator monitoring multi-screen video wall",           kind: "alert" },
];

function ProductGallery2() {
  const reveal = useInView<HTMLDivElement>({ threshold: 0.15 });
  return (
    <section className="relative w-full overflow-hidden">
      <div
        ref={reveal.ref}
        className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full"
      >
        {gallery2Tiles.map((t, i) => (
          <GalleryTile
            key={t.src}
            src={t.src}
            alt={t.alt}
            index={i}
            visible={reveal.inView}
            kind={t.kind}
          />
        ))}
      </div>
    </section>
  );
}
