import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { allQuizQuestions } from "../data/quizData";
import ProgressBar from "../components/quiz/ProgressBar";
import ResultScreen from "../components/quiz/ResultScreen";

/* 🔹 Hook to get full window size */
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

export default function MarineQuiz() {
  const [weeklyQuestions, setWeeklyQuestions] = useState([]);

  // UI State
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(5).fill(null));
  const [selected, setSelected] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [finished, setFinished] = useState(false);

  const { width, height } = useWindowSize();

  // 1. LOAD WEEKLY QUESTIONS
  useEffect(() => {
    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 1);
    const pastDays = Math.floor((now - startOfYear) / (24 * 60 * 60 * 1000));
    const currentWeek = Math.ceil((pastDays + startOfYear.getDay() + 1) / 7);

    // Rotate batches (0, 1, 2, 3)
    const batchIndex = currentWeek % 4;
    const batchSize = 5;

    // Slice master list
    const start = batchIndex * batchSize;
    const end = start + batchSize;

    setWeeklyQuestions(allQuizQuestions.slice(start, end));
  }, []);

  // Loading State
  if (weeklyQuestions.length === 0) {
    return (
      <div className="min-h-screen bg-[#011f33] text-white flex items-center justify-center">
        Loading Weekly Quiz...
      </div>
    );
  }

  const current = weeklyQuestions[index];

  // 2. HANDLE SELECTION
  const handleSelect = (option) => {
    if (selected) return; // Prevent multiple clicks

    setSelected(option);
    const isCorrect = option === current.answer;

    const newAnswers = [...answers];
    newAnswers[index] = isCorrect ? "correct" : "wrong";
    setAnswers(newAnswers);

    if (isCorrect) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 1000);
    }

    // ⏱️ Wait 3.5 seconds so user can read the explanation
    setTimeout(() => {
      if (index === weeklyQuestions.length - 1) {
        setFinished(true);
      } else {
        setIndex(index + 1);
        setSelected(null);
      }
    }, 3500);
  };

  // Restart Logic
  const handleRestart = () => {
    setIndex(0);
    setAnswers(Array(5).fill(null));
    setSelected(null);
    setFinished(false);
    setShowConfetti(false);
  };

  if (finished)
    return <ResultScreen answers={answers} onRestart={handleRestart} />;

  return (
    <div className="min-h-screen bg-[#011f33] text-white px-6 relative flex flex-col justify-center">
      {/* Confetti Overlay */}
      {showConfetti && (
        <div className="fixed inset-0 z-[9999] pointer-events-none">
          <Confetti
            width={width}
            height={height}
            recycle={false}
            numberOfPieces={400}
            gravity={0.25}
          />
        </div>
      )}

      {/* Progress Bar */}
      <ProgressBar answers={answers} />

      {/* Question Counter */}
      <h2 className="text-sm text-gray-300 mt-6">
        Question {index + 1}/{weeklyQuestions.length}
      </h2>

      {/* Question Text */}
      <h1 className="text-xl font-semibold mt-3 min-h-[60px]">
        {current.question}
      </h1>

      {/* Options List */}
      <div className="mt-6 space-y-4">
        {current.options.map((opt) => {
          let style = "bg-[#0b3954]";

          if (selected) {
            if (opt === current.answer)
              style = "bg-green-600 border-green-400"; // Correct
            else if (opt === selected)
              style = "bg-red-600 border-red-400"; // Wrong
            else style = "bg-[#0b3954] opacity-50"; // Others
          }

          return (
            <button
              key={opt}
              onClick={() => handleSelect(opt)}
              className={`w-full py-4 px-4 text-left rounded-xl transition border border-white/5 ${style}`}
            >
              {opt}
            </button>
          );
        })}
      </div>

      {/* 💡 EXPLANATION BOX (Only shows after answering) */}
      {selected && (
        <div className="mt-6 p-4 bg-cyan-900/30 border border-cyan-500/30 rounded-xl animate-pulse">
          <p className="text-cyan-400 font-bold text-xs mb-1 tracking-wider">
            DID YOU KNOW?
          </p>
          <p className="text-gray-200 text-sm leading-relaxed">
            {current.explanation}
          </p>
        </div>
      )}
    </div>
  );
}
