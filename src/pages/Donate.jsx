import React, { useEffect, useMemo, useState } from "react";
import { FaHandHoldingUsd, FaShieldAlt, FaGlobeAsia } from "react-icons/fa";

const API_BASE =
  import.meta.env.VITE_API_BASE ||
  "https://back.marinebiodiversityconservation.com";
const RAZORPAY_KEY = import.meta.env.VITE_RAZORPAY_KEY; // rzp_test_... or rzp_live_...

const FX_RATES = {
  INR: 1,
  USD: 83,
  EUR: 90,
  GBP: 105,
  AED: 22.5,
};

const CURRENCIES = [
  { code: "INR", label: "₹ INR – Indian Rupee" },
  { code: "USD", label: "$ USD – US Dollar" },
  { code: "EUR", label: "€ EUR – Euro" },
  { code: "GBP", label: "£ GBP – British Pound" },
  { code: "AED", label: "د.إ AED – UAE Dirham" },
];

import RazorpayLoader from "../components/RazorpayLoader";
import SEO from "../components/SEO";

export default function Donate() {
  const [currency, setCurrency] = useState("INR");
  const [amount, setAmount] = useState("");
  const [coverFees, setCoverFees] = useState(true);

  // ✅ NEW: donor inputs (so Razorpay can email the receipt)
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [donorPhone, setDonorPhone] = useState("");

  const [loading, setLoading] = useState(false);
  const [thanks, setThanks] = useState(false);

  // Razorpay is loaded via the component below


  const numericAmount = useMemo(() => {
    const n = parseFloat(amount);
    return Number.isFinite(n) ? n : 0;
  }, [amount]);

  const inrAmount = useMemo(() => {
    let inr = numericAmount * (FX_RATES[currency] || 1);

    if (coverFees && inr > 0) {
      // approx razorpay fee
      const feePercent = 0.022;
      const fixed = 3;
      inr = inr + inr * feePercent + fixed;
    }

    return Math.round(inr);
  }, [numericAmount, currency, coverFees]);

  async function donateNow() {
    if (!RAZORPAY_KEY) {
      alert("Missing Razorpay key! Add VITE_RAZORPAY_KEY in frontend .env");
      return;
    }

    if (!inrAmount || inrAmount <= 0) {
      alert("Enter a valid amount!");
      return;
    }

    // ✅ validate donor email & phone so razorpay receipt goes correctly
    if (!donorEmail || !donorEmail.includes("@")) {
      alert("Please enter a valid email to receive receipt.");
      return;
    }

    if (!donorPhone || donorPhone.length < 10) {
      alert("Please enter a valid phone number.");
      return;
    }

    try {
      setLoading(true);

      // 1) create order from backend
      const orderRes = await fetch(`${API_BASE}/api/razorpay/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amountInr: inrAmount,
          meta: {
            originalCurrency: currency,
            originalAmount: numericAmount,
            coverFees,
            source: "donate-page",
            donorName,
            donorEmail,
            donorPhone,
          },
        }),
      });

      const orderJson = await orderRes.json();

      if (!orderRes.ok || !orderJson?.order?.id) {
        console.error(orderJson);
        alert(orderJson?.message || "Order creation failed");
        return;
      }

      // 2) open razorpay checkout
      if (!window.Razorpay) {
        alert("Razorpay SDK not loaded. Please refresh.");
        return;
      }

      const options = {
        key: RAZORPAY_KEY,
        order_id: orderJson.order.id,
        amount: orderJson.order.amount,
        currency: "INR",
        name: "Marine Biodiversity Conservation Trust",
        description: "Donation to support Marine Conservation",
        notes: orderJson.order.notes || {},
        theme: { color: "#0077b6" },

        // ✅ IMPORTANT: this makes Razorpay send receipt email like your screenshot
        prefill: {
          name: donorName || "Donor",
          email: donorEmail,
          contact: donorPhone,
        },

        handler: async function (response) {
          // 3) verify payment
          const verifyRes = await fetch(`${API_BASE}/api/razorpay/verify`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ...response,
              donorName,
              donorEmail,
              donorPhone,
              amountInr: inrAmount,
            }),
          });

          const verifyJson = await verifyRes.json();

          if (verifyRes.ok && verifyJson?.success) {
            setThanks(true);
            setAmount("");
            setDonorName("");
            setDonorEmail("");
            setDonorPhone("");
          } else {
            console.error("Verify failed:", verifyJson);
            alert("Payment verification failed. Please contact support.");
          }
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", function (err) {
        console.error("Payment failed:", err);
        alert(err?.error?.description || "Payment Failed");
      });

      rzp.open();
    } catch (err) {
      console.error(err);
      alert("Something went wrong: " + err.message);
    } finally {
      setLoading(false);
    }
  }



  return (
    <main className="min-h-screen bg-gradient-to-b from-[#00121a] via-[#002b3a] to-[#00121a] text-sky-50 px-5 py-12">
      <SEO 
        title="Donate" 
        description="Support Marine Biodiversity Conservation. Your donation helps protect oceans and marine life." 
        canonical="https://www.marinebiodiversityconservation.com/donate"
      />
      <RazorpayLoader />
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Header */}
        <section className="text-center space-y-3">
          <p className="text-[11px] uppercase tracking-[0.35em] text-cyan-300">
            Donate
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Make a Gift to Protect Our Oceans
          </h1>
          <p className="max-w-3xl mx-auto text-sm md:text-base text-cyan-100">
            Your contribution helps conserve marine biodiversity, protect
            habitats, and support coastal communities.
          </p>

          {/* trust badges */}
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <div className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-xs text-cyan-100">
              <FaShieldAlt className="text-cyan-300" />
              Secure payment via Razorpay
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-xs text-cyan-100">
              <FaGlobeAsia className="text-cyan-300" />
              Donations accepted worldwide
            </div>
          </div>
        </section>

        {/* Layout */}
        <section className="grid lg:grid-cols-2 gap-6">
          {/* Left card */}
          <div className="bg-white/5 rounded-2xl border border-white/10 shadow-xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-white mb-1">
              Donation Details
            </h2>
            <p className="text-sm text-cyan-200 mb-6">
              Choose your currency and amount. We charge securely in INR.
            </p>

            <div className="space-y-4">
              {/* ✅ NEW donor fields */}
              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm text-cyan-100 mb-1">
                    Full Name
                  </label>
                  <input
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full px-3 py-2.5 rounded-lg bg-transparent border border-white/15 text-white outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-sm text-cyan-100 mb-1">
                    Phone
                  </label>
                  <input
                    value={donorPhone}
                    onChange={(e) =>
                      setDonorPhone(
                        e.target.value.replace(/\D/g, "").slice(0, 10),
                      )
                    }
                    placeholder="9876543210"
                    inputMode="numeric"
                    className="w-full px-3 py-2.5 rounded-lg bg-transparent border border-white/15 text-white outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-cyan-100 mb-1">
                  Email (Receipt will be sent here)
                </label>
                <input
                  value={donorEmail}
                  onChange={(e) => setDonorEmail(e.target.value)}
                  placeholder="yourmail@gmail.com"
                  inputMode="email"
                  className="w-full px-3 py-2.5 rounded-lg bg-transparent border border-white/15 text-white outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-sm text-cyan-100 mb-1">
                  Currency
                </label>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg bg-[#001921] border border-white/15 text-white"
                >
                  {CURRENCIES.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm text-cyan-100 mb-1">
                  Amount in {currency}
                </label>
                <input
                  value={amount}
                  onChange={(e) => {
                    const v = e.target.value;
                    if (/^[0-9]*\.?[0-9]{0,2}$/.test(v) || v === "")
                      setAmount(v);
                  }}
                  placeholder={currency === "INR" ? "500" : "25"}
                  inputMode="decimal"
                  className="w-full px-3 py-2.5 rounded-lg bg-transparent border border-white/15 text-white outline-none focus:border-cyan-400"
                />
              </div>

              <div className="flex items-start gap-2 text-sm text-cyan-100">
                <input
                  id="fees"
                  type="checkbox"
                  checked={coverFees}
                  onChange={() => setCoverFees((s) => !s)}
                  className="mt-1 accent-[#00b4d8]"
                />
                <label htmlFor="fees" className="leading-snug">
                  Add a small amount to cover payment processing fees.
                </label>
              </div>

              <button
                onClick={donateNow}
                disabled={loading}
                className="w-full mt-3 inline-flex items-center justify-center gap-2
                bg-gradient-to-r from-[#00b4d8] to-[#0077b6]
                px-5 py-3 rounded-xl text-base font-semibold text-white
                shadow-lg hover:opacity-95 disabled:opacity-60"
              >
                <FaHandHoldingUsd />
                {loading ? "Processing..." : "Donate Securely"}
              </button>

              <p className="text-xs text-cyan-200 text-center pt-2">
                By donating, you support conservation projects and awareness
                initiatives.
              </p>
            </div>
          </div>

          {/* Right card */}
          <div className="bg-white/5 rounded-2xl border border-white/10 shadow-xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-white mb-4">
              Summary of your gift
            </h2>

            <div className="space-y-3 text-cyan-100">
              <div className="flex items-center justify-between rounded-xl bg-black/20 border border-white/10 px-4 py-3">
                <span className="text-sm">Donation</span>
                <span className="font-semibold text-white">
                  {numericAmount > 0
                    ? `${numericAmount.toLocaleString()} ${currency}`
                    : "—"}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-black/20 border border-white/10 px-4 py-3">
                <span className="text-sm">Charged in INR</span>
                <span className="font-semibold text-white">
                  {inrAmount > 0 ? `₹${inrAmount.toLocaleString()}` : "—"}
                </span>
              </div>

              <div className="rounded-xl bg-black/20 border border-white/10 px-4 py-4">
                <p className="text-xs text-cyan-200 leading-relaxed">
                  Exchange rates shown are approximate. Final charged amount may
                  vary slightly depending on bank/card issuer. Payments are
                  processed securely via Razorpay.
                </p>
              </div>

              <div className="rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-white/10 px-4 py-4">
                <p className="text-sm font-semibold text-white mb-1">
                  Need support?
                </p>
                <p className="text-xs text-cyan-200">
                  For donation or CSR enquiries, email{" "}
                  <a
                    href="mailto:worldmarinebiodiversity@gmail.com"
                    className="underline"
                  >
                    worldmarinebiodiversity@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* THANK YOU MODAL */}
        {thanks && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-6 text-slate-900 shadow-2xl">
              <h3 className="text-xl font-bold mb-2">Thank you</h3>
              <p className="text-sm text-slate-700 mb-5">
                Your donation helps protect marine ecosystems and coastal
                communities. We truly appreciate your support.
              </p>

              <button
                onClick={() => setThanks(false)}
                className="w-full rounded-xl bg-[#0077b6] px-4 py-2.5 text-white font-semibold hover:opacity-95"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
