import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingButtons } from "@/components/layout/FloatingButtons";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cities, getCityBySlug, getAllCitySlugs } from "@/data/cities";
import { services, getServiceBySlug, getAllServiceSlugs } from "@/data/services";
import { company } from "@/data/company";
import { MapPin, Check, Clock, Bus, Star, Car, Warehouse } from "lucide-react";

interface PageProps {
  params: Promise<{ citySlug: string; serviceSlug: string }>;
}

export async function generateStaticParams() {
  const citySlugs = getAllCitySlugs();
  const serviceSlugs = getAllServiceSlugs();

  const params: { citySlug: string; serviceSlug: string }[] = [];

  for (const citySlug of citySlugs) {
    for (const serviceSlug of serviceSlugs) {
      params.push({ citySlug, serviceSlug });
    }
  }

  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { citySlug, serviceSlug } = await params;
  const city = getCityBySlug(citySlug);
  const service = getServiceBySlug(serviceSlug);

  if (!city || !service) {
    return { title: "Seite nicht gefunden" };
  }

  return {
    title: `${service.name} in ${city.name} | Flughafen Nürnberg | ParkExpress24`,
    description: `${service.name} am Flughafen Nürnberg für Reisende aus ${city.name}. ${service.shortDescription}. Jetzt online buchen!`,
  };
}

const iconMap: { [key: string]: React.ElementType } = {
  car: Car,
  warehouse: Warehouse,
  bus: Bus,
};

export default async function CityServicePage({ params }: PageProps) {
  const { citySlug, serviceSlug } = await params;
  const city = getCityBySlug(citySlug);
  const service = getServiceBySlug(serviceSlug);

  if (!city || !service) {
    notFound();
  }

  const Icon = iconMap[service.icon] || Car;

  // Combine FAQs from both city and service
  const combinedFaqs = [...service.faq, ...city.faq];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 md:pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-800 to-slate-900 py-16 text-white">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 flex items-center justify-center gap-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm">
                  <MapPin className="h-4 w-4" />
                  {city.name}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 px-4 py-2 text-sm">
                  <Icon className="h-4 w-4" />
                  {service.name}
                </span>
              </div>
              <h1 className="mb-4 text-3xl font-bold sm:text-4xl">
                {service.name} für Reisende aus {city.name}
              </h1>
              <p className="text-lg text-slate-300">
                {service.shortDescription} – ideal für Ihre Reise ab {city.name} zum Flughafen Nürnberg.
              </p>
              <div className="mt-8">
                <Link href="/buchen">
                  <Button variant="cta" size="lg">
                    Parkplatz jetzt buchen
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="section bg-white">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-12 md:grid-cols-2">
                <div>
                  <h2 className="heading-3 mb-4">{service.name} am Flughafen Nürnberg</h2>
                  <p className="mb-6 text-slate-600 leading-relaxed">{service.description}</p>
                  <p className="text-slate-600 leading-relaxed">
                    Von {city.name} erreichen Sie unseren Parkplatz in kurzer Zeit.
                    Die Entfernung beträgt {city.distanceToAirport}.
                  </p>
                </div>
                <div>
                  <h2 className="heading-3 mb-4">Ihre Vorteile</h2>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-slate-50 py-12">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <div className="grid grid-cols-2 gap-4 text-center md:grid-cols-4">
                <div className="rounded-xl bg-white p-6 shadow-sm">
                  <MapPin className="mx-auto mb-2 h-8 w-8 text-amber-500" />
                  <p className="text-xl font-bold text-slate-800">{city.distanceToAirport}</p>
                  <p className="text-sm text-slate-500">von {city.name}</p>
                </div>
                <div className="rounded-xl bg-white p-6 shadow-sm">
                  <Clock className="mx-auto mb-2 h-8 w-8 text-amber-500" />
                  <p className="text-xl font-bold text-slate-800">24/7</p>
                  <p className="text-sm text-slate-500">Shuttle-Service</p>
                </div>
                <div className="rounded-xl bg-white p-6 shadow-sm">
                  <Bus className="mx-auto mb-2 h-8 w-8 text-amber-500" />
                  <p className="text-xl font-bold text-slate-800">~5 Min</p>
                  <p className="text-sm text-slate-500">zum Terminal</p>
                </div>
                <div className="rounded-xl bg-white p-6 shadow-sm">
                  <Star className="mx-auto mb-2 h-8 w-8 text-amber-500" />
                  <p className="text-xl font-bold text-slate-800">2000+</p>
                  <p className="text-sm text-slate-500">Bewertungen</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        {combinedFaqs.length > 0 && (
          <section className="section bg-white">
            <div className="container">
              <div className="mx-auto max-w-3xl">
                <h2 className="heading-2 mb-8 text-center">Häufige Fragen</h2>

                <Accordion type="single" collapsible className="space-y-4">
                  {combinedFaqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="rounded-xl border-2 border-slate-100 bg-white px-6 shadow-sm"
                    >
                      <AccordionTrigger className="py-5 text-left font-semibold hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="pb-5 text-slate-600">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="section bg-gradient-to-br from-amber-500 to-orange-500 text-white">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
                {service.name} ab {city.name} buchen
              </h2>
              <p className="mb-8 text-amber-100">
                Reservieren Sie jetzt Ihren Stellplatz am Flughafen Nürnberg
              </p>
              <Link href="/buchen">
                <Button variant="secondary" size="lg" className="bg-white text-amber-600 hover:bg-amber-50">
                  Parkplatz jetzt buchen
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
