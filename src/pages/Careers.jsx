// src/pages/Careers.jsx
import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaClock,
  FaBriefcase,
  FaArrowRight,
  FaUserPlus,
} from "react-icons/fa";
import JoinVolunteerFormInline from "../components/JoinVolunteerFormInline";
import ApplicationForm from "../components/ApplicationForm";

// Simple static openings (backup data)
const JOBS = [
  {
    id: "job-1",
    title: "Junior Marine Biologist (Field Assistant)",
    type: "Full-time",
    level: "Entry level",
    location: "Chennai · On-site coastal visits",
    category: "jobs",
  },
  {
    id: "intern-1",
    title: "Marine Conservation Intern",
    type: "Internship",
    level: "Students / Freshers",
    location: "Hybrid · Chennai + Remote",
    category: "internships",
  },
  {
    id: "trainee-1",
    title: "Environmental Outreach Trainee",
    type: "Trainee",
    level: "Early career",
    location: "Remote · Flexible",
    category: "trainee",
  },
];

export default function Careers() {
  const [activeRole, setActiveRole] = useState(null); // { id, title, category }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#00121a] via-[#002b3a] to-[#00121a] text-sky-100 px-6 py-12">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* HERO */}
        <section className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-cyan-300 mb-2">
              Careers
            </p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Start your{" "}
              <span className="text-[#00b4d8]">marine conservation</span>{" "}
              journey.
            </h1>
            <p className="mt-3 text-sm md:text-base text-cyan-200 max-w-xl">
              We offer roles and internships for students and early-career
              professionals who want to work with real ocean conservation
              projects, research and outreach.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="#openings"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#00b4d8] to-[#0077b6] text-xs md:text-sm font-semibold text-white shadow hover:opacity-95"
              >
                View openings <FaArrowRight className="text-[10px]" />
              </a>
              <a
                href="#volunteer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-300/70 text-xs md:text-sm text-cyan-100 hover:bg-white/5"
              >
                Become a volunteer <FaUserPlus className="text-[10px]" />
              </a>
            </div>

            <div className="mt-4 flex flex-wrap gap-3 text-[11px] text-cyan-200/80">
              <span className="inline-flex items-center gap-2">
                <FaMapMarkerAlt /> Chennai · Remote · Hybrid
              </span>
              <span className="inline-flex items-center gap-2">
                <FaClock /> Student & fresher friendly
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-xl">
            <h3 className="text-lg font-semibold text-white mb-2">
              What you get
            </h3>
            <ul className="space-y-2 text-xs text-cyan-100">
              <li>• Real-world exposure to marine projects</li>
              <li>• Mentorship from conservation and research mentors</li>
              <li>• Certificates & letters of recommendation</li>
              <li>• Opportunity to join field visits & events</li>
              <li>• Flexible schedule options for students</li>
            </ul>
          </div>
        </section>

        {/* OPENINGS */}
        <section id="openings" className="space-y-4">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-xl md:text-2xl font-bold text-white">
              Current openings
            </h2>
            <p className="text-[11px] text-cyan-200/80">
              Don&apos;t see a perfect match? You can still apply using{" "}
              <span className="underline">Any position</span> in the form.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {JOBS.map((job) => (
              <article
                key={job.id}
                className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-4 shadow hover:shadow-lg hover:bg-white/8 transition"
              >
                <h3 className="text-base md:text-lg font-semibold text-white">
                  {job.title}
                </h3>
                <div className="mt-2 flex flex-wrap gap-2 text-[11px] text-cyan-100">
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-[#001921] border border-white/10">
                    <FaBriefcase /> {job.type}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-[#001921] border border-white/10">
                    {job.level}
                  </span>
                </div>
                <p className="mt-2 text-[11px] text-cyan-200 flex items-center gap-1">
                  <FaMapMarkerAlt /> {job.location}
                </p>

                <div className="mt-4 pt-3 border-t border-white/10 flex justify-between items-center gap-3">
                  <span className="text-[11px] text-cyan-200/80 capitalize">
                    Category: {job.category}
                  </span>
                  <button
                    onClick={() =>
                      setActiveRole({
                        roleId: job.id,
                        roleTitle: job.title,
                        category: job.category,
                      })
                    }
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#00b4d8] to-[#0077b6] text-[11px] font-semibold text-white hover:opacity-95"
                  >
                    Apply
                    <FaArrowRight className="text-[9px]" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* VOLUNTEER SECTION (REUSED FORM) */}
        <section
          id="volunteer"
          className="grid lg:grid-cols-[1.1fr,0.9fr] gap-8 items-start"
        >
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
              Not ready for a role yet?
            </h2>
            <p className="text-sm text-cyan-200 max-w-md">
              Start as a volunteer and get comfortable with marine conservation
              work, events and research. You can always move into internships or
              roles later based on performance.
            </p>
          </div>

          <div className="max-w-md w-full ml-auto">
            <JoinVolunteerFormInline
              apiBase="https://back.marinebiodiversityconservation.com/api" 
              onSubmit={(data) =>
                console.log("Volunteer from careers page:", data)
              }
            />
          </div>
        </section>
      </div>

      
      {activeRole && (
        <ApplicationForm
          apiBase="https://back.marinebiodiversityconservation.com/api" 
          roleId={activeRole.roleId}
          roleTitle={activeRole.roleTitle}
          defaultCategory={activeRole.category}
          onClose={() => setActiveRole(null)}
          onSuccess={(data) => {
            console.log("Application success:", data);
          }}
        />
      )}
    </main>
  );
}
