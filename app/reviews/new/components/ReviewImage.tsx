import type { RefObject } from "react";

type ReviewImageProps = {
  fileInputRef: RefObject<HTMLInputElement | null>;
  fileName: string;
  onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function ReviewImage({
  fileInputRef,
  fileName,
  onFileChange,
}: ReviewImageProps) {
  return (
    <div>
      <label className="mb-2 block text-gray-300" htmlFor="review-image">
        Billede
      </label>

      <input
        ref={fileInputRef}
        id="review-image"
        type="file"
        accept="image/*"
        onChange={onFileChange}
        className="sr-only"
      />

      <div className="flex h-72 items-center justify-center rounded-2xl border-2 border-dashed border-gray-500 bg-stone-900 px-4 text-center">
        <span className="text-gray-500">
          {fileName || "Intet billede valgt"}
        </span>
      </div>

      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        className="mt-5 w-full rounded-xl bg-blue-600 py-3 text-white transition hover:bg-blue-700"
      >
        📷 Upload billede
      </button>
    </div>
  );
}
