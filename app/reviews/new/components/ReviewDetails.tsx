import type { ReviewFieldChangeHandler, ReviewForm } from "../types";

type ReviewDetailsProps = {
  form: ReviewForm;
  onChange: ReviewFieldChangeHandler;
};

export function ReviewDetails({ form, onChange }: ReviewDetailsProps) {
  return (
    <div className="space-y-5 lg:col-span-2">
      <div className="grid gap-6 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-gray-300">Dato</span>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={onChange}
            required
            className="w-full rounded-xl border bg-white px-4 py-3"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-gray-300">Navn</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={onChange}
            placeholder="F.eks. Lagavulin 16"
            required
            className="w-full rounded-xl border bg-white px-4 py-3"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-gray-300">Kategori</span>
          <select
            name="category"
            value={form.category}
            onChange={onChange}
            className="w-full rounded-xl border bg-white px-4 py-3"
          >
            <option value="">Vælg kategori</option>
            <option value="Single Malt">Single Malt</option>
            <option value="Blended">Blended</option>
            <option value="Bourbon">Bourbon</option>
          </select>
        </label>

        <label className="block">
          <span className="mb-2 block text-gray-300">Destilleri</span>
          <input
            name="distillery"
            value={form.distillery}
            onChange={onChange}
            className="w-full rounded-xl border bg-white px-4 py-3"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-gray-300">Fadtype</span>
          <select
            name="cask"
            value={form.cask}
            onChange={onChange}
            className="w-full rounded-xl border bg-white px-4 py-3"
          >
            <option value="">Vælg fadtype</option>
            <option value="Bourbon">Bourbon</option>
            <option value="Sherry">Sherry</option>
            <option value="Port">Port</option>
          </select>
        </label>

        <label className="block">
          <span className="mb-2 block text-gray-300">Alder</span>
          <input
            type="number"
            name="age"
            value={form.age}
            onChange={onChange}
            min={0}
            className="w-full rounded-xl border bg-white px-4 py-3"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-gray-300">Aftapningsår</span>
          <input
            type="number"
            name="bottled"
            value={form.bottled}
            onChange={onChange}
            min={0}
            className="w-full rounded-xl border bg-white px-4 py-3"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-gray-300">Alkohol (%)</span>
          <input
            type="number"
            name="strength"
            value={form.strength}
            onChange={onChange}
            min={0}
            step="0.1"
            className="w-full rounded-xl border bg-white px-4 py-3"
          />
        </label>
      </div>
    </div>
  );
}
