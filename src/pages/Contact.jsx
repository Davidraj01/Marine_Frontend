// src/pages/Contact.jsx
import React, { useState, useEffect } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

/**
 * Contact page with Lottie toast on success (uses <lottie-player> web component)
 *
 * Place your success.json at: public/animations/success.json
 */

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // toast state
  const [toastVisible, setToastVisible] = useState(false);

  // path to your success animation (public folder)
  const LOTTIE_SRC = "/animations/success.json";

  // ensure <lottie-player> webcomponent is loaded (only once)
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.customElements && window.customElements.get("lottie-player")) {
      return; // already loaded
    }

    // add script tag to head for lottie-player
    const id = "lottie-player-script";
    if (!document.getElementById(id)) {
      const s = document.createElement("script");
      s.id = id;
      s.src =
        "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";
      s.async = true;
      document.head.appendChild(s);
    }
  }, []);

  function handleChange(e) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);

    const templateParams = {
      from_name: form.name || "Anonymous",
      from_email: form.email || "no-reply@example.com",
      message: form.message || "(no message)",
    };

    try {
      const SERVICE_ID = "service_wk3qhgp";
      const TEMPLATE_ID = "template_4sx4sg9";
      const PUBLIC_KEY = "YOsOBZayR40KY5Xw0";

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      setSending(false);
      setForm({ name: "", email: "", message: "" });

      // show toast
      setToastVisible(true);
      // auto-hide after 4.5s
      setTimeout(() => setToastVisible(false), 4500);
    } catch (err) {
      console.error("EmailJS error:", err);
      setSending(false);
      // you can use a simple alert or show an error toast (left simple here)
      alert("Sorry — failed to send message. Please try again later.");
    }
  }

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#001726] via-[#002a45] to-[#000814] overflow-hidden text-sky-100">
      {/* ... (all your decorative SVG / page content) ... */}
      {/* For brevity I'm including the same page content you provided above unchanged,
          except the toast UI at the end. Keep everything else as-is. */}

      {/* ====== PAGE CONTENT (center) ====== */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-sky-200 drop-shadow-lg">
            Reach Out Dive In
          </h1>
          <p className="mt-3 text-sky-100 max-w-2xl mx-auto">
            We’re here to collaborate, answer questions and get things done for
            the ocean. Send a message or find us on the map.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* left map (same as your original) */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-gradient-to-tr from-slate-900/60 to-slate-800/30">
              <div className="px-6 py-4 flex items-center justify-between bg-white/5">
                <div>
                  <h3 className="text-lg font-semibold text-sky-100">
                    Our Location
                  </h3>
                  <p className="text-lg text-sky-200/80">
                    81/5, Sixth Street, Shanthi Nagar, Chengalpattu - 603003,
                    TamilNadu - India
                  </p>
                </div>
                <div className="text-sm text-sky-200/80">
                  Open: Mon–Fri • 9am–5pm
                </div>
              </div>

              <div className="w-full h-80 md:h-96">
                <iframe
                  title="Marine Biodiversity Trust Location"
                  className="w-full h-full border-0"
                  loading="lazy"
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8547.39750982699!2d80.00611035859724!3d12.676200589758233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52fd000be39f15%3A0xe5a83a73ffa35d9e!2sMarine%20Biodiversity%20Conservation%20Trust!5e1!3m2!1sen!2sin!4v1763534646156!5m2!1sen!2sin`}
                  allowFullScreen
                />
              </div>

              <div className="px-6 py-3 flex items-center justify-between bg-white/3">
                <div className="text-sm text-sky-200/80 flex items-center gap-2">
                  <FaMapMarkerAlt /> 81/5, Sixth Street, Shanthi Nagar,
                  Chengalpattu - 603003, TamilNadu - India
                </div>
                <div className="text-sm text-sky-200/80">
                  Directions • Contact • Hours
                </div>
              </div>
            </div>
          </div>

          {/* contact card */}
          <aside className="lg:col-span-1">
            <div className="rounded-3xl bg-white/5 backdrop-blur-md p-6 shadow-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-sky-100 mb-2">
                Contact Us
              </h3>
              <p className="text-sky-200/80 mb-4">
                Have questions or partnership ideas? Send us a message.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm text-sky-200/80">Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg bg-white/5 border border-white/8 px-3 py-2 placeholder-sky-400 text-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-400"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm text-sky-200/80">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg bg-white/5 border border-white/8 px-3 py-2 placeholder-sky-400 text-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-400"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm text-sky-200/80">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg bg-white/5 border border-white/8 px-3 py-2 placeholder-sky-400 text-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-400 h-28"
                    placeholder="Tell us about your idea..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full inline-flex items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-[#00b4d8] to-[#0077b6] px-4 py-2 font-semibold text-white shadow-lg hover:scale-[1.02] transition"
                >
                  <svg
                    className={`w-5 h-5 text-white ${
                      sending ? "animate-spin" : "opacity-0"
                    }`}
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="white"
                      strokeWidth="3"
                      strokeOpacity="0.25"
                      fill="none"
                    ></circle>
                    <path
                      d="M22 12a10 10 0 0 1-10 10"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      fill="none"
                    ></path>
                  </svg>
                  <span>{sending ? "Sending..." : "Send Message"}</span>
                </button>

                <div className="mt-4 text-sm text-sky-200/80">
                  Prefer email?{" "}
                  <a
                    className=""
                    href="mailto:worldmarinebiodiversity@gmail.com"
                  >
                    worldmarinebiodiversity@gmail.com
                  </a>
                </div>
              </form>

              <hr className="my-5 border-white/6" />

              <div className="flex items-center justify-between text-sky-200/90">
                <div className="flex items-center gap-3">
                  <FaPhone /> <span className="text-sm">+91 99944 01291</span>
                </div>
                <div className="flex gap-3 text-xl">
                  <a
                    className="hover:text-white/90"
                    href="https://www.facebook.com/profile.php?id=61583238462973"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    className="hover:text-white/90"
                    href="https://www.instagram.com/worldmarinebiodiversity/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    className="hover:text-white/90"
                    href="https://www.linkedin.com/in/marine-biodiversity-51844b398/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Toast: animated Lottie + message */}
      {toastVisible && (
        <div className="fixed right-6 bottom-6 z-50 flex items-center gap-4 bg-white/10 backdrop-blur-xl p-4 rounded-2xl shadow-2xl border border-white/20">
          {/* Lottie Player */}
          <lottie-player
            src="/src/animations/success.json"
            background="transparent"
            speed="1"
            style={{ width: "70px", height: "70px" }}
            autoplay
          ></lottie-player>

          <div>
            <p className="text-white font-semibold text-lg">Message Sent!</p>
            <p className="text-sky-200 text-sm">
              We’ll get back to you shortly.
            </p>
          </div>

          <button
            onClick={() => setToastVisible(false)}
            className="text-sky-200 hover:text-white text-xl"
          >
            ✕
          </button>
        </div>
      )}

      {/* Accessibility: respect reduced motion */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          svg * { animation: none !important; }
          lottie-player { display: block; } /* keep it visible but not animated if user reduces motion (player respects this) */
        }
      `}</style>
    </main>
  );
}
