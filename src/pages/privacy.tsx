import * as React from "react";
import Layout from "../components/layout";
import { OnlyTextSection } from "../components/section-only-text";

const props: React.ComponentProps<typeof OnlyTextSection> = {
  title: "Datenschutzerklärung",
  width: "medium",
  textParts: [
    { type: "heading", text: "Verantwortlicher" },
    {
      type: "text",
      text: "Verantwortlich für die nachfolgend dargestellte Datenverarbeitung ist die im Impressum genannte Stelle",
    },
    {
      type: "heading",
      text: "Nutzungsdaten",
    },
    {
      type: "text",
      text: "Wenn Sie unsere Webseiten besuchen, werden auf unserem Webserver temporär sogenannte Nutzungsdaten zu statistischen Zwecken als Protokoll ausgewertet, um die Qualität unserer Webseiten zu verbessern. ",
    },
    {
      type: "enumeration",
      preText: "Dieser Datensatz besteht aus:",
      enumeration: [
        "Besuchte Seite auf unserer Domain",
        "Datum und Uhrzeit der Serveranfrage",
        "Browsertyp und Browserversion",
        "Verwendetes Betriebssystem",
        "Referrer URL",
        "Hostname des zugreifenden Rechners",
        "IP-Adresse",
      ],
    },
    {
      type: "heading",
      text: "Datensicherheit",
    },
    {
      type: "text",
      text: "Um Ihre Daten vor unerwünschten Zugriffen möglichst umfassend zu schützen, treffen wir technische und organisatorische Maßnahmen.",
    },
    {
      type: "text",
      text: "Wir setzen auf unseren Webseiten ein Verschlüsselungsverfahren ein. Ihre Angaben werden von Ihrem Rechner zu unserem Server und umgekehrt über das Internet mittels einer TLS-Verschlüsselung übertragen.",
    },
    { type: "space" },
    {
      type: "text",
      text: "Sie erkennen dies in der Regel daran, dass in der Statusleiste Ihres Browsers das Schloss-Symbol geschlossen ist und die Adresszeile mit https:// beginnt.",
    },
    {
      type: "heading",
      text: "Kontaktformular & Buchungstool",
    },
    {
      type: "text",
      text: "Sie haben die Möglichkeit, sich mit uns über verschiedene Kontaktformulare in Verbindung zu setzen. Zur Nutzung unseres Kontaktformulars benötigen wir von Ihnen verschiedene Daten.",
    },
    { type: "space" },
    {
      type: "text",
      text: "Diese Daten verwenden wir auf Grundlage von Art. 6 Abs. 1 S. 1 lit. f DSGVO, um Ihre Anfrage zu beantworten.",
    },
    {
      type: "text",
      text: "Bei der Buchung eines Termins werden die Daten zusätzlich von Drittanbietern außerhalb der EU verarbeitet.",
    },
    {
      type: "enumeration",
      preText: "Dies beinhaltet folgende Firmen:",
      enumeration: ["Calendly", "Microsoft"],
    },
    { type: "space" },
    {
      type: "text",
      text: "Darüber hinaus können Sie selbst entscheiden, ob Sie uns weitere Angaben mitteilen möchten. Diese Angaben erfolgen freiwillig und sind für die Kontaktaufnahme nicht zwingend erforderlich. Ihre freiwilligen Angaben verarbeiten wir auf Grundlage Ihrer Einwilligung.",
    },
    { type: "space" },
    {
      type: "text",
      text: "Ihre Daten werden nur zur Beantwortung Ihrer Anfrage verarbeitet.",
    },
    { type: "space" },
    {
      type: "text",
      text: "Soweit Ihre, per Kontaktformular übermittelten Daten, auf Grundlage von Art. 6 Abs. 1 S. 1 lit. f DSGVO verarbeitet werden, können Sie der Verarbeitung jederzeit widersprechen.",
    },
    { type: "space" },
    {
      type: "text",
      text: "Zudem können Sie Ihre Einwilligung in die Verarbeitung der freiwilligen Angaben jederzeit widerrufen.",
    },
    {
      type: "text",
      text: "Wenden Sie sich hierfür bitte an die im Impressum genannte E-Mail-Adresse.",
    },
    { type: "heading", text: "Anfrage per E-Mail oder Telefon" },
    {
      type: "text",
      text: "Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.",
    },
    { type: "space" },
    {
      type: "text",
      text: "Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.",
    },
    { type: "space" },
    {
      type: "text",
      text: "Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.",
    },
    { type: "space" },
    {
      type: "text",
      text: "In allen übrigen Fällen beruht die Verarbeitung auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) und / oder auf unseren berechtigten Interessen (Art. 6 Abs. 1 lit. f DSGVO), da wir ein berechtigtes Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen haben.",
    },
    { type: "space" },
    {
      type: "text",
      text: "Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens).",
    },
    {
      type: "text",
      text: "Zwingende gesetzliche Bestimmungen - insbesondere gesetzliche Aufbewahrungsfristen - bleiben unberührt.",
    },
    { type: "heading", text: "Social Plugins" },
    {
      type: "text",
      text: "Wir ermöglichen Ihnen die Nutzung von Social Plugins. Aus Gründen des Datenschutzes binden wir die von uns eingesetzten Social Plugins jedoch nur in deaktivierter Form ein. Wenn Sie unsere Webseiten aufrufen, werden daher keine Daten an Social-Media-Dienste übermittelt.",
    },
    { type: "space" },
    {
      type: "text",
      text: "Sie haben jedoch die Möglichkeit, die auf unseren Webseiten eingebundenen Social Plugins zu aktivieren und zu nutzen. Wir verwenden hierzu eine Lösung, die dazu führt, dass in einem ersten Schritt alle Daten und Funktionen, die zur Darstellung des Social Plugins erforderlich sind, von unserem Webserver bereitgestellt werden. Erst wenn Sie sich entschließen, das jeweilige Social Plugin zu aktivieren und das entsprechende Vorschaubild bzw. Symbol anklicken, wird in einem zweiten Schritt von Ihrem Browser eine Verbindung zu den Servern des Betreibers des jeweiligen Social-Media-Dienstes aufgebaut.",
    },
    { type: "space" },
    {
      type: "text",
      text: "Wenn Sie ein Plugin aktivieren, erhält der Social-Media-Dienst insbesondere Ihre IP-Adresse sowie unter anderem Kenntnis über Ihren Besuch unserer Webseiten. Dies erfolgt unabhängig davon, ob Sie ein Konto bei dem jeweiligen Social Media Dienst besitzen. Falls Sie eingeloggt sind, können die Daten direkt Ihrem Social-Media-Profil zugeordnet werden.",
    },
    { type: "space" },
    {
      type: "text",
      text: "Insgesamt haben wir keinen Einfluss darauf, ob und in welchem Umfang der jeweilige Social Media-Dienst nach der Aktivierung personenbezogene Daten verarbeitet. Es ist jedoch wahrscheinlich, dass der Social-Media-Dienst aus Ihren Daten Nutzungsprofile erstellt und diese zum Zweck der personalisierten Werbung verwendet. Zudem werden Ihre Daten dazu verwendet, andere Nutzer des Social-Media-Dienstes über Ihre Aktivitäten auf unseren Webseiten zu informieren.",
    },
    { type: "space" },
    {
      type: "text",
      text: "Die Einbettung erfolgt auf Grundlage Ihrer Einwilligung, sofern Sie Ihre Einwilligung über einen Klick auf das Vorschaubild abgegeben haben. Bitte beachten Sie, dass die Einbettung vieler Social Plugins dazu führt, dass Ihre Daten außerhalb der EU bzw. des EWR verarbeitet werden. In einigen Ländern besteht dabei das Risiko, dass Behörden auf die Daten zu Sicherheits- und Überwachungszwecken zugreifen, ohne dass Sie hierüber informiert werden oder Rechtsmittel einlegen können. Eine anschließende Datenverarbeitung erfolgt auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 S. 1 lit. a DSGVO, sofern Sie Ihre Einwilligung über unsere Consent-Management-Plattform „Borlabs Cookiebanner“ abgegeben haben.",
    },
    { type: "space" },
    {
      type: "text",
      text: "Sofern Sie die Verarbeitung Ihrer personenbezogenen Daten durch die aktivierten Social Plugins nicht mehr wünschen, können Sie die künftige Verarbeitung verhindern, indem Sie das Vorschaubild bzw. Symbol des jeweiligen Social Plugins nicht mehr anklicken.",
    },
    { type: "space" },
    { type: "heading", text: "Ihre Rechte als betroffene Person" },
    {
      type: "text",
      text: "Bei der Verarbeitung Ihrer personenbezogenen Daten gewährt die DSGVO Ihnen als betroffene Person bestimmte Rechte:",
    },
    { type: "heading", text: "Auskunftsrecht (Art. 15 DSGVO)", level: 3 },
    {
      type: "text",
      text: "Sie haben das Recht eine Bestätigung darüber zu verlangen, ob Sie betreffende personenbezogene Daten verarbeitet werden.",
    },
    {
      type: "text",
      text: "Ist dies der Fall, so haben Sie ein Recht auf Auskunft über diese personenbezogenen Daten und auf die in Art. 15 DSGVO im Einzelnen aufgeführten Informationen.",
    },
    {
      type: "heading",
      text: "Recht auf Berichtigung (Art. 16 DSGVO)",
      level: 3,
    },
    {
      type: "text",
      text: "Sie haben das Recht, unverzüglich die Berichtigung Sie betreffender unrichtiger personenbezogener Daten und ggf. die Vervollständigung unvollständiger Daten zu verlangen.",
    },
    { type: "heading", text: "Recht auf Löschung (Art. 17 DSGVO)", level: 3 },
    {
      type: "text",
      text: "Sie haben das Recht, zu verlangen, dass Sie betreffende personenbezogene Daten unverzüglich gelöscht werden, sofern einer der in Art. 17 DSGVO im Einzelnen aufgeführten Gründe zutrifft.",
    },
    {
      type: "heading",
      text: "Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)",
      level: 3,
    },
    {
      type: "text",
      text: "Sie haben das Recht, die Einschränkung der Verarbeitung zu verlangen, wenn eine der in Art. 18 DSGVO aufgeführten Voraussetzungen gegeben ist, z. B. wenn Sie Widerspruch gegen die Verarbeitung eingelegt haben, für die Dauer der Prüfung durch den Verantwortlichen.",
    },
    {
      type: "heading",
      text: "Recht auf Datenübertragbarkeit (Art. 20 DSGVO)",
      level: 3,
    },
    {
      type: "text",
      text: "In bestimmten Fällen, die in Art. 20 DSGVO im Einzelnen aufgeführt sind, haben Sie das Recht, die Sie betreffenden personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten bzw. die Übermittlung dieser Daten an einen Dritten zu verlangen.",
    },
    { type: "heading", text: "Widerrufsrecht (Art. 7 DSGVO)", level: 3 },
    {
      type: "text",
      text: "Sofern die Verarbeitung von Daten auf Grundlage Ihrer Einwilligung erfolgt, sind Sie nach Art. 7 Abs. 3 DSGVO berechtigt, die Einwilligung in die Verwendung Ihrer personenbezogenen Daten jederzeit zu widerrufen. Bitte beachten Sie, dass der Widerruf erst für die Zukunft wirkt. Verarbeitungen, die vor dem Widerruf erfolgt sind, sind davon nicht betroffen.",
    },
    { type: "heading", text: "Widerspruchsrecht (Art. 21 DSGVO)", level: 3 },
    {
      type: "text",
      text: "Werden Daten auf Grundlage von Art. 6 Abs. 1 S. 1 lit. f DSGVO (Datenverarbeitung zur Wahrung berechtigter Interessen) oder auf Grundlage von Art. 6 Abs. 1 S. 1 lit. e DSGVO (Datenverarbeitung zur Wahrung öffentlichen Interesse oder in Ausübung öffentlicher Gewalt) erhoben, steht Ihnen das Recht zu, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Widerspruch einzulegen. Wir verarbeiten die personenbezogenen Daten dann nicht mehr, es sei denn, es liegen nachweisbar zwingende schutzwürdige Gründe für die Verarbeitung vor, die gegenüber Ihren Interessen, Rechten und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.",
    },
    {
      type: "heading",
      text: "Beschwerderecht bei einer Aufsichtsbehörde (Art. 77 DSGVO)",
      level: 3,
    },
    {
      type: "text",
      text: "Sie haben gem. Art. 77 DSGVO das Recht auf Beschwerde bei einer Aufsichtsbehörde, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden Daten gegen datenschutzrechtliche Bestimmungen verstößt. Das Beschwerderecht kann insbesondere bei einer Aufsichtsbehörde in dem Mitgliedstaat Ihres gewöhnlichen Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes geltend gemacht werden.",
    },
    { type: "heading", text: "Geltendmachung Ihrer Rechte", level: 3 },
    {
      type: "text",
      text: "Sofern vorstehend nichts anderes beschrieben wurde, wenden Sie sich zur Geltendmachung Ihrer Betroffenenrechte bitte an die im Impressum genannte Stelle.",
    },
    { type: "heading", text: "Kontaktdaten des Datenschutzbeauftragten" },
    { type: "text", text: "Max Mustermann" },
    { type: "text", text: "Telefon: +49 173/XXXXX" },
    { type: "text", text: "E-Mail: max@mustermann.de" },
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
    <title>Product - Datenschutz</title>
    <html lang="en" className="scroll-p-24 scroll-smooth" />
  </>
);
