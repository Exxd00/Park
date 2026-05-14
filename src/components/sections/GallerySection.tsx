"use client";

import { Card } from "@/components/ui/card";
import { Car, Bus, Building2, Users, Plane, Shield } from "lucide-react";

const galleryItems = [
  {
    icon: Car,
    title: "Außenstellplatz",
    description: "Eingezäunte Stellfläche",
  },
  {
    icon: Building2,
    title: "Hallenparkplatz",
    description: "Überdacht und geschützt",
  },
  {
    icon: Bus,
    title: "Shuttle-Bus",
    description: "Moderner Transferbus",
  },
  {
    icon: Shield,
    title: "Einfahrt",
    description: "Sichere Zufahrt",
  },
  {
    icon: Plane,
    title: "Terminal-Transfer",
    description: "Direkt zum Flughafen",
  },
  {
    icon: Users,
    title: "Service-Team",
    description: "Freundliche Mitarbeiter",
  },
];

export function GallerySection() {
  return (
    <section id="galerie" className="section bg-white">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-2 mb-4">Unsere Anlage</h2>
          <p className="mb-12 text-lg text-slate-600">
            Einblicke in unseren Parkservice am Flughafen Nürnberg
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
            {galleryItems.map((item, index) => (
              <Card
                key={index}
                className="group relative aspect-[4/3] overflow-hidden border-0 bg-gradient-to-br from-slate-100 to-slate-200 shadow-md card-hover cursor-pointer"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                  <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm group-hover:bg-amber-50 transition-colors">
                    <item.icon className="h-8 w-8 text-slate-600 group-hover:text-amber-600 transition-colors" />
                  </div>
                  <h3 className="font-semibold text-slate-800">{item.title}</h3>
                  <p className="text-sm text-slate-500">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
