import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { comparisons, getComparisonBySlug } from "@/data/seo-data";
import { CheckCircle2, X, Phone, MessageCircle, ExternalLink, Scale } from "lucide-react";
import { company } from "@/data/company";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return comparisons.map((comp) => ({ slug: comp.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const comparison = getComparisonBySlug(slug);

  if (!comparison) {
    return { title: "Vergleich nicht gefunden" };
  }

  return {
    title: `ParkExpress24 ${comparison.name} | Flughafen Nürnberg`,
    description: `Vergleich: ParkExpress24 ${comparison.name}. ${comparison.ourAdvantages.slice(0, 2).join(", ")}. Ab 6,90€/Tag.`,
    keywords: [
      `parkplatz flughafen nürnberg ${comparison.competitor.toLowerCase()}`,
      `${comparison.competitor.toLowerCase()} alternative nürnberg`,
    ],
    alternates: {
      canonical: `https://park-express24.de/vergleich/${comparison.slug}`,
    },
  };
}

export default async function ComparisonPage({ params }: PageProps) {
  const { slug } = await params;
  const comparison = getComparisonBySlug(slug);

  if (!comparison) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 md:pt-20">
        {/* Hero */}
        <section className="relative py-12 md:py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-500/20 mb-6">
                <Scale className="h-8 w-8 text-amber-400" />
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                ParkExpress24 {comparison.name}
              </h1>

              <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Ist ParkExpress24 die richtige Wahl gegenüber {comparison.competitor}?
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://park-express24.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-lg transition-all"
                >
                  <ExternalLink className="h-5 w-5" />
                  Jetzt buchen
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              {/* Price Comparison */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="p-6 rounded-2xl bg-amber-50 border-2 border-amber-200">
                  <h3 className="text-lg font-bold text-slate-800 mb-2">ParkExpress24</h3>
                  <p className="text-3xl font-bold text-amber-600 mb-4">{comparison.priceComparison.us}</p>
                  <ul className="space-y-2">
                    {comparison.ourAdvantages.map((adv, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-700">
                        <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                        {adv}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border-2 border-slate-200">
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{comparison.competitor}</h3>
                  <p className="text-3xl font-bold text-slate-600 mb-4">{comparison.priceComparison.them}</p>
                  <ul className="space-y-2">
                    {comparison.competitorAdvantages.map((adv, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-600">
                        <CheckCircle2 className="h-5 w-5 text-slate-400 shrink-0" />
                        {adv}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Summary */}
              <div className="p-8 rounded-2xl bg-slate-900 text-white">
                <h3 className="text-xl font-bold mb-4">Fazit</h3>
                <p className="text-slate-300 mb-6">
                  ParkExpress24 bietet eine günstige Alternative zu {comparison.competitor} mit zusätzlichen Vorteilen
                  wie Schlüssel behalten, 24/7 Shuttle und persönlichem Service.
                  {comparison.priceComparison.us} statt {comparison.priceComparison.them} – Sie sparen bares Geld.
                </p>
                <a
                  href="https://park-express24.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold transition-all"
                >
                  <ExternalLink className="h-5 w-5" />
                  Jetzt Preis berechnen
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-slate-50">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                Überzeugt?
              </h2>
              <p className="text-slate-600 mb-8">
                Testen Sie ParkExpress24 und erleben Sie den Unterschied.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://park-express24.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold transition-all"
                >
                  <ExternalLink className="h-5 w-5" />
                  Jetzt buchen
                </a>
                <a
                  href={company.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold transition-all"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Other Comparisons */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl font-bold text-slate-800 mb-6 text-center">
                Weitere Vergleiche
              </h2>
              <div className="flex flex-wrap justify-center gap-2">
                {comparisons
                  .filter((c) => c.slug !== comparison.slug)
                  .map((c) => (
                    <Link
                      key={c.slug}
                      href={`/vergleich/${c.slug}`}
                      className="px-4 py-2 rounded-full bg-slate-100 hover:bg-amber-100 text-slate-600 hover:text-amber-700 text-sm transition-colors"
                    >
                      {c.name}
                    </Link>
                  ))}
              </div>
              <div className="text-center mt-6">
                <Link href="/vergleich" className="text-amber-600 hover:text-amber-700 font-medium">
                  Alle Vergleiche ansehen →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
