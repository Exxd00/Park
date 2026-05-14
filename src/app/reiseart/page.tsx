import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { useCases } from "@/data/seo-data";
import { Users, ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Reisearten | Parken Flughafen Nürnberg",
  description: "Parken am Flughafen Nürnberg für jeden Reisetyp: Geschäftsreise, Familienurlaub, Kreuzfahrt, Städtetrip und mehr. Ab 6,90€/Tag.",
  keywords: [
    "geschäftsreise parken nürnberg",
    "familienurlaub parken flughafen",
    "kreuzfahrt parken nürnberg",
  ],
  alternates: {
    canonical: "https://park-express24.de/reiseart",
  },
};

export default function UseCasesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 md:pt-20">
        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-slate-900 to-slate-800">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-500/20 mb-6">
                <Users className="h-8 w-8 text-amber-400" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Parken für jede Reiseart
              </h1>
              <p className="text-lg text-slate-300">
                Egal wie Sie reisen – wir haben die passende Lösung für Sie
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases Grid */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {useCases.map((useCase) => (
                  <Link
                    key={useCase.slug}
                    href={`/reiseart/${useCase.slug}`}
                    className="group p-6 rounded-2xl bg-slate-50 border-2 border-slate-100 hover:border-amber-300 hover:shadow-lg transition-all"
                  >
                    <span className="text-4xl mb-4 block">{useCase.icon}</span>
                    <h3 className="font-bold text-slate-800 text-lg mb-2">{useCase.name}</h3>
                    <p className="text-sm text-slate-600 mb-4">{useCase.description}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {useCase.benefits.slice(0, 2).map((benefit, i) => (
                        <span key={i} className="px-2 py-1 rounded-full bg-amber-100 text-amber-700 text-xs">
                          {benefit}
                        </span>
                      ))}
                    </div>
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

        {/* CTA */}
        <section className="py-12 md:py-16 bg-slate-900">
          <div className="container px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Passenden Parkplatz finden
              </h2>
              <p className="text-slate-300 mb-8">
                Egal wie Sie reisen – wir haben die passende Parklösung für Sie
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
