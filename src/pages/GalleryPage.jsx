import React, {
  useState,
  useMemo,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { GALLERY_ALBUMS } from "../data/galleryData";

/* ═══════════════════════════════════════════════════════
   SVG Icons
   ═══════════════════════════════════════════════════════ */
const ArrowLeft = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
);
const ChevLeft = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
);
const ChevRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);
const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);
const MapPin = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const CameraIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
    <circle cx="12" cy="13" r="3" />
  </svg>
);
const ExpandIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="15 3 21 3 21 9" />
    <polyline points="9 21 3 21 3 15" />
    <line x1="21" y1="3" x2="14" y2="10" />
    <line x1="3" y1="21" x2="10" y2="14" />
  </svg>
);
const HeartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);
const ShareIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);

/* ═══════════════════════════════════════════════════════
   Aceternity-style Animated Dot Grid Background
   ═══════════════════════════════════════════════════════ */
const DotGrid = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div
      className="absolute inset-0 opacity-[0.15]"
      style={{
        backgroundImage: `radial-gradient(circle, rgba(148,163,184,0.6) 1px, transparent 1px)`,
        backgroundSize: "32px 32px",
      }}
    />
    {/* Animated radial pulse that follows center */}
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{
        width: 600,
        height: 600,
        background:
          "radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 70%)",
      }}
      animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);

/* ═══════════════════════════════════════════════════════
   Spotlight Effect (cursor-follow glow)
   ═══════════════════════════════════════════════════════ */
const Spotlight = ({ containerRef }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 200, damping: 40 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 40 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };
    el.addEventListener("mousemove", handleMove);
    return () => el.removeEventListener("mousemove", handleMove);
  }, [containerRef, mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none absolute z-[2] rounded-full"
      style={{
        width: 500,
        height: 500,
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        background:
          "radial-gradient(circle, rgba(56,189,248,0.12) 0%, rgba(14,165,233,0.05) 30%, transparent 60%)",
      }}
    />
  );
};

/* ═══════════════════════════════════════════════════════
   Floating Particles (subtle ambient motion)
   ═══════════════════════════════════════════════════════ */
const FloatingParticles = ({ count = 30 }) => {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 15 + 10,
        delay: Math.random() * 8,
      })),
    [count],
  );
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-sky-400/30"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.sin(p.id) * 15, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

/* ═══════════════════════════════════════════════════════
   Staggered Text Reveal (Aceternity-style)
   ═══════════════════════════════════════════════════════ */
const TextReveal = ({ text, className = "", delay = 0 }) => {
  const words = text.split(" ");
  return (
    <motion.h1
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: { staggerChildren: 0.06, delayChildren: delay },
        },
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.3em]"
          variants={{
            hidden: { opacity: 0, y: 40, rotateX: -40, filter: "blur(8px)" },
            visible: {
              opacity: 1,
              y: 0,
              rotateX: 0,
              filter: "blur(0px)",
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
            },
          }}
          style={{ transformOrigin: "center bottom" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
};

/* ═══════════════════════════════════════════════════════
   Animated Border Card (MagicUI shimmer border)
   ═══════════════════════════════════════════════════════ */
const ShimmerCard = ({ children, className = "", delay = 0 }) => (
  <motion.div
    className={`relative group/card ${className}`}
    initial={{ opacity: 0, y: 30, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ delay, duration: 0.6, ease: "easeOut" }}
  >
    {/* Animated border shimmer */}
    <div className="absolute -inset-px rounded-2xl overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "conic-gradient(from var(--shimmer-angle, 0deg), transparent 60%, rgba(56,189,248,0.4) 75%, rgba(20,184,166,0.4) 85%, transparent 95%)",
          animation: "spinShimmer 4s linear infinite",
        }}
      />
    </div>
    {/* Card body */}
    <div className="relative rounded-2xl bg-slate-900/90 backdrop-blur-xl p-5">
      {children}
    </div>
  </motion.div>
);

/* ═══════════════════════════════════════════════════════
   Meteor Shower (Aceternity-style)
   ═══════════════════════════════════════════════════════ */
const Meteors = ({ count = 12 }) => {
  const meteors = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: Math.random() * 2 + 1.5,
        size: Math.random() * 1.5 + 0.5,
      })),
    [count],
  );
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {meteors.map((m) => (
        <motion.div
          key={m.id}
          className="absolute"
          style={{
            left: `${m.left}%`,
            top: -20,
            width: m.size,
            height: Math.random() * 60 + 40,
            background: `linear-gradient(to bottom, rgba(56,189,248,0.6), transparent)`,
            borderRadius: 999,
            transform: "rotate(215deg)",
          }}
          animate={{ y: [0, 1200], opacity: [1, 0] }}
          transition={{
            duration: m.duration,
            repeat: Infinity,
            delay: m.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

/* ═══════════════════════════════════════════════════════
   Shimmer Button (MagicUI-style animated borders)
   ═══════════════════════════════════════════════════════ */
const ShimmerButton = ({
  children,
  onClick,
  variant = "primary",
  className = "",
}) => {
  if (variant === "primary") {
    return (
      <button
        onClick={onClick}
        className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 cursor-pointer ${className}`}
      >
        {/* Animated background shimmer */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-sky-500 via-teal-400 to-sky-500 bg-[length:200%_100%]"
          style={{ animation: "shimmerBtnBg 3s linear infinite" }}
        />
        {/* Inner glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-sky-400/50 via-white/20 to-teal-400/50" />
        {/* Shine streak */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.3) 45%, transparent 55%)",
            animation: "shineStreak 2s ease-in-out infinite",
          }}
        />
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-4 font-semibold text-white/80 hover:text-white transition-all duration-300 hover:scale-105 cursor-pointer ${className}`}
    >
      {/* Animated border */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "conic-gradient(from var(--shimmer-angle, 0deg), transparent 60%, rgba(56,189,248,0.5) 78%, rgba(20,184,166,0.5) 88%, transparent 98%)",
            animation: "spinShimmer 3s linear infinite",
          }}
        />
      </div>
      <div className="absolute inset-[1.5px] rounded-full bg-slate-900/95 backdrop-blur-xl" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};

/* ═══════════════════════════════════════════════════════
   Animated Counter
   ═══════════════════════════════════════════════════════ */
const AnimatedNumber = ({ value, duration = 1.5, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;
    const timeout = setTimeout(() => {
      const start = performance.now();
      const animate = (now) => {
        const elapsed = (now - start) / (duration * 1000);
        if (elapsed < 1) {
          setCount(Math.floor(value * Math.min(elapsed, 1)));
          requestAnimationFrame(animate);
        } else {
          setCount(value);
        }
      };
      requestAnimationFrame(animate);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [value, duration, delay]);

  return <span ref={ref}>{count}</span>;
};

/* ═══════════════════════════════════════════════════════
   Premium Lightbox with Blur + Glass
   ═══════════════════════════════════════════════════════ */
const Lightbox = ({ images, index, onClose, onPrev, onNext, albumTitle }) => {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <motion.div
        className="absolute inset-0 bg-slate-950/95 backdrop-blur-2xl"
        onClick={onClose}
        initial={{ backdropFilter: "blur(0px)" }}
        animate={{ backdropFilter: "blur(24px)" }}
      />

      {/* Glass top bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-5 sm:px-10 py-5"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.15 }}
      >
        <div className="flex items-center gap-3">
          <span className="inline-block h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
          <span className="text-white font-semibold text-sm sm:text-base">
            {albumTitle}
          </span>
          <span className="text-white/30 mx-1">|</span>
          <span className="text-white/50 text-sm">
            {index + 1} of {images.length}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button className="rounded-full bg-white/5 border border-white/10 p-2.5 text-white/60 hover:text-white hover:bg-white/10 transition-all cursor-pointer">
            <HeartIcon />
          </button>
          <button className="rounded-full bg-white/5 border border-white/10 p-2.5 text-white/60 hover:text-white hover:bg-white/10 transition-all cursor-pointer">
            <ShareIcon />
          </button>
          <button
            onClick={onClose}
            className="rounded-full bg-white/5 border border-white/10 p-2.5 text-white/60 hover:text-red-400 hover:bg-red-500/10 hover:border-red-500/30 hover:rotate-90 transition-all duration-300 cursor-pointer ml-1"
          >
            <XIcon />
          </button>
        </div>
      </motion.div>

      {/* Nav arrows */}
      {images.length > 1 && (
        <>
          <motion.button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-4 sm:left-8 z-20 rounded-2xl bg-white/5 border border-white/10 p-3 text-white/70 hover:text-white hover:bg-white/15 hover:border-white/25 hover:scale-110 transition-all duration-200 backdrop-blur-xl cursor-pointer"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <ChevLeft />
          </motion.button>
          <motion.button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 sm:right-8 z-20 rounded-2xl bg-white/5 border border-white/10 p-3 text-white/70 hover:text-white hover:bg-white/15 hover:border-white/25 hover:scale-110 transition-all duration-200 backdrop-blur-xl cursor-pointer"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <ChevRight />
          </motion.button>
        </>
      )}

      {/* Main image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="relative z-10"
          initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          exit={{ opacity: 0, scale: 0.8, rotateY: 15 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="rounded-2xl overflow-hidden shadow-[0_0_100px_rgba(14,165,233,0.15)]">
            <img
              src={images[index]}
              alt={`Photo ${index + 1}`}
              className="max-h-[78vh] max-w-[88vw] object-contain"
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Bottom thumbnail strip */}
      <motion.div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 rounded-2xl bg-white/5 border border-white/10 px-3 py-2 backdrop-blur-xl"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.25 }}
      >
        {images.map((src, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.stopPropagation();
            }}
            className={`rounded-lg overflow-hidden transition-all duration-300 cursor-pointer ${
              i === index
                ? "ring-2 ring-sky-400 scale-110 opacity-100"
                : "opacity-40 hover:opacity-70 scale-90"
            }`}
            style={{ width: 40, height: 30 }}
          >
            <img src={src} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </motion.div>
    </motion.div>
  );
};

/* ═══════════════════════════════════════════════════════
   Gallery Page — Main Component
   ═══════════════════════════════════════════════════════ */
const GalleryPage = () => {
  const { albumId } = useParams();
  const navigate = useNavigate();
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [loadedImages, setLoadedImages] = useState(new Set());
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.3]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [0.25, 0]);

  const album = useMemo(
    () => GALLERY_ALBUMS.find((a) => a.id === albumId),
    [albumId],
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [albumId]);

  const imagePaths = useMemo(() => {
    if (!album) return [];
    return album.images.map((img) =>
      img.startsWith("http") ? img : `/gallery/${album.id}/${img}`,
    );
  }, [album]);

  const openLightbox = useCallback((i) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(
    () => setLightboxIndex((i) => (i > 0 ? i - 1 : imagePaths.length - 1)),
    [imagePaths.length],
  );
  const nextImage = useCallback(
    () => setLightboxIndex((i) => (i < imagePaths.length - 1 ? i + 1 : 0)),
    [imagePaths.length],
  );

  const handleImageLoad = useCallback((idx) => {
    setLoadedImages((prev) => new Set([...prev, idx]));
  }, []);

  if (!album) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gradient-to-b from-slate-900 to-slate-950">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <p className="text-7xl mb-6">🐠</p>
          <p className="text-2xl font-bold text-white mb-2">Album not found</p>
          <p className="text-white/40 mb-8">
            This gallery may have drifted away…
          </p>
          <button
            onClick={() => navigate(-1)}
            className="rounded-full bg-gradient-to-r from-sky-500 to-teal-500 px-8 py-3.5 text-white font-semibold hover:shadow-lg hover:shadow-sky-500/30 hover:scale-105 transition-all cursor-pointer"
          >
            ← Swim Back
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      {/* ═══════════════════════════════════════════
           HERO — Aceternity / MagicUI inspired
         ═══════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative overflow-hidden min-h-[70vh] sm:min-h-[75vh] flex items-end"
        style={{
          background:
            "linear-gradient(160deg, #020617 0%, #0c1a32 30%, #0f2847 55%, #0a1628 80%, #020617 100%)",
        }}
      >
        {/* Layer 1: Dot Grid */}
        <DotGrid />

        {/* Layer 2: Spotlight cursor follow */}
        <Spotlight containerRef={heroRef} />

        {/* Layer 3: Floating particles */}
        <FloatingParticles count={25} />

        {/* Layer 4: Parallax cover image */}
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
          <motion.img
            src={album.coverImage}
            alt=""
            className="w-full h-full object-cover"
            style={{ opacity: heroOpacity, scale: heroScale }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/70 to-transparent" />
        </motion.div>

        {/* Noise texture */}
        <div
          className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Gradient line at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent z-10" />

        {/* ── Hero Content ── */}
        <div className="relative z-10 w-full mx-auto max-w-6xl px-5 sm:px-8 pb-16 sm:pb-20 pt-32 sm:pt-44">
          {/* Back button */}
          <motion.button
            onClick={() => navigate(-1)}
            className="mb-10 group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm text-white/50 backdrop-blur-md hover:bg-white/10 hover:text-white hover:border-white/25 transition-all cursor-pointer"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="group-hover:-translate-x-0.5 transition-transform">
              <ArrowLeft />
            </span>
            Back to Moments
          </motion.button>

          {/* Tag line with animated bar */}
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <motion.span
              className="inline-block h-px bg-gradient-to-r from-sky-400 via-teal-400 to-transparent"
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-sky-400/80">
              Photo Gallery
            </span>
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal-400 animate-pulse" />
          </motion.div>

          {/* Staggered title reveal */}
          <TextReveal
            text={album.title}
            className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 leading-[1.08] text-white"
            delay={0.2}
          />

          {/* Description with fade */}
          <motion.p
            className="max-w-xl text-base sm:text-lg text-white/35 mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            {album.description}
          </motion.p>

          {/* Stat cards with shimmer borders */}
          <div className="flex flex-wrap gap-4">
            <ShimmerCard delay={0.8} className="w-auto">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-sky-500/15 text-sky-400">
                  <MapPin />
                </span>
                <div>
                  <p className="text-sm font-bold text-white leading-tight">
                    {album.location}
                  </p>
                  <p className="text-[10px] text-white/30 uppercase tracking-wider mt-0.5">
                    Location
                  </p>
                </div>
              </div>
            </ShimmerCard>

            <ShimmerCard delay={0.95} className="w-auto">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-teal-500/15 text-teal-400">
                  <CameraIcon />
                </span>
                <div>
                  <p className="text-sm font-bold text-white leading-tight">
                    {album.images.length} Shots
                  </p>
                  <p className="text-[10px] text-white/30 uppercase tracking-wider mt-0.5">
                    Photos
                  </p>
                </div>
              </div>
            </ShimmerCard>
          </div>
        </div>
      </section>

      {/* ═══════  GALLERY GRID  ═══════ */}
      <section className="bg-white relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-sky-400/10 blur-[80px] pointer-events-none" />

        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          {/* Label */}
          <motion.div
            className="flex items-center gap-4 mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
            <div className="flex items-center gap-2 bg-slate-50 border border-slate-100 rounded-full px-5 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500">
                All {album.images.length} Photos
              </span>
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          </motion.div>

          {/* Uniform Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {imagePaths.map((src, i) => (
              <motion.button
                key={src}
                onClick={() => openLightbox(i)}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ scale: 1.03, zIndex: 10 }}
              >
                {!loadedImages.has(i) && (
                  <div className="absolute inset-0 gallery-shimmer" />
                )}
                <img
                  src={src}
                  alt={`${album.title} — photo ${i + 1}`}
                  className={`h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110 ${
                    loadedImages.has(i) ? "opacity-100" : "opacity-0"
                  }`}
                  loading="lazy"
                  onLoad={() => handleImageLoad(i)}
                />
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-sky-500/5" />
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-transparent" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                  <span className="rounded-2xl bg-white/15 border border-white/20 p-3.5 backdrop-blur-xl text-white shadow-2xl">
                    <ExpandIcon />
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <span className="text-[11px] font-semibold text-white/90 bg-black/30 rounded-full px-2.5 py-1 backdrop-blur-sm">
                    {i + 1}/{imagePaths.length}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           CTA — Meteor Shower + Shimmer Buttons
         ═══════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden py-24 sm:py-32"
        style={{
          background:
            "linear-gradient(165deg, #020617 0%, #0c1a32 35%, #0f2847 60%, #020617 100%)",
        }}
      >
        {/* Background effects */}
        <DotGrid />
        <Meteors count={14} />

        {/* Large ambient glow orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-sky-500/8 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-teal-500/8 blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[150px]" />
        </div>

        {/* Gradient top/bottom edges */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />

        <div className="relative z-10 mx-auto max-w-3xl text-center px-5">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 mb-8 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.span
              className="inline-block h-2 w-2 rounded-full bg-teal-400"
              animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
              Join the Movement
            </span>
          </motion.div>

          {/* CTA Title with gradient words */}
          <motion.h3
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 leading-tight"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Be Part of the{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #38bdf8, #2dd4bf, #818cf8, #38bdf8)",
                backgroundSize: "300% 100%",
                animation: "gradientShift 4s ease-in-out infinite",
              }}
            >
              Next Chapter
            </span>
          </motion.h3>

          {/* Subtext */}
          <motion.p
            className="text-white/35 mb-10 leading-relaxed text-base sm:text-lg max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            Every photograph tells a story of hope. Join our volunteer network
            and help us write the next one together, we can protect what matters
            most.
          </motion.p>

          {/* Shimmer Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45 }}
          >
            <ShimmerButton
              onClick={() => navigate("/careers#volunteer")}
              variant="primary"
            >
              Get Involved
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </ShimmerButton>

            <ShimmerButton
              onClick={() => navigate("/donate")}
              variant="secondary"
            >
              Support Our Work
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </ShimmerButton>
          </motion.div>
        </div>
      </section>

      {/* ═══════  Lightbox  ═══════ */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={imagePaths}
            index={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevImage}
            onNext={nextImage}
            albumTitle={album.title}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryPage;
