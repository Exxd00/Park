"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Zap, Bus, Clock, Eye, Car, Star } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Schnelle Buchung",
    description: "Online in wenigen Minuten reservieren",
  },
  {
    icon: Bus,
    title: "Shuttle 24/7",
    description: "Rund um die Uhr verfügbar, auch nachts",
  },
  {
    icon: Clock,
    title: "ca. 5 Minuten",
    description: "Kurze Transferzeit zum Terminal",
  },
  {
    icon: Eye,
    title: "Transparente Abläufe",
    description: "Klare Informationen, keine Überraschungen",
  },
  {
    icon: Car,
    title: "Außen & Halle",
    description: "Zwei Parkoptionen für jeden Bedarf",
  },
  {
    icon: Star,
    title: "Kundenbewertungen",
    description: "2000+ zufriedene Reisende",
  },
];

export function WhyUsSection() {
  return (
    <section className="section bg-gradient-to-br from-slate-800 to-slate-900 text-white">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl">
            Warum ParkExpress24?
          </h2>
          <p className="mb-12 text-lg text-slate-300">
            Nicht nur parken. Besser vorbereitet abfliegen.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="border-0 bg-white/5 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/20">
                    <feature.icon className="h-6 w-6 text-amber-400" />
                  </div>
                  <h3 className="mb-2 font-semibold text-white">{feature.title}</h3>
                  <p className="text-sm text-slate-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
