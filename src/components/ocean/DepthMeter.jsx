import { useEffect, useState } from "react";

export default function DepthMeter() {
  const [depth, setDepth] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      const ratio = window.scrollY / max;
      setDepth(Math.min(Math.round(ratio * 4000), 4000));
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-20 text-white/80">
      <div className="h-64 w-1 bg-white/30 rounded-full relative">
        <div
          className="absolute bottom-0 w-full bg-cyan-400 rounded-full"
          style={{ height: `${depth / 40}%` }}
        />
      </div>
      <p className="mt-2 text-sm">{depth} m</p>
    </div>
  );
}
