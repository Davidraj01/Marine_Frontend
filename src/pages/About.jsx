import React from "react";
import StoryBg from "../assets/UW-C BG.webp";
import ValuesCards from "../components/ValuesCards";
import CTA from "../components/CTA";
import WhoWeAreCarousel from "../components/WhoWeAre";

import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from "react";
import { useLazyLoad } from '../hooks/useLazyLoad';
import { missionVisionData } from "../data/missionVisionData";
import aboutHero from "../assets/About-Hero.webp"
import SEO from "../components/SEO";


const timelineData = [
  {
    icon: "🌱",
    title: "Awareness & Education",
    desc: "Conduct awareness programs in schools, colleges and communities.",
  },
  {
    icon: "🐢",
    title: "Beach Cleanups",
    desc: "Organize beach cleanup and mangrove restoration activities.",
  },
  {
    icon: "🌿",
    title: "Mangrove Restoration",
    desc: "Provide environmental education workshops and youth training.",
  },
  {
    icon: "📚",
    title: "Workshops & Training",
    desc: "Empowering youth with skills for marine stewardship.",
  },
  {
    icon: "🔬",
    title: "Research & Monitoring",
    desc: "Develop digital platforms to connect global volunteers.",
  },
  {
    icon: "🤝",
    title: "Partnerships",
    desc: "Partner with governments, NGOs and institutions for conservation project.",
  },
];


export default function About() {
  const addElement = useLazyLoad();



  return (
    <main className="bg-cyan-950 text-slate-900">
      <SEO 
        title="About Us"
        description="Learn about Marine Biodiversity Conservation Trust (MBCT), our mission, vision, and approach to protecting marine ecosystems."
        canonical="https://www.marinebiodiversityconservation.com/about"
      />
      {/* HERO */}

      <section
        aria-label="About MBCT Hero"
        className="relative w-full h-[600px] flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <img
          ref={addElement}
          data-src={aboutHero}
          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
          alt="Ocean and coral reef"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#002b36]/70 mix-blend-multiply"></div>

        {/* Center Text */}
        <div className="relative z-10 text-center px-6">
          <p className="text-3xl md:text-5xl font-bold italic text-white drop-shadow-md">
            Protect the Ocean. Preserve Life
          </p>
        </div>

        {/* Bottom Fade Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#002b36] to-transparent"></div>
      </section>

      {/* About Section */}
      <section
        id="about-mbct"
        className="max-w-8xl mx-auto px-16 py-16 text-slate-800 bg-white text-justify"
      >
        <p className="text-lg font-bold uppercase text-teal-600 tracking-wide mb-3">
          About MBCT
        </p>

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1f80ff] mb-6">
          Marine Biodiversity Conservation Trust (MBCT)
        </h2>

        <p className="text-lg leading-relaxed text-slate-900 mb-4">
          The <strong>Marine Biodiversity Conservation Trust (MBCT)</strong> is
          a non-profit organization founded with a single vision to protect,
          restore, and sustain the marine ecosystems that support life on Earth.
        </p>
        <p className="text-lg leading-relaxed text-slate-900 mb-4">
          We are a community-driven movement led by passionate individuals,
          environmentalists, and youth volunteers who believe that every drop of
          the ocean matters. From students to scientists, we unite people across
          all walks of life to work for a sustainable and healthy blue planet.
        </p>

        <p className="text-slate-500">
          <strong>Head Office:</strong> Chengalpattu, Tamil Nadu, India
        </p>
      </section>

      {/* Mission - Vision - Approach */}
      <section
        id="mission-vision-approach"
        className="max-w-6xl mx-auto px-6 py-12"
        aria-label="Mission Vision Approach"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-[#0270ff]">
            Mission • Vision • Approach
          </h2>
          <p className="mt-2 text-lg font-semibold text-white max-w-2xl mx-auto">
            A distinctive presentation of what drives MBCT curated for clarity
            and impact.
          </p>
        </div>

        <div className="space-y-8">
          {missionVisionData.map((item, idx) => {
            const isLeftImage = idx % 2 === 0;
            return (
              <article
                key={item.key}
                className="relative overflow-hidden rounded-2xl shadow-lg group"
                aria-labelledby={`${item.key}-title`}
              >
                <div
                  className={`flex flex-col md:flex-row items-stretch transition-transform duration-500 ease-out
              ${isLeftImage ? "md:flex-row" : "md:flex-row-reverse"}
              group-hover:scale-[1.01]`}
                  style={{ height: "380px" }} // keep consistent height on md+
                >
                  {/* Image half */}
                  <div
                    className={`relative md:w-1/2 overflow-hidden h-56 md:h-auto ${
                      isLeftImage ? "diag-left" : "diag-right"
                    }`}
                  >
                    {/* Use non-absolute img so it always fills its container reliably */}
                    <img
                      ref={addElement}
                      data-src={item.img}
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" // Transparent pixel
                      alt={item.title}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Teal overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#002b36]/30 to-transparent pointer-events-none" />
                  </div>

                  {/* Text half */}
                  <div className="md:w-1/2 bg-white p-6 md:p-10 flex flex-col justify-center">
                    <div className="text-lg text-teal-600 font-semibold mb-2">
                      {item.eyebrow}
                    </div>
                    <h3
                      id={`${item.key}-title`}
                      className="text-2xl font-bold text-[#023e8a]"
                    >
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm font-semibold text-slate-700 leading-relaxed text-justify">
                      {item.text}
                    </p>

                    {/* small meta / decorative */}
                    <div className="mt-5 text-xs text-slate-400 flex items-center gap-3">
                      <span className="inline-block w-2 h-2 rounded-full bg-[#01607f]" />
                      <span>Community • Science • Action</span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/*  WHAT WE DO (Timeline Version) */}
      <section
        id="what-we-do"
        className="max-w-6xl mx-auto px-6 py-16 relative"
      >
        <h2 className="text-5xl font-bold text-sky-500 mb-3 text-center">
          What We Do
        </h2>
        <p className="text-sm text-white font-semibold text-center mb-12 max-w-2xl mx-auto">
          Focused initiatives in conservation, education, and restoration.
        </p>

        <div className="relative before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-1/2 before:w-1 before:-translate-x-1/2 before:bg-[#0096c7]/30">
          {timelineData.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                className={`relative mb-12 flex flex-col md:flex-row items-center ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                }`}
                initial={{
                  opacity: 0,
                  x: isLeft ? -100 : 100,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.8, ease: "easeOut" },
                }}
                viewport={{ once: true, amount: 0.3 }}
                style={{ willChange: "transform, opacity" }}
              >
                <div
                  className={`w-full md:w-[46%] bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition p-6 ${
                    isLeft ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-2xl bg-[#0077b6] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#023e8a]">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Connector Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#0077b6] w-5 h-5 rounded-full border-4 border-white shadow" />
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="bg-[#f8fbfd] py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#023e8a] mb-4">
            Our Impact
          </h2>
          <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
            The foundation of MBCT is built on awareness, action and alliance
            uniting people and purpose for a sustainable marine future.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden">
              <img
                ref={addElement}
                data-src="https://images.pexels.com/photos/2409015/pexels-photo-2409015.jpeg"
                src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" // Transparent pixel
                alt="Awareness"
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0270ff] mb-3">
                  Awareness
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Inspiring people to understand and appreciate the beauty and
                  importance of marine ecosystems through education, workshops,
                  and public outreach programs.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden">
              <img
                ref={addElement}
                data-src="https://images.pexels.com/photos/7767973/pexels-photo-7767973.jpeg"
                src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" // Transparent pixel
                alt="Action"
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0270ff] mb-3">
                  Action
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Driving real change through coastal clean-ups, mangrove
                  restoration, coral rehabilitation, and sustainable
                  conservation initiatives with community participation.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden">
              <img
                ref={addElement}
                data-src="https://images.pexels.com/photos/3357397/pexels-photo-3357397.jpeg"
                src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" // Transparent pixel
                alt="Alliance"
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0270ff] mb-3">
                  Alliance
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Building strong partnerships with local communities, NGOs and
                  global organizations to amplify marine conservation efforts
                  and create lasting impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <ValuesCards />
      </section>
      {/* STORY */}
      <section className="bg-white border-t">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-extrabold text-[#023e8a] mb-6">
            Our Story
          </h2>

          <p className="text-base text-justify text-slate-700 leading-relaxed mb-4">
            We have seen many marine life collapse due to pollutions in means of
            plastic, oil spills, chemicals and microplastics destroying food
            chains. Overfishing and destructive methods like trawling and ghost
            nets wipe out species faster than they can recover. Climate change
            fuels coral bleaching, ocean acidification and melting ice,
            disrupting entire ecosystems. Habitat destruction from coastal
            development, mining, anchoring and dredging destroys reefs,
            mangroves and seagrass beds. Invasive species, oil and gas
            exploration, ship noise and vessel strikes further destabilize
            marine life. Tourism, agricultural runoff and extreme climate events
            create dead zones and intensify ocean habitat loss.
          </p>

          <p className="text-base text-justify text-slate-700 leading-relaxed mb-4">
            From those humble beginnings, the{" "}
            <strong>Marine Biodiversity Conservation Trust (MBCT)</strong> was
            born a movement driven by compassion, science and collaboration.
            Early efforts centered around restoring mangroves, rescuing marine
            wildlife and conducting awareness campaigns in schools and fishing
            villages. These small yet consistent actions sparked a wave of
            environmental awareness across coastal communities.
          </p>

          <p className="text-base text-justify text-slate-700 leading-relaxed mb-4">
            Today, MBCT stands as a united network of scientists, educators,
            conservationists, and volunteers working hand-in-hand to protect and
            restore marine ecosystems. Through research-driven conservation
            projects, coastal restoration programs and youth engagement
            initiatives, MBCT continues to bridge the gap between science and
            community action.
          </p>

          <p className="text-base text-justify text-slate-700 leading-relaxed">
            Our story is not just about saving the ocean it’s about inspiring a
            generation to value the life beneath the waves. Every coral revived,
            every mangrove planted, and every young mind educated adds a new
            chapter to our shared journey toward a thriving, sustainable blue
            planet.
          </p>
        </div>
      </section>

      {/* Legal & Registration Details Section */}
      <section className="bg-cyan-950 text-gray-200 py-10 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="bg-[#032a5d] rounded-2xl shadow-lg p-6 md:p-8 inline-block text-left mx-auto">
            <h3 className="text-2xl font-bold text-sky-400 mb-4 text-center pb-8">
              Legal & Registration Details
            </h3>
            <p className="mb-2 text-gray-300">
              <span className="font-semibold text-white">
                Marine Biodiversity Conservation Trust (MBCT)
              </span>{" "}
              is a registered charitable trust under the{" "}
              <span className="text-sky-300">Indian Trusts Act, 1882.</span>
            </p>

            <div className="grid md:grid-cols-2 gap-x-10 gap-y-2 mt-4">
              <p>
                <span className="font-semibold text-sky-300">
                  Registration No:
                </span>{" "}
                <span className="text-white font-medium">
                  REG2025XXXX7621250
                </span>
              </p>
              <p>
                <span className="font-semibold text-sky-300">
                  Trust PAN No:
                </span>{" "}
                <span className="text-white font-medium">
                  AAKTM<span className="tracking-wider">XXX2B</span>
                </span>
              </p>
              <p>
                <span className="font-semibold text-sky-300">12A No:</span>{" "}
                <span className="text-white">AAKTMXXXXBE20251</span>
              </p>

              <p>
                <span className="font-semibold text-sky-300">80G No:</span>{" "}
                <span className="text-white">AAKTMXXXXBF20261</span>
              </p>

              <p className="md:col-span-2">
                <span className="font-semibold text-sky-300">
                  Registered Office:
                </span>{" "}
                <span className="text-white">
                  No: 81/5, 6th Street, Shanthi Nagar, Chengalpattu District,
                  Tamil Nadu – 603003.
                </span>
              </p>
            </div>

            {/* Divider line */}
          </div>
        </div>
      </section>

      {/* JOIN CTA */}
      <section id="join" className="bg-cyan-500">
        <div className="max-w-4xl mx-auto px-6 py-12 text-center">
          <h3 className="text-2xl font-bold text-slate-900">
            Join the Movement
          </h3>
          <p className="mt-3 text-slate-600 text-lg font-semibold max-w-2xl mx-auto">
            We welcome everyone students, educators, professionals and citizens
            to join us as volunteers and ocean ambassadors. Together, let’s
            protect marine life, promote sustainable habits and inspire others
            to act for the ocean’s future.
          </p>

          <div className="mt-6 flex items-center justify-center gap-4">
            <a
              href="/careers#volunteer"
              className="inline-block px-6 py-3 rounded-md bg-[#01607f] text-white font-medium hover:opacity-95 transition hover:bg-white hover:text-black"
            >
              Become a Volunteer
            </a>
            <a
              href="/donate"
              className="inline-block px-6 py-3 rounded-md border border-slate-200 text-white font-medium hover:bg-slate-50 transition hover:text-black"
            >
              Support Our Work
            </a>
          </div>
        </div>
      </section>

      {/* CTA component */}
    </main>
  );
}

