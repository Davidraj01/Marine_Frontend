// src/pages/GetInvolved.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBriefcase,
  FaHandHoldingHeart,
  FaUserGraduate,
  FaArrowRight,
} from "react-icons/fa";
import MarineMomentsSection from "../components/MarineMomentsSection";
import OceanLifePage from "../components/OceanLife";


const HERO_TEXT = "Join Us in Protecting the Blue Heart of our Planet";

export default function GetInvolved() {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      // build text safely using slice
      if (index <= HERO_TEXT.length) {
        setTyped(HERO_TEXT.slice(0, index));
        index += 1;
      } else {
        clearInterval(interval);
      }
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#00121a] via-[#002b3a] to-[#00121a] text-sky-100">
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[360px] overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=80')",
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative h-full max-w-6xl mx-auto px-6 flex flex-col justify-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-cyan-200 mb-3">
            Get Involved
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white max-w-3xl leading-tight">
            <span className="border-r-2 border-cyan-300 pr-1 animate-pulse">
              {typed}
            </span>
          </h1>
          <p className="mt-4 max-w-xl text-sm md:text-base text-cyan-100">
            Whether you&apos;re a student, professional, or ocean lover, your
            actions can directly support marine conservation, education, and
            coastal communities.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto space-y-8">
          <header className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Choose how you want to make an impact
            </h2>
            <p className="max-w-2xl mx-auto text-sm md:text-base text-cyan-200">
              Explore opportunities to support marine biodiversity through your
              skills, time, or financial contributions.
            </p>
          </header>

          {/* Cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {/* Careers */}
            <article className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg backdrop-blur-sm flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-9 w-9 rounded-full bg-[#00b4d8]/15 flex items-center justify-center">
                  <FaBriefcase className="text-[#00b4d8]" />
                </div>
                <h3 className="text-lg font-semibold text-white">Careers</h3>
              </div>
              <p className="text-sm text-cyan-200 flex-1">
                Join our team through internships, trainee roles, or
                early-career positions and work directly on marine conservation
                projects.
              </p>
              <Link
                to="/careers"
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#00b4d8] to-[#0077b6] text-sm font-semibold text-white px-4 py-2 hover:opacity-95"
              >
                Explore careers <FaArrowRight className="text-xs" />
              </Link>
            </article>

            {/* Donate */}
            <article className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg backdrop-blur-sm flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-9 w-9 rounded-full bg-emerald-400/15 flex items-center justify-center">
                  <FaHandHoldingHeart className="text-emerald-300" />
                </div>
                <h3 className="text-lg font-semibold text-white">Donate</h3>
              </div>
              <p className="text-sm text-cyan-200 flex-1">
                Your contribution supports field research, community programs,
                beach cleanups, and educational initiatives along our coasts.
              </p>
              <Link
                to="/donate"
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 text-sm font-semibold text-[#00211a] px-4 py-2 hover:brightness-105"
              >
                Support our work <FaArrowRight className="text-xs" />
              </Link>
            </article>

            {/* Fellowship */}
            <article className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg backdrop-blur-sm flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-9 w-9 rounded-full bg-violet-400/15 flex items-center justify-center">
                  <FaUserGraduate className="text-violet-300" />
                </div>
                <h3 className="text-lg font-semibold text-white">Fellowship</h3>
              </div>
              <p className="text-sm text-cyan-200 flex-1">
                Our upcoming fellowship program will mentor students and early
                researchers to design and lead impact-driven ocean projects.
              </p>
              <Link
                to="/fellowship"
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-400 to-violet-500 text-sm font-semibold text-[#120b24] px-4 py-2 hover:brightness-105"
              >
                View fellowship <FaArrowRight className="text-xs" />
              </Link>
            </article>
          </div>
        </div>
      </section>
      <MarineMomentsSection />
      <OceanLifePage />
      
    </main>
  );
}
