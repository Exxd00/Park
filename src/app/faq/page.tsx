import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { faqs } from "@/data/seo-data";
import {
  ChevronDown,
  Phone,
  MessageCircle,
  ExternalLink,
  HelpCircle,
  Euro,
  Shield,
  Bus,
  Clock,
  Calendar,
  MapPin,
  Car,
  Wrench
} from "lucide-react";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Häufige Fragen (FAQ) | Parken Flughafen Nürnberg",
  description: "Alle Antworten zum Parken am Flughafen Nürnberg: Preise, Shuttle-Service, Sicherheit, Buchung und mehr. Finden Sie schnell die Antwort auf Ihre Frage.",
  keywords: [
    "faq parken flughafen nürnberg",
    "fragen parken nue",
    "parkplatz fragen",
    "shuttle flughafen nürnberg fragen",
  ],
  alternates: {
    canonical: "https://park-express24.de/faq",
  },
};

// Category configuration
const categories = [
  { id: "Preise", name: "Preise & Kosten", icon: Euro },
  { id: "Buchung", name: "Buchung & Reservierung", icon: Calendar },
  { id: "Shuttle", name: "Shuttle-Service", icon: Bus },
  { id: "Fahrzeug", name: "Fahrzeug & Sicherheit", icon: Car },
  { id: "Lage", name: "Standort & Anfahrt", icon: MapPin },
  { id: "Service", name: "Service & Extras", icon: Wrench },
];

// Group FAQs by category
function groupFaqsByCategory() {
  const grouped: Record<string, typeof faqs> = {};

  for (const faq of faqs) {
    if (!grouped[faq.category]) {
      grouped[faq.category] = [];
    }
    grouped[faq.category].push(faq);
  }

  return grouped;
}

export default function FAQPage() {
  const groupedFaqs = groupFaqsByCategory();

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Start",
        item: "https://park-express24.de",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "FAQ",
        item: "https://park-express24.de/faq",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-gradient-to-b from-slate-900 to-slate-800">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-500/20 mb-6">
                <HelpCircle className="h-8 w-8 text-amber-400" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Häufig gestellte Fragen
              </h1>
              <p className="text-lg text-slate-300">
                Alles, was Sie über das Parken am Flughafen Nürnberg wissen müssen
              </p>
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="py-8 bg-white border-b border-slate-200 sticky top-16 md:top-20 z-40">
          <div className="container px-4">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.filter(cat => groupedFaqs[cat.id]).map((category) => {
                const Icon = category.icon;
                return (
                  <a
                    key={category.id}
                    href={`#${category.id.toLowerCase()}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 hover:bg-amber-100 text-slate-700 hover:text-amber-700 text-sm font-medium transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                    {category.name}
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-12 md:py-16 bg-slate-50">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto space-y-12">
              {categories.filter(cat => groupedFaqs[cat.id]).map((category) => {
                const Icon = category.icon;
                const categoryFaqs = groupedFaqs[category.id] || [];

                return (
                  <div key={category.id} id={category.id.toLowerCase()}>
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-amber-600" />
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold text-slate-800">
                        {category.name}
                      </h2>
                    </div>

                    {/* Questions */}
                    <div className="space-y-3">
                      {categoryFaqs.map((faq, index) => (
                        <details
                          key={index}
                          className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm"
                        >
                          <summary className="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-slate-50 transition-colors">
                            <h3 className="font-semibold text-slate-800 pr-4 text-left">
                              {faq.question}
                            </h3>
                            <ChevronDown className="h-5 w-5 text-slate-400 group-open:rotate-180 transition-transform shrink-0" />
                          </summary>
                          <div className="px-5 pb-5 pt-0 border-t border-slate-100">
                            <p className="text-slate-600 mt-4 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </details>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Still have questions */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">
                Ihre Frage nicht dabei?
              </h2>
              <p className="text-slate-600 mb-8">
                Kontaktieren Sie uns direkt – wir helfen Ihnen gerne weiter!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={company.contact.phoneLink}
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold transition-all"
                >
                  <Phone className="h-5 w-5" />
                  {company.contact.phone}
                </a>
                <a
                  href={company.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-green-100 hover:bg-green-200 text-green-700 font-semibold transition-all"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-amber-500 to-orange-500">
          <div className="container px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Bereit zum Buchen?
              </h2>
              <p className="text-amber-100 mb-8">
                Sichern Sie sich jetzt Ihren Parkplatz am Flughafen Nürnberg
              </p>
              <a
                href="https://park-express24.de"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-amber-600 font-bold transition-all shadow-lg"
              >
                <ExternalLink className="h-5 w-5" />
                Jetzt Parkplatz buchen
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
