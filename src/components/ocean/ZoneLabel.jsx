export default function ZoneLabel({ title, depth }) {
  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 text-white/70 
                 text-xs md:text-sm tracking-widest uppercase pointer-events-none"
      style={{
        top: `${depth * 2.5}px`,
        textShadow: "0 0 10px rgba(255,255,255,0.4)",
      }}
    >
      ─── {title} ───
    </div>
  );
}
