import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLazyLoad } from '../hooks/useLazyLoad';

const Hero =
  "https://images.pexels.com/photos/31307991/pexels-photo-31307991.jpeg";

const marineLife = [
  {
    title: "Marine Mammals",
    desc: "Warm-blooded animals like whales, dolphins and seals that depend on the ocean for feeding, migration and breeding.",
    image:
      "https://images.pexels.com/photos/21533362/pexels-photo-21533362.jpeg",
    link: "/marine-life/marine-mammals",
  },
  {
    title: "Fish",
    desc: "The most diverse marine group — from tiny reef fish to large pelagics like tuna and sharks — essential to ocean food webs.",
    image: "https://images.pexels.com/photos/889929/pexels-photo-889929.jpeg",
    link: "/marine-life/fish",
  },
  {
    title: "Reptiles",
    desc: "Marine reptiles such as sea turtles and marine iguanas adapted to coastal and ocean life, playing vital ecological roles.",
    image:
      "https://media.gettyimages.com/id/1124685127/vector/illustration-of-an-archelon.jpg?s=612x612&w=0&k=20&c=aPPekEqPRfYJb1ZQs_BdQC6cPW6f5gQzz3N1etCzlgE=",
    link: "/marine-life/reptiles",
  },
  {
    title: "Crustaceans",
    desc: "Crabs, shrimps, lobsters and krill — important decomposers and a key food source across marine ecosystems.",
    image:
      "https://media.gettyimages.com/id/541805170/photo/sally-lightfoot-crab-in-water.jpg?s=612x612&w=0&k=20&c=Bbs3DtjTVnrxcK9WXTgxTr7dS2yoq-42W5MIkwKq37k=",
    link: "/marine-life/crustaceans",
  },
  {
    title: "Mollusks",
    desc: "Octopus, squid, clams and oysters — diverse soft-bodied animals that shape habitats and filter water.",
    image:
      "https://media.gettyimages.com/id/2222494887/photo/close-up-of-turtle-swimming-undersea-bonifacio-corse-france.jpg?s=612x612&w=0&k=20&c=NbOOQRgN1OT5DmUwizF6-y1DSjGGog_-tidC4YzmQKc=",
    link: "/marine-life/mollusks",
  },
  {
    title: "Cnidaria",
    desc: "Corals, jellyfish and sea anemones — stinging-cell animals that create reefs and spectacular planktonic displays.",
    image:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1200&q=60",
    link: "/marine-life/cnidaria",
  },
  {
    title: "Echinoderms",
    desc: "Starfish, sea urchins and sea cucumbers — benthic organisms that help maintain seafloor balance and nutrient cycles.",
    image:
      "https://media.gettyimages.com/id/2191317955/photo/blue-tridacna-clam-or-giant-clam-embudu-or-embudhu-or-emboodhoo-island.jpg?s=612x612&w=0&k=20&c=Mkl_57qUnMga8JXg9FvoWWmChc04lKPSjGoite3xolw=",
    link: "/marine-life/echinoderms",
  },
  {
    title: "Plankton",
    desc: "Microscopic phytoplankton and zooplankton — the base of marine food webs and major drivers of ocean productivity.",
    image:
      "https://media.gettyimages.com/id/1403159097/photo/blue-light-bioluminescence-in-the-sea-at-night.jpg?s=612x612&w=0&k=20&c=xQu1CTPoWtJlpkIgLT-YtiJnMXfAdTDMZuDxP3J13fo=",
    link: "/marine-life/plankton",
  },
  {
    title: "Algae",
    desc: "Seaweeds and microscopic algae that produce oxygen and provide habitat and food for many marine species.",
    image:
      "https://media.gettyimages.com/id/2212172471/photo/kelpsunburst3oct25-24.jpg?s=612x612&w=0&k=20&c=xrPxriBblO9iDeIBxrx0mspliGdJwPOYx-FLQM5MvN0=",
    link: "/marine-life/algae",
  },
  {
    title: "Seagrass",
    desc: "Underwater flowering plants forming meadows that serve as nurseries for fish and store blue carbon.",
    image:
      "https://media.gettyimages.com/id/1080208362/photo/seagrass-posidonia-oceanica.jpg?s=612x612&w=0&k=20&c=zhU0vmPOLyflstwlXzz1HkRbTCzv_m6Nk8BX7vSjMeI=",
    link: "/marine-life/seagrass",
  },

  {
    title: "Bryozoa",
    desc: "Colonial filter-feeders forming encrusting or branching structures that add complexity to hard-bottom habitats.",
    image:
      "https://media.gettyimages.com/id/1155145869/photo/gorgonian-coral-beauty-reef-with-amazing-biodiversity-raja-ampat-indonesia.jpg?s=612x612&w=0&k=20&c=2YQ0phy6Zic0_7oXjMeq5jXhJRoBO333D57A0r-0kRE=",
    link: "/marine-life/bryozoa",
  },
];

export default function Services() {
  const addElement = useLazyLoad();

  return (
    <div className="relative overflow-hidden bg-white">
      {/* ---------- HERO ---------- */}
      <section
        ref={addElement}
        data-bg={Hero}
        className="relative w-full h-[480px] md:h-[520px] flex items-center justify-center text-center mb-24"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* decorative floating bubbles */}
        <svg className="absolute left-6 top-8 opacity-30 w-36 h-36 animate-[float_6s_ease-in-out_infinite]">
          <circle cx="60" cy="60" r="50" fill="#00a6b5" />
        </svg>
        <svg className="absolute right-6 bottom-10 opacity-25 w-28 h-28 animate-[float_8s_ease-in-out_infinite]">
          <circle cx="40" cy="40" r="36" fill="#1e83a5" />
        </svg>

        {/* overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#002f3a]/30 to-[#001621]/60"></div>

        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight text-white drop-shadow-md">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00d1d7] via-[#1fb1c7] to-[#01607f]">
              MARINE LIFE & BIODIVERSITY
            </span>
          </h1>

          <p className="text-gray-100 text-lg md:text-xl max-w-3xl mx-auto mb-6 drop-shadow-sm">
            Discover the diverse groups that make up our oceans — their roles,
            threats they face, and how we can protect marine habitats for future
            generations.
          </p>

          <a
            href="#marine-life"
            className="inline-block transform-gpu will-change-transform shadow-2xl px-8 py-3 rounded-full bg-gradient-to-r from-[#012a44] via-[#01607f] to-[#00a6b5] text-white font-semibold hover:scale-105 active:scale-95 transition"
            aria-label="Explore Marine Life"
          >
            Explore Marine Life ↓
          </a>
        </div>

        {/* decorative wave SVG bottom */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,80 C180,140 360,0 720,60 C1080,120 1260,40 1440,80 L1440 120 L0 120 Z"
            fill="rgba(255,255,255,0.06)"
          />
        </svg>
      </section>

      {/* ---------- Intro ---------- */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 text-center md:text-left mb-20">
        <h2 className="text-4xl font-bold mb-6 text-center md:text-left bg-clip-text text-transparent bg-gradient-to-r from-[#01607f] via-[#00c6d0] to-[#00a6b5]">
          What is Marine Biodiversity?
        </h2>
        <h4 className="text-gray-700 text-base md:text-lg leading-relaxed text-justify">
          Marine biodiversity refers to the variety of life in the world's
          oceans — from microscopic plankton to the largest whales. Healthy
          marine biodiversity supports fisheries, protects coastlines, stores
          carbon and sustains livelihoods. This page highlights major marine
          groups, their ecological roles, common threats and simple conservation
          actions anyone can take to help.
          <br />
          <br />
          Coastal and open-ocean ecosystems are interconnected: damage in one
          place can ripple across food webs and communities. Protecting marine
          biodiversity means protecting habitats, reducing pollution, supporting
          sustainable resource use and raising awareness.
        </h4>
      </section>

      {/* ---------- Zig-Zag Cards ---------- */}
      <section
        id="marine-life"
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 space-y-24 pb-24"
      >
        {marineLife.map((s, i) => {
          const imgOnRight = i % 2 === 1; // true when layout is reversed (image on right)
          // image animates from the side it appears on
          const imgAos = imgOnRight ? "fade-left" : "fade-right";
          // text animates from the opposite side
          const textAos = imgOnRight ? "fade-right" : "fade-left";
          // delay in ms for stagger
          const delay = Math.min(300, i * 60); // caps delay to 300ms

          return (
            <motion.div
              key={i}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
                imgOnRight ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, x: imgOnRight ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ willChange: 'transform, opacity' }}
            >
              {/* Image block */}
              <div
                className="relative flex-1 group"
              >
                {/* gradient halo */}
                <div
                  className="absolute -inset-1 rounded-2xl blur-3xl opacity-40 transition group-hover:opacity-60"
                  style={{
                    background:
                      "linear-gradient(90deg,#00d1d7,#1fb1c7,#01607f)",
                  }}
                />
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    ref={addElement}
                    data-src={s.image}
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" // Transparent pixel
                    alt={s.title}
                    className="w-full h-[360px] md:h-[380px] object-cover transform transition-transform duration-700 will-change-transform"
                  />
                  {/* subtle label pill */}
                  <div className="absolute left-4 top-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-[#013d4b] shadow">
                    {i + 1 < 10 ? `0${i + 1}` : i + 1} • {s.title.split(" ")[0]}
                  </div>
                </div>
              </div>

              {/* Text block */}
              <motion.div
                className="flex-1"
                initial={{ opacity: 0, x: imgOnRight ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                style={{ willChange: 'transform, opacity' }}
              >
                <div className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-white/30">
                  <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-[#013d4b]">
                    {s.title}
                  </h2>

                  <p className="text-gray-600 leading-relaxed mb-6">{s.desc}</p>

                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      to={s.link}
                      className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-[#01607f] to-[#00a6b5] text-white font-semibold shadow-lg transform hover:-translate-y-0.5 transition"
                    >
                      Explore More →
                    </Link>

                    {/* small quick-info chips */}
                    <div className="flex gap-2 flex-wrap">
                      <span className="px-3 py-1 rounded-full bg-[#e6f8fa] text-[#015460] text-sm font-medium">
                        Role: Ecosystem
                      </span>
                      <span className="px-3 py-1 rounded-full bg-[#fff6e6] text-[#6b3e00] text-sm font-medium">
                        Threats: Pollution
                      </span>
                      <span className="px-3 py-1 rounded-full bg-[#f0f8ff] text-[#004e66] text-sm font-medium">
                        Tip: Protect habitat
                      </span>
                    </div>
                  </div>
                </div>

                {/* bottom accent bar */}
                <div
                  className="mt-4 h-1 rounded-full w-40"
                  style={{
                    background: "linear-gradient(90deg,#00d1d7,#01607f)",
                  }}
                />
              </motion.div>
            </motion.div>
          );
        })}
      </section>
    </div>
  );
}
