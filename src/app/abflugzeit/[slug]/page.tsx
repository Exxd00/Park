import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { travelTimes, getTravelTimeBySlug } from "@/data/seo-data";
import { Clock, CheckCircle2, Phone, MessageCircle, ExternalLink } from "lucide-react";
import { company } from "@/data/company";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return travelTimes.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const time = getTravelTimeBySlug(slug);
  if (!time) return { title: "Nicht gefunden" };

  return {
    title: `${time.name} Flug | Parken Flughafen Nürnberg`,
    description: `Flug ${time.name} (${time.timeRange})? ${time.tip}. Parken ab 6,90€/Tag mit 24/7 Shuttle.`,
    alternates: { canonical: `https://park-express24.de/abflugzeit/${time.slug}` },
  };
}

export default async function TravelTimePage({ params }: PageProps) {
  const { slug } = await params;
  const time = getTravelTimeBySlug(slug);
  if (!time) notFound();

  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 md:pt-20">
        <section className="relative py-12 md:py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 mb-6">
                <Clock className="h-4 w-4 text-amber-400" />
                <span className="text-amber-300 text-sm font-medium">{time.timeRange}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Flug {time.name}?
                <span className="block text-amber-400 mt-2">Wir sind bereit!</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">{time.tip}</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://park-express24.de" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-lg transition-all">
                  <ExternalLink className="h-5 w-5" />Jetzt buchen
                </a>
                <a href={company.contact.phoneLink}
                  className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/20 transition-all">
                  <Phone className="h-5 w-5" />{company.contact.phone}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-white">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center">
                {time.name} Flug – so funktioniert's
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {["24/7 Shuttle verfügbar", "Auch bei Nachtflügen", "Schlüssel bleibt bei Ihnen",
                  "5 Min. zum Terminal", "Bewachter Parkplatz", "Flexible Ankunftszeit"].map((f, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50">
                    <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                    <span className="text-slate-700">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-slate-900">
          <div className="container px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Parkplatz für Ihren {time.name} Flug</h2>
            <p className="text-slate-300 mb-8">Buchen Sie jetzt und starten Sie entspannt</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://park-express24.de" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold transition-all">
                <ExternalLink className="h-5 w-5" />Jetzt buchen
              </a>
              <a href={company.contact.whatsappLink} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold transition-all">
                <MessageCircle className="h-5 w-5" />WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-xl font-bold text-slate-800 mb-6">Andere Abflugzeiten</h2>
              <div className="flex flex-wrap justify-center gap-2">
                {travelTimes.filter((t) => t.slug !== time.slug).map((t) => (
                  <Link key={t.slug} href={`/abflugzeit/${t.slug}`}
                    className="px-4 py-2 rounded-full bg-slate-100 hover:bg-amber-100 text-slate-600 hover:text-amber-700 text-sm transition-colors">
                    {t.name} ({t.timeRange})
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
