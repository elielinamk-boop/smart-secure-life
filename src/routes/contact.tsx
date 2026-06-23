import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
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
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <section className="mx-auto max-w-5xl px-6 pt-16 pb-24 grid md:grid-cols-2 gap-10">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Contact</p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-[-0.03em]">
            Let's build something intelligent.
          </h1>
          <p className="mt-5 text-muted-foreground">
            Tell us about your project. Our team will get back within one business day.
          </p>

          <div className="mt-8 space-y-4 text-sm">
            <a href="mailto:hello@talesso.ai" className="flex items-center gap-3 hover:text-foreground text-foreground/80">
              <span className="glass flex h-10 w-10 items-center justify-center rounded-xl"><Mail className="h-4 w-4" /></span>
              hello@talesso.ai
            </a>
            <a href="tel:+10000000000" className="flex items-center gap-3 hover:text-foreground text-foreground/80">
              <span className="glass flex h-10 w-10 items-center justify-center rounded-xl"><Phone className="h-4 w-4" /></span>
              +1 (000) 000-0000
            </a>
            <div className="flex items-center gap-3 text-foreground/80">
              <span className="glass flex h-10 w-10 items-center justify-center rounded-xl"><MapPin className="h-4 w-4" /></span>
              Global — HQ Athens, Greece
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks — we'll be in touch.");
          }}
          className="glass rounded-3xl p-6 md:p-8 space-y-4"
        >
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground">Name</label>
            <input required className="mt-1 w-full rounded-xl border border-border/70 bg-background/70 px-3 py-2 text-sm outline-none focus:border-foreground/40" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground">Email</label>
            <input type="email" required className="mt-1 w-full rounded-xl border border-border/70 bg-background/70 px-3 py-2 text-sm outline-none focus:border-foreground/40" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground">Message</label>
            <textarea rows={4} required className="mt-1 w-full rounded-xl border border-border/70 bg-background/70 px-3 py-2 text-sm outline-none focus:border-foreground/40" />
          </div>
          <button className="w-full rounded-full bg-foreground text-background py-3 text-sm font-medium hover:opacity-90 transition-opacity">
            Send message
          </button>
        </form>
      </section>
      <SiteFooter />
    </div>
  );
}