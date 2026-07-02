"use client";

import { ContentStack } from "../components/ContentStack";
import { PageShell } from "../components/PageShell";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { useAuth } from "../context/AuthContext";
import { MemberHero } from "./components/MemberHero";
import { NextTastingCard } from "./components/NextTastingCard";
import { TastingWhiskyList } from "./components/TastingWhiskyList";
import { nextTasting } from "./data";

export default function MemberPage() {
  const { user, logout } = useAuth();
  const isAdmin = user?.role === "ADMIN";

  return (
    <ProtectedRoute>
      <PageShell>
        <ContentStack>
          <MemberHero
            userName={user?.name}
            roleLabel={isAdmin ? "Administrator" : "Medlem"}
            isAdmin={isAdmin}
            onLogout={logout}
          />

          <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <NextTastingCard tasting={nextTasting} />
            <TastingWhiskyList whiskies={nextTasting.whiskies} />
          </section>
        </ContentStack>
      </PageShell>
    </ProtectedRoute>
  );
}
