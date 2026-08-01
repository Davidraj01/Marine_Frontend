// src/pages/DonationPolicy.jsx
import React, { useMemo, useState, useEffect } from "react";

/**
 * Donation Policy — Marine Biodiversity Conservation Trust (MBCT)
 * - Matches the style and behavior of other policy pages
 * - Sticky TOC, smooth scrolling, scrollspy, back-to-top
 */

const sections = [
  { id: "intro", label: "1) Introduction" },
  { id: "use-of-funds", label: "2) Use of Donations" },
  { id: "earmarking", label: "3) Earmarked Donations & Projects" },
  { id: "receipts", label: "4) Receipts & Tax Benefits (80G)" },
  { id: "recurring", label: "5) Recurring Donations & Subscriptions" },
  { id: "refunds", label: "6) Refunds & Disputes" },
  { id: "accounting", label: "7) Accounting & Audit" },
  { id: "privacy", label: "8) Donor Privacy" },
  { id: "transparency", label: "9) Reporting & Transparency" },
  { id: "contact", label: "10) Contact Information" },
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

export default function DonationPolicy() {
  const lastUpdated = useMemo(() => "19 November 2025", []);
  const [activeId, setActiveId] = useState(sections[0].id);

  const handleTocClick = (e, id) => {
    e.preventDefault();
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
  };

  // scrollspy
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
            Donation Policy – Marine Biodiversity Conservation Trust (MBCT)
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

          {/* Main content */}
          <article className="lg:col-span-9 leading-relaxed text-gray-700">
            <p className="mb-6 text-gray-700">
              MBCT is grateful for every contribution. This Donation Policy
              explains how we accept, process, utilise, acknowledge and report
              donations. It is designed to ensure transparency and
              accountability to donors, beneficiaries and regulators.
            </p>

            <section id="intro">
              <H2>1. Introduction</H2>
              <p>
                Donations make our conservation work possible. MBCT accepts
                donations from individuals, corporates, and partner
                organisations. Donations may be made online via payment gateways
                (e.g., Razorpay), by bank transfer, cheque, or other recognised
                channels.
              </p>
            </section>
            <Divider />

            <section id="use-of-funds">
              <H2>2. Use of Donations</H2>
              <p>
                Donations received by MBCT will be used to support the Trust's
                programs and activities including research, habitat restoration,
                community engagement, education, and operational costs. Funds
                will be applied in accordance with MBCT's mission and any
                specific terms agreed with the donor.
              </p>
            </section>
            <Divider />

            <section id="earmarking">
              <H2>3. Earmarked Donations & Projects</H2>
              <p>
                Donors may choose to earmark contributions for a specific
                project or program. MBCT will respect such designations where
                feasible. If an earmarked project cannot proceed, MBCT will
                contact the donor to propose an alternative use consistent with
                the donor's intent.
              </p>
            </section>
            <Divider />

            <section id="receipts">
              <H2>4. Receipts & Tax Benefits (80G)</H2>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  Official donation receipts will be issued for online and
                  offline contributions. These receipts are provided to the
                  donor's registered email or postal address as applicable.
                </li>
                <li>
                  MBCT may provide tax exemption certificates (e.g., 80G) where
                  the Trust is eligible and based on applicable Indian tax laws.
                  Availability of tax benefits depends on current tax
                  regulations and donor's eligibility.
                </li>
              </ul>
              <p className="text-sm text-gray-600">
                Note: Tax treatment varies. Donors should consult their tax
                advisor for personal tax advice.
              </p>
            </section>
            <Divider />

            <section id="recurring">
              <H2>5. Recurring Donations & Subscriptions</H2>
              <p>
                If recurring donations or memberships are offered (via
                subscription), donors will be informed of the billing frequency
                and amount at signup. Donors can cancel recurring payments at
                any time by contacting MBCT or through the payment provider,
                subject to the provider's cancellation process.
              </p>
            </section>
            <Divider />

            <section id="refunds">
              <H2>6. Refunds & Disputes</H2>
              <p>
                Donations are generally non-refundable. Exceptions may be made
                for duplicate transactions, payment errors, or unauthorised
                charges, subject to verification. Donors must notify MBCT within
                <strong> 7 working days</strong> of the transaction to request
                investigation. Valid refunds, once approved, will be processed
                through the original payment method and may take 7–10 working
                days.
              </p>
            </section>
            <Divider />

            <section id="accounting">
              <H2>7. Accounting & Audit</H2>
              <p>
                MBCT maintains financial records in accordance with applicable
                Indian laws and accounting standards. The Trust undertakes
                periodic internal and external audits. Donors may request
                financial information about specific projects; MBCT will provide
                available summaries in line with confidentiality obligations.
              </p>
            </section>
            <Divider />

            <section id="privacy">
              <H2>8. Donor Privacy</H2>
              <p>
                Donor personal information is handled in accordance with our{" "}
                <a
                  href="/privacy-policy"
                  className="text-teal-600 hover:underline"
                >
                  Privacy Policy
                </a>
                . We do not sell donor information. Donors can opt out of
                marketing communications while still receiving essential
                transactional messages (receipts, confirmations).
              </p>
            </section>
            <Divider />

            <section id="transparency">
              <H2>9. Reporting & Transparency</H2>
              <p>
                MBCT is committed to transparency. Summary reports, annual
                statements and project updates will be made available to donors
                on request and through public reports where possible. Major
                funding and partnerships may be acknowledged publicly with donor
                consent.
              </p>
            </section>
            <Divider />

            <section id="contact">
              <H2>10. Contact Information</H2>
              <p>
                For donation-related queries, receipts, or refund requests,
                contact:
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
              Trust. All rights reserved.
            </p>
          </article>
        </div>
      </section>

      <BackToTop />
    </div>
  );
}
