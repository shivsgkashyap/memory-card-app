const Score = ({ currentScore, bestScore }) => {
  return (
    <div className="flex flex-col place-items-center justify-center gap-8 lg:flex-row lg:w-[60rem] lg:gap-32">
      <div className="rounded-3xl bg-rose-300 font-semibold p-2 w-80 text-xl text-center shadow-lg lg:w-1/4">
        Current Score: {currentScore}
      </div>
      <div className="rounded-3xl bg-emerald-300 font-semibold p-2 w-80 text-xl text-center shadow-lg lg:w-1/4">
        Best Score: {bestScore}
      </div>
    </div>
  );
};

export default Score;
