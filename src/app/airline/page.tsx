import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { airlines } from "@/data/seo-data";
import { Plane, ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Fluglinien ab Nürnberg | Parken am Flughafen NUE",
  description: "Alle Fluglinien ab Flughafen Nürnberg: Ryanair, Lufthansa, Eurowings, Condor und mehr. Parken Sie günstig bei ParkExpress24.",
  keywords: [
    "fluglinien nürnberg",
    "airlines nürnberg flughafen",
    "ryanair nürnberg parken",
    "lufthansa nürnberg parken",
  ],
  alternates: {
    canonical: "https://park-express24.de/airline",
  },
};

export default function AirlinesPage() {
  const popularAirlines = airlines.filter(a => a.popular);
  const otherAirlines = airlines.filter(a => !a.popular);

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
                Fluglinien ab Flughafen Nürnberg
              </h1>
              <p className="text-lg text-slate-300">
                Egal mit welcher Airline Sie fliegen – parken Sie günstig bei uns
              </p>
            </div>
          </div>
        </section>

        {/* Popular Airlines */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center">
              Beliebte Fluglinien
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {popularAirlines.map((airline) => (
                <Link
                  key={airline.slug}
                  href={`/airline/${airline.slug}`}
                  className="group p-6 rounded-2xl bg-slate-50 border-2 border-slate-100 hover:border-amber-300 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center group-hover:bg-amber-500 transition-colors">
                      <Plane className="h-6 w-6 text-amber-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 text-lg">{airline.name}</h3>
                      <p className="text-sm text-slate-500">{airline.type}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mb-3">
                    Ziele: {airline.destinations.slice(0, 3).join(", ")}
                    {airline.destinations.length > 3 && "..."}
                  </p>
                  <div className="flex items-center text-amber-600 font-medium text-sm group-hover:gap-2 transition-all">
                    <span>Mehr erfahren</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Other Airlines */}
        {otherAirlines.length > 0 && (
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="container px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center">
                Weitere Fluglinien
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {otherAirlines.map((airline) => (
                  <Link
                    key={airline.slug}
                    href={`/airline/${airline.slug}`}
                    className="flex items-center justify-between p-4 rounded-xl bg-white border border-slate-200 hover:border-amber-300 hover:shadow-md transition-all group"
                  >
                    <div>
                      <h3 className="font-semibold text-slate-800">{airline.name}</h3>
                      <p className="text-sm text-slate-500">{airline.type}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-slate-300 group-hover:text-amber-500 transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-12 md:py-16 bg-slate-900">
          <div className="container px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Parkplatz für Ihren Flug sichern
              </h2>
              <p className="text-slate-300 mb-8">
                Egal mit welcher Airline – parken Sie ab 6,90€/Tag
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
