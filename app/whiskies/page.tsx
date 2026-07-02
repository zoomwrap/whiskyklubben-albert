import { ContentStack } from "../components/ContentStack";
import { PageIntro } from "../components/PageIntro";
import { PageShell } from "../components/PageShell";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { Surface } from "../components/Surface";
import { WhiskyGrid } from "./components/WhiskyGrid";
import { whiskies } from "./data";

export default function WhiskiesPage() {
  return (
    <ProtectedRoute>
      <PageShell>
        <ContentStack>
          <Surface>
            <PageIntro eyebrow="Whiskyer" title="Klubbens whiskyer">
              Oversigt over de flasker, der allerede er en del af klubben.
            </PageIntro>
          </Surface>

          <WhiskyGrid whiskies={whiskies} />
        </ContentStack>
      </PageShell>
    </ProtectedRoute>
  );
}
