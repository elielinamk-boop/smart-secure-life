import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ScanFace, MessageSquare, Send } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

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
      <SiteFooter />
    </div>
  );
}