import * as React from "react";
import Layout from "../components/layout";
import { OnlyTextSection } from "../components/section-only-text";

const props: React.ComponentProps<typeof OnlyTextSection> = {
  title: "Impressum",
  textAlign: "left",
  textParts: [
    { text: "Angaben gemäß §5 TMG", type: "heading" },
    { text: "Max Mustermann", type: "text" },
    { text: "Maxlistraße 12", type: "text" },
    { text: "12345 Berlin", type: "text" },
    { text: "Kontakt", type: "heading" },
    { text: "Telefon: +49 1571/xxxxx", type: "text" },
    { text: "E-Mail: max@mustermann.de", type: "text" },
    { text: "Umsatzsteuer", type: "heading" },
    {
      text: "Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:",
      type: "text",
    },
    { text: "DEXXXXXXXXX", type: "text" },
    { text: "Streitschlichtung", type: "heading" },
    {
      text: "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr.",
      type: "text",
    },
    {
      text: "Unsere E-Mail-Adresse befindet sich oben im Impressum.",
      type: "text",
    },
    {
      text: "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
      type: "text",
    },
    { text: "Haftung für Inhalte", type: "heading" },
    {
      text: "Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.",
      type: "text",
    },
    {
      text: "Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.",
      type: "text",
    },
    {
      text: "Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten.",
      type: "text",
    },
    {
      text: "Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.",
      type: "text",
    },
    { text: "Haftung für Links", type: "heading" },
    {
      text: "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.",
      type: "text",
    },
    {
      text: "Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.",
      type: "text",
    },
  ],
};

const ImprintPage: React.FC = () => {
  return (
    <Layout>
      <OnlyTextSection {...props}></OnlyTextSection>
    </Layout>
  );
};

export default ImprintPage;

export const Head = () => (
  <>
    <title>Product - Imprint</title>
    <html lang="en" className="scroll-p-24 scroll-smooth" />
  </>
);
