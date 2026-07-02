import { ActionLink } from "./ActionLink";

export function HomeHero() {
  return (
    <section className="w-full max-w-2xl rounded-4xl border border-amber-200 bg-white/80 p-8 text-center shadow-2xl shadow-stone-950/10 backdrop-blur md:p-12">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-700">
        Whiskyklubben Albert
      </p>
      <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
        En enkel og sjov platform til smagninger, anmeldelser og blindsmagninger.
      </h1>
      <p className="mt-5 text-lg leading-8 text-stone-700">
        Alt det gode fra klubben bliver samlet ét sted - og resten findes på
        medlemsområdet efter login.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <ActionLink href="/login" variant="primary">
          Gå til medlemslogin
        </ActionLink>
        <ActionLink href="/medlem">Se medlemsoversigt</ActionLink>
      </div>
    </section>
  );
}
