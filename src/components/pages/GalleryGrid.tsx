"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Car, Building2, Bus, Shield, Plane, Users, X } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    icon: Car,
    title: "Außenstellplatz",
    description: "Großzügige, eingezäunte Parkfläche für Ihr Fahrzeug",
    details: "Unser Außenstellplatz bietet Platz für zahlreiche Fahrzeuge. Die Anlage ist eingezäunt, beleuchtet und wird regelmäßig kontrolliert.",
  },
  {
    id: 2,
    icon: Building2,
    title: "Hallenparkplatz",
    description: "Überdachte Stellplätze mit Witterungsschutz",
    details: "Der Hallenparkplatz schützt Ihr Fahrzeug vor Regen, Schnee und direkter Sonneneinstrahlung – ideal für längere Reisen.",
  },
  {
    id: 3,
    icon: Bus,
    title: "Shuttle-Bus",
    description: "Komfortabler Transfer zum Terminal",
    details: "Unsere modernen Shuttle-Busse bringen Sie bequem und schnell zum Flughafen Nürnberg. Die Fahrzeit beträgt nur ca. 5 Minuten.",
  },
  {
    id: 4,
    icon: Shield,
    title: "Sichere Einfahrt",
    description: "Kontrollierte Zufahrt zur Anlage",
    details: "Die Einfahrt ist gesichert und überwacht. Bei der Ankunft werden Sie von unserem Team empfangen.",
  },
  {
    id: 5,
    icon: Plane,
    title: "Terminal-Shuttle",
    description: "Direkter Transfer zum Check-in",
    details: "Wir bringen Sie direkt zum Abflugbereich des Flughafen Nürnberg. Keine langen Wege, kein Stress.",
  },
  {
    id: 6,
    icon: Users,
    title: "Freundliches Team",
    description: "Persönlicher Service vor Ort",
    details: "Unser Team steht Ihnen bei Fragen jederzeit zur Verfügung und sorgt für einen reibungslosen Ablauf.",
  },
];

export function GalleryGrid() {
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

  return (
    <section className="section bg-slate-50">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
            {galleryItems.map((item) => (
              <Card
                key={item.id}
                className="group relative aspect-[4/3] cursor-pointer overflow-hidden border-0 bg-gradient-to-br from-slate-100 to-slate-200 shadow-md transition-all hover:shadow-xl"
                onClick={() => setSelectedItem(item)}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center transition-all group-hover:scale-105">
                  <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm transition-colors group-hover:bg-amber-50">
                    <item.icon className="h-8 w-8 text-slate-600 transition-colors group-hover:text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-slate-800">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="mb-4 text-slate-600">
              Überzeugt? Sichern Sie sich jetzt Ihren Parkplatz.
            </p>
            <Link href="/buchen">
              <Button variant="cta" size="lg">
                Parkplatz jetzt buchen
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-lg">
          {selectedItem && (
            <div className="text-center">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-amber-100">
                <selectedItem.icon className="h-10 w-10 text-amber-600" />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-slate-800">{selectedItem.title}</h3>
              <p className="mb-4 text-slate-500">{selectedItem.description}</p>
              <p className="text-slate-600">{selectedItem.details}</p>
              <Link href="/buchen" className="mt-6 inline-block">
                <Button variant="cta">Jetzt buchen</Button>
              </Link>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
