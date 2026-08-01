import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/MBCT-logo.png"; // replace or remove if not present

export default function Navbar({ visitorCount = 0 }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/getinvolved", label: "Get Involved" },
    { to: "/projects", label: "Admins Lounge" },
    // { to: "/careers", label: "Careers" },
    // { to: "/opine", label: "Opine" },
    { to: "/marine-life", label: "Marine Life" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="w-full text-white shadow-md">
      {/* Underwater gradient */}
      <div className="bg-gradient-to-r from-[#012a44] via-[#01607f] to-[#00a6b5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* LEFT: Logo + title */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-white/10 border border-white/10 flex items-center justify-center overflow-hidden shrink-0">
                {Logo ? (
                  <img src={Logo} alt="logo" className="w-24 h-24 rounded-full object-cover" />
                ) : (
                  <span className="text-white text-lg">🌊</span>
                )}
              </div>

              <div className="hidden sm:block">
                <span className="text-xl font-semibold leading-none tracking-tight">
                  Marine Biodiversity
                </span>
                <div className="text-xs text-white/90 leading-none">
                  Explore • Protect • Restore
                </div>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-6">
              <ul className="flex items-center gap-4">
                {navLinks.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-sm px-2 py-1 rounded-md hover:text-white/95 hover:bg-white/5 transition"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-4 ml-4">
                <div className="text-sm font-extrabold text-white/90">
                  Visitors: <span className="font-semibold">{visitorCount}</span>
                </div>

                <Link
                  to="/donate"
                  className="inline-flex items-center px-3 py-1.5 bg-white text-[#00797f] rounded-lg font-medium shadow-sm hover:scale-[1.02] transition"
                >
                  Donate
                </Link>
              </div>
            </nav>

            {/* MOBILE: visitors + hamburger */}
            <div className="flex items-center gap-3 md:hidden">
              <div className="text-sm text-white/90">
                Visitors: <span className="font-semibold">{visitorCount}</span>
              </div>

              <button
                aria-label="Toggle menu"
                aria-expanded={open}
                onClick={() => setOpen((s) => !s)}
                className="p-2 rounded-md inline-flex items-center justify-center hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {open ? (
                    <path
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden bg-gradient-to-b from-[#01607f]/80 to-[#008c9b]/60 border-t border-white/10 overflow-hidden transition-all duration-200 ${
            open ? "max-h-[420px] py-4" : "max-h-0"
          }`}
        >
          <div className="px-4 space-y-3">
            <ul className="flex flex-col gap-2">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2 rounded-md text-white/95 hover:bg-white/5 transition"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-between pt-2">
              <Link
                to="/donate"
                onClick={() => setOpen(false)}
                className="inline-block px-4 py-2 bg-white text-[#00797f] rounded-lg font-medium"
              >
                Donate
              </Link>

              <div className="text-sm text-white/90">
                Visitors: <span className="font-semibold">{visitorCount}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* subtle bottom wave decoration */}
      <div className="h-3 bg-[#00b7c5] md:h-4" aria-hidden />
    </header>
  );
}
