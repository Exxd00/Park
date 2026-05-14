import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { seasons, getSeasonBySlug, destinations } from "@/data/seo-data";
import {
  Calendar,
  CheckCircle2,
  Phone,
  MessageCircle,
  ExternalLink,
  AlertTriangle
} from "lucide-react";
import { company } from "@/data/company";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return seasons.map((season) => ({ slug: season.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const season = getSeasonBySlug(slug);

  if (!season) {
    return { title: "Saison nicht gefunden" };
  }

  return {
    title: `${season.name} Parken Flughafen Nürnberg | Frühzeitig buchen`,
    description: `Parken am Flughafen Nürnberg zu ${season.name}: ${season.tip}. Ab 6,90€/Tag, 24/7 Shuttle. Jetzt reservieren!`,
    keywords: [
      `${season.name.toLowerCase()} parken flughafen nürnberg`,
      `${season.name.toLowerCase()} flug nürnberg`,
      `parken nue ${season.name.toLowerCase()}`,
    ],
    alternates: {
      canonical: `https://park-express24.de/saison/${season.slug}`,
    },
  };
}

export default async function SeasonPage({ params }: PageProps) {
  const { slug } = await params;
  const season = getSeasonBySlug(slug);

  if (!season) {
    notFound();
  }

  const popularDests = destinations.filter(d => d.popular).slice(0, 6);

  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 md:pt-20">
        {/* Hero */}
        <section className="relative py-12 md:py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-6xl mb-6 block">{season.icon}</span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                {season.name}
                <span className="block text-amber-400 mt-2">Parken am Flughafen Nürnberg</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 mb-6 max-w-2xl mx-auto">
                {season.tip}
              </p>

              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 ${
                season.demand === 'sehr hoch' ? 'bg-red-500/20 text-red-300' :
                season.demand === 'hoch' ? 'bg-orange-500/20 text-orange-300' : 'bg-green-500/20 text-green-300'
              }`}>
                <AlertTriangle className="h-4 w-4" />
                <span className="text-sm font-medium">Nachfrage: {season.demand}</span>
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

        {/* Info */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="p-8 rounded-2xl bg-amber-50 border border-amber-100 mb-12">
                <h2 className="text-xl font-bold text-slate-800 mb-4">
                  Tipp für {season.name}
                </h2>
                <p className="text-slate-700 mb-4">
                  {season.demand === 'sehr hoch'
                    ? `Zu ${season.name} sind unsere Parkplätze besonders gefragt. Wir empfehlen, mindestens 2-3 Wochen im Voraus zu buchen, um sich Ihren Platz zu sichern.`
                    : season.demand === 'hoch'
                    ? `${season.name} ist eine beliebte Reisezeit. Buchen Sie am besten 1-2 Wochen im Voraus.`
                    : `${season.name} bietet gute Verfügbarkeit. Spontane Buchungen sind oft möglich.`
                  }
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Frühbucherrabatt", "Kostenlose Stornierung", "Sofortbestätigung"].map((benefit, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-medium">
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>

              {/* Popular destinations for this season */}
              <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                Beliebte Ziele zu {season.name}
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                {popularDests.map((dest) => (
                  <Link
                    key={dest.slug}
                    href={`/ziel/${dest.slug}`}
                    className="p-4 rounded-xl bg-slate-50 hover:bg-amber-50 border border-slate-100 hover:border-amber-200 transition-all"
                  >
                    <h3 className="font-semibold text-slate-800">{dest.name}</h3>
                    <p className="text-sm text-slate-500">{dest.country} • {dest.flightTime}</p>
                  </Link>
                ))}
              </div>

              {/* Features */}
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Schlüssel bleibt bei Ihnen",
                  "24/7 kostenloser Shuttle",
                  "5 Minuten zum Terminal",
                  "Bewachter Parkplatz",
                  "Flexible Stornierung",
                  "Günstige Preise ab 6,90€/Tag",
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50">
                    <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-slate-900">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {season.name} Parkplatz sichern
              </h2>
              <p className="text-slate-300 mb-8">
                Buchen Sie jetzt und genießen Sie Ihre {season.name}sreise stressfrei.
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

        {/* Other Seasons */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl font-bold text-slate-800 mb-6 text-center">
                Andere Reisezeiten
              </h2>
              <div className="flex flex-wrap justify-center gap-2">
                {seasons
                  .filter((s) => s.slug !== season.slug)
                  .map((s) => (
                    <Link
                      key={s.slug}
                      href={`/saison/${s.slug}`}
                      className="px-4 py-2 rounded-full bg-slate-100 hover:bg-amber-100 text-slate-600 hover:text-amber-700 text-sm transition-colors flex items-center gap-2"
                    >
                      <span>{s.icon}</span>
                      {s.name}
                    </Link>
                  ))}
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
