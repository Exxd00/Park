"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Car, Warehouse, Bus, ArrowRight, Check } from "lucide-react";
import { services } from "@/data/services";
import { trackCtaClick } from "@/lib/tracking";

const iconMap: { [key: string]: React.ElementType } = {
  car: Car,
  warehouse: Warehouse,
  bus: Bus,
};

export function ServicesSection() {
  return (
    <section id="leistungen" className="section bg-white">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-2 mb-4">Unsere Leistungen</h2>
          <p className="mb-12 text-lg text-slate-600">
            Wählen Sie die passende Parkoption für Ihre Reise
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Car;
              return (
                <Card key={service.slug} className="group border-2 border-slate-100 bg-white shadow-md card-hover overflow-hidden">
                  <CardContent className="p-0">
                    {/* Header */}
                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 text-white">
                      <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white/10">
                        <Icon className="h-7 w-7" />
                      </div>
                      <h3 className="text-xl font-bold">{service.name}</h3>
                      <p className="mt-1 text-slate-300">{service.shortDescription}</p>
                    </div>

                    {/* Features */}
                    <div className="p-6">
                      <ul className="mb-6 space-y-3">
                        {service.features.slice(0, 4).map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                            <span className="text-sm text-slate-600">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        href={`/service/${service.slug}`}
                        onClick={() => trackCtaClick(`service_${service.slug}`, "services_section")}
                      >
                        <Button variant="outline" className="w-full group-hover:border-amber-500 group-hover:text-amber-600">
                          Mehr erfahren
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/buchen" onClick={() => trackCtaClick("services_booking", "services_section")}>
            <Button variant="cta" size="lg">
              Parkplatz jetzt buchen
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
