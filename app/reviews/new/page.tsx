"use client";

import { useMemo, useRef, useState } from "react";
import { ProtectedRoute } from "../../components/ProtectedRoute";
import { ReviewDetails } from "./components/ReviewDetails";
import { ReviewHeader } from "./components/ReviewHeader";
import { ReviewImage } from "./components/ReviewImage";
import { ReviewNotes } from "./components/ReviewNotes";
import { ReviewRatings } from "./components/ReviewRatings";
import { ReviewScore } from "./components/ReviewScore";
import { ratingFields, type RatingField, type ReviewForm } from "./types";

const initialForm: ReviewForm = {
  date: "",
  name: "",
  category: "",
  distillery: "",
  cask: "",
  bottled: "",
  age: "",
  strength: "",
  nose: "",
  taste: "",
  finish: "",
  balance: "",
  noseNote: "",
  tasteNote: "",
  finishNote: "",
  balanceNote: "",
  designNote: "",
};

export default function NewReviewPage() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [fileName, setFileName] = useState("");
  const [form, setForm] = useState<ReviewForm>(initialForm);

  const isRatingField = (name: string): name is RatingField => {
    return ratingFields.includes(name as RatingField);
  };

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;

    if (isRatingField(name)) {
      const numericValue = Number(value);
      const normalizedValue =
        value === ""
          ? ""
          : Number.isNaN(numericValue)
            ? value
            : String(Math.max(0, Math.min(25, numericValue)));

      setForm((current) => ({ ...current, [name]: normalizedValue }));
      return;
    }

    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setFileName(file?.name ?? "");
  };

  const hasRangeError = (field: RatingField) => {
    const value = Number(form[field]);
    return (
      form[field] !== "" && (Number.isNaN(value) || value < 0 || value > 25)
    );
  };

  const score = useMemo(() => {
    return ratingFields.reduce((total, field) => {
      const value = Number(form[field]);
      return Number.isNaN(value) ? total : total + value;
    }, 0);
  }, [form]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (ratingFields.some(hasRangeError)) {
      return;
    }

    console.log("Review gemt", form, fileName);
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-stone-800 px-4 py-10">
        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-6xl rounded-2xl bg-indigo-950 p-8 shadow-xl"
        >
          <ReviewHeader />

          <div className="grid gap-10 lg:grid-cols-3">
            <ReviewDetails form={form} onChange={handleChange} />
            <ReviewImage
              fileInputRef={fileInputRef}
              fileName={fileName}
              onFileChange={handleFileChange}
            />
          </div>

          <ReviewRatings
            form={form}
            hasRangeError={hasRangeError}
            onChange={handleChange}
          />
          <ReviewScore score={score} />
          <ReviewNotes form={form} onChange={handleChange} />

          <div className="mt-10 flex justify-end">
            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              💾 Gem anmeldelse
            </button>
          </div>
        </form>
      </div>
    </ProtectedRoute>
  );
}
