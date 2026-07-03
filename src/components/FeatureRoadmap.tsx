import { useEffect, useRef, useState } from "react";
import {
  Bluetooth,
  Radio,
  Wallet,
  Mic,
  Car,
  Video,
  QrCode,
  ScanLine,
  Building2,
  MapPin,
  Home,
  Lightbulb,
  Blinds,
  Thermometer,
  DoorClosed,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { useTranslation } from "react-i18next";

type Item = { key: string; icon: LucideIcon };

const ROW1: Item[] = [
  { key: "ble", icon: Bluetooth },
  { key: "nfc", icon: Radio },
  { key: "wallet", icon: Wallet },
  { key: "voice", icon: Mic },
  { key: "parking", icon: Car },
];
const ROW2: Item[] = [
  { key: "video", icon: Video },
  { key: "qr", icon: QrCode },
  { key: "ocr", icon: ScanLine },
  { key: "office", icon: Building2 },
  { key: "routing", icon: MapPin },
];
const ROW3: Item[] = [
  { key: "knx", icon: Home },
  { key: "lighting", icon: Lightbulb },
  { key: "blinds", icon: Blinds },
  { key: "climate", icon: Thermometer },
  { key: "door", icon: DoorClosed },
];
const ALL: Item[] = [...ROW1, ...ROW2, ...ROW3];

// column x centers (in %) and row y centers (in %) inside SVG viewBox 100x100
const COLS = [10, 30, 50, 70, 90];
const ROWS = [15, 55, 96];

function IconBubble({
  Icon,
  active,
  delay,
  playing,
}: {
  Icon: LucideIcon;
  active: boolean;
  delay: number;
  playing: boolean;
}) {
  return (
    <div
      className={`roadmap-bubble relative mx-auto h-16 w-16 md:h-[72px] md:w-[72px] transition-transform duration-[250ms] ease-out ${
        playing ? "roadmap-bubble--in" : ""
      } ${active ? "scale-[1.08]" : "group-hover:scale-[1.08]"}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/90 via-white/60 to-white/30 shadow-[inset_0_2px_6px_rgba(255,255,255,0.9),inset_0_-6px_12px_rgba(120,140,170,0.18),0_10px_30px_-14px_rgba(40,60,100,0.28)] backdrop-blur-md border border-white/70" />
      <div className="absolute left-2 top-1.5 h-3 w-5 rounded-full bg-white/70 blur-[2px]" />
      <div
        className={`roadmap-glow absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 ${
          active ? "opacity-100" : "group-hover:opacity-100"
        }`}
      />
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <Icon
          className={`h-6 w-6 md:h-7 md:w-7 transition-colors duration-[250ms] ${
            active ? "text-[#77DDFF]" : "text-foreground/40 group-hover:text-[#77DDFF]"
          }`}
          strokeWidth={1.7}
        />
      </div>
    </div>
  );
}

function Cell({
  item,
  index,
  playing,
  hovered,
  onHover,
}: {
  item: Item;
  index: number;
  playing: boolean;
  hovered: number | null;
  onHover: (i: number | null) => void;
}) {
  const { t } = useTranslation();
  const isActive = hovered === index;
  // stagger: line reveal takes ~2400ms; icons follow along
  const iconDelay = 400 + index * 160;
  const titleDelay = iconDelay + 160;
  const descDelay = iconDelay + 280;
  return (
    <div
      className="group relative flex flex-col items-center text-center px-2 transition-transform duration-300 hover:-translate-y-1"
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
    >
      <IconBubble Icon={item.icon} active={isActive} delay={iconDelay} playing={playing} />
      <h3
        className={`roadmap-text mt-5 font-display text-[15px] md:text-base font-bold tracking-tight transition-colors duration-300 ${
          playing ? "roadmap-text--in" : ""
        } ${isActive ? "text-[#77DDFF]" : ""}`}
        style={{ animationDelay: `${titleDelay}ms` }}
      >
        {t(`roadmap.items.${item.key}.title`)}
      </h3>
      <p
        className={`roadmap-text mt-2 max-w-[16ch] text-[12.5px] leading-relaxed text-foreground/55 transition-opacity duration-300 ${
          playing ? "roadmap-text--in" : ""
        } ${isActive ? "opacity-100 text-foreground/75" : ""}`}
        style={{ animationDelay: `${descDelay}ms` }}
      >
        {t(`roadmap.items.${item.key}.desc`)}
      </p>
    </div>
  );
}

export function FeatureRoadmap() {
  const { t } = useTranslation();
  const wrapRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setPlaying(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlaying(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Build serpentine path across the three rows
  const [c0, c1, c2, c3, c4] = COLS;
  const [r0, r1, r2] = ROWS;
  const pathD = [
    `M ${c0} ${r0}`,
    `L ${c4} ${r0}`,
    `C ${c4 + 8} ${r0}, ${c4 + 8} ${r1}, ${c4} ${r1}`,
    `L ${c0} ${r1}`,
    `C ${c0 - 8} ${r1}, ${c0 - 8} ${r2}, ${c0} ${r2}`,
    `L ${c4} ${r2}`,
  ].join(" ");

  return (
    <section
      ref={wrapRef}
      className="relative overflow-hidden bg-background py-24 md:py-32"
      aria-label={t("roadmap.title1")}
    >
      {/* ambient pastel gradients */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full bg-[#FFD3CE] opacity-40 blur-3xl" />
        <div className="absolute top-1/3 -right-40 h-[560px] w-[560px] rounded-full bg-[#E2E8F1] opacity-60 blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 h-[520px] w-[520px] rounded-full bg-[#FBE8E9] opacity-40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[92rem] px-6 md:px-10">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.32em] text-accent-blue/90 font-semibold">
            {t("roadmap.eyebrow")}
          </p>
          <h2 className="mt-4 font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em]">
            {t("roadmap.title1")} {t("roadmap.title2")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm md:text-base text-foreground/55">
            {t("roadmap.subtitle")}
          </p>
        </div>

        {/* Desktop roadmap */}
        <div className="relative mt-16 hidden lg:block">
          <div className="relative aspect-[16/9]">
            {/* SVG path overlay */}
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-0 h-full w-full"
              aria-hidden
            >
              <defs>
                <linearGradient id="roadmap-gradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#FFD3CE" />
                  <stop offset="25%" stopColor="#FBE8E9" />
                  <stop offset="50%" stopColor="#DDE7F5" />
                  <stop offset="75%" stopColor="#FBE8E9" />
                  <stop offset="100%" stopColor="#FFD3CE" />
                </linearGradient>
                <filter id="roadmap-soft" x="-10%" y="-10%" width="120%" height="120%">
                  <feGaussianBlur stdDeviation="0.4" />
                </filter>
              </defs>
              {/* soft glow underlay */}
              <path
                d={pathD}
                fill="none"
                stroke="url(#roadmap-gradient)"
                strokeWidth={6}
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
                filter="url(#roadmap-soft)"
                opacity={0.55}
              />
              {/* crisp line */}
              <path
                d={pathD}
                fill="none"
                stroke="url(#roadmap-gradient)"
                strokeWidth={2.6}
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            {/* Icon nodes */}
            {[ROW1, ROW2, ROW3].map((row, rIdx) =>
              row.map((item, cIdx) => {
                const index = rIdx * 5 + cIdx;
                return (
                  <div
                    key={item.key}
                    className="absolute"
                    style={{
                      left: `${COLS[cIdx]}%`,
                      top: `${ROWS[rIdx]}%`,
                      transform: "translate(-50%, -8px)",
                      width: "18%",
                    }}
                  >
                    <Cell
                      item={item}
                      index={index}
                      playing={playing}
                      hovered={hovered}
                      onHover={setHovered}
                    />
                  </div>
                );
              }),
            )}
          </div>
        </div>

        {/* Mobile / tablet fallback grid */}
        <div className="mt-14 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:hidden">
          {ALL.map((item, i) => (
            <Cell
              key={item.key}
              item={item}
              index={i}
              playing={playing}
              hovered={hovered}
              onHover={setHovered}
            />
          ))}
        </div>

        {/* Summary card */}
        <div className="mx-auto mt-16 lg:mt-64 xl:mt-72 max-w-2xl">
          <div className="relative flex items-center gap-5 rounded-3xl border border-white/70 bg-gradient-to-b from-white/80 to-white/40 p-6 md:p-7 backdrop-blur-md shadow-[0_20px_60px_-30px_rgba(0,40,120,0.2)]">
            <div className="relative h-14 w-14 shrink-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white via-white/70 to-white/30 border border-white/70 shadow-[inset_0_2px_6px_rgba(255,255,255,0.9),inset_0_-4px_10px_rgba(120,140,170,0.18)]" />
              <div className="absolute left-2 top-1 h-2 w-4 rounded-full bg-white/70 blur-[2px]" />
              <div className="relative z-10 flex h-full w-full items-center justify-center">
                <ShieldCheck className="h-6 w-6 text-[#77DDFF]" strokeWidth={1.7} />
              </div>
            </div>
            <div className="min-w-0">
              <h3 className="font-display text-lg font-bold tracking-tight">
                {t("roadmap.summary.title")}
              </h3>
              <p className="mt-1.5 text-sm text-foreground/60 leading-relaxed">
                {t("roadmap.summary.desc")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}