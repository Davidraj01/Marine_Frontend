// src/pages/Fellowship.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaTools, FaWrench, FaHeart, FaHandsHelping } from "react-icons/fa";

export default function Fellowship() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#00121a] via-[#002b3a] to-[#00121a] text-sky-100 relative">
      {/* Right side floating buttons */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-40">
        <Link
          to="/donate"
          className="h-12 w-12 rounded-full bg-rose-500 flex items-center justify-center shadow-lg hover:brightness-110"
          aria-label="Donate"
        >
          <FaHeart className="text-white text-lg" />
        </Link>
        <Link
          to="/volunteer"
          className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center shadow-lg hover:brightness-110"
          aria-label="Volunteer"
        >
          <FaHandsHelping className="text-white text-lg" />
        </Link>
      </div>

      {/* Center content */}
      <section className="flex items-center justify-center px-6 py-16">
        <div className="max-w-lg w-full text-center rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl">
          <div className="flex items-center justify-center mb-4">
            <div className="relative h-20 w-20 rounded-full bg-[#001921] border border-cyan-400/60 flex items-center justify-center">
              <FaTools className="text-cyan-300 text-3xl animate-pulse" />
              <FaWrench className="text-cyan-500 text-xl absolute -right-2 bottom-1 animate-bounce" />
            </div>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Fellowship page under construction
          </h1>
          <p className="text-sm md:text-base text-cyan-200 mb-4">
            We&apos;re designing a dedicated fellowship program to support
            students, young researchers, and ocean advocates with mentoring and
            project opportunities.
          </p>

          <p className="text-xs md:text-sm text-cyan-200/80 mb-6">
            Check back soon, or explore other ways to get involved using the
            buttons on the right.
          </p>

          <div className="flex flex-wrap justify-center gap-3 text-xs">
            <Link
              to="/careers"
              className="px-4 py-2 rounded-full border border-white/20 text-cyan-100 hover:bg-white/5"
            >
              View careers
            </Link>
            <Link
              to="/get-involved"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-[#00b4d8] to-[#0077b6] text-white font-semibold hover:opacity-95"
            >
              Back to Get involved
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
