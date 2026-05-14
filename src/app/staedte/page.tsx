import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { cities } from "@/data/seo-data";
import { MapPin, Clock, Car, ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Städte | Parken Flughafen Nürnberg aus Ihrer Stadt",
  description: "Parken am Flughafen Nürnberg für Reisende aus Nürnberg, Fürth, Erlangen, Schwabach und der gesamten Region. Finden Sie Ihren Parkplatz.",
  keywords: [
    "parken flughafen nürnberg städte",
    "parkplatz nue region",
    "flughafen parken mittelfranken",
  ],
  alternates: {
    canonical: "https://park-express24.de/staedte",
  },
};

export default function StaedtePage() {
  const mainCities = cities.filter((c) => c.isMain);
  const otherCities = cities.filter((c) => !c.isMain);

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
        name: "Städte",
        item: "https://park-express24.de/staedte",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main className="min-h-screen pt-16 md:pt-20">
        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-slate-900 to-slate-800">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-500/20 mb-6">
                <MapPin className="h-8 w-8 text-amber-400" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Parken ab Ihrer Stadt
              </h1>
              <p className="text-lg text-slate-300">
                Von überall in der Region schnell zum Flughafen Nürnberg
              </p>
            </div>
          </div>
        </section>

        {/* Main Cities */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center">
              Hauptstädte der Region
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {mainCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/${city.slug}`}
                  className="group p-6 rounded-2xl bg-slate-50 border-2 border-slate-100 hover:border-amber-300 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center group-hover:bg-amber-500 transition-colors">
                      <MapPin className="h-6 w-6 text-amber-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 text-lg">{city.name}</h3>
                      <p className="text-sm text-slate-500">{city.region}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-slate-600">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-amber-500" />
                      <span>{city.driveTime} Min.</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Car className="h-4 w-4 text-amber-500" />
                      <span>ab 6,90€/Tag</span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-amber-600 font-medium text-sm group-hover:gap-2 transition-all">
                    <span>Mehr erfahren</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Other Cities */}
        <section className="py-12 md:py-16 bg-slate-50">
          <div className="container px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center">
              Weitere Städte in der Region
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {otherCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/${city.slug}`}
                  className="flex items-center justify-between p-4 rounded-xl bg-white border border-slate-200 hover:border-amber-300 hover:shadow-md transition-all group"
                >
                  <div>
                    <h3 className="font-semibold text-slate-800">{city.name}</h3>
                    <p className="text-sm text-slate-500">{city.driveTime} Min. Fahrt</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-slate-300 group-hover:text-amber-500 transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-slate-900">
          <div className="container px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Ihre Stadt nicht dabei?
              </h2>
              <p className="text-slate-300 mb-8">
                Kontaktieren Sie uns – wir sind für Reisende aus der gesamten Region da!
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
