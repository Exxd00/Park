import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { travelTimes } from "@/data/seo-data";
import { Clock, ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Abflugzeiten | Parken Flughafen Nürnberg",
  description: "Parken am Flughafen Nürnberg für jeden Abflugzeitpunkt: Früher Morgen, Mittag, Abend oder Nachtflug. 24/7 Shuttle Service.",
  keywords: ["nachtflug parken nürnberg", "früher flug parken nue", "abflug morgens parken"],
  alternates: { canonical: "https://park-express24.de/abflugzeit" },
};

export default function TravelTimesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 md:pt-20">
        <section className="py-12 md:py-16 bg-gradient-to-b from-slate-900 to-slate-800">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-500/20 mb-6">
                <Clock className="h-8 w-8 text-amber-400" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Parken zu jeder Abflugzeit</h1>
              <p className="text-lg text-slate-300">24/7 Shuttle – egal wann Ihr Flug geht</p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
              {travelTimes.map((time) => (
                <Link key={time.slug} href={`/abflugzeit/${time.slug}`}
                  className="group p-6 rounded-2xl bg-slate-50 border-2 border-slate-100 hover:border-amber-300 hover:shadow-lg transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-slate-800 text-lg">{time.name}</h3>
                      <p className="text-sm text-slate-500">{time.timeRange}</p>
                    </div>
                    {time.popular && (
                      <span className="px-2 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-medium">Beliebt</span>
                    )}
                  </div>
                  <p className="text-sm text-slate-600 mb-4">{time.tip}</p>
                  <div className="flex items-center text-amber-600 font-medium text-sm group-hover:gap-2 transition-all">
                    <span>Mehr erfahren</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-amber-50">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">24/7 Shuttle Service</h2>
              <p className="text-slate-600 mb-6">
                Unser Shuttle fährt rund um die Uhr – auch bei Nachtflügen um 4 Uhr morgens
                oder späten Ankünften um Mitternacht. Sie müssen sich um nichts kümmern.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-slate-900">
          <div className="container px-4 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Parkplatz reservieren</h2>
            <p className="text-slate-300 mb-8">Egal wann Ihr Flug geht – wir sind da</p>
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
