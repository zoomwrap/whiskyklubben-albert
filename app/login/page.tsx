"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PageShell } from "../components/PageShell";
import { useAuth } from "../context/AuthContext";
import { LoginCard } from "./components/LoginCard";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { login } = useAuth();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user = login(email, password);
    if (user) {
      setError("");
      router.push("/medlem");
      return;
    }

    setError("Forkert e-mail eller adgangskode.");
  };

  return (
    <PageShell className="flex items-center justify-center">
      <LoginCard
        email={email}
        password={password}
        error={error}
        onEmailChange={setEmail}
        onPasswordChange={setPassword}
        onSubmit={handleSubmit}
      />
    </PageShell>
  );
}
