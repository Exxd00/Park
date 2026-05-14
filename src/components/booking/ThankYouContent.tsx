"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Phone, MessageCircle, Home, Mail, ExternalLink, AlertCircle } from "lucide-react";
import { company } from "@/data/company";
import { trackPageVisit, confirmAndTrackCall, confirmAndTrackWhatsApp, trackAndOpenBookingPage } from "@/lib/tracking";

export function ThankYouContent() {
  useEffect(() => {
    trackPageVisit('thank_you');
  }, []);

  const handlePhoneClick = (e: React.MouseEvent) => {
    e.preventDefault();
    confirmAndTrackCall(company.contact.phone, 'thank_you_page');
  };

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    confirmAndTrackWhatsApp(
      company.contact.phone,
      'Hallo! Ich habe gerade eine Buchungsanfrage gesendet.',
      'thank_you_page'
    );
  };

  const handleBookingPageClick = (e: React.MouseEvent) => {
    e.preventDefault();
    trackAndOpenBookingPage('https://park-express24.de', 'thank_you_page');
  };

  return (
    <div className="container py-16">
      <div className="mx-auto max-w-2xl text-center">
        {/* Success Icon */}
        <div className="mb-8 inline-flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2 className="h-12 w-12 text-green-600" />
        </div>

        {/* Thank You Message */}
        <h1 className="heading-2 mb-4">Vielen Dank für Ihre Reservierung!</h1>
        <p className="mb-8 text-lg text-slate-600">
          Wir haben Ihre Anfrage erhalten und bestätigen Ihre Buchung schnellstmöglich per E-Mail oder Telefon.
        </p>

        {/* Important: Confirm Booking Card */}
        <Card className="mb-8 border-2 border-amber-200 bg-amber-50">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-100">
                <AlertCircle className="h-6 w-6 text-amber-600" />
              </div>
              <div className="text-left">
                <h2 className="mb-2 font-bold text-amber-800">Wichtig: Buchung bestätigen</h2>
                <p className="mb-4 text-amber-700">
                  Um Ihre Reservierung abzuschließen, besuchen Sie bitte unsere offizielle Website und bestätigen Sie Ihre Buchung:
                </p>
                <button
                  onClick={handleBookingPageClick}
                  className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-6 py-3 font-semibold text-white shadow-md transition-all hover:bg-amber-600 hover:shadow-lg"
                >
                  <ExternalLink className="h-5 w-5" />
                  park-express24.de besuchen
                </button>
                <p className="mt-3 text-sm text-amber-600">
                  Dort können Sie Ihre Buchung endgültig bestätigen und alle weiteren Details einsehen.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Info Card */}
        <Card className="mb-8 border-2 border-slate-100 text-left">
          <CardContent className="p-6">
            <h2 className="mb-4 font-bold text-slate-800">Was passiert als Nächstes?</h2>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-600">1</span>
                <span>Wir prüfen Ihre Anfrage und den gewünschten Zeitraum.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-600">2</span>
                <span>Sie erhalten eine Bestätigung mit allen Details und dem Preis.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-600">3</span>
                <span>Am Reisetag fahren Sie zu unserem Parkplatz und nutzen den Shuttle.</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Contact Options */}
        <Card className="mb-8 border-2 border-slate-100">
          <CardContent className="p-6">
            <h2 className="mb-4 font-bold text-slate-800">Fragen? Kontaktieren Sie uns:</h2>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <button
                onClick={handlePhoneClick}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-100 px-4 py-3 font-medium text-slate-700 transition-colors hover:bg-slate-200"
              >
                <Phone className="h-5 w-5" />
                {company.contact.phone}
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-100 px-4 py-3 font-medium text-green-700 transition-colors hover:bg-green-200"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </button>
              <a
                href={`mailto:${company.contact.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-100 px-4 py-3 font-medium text-blue-700 transition-colors hover:bg-blue-200"
              >
                <Mail className="h-5 w-5" />
                E-Mail
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Back to Home */}
        <Link href="/">
          <Button variant="outline" size="lg" className="gap-2">
            <Home className="h-5 w-5" />
            Zurück zur Startseite
          </Button>
        </Link>
      </div>
    </div>
  );
}
