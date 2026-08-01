import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import SPECIES_DB from "../data/speciesData";

export default function SpeciesDetails() {
  const { group, speciesId } = useParams();
  const navigate = useNavigate();

  const groupData =
    SPECIES_DB[group] || SPECIES_DB[group?.replace(/s$/, "")] || null;

  const allSpecies = groupData ? Object.values(groupData.groups).flat() : [];

  const species = allSpecies.find((s) => s.id === speciesId);

  if (!species) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold">Species not found</h2>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  const statusColor =
    species.status === "Endangered"
      ? "bg-red-500"
      : species.status === "Threatened"
      ? "bg-orange-500"
      : "bg-green-500";

  return (
    <div className="min-h-screen bg-[#001f2b] text-white">
      {/* Header */}
      <div className="flex items-center gap-4 px-4 py-4 bg-[#00394d]">
        <button onClick={() => navigate(-1)}>⬅</button>
        <h1 className="text-xl font-semibold">{species.name}</h1>
      </div>

      <div className="px-6 py-8 max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl font-bold">{species.name}</h2>
          <span
            className={`px-4 py-1 rounded-full text-sm font-semibold ${statusColor}`}
          >
            {species.status}
          </span>
        </div>

        <p className="text-sm opacity-80 mb-4">{species.category}</p>

        <p className="mb-6">{species.about}</p>

        {species.whyStatusMatters && (
          <>
            <h3 className="text-xl font-semibold mb-2">
              Why this status matters
            </h3>
            <p className="mb-6 opacity-90">{species.whyStatusMatters}</p>
          </>
        )}

        {species.lifespan && (
          <>
            <h3 className="text-xl font-semibold mb-3">Lifespan Comparison</h3>

            <div className="flex gap-4 mb-6">
              <div className="bg-[#00394d] rounded-xl p-4 w-1/2">
                <p className="text-cyan-400 font-semibold">Before 2000</p>
                <p>{species.lifespan.before2000}</p>
              </div>

              <div className="bg-[#00394d] rounded-xl p-4 w-1/2">
                <p className="text-orange-400 font-semibold">After 2000</p>
                <p>{species.lifespan.after2000}</p>
              </div>
            </div>
          </>
        )}

        {species.lifespanReducedReason && (
          <>
            <h3 className="text-xl font-semibold mb-2">
              Why Lifespan Reduced?
            </h3>
            <p className="mb-8 opacity-90">{species.lifespanReducedReason}</p>
          </>
        )}

        <button
          onClick={() => navigate("/donate")}
          className="w-full max-w-3xl rounded-full bg-green-500 py-4 text-lg font-semibold text-black"
        >
           Support Conservation
        </button>
      </div>
    </div>
  );
}
