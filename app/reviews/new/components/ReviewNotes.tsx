import type { ReviewFieldChangeHandler, ReviewForm } from "../types";

type ReviewNotesProps = {
  form: ReviewForm;
  onChange: ReviewFieldChangeHandler;
};

const notes: Array<{
  name: keyof Pick<
    ReviewForm,
    "noseNote" | "tasteNote" | "finishNote" | "balanceNote" | "designNote"
  >;
  placeholder: string;
  rows: number;
  className?: string;
}> = [
  { name: "noseNote", placeholder: "Næsenoter", rows: 5 },
  { name: "tasteNote", placeholder: "Smagsnoter", rows: 5 },
  { name: "finishNote", placeholder: "Afslutningsnoter", rows: 5 },
  { name: "balanceNote", placeholder: "Balancenoter", rows: 5 },
  {
    name: "designNote",
    placeholder: "Designnoter",
    rows: 6,
    className: "md:col-span-2",
  },
];

export function ReviewNotes({ form, onChange }: ReviewNotesProps) {
  return (
    <div className="mt-12 grid gap-6 md:grid-cols-2">
      {notes.map(({ name, placeholder, rows, className = "" }) => (
        <textarea
          key={name}
          name={name}
          value={form[name]}
          onChange={onChange}
          rows={rows}
          placeholder={placeholder}
          className={["rounded-xl bg-white p-4", className]
            .filter(Boolean)
            .join(" ")}
        />
      ))}
    </div>
  );
}
