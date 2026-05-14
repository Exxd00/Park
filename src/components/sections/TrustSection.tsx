"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Bus, Clock, Car, Star } from "lucide-react";

const trustItems = [
  {
    icon: Star,
    title: "2000+ Kundenbewertungen",
    description: "Zufriedene Reisende vertrauen uns",
  },
  {
    icon: Bus,
    title: "Shuttle 24/7",
    description: "Rund um die Uhr zum Terminal",
  },
  {
    icon: Clock,
    title: "ca. 5 Min. Transfer",
    description: "Schnell und zuverlässig",
  },
  {
    icon: Car,
    title: "Klare Buchung",
    description: "Einfach online reservieren",
  },
];

export function TrustSection() {
  return (
    <section className="section-sm bg-slate-50">
      <div className="container">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {trustItems.map((item) => (
            <Card key={item.title} className="border-0 bg-white shadow-sm card-hover">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-amber-50">
                  <item.icon className="h-7 w-7 text-amber-500" />
                </div>
                <h3 className="mb-1 font-semibold text-slate-800">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
