export default function BubbleLayer() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(30)].map((_, i) => (
        <span
          key={i}
          className="absolute bottom-0 bg-white/20 rounded-full bubble"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${6 + Math.random() * 10}px`,
            height: `${6 + Math.random() * 10}px`,
            animationDuration: `${10 + Math.random() * 8}s`,
          }}
        />
      ))}
    </div>
  );
}
