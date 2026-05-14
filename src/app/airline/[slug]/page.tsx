import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { airlines, getAirlineBySlug, destinations } from "@/data/seo-data";
import {
  Plane,
  CheckCircle2,
  Phone,
  MessageCircle,
  ExternalLink,
  MapPin,
  ArrowRight
} from "lucide-react";
import { company } from "@/data/company";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return airlines.map((airline) => ({
    slug: airline.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const airline = getAirlineBySlug(slug);

  if (!airline) {
    return { title: "Fluglinie nicht gefunden" };
  }

  return {
    title: `${airline.name} Flug ab Nürnberg | Parken ab 6,90€/Tag`,
    description: `Fliegen Sie mit ${airline.name} ab Nürnberg? Parken Sie günstig bei ParkExpress24. 24/7 Shuttle, Schlüssel behalten, ab 6,90€/Tag.`,
    keywords: [
      `${airline.name.toLowerCase()} nürnberg parken`,
      `parken flughafen nürnberg ${airline.name.toLowerCase()}`,
      `${airline.name.toLowerCase()} flug nürnberg`,
    ],
    alternates: {
      canonical: `https://park-express24.de/airline/${airline.slug}`,
    },
  };
}

export default async function AirlinePage({ params }: PageProps) {
  const { slug } = await params;
  const airline = getAirlineBySlug(slug);

  if (!airline) {
    notFound();
  }

  // Find matching destinations
  const relevantDestinations = destinations.filter(d =>
    airline.destinations.some(ad =>
      ad.toLowerCase().includes(d.name.toLowerCase()) ||
      d.name.toLowerCase().includes(ad.toLowerCase())
    )
  );

  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 md:pt-20">
        {/* Hero */}
        <section className="relative py-12 md:py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 mb-6">
                <Plane className="h-4 w-4 text-amber-400" />
                <span className="text-amber-300 text-sm font-medium">
                  {airline.type}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Mit {airline.name} fliegen?
                <span className="block text-amber-400 mt-2">Günstig parken am NUE</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Fliegen Sie mit {airline.name} ab Nürnberg? Parken Sie stressfrei
                bei ParkExpress24 – ab nur 6,90€ pro Tag.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  <span>Schlüssel behalten</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  <span>24/7 Shuttle</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  <span>5 Min. zum Terminal</span>
                </div>
              </div>

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
                <a
                  href={company.contact.phoneLink}
                  className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/20 transition-all"
                >
                  <Phone className="h-5 w-5" />
                  {company.contact.phone}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Destinations */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center">
                {airline.name} Ziele ab Nürnberg
              </h2>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                {airline.destinations.map((dest, i) => {
                  const matchedDest = destinations.find(d =>
                    d.name.toLowerCase() === dest.toLowerCase()
                  );
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100"
                    >
                      <MapPin className="h-5 w-5 text-amber-500" />
                      {matchedDest ? (
                        <Link
                          href={`/ziel/${matchedDest.slug}`}
                          className="font-medium text-slate-800 hover:text-amber-600"
                        >
                          {dest}
                        </Link>
                      ) : (
                        <span className="font-medium text-slate-800">{dest}</span>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Why park with us */}
              <div className="p-8 rounded-2xl bg-amber-50 border border-amber-100">
                <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">
                  Warum bei uns parken für Ihren {airline.name} Flug?
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Günstiger als das Flughafen-Parkhaus",
                    "Schlüssel bleibt bei Ihnen",
                    "24/7 kostenloser Shuttle",
                    "Nur 5 Minuten zum Terminal",
                    "Bewachter Parkplatz",
                    "Flexible Buchung",
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                      <span className="text-slate-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-slate-900">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {airline.name} Flug gebucht?
              </h2>
              <p className="text-slate-300 mb-8">
                Sichern Sie sich jetzt Ihren Parkplatz ab 6,90€/Tag.
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

        {/* Other Airlines */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl font-bold text-slate-800 mb-6 text-center">
                Weitere Fluglinien ab Nürnberg
              </h2>
              <div className="flex flex-wrap justify-center gap-2">
                {airlines
                  .filter((a) => a.slug !== airline.slug)
                  .slice(0, 8)
                  .map((a) => (
                    <Link
                      key={a.slug}
                      href={`/airline/${a.slug}`}
                      className="px-4 py-2 rounded-full bg-slate-100 hover:bg-amber-100 text-slate-600 hover:text-amber-700 text-sm transition-colors"
                    >
                      {a.name}
                    </Link>
                  ))}
              </div>
              <div className="text-center mt-6">
                <Link href="/airline" className="text-amber-600 hover:text-amber-700 font-medium">
                  Alle Fluglinien ansehen →
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
