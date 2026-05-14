"use client";

import Link from "next/link";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { company } from "@/data/company";
import { confirmAndTrackCall, confirmAndTrackWhatsApp, trackCtaClick } from "@/lib/tracking";

export function FloatingButtons() {
  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    confirmAndTrackWhatsApp(
      company.contact.phone,
      'Hallo! Ich interessiere mich für Parkplätze.',
      'floating_buttons'
    );
  };

  const handlePhoneClick = (e: React.MouseEvent) => {
    e.preventDefault();
    confirmAndTrackCall(company.contact.phone, 'floating_buttons');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 no-print">
      {/* WhatsApp */}
      <button
        onClick={handleWhatsAppClick}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl"
        aria-label="WhatsApp kontaktieren"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Phone */}
      <button
        onClick={handlePhoneClick}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-800 text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl"
        aria-label="Anrufen"
      >
        <Phone className="h-6 w-6" />
      </button>

      {/* Booking - visible on mobile */}
      <Link
        href="/buchen"
        onClick={() => trackCtaClick("floating_booking", "floating_buttons")}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl md:hidden"
        aria-label="Parkplatz buchen"
      >
        <Calendar className="h-6 w-6" />
      </Link>
    </div>
  );
}
