import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { ScanFace, MessageSquare, Send, MapPin, Phone, Mail, Clock, Maximize2 } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import logoAsset from "@/assets/talesso-logo.png";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Talesso" },
      { name: "description", content: "Get in touch with the Talesso team to design the AI stack for your building." },
      { property: "og:title", content: "Contact — Talesso" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
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
      <LocationSection />
      <SiteFooter />
    </div>
  );
}

const ADDRESS = "Georgiou A', Germasogeia 4046, Γεωρ. Α', Γερμασόγεια 4046, Limassol, Cyprus";
const LAT = 34.69955;
const LNG = 33.10035;

function LocationSection() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [cardOpen, setCardOpen] = useState(true);

  useEffect(() => {
    let map: any;
    let cancelled = false;
    (async () => {
      const L = (await import("leaflet")).default;
      await import("leaflet/dist/leaflet.css");
      if (cancelled || !mapRef.current) return;

      map = L.map(mapRef.current, {
        center: [LAT, LNG],
        zoom: 16,
        zoomControl: true,
        scrollWheelZoom: false,
      });

      L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
        attribution: '&copy; OpenStreetMap &copy; CARTO',
        maxZoom: 20,
      }).addTo(map);

      const pinHTML = `
        <div class="talesso-pin">
          <div class="talesso-pin-ring"></div>
          <div class="talesso-pin-body">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>
          </div>
          <div class="talesso-pin-stem"></div>
        </div>`;
      const icon = L.divIcon({
        className: "talesso-pin-wrap",
        html: pinHTML,
        iconSize: [44, 56],
        iconAnchor: [22, 54],
      });
      const marker = L.marker([LAT, LNG], { icon }).addTo(map);
      marker.on("click", () => setCardOpen((v) => !v));
    })();
    return () => {
      cancelled = true;
      if (map) map.remove();
    };
  }, []);

  const openFullscreen = () => {
    const el = wrapRef.current;
    if (!el) return;
    if (document.fullscreenElement) document.exitFullscreen();
    else el.requestFullscreen?.();
  };

  return (
    <section className="relative pb-24 md:pb-32">
      <style>{`
        .talesso-pin-wrap { background: transparent !important; border: none !important; }
        .talesso-pin { position: relative; width: 44px; height: 56px; cursor: pointer; transition: transform .3s cubic-bezier(.34,1.56,.64,1); }
        .talesso-pin:hover { animation: talesso-bounce 1s ease-in-out infinite; }
        .talesso-pin-body { position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 40px; height: 40px; border-radius: 50%; background: linear-gradient(135deg, #0f172a, #1e293b); display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 24px -8px rgba(15,23,42,.55), 0 0 0 3px rgba(255,255,255,.9); }
        .talesso-pin-stem { position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); width: 3px; height: 18px; background: linear-gradient(180deg, #1e293b, rgba(30,41,59,0)); border-radius: 2px; }
        .talesso-pin-ring { position: absolute; top: 6px; left: 50%; transform: translateX(-50%); width: 28px; height: 28px; border-radius: 50%; background: rgba(58,169,230,.35); animation: talesso-pulse 2.2s ease-out infinite; }
        @keyframes talesso-pulse { 0% { transform: translateX(-50%) scale(.6); opacity: .8; } 100% { transform: translateX(-50%) scale(2.4); opacity: 0; } }
        @keyframes talesso-bounce { 0%,100% { transform: translateY(0);} 50% { transform: translateY(-6px);} }
        .leaflet-container { font-family: inherit; background: #eef2f7; }
        .leaflet-control-zoom a { border-radius: 10px !important; color: #0f172a !important; border: 1px solid rgba(15,23,42,.08) !important; box-shadow: 0 4px 12px -6px rgba(15,23,42,.2); }
        .leaflet-control-zoom { border: none !important; margin: 14px !important; }
        .leaflet-control-attribution { font-size: 10px; background: rgba(255,255,255,.7) !important; border-radius: 6px; }
      `}</style>
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-10">
          <div className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">Our Location</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-[-0.03em]">Come say hello.</h2>
          <p className="mt-3 text-muted-foreground">Zephyr Residences — Georgiou A', Germasogeia 4046, Limassol, Cyprus.</p>
        </div>

        <div
          ref={wrapRef}
          className="group relative rounded-[32px] overflow-hidden border border-white/60 bg-white/60 backdrop-blur-xl shadow-[0_30px_80px_-40px_rgba(15,23,42,0.35)] transition-shadow duration-500 hover:shadow-[0_50px_120px_-40px_rgba(15,23,42,0.5)]"
        >
          <div ref={mapRef} className="w-full h-[520px] md:h-[600px]" />

          {/* Top-right controls */}
          <div className="absolute top-4 right-4 z-[500] flex gap-2">
            <button
              onClick={openFullscreen}
              className="inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur px-4 py-2 text-sm text-slate-800 shadow-lg border border-white/70 hover:bg-white transition"
            >
              <Maximize2 className="w-4 h-4" /> Fullscreen
            </button>
          </div>

          {/* Info card */}
          <div
            className={`absolute z-[500] left-4 right-4 md:left-6 md:right-auto md:top-6 md:w-[360px] bottom-4 md:bottom-auto transition-all duration-500 ${cardOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-2 pointer-events-none"}`}
          >
            <div className="rounded-2xl bg-white/95 backdrop-blur-xl border border-white/70 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.35)] p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-20px_rgba(15,23,42,0.45)]">
              <div className="flex items-center gap-3 mb-4">
                <img src={logoAsset} alt="Talesso" className="h-8 w-auto" />
                <button
                  aria-label="Close"
                  onClick={() => setCardOpen(false)}
                  className="ml-auto text-slate-400 hover:text-slate-700 transition text-lg leading-none"
                >×</button>
              </div>
              <div className="text-lg font-semibold text-slate-900">Talesso ltd</div>
              <div className="text-sm text-slate-500 mb-4">Zephyr Residences</div>
              <div className="space-y-3 text-sm text-slate-700">
                <div className="flex items-start gap-3"><MapPin className="w-4 h-4 mt-0.5 text-[#3aa9e6]" /><span>Georgiou A', Germasogeia 4046<br/>Limassol, Cyprus</span></div>
                <div className="flex items-start gap-3"><Clock className="w-4 h-4 mt-0.5 text-[#3aa9e6]" /><span>Mon – Fri · 9:00 – 18:00</span></div>
                <div className="flex items-start gap-3"><Phone className="w-4 h-4 mt-0.5 text-[#3aa9e6]" /><a href="tel:+35797879940" className="hover:text-slate-900">+357 97 879 940</a></div>
                <div className="flex items-start gap-3"><Mail className="w-4 h-4 mt-0.5 text-[#3aa9e6]" /><a href="mailto:Sales@Talesso.tech" className="hover:text-slate-900">Sales@Talesso.tech</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}