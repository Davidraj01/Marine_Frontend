export default function SpeciesFloat({ name, emoji }) {
  return (
    <div className="text-center animate-float">
      <div className="text-6xl drop-shadow-xl">{emoji}</div>
      <p className="mt-2 text-white/80 text-sm">{name}</p>
    </div>
  );
}
