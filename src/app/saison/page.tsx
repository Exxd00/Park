import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { seasons } from "@/data/seo-data";
import { Calendar, ArrowRight, ExternalLink, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Saison & Feiertage | Parken Flughafen Nürnberg",
  description: "Parken am Flughafen Nürnberg zu Weihnachten, Ostern, Sommerferien und mehr. Frühzeitig buchen für die beste Verfügbarkeit.",
  keywords: [
    "parken flughafen nürnberg weihnachten",
    "sommerferien parken nürnberg",
    "ostern flughafen nürnberg parken",
  ],
  alternates: {
    canonical: "https://park-express24.de/saison",
  },
};

export default function SeasonsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 md:pt-20">
        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-slate-900 to-slate-800">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-500/20 mb-6">
                <Calendar className="h-8 w-8 text-amber-400" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Saison & Feiertage
              </h1>
              <p className="text-lg text-slate-300">
                Planen Sie Ihre Reise zu den beliebtesten Reisezeiten
              </p>
            </div>
          </div>
        </section>

        {/* Seasons Grid */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid sm:grid-cols-2 gap-6">
                {seasons.map((season) => (
                  <Link
                    key={season.slug}
                    href={`/saison/${season.slug}`}
                    className="group p-6 rounded-2xl bg-slate-50 border-2 border-slate-100 hover:border-amber-300 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-4xl">{season.icon}</span>
                        <div>
                          <h3 className="font-bold text-slate-800 text-lg">{season.name}</h3>
                          <p className={`text-sm font-medium ${
                            season.demand === 'sehr hoch' ? 'text-red-500' :
                            season.demand === 'hoch' ? 'text-orange-500' : 'text-green-500'
                          }`}>
                            Nachfrage: {season.demand}
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 mb-4">{season.tip}</p>
                    <div className="flex items-center text-amber-600 font-medium text-sm group-hover:gap-2 transition-all">
                      <span>Mehr erfahren</span>
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Warning Box */}
        <section className="py-12 md:py-16 bg-slate-50">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-6 w-6 text-amber-600 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-amber-800 mb-2">
                      Frühzeitig buchen empfohlen!
                    </h3>
                    <p className="text-amber-700">
                      Zu Ferienzeiten und Feiertagen sind unsere Parkplätze besonders gefragt.
                      Buchen Sie rechtzeitig, um sich Ihren Platz zu sichern.
                    </p>
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
                Sichern Sie sich jetzt Ihren Stellplatz für die Ferienzeit
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
