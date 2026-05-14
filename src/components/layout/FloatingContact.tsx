"use client";

import { useState, useEffect } from "react";
import { Phone, MessageCircle, X, Plane } from "lucide-react";
import { company } from "@/data/company";
import { confirmAndTrackWhatsApp, confirmAndTrackCall } from "@/lib/tracking";

export function FloatingContact() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToPlanner = () => {
    document.getElementById("planner")?.scrollIntoView({ behavior: "smooth" });
    setIsExpanded(false);
  };

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    confirmAndTrackWhatsApp(
      company.contact.phone,
      'Hallo! Ich interessiere mich für Parkplätze am Flughafen Nürnberg.',
      'floating_button'
    );
    setIsExpanded(false);
  };

  const handlePhoneClick = (e: React.MouseEvent) => {
    e.preventDefault();
    confirmAndTrackCall(company.contact.phone, 'floating_button');
    setIsExpanded(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {isExpanded && (
        <>
          {/* Reise planen */}
          <button
            onClick={scrollToPlanner}
            className="flex items-center gap-3 px-4 py-3 bg-amber-500 text-white rounded-full shadow-lg hover:bg-amber-600 transition-all animate-fade-in-up"
          >
            <Plane className="h-5 w-5" />
            <span className="text-sm font-medium">Reise planen</span>
          </button>

          {/* WhatsApp */}
          <button
            onClick={handleWhatsAppClick}
            className="flex items-center gap-3 px-4 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all animate-fade-in-up animation-delay-50"
          >
            <MessageCircle className="h-5 w-5 text-green-500" />
            <span className="text-sm font-medium text-slate-700">WhatsApp</span>
          </button>

          {/* Anrufen */}
          <button
            onClick={handlePhoneClick}
            className="flex items-center gap-3 px-4 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all animate-fade-in-up animation-delay-100"
          >
            <Phone className="h-5 w-5 text-slate-600" />
            <span className="text-sm font-medium text-slate-700">Anrufen</span>
          </button>
        </>
      )}

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all ${
          isExpanded
            ? "bg-slate-800 hover:bg-slate-700"
            : "bg-amber-500 hover:bg-amber-600"
        }`}
        aria-label={isExpanded ? "Kontaktoptionen schließen" : "Kontaktoptionen öffnen"}
      >
        {isExpanded ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <Plane className="h-6 w-6 text-white" />
        )}
      </button>

      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.2s ease-out forwards;
        }
        .animation-delay-50 { animation-delay: 0.05s; }
        .animation-delay-100 { animation-delay: 0.1s; }
      `}</style>
    </div>
  );
}
