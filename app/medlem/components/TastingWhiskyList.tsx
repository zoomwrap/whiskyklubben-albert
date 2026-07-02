import { Surface } from "@/app/components/Surface";

type TastingWhiskyListProps = {
  whiskies: string[];
};

export function TastingWhiskyList({ whiskies }: TastingWhiskyListProps) {
  return (
    <Surface>
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
        Flasker til aftenen
      </p>
      <ul className="mt-5 space-y-3 text-sm leading-7 text-stone-700">
        {whiskies.map((whisky) => (
          <li key={whisky} className="flex gap-2">
            <span className="text-amber-600">•</span>
            <span>{whisky}</span>
          </li>
        ))}
      </ul>
    </Surface>
  );
}
