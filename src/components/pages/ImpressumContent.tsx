"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { company } from "@/data/company";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function ImpressumContent() {
  const { locale } = useLanguage();

  const content = {
    de: {
      title: "Impressum",
      accordingTo: "Angaben gemäß § 5 TMG",
      preFlightService: "Pre-Flight Parking Service",
      contactTitle: "Kontakt",
      phone: "Telefon",
      phoneAlt: "Telefon (alternativ)",
      email: "E-Mail",
      responsible: "Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV",
      euDispute: "EU-Streitschlichtung",
      euDisputeText: "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:",
      emailAbove: "Unsere E-Mail-Adresse finden Sie oben im Impressum.",
      consumerDispute: "Verbraucherstreitbeilegung/Universalschlichtungsstelle",
      consumerDisputeText: "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
      contentLiability: "Haftung für Inhalte",
      contentLiabilityText1: "Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.",
      contentLiabilityText2: "Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.",
      linkLiability: "Haftung für Links",
      linkLiabilityText: "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.",
      copyright: "Urheberrecht",
      copyrightText: "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.",
    },
    en: {
      title: "Imprint",
      accordingTo: "Information according to § 5 TMG",
      preFlightService: "Pre-Flight Parking Service",
      contactTitle: "Contact",
      phone: "Phone",
      phoneAlt: "Phone (alternative)",
      email: "Email",
      responsible: "Responsible for content according to § 55 para. 2 RStV",
      euDispute: "EU Dispute Resolution",
      euDisputeText: "The European Commission provides a platform for online dispute resolution (ODR):",
      emailAbove: "You can find our email address above in the imprint.",
      consumerDispute: "Consumer dispute resolution/Universal arbitration board",
      consumerDisputeText: "We are not willing or obligated to participate in dispute resolution proceedings before a consumer arbitration board.",
      contentLiability: "Liability for content",
      contentLiabilityText1: "As a service provider, we are responsible for our own content on these pages in accordance with general laws according to § 7 para.1 TMG. According to §§ 8 to 10 TMG, however, we are not obligated as a service provider to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.",
      contentLiabilityText2: "Obligations to remove or block the use of information under general law remain unaffected. However, liability in this regard is only possible from the time of knowledge of a specific infringement. Upon becoming aware of corresponding legal violations, we will remove this content immediately.",
      linkLiability: "Liability for links",
      linkLiabilityText: "Our offer contains links to external third-party websites, over whose content we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the contents of the linked pages.",
      copyright: "Copyright",
      copyrightText: "The content and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, distribution, and any kind of exploitation outside the limits of copyright law require the written consent of the respective author or creator.",
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
              <h2>{t.accordingTo}</h2>
              <p>
                <strong>{company.name}</strong><br />
                {t.preFlightService}<br />
                {company.location.city}
              </p>

              <h2>{t.contactTitle}</h2>
              <p>
                {t.phone}: {company.contact.phone}<br />
                {t.phoneAlt}: {company.contact.phoneAlt}<br />
                {t.email}: {company.contact.email}
              </p>

              <h2>{t.responsible}</h2>
              <p>
                {company.name}<br />
                {company.location.city}
              </p>

              <h2>{t.euDispute}</h2>
              <p>
                {t.euDisputeText}{" "}
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-amber-600">
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p>{t.emailAbove}</p>

              <h2>{t.consumerDispute}</h2>
              <p>{t.consumerDisputeText}</p>

              <h2>{t.contentLiability}</h2>
              <p>{t.contentLiabilityText1}</p>
              <p>{t.contentLiabilityText2}</p>

              <h2>{t.linkLiability}</h2>
              <p>{t.linkLiabilityText}</p>

              <h2>{t.copyright}</h2>
              <p>{t.copyrightText}</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
