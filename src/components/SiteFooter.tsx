import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 mt-12">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <Logo className="!text-xl" />
        <p>© {new Date().getFullYear()} Talesso. All rights reserved.</p>
      </div>
    </footer>
  );
}