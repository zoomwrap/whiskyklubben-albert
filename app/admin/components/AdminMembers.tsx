import { Surface } from "@/app/components/Surface";

type AdminMember = {
  name: string;
  role: string;
};

type AdminMembersProps = {
  members: AdminMember[];
};

export function AdminMembers({ members }: AdminMembersProps) {
  return (
    <Surface tone="dark">
      <h2 className="text-2xl font-semibold">Medlemmer</h2>
      <ul className="mt-5 space-y-3 text-sm text-stone-300">
        {members.map((member) => (
          <li
            key={member.name}
            className="flex items-center justify-between rounded-xl border border-stone-800 px-4 py-3"
          >
            <span>{member.name}</span>
            <span className="text-amber-300">{member.role}</span>
          </li>
        ))}
      </ul>
    </Surface>
  );
}
