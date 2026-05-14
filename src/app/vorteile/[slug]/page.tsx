import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { features, getFeatureBySlug } from "@/data/seo-data";
import { CheckCircle2, Phone, MessageCircle, ExternalLink, ChevronDown } from "lucide-react";
import { company } from "@/data/company";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return features.map((feature) => ({ slug: feature.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const feature = getFeatureBySlug(slug);

  if (!feature) {
    return { title: "Vorteil nicht gefunden" };
  }

  return {
    title: `${feature.name} | ParkExpress24 Flughafen Nürnberg`,
    description: `${feature.headline}. ${feature.description}`,
    keywords: [
      `${feature.name.toLowerCase()} parkplatz nürnberg`,
      `flughafen nürnberg ${feature.name.toLowerCase()}`,
    ],
    alternates: {
      canonical: `https://park-express24.de/vorteile/${feature.slug}`,
    },
  };
}

export default async function FeaturePage({ params }: PageProps) {
  const { slug } = await params;
  const feature = getFeatureBySlug(slug);

  if (!feature) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 md:pt-20">
        {/* Hero */}
        <section className="relative py-12 md:py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-6xl mb-6 block">{feature.icon}</span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                {feature.headline}
              </h1>

              <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                {feature.description}
              </p>

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
                  Fragen?
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center">
                Das bedeutet das für Sie
              </h2>

              <div className="grid sm:grid-cols-2 gap-4 mb-12">
                {feature.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-amber-50 border border-amber-100">
                    <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0" />
                    <span className="font-medium text-slate-800">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* FAQ */}
              {feature.faq && feature.faq.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">
                    Häufige Fragen zu {feature.name}
                  </h3>
                  <div className="space-y-3">
                    {feature.faq.map((item, i) => (
                      <details
                        key={i}
                        className="group bg-slate-50 rounded-xl border border-slate-200 overflow-hidden"
                      >
                        <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                          <h4 className="font-semibold text-slate-800 pr-4">{item.q}</h4>
                          <ChevronDown className="h-5 w-5 text-slate-400 group-open:rotate-180 transition-transform shrink-0" />
                        </summary>
                        <div className="px-5 pb-5 pt-0">
                          <p className="text-slate-600">{item.a}</p>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-slate-900">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Überzeugt?
              </h2>
              <p className="text-slate-300 mb-8">
                Buchen Sie jetzt und erleben Sie den Unterschied.
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

        {/* Other Features */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl font-bold text-slate-800 mb-6 text-center">
                Weitere Vorteile
              </h2>
              <div className="flex flex-wrap justify-center gap-2">
                {features
                  .filter((f) => f.slug !== feature.slug)
                  .map((f) => (
                    <Link
                      key={f.slug}
                      href={`/vorteile/${f.slug}`}
                      className="px-4 py-2 rounded-full bg-slate-100 hover:bg-amber-100 text-slate-600 hover:text-amber-700 text-sm transition-colors flex items-center gap-2"
                    >
                      <span>{f.icon}</span>
                      {f.name}
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
