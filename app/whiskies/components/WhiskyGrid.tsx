import { WhiskyCard } from "./WhiskyCard";
import type { Whisky } from "../data";

type WhiskyGridProps = {
  whiskies: Whisky[];
};

export function WhiskyGrid({ whiskies }: WhiskyGridProps) {
  return (
    <section className="grid gap-6 md:grid-cols-2">
      {whiskies.map((whisky) => (
        <WhiskyCard key={whisky.name} whisky={whisky} />
      ))}
    </section>
  );
}
