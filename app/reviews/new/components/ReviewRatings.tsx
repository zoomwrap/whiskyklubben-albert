import ScoreInput from "@/app/components/ScoreInput";
import type {
  RatingField,
  ReviewFieldChangeHandler,
  ReviewForm,
} from "../types";

type ReviewRatingsProps = {
  form: ReviewForm;
  hasRangeError: (field: RatingField) => boolean;
  onChange: ReviewFieldChangeHandler;
};

const ratings: Array<{ field: RatingField; label: string }> = [
  { field: "nose", label: "Næse" },
  { field: "taste", label: "Smag" },
  { field: "finish", label: "Afslutning" },
  { field: "balance", label: "Balance" },
];

export function ReviewRatings({
  form,
  hasRangeError,
  onChange,
}: ReviewRatingsProps) {
  return (
    <div className="mt-12">
      <h2 className="mb-6 text-xl font-semibold text-white">⭐ Bedømmelse</h2>

      <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
        {ratings.map(({ field, label }) => (
          <ScoreInput
            key={field}
            label={label}
            name={field}
            value={form[field]}
            hasError={hasRangeError(field)}
            onChange={onChange}
          />
        ))}
      </div>
    </div>
  );
}
