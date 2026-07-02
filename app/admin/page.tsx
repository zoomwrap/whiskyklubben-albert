import { ContentStack } from "../components/ContentStack";
import { PageIntro } from "../components/PageIntro";
import { PageShell } from "../components/PageShell";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { Surface } from "../components/Surface";
import { AdminMembers } from "./components/AdminMembers";
import { AdminNextActions } from "./components/AdminNextActions";
import { members, nextActions } from "./data";

export default function AdminPage() {
  return (
    <ProtectedRoute requireAdmin>
      <PageShell>
        <ContentStack>
          <Surface>
            <PageIntro eyebrow="Adminpanel" title="Administrer whiskyklubben">
              Her kan admin oprette smagninger, redigere whiskyer og
              administrere medlemmer.
            </PageIntro>
          </Surface>

          <section className="grid gap-6 lg:grid-cols-2">
            <AdminMembers members={members} />
            <AdminNextActions actions={nextActions} />
          </section>
        </ContentStack>
      </PageShell>
    </ProtectedRoute>
  );
}
