"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, Car, ArrowRight } from "lucide-react";
import { trackCtaClick } from "@/lib/tracking";

export function BookingPreview() {
  const [arrivalDate, setArrivalDate] = useState("");
  const [departureDate, setDepartureDate] = useState("");

  return (
    <section id="buchen-vorschau" className="section bg-white">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="heading-2 mb-4">Parkplatz reservieren</h2>
          <p className="mb-10 text-lg text-slate-600">
            Sichern Sie sich jetzt Ihren Stellplatz am Flughafen Nürnberg
          </p>

          <Card className="border-2 border-amber-100 bg-gradient-to-br from-amber-50/50 to-orange-50/30 shadow-xl">
            <CardContent className="p-6 md:p-10">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className="text-left">
                  <Label htmlFor="parkType" className="mb-2 flex items-center gap-2 text-sm font-medium">
                    <Car className="h-4 w-4 text-amber-500" />
                    Parkplatzart
                  </Label>
                  <select
                    id="parkType"
                    className="h-12 w-full rounded-lg border-2 border-slate-200 bg-white px-4 text-slate-700 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                  >
                    <option value="aussen">Außenstellplatz</option>
                    <option value="halle">Hallenparkplatz</option>
                  </select>
                </div>

                <div className="text-left">
                  <Label htmlFor="arrival" className="mb-2 flex items-center gap-2 text-sm font-medium">
                    <Calendar className="h-4 w-4 text-amber-500" />
                    Anreise
                  </Label>
                  <Input
                    id="arrival"
                    type="date"
                    value={arrivalDate}
                    onChange={(e) => setArrivalDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    className="h-12 border-2"
                  />
                </div>

                <div className="text-left">
                  <Label htmlFor="departure" className="mb-2 flex items-center gap-2 text-sm font-medium">
                    <Calendar className="h-4 w-4 text-amber-500" />
                    Rückreise
                  </Label>
                  <Input
                    id="departure"
                    type="date"
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    min={arrivalDate || new Date().toISOString().split("T")[0]}
                    className="h-12 border-2"
                  />
                </div>

                <div className="text-left">
                  <Label htmlFor="persons" className="mb-2 flex items-center gap-2 text-sm font-medium">
                    <Users className="h-4 w-4 text-amber-500" />
                    Personen
                  </Label>
                  <select
                    id="persons"
                    className="h-12 w-full rounded-lg border-2 border-slate-200 bg-white px-4 text-slate-700 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Personen</option>
                    <option value="3">3 Personen</option>
                    <option value="4">4 Personen</option>
                    <option value="5">5+ Personen</option>
                  </select>
                </div>
              </div>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/buchen" onClick={() => trackCtaClick("booking_preview_main", "booking_preview")}>
                  <Button variant="cta" size="xl" className="w-full sm:w-auto">
                    Parkplatz jetzt buchen
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>

              <p className="mt-6 text-sm text-slate-500">
                Preis wird bei der Buchung angezeigt • Kostenlose Stornierung bis 24h vorher
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
