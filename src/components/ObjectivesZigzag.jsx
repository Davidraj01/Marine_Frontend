// src/components/ObjectivesZigzag.jsx
import React, { useRef, useEffect } from 'react';

const OBJECTIVES = [
  {
    title: 'Conservation & Protection',
    desc: 'Marine biodiversity is under threat, and protecting species, habitats, and ecosystems has never been more urgent. Coral reefs, often called the ‘rainforests of the sea,’ shelter thousands of species but are rapidly declining due to warming waters. Mangroves safeguard our coasts while serving as nurseries for young fish, yet they are being cleared for development. Endangered species such as sea turtles, sharks, and dugongs face extinction if action is not taken. By conserving these habitats and species, we secure food, oxygen, medicine, and a stable climate not only for ourselves but also for future generations.',
    image: '/img-1.webp',
    // cta: { text: 'Learn More', href: 'https://www.marinebio.org' },
  },
  {
    title: 'Sustainable Use',
    desc: 'Healthy oceans are vital for people and planet, yet overfishing, unsustainable aquaculture, and poorly managed coastal development threaten their balance. Responsible fisheries ensure fish stocks remain for future generations, while eco-friendly aquaculture provides food without polluting waters. Proper coastal management protects mangroves and reefs that defend communities from storms and erosion. By promoting practices that meet human needs while safeguarding marine ecosystems, we can achieve true harmony between development and conservation.',
    image: '/img-2.webp',
    // cta: { text: 'Our Practices', href: '/projects' },
  },
  {
    title: 'Research & Monitoring',
    desc: 'Effective marine conservation depends on science. By conducting regular surveys and ecosystem monitoring, researchers collect vital data on species populations, habitat conditions, and human impacts. From coral reef health checks to tagging sea turtles and measuring water quality, these studies reveal where action is most needed. The data not only supports restoration projects such as mangrove planting or coral rehabilitation but also guides governments in creating policies, protected areas, and sustainable fisheries. Research and monitoring ensure that conservation is based on evidence, not guesswork, making every effort more impactful.',
    image: '/tortoise (1).webp',
    // cta: { text: 'View Research', href: '/research' },
  },
  {
    title: 'Awareness & Education',
    desc: 'Awareness and education are the heart of long-term marine conservation. Through workshops, school programs, and public campaigns, we aim to build a generation of ocean-literate citizens who understand the value of marine biodiversity. Children learn to see the ocean not just as a resource, but as a living system that sustains life on Earth. Local communities are empowered to become stewards of their coasts, taking responsibility for protecting coral reefs, mangroves, and fisheries. By inspiring collective action through knowledge, we ensure that ocean conservation becomes part of daily life, not just an occasional effort.',
    image:
      'https://www.marinebiodiversity.ca/wp-content/uploads/2025/06/coastal-marine-academy-collaboration.jpeg',
    // cta: { text: 'Get Educated', href: '/education' },
  },
  {
    title: 'Collaboration',
    desc: 'Marine conservation succeeds only when we work together. Our mission is to build strong partnerships with governments, NGOs, scientists, and local communities to scale impact beyond individual efforts. Governments have the power to establish protected areas and enforce policies, while NGOs bring expertise and global support. At the same time, local communities are empowered to act as stewards of their coasts, ensuring conservation is rooted in everyday life. By combining resources, knowledge, and action, collaboration transforms small-scale projects into regional and global movements that protect our oceans for future generations.',
    image:
      'https://media.istockphoto.com/id/172212065/photo/indian-fishermen-pulling-in-big-fishing-net.jpg?s=612x612&w=0&k=20&c=9WXLhjqjj3mbY9V5-uNiATU1L57A56Lv5jDI1bMQorY=',
    // cta: { text: 'Partner With Us', href: '/contact' },
  },
];

export default function ObjectivesZigzag() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#00121a] via-[#012a3a] to-[#00121a]">
      <div className="max-w-7xl mx-auto px-6 py-16 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-[#e0fbfc] text-center mb-12 drop-shadow-lg">
          Our Objectives
        </h2>

        <div className="flex flex-col gap-16">
          {OBJECTIVES.map((obj, idx) => {
            const reverse = idx % 2 === 1;
            return (
              <div
                key={obj.title}
                className={`flex flex-col md:flex-row items-center md:items-start justify-between md:gap-10 transform transition-all duration-500 ease-out
                  ${reverse ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Image block */}
                <div className="md:w-1/2 w-full flex justify-start md:justify-center">
                  <div className="w-full max-w-[520px] h-[320px] rounded-2xl overflow-hidden shadow-2xl transform transition hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0_20px_50px_rgba(2,62,138,0.18)] bg-gradient-to-br from-sky-800/40 to-emerald-800/20 border border-white/6">
                    <img
                      src={obj.image}
                      alt={obj.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // fallback: if external fails, show placeholder gradient
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    {/* subtle overlay for glow */}
                    <div className="absolute inset-0 pointer-events-none mix-blend-screen"></div>
                  </div>
                </div>

                {/* Text content */}
                <div className="md:w-1/2 w-full flex justify-start md:justify-center">
                  <div className="max-w-lg">
                    <h3 className="text-2xl md:text-3xl font-semibold text-white drop-shadow">
                      {obj.title}
                    </h3>
                    <p className="mt-4 leading-relaxed text-slate-200 text-justify">
                      {obj.desc}
                    </p>
                    {/* <a
                      href={obj.cta.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block mt-6 px-5 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-300 text-black font-semibold shadow hover:scale-105 transition-transform"
                    >
                      {obj.cta.text}
                    </a> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
