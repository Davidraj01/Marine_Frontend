import React from "react";
import { useState } from "react";
import VolunteerList from "./VolunteerList";

export default function CTA() {
   const [showVolunteers, setShowVolunteers] = useState(false);
  return (
    <section
      id="get-involved"
      className="py-16"
      style={{
        backgroundImage: "linear-gradient(90deg,#0077b6 0%, #00b4d8 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold">
          Join us to protect marine biodiversity
        </h2>
        <p className="mt-4">
          Volunteer, donate or spread awareness — every action counts. Help us
          preserve oceans for future generations.
        </p>
        <div>
          <button
            onClick={() => setShowVolunteers(true)}
            className="px-6 py-3 bg-gradient-to-r from-[#00b4d8] to-[#58f946] rounded-lg text-neutral font-semibold shadow hover:scale-105 transition"
          >
            See Our Volunteers
          </button>
        </div>

        <VolunteerList
          open={showVolunteers}
          onClose={() => setShowVolunteers(false)}
        />

        <a
          href="/donate"
          className="font-bold px-6 py-3 bg-gradient-to-r from-[#00b4d8] to-[#58f946] my-4 transform transition duration-200 hover:scale-110 btn btn-accent"
        >
          Donate
        </a>
      </div>
    </section>
  );
}
