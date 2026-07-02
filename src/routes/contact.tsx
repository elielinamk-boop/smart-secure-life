import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import { ScanFace, MessageSquare, Send, MapPin, Phone, Mail, Clock, Maximize2, Navigation } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import logoAsset from "@/assets/talesso-logo.png";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: i18n.t("meta.contact.title") },
      { name: "description", content: i18n.t("meta.contact.description") },
      { property: "og:title", content: i18n.t("meta.contact.ogTitle") },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <section id="contact" className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <div className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-5">{t("contactPage.eyebrow")}</div>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-[-0.03em] leading-[1.05]">
              {t("contactPage.title1")}<br className="hidden md:block" /> {t("contactPage.title2")}
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">{t("contactPage.subtitle")}</p>
          </div>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="lg:col-span-2 relative rounded-3xl p-8 border border-white/60 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.25)]"
              style={{ background: "linear-gradient(135deg, rgba(190,219,238,0.55), rgba(255,225,210,0.45))" }}
            >
              {[
                { id: "name", placeholder: t("contactPage.form.name"), Icon: ScanFace, type: "text" },
                { id: "email", placeholder: t("contactPage.form.email"), Icon: MessageSquare, type: "email" },
                { id: "phone", placeholder: t("contactPage.form.phone"), Icon: Send, type: "tel" },
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
                <textarea name="message" placeholder={t("contactPage.form.message")} rows={4} className="bg-transparent outline-none flex-1 resize-none text-slate-700 placeholder:text-slate-400" />
              </div>
              <button
                type="submit"
                className="w-full rounded-full py-4 font-medium text-slate-900 border border-sky-200 transition hover:shadow-[0_18px_40px_-18px_rgba(119,221,255,0.7)]"
                style={{ background: "linear-gradient(90deg, rgba(190,219,238,0.7), rgba(255,225,210,0.6))" }}
              >
                {submitted ? t("contactPage.form.sent") : t("contactPage.form.send")}
              </button>
            </form>

            <div className="space-y-7 text-slate-700">
              <h3 className="font-semibold text-slate-900 text-lg">{t("contactPage.info.heading")}</h3>
              <div>
                <div className="font-semibold text-slate-900">{t("contactPage.info.email")}</div>
                <a href="mailto:Sales@Talesso.tech" className="text-[#3aa9e6] hover:underline">Sales@Talesso.tech</a>
              </div>
              <div>
                <div className="font-semibold text-slate-900">{t("contactPage.info.phone")}</div>
                <div>+357 97 879 940</div>
              </div>
              <div>
                <div className="font-semibold text-slate-900">{t("contactPage.info.address")}</div>
                <div>{t("contactPage.info.addressValue")}</div>
              </div>
              <div>
                <div className="font-semibold text-slate-900">{t("contactPage.info.company")}</div>
                <div>{t("contactPage.info.companyValue")}</div>
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

const ADDRESS =
  "Georgiou A', Germasogeia 4046, Γεωρ. Α', Γερμασόγεια 4046, Limassol, Cyprus";
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS)}`;
const LAT = 34.70005;
const LNG = 33.10175;

function LocationSection() {
  const { t } = useTranslation();
  const mapRef = useRef<HTMLDivElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [cardOpen, setCardOpen] = useState(true);

  useEffect(() => {
    let map: any;
    let cancelled = false;
    (async () => {
      const [
        { Map: OLMap, View, Overlay },
        { default: TileLayer },
        { default: OSM },
        { fromLonLat },
        { defaults: defaultControls, Zoom },
      ] = await Promise.all([
        import("ol"),
        import("ol/layer/Tile"),
        import("ol/source/OSM"),
        import("ol/proj"),
        import("ol/control"),
      ]);
      await import("ol/ol.css");
      if (cancelled || !mapRef.current) return;

      const center = fromLonLat([LNG, LAT]);

      map = new OLMap({
        target: mapRef.current,
        layers: [
          new TileLayer({
            source: new OSM({
              url: "https://{a-c}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
              attributions:
                '© <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors, © <a href="https://carto.com/attributions" target="_blank" rel="noopener">CARTO</a>',
              crossOrigin: "anonymous",
            }),
          }),
        ],
        view: new View({
          center,
          zoom: 17,
          minZoom: 3,
          maxZoom: 19,
          constrainResolution: true,
          smoothResolutionConstraint: true,
        }),
        controls: defaultControls({ zoom: false, rotate: false }).extend([
          new Zoom({ className: "talesso-ol-zoom" }),
        ]),
      });

      const el = document.createElement("div");
      el.className = "talesso-pin-wrap";
      el.innerHTML = `
        <div class="talesso-pin">
          <div class="talesso-pin-ring"></div>
          <div class="talesso-pin-body">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>
          </div>
          <div class="talesso-pin-stem"></div>
        </div>`;
      el.addEventListener("click", () => setCardOpen((v) => !v));
      const overlay = new Overlay({
        element: el,
        position: center,
        positioning: "bottom-center",
        stopEvent: false,
      });
      map.addOverlay(overlay);
    })();
    return () => {
      cancelled = true;
      if (map) map.setTarget(undefined);
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
        .ol-viewport canvas { outline: none; }
        .talesso-ol-zoom { top: auto !important; bottom: 16px; left: 16px; display: flex; flex-direction: column; gap: 4px; background: transparent !important; }
        .talesso-ol-zoom button { display: block; width: 34px; height: 34px; margin: 0; border: 1px solid rgba(15,23,42,.08); background: #fff; color: #0f172a; font-size: 18px; line-height: 32px; border-radius: 10px; box-shadow: 0 4px 12px -6px rgba(15,23,42,.25); cursor: pointer; transition: background .2s; }
        .talesso-ol-zoom button:hover { background: #f1f5f9; }
        .ol-attribution { background: rgba(255,255,255,.75) !important; border-radius: 6px !important; font-size: 10px !important; padding: 2px 6px !important; bottom: 4px !important; right: 4px !important; }
        .ol-attribution ul { color: #475569; }
        .ol-attribution a { color: #0f172a; }
      `}</style>
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-10">
          <div className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">{t("contactPage.location.eyebrow")}</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-[-0.03em]">{t("contactPage.location.title")}</h2>
          <p className="mt-3 text-muted-foreground">{t("contactPage.location.subtitle")}</p>
        </div>

        <div
          ref={wrapRef}
          className="group relative rounded-[32px] overflow-hidden border border-white/60 bg-white/60 backdrop-blur-xl shadow-[0_30px_80px_-40px_rgba(15,23,42,0.35)] transition-shadow duration-500 hover:shadow-[0_50px_120px_-40px_rgba(15,23,42,0.5)]"
        >
          <div ref={mapRef} className="w-full h-[520px] md:h-[600px]" />

          {/* Top-right controls */}
          <div className="absolute top-4 right-4 z-[500] flex gap-2">
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur px-4 py-2 text-sm text-slate-800 shadow-lg border border-white/70 hover:bg-white transition"
            >
              <Navigation className="w-4 h-4" /> {t("contactPage.location.directions")}
            </a>
            <button
              onClick={openFullscreen}
              className="inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur px-4 py-2 text-sm text-slate-800 shadow-lg border border-white/70 hover:bg-white transition"
            >
              <Maximize2 className="w-4 h-4" /> {t("contactPage.location.fullscreen")}
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
                  aria-label={t("common.close")}
                  onClick={() => setCardOpen(false)}
                  className="ml-auto text-slate-400 hover:text-slate-700 transition text-lg leading-none"
                >×</button>
              </div>
              <div className="text-lg font-semibold text-slate-900">{t("contactPage.location.brand")}</div>
              <div className="text-sm text-slate-500 mb-4">{t("contactPage.location.brandSub")}</div>
              <div className="space-y-3 text-sm text-slate-700">
                <div className="flex items-start gap-3"><MapPin className="w-4 h-4 mt-0.5 text-[#3aa9e6]" /><span>{t("contactPage.location.addressLine1")}<br/>{t("contactPage.location.addressLine2")}</span></div>
                <div className="flex items-start gap-3"><Clock className="w-4 h-4 mt-0.5 text-[#3aa9e6]" /><span>{t("contactPage.location.hours")}</span></div>
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