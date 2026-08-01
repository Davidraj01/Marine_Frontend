import Confetti from "react-confetti";
import { useEffect, useState } from "react";

/* 🔹 window size hook (same idea as quiz page) */
function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}

const ResultScreen = ({ answers, onRestart }) => {
  const score = answers.filter((a) => a === "correct").length;
  const percent = Math.round((score / 5) * 100);
  const { width, height } = useWindowSize();

  const isPassed = score >= 3;

  let title = "Beginner Explorer 📘";
  if (score === 5) title = "Marine Expert 🐋";
  else if (score >= 3) title = "Ocean Learner 🌊";

  return (
    <div className="min-h-screen bg-[#011f33] text-white flex flex-col items-center justify-center px-6 relative">
      {/* 🎉 CONFETTI ONLY IF PASSED */}
      {isPassed && (
        <div className="fixed inset-0 z-[9999] pointer-events-none">
          <Confetti
            width={width}
            height={height}
            recycle={true} // 🔁 loop
            numberOfPieces={300}
            gravity={0.25}
          />
        </div>
      )}

      <h1 className="text-3xl font-bold">Your Score</h1>

      <p className="text-5xl mt-4">{score} / 5</p>

      <p className="text-xl text-cyan-400 mt-2">{percent}%</p>

      <div className="mt-6 px-6 py-3 rounded-full bg-[#0b3954]">{title}</div>

      
      <button
        onClick={onRestart}
        className="mt-8 px-8 py-3 bg-cyan-500 rounded-full hover:brightness-110 transition"
      >
        Play Again
      </button>

      
    </div>
  );
};

export default ResultScreen;
