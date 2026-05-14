"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Clock, Brain, Heart, CheckCircle } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "Zeit richtig einschätzen",
    description: "Viele unterschätzen die Zeit für Anfahrt, Parken und Check-in. Ein klarer Plan verhindert Zeitdruck.",
  },
  {
    icon: Brain,
    title: "Weniger Entscheidungen am Reisetag",
    description: "Je mehr Sie vorher planen, desto weniger müssen Sie am Tag der Reise spontan entscheiden.",
  },
  {
    icon: Heart,
    title: "Stressfrei starten",
    description: "Eine gute Planung reduziert Nervosität. Sie wissen genau, was wann passiert.",
  },
  {
    icon: CheckCircle,
    title: "Puffer für Unerwartetes",
    description: "Verkehr, Wetter, lange Schlangen – mit eingeplanter Reserve bleiben Sie entspannt.",
  },
];

export function WhyPlanningMatters() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
            Warum Planung vor dem Flug wichtig ist
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Die meisten Reisenden unterschätzen, wie viel Zeit sie wirklich brauchen.
            Gute Vorbereitung macht den Unterschied.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6 sm:grid-cols-2">
            {reasons.map((reason) => (
              <Card key={reason.title} className="border-0 bg-white shadow-sm">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center">
                        <reason.icon className="h-6 w-6 text-amber-500" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-1">{reason.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{reason.description}</p>
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
