import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingButtons } from "@/components/layout/FloatingButtons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { services, getServiceBySlug, getAllServiceSlugs } from "@/data/services";
import { company } from "@/data/company";
import { Car, Warehouse, Bus, Check, Clock, Star } from "lucide-react";

interface PageProps {
  params: Promise<{ serviceSlug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ serviceSlug: slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    return { title: "Seite nicht gefunden" };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
  };
}

const iconMap: { [key: string]: React.ElementType } = {
  car: Car,
  warehouse: Warehouse,
  bus: Bus,
};

export default async function ServicePage({ params }: PageProps) {
  const { serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    notFound();
  }

  const Icon = iconMap[service.icon] || Car;

  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 md:pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-800 to-slate-900 py-16 text-white">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10">
                <Icon className="h-10 w-10" />
              </div>
              <h1 className="mb-4 text-3xl font-bold sm:text-4xl">{service.name}</h1>
              <p className="text-lg text-slate-300">{service.shortDescription}</p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/buchen">
                  <Button variant="cta" size="lg">
                    Jetzt buchen
                  </Button>
                </Link>
                <Link href="/leistungen">
                  <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                    Alle Leistungen
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="section bg-white">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-12 md:grid-cols-2">
                <div>
                  <h2 className="heading-3 mb-4">Über {service.name}</h2>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
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
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="rounded-xl bg-white p-6 shadow-sm">
                  <Clock className="mx-auto mb-2 h-8 w-8 text-amber-500" />
                  <p className="text-2xl font-bold text-slate-800">24/7</p>
                  <p className="text-sm text-slate-500">Shuttle-Service</p>
                </div>
                <div className="rounded-xl bg-white p-6 shadow-sm">
                  <Bus className="mx-auto mb-2 h-8 w-8 text-amber-500" />
                  <p className="text-2xl font-bold text-slate-800">~5 Min</p>
                  <p className="text-sm text-slate-500">zum Terminal</p>
                </div>
                <div className="rounded-xl bg-white p-6 shadow-sm">
                  <Star className="mx-auto mb-2 h-8 w-8 text-amber-500" />
                  <p className="text-2xl font-bold text-slate-800">2000+</p>
                  <p className="text-sm text-slate-500">Bewertungen</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        {service.faq.length > 0 && (
          <section className="section bg-white">
            <div className="container">
              <div className="mx-auto max-w-3xl">
                <h2 className="heading-2 mb-8 text-center">
                  Häufige Fragen zum {service.name}
                </h2>

                <Accordion type="single" collapsible className="space-y-4">
                  {service.faq.map((faq, index) => (
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
                {service.name} buchen
              </h2>
              <p className="mb-8 text-amber-100">
                Sichern Sie sich jetzt Ihren Stellplatz am Flughafen Nürnberg
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
