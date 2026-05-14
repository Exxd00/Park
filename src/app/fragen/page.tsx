import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { faqs } from "@/data/seo-data";
import { HelpCircle, ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Alle Fragen | Parken Flughafen Nürnberg",
  description: "Detaillierte Antworten auf alle Fragen zum Parken am Flughafen Nürnberg: Preise, Buchung, Shuttle, Sicherheit und mehr.",
  keywords: ["fragen parken flughafen nürnberg", "faq parkplatz nue"],
  alternates: { canonical: "https://park-express24.de/fragen" },
};

// Group FAQs by category
function groupByCategory() {
  const grouped: Record<string, typeof faqs> = {};
  for (const faq of faqs) {
    if (!grouped[faq.category]) grouped[faq.category] = [];
    grouped[faq.category].push(faq);
  }
  return grouped;
}

export default function AllFaqsPage() {
  const groupedFaqs = groupByCategory();

  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 md:pt-20">
        <section className="py-12 md:py-16 bg-gradient-to-b from-slate-900 to-slate-800">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-500/20 mb-6">
                <HelpCircle className="h-8 w-8 text-amber-400" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Alle Fragen & Antworten</h1>
              <p className="text-lg text-slate-300">Detaillierte Informationen zu jedem Thema</p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {Object.entries(groupedFaqs).map(([category, categoryFaqs]) => (
                <div key={category}>
                  <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    {category}
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {categoryFaqs.map((faq) => (
                      <Link key={faq.slug} href={`/fragen/${faq.slug}`}
                        className="group p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-amber-300 hover:shadow-md transition-all">
                        <h3 className="font-semibold text-slate-800 mb-2 group-hover:text-amber-600 transition-colors">
                          {faq.question}
                        </h3>
                        <p className="text-sm text-slate-500 line-clamp-2">{faq.answer}</p>
                        <div className="flex items-center text-amber-600 font-medium text-sm mt-3 group-hover:gap-2 transition-all">
                          <span>Mehr lesen</span>
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-slate-900">
          <div className="container px-4 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Noch Fragen?</h2>
            <p className="text-slate-300 mb-8">Kontaktieren Sie uns direkt</p>
            <a href="https://park-express24.de" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold transition-all">
              <ExternalLink className="h-5 w-5" />Jetzt buchen
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
