const Score = ({ currentScore }) => {
  return (
    <div className="flex justify-center gap-32 w-[60rem]">
      <div className="rounded-3xl bg-rose-300 font-semibold p-2 w-1/4 text-xl text-center shadow-lg">
        Current Score: {currentScore}
      </div>
      <div className="rounded-3xl bg-emerald-300 font-semibold p-2 w-1/4 text-xl text-center shadow-lg">
        Best Score: 0
      </div>
    </div>
  );
};

export default Score;
