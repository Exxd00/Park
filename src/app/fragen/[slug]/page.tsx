import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { faqs, getFaqBySlug } from "@/data/seo-data";
import { HelpCircle, Phone, MessageCircle, ExternalLink, ArrowLeft } from "lucide-react";
import { company } from "@/data/company";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return faqs.map((faq) => ({ slug: faq.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const faq = getFaqBySlug(slug);
  if (!faq) return { title: "Frage nicht gefunden" };

  return {
    title: `${faq.question} | ParkExpress24`,
    description: faq.answer,
    keywords: faq.keywords,
    alternates: { canonical: `https://park-express24.de/fragen/${faq.slug}` },
  };
}

export default async function FaqDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const faq = getFaqBySlug(slug);
  if (!faq) notFound();

  // Get related FAQs from same category
  const relatedFaqs = faqs.filter(f => f.category === faq.category && f.slug !== faq.slug).slice(0, 4);

  // Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [{
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    }],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main className="min-h-screen pt-16 md:pt-20">
        <section className="py-12 md:py-16 bg-gradient-to-b from-slate-900 to-slate-800">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              <Link href="/fragen" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Alle Fragen
              </Link>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-sm mb-4">
                <HelpCircle className="h-4 w-4" />
                {faq.category}
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">{faq.question}</h1>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-slate-700 leading-relaxed">{faq.answer}</p>
              </div>

              <div className="mt-12 p-6 rounded-2xl bg-amber-50 border border-amber-100">
                <h3 className="font-bold text-slate-800 mb-4">Noch Fragen?</h3>
                <p className="text-slate-600 mb-4">Kontaktieren Sie uns direkt – wir helfen gerne weiter.</p>
                <div className="flex flex-wrap gap-3">
                  <a href={company.contact.phoneLink}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-amber-300 transition-colors">
                    <Phone className="h-4 w-4" />{company.contact.phone}
                  </a>
                  <a href={company.contact.whatsappLink} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-100 text-green-700 hover:bg-green-200 transition-colors">
                    <MessageCircle className="h-4 w-4" />WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {relatedFaqs.length > 0 && (
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="container px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-xl font-bold text-slate-800 mb-6">Ähnliche Fragen</h2>
                <div className="space-y-3">
                  {relatedFaqs.map((f) => (
                    <Link key={f.slug} href={`/fragen/${f.slug}`}
                      className="block p-4 rounded-xl bg-white border border-slate-200 hover:border-amber-300 hover:shadow-md transition-all">
                      <h3 className="font-semibold text-slate-800 hover:text-amber-600">{f.question}</h3>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="py-12 md:py-16 bg-slate-900">
          <div className="container px-4 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Bereit zum Buchen?</h2>
            <p className="text-slate-300 mb-8">Sichern Sie sich jetzt Ihren Parkplatz</p>
            <a href="https://park-express24.de" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold transition-all">
              <ExternalLink className="h-5 w-5" />Jetzt buchen
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
