"use client";

import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import { company } from "@/data/company";
import { confirmAndTrackCall, confirmAndTrackWhatsApp } from "@/lib/tracking";

export function ContactCTA() {
  const handlePhoneClick = (e: React.MouseEvent) => {
    e.preventDefault();
    confirmAndTrackCall(company.contact.phone, 'contact_cta');
  };

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    confirmAndTrackWhatsApp(
      company.contact.phone,
      'Hallo! Ich habe eine Frage zu Ihren Parkplätzen.',
      'contact_cta'
    );
  };

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
            Fragen? Wir helfen gerne.
          </h2>
          <p className="text-slate-500 text-lg mb-10">
            Kontaktieren Sie uns – wir antworten schnell und unkompliziert.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button
              onClick={handlePhoneClick}
              className="inline-flex items-center gap-3 px-6 py-4 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors w-full sm:w-auto justify-center"
            >
              <Phone className="h-5 w-5 text-slate-600" />
              <span className="font-medium text-slate-700">{company.contact.phone}</span>
            </button>

            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-3 px-6 py-4 bg-green-50 hover:bg-green-100 rounded-xl transition-colors w-full sm:w-auto justify-center"
            >
              <MessageCircle className="h-5 w-5 text-green-600" />
              <span className="font-medium text-green-700">WhatsApp</span>
            </button>
          </div>

          <p className="text-slate-400 text-sm">
            Oder schreiben Sie uns: {" "}
            <a href={`mailto:${company.contact.email}`} className="text-amber-600 hover:underline">
              {company.contact.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
