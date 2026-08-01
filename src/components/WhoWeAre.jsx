/* --- Who We Are Carousel --- */
import React, { useState, useEffect } from "react";

const WHO_WE_ARE_SLIDES = [
  {
    title: "Ocean Conservation",
    desc: "We are ocean advocates and scientists working together to protect marine biodiversity from coral reefs to mangrove forests.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Beach Cleaning Initiatives",
    desc: "Our volunteers organize regular beach clean-up drives to restore coastal beauty and prevent plastic waste from harming marine life.",
    img: "https://media.istockphoto.com/id/1394885991/photo/volunteer-man-and-plastic-bottle-clean-up-day-collecting-waste-on-sea-beach.webp?a=1&b=1&s=612x612&w=0&k=20&c=-rREMDwTMPuf3QWi3roMZOx2VfpXRMAW_PYg38FOkNA=",
  },
  {
    title: "Community & Student Awareness",
    desc: "We reach out to coastal communities and students, spreading awareness about sustainable ocean practices and marine protection.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Global Youth Collaboration",
    desc: "We invite youth and citizens across the world to join hands in protecting our marine environment and biodiversity.",
    img: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&w=1400&q=80",
  },
];

export default function WhoWeAreCarousel() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % WHO_WE_ARE_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = WHO_WE_ARE_SLIDES[index];

    return (
        <section className="relative h-[550px] flex items-center justify-center text-center text-white overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
                style={{
                    backgroundImage: `url(${slide.img})`,
                }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 max-w-3xl px-6">
                <h2 className="text-cyan-300 text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
                    {slide.title}
                </h2>
                <p className="text-sky-100 font-medium leading-relaxed text-lg">
                    {slide.desc}
                </p>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-6 flex gap-2 justify-center w-full z-10">
                {WHO_WE_ARE_SLIDES.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-3 h-3 rounded-full transition-all ${i === index
                                ? "bg-cyan-400 scale-110"
                                : "bg-white/50 hover:bg-white"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}
