import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { GALLERY_ALBUMS } from "../data/galleryData";
import { BASE_URL } from "../utils/contants";

import SeaTurtle from "../assets/marine-moments/seaTurtle.mp4";

/* ── video items ── */
const MARINE_MOMENTS = [
  {
    id: 1,
    type: "video",
    src: SeaTurtle,
    title: "Supporting Local Fishers",
    description:
      "Volunteers helping coastal fishers with safe and sustainable practices.",
  },
];

const ASSET_ORIGIN = BASE_URL.replace(/\/api$/, "");

const MarineMomentsSection = () => {
  const navigate = useNavigate();
  const [apiMoments, setApiMoments] = useState([]);

  useEffect(() => {
    let mounted = true;
    axios
      .get(`${BASE_URL}/marine-moments`)
      .then((res) => {
        if (mounted) setApiMoments(res.data?.data || []);
      })
      .catch(() => {
        // keep static content only
      });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section
      id="marine-moments"
      className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <motion.p
            className="inline-block rounded-full bg-sky-50 border border-sky-100 px-5 py-1.5 text-xs sm:text-sm font-bold tracking-wider text-sky-600 mb-4 uppercase"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            🌊 Marine Moments
          </motion.p>
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            A THOUSAND MILE&apos;S BEGIN WITH A SINGLE STEP
          </motion.h2>
          <motion.p
            className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-slate-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Capturing every act of kindness from helping fishers and guiding
            coastal communities to rescuing marine life and protecting our seas.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {/* ── Video card ── */}
          {MARINE_MOMENTS.map((item) => (
            <motion.article
              key={item.id}
              className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200/80 hover:border-slate-300 shadow-sm hover:shadow-xl transition-all duration-400"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              <div className="relative w-full h-56 sm:h-60 overflow-hidden bg-slate-100">
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <video
                    src={item.src}
                    className="w-full h-full object-cover"
                    controls
                  />
                )}
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 border border-sky-100 px-3 py-1 text-[11px] font-semibold text-sky-600 uppercase tracking-wide">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect width="15" height="14" x="1" y="5" rx="2" ry="2"/></svg>
                    Video
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-sky-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}

          {/* ── Admin-posted moments ── */}
          {apiMoments.map((moment) => (
            <motion.article
              key={moment._id}
              className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200/80 hover:border-slate-300 shadow-sm hover:shadow-xl transition-all duration-400"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              <div className="relative w-full h-56 sm:h-60 overflow-hidden bg-slate-100">
                {moment.mediaType === "video" ? (
                  <video
                    src={`${ASSET_ORIGIN}${moment.files[0]}`}
                    className="w-full h-full object-cover"
                    controls
                  />
                ) : (
                  <img
                    src={`${ASSET_ORIGIN}${moment.coverImage || moment.files[0]}`}
                    alt={moment.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 border border-sky-100 px-3 py-1 text-[11px] font-semibold text-sky-600 uppercase tracking-wide">
                    {moment.mediaType === "video" ? "Video" : "Photo"}
                  </span>
                  {moment.location && (
                    <span className="text-[11px] text-slate-400">
                      {moment.location}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-sky-700 transition-colors">
                  {moment.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {moment.description}
                </p>
              </div>
            </motion.article>
          ))}

          {/* ── Album cards ── */}
          {GALLERY_ALBUMS.map((album, idx) => (
            <motion.article
              key={album.id}
              onClick={() => navigate(`/gallery/${album.id}`)}
              className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200/80 hover:border-sky-300 shadow-sm hover:shadow-xl transition-all duration-400 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx + 1) * 0.1 }}
              whileHover={{ y: -4 }}
            >
              {/* Cover image */}
              <div className="relative w-full h-56 sm:h-60 overflow-hidden bg-slate-100">
                <img
                  src={album.coverImage}
                  alt={album.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Subtle bottom gradient for readability */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                {/* Photo count badge */}
                <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-white/90 backdrop-blur-sm px-2.5 py-1 text-[11px] font-bold text-slate-700 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                  {album.images.length}
                </span>
              </div>

              {/* Body */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 border border-sky-100 px-3 py-1 text-[11px] font-semibold text-sky-600 uppercase tracking-wide">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>
                    Album
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    {album.location}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-sky-700 transition-colors">
                  {album.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                  {album.description}
                </p>

                {/* View button */}
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 group-hover:text-sky-700 group-hover:gap-3 transition-all">
                  View Photos
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarineMomentsSection;
