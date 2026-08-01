import { Link } from "react-router-dom";
import oceanCountries from "../data/oceanCountries";

export default function CountriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-900 via-sky-700 to-sky-500 text-white px-4 py-8">
      {/* Main Layout Container */}
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
        {/* ================= LEFT COLUMN: FACTS (Independently Scrollable) ================= */}
        <aside className="lg:col-span-4 xl:col-span-3 lg:sticky lg:top-6 lg:h-[calc(100vh-3rem)] lg:overflow-y-auto space-y-6 pr-2 scrollbar-thin scrollbar-thumb-sky-400 scrollbar-track-transparent">
          {/* Section Header */}
          <div className="text-left space-y-3 mb-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg leading-tight">
              Marine Biodiversity &<br />{" "}
              <span className="text-cyan-300">Ocean Facts</span>
            </h1>
            <p className="text-sky-100 text-sm leading-relaxed opacity-90">
              Marine biodiversity includes all living organisms in the ocean
              from tiny plankton to massive whales. Oceans regulate climate,
              produce oxygen, and support human life.
            </p>
          </div>

          {/* Card 1: Ocean Coverage */}
          <div className="bg-sky-800/40 backdrop-blur-md border border-sky-400/30 rounded-2xl p-5 shadow-xl">
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-cyan-200">
              🌐 Ocean Coverage
            </h3>
            <ul className="space-y-2 text-sky-50 text-sm font-medium">
              <li className="flex items-center gap-3">
                <span className="text-xl">🌊</span> Pacific Ocean – 46%
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl">🌊</span> Atlantic Ocean – 23%
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl">🌊</span> Indian Ocean – 20%
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl">🌊</span> Southern Ocean – 6%
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl">🌊</span> Arctic Ocean – 5%
              </li>
            </ul>
            <div className="mt-4 pt-3 border-t border-sky-500/30 flex items-start gap-2 text-sky-200 text-xs">
              <span className="text-base">➡️</span>
              <p>
                Oceans cover 71% of Earth's surface and hold 97% of its water.
              </p>
            </div>
          </div>

          {/* Card 2: How to Save */}
          <div className="bg-sky-500/20 backdrop-blur-md border border-sky-400/30 rounded-2xl p-5 shadow-xl">
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-cyan-200">
              💧 Save Marine Life
            </h3>
            <ul className="space-y-2 text-sky-50 text-sm font-medium">
              <li className="flex items-center gap-3">
                <span className="text-lg">🌱</span> Reduce plastic pollution
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lg">🐠</span> Support sustainable fishing
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lg">🌊</span> Protect coral reefs
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lg">♻️</span> Recycle & conserve water
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lg">🚯</span> Join beach cleanups
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lg">📢</span> Spread awareness
              </li>
            </ul>
          </div>

          {/* Mobile Only Back Button (Hidden on Desktop) */}
          <div className="lg:hidden text-center pt-4 pb-8">
            <Link to="/" className="text-sky-200 underline text-sm">
              ← Back to Home
            </Link>
          </div>
        </aside>

        {/* ================= RIGHT COLUMN: COUNTRIES (Main Scroll) ================= */}
        <main className="lg:col-span-8 xl:col-span-9">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-white">
                Countries Surrounded by Oceans 🌏
              </h2>
              <div className="h-1 w-24 bg-cyan-400 rounded-full mt-1"></div>
            </div>

            {/* Desktop Back Button */}
            <Link
              to="/"
              className="hidden lg:inline-flex items-center px-5 py-2 rounded-full bg-white/10 border border-white/20 text-sky-100 hover:bg-white/20 transition text-sm font-semibold"
            >
              ← Home
            </Link>
          </div>

          {/* Countries Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {oceanCountries.map((country, index) => (
              <Link
                key={index}
                to={`/countries/${encodeURIComponent(country.name)}`}
                className="group relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* 1. Background Image */}
                <img
                  src={country.image}
                  alt={country.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* 2. Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* 3. Content */}
                <div className="relative z-10 flex flex-col justify-end h-full p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-0.5 bg-white/30 rounded-full backdrop-blur-sm">
                      <img
                        src={country.flag}
                        alt={`${country.name} flag`}
                        className="w-8 h-8 rounded-full object-cover border border-white"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-white shadow-black drop-shadow-md">
                      {country.name}
                    </h3>
                  </div>

                  <p className="text-xs text-gray-200 line-clamp-2 opacity-90 font-light leading-relaxed">
                    {country.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="h-16"></div>
        </main>
      </div>
    </div>
  );
}
