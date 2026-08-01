import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Wind,
  Cloud,
  Utensils,
  Stethoscope, // For medical/health
  Droplets,
  MoveRight,
  Leaf,
  HandHeart,
} from "lucide-react";

export default function OceanLifePage() {
  const navigate = useNavigate();
  const [showPledgeModal, setShowPledgeModal] = useState(false);
  const [showThankYouModal, setShowThankYouModal] = useState(false);

  // Handle Pledge Logic
  const handlePledge = () => {
    setShowPledgeModal(false);
    setShowThankYouModal(true);
  };

  return (
    <div className="min-h-screen bg-[#001F3F] text-white font-sans">
      {/* ----------------- APP BAR ----------------- */}
      <header className="bg-[#0077B6] p-4 flex items-center shadow-md sticky top-0 z-10">
        <button
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-white/10 rounded-full transition"
        >
          
        </button>
        <h1 className="flex-1 text-center text-xl font-bold tracking-wide">
          Ocean & Our Life
        </h1>
        {/* Placeholder for alignment */}
        <div className="w-10"></div>
      </header>

      {/* ----------------- BODY ----------------- */}
      <main className="max-w-3xl mx-auto p-6 space-y-8">
        {/* 🌊 HERO QUOTE */}
        <div className="p-6 rounded-2xl border border-cyan-400 bg-gradient-to-br from-cyan-500/25 to-blue-500/15 shadow-lg backdrop-blur-sm">
          <p className="text-center text-lg md:text-xl font-bold leading-relaxed">
            “The ocean is not a place we visit.
            <br />
            It is our home.”
          </p>
        </div>

        {/* 🌊 HEADER MESSAGE */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Our Life, Our Ocean,
            <br />
            Our Responsibility
          </h2>
          <p className="text-white/70 text-base leading-relaxed">
            Every breath we take, every drop of rain and much of the food we eat
            comes from the ocean.
          </p>
        </div>

        {/* 🎴 LIFE CARDS SECTION */}
        <div className="space-y-4">
          <LifeCard
            icon={<Wind className="w-6 h-6 text-cyan-400" />}
            title="Oxygen for Life"
            desc="Phytoplankton in the ocean produce over 50% of the oxygen we breathe."
            borderColor="border-cyan-400/50"
            bgColor="bg-cyan-400/10"
          />
          <LifeCard
            icon={<Cloud className="w-6 h-6 text-blue-400" />}
            title="Climate Balance"
            desc="Oceans regulate Earth’s temperature and reduce climate extremes."
            borderColor="border-blue-400/50"
            bgColor="bg-blue-400/10"
          />
          <LifeCard
            icon={<Utensils className="w-6 h-6 text-green-400" />}
            title="Food & Livelihood"
            desc="Over 3 billion people rely on oceans for food and employment."
            borderColor="border-green-400/50"
            bgColor="bg-green-400/10"
          />
          <LifeCard
            icon={<Stethoscope className="w-6 h-6 text-purple-400" />}
            title="Medicine & Biodiversity"
            desc="Marine life contributes to medicines used for cancer and pain relief."
            borderColor="border-purple-400/50"
            bgColor="bg-purple-400/10"
          />
        </div>

        {/* 📊 IMPACT ROW */}
        <div className="flex justify-between items-start py-4 border-y border-white/10">
          <ImpactItem icon={<Wind />} label="Every Breath" />
          <ImpactItem icon={<Droplets />} label="Rain Cycle" />
          <ImpactItem icon={<Utensils />} label="Daily Food" />
        </div>

        {/* 🌱 FUTURE GENERATION */}
        <div className="p-5 rounded-2xl border border-white/20 bg-white/5">
          <h3 className="text-xl font-bold text-green-400 mb-2">
            For Future Generations
          </h3>
          <p className="text-white/70 leading-relaxed">
            Protecting the ocean today ensures clean air, food security and a
            stable climate for our children tomorrow.
          </p>
        </div>

        {/* ✋ PERSONAL PLEDGE */}
        <div className="p-6 rounded-2xl border border-green-400 bg-green-500/10 text-center">
          <h3 className="text-2xl font-bold text-green-400 mb-3">
            My Promise to the Ocean
          </h3>
          <p className="text-white/70 mb-6">
            I will reduce plastic use, respect marine life and inspire others to
            protect our oceans.
          </p>
          <button
            onClick={() => setShowPledgeModal(true)}
            className="px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-lg transition shadow-lg transform active:scale-95"
          >
            I Take This Pledge
          </button>
        </div>

        {/* ➡ NEXT STEP BUTTON */}
        <button
          onClick={() => navigate("/threats")} // Update route as needed
          className="w-full flex items-center justify-center gap-3 p-4 bg-cyan-600 hover:bg-cyan-500 rounded-2xl font-bold text-lg transition shadow-lg"
        >
          See Threats to Our Oceans
          <MoveRight className="w-5 h-5" />
        </button>

        <div className="h-10"></div>
      </main>

      {/* ----------------- MODALS ----------------- */}

      {/* 1. Pledge Modal */}
      {showPledgeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#001F3F] border border-cyan-500/30 w-full max-w-sm rounded-3xl p-6 shadow-2xl transform transition-all scale-100">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
              Ocean Protection Pledge
            </h3>
            <div className="text-white/80 space-y-2 mb-6 leading-relaxed">
              <p>I pledge to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Reduce plastic use</li>
                <li>Respect marine life</li>
                <li>Spread awareness</li>
                <li>Protect oceans for future generations</li>
              </ul>
              <p className="pt-2 italic text-cyan-200/80">
                "Because the ocean is our life, not a resource."
              </p>
            </div>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowPledgeModal(false)}
                className="px-4 py-2 text-white/70 hover:text-white transition"
              >
                Cancel
              </button>
              <button
                onClick={handlePledge}
                className="px-6 py-2 bg-green-600 hover:bg-green-500 text-white font-bold rounded-lg"
              >
                I Pledge
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. Thank You Modal */}
      {showThankYouModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#001F3F] border border-green-500/30 w-full max-w-sm rounded-3xl p-8 shadow-2xl text-center">
            <div className="flex justify-center mb-4">
              <Leaf className="w-16 h-16 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-green-400 mb-2">
              Thank You
            </h3>
            <p className="text-white/70 leading-relaxed mb-6">
              Your small promise today
              <br />
              creates a better ocean tomorrow.
            </p>
            <button
              onClick={() => setShowThankYouModal(false)}
              className="text-cyan-400 font-bold hover:text-cyan-300 transition"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ----------------- SUB COMPONENTS -----------------

const LifeCard = ({ icon, title, desc, borderColor, bgColor }) => {
  return (
    <div
      className={`flex items-start gap-4 p-4 rounded-2xl border ${borderColor} bg-black/20 backdrop-blur-sm`}
    >
      <div className={`p-3 rounded-full ${bgColor}`}>{icon}</div>
      <div>
        <h4 className="text-lg font-bold text-white mb-1">{title}</h4>
        <p className="text-sm text-white/70 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
};

const ImpactItem = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center flex-1">
      <div className="text-cyan-400 mb-2 [&>svg]:w-8 [&>svg]:h-8">{icon}</div>
      <span className="text-xs text-white/70 font-medium">{label}</span>
    </div>
  );
};
