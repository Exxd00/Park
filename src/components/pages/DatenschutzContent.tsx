"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { company } from "@/data/company";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function DatenschutzContent() {
  const { locale } = useLanguage();

  const content = {
    de: {
      title: "Datenschutzerklärung",
      overview: "1. Datenschutz auf einen Blick",
      generalNotes: "Allgemeine Hinweise",
      generalNotesText: "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.",
      dataCollection: "Datenerfassung auf dieser Website",
      dataCollectionQuestion: "Wer ist verantwortlich für die Datenerfassung auf dieser Website?",
      dataCollectionAnswer: "Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.",
      hosting: "2. Hosting",
      hostingText: "Wir hosten die Inhalte unserer Website bei einem externen Dienstleister (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.",
      generalInfo: "3. Allgemeine Hinweise und Pflichtinformationen",
      privacyTitle: "Datenschutz",
      privacyText: "Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.",
      responsibleParty: "Hinweis zur verantwortlichen Stelle",
      responsiblePartyText: "Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:",
      phone: "Telefon",
      email: "E-Mail",
      dataCollectionOnSite: "4. Datenerfassung auf dieser Website",
      contactForm: "Kontaktformular und Buchungsanfragen",
      contactFormText1: "Wenn Sie uns per Kontaktformular oder Buchungsformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Formular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.",
      contactFormText2: "Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.",
      contactVia: "Anfrage per E-Mail, Telefon oder WhatsApp",
      contactViaText: "Wenn Sie uns per E-Mail, Telefon oder WhatsApp kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.",
      yourRights: "5. Ihre Rechte",
      yourRightsText1: "Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten.",
      yourRightsText2: "Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.",
      analytics: "6. Analyse-Tools und Werbung",
      analyticsText: "Diese Website nutzt möglicherweise Analyse-Tools zur statistischen Auswertung der Besucherzugriffe. Nähere Informationen dazu finden Sie in den folgenden Abschnitten.",
      googleAnalytics: "Google Analytics",
      googleAnalyticsText: "Diese Website kann Google Analytics nutzen, einen Webanalysedienst der Google LLC. Die Nutzung erfolgt auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.",
      ssl: "7. SSL- bzw. TLS-Verschlüsselung",
      sslText: "Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von \"http://\" auf \"https://\" wechselt.",
      lastUpdated: "Stand:",
    },
    en: {
      title: "Privacy Policy",
      overview: "1. Privacy at a Glance",
      generalNotes: "General Information",
      generalNotesText: "The following notes provide a simple overview of what happens to your personal data when you visit this website. Personal data is any data with which you can be personally identified.",
      dataCollection: "Data collection on this website",
      dataCollectionQuestion: "Who is responsible for data collection on this website?",
      dataCollectionAnswer: "Data processing on this website is carried out by the website operator. You can find their contact details in the imprint of this website.",
      hosting: "2. Hosting",
      hostingText: "We host the contents of our website with an external service provider (host). The personal data collected on this website is stored on the host's servers.",
      generalInfo: "3. General Information and Mandatory Information",
      privacyTitle: "Privacy",
      privacyText: "The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with statutory data protection regulations and this privacy policy.",
      responsibleParty: "Note on the responsible party",
      responsiblePartyText: "The responsible party for data processing on this website is:",
      phone: "Phone",
      email: "Email",
      dataCollectionOnSite: "4. Data Collection on This Website",
      contactForm: "Contact form and booking requests",
      contactFormText1: "If you send us inquiries via the contact form or booking form, your details from the form, including the contact data you provided there, will be stored by us for the purpose of processing the inquiry and in case of follow-up questions.",
      contactFormText2: "The processing of this data is based on Art. 6 para. 1 lit. b GDPR if your request is related to the fulfillment of a contract or is necessary for the implementation of pre-contractual measures.",
      contactVia: "Inquiries via email, phone, or WhatsApp",
      contactViaText: "If you contact us by email, phone, or WhatsApp, your inquiry including all resulting personal data (name, inquiry) will be stored and processed by us for the purpose of handling your request.",
      yourRights: "5. Your Rights",
      yourRightsText1: "You have the right at any time to free information about your stored personal data, its origin and recipient, and the purpose of data processing, as well as a right to correction or deletion of this data.",
      yourRightsText2: "You can contact us at any time regarding this and other questions about personal data.",
      analytics: "6. Analytics Tools and Advertising",
      analyticsText: "This website may use analytics tools for statistical evaluation of visitor traffic. More detailed information can be found in the following sections.",
      googleAnalytics: "Google Analytics",
      googleAnalyticsText: "This website may use Google Analytics, a web analytics service provided by Google LLC. Use is based on your consent in accordance with Art. 6 para. 1 lit. a GDPR.",
      ssl: "7. SSL/TLS Encryption",
      sslText: "This site uses SSL or TLS encryption for security reasons and to protect the transmission of confidential content. You can recognize an encrypted connection by the fact that the address line of the browser changes from \"http://\" to \"https://\".",
      lastUpdated: "Last updated:",
    },
  };

  const t = content[locale];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-16 md:pt-20">
        <div className="container py-16">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-8 text-3xl font-bold text-slate-800">{t.title}</h1>

            <div className="prose prose-slate max-w-none">
              <h2>{t.overview}</h2>

              <h3>{t.generalNotes}</h3>
              <p>{t.generalNotesText}</p>

              <h3>{t.dataCollection}</h3>
              <p>
                <strong>{t.dataCollectionQuestion}</strong><br />
                {t.dataCollectionAnswer}
              </p>

              <h2>{t.hosting}</h2>
              <p>{t.hostingText}</p>

              <h2>{t.generalInfo}</h2>

              <h3>{t.privacyTitle}</h3>
              <p>{t.privacyText}</p>

              <h3>{t.responsibleParty}</h3>
              <p>{t.responsiblePartyText}</p>
              <p>
                {company.name}<br />
                {company.location.city}<br />
                {t.phone}: {company.contact.phone}<br />
                {t.email}: {company.contact.email}
              </p>

              <h2>{t.dataCollectionOnSite}</h2>

              <h3>{t.contactForm}</h3>
              <p>{t.contactFormText1}</p>
              <p>{t.contactFormText2}</p>

              <h3>{t.contactVia}</h3>
              <p>{t.contactViaText}</p>

              <h2>{t.yourRights}</h2>
              <p>{t.yourRightsText1}</p>
              <p>{t.yourRightsText2}</p>

              <h2>{t.analytics}</h2>
              <p>{t.analyticsText}</p>

              <h3>{t.googleAnalytics}</h3>
              <p>{t.googleAnalyticsText}</p>

              <h2>{t.ssl}</h2>
              <p>{t.sslText}</p>

              <p className="mt-8 text-sm text-slate-500">
                {t.lastUpdated} {new Date().toLocaleDateString(locale === "de" ? "de-DE" : "en-US", { month: "long", year: "numeric" })}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
