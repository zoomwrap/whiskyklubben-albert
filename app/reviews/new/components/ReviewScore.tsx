type ReviewScoreProps = {
  score: number;
};

export function ReviewScore({ score }: ReviewScoreProps) {
  return (
    <div className="mt-10 rounded-2xl bg-indigo-900 p-6 text-center">
      <p className="text-gray-400">Samlet score</p>

      <h2 className="mt-2 text-5xl font-bold text-yellow-400">
        {score} / 100
      </h2>
    </div>
  );
}
