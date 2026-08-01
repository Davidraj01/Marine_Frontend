import React, { useEffect, useState, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowLeft,
  MapPin,
  Waves,
  Fish,
  Anchor,
  HeartHandshake,
  CheckCircle2,
  Star,
} from "lucide-react";
import oceanCountries from "../data/oceanCountries";

/* ----------------- PERFORMANCE CANVAS BACKGROUND ----------------- */
const OceanCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const bubbles = Array.from({ length: 30 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height + canvas.height,
      radius: Math.random() * 3 + 1,
      speed: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.4 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "#001F3F");
      gradient.addColorStop(0.5, "#003B5C");
      gradient.addColorStop(1, "#001020");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      bubbles.forEach((b) => {
        b.y -= b.speed;
        if (b.y < -10) {
          b.y = canvas.height + 10;
          b.x = Math.random() * canvas.width;
        }
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100, 255, 255, ${b.opacity})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
  );
};

/* ----------------- MAIN COMPONENT ----------------- */
export default function CountryDetail() {
  const { countryName } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // ✅ FIX: Scroll to top whenever the country changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [countryName]);

  useEffect(() => {
    if (!countryName) return;
    const found = oceanCountries.find(
      (c) =>
        c.name.toLowerCase() === decodeURIComponent(countryName).toLowerCase(),
    );
    if (found) setCountry(found);
  }, [countryName]);

  if (!country) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#001F3F] text-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin" />
          <p className="animate-pulse">Locating Coordinates...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative font-sans text-white overflow-x-hidden">
      <OceanCanvas />

      {/* ----------------- NAVIGATION ----------------- */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center transition-all duration-300">
        <button
          onClick={() => navigate(-1)}
          className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/20 backdrop-blur-md border border-white/10 hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform text-cyan-400" />
          <span className="font-semibold text-sm tracking-wide">BACK</span>
        </button>
      </nav>

      {/* ----------------- CINEMATIC HERO ----------------- */}
      <div className="relative h-[60vh] lg:h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={country.image}
            alt={country.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#001F3F]" />
        </div>

        <motion.div
          style={{ y: y1, opacity }}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center p-4 pt-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white/20 shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden mb-6 bg-black/20 backdrop-blur-sm"
          >
            <img
              src={country.flag}
              alt="flag"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-2xl bg-clip-text text-transparent bg-gradient-to-b from-white to-cyan-200"
          >
            {country.name}
          </motion.h1>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-2 mt-4 text-cyan-300 bg-black/30 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/10"
          >
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium tracking-wider uppercase">
              Ocean Territory
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* ----------------- CONTENT GRID ----------------- */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 -mt-20 pb-20">
        {/* Intro Description */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-[#002b4d]/80 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl mb-8 text-center"
        >
          <p className="text-lg md:text-xl text-cyan-50 leading-relaxed font-light">
            {country.desc}
          </p>
        </motion.div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 1. Ocean Facts Panel */}
          <InfoPanel
            icon={<Waves className="w-6 h-6 text-cyan-400" />}
            title="Ocean Facts"
            delay={0.2}
          >
            {/* 👇 Use FancyList here */}
            <FancyList
              rawText={country.oceanFacts}
              color="cyan"
              icon={<Star className="w-3 h-3" />}
            />
          </InfoPanel>

          {/* 2. Marine Bio Panel */}
          <InfoPanel
            icon={<Fish className="w-6 h-6 text-emerald-400" />}
            title="Marine Biodiversity"
            delay={0.4}
            color="emerald"
          >
            {/* 👇 Use FancyList here */}
            <FancyList
              rawText={country.marineBiodiversity}
              color="emerald"
              icon={<CheckCircle2 className="w-3 h-3" />}
            />
          </InfoPanel>
        </div>

        {/* ----------------- ACTION AREA ----------------- */}
        <div className="mt-12 flex flex-col items-center">
          <div className="h-16 w-1 bg-gradient-to-b from-white/20 to-transparent mb-8" />
          <Link
            to="/careers#volunteer"
            className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-200 bg-cyan-600 font-lg rounded-2xl hover:bg-cyan-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] active:scale-95 overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:animate-shine" />
            <span className="flex items-center gap-3">
              <HeartHandshake className="w-6 h-6" />
              Join Conservation Efforts
            </span>
          </Link>
          <p className="mt-4 text-sm text-white/40">
            Help us protect these waters.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ----------------- SUB-COMPONENTS ----------------- */

const FancyList = ({ rawText, color = "cyan", icon }) => {
  if (!rawText) return <p className="opacity-50 italic">Updating data...</p>;

  // Split text by newlines and filter out empty strings
  const items = rawText
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    // Optional: Remove common bullet markers if they exist in the raw text
    .map((line) => line.replace(/^[\*•\-]\s*/, ""));

  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          viewport={{ once: true }}
          className={`group flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-${color}-400/20 transition-all duration-300`}
        >
          {/* Glowing Icon Bullet */}
          <div
            className={`mt-1 min-w-[24px] h-6 flex items-center justify-center rounded-full bg-${color}-500/20 text-${color}-300 group-hover:scale-110 group-hover:bg-${color}-500/30 transition-all shadow-[0_0_10px_rgba(0,0,0,0)] group-hover:shadow-[0_0_10px_rgba(34,211,238,0.3)]`}
          >
            {icon}
          </div>

          {/* Text Content */}
          <span className="text-gray-200 group-hover:text-white transition-colors leading-relaxed text-sm">
            {/* Bold text parser: **Text** -> <b>Text</b> */}
            {item.split(/(\*\*.*?\*\*)/).map((part, index) =>
              part.startsWith("**") && part.endsWith("**") ? (
                <strong key={index} className={`text-${color}-200 font-bold`}>
                  {part.slice(2, -2)}
                </strong>
              ) : (
                part
              ),
            )}
          </span>
        </motion.li>
      ))}
    </ul>
  );
};

const InfoPanel = ({ icon, title, children, delay, color = "cyan" }) => {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay, duration: 0.6 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative overflow-hidden bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md hover:bg-white/10 transition-colors duration-500 h-full flex flex-col"
    >
      <div className="absolute -right-6 -bottom-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
        <Anchor className="w-40 h-40 transform rotate-12" />
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center gap-4 mb-6">
          <div
            className={`p-3 rounded-2xl bg-${color}-900/30 border border-${color}-500/30 shadow-lg`}
          >
            {icon}
          </div>
          <h3 className="text-2xl font-bold text-white tracking-wide">
            {title}
          </h3>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent mb-6" />

        <div className="text-base font-light flex-grow">{children}</div>
      </div>
    </motion.div>
  );
};
