const ProgressBar = ({ answers }) => {
  return (
    <div className="flex justify-center gap-2 py-3 sticky top-14 bg-[#022c43] z-20">
      {answers.map((status, i) => (
        <div
          key={i}
          className={`w-4 h-4 rounded-full ${
            status === "correct"
              ? "bg-green-400"
              : status === "wrong"
              ? "bg-red-400"
              : "bg-gray-500"
          }`}
        />
      ))}
    </div>
  );
};

export default ProgressBar;
