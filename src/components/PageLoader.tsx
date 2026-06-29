import { useEffect, useState } from "react";
import logoAsset from "@/assets/talesso-logo.png.asset.json";

export function PageLoader() {
  const [done, setDone] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setDone(true), 1100);
    const t2 = setTimeout(() => setHide(true), 1900);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (hide) return null;
  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-700 ${done ? "opacity-0" : "opacity-100"}`}
      aria-hidden
    >
      <img
        src={logoAsset.url}
        alt=""
        className="h-14 md:h-16 w-auto animate-fade-in"
        style={{ animationDuration: "600ms" }}
      />
      <div className="mt-8 h-[2px] w-44 overflow-hidden rounded-full bg-foreground/10">
        <div
          className="h-full bg-gradient-to-r from-[#77DDFF] via-[#1e6bff] to-[#c8102e]"
          style={{
            animation: "loader-fill 1100ms cubic-bezier(0.22,1,0.36,1) forwards",
            transformOrigin: "left center",
          }}
        />
      </div>
      <style>{`@keyframes loader-fill { from { transform: scaleX(0); } to { transform: scaleX(1); } }`}</style>
    </div>
  );
}