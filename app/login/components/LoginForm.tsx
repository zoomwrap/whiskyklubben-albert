type LoginFormProps = {
  email: string;
  password: string;
  error: string;
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export function LoginForm({
  email,
  password,
  error,
  onEmailChange,
  onPasswordChange,
  onSubmit,
}: LoginFormProps) {
  return (
    <form className="mt-8 space-y-4" onSubmit={onSubmit}>
      <div>
        <label
          className="mb-2 block text-sm font-medium text-stone-700"
          htmlFor="email"
        >
          E-mail
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => onEmailChange(event.target.value)}
          className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none ring-0 focus:border-amber-500"
          placeholder="navn@email.dk"
        />
      </div>
      <div>
        <label
          className="mb-2 block text-sm font-medium text-stone-700"
          htmlFor="password"
        >
          Adgangskode
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(event) => onPasswordChange(event.target.value)}
          className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none ring-0 focus:border-amber-500"
          placeholder="Indtast adgangskode"
        />
      </div>
      {error ? (
        <p className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-700">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        className="w-full rounded-full bg-stone-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-stone-800"
      >
        Log ind
      </button>
    </form>
  );
}
