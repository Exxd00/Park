"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MessageCircle, Clock, MapPin } from "lucide-react";
import { company } from "@/data/company";
import { trackCtaClick, confirmAndTrackCall, confirmAndTrackWhatsApp } from "@/lib/tracking";

export function ContactSection() {
  const handlePhoneClick = (e: React.MouseEvent) => {
    e.preventDefault();
    confirmAndTrackCall(company.contact.phone, 'contact_section');
  };

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    confirmAndTrackWhatsApp(
      company.contact.phone,
      'Hallo! Ich möchte einen Parkplatz reservieren.',
      'contact_section'
    );
  };

  return (
    <section id="kontakt" className="section bg-gradient-to-br from-slate-50 to-amber-50/30">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-2 mb-4">Kontakt & Buchung</h2>
          <p className="mb-12 text-lg text-slate-600">
            Haben Sie Fragen? Wir sind für Sie da.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Contact Info */}
            <Card className="border-0 bg-white shadow-lg">
              <CardContent className="p-8">
                <h3 className="mb-6 text-xl font-bold text-slate-800">Kontaktdaten</h3>

                <div className="space-y-5">
                  <button
                    onClick={handlePhoneClick}
                    className="flex w-full items-center gap-4 rounded-lg p-3 text-left transition-colors hover:bg-slate-50"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                      <Phone className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Telefon</p>
                      <p className="font-semibold text-slate-800">{company.contact.phone}</p>
                    </div>
                  </button>

                  <button
                    onClick={handleWhatsAppClick}
                    className="flex w-full items-center gap-4 rounded-lg p-3 text-left transition-colors hover:bg-slate-50"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                      <MessageCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">WhatsApp</p>
                      <p className="font-semibold text-slate-800">{company.contact.whatsapp}</p>
                    </div>
                  </button>

                  <a
                    href={`mailto:${company.contact.email}`}
                    className="flex items-center gap-4 rounded-lg p-3 transition-colors hover:bg-slate-50"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                      <Mail className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">E-Mail</p>
                      <p className="font-semibold text-slate-800">{company.contact.email}</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 rounded-lg p-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
                      <Clock className="h-5 w-5 text-slate-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Öffnungszeiten</p>
                      <p className="font-semibold text-slate-800">Shuttle: {company.hours.shuttle}</p>
                      <p className="text-sm text-slate-600">Büro: {company.hours.office}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Card */}
            <Card className="border-0 bg-gradient-to-br from-slate-800 to-slate-900 text-white shadow-lg">
              <CardContent className="flex h-full flex-col items-center justify-center p-8 text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-amber-500/20">
                  <MapPin className="h-10 w-10 text-amber-400" />
                </div>

                <h3 className="mb-3 text-2xl font-bold">Jetzt Parkplatz sichern</h3>
                <p className="mb-8 text-slate-300">
                  Reservieren Sie Ihren Stellplatz am Flughafen Nürnberg und starten Sie stressfrei in Ihre Reise.
                </p>

                <Link href="/buchen" onClick={() => trackCtaClick("contact_booking", "contact_section")}>
                  <Button variant="cta" size="xl">
                    Parkplatz jetzt buchen
                  </Button>
                </Link>

                <p className="mt-6 text-sm text-slate-400">
                  {company.location.airport}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
