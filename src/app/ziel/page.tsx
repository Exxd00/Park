import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { destinations } from "@/data/seo-data";
import { Plane, Clock, Sun, ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Reiseziele ab Flughafen Nürnberg | Parken & Fliegen",
  description: "Beliebte Reiseziele ab Flughafen Nürnberg: Mallorca, Antalya, Kreta, Hurghada und mehr. Parken Sie günstig bei uns und fliegen Sie entspannt in den Urlaub.",
  keywords: [
    "flughafen nürnberg reiseziele",
    "flüge ab nürnberg",
    "urlaub ab nürnberg",
    "parken und fliegen nürnberg",
  ],
  alternates: {
    canonical: "https://park-express24.de/ziel",
  },
};

export default function DestinationsPage() {
  const popularDestinations = destinations.filter(d => d.popular);
  const otherDestinations = destinations.filter(d => !d.popular);

  // Group by country
  const byCountry: Record<string, typeof destinations> = {};
  for (const dest of destinations) {
    if (!byCountry[dest.country]) {
      byCountry[dest.country] = [];
    }
    byCountry[dest.country].push(dest);
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 md:pt-20">
        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-slate-900 to-slate-800">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-500/20 mb-6">
                <Plane className="h-8 w-8 text-amber-400" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Reiseziele ab Flughafen Nürnberg
              </h1>
              <p className="text-lg text-slate-300">
                Entdecken Sie beliebte Urlaubsziele und parken Sie günstig bei uns
              </p>
            </div>
          </div>
        </section>

        {/* Popular Destinations */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center">
              Beliebte Reiseziele
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {popularDestinations.map((dest) => (
                <Link
                  key={dest.slug}
                  href={`/ziel/${dest.slug}`}
                  className="group p-6 rounded-2xl bg-slate-50 border-2 border-slate-100 hover:border-amber-300 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center group-hover:bg-amber-500 transition-colors">
                      <Plane className="h-6 w-6 text-amber-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 text-lg">{dest.name}</h3>
                      <p className="text-sm text-slate-500">{dest.country}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-amber-500" />
                      <span>{dest.flightTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Sun className="h-4 w-4 text-amber-500" />
                      <span>{dest.season}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-amber-600 font-medium text-sm group-hover:gap-2 transition-all">
                    <span>Mehr erfahren</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* All Destinations by Country */}
        <section className="py-12 md:py-16 bg-slate-50">
          <div className="container px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center">
              Alle Reiseziele nach Land
            </h2>
            <div className="max-w-4xl mx-auto space-y-8">
              {Object.entries(byCountry).map(([country, dests]) => (
                <div key={country}>
                  <h3 className="text-lg font-bold text-slate-700 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    {country}
                  </h3>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {dests.map((dest) => (
                      <Link
                        key={dest.slug}
                        href={`/ziel/${dest.slug}`}
                        className="flex items-center justify-between p-4 rounded-xl bg-white border border-slate-200 hover:border-amber-300 hover:shadow-md transition-all group"
                      >
                        <div>
                          <h4 className="font-semibold text-slate-800">{dest.name}</h4>
                          <p className="text-sm text-slate-500">{dest.flightTime} Flug</p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-slate-300 group-hover:text-amber-500 transition-colors" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-slate-900">
          <div className="container px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Parkplatz für Ihre Reise sichern
              </h2>
              <p className="text-slate-300 mb-8">
                Egal wohin Sie fliegen – parken Sie günstig und sicher bei uns!
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
