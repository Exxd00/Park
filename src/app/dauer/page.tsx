import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { durations } from "@/data/seo-data";
import { Clock, ArrowRight, ExternalLink, Euro } from "lucide-react";

export const metadata: Metadata = {
  title: "Parkdauer am Flughafen Nürnberg | 1 Tag bis Langzeit",
  description: "Parkplatz am Flughafen Nürnberg für jede Dauer: 1 Tag, Wochenende, 1-3 Wochen oder Langzeitparken. Ab 6,90€/Tag mit 24/7 Shuttle.",
  keywords: [
    "langzeitparken flughafen nürnberg",
    "1 woche parken flughafen nürnberg",
    "kurzparken flughafen nürnberg",
    "parkdauer nue",
  ],
  alternates: {
    canonical: "https://park-express24.de/dauer",
  },
};

export default function DurationsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 md:pt-20">
        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-slate-900 to-slate-800">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-500/20 mb-6">
                <Clock className="h-8 w-8 text-amber-400" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Parkdauer wählen
              </h1>
              <p className="text-lg text-slate-300">
                Von einem Tag bis Langzeitparken – wir haben den passenden Tarif
              </p>
            </div>
          </div>
        </section>

        {/* Duration Options */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid sm:grid-cols-2 gap-6">
                {durations.map((duration) => (
                  <Link
                    key={duration.slug}
                    href={`/dauer/${duration.slug}`}
                    className="group p-6 rounded-2xl bg-slate-50 border-2 border-slate-100 hover:border-amber-300 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center group-hover:bg-amber-500 transition-colors">
                          <Clock className="h-6 w-6 text-amber-600 group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-800 text-lg">{duration.name}</h3>
                          <p className="text-sm text-slate-500">{duration.days} {duration.days === 1 ? 'Tag' : 'Tage'}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-amber-600 font-bold text-xl">
                          <span>ab {duration.priceFrom}€</span>
                        </div>
                        <span className="text-xs text-slate-500">gesamt</span>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 mb-4">{duration.description}</p>
                    <div className="flex items-center text-amber-600 font-medium text-sm group-hover:gap-2 transition-all">
                      <span>Details ansehen</span>
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Info Box */}
        <section className="py-12 md:py-16 bg-slate-50">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              <div className="p-8 rounded-2xl bg-amber-50 border border-amber-100">
                <h2 className="text-xl font-bold text-slate-800 mb-4 text-center">
                  Je länger Sie parken, desto günstiger!
                </h2>
                <p className="text-slate-600 text-center mb-6">
                  Unsere Tagespreise werden günstiger je länger Sie parken.
                  Bei 2 Wochen oder länger profitieren Sie von unseren besten Tarifen.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-4 rounded-xl bg-white">
                    <p className="text-2xl font-bold text-amber-600">~10€</p>
                    <p className="text-sm text-slate-500">pro Tag (Kurzzeit)</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white">
                    <p className="text-2xl font-bold text-amber-600">~8,60€</p>
                    <p className="text-sm text-slate-500">pro Tag (1 Woche)</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white">
                    <p className="text-2xl font-bold text-amber-600">ab 6,90€</p>
                    <p className="text-sm text-slate-500">pro Tag (Langzeit)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-slate-900">
          <div className="container px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Parkplatz reservieren
              </h2>
              <p className="text-slate-300 mb-8">
                Wählen Sie Ihre Reisedaten und erhalten Sie Ihren persönlichen Preis
              </p>
              <a
                href="https://park-express24.de"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold transition-all"
              >
                <ExternalLink className="h-5 w-5" />
                Jetzt auf park-express24.de buchen
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
