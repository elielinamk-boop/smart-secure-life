import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/talesso-logo.png.asset.json";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`inline-flex items-center ${className}`} aria-label="Talesso">
      <img src={logoAsset.url} alt="Talesso" className="h-11 md:h-14 w-auto" />
    </Link>
  );
}