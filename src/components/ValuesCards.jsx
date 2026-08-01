import React from "react";
import { FaLeaf, FaMicroscope, FaBookOpen, FaHandshake } from "react-icons/fa";

const VALUES = [
  {
    id: "sustainability",
    title: "Sustainability",
    desc: "Balancing human needs with healthy ecosystems sustainable fisheries, responsible development and long-term conservation.",
    icon: FaLeaf,
    accent: "text-emerald-500",
  },
  {
    id: "science",
    title: "Science-Based",
    desc: "We use research, monitoring and data to guide restoration projects and policy decisions for measurable impact.",
    icon: FaMicroscope,
    accent: "text-sky-500",
  },
  {
    id: "education",
    title: "Education",
    desc: "Workshops, school programs and campaigns to build ocean literacy and empower local stewards of the sea.",
    icon: FaBookOpen,
    accent: "text-orange-400",
  },
  {
    id: "collaboration",
    title: "Collaboration",
    desc: "Partnering with governments, NGOs, communities and scientists to scale conservation across regions.",
    icon: FaHandshake,
    accent: "text-yellow-400",
  },
];

export default function ValuesCards() {
  return (
    <section className="py-12 bg-gray-50 rounded-2xl">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#023e8a] mb-8 text-center">
          Our Values
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {VALUES.map((v) => {
            const Icon = v.icon;
            return (
              <article
                key={v.id}
                className="bg-sky-700 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 ease-out transform hover:scale-105"
                aria-labelledby={`value-${v.id}-title`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center ring-1 ring-white/10 ${v.accent}`}
                    aria-hidden="true"
                  >
                    <Icon className={`w-6 h-6 ${v.accent}`} />
                  </div>
                  <div>
                    <h3
                      id={`value-${v.id}-title`}
                      className="text-lg font-bold text-sky-300"
                    >
                      {v.title}
                    </h3>
                    <p className="mt-2 text-md font-semibold text-white leading-relaxed">
                      {v.desc}
                    </p>

                    {/* optional CTA (comment out if not needed) */}
                    {/* <a href={`/values/${v.id}`} className="inline-block mt-4 text-sm font-medium text-sky-600 hover:underline">
                      Learn more →
                    </a> */}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
