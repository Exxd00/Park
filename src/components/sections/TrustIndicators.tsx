"use client";
import { Star, Users, Clock, Award, Quote, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/lib/i18n";

const testimonials = [
  {
    textDe: "Endlich ein Parkplatz wo ich meinen Schlüssel behalten kann. Genau so sollte es sein.",
    textEn: "Finally a parking spot where I can keep my key. That's how it should be.",
    author: "Thomas K.",
    location: "Nürnberg",
  },
  {
    textDe: "Auto abgestellt, Shuttle kam sofort. In 5 Minuten war ich am Terminal. Top!",
    textEn: "Parked the car, shuttle came immediately. At the terminal in 5 minutes. Excellent!",
    author: "Familie M.",
    location: "Erlangen",
  },
  {
    textDe: "Um 4:30 Uhr am Parkplatz und der Shuttle war sofort da. Sehr empfehlenswert!",
    textEn: "At the parking lot at 4:30 AM and the shuttle was there immediately. Highly recommended!",
    author: "Sandra W.",
    location: "Fürth",
  },
];

export function TrustIndicators() {
  const { t, locale } = useLanguage();

  const stats = [
    {
      icon: Users,
      value: "2000+",
      label: t.trust.customers,
    },
    {
      icon: Clock,
      value: "24/7",
      label: t.trust.shuttle,
    },
    {
      icon: Star,
      value: "4.8",
      label: t.trust.rating,
    },
    {
      icon: Award,
      value: "5 Min",
      label: t.trust.terminal,
    },
  ];

  return (
    <section className="py-10 sm:py-14 md:py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          {/* Stats - Compact 4-col grid */}
          <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-8 mb-8 sm:mb-12 md:mb-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-amber-500/10 mb-2 sm:mb-3 md:mb-4">
                  <stat.icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-amber-400" />
                </div>
                <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-0.5">{stat.value}</div>
                <div className="text-[10px] sm:text-xs md:text-sm text-slate-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Testimonials Header */}
          <div className="text-center mb-4 sm:mb-6 md:mb-10">
            <p className="text-amber-400 font-medium text-xs sm:text-sm mb-1 sm:mb-2">{t.trust.badge}</p>
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white">
              {t.trust.title}
            </h3>
          </div>

          {/* Testimonials - Horizontal Scroll on Mobile */}
          <div className="flex gap-3 sm:gap-4 md:gap-6 overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:overflow-visible sm:grid sm:grid-cols-3 snap-x snap-mandatory sm:snap-none">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-[260px] sm:w-auto bg-slate-800/50 border-slate-700 snap-start"
              >
                <CardContent className="p-4 sm:p-5 md:p-6">
                  <Quote className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-amber-500/30 mb-2 sm:mb-3 md:mb-4" />
                  <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-4 md:mb-6 line-clamp-3 sm:line-clamp-none">
                    "{locale === "de" ? testimonial.textDe : testimonial.textEn}"
                  </p>
                  <div className="flex items-center gap-2">
                    <div>
                      <p className="text-white font-medium text-xs sm:text-sm">{testimonial.author}</p>
                      <div className="flex items-center gap-1 text-slate-500 text-[10px] sm:text-xs">
                        <MapPin className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                        <span>{testimonial.location}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust Badge */}
          <div className="mt-6 sm:mt-8 md:mt-12 text-center">
            <p className="text-slate-500 text-[10px] sm:text-xs md:text-sm">
              {t.trust.footer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
