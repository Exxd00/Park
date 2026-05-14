"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Clock, Bus, Shield, MapPin } from "lucide-react";

const features = [
  {
    icon: Bus,
    title: "Shuttle 24/7",
    description: "Rund um die Uhr zum Terminal",
  },
  {
    icon: Clock,
    title: "ca. 5 Minuten",
    description: "Kurzer Transfer zum Flughafen",
  },
  {
    icon: Shield,
    title: "Sicher parken",
    description: "Außenstellplatz oder Halle",
  },
  {
    icon: MapPin,
    title: "Gute Lage",
    description: "Nahe am Flughafen Nürnberg",
  },
];

export function SolutionSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-amber-400 text-sm font-medium tracking-wide mb-4">
              Unser Service
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Parken Sie entspannt am Flughafen
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              ParkExpress24 macht Ihre Anreise zum Flughafen Nürnberg einfach und planbar.
              Kein Stress, keine Überraschungen.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
            {features.map((feature) => (
              <Card key={feature.title} className="bg-white/5 border-white/10 backdrop-blur">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-amber-500/20 mb-4">
                    <feature.icon className="h-6 w-6 text-amber-400" />
                  </div>
                  <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                  <p className="text-slate-400 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Services */}
          <div className="grid gap-6 md:grid-cols-2 mb-12">
            <Card className="bg-white border-0">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-slate-800 mb-3">Außenstellplatz</h3>
                <p className="text-slate-600 mb-4">
                  Wirtschaftliche Parkmöglichkeit unter freiem Himmel.
                  Eingezäunt, beleuchtet und mit direktem Shuttle-Anschluss.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    Günstige Preise
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    24/7 Shuttle inklusive
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    Beleuchtetes Gelände
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-0">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-slate-800 mb-3">Hallenparkplatz</h3>
                <p className="text-slate-600 mb-4">
                  Überdachter Stellplatz mit besserem Schutz für Ihr Fahrzeug.
                  Ideal für längere Reisen oder empfindliche Autos.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    Überdacht & geschützt
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    24/7 Shuttle inklusive
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    Ideal für Langzeitparken
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link href="/so-funktionierts">
              <Button
                variant="cta"
                size="lg"
                className="px-8"
              >
                Ablauf ansehen
              </Button>
            </Link>
            <p className="text-slate-500 text-sm mt-4">
              Keine Verpflichtung. Einfach informieren.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
