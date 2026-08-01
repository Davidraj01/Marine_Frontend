import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import SPECIES_DB from "../data/speciesData";

export default function MarineGroupPage() {
  const { group } = useParams();

  const data = useMemo(() => {
    return SPECIES_DB[group] || SPECIES_DB[group?.replace(/s$/, "")] || null;
  }, [group]);

  if (!data) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-3xl font-bold">Group Not Found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-[#013d4b]">{data.title}</h1>
      <p className="text-gray-600 mt-2 mb-8">{data.subtitle}</p>

      {Object.entries(data.groups).map(([status, speciesList]) => {
        if (!speciesList.length) return null;

        return (
          <div key={status} className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">{status}</h2>

            <div className="space-y-4">
              {speciesList.map((sp) => (
                <Link
                  key={sp.id}
                  to={`/marine-life/${group}/${sp.id}`}
                  className="block"
                >
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-[#001f2b] text-white hover:bg-[#00394d] transition">
                    <img
                      src={sp.image}
                      alt={sp.name}
                      className="w-20 h-20 rounded-lg object-cover"
                    />

                    <div className="flex-1">
                      <h3 className="text-lg font-bold">{sp.name}</h3>
                      <p className="text-sm opacity-80 line-clamp-2">
                        {sp.about}
                      </p>
                    </div>

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        status === "Least Concern"
                          ? "bg-green-600"
                          : status === "Endangered"
                          ? "bg-red-600"
                          : "bg-orange-500"
                      }`}
                    >
                      {status}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
