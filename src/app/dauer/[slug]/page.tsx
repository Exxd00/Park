import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { durations, getDurationBySlug } from "@/data/seo-data";
import {
  Clock,
  CheckCircle2,
  Phone,
  MessageCircle,
  ExternalLink,
  Car,
  Key,
  Shield,
  Euro
} from "lucide-react";
import { company } from "@/data/company";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return durations.map((duration) => ({
    slug: duration.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const duration = getDurationBySlug(slug);

  if (!duration) {
    return { title: "Parkdauer nicht gefunden" };
  }

  return {
    title: `${duration.name} parken Flughafen Nürnberg | Ab ${duration.priceFrom}€`,
    description: `${duration.name} am Flughafen Nürnberg parken: ${duration.description}. Ab ${duration.priceFrom}€, 24/7 Shuttle, Schlüssel behalten.`,
    keywords: [
      `${duration.name.toLowerCase()} parken flughafen nürnberg`,
      `${duration.days} tage parken nürnberg`,
      `parkplatz nue ${duration.name.toLowerCase()}`,
    ],
    alternates: {
      canonical: `https://park-express24.de/dauer/${duration.slug}`,
    },
  };
}

export default async function DurationPage({ params }: PageProps) {
  const { slug } = await params;
  const duration = getDurationBySlug(slug);

  if (!duration) {
    notFound();
  }

  const dailyRate = (duration.priceFrom / duration.days).toFixed(2);

  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 md:pt-20">
        {/* Hero */}
        <section className="relative py-12 md:py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 mb-6">
                <Clock className="h-4 w-4 text-amber-400" />
                <span className="text-amber-300 text-sm font-medium">
                  {duration.days} {duration.days === 1 ? 'Tag' : 'Tage'} parken
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                {duration.name} parken
                <span className="block text-amber-400 mt-2">am Flughafen Nürnberg</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                {duration.description}
              </p>

              <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/10 border border-white/20 mb-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-amber-400">ab {duration.priceFrom}€</p>
                  <p className="text-sm text-slate-300">Gesamtpreis</p>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">~{dailyRate}€</p>
                  <p className="text-sm text-slate-300">pro Tag</p>
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

        {/* Features */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center">
                {duration.name} parken – das ist inklusive
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {[
                  { icon: Key, title: "Schlüssel behalten", desc: "Ihr Schlüssel bleibt bei Ihnen – niemand fährt Ihr Auto" },
                  { icon: Car, title: "Kostenloser Shuttle", desc: "24/7 Transfer zum Terminal in nur 5 Minuten" },
                  { icon: Shield, title: "Bewachter Parkplatz", desc: "Videoüberwachung und eingezäuntes Gelände" },
                  { icon: Clock, title: "Flexible Zeiten", desc: "Ankunft und Abholung rund um die Uhr möglich" },
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-4 p-6 rounded-xl bg-slate-50">
                    <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                      <feature.icon className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 mb-1">{feature.title}</h3>
                      <p className="text-slate-600 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Parking Options */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white border-2 border-slate-200 hover:border-amber-300 transition-all">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Außenstellplatz</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-bold text-amber-600">ab {duration.priceFrom}€</span>
                    <span className="text-slate-500">/ {duration.name}</span>
                  </div>
                  <ul className="space-y-2">
                    {["Günstigster Tarif", "24/7 Shuttle", "Bewacht"].map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-white border-2 border-slate-200 hover:border-amber-300 transition-all">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Hallenparkplatz</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-bold text-amber-600">ab {(duration.priceFrom * 1.4).toFixed(0)}€</span>
                    <span className="text-slate-500">/ {duration.name}</span>
                  </div>
                  <ul className="space-y-2">
                    {["Überdacht & geschützt", "24/7 Shuttle", "Extra sicher"].map((f, i) => (
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
                {duration.name} Parkplatz sichern
              </h2>
              <p className="text-slate-300 mb-8">
                Buchen Sie jetzt und starten Sie entspannt in Ihre Reise.
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

        {/* Other Durations */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl font-bold text-slate-800 mb-6 text-center">
                Andere Parkdauern
              </h2>
              <div className="flex flex-wrap justify-center gap-2">
                {durations
                  .filter((d) => d.slug !== duration.slug)
                  .map((d) => (
                    <Link
                      key={d.slug}
                      href={`/dauer/${d.slug}`}
                      className="px-4 py-2 rounded-full bg-slate-100 hover:bg-amber-100 text-slate-600 hover:text-amber-700 text-sm transition-colors"
                    >
                      {d.name}
                    </Link>
                  ))}
              </div>
              <div className="text-center mt-6">
                <Link href="/dauer" className="text-amber-600 hover:text-amber-700 font-medium">
                  Alle Parkdauern ansehen →
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
