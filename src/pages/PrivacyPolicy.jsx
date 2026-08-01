// src/pages/PrivacyPolicy.jsx
import React, { useMemo, useState, useEffect } from "react";

/**
 * MBCT Privacy Policy page
 * - Table of Contents (sticky on large screens)
 * - Smooth scrolling + scrollspy (active link highlight)
 * - Back to top button
 */

const sections = [
  { id: "applicability", label: "1) Applicability" },
  { id: "data-we-collect", label: "2) Data We Collect" },
  { id: "purpose", label: "3) Purpose of Data Collection" },
  { id: "consent-rights", label: "4) Consent & User Rights" },
  { id: "disclosure", label: "5) Disclosure of Information" },
  { id: "security", label: "6) Data Security Measures" },
  { id: "retention", label: "7) Data Retention" },
  { id: "cookies", label: "8) Cookies & Tracking" },
  { id: "grievance", label: "9) Grievance Officer" },
  { id: "children", label: "10) Children Privacy" },
  { id: "updates", label: "11) Updates to this Policy" },
  { id: "contact", label: "12) Contact Us" },
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

const PrivacyPolicy = () => {
  const lastUpdated = useMemo(() => "19 November 2025", []);
    const [activeId, setActiveId] = useState(sections[0].id);
    
    const SectionDivider = () => (
      <div className="w-full h-px bg-gray-200 my-8"></div>
    );

  // Smooth-scrolling handler (used on TOC clicks)
  const handleTocClick = (e, id) => {
    e.preventDefault();
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
  };

  // Scrollspy using IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -50% 0px", // tweak so heading appears active when near top
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, observerOptions);

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
          <div className="flex items-start justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                Privacy Policy – Marine Biodiversity Conservation Trust (MBCT)
              </h1>
              <p className="mt-3 max-w-2xl text-white/90">
                Effective Date: <strong>{lastUpdated}</strong>
              </p>
              <div className="mt-4 flex items-center gap-3">
                <Badge>Marine Biodiversity Conservation Trust</Badge>
                <Badge>www.marinebiodiversityconservation.com</Badge>
              </div>
            </div>
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

      {/* Content + TOC */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* TOC */}
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-24 rounded-xl border border-gray-200 p-4 bg-white">
              <p className="text-sm font-semibold text-gray-900 mb-3">
                On this page
              </p>
              <nav className="space-y-2">
                {sections.map((s) => {
                  const active = s.id === activeId;
                  return (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      onClick={(e) => handleTocClick(e, s.id)}
                      className={`block text-sm transition px-2 py-1 rounded-md ${
                        active
                          ? "bg-teal-50 text-sky-700 font-medium border-l-2 border-blue-600"
                          : "text-gray-600 hover:text-sky-700 hover:bg-gray-50"
                      }`}
                    >
                      {s.label}
                    </a>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <article className="lg:col-span-9 leading-relaxed text-gray-700">
            <p className="text-gray-700 mb-6">
              Marine Biodiversity Conservation Trust (MBCT) (“we”, “our”, or
              “us”) is a non-profit organisation focused on marine biodiversity
              conservation, coastal restoration, community engagement and
              environmental education in India. This Privacy Policy explains how
              we collect, use, disclose and safeguard personal information in
              accordance with applicable Indian laws.
            </p>
            <SectionDivider />

            <H2 id="applicability">1. Applicability</H2>
            <p className="mb-4">This Privacy Policy applies to:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Visitors using our website or digital platforms</li>
              <li>
                Volunteers, donors, members and partners who share personal
                data with MBCT
              </li>
              <li>
                All personal information collected by MBCT online or offline
              </li>
            </ul>
            <SectionDivider />

            <H2 id="data-we-collect">2. Data We Collect</H2>

            <p className="font-medium mb-2">A. Personal Information</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Name, Email Address, Contact Number</li>
              <li>Organization/Institution (if applicable), Postal Address</li>
              <li>Volunteer details, photographs (with consent)</li>
            </ul>

            <p className="font-medium mb-2">
              B. Sensitive Personal Data or Information (SPDI)
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                Payment details via third-party processors (we do not store full
                card details)
              </li>
              <li>
                Any ID or sensitive data provided with explicit consent for a
                program
              </li>
            </ul>

            <p className="font-medium mb-2">
              C. Technical &amp; Usage Information
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>IP address, device type, operating system, browser</li>
              <li>Pages visited, referral source, analytics and cookie data</li>
            </ul>

            <SectionDivider />
            <H2 id="purpose">3. Purpose of Data Collection</H2>
            <ul className="list-disc pl-6 mb-6">
              <li>To provide information about our projects and initiatives</li>
              <li>
                To process donations, membership and volunteer registrations
              </li>
              <li>
                To communicate news, events and fundraising campaigns (with
                opt-out)
              </li>
              <li>To improve our website, programs and service delivery</li>
              <li>To comply with legal and auditing requirements</li>
            </ul>
            <SectionDivider />
            <H2 id="consent-rights">4. Consent &amp; User Rights</H2>
            <p className="mb-4">
              We process personal data based on consent, contract performance
              (e.g., donation processing), legitimate interests or legal
              obligations where applicable. You have the right to:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>
                Access, correct, or request deletion of your personal data
              </li>
              <li>Withdraw consent for communications</li>
              <li>Object to certain processing activities</li>
              <li>File a grievance regarding data misuse</li>
            </ul>
            <SectionDivider />
            <H2 id="disclosure">5. Disclosure of Information</H2>
            <p className="mb-4">
              We do not sell or rent personal information. We may share data
              with:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                Trusted third-party service providers (payment gateways,
                hosting, analytics)
              </li>
              <li>
                Project partners and vendors (with appropriate safeguards)
              </li>
              <li>Regulatory or government authorities when required by law</li>
            </ul>
            <p className="mb-6">
              Third parties are contractually required to protect the data they
              process on our behalf.
            </p>
            <SectionDivider />
            <H2 id="security">6. Data Security Measures</H2>
            <p className="mb-4">
              We implement reasonable technical and organizational measures to
              protect data, including SSL/TLS, access controls and periodic
              audits. However, no system is 100% secure. If you suspect a breach,
              contact us immediately.
            </p>
            <p>
              All payment transactions are processed through secure payment
              gateways such as Razorpay, which use industry-standard encryption.
              MBCT does not store or have access to your complete card or
              banking details.
            </p>
            <SectionDivider />
            <H2 id="retention">7. Data Retention</H2>
            <p className="mb-4">
              We retain personal data only for as long as necessary to fulfil
              the purposes for which it was collected, or as required by law
              (for example, financial records for audit).
            </p>
            <SectionDivider />
            <H2 id="cookies">8. Cookies &amp; Tracking</H2>
            <p className="mb-4">
              We use cookies and similar technologies to provide functionality
              and analytics. You can disable cookies in your browser settings,
              but some features may not work.
            </p>
            <SectionDivider />
            <H2 id="grievance">9. Grievance Officer</H2>
            <p className="mb-6">
              In accordance with applicable Indian rules, the designated
              Grievance Officer for MBCT is:
              <br />
              <strong>Name:</strong> The Secretary, Marine Biodiversity
              Conservation Trust
              <br />
              <strong>Email:</strong>{" "}
              <a
                href="mailto:worldmarinebiodiversity@gmail.com"
                className="text-teal-600 hover:underline"
              >
                worldmarinebiodiversity@gmail.com
              </a>
            </p>
            <SectionDivider />
            <H2 id="children">10. Children Privacy</H2>
            <p className="mb-6">
              Our services are not directed at children under 16. We do not
              knowingly collect personal data from children. If you believe we
              have collected such data, contact us and we will promptly remove
              it.
            </p>
            <SectionDivider />
            <H2 id="updates">11. Updates to this Policy</H2>
            <p className="mb-6">
              We may update this Privacy Policy from time to time. When we do,
              we will update the Effective Date at the top. We encourage you to
              review this page periodically.
            </p>
            <SectionDivider />
            <H2 id="contact">12. Contact Us</H2>
            <p className="mb-6">
              Marine Biodiversity Conservation Trust (MBCT)
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

            <Divider />

            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Marine Biodiversity Conservation
              Trust. All rights reserved.
            </p>
          </article>
        </div>
      </section>

      <BackToTop />
    </div>
  );
};

export default PrivacyPolicy;
