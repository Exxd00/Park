"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Clock, Route, Shield, Smile } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Klare Zeitplanung",
    description: "Sie wissen genau, wann Sie losfahren müssen. Kein Raten, kein Stress.",
  },
  {
    icon: Route,
    title: "Einfacher Ablauf",
    description: "Parken, Shuttle, Terminal – in wenigen Minuten sind Sie am Gate.",
  },
  {
    icon: Shield,
    title: "Sicher abgestellt",
    description: "Ihr Auto wartet sicher auf Sie, während Sie entspannt reisen.",
  },
  {
    icon: Smile,
    title: "Entspannt ankommen",
    description: "Mit ausreichend Zeitpuffer beginnt Ihre Reise ohne Hektik.",
  },
];

export function HowItHelps() {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
            So helfen wir Ihnen
          </h2>
          <p className="text-slate-500 text-lg">
            Wir nehmen Ihnen die Unsicherheit vor der Reise.
            Sie konzentrieren sich auf das Wesentliche – wir kümmern uns um den Rest.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <Card
                key={benefit.title}
                className="border-0 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center">
                        <benefit.icon className="h-6 w-6 text-amber-500" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-1">{benefit.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
