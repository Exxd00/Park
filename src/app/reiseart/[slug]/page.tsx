import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { useCases, getUseCaseBySlug } from "@/data/seo-data";
import { CheckCircle2, Phone, MessageCircle, ExternalLink } from "lucide-react";
import { company } from "@/data/company";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return useCases.map((useCase) => ({ slug: useCase.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const useCase = getUseCaseBySlug(slug);

  if (!useCase) {
    return { title: "Reiseart nicht gefunden" };
  }

  return {
    title: `${useCase.name} | Parken Flughafen Nürnberg ab 6,90€`,
    description: `${useCase.description}. ${useCase.benefits.join(", ")}. Parken ab 6,90€/Tag am Flughafen Nürnberg.`,
    keywords: [
      `${useCase.name.toLowerCase()} parken flughafen nürnberg`,
      `${useCase.name.toLowerCase()} nue`,
    ],
    alternates: {
      canonical: `https://park-express24.de/reiseart/${useCase.slug}`,
    },
  };
}

export default async function UseCasePage({ params }: PageProps) {
  const { slug } = await params;
  const useCase = getUseCaseBySlug(slug);

  if (!useCase) {
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
              <span className="text-6xl mb-6 block">{useCase.icon}</span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                {useCase.name}
                <span className="block text-amber-400 mt-2">Parken am Flughafen Nürnberg</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                {useCase.description}
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
                  {company.contact.phone}
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
                Perfekt für {useCase.targetAudience}
              </h2>

              <div className="grid sm:grid-cols-2 gap-4 mb-12">
                {useCase.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-amber-50 border border-amber-100">
                    <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0" />
                    <span className="font-medium text-slate-800">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Pricing */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-slate-50 border-2 border-slate-100 hover:border-amber-300 transition-all">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Außenstellplatz</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-bold text-amber-600">ab 6,90€</span>
                    <span className="text-slate-500">/ Tag</span>
                  </div>
                  <ul className="space-y-2">
                    {["24/7 Shuttle", "Schlüssel behalten", "Bewacht"].map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border-2 border-slate-100 hover:border-amber-300 transition-all">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Hallenparkplatz</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-bold text-amber-600">ab 8,90€</span>
                    <span className="text-slate-500">/ Tag</span>
                  </div>
                  <ul className="space-y-2">
                    {["Überdacht", "24/7 Shuttle", "Extra sicher"].map((f, i) => (
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
                Bereit für Ihre {useCase.name}?
              </h2>
              <p className="text-slate-300 mb-8">
                Buchen Sie jetzt Ihren Parkplatz und starten Sie entspannt.
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

        {/* Other Use Cases */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl font-bold text-slate-800 mb-6 text-center">
                Andere Reisearten
              </h2>
              <div className="flex flex-wrap justify-center gap-2">
                {useCases
                  .filter((u) => u.slug !== useCase.slug)
                  .map((u) => (
                    <Link
                      key={u.slug}
                      href={`/reiseart/${u.slug}`}
                      className="px-4 py-2 rounded-full bg-slate-100 hover:bg-amber-100 text-slate-600 hover:text-amber-700 text-sm transition-colors flex items-center gap-2"
                    >
                      <span>{u.icon}</span>
                      {u.name}
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
