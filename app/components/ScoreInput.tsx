type ScoreInputProps = {
  label: string;
  name: string;
  value: string;
  hasError?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function ScoreInput({
  label,
  name,
  value,
  hasError = false,
  onChange,
}: ScoreInputProps) {
  return (
    <div>
      <label className="mb-2 block text-center text-gray-300" htmlFor={name}>
        {label}
      </label>

      <input
        id={name}
        type="number"
        name={name}
        value={value}
        onChange={onChange}
        min={0}
        max={25}
        aria-invalid={hasError}
        className={[
          "w-full rounded-xl bg-white px-4 py-3 text-center text-xl font-bold",
          hasError ? "ring-2 ring-red-500" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      />

      {hasError ? (
        <p className="mt-2 text-center text-sm text-red-300">0-25 point</p>
      ) : null}
    </div>
  );
}
