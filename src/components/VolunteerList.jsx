import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

export default function VolunteerList() {
  const [volunteers, setVolunteers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    const q = query(collection(db, "volunteers"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setVolunteers(list);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const showMore = () =>
    setVisibleCount((prev) => Math.min(prev + 8, volunteers.length));
  const showLess = () => setVisibleCount(8);

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center py-32 bg-[#000d11]">
        <div className="w-16 h-1 w-32 bg-cyan-950 rounded-full overflow-hidden">
          <div className="w-full h-full bg-cyan-400 animate-[loading_1.5s_infinite]"></div>
        </div>
        <p className="text-cyan-500/50 mt-4 text-[10px] font-black tracking-[0.5em] uppercase">
          Synchronizing Data
        </p>
      </div>
    );

  return (
    <div className="w-full py-20 px-6 bg-[#000d11] relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              GLOBAL <span className="text-cyan-400">NETWORK</span>
            </h2>
            <p className="text-gray-500 mt-4 font-medium tracking-wide">
              {volunteers.length} Active Operatives protecting marine
              ecosystems.
            </p>
          </div>
          <div className="h-[2px] flex-grow mx-8 bg-gradient-to-r from-cyan-500/50 to-transparent hidden md:block mb-4"></div>
        </header>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {volunteers.slice(0, visibleCount).map((vol) => (
            <div
              key={vol.id}
              className="group relative h-[320px] rounded-2xl bg-[#01161d] border border-white/5 hover:border-cyan-500/40 transition-all duration-500 overflow-hidden shadow-2xl"
            >
              {/* Image Container */}
              <div className="absolute inset-0 w-full h-full transform group-hover:scale-105 transition-transform duration-700">
                {vol.imageUrl ? (
                  <img
                    src={vol.imageUrl}
                    alt={vol.name}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100"
                  />
                ) : (
                  <div className="w-full h-full bg-cyan-950/30 flex items-center justify-center text-5xl font-black text-white/5 uppercase">
                    {vol.name?.charAt(0)}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#000d11] via-[#000d11]/20 to-transparent"></div>
              </div>

              {/* Minimal Info */}
              <div className="absolute inset-x-0 bottom-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]"></div>
                  <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">
                    {vol.role || "Guardian"}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white truncate">
                  {vol.name || "Anonymous"}
                </h3>
                <p className="text-gray-400 text-[10px] font-semibold tracking-wider mt-1">
                  {vol.country || "Global Sector"}
                </p>

                <div className="mt-4 pt-4 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-cyan-500/60 font-mono text-[9px]">
                    ID // {vol.volunteerId || "VERIFIED"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Controls */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
          {visibleCount < volunteers.length && (
            <button
              onClick={showMore}
              className="w-full sm:w-auto px-10 py-4 bg-cyan-500 text-[#000d11] font-black text-xs tracking-[0.2em] rounded-xl hover:bg-white transition-all active:scale-95"
            >
              EXPAND ROSTER
            </button>
          )}

          {visibleCount > 8 && (
            <button
              onClick={showLess}
              className="w-full sm:w-auto px-10 py-4 bg-transparent border border-white/10 text-white font-black text-xs tracking-[0.2em] rounded-xl hover:bg-white/5 transition-all active:scale-95"
            >
              RETRACT
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
