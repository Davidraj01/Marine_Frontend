import React, { useMemo, useState, useEffect } from "react";

const sections = [
  { id: "intro", label: "1) Introduction" },
  { id: "membership", label: "2) Membership Overview" },
  { id: "eligibility", label: "3) Eligibility & Registration" },
  { id: "fees", label: "4) Membership Fees & Renewal" },
  { id: "benefits", label: "5) Member Rights & Benefits" },
  { id: "responsibilities", label: "6) Member Responsibilities" },
  { id: "cancellation", label: "7) Cancellation & Termination" },
  { id: "privacy", label: "8) Data Privacy & Communication Consent" },
  { id: "liability", label: "9) Limitation of Liability" },
  { id: "governinglaw", label: "10) Governing Law" },
  { id: "contact", label: "11) Contact Information" },
];

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-blue-400 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
    {children}
  </span>
);

const H2 = ({ id, children }) => (
  <h2
    id={id}
    className="scroll-mt-28 text-2xl font-semibold text-gray-900 mt-10 mb-4"
  >
    {children}
  </h2>
);

const Divider = () => <div className="h-px w-full bg-gray-200 my-8" />;

const BackToTop = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-40 rounded-full bg-sky-700 px-4 py-3 text-white shadow-lg hover:bg-sky-600 focus:outline-none"
      aria-label="Back to top"
      title="Back to top"
    >
      ↑
    </button>
  );
};

const MembershipAgreement = () => {
  const lastUpdated = useMemo(() => "19 November 2025", []);
  const [activeId, setActiveId] = useState(sections[0].id);

  const handleTocClick = (e, id) => {
    e.preventDefault();
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900 via-teal-500 to-sky-500 opacity-95" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 text-white">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Membership Agreement – Marine Biodiversity Conservation Trust (MBCT)
          </h1>
          <p className="mt-3 max-w-2xl text-white/90">
            Effective Date: <strong>{lastUpdated}</strong>
          </p>
          <div className="mt-4 flex items-center gap-3">
            <Badge>Marine Biodiversity Conservation Trust</Badge>
            <Badge>www.marinebiodiversityconservation.com</Badge>
          </div>
        </div>

        {/* Decorative wave */}
        <svg
          className="text-white/90"
          viewBox="0 0 1440 90"
          fill="currentColor"
          preserveAspectRatio="none"
        >
          <path d="M0,96L80,80C160,64,320,32,480,21.3C640,11,800,21,960,26.7C1120,32,1280,32,1360,32L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" />
        </svg>
      </section>

      {/* Main Section */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Table of Contents */}
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-24 rounded-xl border border-gray-200 p-4 bg-white">
              <p className="text-sm font-semibold text-gray-900 mb-3">
                On this page
              </p>
              <nav className="space-y-2">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    onClick={(e) => handleTocClick(e, s.id)}
                    className={`block text-sm transition px-2 py-1 rounded-md ${
                      activeId === s.id
                        ? "bg-teal-50 text-sky-700 font-medium border-l-2 border-blue-600"
                        : "text-gray-600 hover:text-sky-700 hover:bg-gray-50"
                    }`}
                  >
                    {s.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <article className="lg:col-span-9 leading-relaxed text-gray-700">
            <section id="intro">
              <H2>1. Introduction</H2>
              <p>
                This Membership Agreement ("Agreement") outlines the rights,
                obligations, and terms between Marine Biodiversity Conservation
                Trust (MBCT) and its members, donors, and volunteers who choose
                to join or contribute to our conservation initiatives.
              </p>
            </section>
            <Divider />

            <section id="membership">
              <H2>2. Membership Overview</H2>
              <p>
                Membership with MBCT is open to individuals and organizations
                who share our mission of protecting marine biodiversity and
                coastal ecosystems. Membership is voluntary and
                non-transferable.
              </p>
            </section>
            <Divider />

            <section id="eligibility">
              <H2>3. Eligibility & Registration</H2>
              <ul className="list-disc pl-6">
                <li>Applicants must be at least 18 years of age.</li>
                <li>Membership is subject to acceptance by MBCT management.</li>
                <li>
                  MBCT reserves the right to request verification documents
                  before confirming membership.
                </li>
              </ul>
            </section>
            <Divider />

            <section id="fees">
              <H2>4. Membership Fees & Renewal</H2>
              <p>
                Membership fees, if applicable, are collected securely through
                Razorpay or other approved payment gateways. Fees are
                non-refundable except in cases of duplicate transactions or
                verified technical errors. Renewal reminders will be sent via
                registered email before the due date.
              </p>
            </section>
            <Divider />

            <section id="benefits">
              <H2>5. Member Rights & Benefits</H2>
              <ul className="list-disc pl-6">
                <li>Participation in MBCT programs, events, and campaigns.</li>
                <li>
                  Access to newsletters, project reports, and marine awareness
                  materials.
                </li>
                <li>
                  Recognition as a supporting member on official platforms (if
                  opted).
                </li>
              </ul>
            </section>
            <Divider />

            <section id="responsibilities">
              <H2>6. Member Responsibilities</H2>
              <ul className="list-disc pl-6">
                <li>
                  Act in accordance with MBCT’s values, ethics, and conservation
                  goals.
                </li>
                <li>
                  Ensure all provided personal information is accurate and up to
                  date.
                </li>
                <li>
                  Avoid misuse of MBCT’s name, logo, or materials without
                  written permission.
                </li>
              </ul>
            </section>
            <Divider />

            <section id="cancellation">
              <H2>7. Cancellation & Termination</H2>
              <p>
                Members may cancel their membership by emailing{" "}
                <a
                  href="mailto:worldmarinebiodiversity@gmail.com"
                  className="text-teal-600 hover:underline"
                >
                  worldmarinebiodiversity@gmail.com
                </a>
                . MBCT reserves the right to suspend or terminate a membership
                if a member violates this Agreement, engages in misconduct, or
                misrepresents MBCT.
              </p>
            </section>
            <Divider />

            <section id="privacy">
              <H2>8. Data Privacy & Communication Consent</H2>
              <p>
                By registering as a member, you consent to receive updates,
                newsletters, and communications from MBCT related to
                environmental activities. Personal data is handled in compliance
                with our{" "}
                <a
                  href="/privacy-policy"
                  className="text-teal-600 hover:underline"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </section>
            <Divider />

            <section id="liability">
              <H2>9. Limitation of Liability</H2>
              <p>
                MBCT is not responsible for any personal, financial, or indirect
                losses arising from membership participation, use of our
                website, or program involvement. MBCT operates in good faith and
                provides services on a best-effort basis.
              </p>
            </section>
            <Divider />

            <section id="governinglaw">
              <H2>10. Governing Law</H2>
              <p>
                This Agreement shall be governed and construed in accordance
                with the laws of India. Any disputes shall be subject to the
                jurisdiction of the courts in Tamil Nadu, India.
              </p>
            </section>
            <Divider />

            <section id="contact">
              <H2>11. Contact Information</H2>
              <p>
                For membership-related queries, please contact:
                <br />
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:worldmarinebiodiversity@gmail.com"
                  className="text-teal-600 hover:underline"
                >
                  worldmarinebiodiversity@gmail.com
                </a>
                <br />
                <strong>Address:</strong> No: 81/5, 6th Street, Shanthi Nagar,
                Chengalpattu District, Tamil Nadu – 603003.
              </p>
            </section>

            <Divider />

            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Marine Biodiversity Conservation
              Trust. All Rights Reserved.
            </p>
          </article>
        </div>
      </section>

      <BackToTop />
    </div>
  );
};

export default MembershipAgreement;
