import titanic from "../../assets/titanic.png";

export default function TitanicWreck() {
  return (
    <div className="flex flex-col items-center gap-3">
      {/* IMAGE WRAPPER (VERY SMALL) */}
      <div className="w-[180px] h-[240px] overflow-hidden rounded-lg shadow-lg">
        <img
          src={titanic}
          alt="Titanic wreck"
          className="w-full h-full object-contain opacity-90"
        />
      </div>

      {/* TEXT */}
      <p className="text-center text-[11px] leading-tight text-white/70 max-w-[220px]">
        RMS Titanic — resting at approximately{" "}
        <b className="text-white">3,800 meters</b> below the ocean surface since
        1912.
      </p>
    </div>
  );
}
