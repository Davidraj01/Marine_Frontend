import React, { useMemo, useState, useEffect } from "react";

const sections = [
  { id: "intro", label: "1) Introduction" },
  { id: "donation-policy", label: "2) Donation & Payment Policy" },
  { id: "membership-policy", label: "3) Membership Cancellation Policy" },
  { id: "refund-policy", label: "4) Refund Conditions" },
  { id: "duplicate", label: "5) Duplicate or Error Transactions" },
  { id: "processing", label: "6) Refund Processing Time" },
  { id: "no-liability", label: "7) Limitation of Liability" },
  { id: "contact", label: "8) Contact Information" },
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

const RefundPolicy = () => {
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
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900 via-teal-500 to-sky-500 opacity-95" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 text-white">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Cancellation & Refund Policy – Marine Biodiversity Conservation
            Trust (MBCT)
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

          {/* Main Content */}
          <article className="lg:col-span-9 leading-relaxed text-gray-700">
            <section id="intro">
              <H2>1. Introduction</H2>
              <p>
                Marine Biodiversity Conservation Trust (MBCT) is a registered
                non-profit organisation committed to marine and coastal
                ecosystem protection in India. This Cancellation & Refund Policy
                applies to all donations, membership fees, and other financial
                contributions made through our website or official payment
                channels.
              </p>
            </section>
            <Divider />

            <section id="donation-policy">
              <H2>2. Donation & Payment Policy</H2>
              <ul className="list-disc pl-6">
                <li>
                  All donations made to MBCT are voluntary and non-refundable.
                </li>
                <li>
                  Payments are processed securely through trusted gateways like
                  Razorpay.
                </li>
                <li>
                  MBCT does not store or have access to full credit/debit card
                  or net banking information.
                </li>
                <li>
                  Donations will be used to support our ongoing and future
                  conservation projects as per our organisational objectives.
                </li>
              </ul>
            </section>
            <Divider />

            <section id="membership-policy">
              <H2>3. Membership Cancellation Policy</H2>
              <p>
                Memberships or recurring contributions can be cancelled by
                submitting a written request to{" "}
                <a
                  href="mailto:worldmarinebiodiversity@gmail.com"
                  className="text-teal-600 hover:underline"
                >
                  worldmarinebiodiversity@gmail.com
                </a>{" "}
                within <strong>7 days</strong> of joining or renewal. After that
                period, membership fees are non-refundable.
              </p>
            </section>
            <Divider />

            <section id="refund-policy">
              <H2>4. Refund Conditions</H2>
              <p>
                Refunds may be issued only under the following exceptional
                circumstances:
              </p>
              <ul className="list-disc pl-6">
                <li>
                  Duplicate payment or transaction due to technical error.
                </li>
                <li>
                  Incorrect amount debited during a donation or membership
                  process.
                </li>
                <li>
                  Payment made in error or unauthorized transaction, subject to
                  verification and approval.
                </li>
              </ul>
              <p className="mt-3">
                All valid refund requests must be made within{" "}
                <strong>7 working days</strong> of the transaction date.
              </p>
            </section>
            <Divider />

            <section id="duplicate">
              <H2>5. Duplicate or Error Transactions</H2>
              <p>
                In the event of a duplicate or erroneous transaction, please
                notify MBCT immediately via email with transaction details and
                proof of payment. Verified duplicate payments will be refunded
                within the stated timeline.
              </p>
            </section>
            <Divider />

            <section id="processing">
              <H2>6. Refund Processing Time</H2>
              <p>
                Once a refund request is approved, it will be processed within{" "}
                <strong>7–10 working days</strong>. The amount will be credited
                using the original mode of payment (e.g., Razorpay, credit/debit
                card, UPI, or bank transfer).
              </p>
            </section>
            <Divider />

            <section id="no-liability">
              <H2>7. Limitation of Liability</H2>
              <p>
                MBCT shall not be responsible for delays, failures, or technical
                issues in payment systems managed by third-party gateways.
                Refunds are subject to verification and approval by MBCT’s
                finance team.
              </p>
            </section>
            <Divider />

            <section id="contact">
              <H2>8. Contact Information</H2>
              <p>
                For cancellation or refund-related inquiries, contact:
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

export default RefundPolicy;
