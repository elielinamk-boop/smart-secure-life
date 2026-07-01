import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Sparkles, Cpu, Settings, MessageSquare } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Talesso" },
      { name: "description", content: "Talesso builds AI-powered smart access, automation and analytics for modern buildings." },
      { property: "og:title", content: "About — Talesso" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const cards = [
    { Icon: Sparkles, label: "Proven Smart Home & Biometric Projects" },
    { Icon: Cpu, label: "Own Software — Full Stack Control" },
    { Icon: Settings, label: "Full Cycle: Design to Service" },
    { Icon: MessageSquare, label: "AI Differentiation: LLM on Terminals" },
  ];
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <section id="about" className="relative py-24 md:py-32 overflow-hidden">
        <style>{`
          @keyframes au-wave-a { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          @keyframes au-wave-b { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
          @keyframes au-shimmer { 0%,100% { opacity:.7; } 50% { opacity:1; } }
          .au-bg { background: linear-gradient(180deg, #fafbfc 0%, #f0f4f7 40%, #e3ecf1 70%, #d3dfe6 100%); }
          .au-sea-fill { position:absolute; left:0; right:0; bottom:0; background:#3f7997; }
          .au-wave { position:absolute; left:0; width:200%; height:260px; will-change: transform; }
          .au-wave-a { animation: au-wave-a 9s linear infinite; }
          .au-wave-b { animation: au-wave-b 13s linear infinite; opacity:.8; }
          .au-wave-c { animation: au-wave-a 17s linear infinite; opacity:.6; }
          .au-shimmer { animation: au-shimmer 3s ease-in-out infinite; }
          .au-icon-wrap { background: linear-gradient(135deg, rgba(255,255,255,0.9), rgba(226,232,240,0.7)); transition: background .35s ease, box-shadow .35s ease; }
          .au-icon-wrap svg { color: #94a3b8; transition: color .35s ease, transform .35s ease; }
          .au-card:hover .au-icon-wrap { background: linear-gradient(135deg, rgba(255,255,255,0.95), rgba(119,221,255,0.55)); box-shadow: inset 0 1px 0 rgba(255,255,255,0.9), 0 14px 30px -12px rgba(119,221,255,0.6); }
          .au-card:hover .au-icon-wrap svg { color: #77DDFF; transform: scale(1.08); }
        `}</style>

        <div className="absolute inset-0 au-bg" aria-hidden />
        <div className="absolute inset-x-0 bottom-0 h-[85%] overflow-hidden" aria-hidden>
          <div className="au-sea-fill" style={{ height: 180 }} />
          <svg className="au-wave au-wave-c" style={{ bottom: 160 }} viewBox="0 0 2880 260" preserveAspectRatio="none">
            <path d="M0,130 C240,40 480,220 720,130 C960,40 1200,220 1440,130 C1680,40 1920,220 2160,130 C2400,40 2640,220 2880,130 L2880,260 L0,260 Z" fill="#7aa9c4" />
          </svg>
          <svg className="au-wave au-wave-b" style={{ bottom: 70 }} viewBox="0 0 2880 260" preserveAspectRatio="none">
            <path d="M0,120 C240,200 480,40 720,120 C960,200 1200,40 1440,120 C1680,200 1920,40 2160,120 C2400,200 2640,40 2880,120 L2880,260 L0,260 Z" fill="#5d92ae" />
          </svg>
          <svg className="au-wave au-wave-a au-shimmer" style={{ bottom: 0 }} viewBox="0 0 2880 260" preserveAspectRatio="none">
            <path d="M0,150 C240,60 480,240 720,150 C960,60 1200,240 1440,150 C1680,60 1920,240 2160,150 C2400,60 2640,240 2880,150 L2880,260 L0,260 Z" fill="#3f7997" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 bg-white/55 backdrop-blur-md border border-white/60 rounded-3xl p-8 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.25)] text-[15px] leading-relaxed text-slate-700 space-y-4">
            <p>Founded as a small company specializing in biometric access systems, we have grown into a comprehensive technology ecosystem encompassing access control, intelligent management platforms, AI-driven solutions, automation, and smart environments.</p>
            <p>Based in the heart of the Mediterranean, Cyprus, we design and develop our own products with a clear mission: to create technology that makes everyday life simpler, safer, and more connected.</p>
            <p>We believe that our environment affects how we feel, what we wish and what we think about. So we decided to design and develop technology that transforms the way people interact with their spaces.</p>
            <p>By seamlessly integrating technology into homes, workplaces, and commercial environments, we create intelligent spaces that work for people.</p>
            <p>At the core of everything we build is a commitment to improving the way people experience their environment —</p>
            <p className="font-semibold text-slate-900">one smart solution at a time.</p>
          </div>

          <div className="lg:col-span-7">
            <h1 className="font-display text-5xl md:text-6xl font-bold tracking-[-0.03em] text-center lg:text-left text-slate-900">About Us</h1>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
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