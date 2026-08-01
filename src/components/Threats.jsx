import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { motion } from "framer-motion";

const ITEMS = [
  {
    title: "Plastic Pollution",
    desc: "Millions of tons of plastic enter the ocean each year, harming wildlife and ecosystems.",
  },
  {
    title: "Overfishing",
    desc: "Unsustainable fishing removes key species and destabilizes food webs.",
  },
  {
    title: "Climate Change",
    desc: "Warming and acidification lead to coral bleaching and habitat loss.",
  },
  {
    title: "Habitat Destruction",
    desc: "Coastal development and dredging destroy mangroves and seagrass beds.",
  },
];

// Animation variants
const leftCardVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.15,
      ease: "easeOut",
    },
  }),
};

const rightCardVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function Threats() {
  return (
    <motion.section
      className="bg-[#e0f7fa] py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // trigger when ~20% in view
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-sky-700 font-semibold">
            Key Challenges
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#001f2f] mt-2">
            Major Threats to Marine Life
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-700 max-w-2xl mx-auto">
            Our oceans are under pressure from multiple human activities. Each
            threat below impacts marine ecosystems in different, but connected
            ways.
          </p>
        </div>

        {/* Timeline + Side Note */}
        <div className="grid gap-10 md:grid-cols-[2fr,1.2fr] items-start">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 hidden md:block bg-sky-300/60 w-[2px]" />

            <div className="space-y-6">
              {ITEMS.map((item, idx) => (
                <motion.div
                  key={item.title}
                  className="relative flex gap-4 md:pl-6"
                  variants={leftCardVariants}
                  custom={idx} // for staggered delay
                >
                  {/* Dot + index for md+ */}
                  <div className="hidden md:flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-sky-700 text-white flex items-center justify-center text-sm font-semibold shadow-md">
                      {idx + 1}
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1">
                    <div className="bg-sky-700/95 text-white rounded-xl shadow-md px-5 py-4 md:px-6 md:py-5 border border-sky-500/40 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
                      <div className="flex items-center gap-2">
                        <FaExclamationTriangle className="text-sky-200 text-sm" />
                        <h3 className="font-semibold text-lg md:text-xl">
                          {item.title}
                        </h3>
                      </div>
                      <p className="mt-2 text-sm md:text-base text-sky-50/90">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Side info card (from right) */}
          <motion.aside
            className="bg-white/80 border border-sky-100 rounded-2xl shadow-sm p-6 md:p-7"
            variants={rightCardVariants}
          >
            <h4 className="text-xl font-semibold text-sky-900">
              Why these threats matter
            </h4>
            <p className="mt-2 text-sm md:text-base text-slate-700">
              Marine ecosystems support food security, coastal protection, and
              climate regulation. When these systems are stressed, it affects
              both ocean life and human communities worldwide.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>• Loss of biodiversity and key species</li>
              <li>• Disrupted food chains and fisheries</li>
              <li>• Increased coastal vulnerability to storms</li>
              <li>• Long-term damage that may be irreversible</li>
            </ul>
            <p className="mt-4 text-sm text-sky-900 font-medium">
              Understanding these threats is the first step toward meaningful
              conservation.
            </p>
          </motion.aside>
        </div>
      </div>
    </motion.section>
  );
}
