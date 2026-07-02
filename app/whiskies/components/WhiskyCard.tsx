import { Surface } from "@/app/components/Surface";
import type { Whisky } from "../data";

type WhiskyCardProps = {
  whisky: Whisky;
};

export function WhiskyCard({ whisky }: WhiskyCardProps) {
  return (
    <Surface>
      <h2 className="text-2xl font-semibold">{whisky.name}</h2>
      <p className="mt-3 text-sm uppercase tracking-[0.25em] text-stone-500">
        {whisky.distillery}
      </p>
      <p className="mt-4 text-lg font-semibold text-amber-700">
        {whisky.rating}
      </p>
    </Surface>
  );
}
