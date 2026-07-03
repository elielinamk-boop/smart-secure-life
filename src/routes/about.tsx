import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Sparkles, Cpu, Settings, MessageSquare } from "lucide-react";
import i18n from "@/i18n";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: i18n.t("meta.about.title") },
      { name: "description", content: i18n.t("meta.about.description") },
      { property: "og:title", content: i18n.t("meta.about.ogTitle") },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useTranslation();
  const cards = [
    { Icon: Sparkles, label: t("aboutPage.cards.c1") },
    { Icon: Cpu, label: t("aboutPage.cards.c2") },
    { Icon: Settings, label: t("aboutPage.cards.c3") },
    { Icon: MessageSquare, label: t("aboutPage.cards.c4") },
  ];
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <section id="about" className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
        <style>{`
          @keyframes au-wave-a {
            0%   { transform: translate3d(0, 0, 0) scaleY(1); }
            25%  { transform: translate3d(-12.5%, -8px, 0) scaleY(1.05); }
            50%  { transform: translate3d(-25%, 0, 0) scaleY(0.96); }
            75%  { transform: translate3d(-37.5%, 6px, 0) scaleY(1.04); }
            100% { transform: translate3d(-50%, 0, 0) scaleY(1); }
          }
          @keyframes au-wave-b {
            0%   { transform: translate3d(-50%, 0, 0) scaleY(1); }
            25%  { transform: translate3d(-37.5%, 7px, 0) scaleY(0.95); }
            50%  { transform: translate3d(-25%, 0, 0) scaleY(1.06); }
            75%  { transform: translate3d(-12.5%, -6px, 0) scaleY(0.97); }
            100% { transform: translate3d(0, 0, 0) scaleY(1); }
          }
          @keyframes au-bob {
            0%,100% { transform: translateY(0); }
            50%     { transform: translateY(-10px); }
          }
          @keyframes au-shimmer { 0%,100% { opacity:.7; } 50% { opacity:1; } }
          .au-bg { background: linear-gradient(180deg, #fafbfc 0%, #f0f4f7 40%, #e3ecf1 70%, #d3dfe6 100%); }
          .au-sea-fill { position:absolute; left:0; right:0; bottom:0; background:#3f7997; }
          .au-wave { position:absolute; left:0; width:200%; height:260px; will-change: transform; transform-origin: 50% 100%; }
          .au-wave-outer { position:absolute; left:0; right:0; width:100%; will-change: transform; }
          .au-bob-a { animation: au-bob 5s ease-in-out infinite; }
          .au-bob-b { animation: au-bob 7s ease-in-out infinite; animation-delay: -1.5s; }
          .au-bob-c { animation: au-bob 9s ease-in-out infinite; animation-delay: -3s; }
          .au-wave-a { animation: au-wave-a 10s ease-in-out infinite; }
          .au-wave-b { animation: au-wave-b 14s ease-in-out infinite; opacity:.8; }
          .au-wave-c { animation: au-wave-a 18s ease-in-out infinite; opacity:.6; }
          .au-shimmer { animation: au-shimmer 3s ease-in-out infinite; }
          .au-icon-wrap { background: linear-gradient(135deg, rgba(255,255,255,0.9), rgba(226,232,240,0.7)); transition: background .35s ease, box-shadow .35s ease; }
          .au-icon-wrap svg { color: #94a3b8; transition: color .35s ease, transform .35s ease; }
          .au-card:hover .au-icon-wrap { background: linear-gradient(135deg, rgba(255,255,255,0.95), rgba(119,221,255,0.55)); box-shadow: inset 0 1px 0 rgba(255,255,255,0.9), 0 14px 30px -12px rgba(119,221,255,0.6); }
          .au-card:hover .au-icon-wrap svg { color: #77DDFF; transform: scale(1.08); }
        `}</style>

        <div className="absolute inset-0 au-bg" aria-hidden />
        <div className="absolute inset-x-0 bottom-0 h-[85%] overflow-hidden" aria-hidden>
          <div className="au-sea-fill" style={{ height: 180 }} />
          <div className="au-wave-outer au-bob-c" style={{ bottom: 160, height: 260 }}>
            <svg className="au-wave au-wave-c" viewBox="0 0 2880 260" preserveAspectRatio="none">
              <path d="M0,130 C240,40 480,220 720,130 C960,40 1200,220 1440,130 C1680,40 1920,220 2160,130 C2400,40 2640,220 2880,130 L2880,260 L0,260 Z" fill="#7aa9c4" />
            </svg>
          </div>
          <div className="au-wave-outer au-bob-b" style={{ bottom: 70, height: 260 }}>
            <svg className="au-wave au-wave-b" viewBox="0 0 2880 260" preserveAspectRatio="none">
              <path d="M0,120 C240,200 480,40 720,120 C960,200 1200,40 1440,120 C1680,200 1920,40 2160,120 C2400,200 2640,40 2880,120 L2880,260 L0,260 Z" fill="#5d92ae" />
            </svg>
          </div>
          <div className="au-wave-outer au-bob-a" style={{ bottom: 0, height: 260 }}>
            <svg className="au-wave au-wave-a au-shimmer" viewBox="0 0 2880 260" preserveAspectRatio="none">
              <path d="M0,150 C240,60 480,240 720,150 C960,60 1200,240 1440,150 C1680,60 1920,240 2160,150 C2400,60 2640,240 2880,150 L2880,260 L0,260 Z" fill="#3f7997" />
            </svg>
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-start">
          <div className="order-2 lg:order-1 lg:col-span-5 bg-white/55 backdrop-blur-md border border-white/60 rounded-3xl p-6 sm:p-8 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.25)] text-[15px] leading-relaxed text-slate-700 space-y-4">
            <p>{t("aboutPage.p1")}</p>
            <p>{t("aboutPage.p2")}</p>
            <p>{t("aboutPage.p3")}</p>
            <p>{t("aboutPage.p4")}</p>
            <p>{t("aboutPage.p5")}</p>
            <p className="font-semibold text-slate-900">{t("aboutPage.p6")}</p>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-7">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.03em] text-center lg:text-start text-slate-900">{t("aboutPage.title")}</h1>
            <div className="mt-8 md:mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {cards.map(({ Icon, label }, i) => (
                <div key={i} className="au-card group relative bg-white/70 backdrop-blur-md rounded-2xl border border-white/70 shadow-[0_18px_40px_-22px_rgba(15,23,42,0.25)] p-5 flex flex-col items-center text-center min-h-[180px] transition-transform hover:-translate-y-1">
                  <div
                    className="au-icon-wrap w-14 h-14 rounded-full flex items-center justify-center mb-4 border"
                    style={{
                      borderColor: "rgba(255,255,255,0.8)",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.9), 0 10px 24px -12px rgba(15,23,42,0.25)",
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-sm text-slate-700 leading-snug">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}