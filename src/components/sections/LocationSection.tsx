"use client";

import { useState } from "react";
import {
  MapPin,
  Navigation,
  Phone,
  Clock,
  Shield,
  Car,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { company } from "@/data/company";
import { trackAndOpenMaps, confirmAndTrackCall } from "@/lib/tracking";

const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/7Fk5v1UjivmKejJw5";

// Features shown on the map section
const locationFeatures = [
  { icon: Navigation, label: "2 km zum Terminal", color: "text-amber-500" },
  { icon: Clock, label: "24/7 Shuttle", color: "text-emerald-500" },
  { icon: Shield, label: "Videoüberwacht", color: "text-blue-500" },
  { icon: Car, label: "Schlüssel behalten", color: "text-purple-500" },
];

interface LocationSectionProps {
  variant?: "full" | "compact" | "hero";
  showCTA?: boolean;
}

export function LocationSection({ variant = "full", showCTA = true }: LocationSectionProps) {
  const [isMapHovered, setIsMapHovered] = useState(false);

  const handleOpenMaps = () => {
    trackAndOpenMaps(GOOGLE_MAPS_URL, "location_section");
  };

  const handleCall = (e: React.MouseEvent) => {
    e.preventDefault();
    confirmAndTrackCall(company.contact.phone, "location_section");
  };

  // Compact variant for footer or sidebar
  if (variant === "compact") {
    return (
      <button
        onClick={handleOpenMaps}
        className="group flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-all w-full text-left"
      >
        <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center flex-shrink-0">
          <MapPin className="w-5 h-5 text-amber-400" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-white truncate">Standort anzeigen</p>
          <p className="text-xs text-slate-400">Google Maps öffnen</p>
        </div>
        <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-colors" />
      </button>
    );
  }

  // Hero variant for homepage
  if (variant === "hero") {
    return (
      <section className="py-12 md:py-20 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
        <div className="container px-4">
          {/* Mobile: Stack layout */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">

            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-4">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-medium text-amber-400">Direkt am Flughafen</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Nur 5 Minuten zum Terminal
              </h2>

              <p className="text-slate-400 text-base sm:text-lg mb-6 max-w-md mx-auto lg:mx-0">
                Unser Parkplatz liegt nur 2 km vom Flughafen Nürnberg entfernt. Der kostenlose Shuttle bringt Sie direkt zum Terminal.
              </p>

              {/* Features Grid - Mobile optimized */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {locationFeatures.map((feature) => (
                  <div
                    key={feature.label}
                    className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10"
                  >
                    <feature.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${feature.color} flex-shrink-0`} />
                    <span className="text-xs sm:text-sm text-slate-300 truncate">{feature.label}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons - Stack on mobile */}
              {showCTA && (
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleOpenMaps}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold transition-all shadow-lg shadow-amber-500/25"
                  >
                    <Navigation className="w-5 h-5" />
                    Route planen
                  </button>
                  <button
                    onClick={handleCall}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition-all border border-white/20"
                  >
                    <Phone className="w-5 h-5" />
                    Anrufen
                  </button>
                </div>
              )}
            </div>

            {/* Interactive Map Card */}
            <div className="flex-1 lg:max-w-md">
              <button
                onClick={handleOpenMaps}
                onMouseEnter={() => setIsMapHovered(true)}
                onMouseLeave={() => setIsMapHovered(false)}
                className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer shadow-2xl"
              >
                {/* Map Background - Stylized */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800">
                  {/* Grid Pattern */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                      `,
                      backgroundSize: '20px 20px'
                    }}
                  />

                  {/* Roads */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
                    {/* Main highway */}
                    <path
                      d="M0 150 Q100 150 200 120 T400 100"
                      stroke="rgba(255,255,255,0.15)"
                      strokeWidth="8"
                      fill="none"
                    />
                    <path
                      d="M0 180 Q150 180 250 200 T400 220"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="4"
                      fill="none"
                    />
                    {/* Airport runway */}
                    <rect x="280" y="40" width="100" height="20" rx="2" fill="rgba(255,255,255,0.1)" />
                    <rect x="300" y="70" width="80" height="15" rx="2" fill="rgba(255,255,255,0.08)" />
                  </svg>

                  {/* Airport Icon */}
                  <div className="absolute top-6 right-6 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-500/20 border border-blue-500/30">
                    <span className="text-lg">✈️</span>
                    <span className="text-xs font-bold text-blue-400">NUE</span>
                  </div>
                </div>

                {/* Location Pin - Animated */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
                  <div className={`transition-transform duration-300 ${isMapHovered ? 'scale-110 -translate-y-1' : ''}`}>
                    {/* Pin Shadow */}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-2 bg-black/30 rounded-full blur-sm" />

                    {/* Pin */}
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-amber-500 shadow-lg shadow-amber-500/50 flex items-center justify-center">
                        <Car className="w-6 h-6 text-white" />
                      </div>
                      {/* Pin Tail */}
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[10px] border-l-transparent border-r-transparent border-t-amber-500" />
                    </div>

                    {/* Pulse Ring */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-2 border-amber-400/50 animate-ping" />
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-amber-500/10 transition-opacity duration-300 ${isMapHovered ? 'opacity-100' : 'opacity-0'}`} />

                {/* Open Maps Button */}
                <div className={`absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/95 text-slate-900 font-semibold transition-all ${isMapHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-80'}`}>
                  <ExternalLink className="w-4 h-4" />
                  In Google Maps öffnen
                </div>

                {/* Address Label */}
                <div className="absolute top-4 left-4 px-3 py-2 rounded-lg bg-white/90 backdrop-blur-sm shadow-lg">
                  <p className="text-xs font-medium text-slate-600">Standort</p>
                  <p className="text-sm font-bold text-slate-900">Flughafen Nürnberg</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Full variant (default) - for contact page
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100 text-amber-700 mb-4">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">Standort</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-3">
              So finden Sie uns
            </h2>
            <p className="text-slate-500 max-w-md mx-auto">
              Nur 2 km vom Flughafen Nürnberg entfernt. Einfache Anfahrt und kostenloser Shuttle.
            </p>
          </div>

          {/* Map Card */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 mb-6">
            <button
              onClick={handleOpenMaps}
              onMouseEnter={() => setIsMapHovered(true)}
              onMouseLeave={() => setIsMapHovered(false)}
              className="relative w-full aspect-video cursor-pointer group"
            >
              {/* Map Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200">
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: '30px 30px'
                  }}
                />

                {/* Roads */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 450">
                  <path d="M0 200 Q200 180 400 220 T800 180" stroke="rgba(0,0,0,0.1)" strokeWidth="12" fill="none"/>
                  <path d="M0 280 Q300 300 500 260 T800 300" stroke="rgba(0,0,0,0.08)" strokeWidth="8" fill="none"/>
                  <path d="M400 0 Q420 150 380 300 T420 450" stroke="rgba(0,0,0,0.08)" strokeWidth="6" fill="none"/>
                </svg>

                {/* Airport */}
                <div className="absolute top-8 right-8 flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-100 border border-blue-200">
                  <span className="text-xl">✈️</span>
                  <span className="text-sm font-bold text-blue-700">Flughafen NUE</span>
                </div>
              </div>

              {/* Pin */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
                <div className={`transition-transform duration-300 ${isMapHovered ? 'scale-110 -translate-y-2' : ''}`}>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-3 bg-black/20 rounded-full blur-md" />
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-amber-500 shadow-xl shadow-amber-500/40 flex items-center justify-center">
                      <Car className="w-7 h-7 text-white" />
                    </div>
                    <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[12px] border-l-transparent border-r-transparent border-t-amber-500" />
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border-2 border-amber-400/40 animate-ping" />
                </div>
              </div>

              {/* Hover Overlay */}
              <div className={`absolute inset-0 bg-amber-500/5 transition-opacity ${isMapHovered ? 'opacity-100' : 'opacity-0'}`} />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white via-white/95 to-transparent">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-slate-800">ParkExpress24</p>
                    <p className="text-sm text-slate-500">Flughafen Nürnberg</p>
                  </div>
                  <div className={`flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 text-white font-semibold transition-transform ${isMapHovered ? 'scale-105' : ''}`}>
                    <Navigation className="w-4 h-4" />
                    Route planen
                  </div>
                </div>
              </div>
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {locationFeatures.map((feature) => (
              <div
                key={feature.label}
                className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100"
              >
                <div className={`w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center`}>
                  <feature.icon className={`w-5 h-5 ${feature.color}`} />
                </div>
                <span className="text-sm font-medium text-slate-700">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
