import { Surface } from "@/app/components/Surface";

type AdminNextActionsProps = {
  actions: string[];
};

export function AdminNextActions({ actions }: AdminNextActionsProps) {
  return (
    <Surface>
      <h2 className="text-2xl font-semibold">Næste handlinger</h2>
      <ul className="mt-5 space-y-3 text-sm leading-7 text-stone-700">
        {actions.map((action) => (
          <li key={action}>• {action}</li>
        ))}
      </ul>
    </Surface>
  );
}
