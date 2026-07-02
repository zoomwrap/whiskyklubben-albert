import { Surface } from "@/app/components/Surface";
import type { NextTasting } from "../data";

type NextTastingCardProps = {
  tasting: NextTasting;
};

export function NextTastingCard({ tasting }: NextTastingCardProps) {
  return (
    <Surface tone="dark">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
        Næste smagning
      </p>
      <h2 className="mt-3 text-3xl font-semibold">
        Blindsmagning og hyggelig aften
      </h2>
      <div className="mt-6 space-y-4 text-sm leading-7 text-stone-300">
        <p>
          <span className="font-semibold text-white">📅 Dato:</span>{" "}
          {tasting.date}
        </p>
        <p>
          <span className="font-semibold text-white">🥃 Tema:</span>{" "}
          {tasting.theme}
        </p>
        <p>
          <span className="font-semibold text-white">📍 Adresse:</span>{" "}
          {tasting.address}
        </p>
        <p>
          <span className="font-semibold text-white">👥 Deltagere:</span>{" "}
          {tasting.participants.join(", ")}
        </p>
      </div>
    </Surface>
  );
}
