export default function SpeciesParallax({ name, emoji, style }) {
  return (
    <div className="absolute text-center float" style={style}>
      <div className="text-6xl drop-shadow-xl">{emoji}</div>
      <p className="mt-2 text-white/80 text-sm">{name}</p>
    </div>
  );
}
