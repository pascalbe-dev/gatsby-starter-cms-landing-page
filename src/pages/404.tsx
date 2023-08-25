import { HeadFC } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import { OnlyTextSection } from "../components/section-only-text";

const props: React.ComponentProps<typeof OnlyTextSection> = {
  title: "404",
  textAlign: "center",
  requiresMinHeight: true,
  textParts: [
    {
      text: "Die gesuchte Seite gibt es leider nicht (mehr). Das tut uns leid.",
      type: "text",
    },
    {
      text: "Nutze bitte die Navigationselemente, um zurück zu gelangen.",
      type: "text",
    },
  ],
};

const NotFoundPage: React.FC = () => {
  return (
    <Layout>
      <OnlyTextSection {...props}></OnlyTextSection>
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Product: 404</title>;
