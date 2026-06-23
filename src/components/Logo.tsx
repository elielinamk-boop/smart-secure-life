import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`inline-flex items-baseline font-serif tracking-[0.04em] text-foreground ${className}`}>
      <span className="text-[1.75rem] md:text-[2rem] leading-none font-medium">TAL</span>
      <span
        aria-hidden
        className="mx-[2px] inline-flex h-[1.55rem] w-[1.55rem] md:h-[1.75rem] md:w-[1.75rem] items-center justify-center rounded-[3px] text-white font-medium text-[1.05rem] md:text-[1.2rem] translate-y-[2px]"
        style={{
          background: "linear-gradient(180deg,#9ec5ff 0%, #1e6bff 55%, #0a2a8c 100%)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.45), 0 2px 6px rgba(10,42,140,0.35)",
        }}
      >
        E
      </span>
      <span className="text-[1.75rem] md:text-[2rem] leading-none font-medium">SSO</span>
    </Link>
  );
}