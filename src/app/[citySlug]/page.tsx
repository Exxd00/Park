import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { cities, faqs, getCityBySlug } from "@/data/seo-data";
import {
  Car,
  Clock,
  Shield,
  MapPin,
  Key,
  Phone,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  Star,
  Users,
  Plane
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/data/company";

interface PageProps {
  params: Promise<{ citySlug: string }>;
}

// Generate static params for all cities
export async function generateStaticParams() {
  return cities.map((city) => ({
    citySlug: city.slug,
  }));
}

// Generate metadata for each city
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { citySlug } = await params;
  const city = getCityBySlug(citySlug);

  if (!city) {
    return {
      title: "Seite nicht gefunden",
    };
  }

  const title = `Parken Flughafen Nürnberg ab ${city.name} | Ab 6,90€/Tag`;
  const description = `Von ${city.name} zum Flughafen Nürnberg: Nur ${city.driveTime} Min. Fahrt. Parken ab 6,90€/Tag mit kostenlosem 24/7 Shuttle. Schlüssel bleibt bei Ihnen!`;

  return {
    title,
    description,
    keywords: [
      `parken flughafen nürnberg ${city.name.toLowerCase()}`,
      `${city.name.toLowerCase()} flughafen nürnberg parken`,
      `parkplatz nue ${city.name.toLowerCase()}`,
      `flughafen parken von ${city.name.toLowerCase()}`,
    ],
    openGraph: {
      title,
      description,
      type: "website",
    },
    alternates: {
      canonical: `https://park-express24.de/${city.slug}`,
    },
  };
}

export default async function CityPage({ params }: PageProps) {
  const { citySlug } = await params;
  const city = getCityBySlug(citySlug);

  if (!city) {
    notFound();
  }

  // Select relevant FAQs for this page
  const relevantFAQs = faqs.filter(f =>
    f.category === "Preise" || f.category === "Shuttle" || f.category === "Fahrzeug"
  ).slice(0, 6);

  // Schema for this page
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `ParkExpress24 - Parken ab ${city.name}`,
    description: `Parkplatz am Flughafen Nürnberg für Reisende aus ${city.name}. ${city.driveTime} Minuten Fahrt, ab 6,90€/Tag.`,
    url: `https://park-express24.de/${city.slug}`,
    telephone: "+4915124147779",
    areaServed: {
      "@type": "City",
      name: city.name,
    },
    priceRange: "€€",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: relevantFAQs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

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
      {
        "@type": "ListItem",
        position: 3,
        name: city.name,
        item: `https://park-express24.de/${city.slug}`,
      },
    ],
  };

  return (
    <>
      <Head schemas={[localBusinessSchema, faqSchema, breadcrumbSchema]} />
      <Header />
      <main className="min-h-screen pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative py-12 md:py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '32px 32px',
            }} />
          </div>

          <div className="container px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 mb-6">
                <MapPin className="h-4 w-4 text-amber-400" />
                <span className="text-amber-300 text-sm font-medium">
                  {city.driveTime} Min. von {city.name}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
                Parken Flughafen Nürnberg
                <span className="block text-amber-400 mt-2">ab {city.name}</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Von {city.name} in nur {city.driveTime} Minuten zum Parkplatz.
                Ab 6,90€/Tag mit kostenlosem 24/7 Shuttle zum Terminal.
              </p>

              {/* Key features */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  <span>Schlüssel bleibt bei Ihnen</span>
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

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://park-express24.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-lg transition-all shadow-lg hover:shadow-xl"
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

        {/* Why from this city section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center">
                Warum von {city.name} bei uns parken?
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Nur {city.driveTime} Minuten</h3>
                  <p className="text-slate-600">
                    Von {city.name} erreichen Sie unseren Parkplatz am Flughafen Nürnberg in nur {city.driveTime} Minuten.
                    Schneller als mit dem Taxi und deutlich günstiger.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                    <Key className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Schlüssel bleibt bei Ihnen</h3>
                  <p className="text-slate-600">
                    Anders als bei vielen Parkdiensten: Sie parken selbst ein und behalten Ihren Schlüssel.
                    Niemand fährt Ihr Auto.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Sicher & Bewacht</h3>
                  <p className="text-slate-600">
                    Eingezäunter Parkplatz mit Videoüberwachung und Beleuchtung rund um die Uhr.
                    Ihr Auto ist bei uns sicher aufgehoben.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
                    <Car className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">24/7 Shuttle-Service</h3>
                  <p className="text-slate-600">
                    Unser kostenloser Shuttle bringt Sie in 5 Minuten zum Terminal – rund um die Uhr,
                    auch bei Nachtflügen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 md:py-20 bg-slate-50">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center">
                Unsere Parkplätze & Preise
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Außenstellplatz */}
                <div className="p-6 rounded-2xl bg-white border-2 border-slate-200 hover:border-amber-300 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-slate-800">Außenstellplatz</h3>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-amber-600">6,90€</span>
                      <span className="text-slate-500 text-sm block">pro Tag</span>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-4">Günstiger Parkplatz unter freiem Himmel</p>
                  <ul className="space-y-2">
                    {["Günstigster Preis", "24/7 Shuttle", "Bewacht & eingezäunt", "Schlüssel bleibt bei Ihnen"].map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hallenparkplatz */}
                <div className="p-6 rounded-2xl bg-white border-2 border-slate-200 hover:border-amber-300 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-slate-800">Hallenparkplatz</h3>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-amber-600">8,90€</span>
                      <span className="text-slate-500 text-sm block">pro Tag</span>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-4">Überdachter Parkplatz - Schutz vor Wetter</p>
                  <ul className="space-y-2">
                    {["Wetterschutz", "24/7 Shuttle", "Videoüberwachung", "Schlüssel bleibt bei Ihnen"].map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <a
                  href="https://park-express24.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-semibold transition-all"
                >
                  <ExternalLink className="h-5 w-5" />
                  Verfügbarkeit prüfen
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center">
                So funktioniert's für Reisende aus {city.name}
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { step: 1, icon: Car, title: "Hinfahren", desc: `In ${city.driveTime} Min. von ${city.name} zu uns` },
                  { step: 2, icon: Key, title: "Parken", desc: "Selbst einparken, Schlüssel behalten" },
                  { step: 3, icon: Plane, title: "Shuttle", desc: "In 5 Min. zum Terminal" },
                  { step: 4, icon: CheckCircle2, title: "Rückkehr", desc: "Wir holen Sie ab" },
                ].map((item) => (
                  <div key={item.step} className="text-center">
                    <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-7 w-7 text-amber-600" />
                    </div>
                    <div className="text-sm text-amber-600 font-medium mb-1">Schritt {item.step}</div>
                    <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - AEO */}
        <section className="py-12 md:py-20 bg-slate-50">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center">
                Häufige Fragen zum Parken ab {city.name}
              </h2>

              <div className="space-y-4">
                {relevantFAQs.map((faq, index) => (
                  <details
                    key={index}
                    className="group bg-white rounded-xl border border-slate-200 overflow-hidden"
                  >
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                      <h3 className="font-semibold text-slate-800 pr-4">{faq.question}</h3>
                      <ChevronDown className="h-5 w-5 text-slate-400 group-open:rotate-180 transition-transform shrink-0" />
                    </summary>
                    <div className="px-5 pb-5 pt-0">
                      <p className="text-slate-600">{faq.answer}</p>
                    </div>
                  </details>
                ))}
              </div>

              <div className="text-center mt-8">
                <Link href="/faq" className="text-amber-600 hover:text-amber-700 font-medium">
                  Alle Fragen ansehen →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 bg-slate-900">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Bereit für stressfreies Parken?
              </h2>
              <p className="text-slate-300 mb-8">
                Von {city.name} zum Flughafen Nürnberg – sicher, günstig und unkompliziert.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://park-express24.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold transition-all"
                >
                  <ExternalLink className="h-5 w-5" />
                  Jetzt auf park-express24.de buchen
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

        {/* Other cities */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl font-bold text-slate-800 mb-6 text-center">
                Auch für Reisende aus anderen Städten
              </h2>
              <div className="flex flex-wrap justify-center gap-2">
                {cities
                  .filter((c) => c.slug !== city.slug)
                  .slice(0, 12)
                  .map((c) => (
                    <Link
                      key={c.slug}
                      href={`/${c.slug}`}
                      className="px-4 py-2 rounded-full bg-slate-100 hover:bg-amber-100 text-slate-600 hover:text-amber-700 text-sm transition-colors"
                    >
                      {c.name}
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

// Helper component for schema
function Head({ schemas }: { schemas: object[] }) {
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
