import React, { useMemo, useState, useEffect } from "react";

const sections = [
  { id: "intro", label: "1) Introduction" },
  { id: "acceptance", label: "2) Acceptance of Terms" },
  { id: "donations", label: "3) Donations & Payments" },
  { id: "membership", label: "4) Membership & Participation" },
  { id: "intellectual", label: "5) Intellectual Property" },
  { id: "liability", label: "6) Limitation of Liability" },
  { id: "privacy", label: "7) Privacy & Data Protection" },
  { id: "refund", label: "8) Refund & Cancellation Policy" },
  { id: "thirdparty", label: "9) Third-Party Links" },
  { id: "governinglaw", label: "10) Governing Law & Jurisdiction" },
  { id: "updates", label: "11) Amendments to Terms" },
  { id: "contact", label: "12) Contact Information" },
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

const SectionDivider = () => (
  <div className="w-full h-px bg-gray-200 my-8"></div>
);

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

const TermsAndConditions = () => {
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
            Terms & Conditions – Marine Biodiversity Conservation Trust (MBCT)
          </h1>
          <p className="mt-3 max-w-2xl text-white/90">
            Effective Date: <strong>{lastUpdated}</strong>
          </p>
          <div className="mt-4 flex items-center gap-3">
            <Badge>Marine Biodiversity Conservation Trust</Badge>
            <Badge>www.marinebiodiversityconservation.com</Badge>
          </div>
        </div>

        {/* decorative wave */}
        <svg
          className="text-white/90"
          viewBox="0 0 1440 90"
          fill="currentColor"
          preserveAspectRatio="none"
        >
          <path d="M0,96L80,80C160,64,320,32,480,21.3C640,11,800,21,960,26.7C1120,32,1280,32,1360,32L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" />
        </svg>
      </section>

      {/* Main Content + TOC */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* TOC */}
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

          {/* Main Content */}
          <article className="lg:col-span-9 leading-relaxed text-gray-700">
            <section id="intro">
              <H2>1. Introduction</H2>
              <p>
                Welcome to the Marine Biodiversity Conservation Trust (MBCT).
                These Terms & Conditions ("Terms") govern your use of our
                website, participation in programs, donations, and other
                services provided by MBCT. By using our website, you agree to
                these Terms in full.
              </p>
            </section>
            <SectionDivider />

            <section id="acceptance">
              <H2>2. Acceptance of Terms</H2>
              <p>
                By accessing or using our website, services, or by making a
                donation, you confirm that you are at least 18 years of age and
                have read, understood, and agreed to these Terms. If you do not
                agree, please do not use our website or services.
              </p>
            </section>
            <SectionDivider />

            <section id="donations">
              <H2>3. Donations & Payments</H2>
              <ul className="list-disc pl-6">
                <li>
                  All donations made to MBCT are voluntary and non-refundable.
                </li>
                <li>
                  Payments are processed securely via third-party payment
                  gateways like Razorpay.
                </li>
                <li>
                  MBCT does not store your complete card or banking details.
                </li>
                <li>
                  Receipts for donations will be sent to your registered email
                  address.
                </li>
              </ul>
            </section>
            <SectionDivider />

            <section id="membership">
              <H2>4. Membership & Participation</H2>
              <p>
                By becoming a member or participating in MBCT programs, you
                agree to abide by the Trust’s mission, ethics, and code of
                conduct. Memberships are non-transferable and subject to
                approval.
              </p>
            </section>
            <SectionDivider />

            <section id="intellectual">
              <H2>5. Intellectual Property</H2>
              <p>
                All content, images, graphics, and materials on this site are
                the property of MBCT unless stated otherwise. Unauthorized
                reproduction or redistribution is prohibited.
              </p>
            </section>
            <SectionDivider />

            <section id="liability">
              <H2>6. Limitation of Liability</H2>
              <p>
                MBCT shall not be liable for any indirect, incidental, or
                consequential damages arising from your use of our website,
                services, or donations. While we strive to provide accurate
                information, we do not guarantee its completeness or
                reliability.
              </p>
            </section>
            <SectionDivider />

            <section id="privacy">
              <H2>7. Privacy & Data Protection</H2>
              <p>
                MBCT respects your privacy and protects your personal data as
                described in our{" "}
                <a
                  href="/privacy-policy"
                  className="text-teal-600 hover:underline"
                >
                  Privacy Policy
                </a>
                . By using our site, you consent to data collection and usage
                under that policy.
              </p>
            </section>
            <SectionDivider />

            <section id="refund">
              <H2>8. Refund & Cancellation Policy</H2>
              <p>
                Donations and memberships are non-refundable. In exceptional
                cases (like duplicate transactions), refund requests can be
                submitted to{" "}
                <a
                  href="mailto:worldmarinebiodiversity@gmail.com"
                  className="text-teal-600 hover:underline"
                >
                  worldmarinebiodiversity@gmail.com
                </a>{" "}
                within 7 working days. MBCT reserves the right to approve or
                reject such requests.
              </p>
            </section>
            <SectionDivider />

            <section id="thirdparty">
              <H2>9. Third-Party Links</H2>
              <p>
                Our website may contain links to external websites or
                organizations. MBCT does not control or endorse the content or
                practices of these third parties.
              </p>
            </section>
            <SectionDivider />

            <section id="governinglaw">
              <H2>10. Governing Law & Jurisdiction</H2>
              <p>
                These Terms shall be governed by and construed under the laws of
                India. Any disputes shall fall under the jurisdiction of the
                courts of Tamil Nadu, India.
              </p>
            </section>
            <SectionDivider />

            <section id="updates">
              <H2>11. Amendments to Terms</H2>
              <p>
                MBCT reserves the right to modify or update these Terms at any
                time without prior notice. Updates will be reflected by the
                “Effective Date” shown above.
              </p>
            </section>
            <SectionDivider />

            <section id="contact">
              <H2>12. Contact Information</H2>
              <p>
                For any questions regarding these Terms, please contact:
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
            <SectionDivider />

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

export default TermsAndConditions;
