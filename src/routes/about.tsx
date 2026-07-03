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
          @keyframes au-bob {
            0%,100% { transform: translateY(0); }
            50%     { transform: translateY(-6px); }
          }
          @keyframes au-shimmer { 0%,100% { opacity:.7; } 50% { opacity:1; } }
          .au-bg { background: linear-gradient(180deg, #fafbfc 0%, #f0f4f7 40%, #e3ecf1 70%, #d3dfe6 100%); }
          .au-sea-fill { position:absolute; left:0; right:0; bottom:0; background:#3f7997; }
          .au-wave { position:absolute; left:0; width:100%; height:260px; display:block; }
          .au-wave-outer { position:absolute; left:0; right:0; width:100%; will-change: transform; transform: translateZ(0); }
          .au-bob-a { animation: au-bob 6s ease-in-out infinite; }
          .au-bob-b { animation: au-bob 8s ease-in-out infinite; animation-delay: -2s; }
          .au-bob-c { animation: au-bob 10s ease-in-out infinite; animation-delay: -4s; }
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
            <svg className="au-wave" viewBox="0 0 1440 260" preserveAspectRatio="none">
              <path fill="#7aa9c4" opacity="0.6">
                <animate attributeName="d" dur="14s" repeatCount="indefinite"
                  values="
                    M0,130 C180,90 360,170 540,130 C720,90 900,170 1080,130 C1260,90 1440,170 1440,130 L1440,260 L0,260 Z;
                    M0,130 C180,150 360,80 540,130 C720,180 900,90 1080,140 C1260,180 1440,90 1440,130 L1440,260 L0,260 Z;
                    M0,130 C180,110 360,150 540,120 C720,90 900,160 1080,125 C1260,100 1440,150 1440,130 L1440,260 L0,260 Z;
                    M0,130 C180,90 360,170 540,130 C720,90 900,170 1080,130 C1260,90 1440,170 1440,130 L1440,260 L0,260 Z" />
              </path>
            </svg>
          </div>
          <div className="au-wave-outer au-bob-b" style={{ bottom: 70, height: 260 }}>
            <svg className="au-wave" viewBox="0 0 1440 260" preserveAspectRatio="none">
              <path fill="#5d92ae" opacity="0.8">
                <animate attributeName="d" dur="11s" repeatCount="indefinite"
                  values="
                    M0,120 C180,170 360,70 540,120 C720,170 900,70 1080,120 C1260,170 1440,70 1440,120 L1440,260 L0,260 Z;
                    M0,120 C180,80 360,180 540,125 C720,70 900,175 1080,115 C1260,80 1440,180 1440,120 L1440,260 L0,260 Z;
                    M0,120 C180,140 360,90 540,130 C720,160 900,80 1080,125 C1260,150 1440,90 1440,120 L1440,260 L0,260 Z;
                    M0,120 C180,170 360,70 540,120 C720,170 900,70 1080,120 C1260,170 1440,70 1440,120 L1440,260 L0,260 Z" />
              </path>
            </svg>
          </div>
          <div className="au-wave-outer au-bob-a" style={{ bottom: 0, height: 260 }}>
            <svg className="au-wave au-shimmer" viewBox="0 0 1440 260" preserveAspectRatio="none">
              <path fill="#3f7997">
                <animate attributeName="d" dur="9s" repeatCount="indefinite"
                  values="
                    M0,150 C180,100 360,200 540,150 C720,100 900,200 1080,150 C1260,100 1440,200 1440,150 L1440,260 L0,260 Z;
                    M0,150 C180,190 360,110 540,155 C720,200 900,110 1080,145 C1260,190 1440,110 1440,150 L1440,260 L0,260 Z;
                    M0,150 C180,130 360,170 540,140 C720,110 900,190 1080,155 C1260,130 1440,180 1440,150 L1440,260 L0,260 Z;
                    M0,150 C180,100 360,200 540,150 C720,100 900,200 1080,150 C1260,100 1440,200 1440,150 L1440,260 L0,260 Z" />
              </path>
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