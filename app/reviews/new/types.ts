export const ratingFields = ["nose", "taste", "finish", "balance"] as const;

export type RatingField = (typeof ratingFields)[number];

export type ReviewForm = {
  date: string;
  name: string;
  category: string;
  distillery: string;
  cask: string;
  bottled: string;
  age: string;
  strength: string;
  nose: string;
  taste: string;
  finish: string;
  balance: string;
  noseNote: string;
  tasteNote: string;
  finishNote: string;
  balanceNote: string;
  designNote: string;
};

export type ReviewFieldChangeHandler = (
  event: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >,
) => void;
