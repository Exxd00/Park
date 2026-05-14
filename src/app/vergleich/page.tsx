import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { comparisons } from "@/data/seo-data";
import { Scale, ArrowRight, ExternalLink, CheckCircle2, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Vergleiche | Parken Flughafen Nürnberg | ParkExpress24",
  description: "ParkExpress24 vs. Parkhaus, Taxi, Bahn und andere Alternativen. Vergleichen Sie Preise und Vorteile.",
  keywords: ["parkplatz vergleich nürnberg", "parken flughafen alternativen"],
  alternates: { canonical: "https://park-express24.de/vergleich" },
};

export default function VergleichPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 md:pt-20">
        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-slate-900 to-slate-800">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-500/20 mb-6">
                <Scale className="h-8 w-8 text-amber-400" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                ParkExpress24 im Vergleich
              </h1>
              <p className="text-lg text-slate-300">
                Wie schneiden wir im Vergleich zu anderen Optionen ab?
              </p>
            </div>
          </div>
        </section>

        {/* Our Advantages */}
        <section className="py-12 md:py-16 bg-amber-50">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="p-8 rounded-2xl bg-white border-2 border-amber-200 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <Star className="h-8 w-8 text-amber-500" />
                  <h2 className="text-2xl font-bold text-slate-800">ParkExpress24 Vorteile</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Schlüssel bleibt bei Ihnen",
                    "24/7 kostenloser Shuttle",
                    "Nur 5 Min. zum Terminal",
                    "Bewachter Parkplatz",
                    "Ab 6,90€/Tag",
                    "Flexible Stornierung",
                  ].map((adv, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                      <span className="text-slate-700">{adv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparisons */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center">
                Detaillierte Vergleiche
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {comparisons.map((comp) => (
                  <Link
                    key={comp.slug}
                    href={`/vergleich/${comp.slug}`}
                    className="group p-6 rounded-2xl bg-slate-50 border-2 border-slate-100 hover:border-amber-300 hover:shadow-lg transition-all"
                  >
                    <h3 className="text-lg font-bold text-slate-800 mb-2">
                      ParkExpress24 {comp.name}
                    </h3>
                    <p className="text-sm text-slate-600 mb-4">
                      vs. {comp.competitor}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        <span className="text-amber-600 font-bold">{comp.priceComparison.us}</span>
                        <span className="text-slate-400 mx-2">vs.</span>
                        <span className="text-slate-500">{comp.priceComparison.them}</span>
                      </div>
                      <ArrowRight className="h-5 w-5 text-slate-300 group-hover:text-amber-500 transition-colors" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quick Comparison Table */}
        <section className="py-12 md:py-16 bg-slate-50">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">
                Schnellvergleich
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="p-4 text-left">Kriterium</th>
                      <th className="p-4 text-center bg-amber-500">ParkExpress24</th>
                      <th className="p-4 text-center">Flughafen Parkhaus</th>
                      <th className="p-4 text-center">Taxi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="p-4 font-medium text-slate-700">Preis (1 Woche)</td>
                      <td className="p-4 text-center font-bold text-amber-600">ab 60€</td>
                      <td className="p-4 text-center text-slate-600">~120€</td>
                      <td className="p-4 text-center text-slate-600">80-160€</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-slate-700">Schlüssel behalten</td>
                      <td className="p-4 text-center"><CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="p-4 text-center"><CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="p-4 text-center text-slate-400">—</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-slate-700">24/7 Service</td>
                      <td className="p-4 text-center"><CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="p-4 text-center"><CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="p-4 text-center"><CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" /></td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-slate-700">Auto bei Rückkehr bereit</td>
                      <td className="p-4 text-center"><CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="p-4 text-center"><CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="p-4 text-center text-slate-400">—</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-slate-900">
          <div className="container px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Überzeugt?
              </h2>
              <p className="text-slate-300 mb-8">
                Testen Sie ParkExpress24 und erleben Sie den Unterschied
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
