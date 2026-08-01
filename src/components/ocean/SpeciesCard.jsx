export default function SpeciesCard({ name, emoji }) {
  return (
    <div
      className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center
                    shadow-xl hover:scale-105 transition"
    >
      <div className="text-5xl">{emoji}</div>
      <p className="mt-3 text-lg font-semibold text-white">{name}</p>
    </div>
  );
}
