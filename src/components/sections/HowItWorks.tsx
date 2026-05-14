"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CalendarCheck, Car, Bus } from "lucide-react";

const steps = [
  {
    step: 1,
    icon: CalendarCheck,
    title: "Parkplatz online buchen",
    description: "Wählen Sie Ihre Reisedaten und Parkplatzart. Die Buchung dauert nur wenige Minuten.",
  },
  {
    step: 2,
    icon: Car,
    title: "Auto am Parkplatz abstellen",
    description: "Fahren Sie zu unserem Parkplatz und stellen Sie Ihr Auto sicher ab. Unser Team erwartet Sie.",
  },
  {
    step: 3,
    icon: Bus,
    title: "Shuttle zum Terminal nutzen",
    description: "Unser kostenloser Shuttle bringt Sie in ca. 5 Minuten direkt zum Terminal des Flughafen Nürnberg.",
  },
];

export function HowItWorks() {
  return (
    <section id="wie-es-funktioniert" className="section bg-slate-50">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-2 mb-4">So funktioniert's</h2>
          <p className="mb-12 text-lg text-slate-600">
            In nur 3 einfachen Schritten zum stressfreien Start in Ihre Reise
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.step} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-20 hidden h-0.5 w-full bg-amber-200 md:block" />
                )}

                <Card className="relative z-10 border-0 bg-white shadow-md card-hover h-full">
                  <CardContent className="flex flex-col items-center p-8 text-center">
                    {/* Step Number */}
                    <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-white">
                      {step.step}
                    </div>

                    {/* Icon */}
                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50">
                      <step.icon className="h-10 w-10 text-amber-500" />
                    </div>

                    {/* Content */}
                    <h3 className="mb-3 text-xl font-bold text-slate-800">{step.title}</h3>
                    <p className="text-slate-600">{step.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
