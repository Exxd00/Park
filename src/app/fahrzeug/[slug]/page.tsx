import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { vehicleTypes, getVehicleTypeBySlug } from "@/data/seo-data";
import { CheckCircle2, Phone, MessageCircle, ExternalLink } from "lucide-react";
import { company } from "@/data/company";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return vehicleTypes.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = getVehicleTypeBySlug(slug);
  if (!vehicle) return { title: "Fahrzeugtyp nicht gefunden" };

  return {
    title: `${vehicle.name} parken Flughafen Nürnberg | Ab 6,90€/Tag`,
    description: `${vehicle.name} am Flughafen Nürnberg parken: ${vehicle.description}. 24/7 Shuttle, Schlüssel behalten.`,
    alternates: { canonical: `https://park-express24.de/fahrzeug/${vehicle.slug}` },
  };
}

export default async function VehicleTypePage({ params }: PageProps) {
  const { slug } = await params;
  const vehicle = getVehicleTypeBySlug(slug);
  if (!vehicle) notFound();

  const basePrice = 4.50;
  const price = basePrice + vehicle.surcharge;

  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 md:pt-20">
        <section className="relative py-12 md:py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-6xl mb-6 block">{vehicle.icon}</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                {vehicle.name} parken
                <span className="block text-amber-400 mt-2">am Flughafen Nürnberg</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">{vehicle.description}</p>

              <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/10 border border-white/20 mb-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-amber-400">ab {price.toFixed(2)}€</p>
                  <p className="text-sm text-slate-300">pro Tag</p>
                </div>
              </div>

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
                Das ist im Preis enthalten
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {["Stellplatz für Ihr " + vehicle.name, "24/7 Shuttle zum Terminal", "Schlüssel bleibt bei Ihnen",
                  "Bewachter Parkplatz", "Flexible Buchung", "Kostenlose Stornierung"].map((f, i) => (
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
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{vehicle.name} Parkplatz buchen</h2>
            <p className="text-slate-300 mb-8">Sichern Sie sich jetzt Ihren Stellplatz</p>
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
              <h2 className="text-xl font-bold text-slate-800 mb-6">Andere Fahrzeugtypen</h2>
              <div className="flex flex-wrap justify-center gap-2">
                {vehicleTypes.filter((v) => v.slug !== vehicle.slug).map((v) => (
                  <Link key={v.slug} href={`/fahrzeug/${v.slug}`}
                    className="px-4 py-2 rounded-full bg-slate-100 hover:bg-amber-100 text-slate-600 hover:text-amber-700 text-sm transition-colors flex items-center gap-2">
                    <span>{v.icon}</span>{v.name}
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
