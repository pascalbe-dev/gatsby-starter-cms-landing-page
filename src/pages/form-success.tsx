import * as React from "react";
import Layout from "../components/layout";
import { OnlyTextSection } from "../components/section-only-text";

const props: React.ComponentProps<typeof OnlyTextSection> = {
  title: "Geschafft!",
  textAlign: "center",
  textParts: [
    {
      text: "Deine Anfrage wurde erfolgreich übermittelt. Wir werden uns im Laufe der nächsten 2 Tage bei dir melden!",
      type: "text",
    },
    {
      type: "space",
    },
    {
      text: "Zurück zur Startseite",
      type: "routeButton",
      path: "/",
    },
  ],
};

const PrivacyPage: React.FC = () => {
  return (
    <Layout>
      <OnlyTextSection {...props}></OnlyTextSection>
    </Layout>
  );
};

export default PrivacyPage;

export const Head = () => (
  <>
    <title>Product - Anfrage abgeschickt</title>
    <html lang="en" className="scroll-p-24 scroll-smooth" />
  </>
);
