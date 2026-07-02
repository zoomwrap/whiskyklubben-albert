import { ActionLink } from "@/app/components/ActionLink";
import { Surface } from "@/app/components/Surface";

type MemberHeroProps = {
  userName?: string;
  roleLabel: string;
  isAdmin: boolean;
  onLogout: () => void;
};

export function MemberHero({
  userName,
  roleLabel,
  isAdmin,
  onLogout,
}: MemberHeroProps) {
  return (
    <Surface>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
            Medlemsområde
          </p>
          <h1 className="mt-3 text-4xl font-semibold">
            Velkommen til Whiskyklubben Albert
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-stone-700">
            Her kan medlemmer følge kommende smagninger, se planerne og få
            adgang til klubbens indhold.
          </p>
        </div>
        <div className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-700">
          <p className="font-semibold text-stone-900">{userName}</p>
          <p>{roleLabel}</p>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <ActionLink href="/whiskies" variant="primary">
          Se whiskyer
        </ActionLink>
        <ActionLink href="/reviews/new">Opret anmeldelse</ActionLink>
        {isAdmin ? (
          <ActionLink href="/admin" variant="admin">
            Adminpanel
          </ActionLink>
        ) : null}
        <button
          onClick={onLogout}
          className="rounded-full border border-stone-300 px-5 py-3 text-sm font-semibold text-stone-700 transition hover:border-stone-400"
        >
          Log ud
        </button>
      </div>
    </Surface>
  );
}
