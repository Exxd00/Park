import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { destinations, getDestinationBySlug, airlines } from "@/data/seo-data";
import {
  Plane,
  Clock,
  Sun,
  MapPin,
  CheckCircle2,
  Phone,
  MessageCircle,
  ExternalLink,
  Car,
  Key,
  Shield
} from "lucide-react";
import { company } from "@/data/company";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return destinations.map((dest) => ({
    slug: dest.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const dest = getDestinationBySlug(slug);

  if (!dest) {
    return { title: "Reiseziel nicht gefunden" };
  }

  return {
    title: `Parken Flughafen Nürnberg → ${dest.name} | Ab 6,90€/Tag`,
    description: `Flug nach ${dest.name} ab Nürnberg? Parken Sie günstig bei ParkExpress24. ${dest.flightTime} Flugzeit, Saison: ${dest.season}. 24/7 Shuttle zum Terminal.`,
    keywords: [
      `parken flughafen nürnberg ${dest.name.toLowerCase()}`,
      `flug ${dest.name.toLowerCase()} nürnberg parken`,
      `${dest.name.toLowerCase()} urlaub parken`,
    ],
    alternates: {
      canonical: `https://park-express24.de/ziel/${dest.slug}`,
    },
  };
}

export default async function DestinationPage({ params }: PageProps) {
  const { slug } = await params;
  const dest = getDestinationBySlug(slug);

  if (!dest) {
    notFound();
  }

  // Find airlines that fly to this destination
  const relevantAirlines = airlines.filter(a =>
    a.destinations.some(d => d.toLowerCase().includes(dest.name.toLowerCase()))
  );

  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 md:pt-20">
        {/* Hero */}
        <section className="relative py-12 md:py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '32px 32px',
            }} />
          </div>

          <div className="container px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 mb-6">
                <Plane className="h-4 w-4 text-amber-400" />
                <span className="text-amber-300 text-sm font-medium">
                  {dest.flightTime} Flugzeit
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
                Parken & Fliegen nach
                <span className="block text-amber-400 mt-2">{dest.name}</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Flug nach {dest.name}, {dest.country}? Parken Sie günstig am Flughafen Nürnberg
                und starten Sie entspannt in den Urlaub.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  <span>Ab 6,90€/Tag</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  <span>24/7 Shuttle</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  <span>Schlüssel behalten</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://park-express24.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-lg transition-all shadow-lg"
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

        {/* Destination Info */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <h2 className="text-xl font-bold text-slate-800 mb-4">
                    Reiseinfos {dest.name}
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-amber-500" />
                      <div>
                        <p className="text-sm text-slate-500">Land</p>
                        <p className="font-medium text-slate-800">{dest.country}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-amber-500" />
                      <div>
                        <p className="text-sm text-slate-500">Flugzeit ab Nürnberg</p>
                        <p className="font-medium text-slate-800">{dest.flightTime}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Sun className="h-5 w-5 text-amber-500" />
                      <div>
                        <p className="text-sm text-slate-500">Beste Reisezeit</p>
                        <p className="font-medium text-slate-800">{dest.season}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-amber-50 border border-amber-100">
                  <h2 className="text-xl font-bold text-slate-800 mb-4">
                    Warum bei uns parken?
                  </h2>
                  <ul className="space-y-3">
                    {[
                      { icon: Key, text: "Schlüssel bleibt bei Ihnen" },
                      { icon: Car, text: "24/7 kostenloser Shuttle" },
                      { icon: Shield, text: "Bewachter Parkplatz" },
                      { icon: Clock, text: "5 Min. zum Terminal" },
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <item.icon className="h-5 w-5 text-amber-600" />
                        <span className="text-slate-700">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Airlines */}
              {relevantAirlines.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-xl font-bold text-slate-800 mb-4">
                    Fluglinien nach {dest.name}
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {relevantAirlines.map((airline) => (
                      <Link
                        key={airline.slug}
                        href={`/airline/${airline.slug}`}
                        className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-amber-100 text-slate-700 hover:text-amber-700 font-medium transition-colors"
                      >
                        {airline.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Pricing */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white border-2 border-slate-200 hover:border-amber-300 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-slate-800">Außenstellplatz</h3>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-amber-600">6,90€</span>
                      <span className="text-slate-500 text-sm block">pro Tag</span>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-4">Perfekt für Ihren {dest.name}-Urlaub</p>
                  <ul className="space-y-2">
                    {["24/7 Shuttle", "Schlüssel behalten", "Bewacht"].map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-white border-2 border-slate-200 hover:border-amber-300 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-slate-800">Hallenparkplatz</h3>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-amber-600">8,90€</span>
                      <span className="text-slate-500 text-sm block">pro Tag</span>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-4">Überdacht und geschützt</p>
                  <ul className="space-y-2">
                    {["Wetterschutz", "24/7 Shuttle", "Extra sicher"].map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
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
                Bereit für {dest.name}?
              </h2>
              <p className="text-slate-300 mb-8">
                Sichern Sie sich jetzt Ihren Parkplatz und starten Sie entspannt in den Urlaub.
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

        {/* Other Destinations */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl font-bold text-slate-800 mb-6 text-center">
                Weitere beliebte Reiseziele
              </h2>
              <div className="flex flex-wrap justify-center gap-2">
                {destinations
                  .filter((d) => d.slug !== dest.slug && d.popular)
                  .slice(0, 8)
                  .map((d) => (
                    <Link
                      key={d.slug}
                      href={`/ziel/${d.slug}`}
                      className="px-4 py-2 rounded-full bg-slate-100 hover:bg-amber-100 text-slate-600 hover:text-amber-700 text-sm transition-colors"
                    >
                      {d.name}
                    </Link>
                  ))}
              </div>
              <div className="text-center mt-6">
                <Link href="/ziel" className="text-amber-600 hover:text-amber-700 font-medium">
                  Alle Reiseziele ansehen →
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
