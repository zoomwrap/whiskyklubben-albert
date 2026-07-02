import { LoginForm } from "./LoginForm";

type LoginCardProps = {
  email: string;
  password: string;
  error: string;
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export function LoginCard(props: LoginCardProps) {
  return (
    <div className="w-full max-w-md rounded-4xl border border-stone-200 bg-white p-8 shadow-xl">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
        Medlemslogin
      </p>
      <h1 className="mt-3 text-3xl font-semibold text-stone-900">
        Log ind til whiskyklubben
      </h1>
      <p className="mt-3 text-sm leading-7 text-stone-600">
        Kun medlemmer kan få adgang til klubben og dens smagninger.
      </p>

      <LoginForm {...props} />

      <p className="mt-6 text-sm text-stone-500">
        Indtast din klub-e-mail og adgangskode for at logge ind.
      </p>
    </div>
  );
}
