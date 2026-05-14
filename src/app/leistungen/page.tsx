"use client";

import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Car, Warehouse, Bus, ArrowRight, Key, Shield, Clock, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const colorClasses = {
  blue: {
    bg: "bg-blue-500",
    bgLight: "bg-blue-50",
    border: "border-blue-200",
    text: "text-blue-600",
    hover: "hover:border-blue-400",
  },
  amber: {
    bg: "bg-amber-500",
    bgLight: "bg-amber-50",
    border: "border-amber-200",
    text: "text-amber-600",
    hover: "hover:border-amber-400",
  },
  green: {
    bg: "bg-green-500",
    bgLight: "bg-green-50",
    border: "border-green-200",
    text: "text-green-600",
    hover: "hover:border-green-400",
  },
};

export default function LeistungenPage() {
  const { t } = useLanguage();

  const services = [
    {
      id: "aussenstellplatz",
      icon: Car,
      title: t.services.outdoor.title,
      shortTitle: t.services.outdoor.shortTitle,
      price: t.services.outdoor.price,
      description: t.services.outdoor.description,
      longDescription: t.services.outdoor.longDescription,
      features: t.services.outdoor.features,
      color: "blue",
      href: "/leistungen/aussenstellplatz",
    },
    {
      id: "hallenparkplatz",
      icon: Warehouse,
      title: t.services.indoor.title,
      shortTitle: t.services.indoor.shortTitle,
      price: t.services.indoor.price,
      description: t.services.indoor.description,
      longDescription: t.services.indoor.longDescription,
      features: t.services.indoor.features,
      color: "amber",
      href: "/leistungen/hallenparkplatz",
    },
    {
      id: "shuttle",
      icon: Bus,
      title: t.services.shuttle.title,
      shortTitle: t.services.shuttle.shortTitle,
      price: t.services.shuttle.price,
      description: t.services.shuttle.description,
      longDescription: t.services.shuttle.longDescription,
      features: t.services.shuttle.features,
      color: "green",
      href: "/leistungen/shuttle",
    },
  ];

  const scrollToService = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero with Service Icons */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              {/* Title */}
              <div className="text-center mb-10 md:mb-12">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                  {t.services.pageTitle}
                </h1>
                <p className="text-slate-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                  {t.services.pageSubtitle}
                </p>
              </div>

              {/* Clickable Service Icons */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-8">
                {services.map((service) => {
                  const colors = colorClasses[service.color as keyof typeof colorClasses];
                  return (
                    <button
                      key={service.id}
                      onClick={() => scrollToService(service.id)}
                      className={`group relative p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border-2 ${colors.border} ${colors.bgLight} ${colors.hover} transition-all hover:shadow-lg text-center`}
                    >
                      <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl ${colors.bg} mb-3 sm:mb-4 transition-transform group-hover:scale-110`}>
                        <service.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
                      </div>
                      <h3 className="font-bold text-slate-800 text-sm sm:text-base md:text-lg mb-1">
                        <span className="hidden sm:inline">{service.title}</span>
                        <span className="sm:hidden">{service.shortTitle}</span>
                      </h3>
                      <p className={`text-xs sm:text-sm font-semibold ${colors.text}`}>
                        {service.price}
                      </p>
                      {/* Scroll indicator */}
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight className="h-4 w-4 text-slate-400 rotate-90" />
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Key USP */}
              <div className="flex justify-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200">
                  <Key className="h-4 w-4 text-green-600" />
                  <span className="text-green-700 text-sm font-medium">{t.services.keyUsp}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
              {services.map((service) => {
                const colors = colorClasses[service.color as keyof typeof colorClasses];
                return (
                  <div
                    key={service.id}
                    id={service.id}
                    className="scroll-mt-24"
                  >
                    <Card className={`border-2 ${colors.border} overflow-hidden hover:shadow-xl transition-shadow`}>
                      <CardContent className="p-0">
                        <div className="grid md:grid-cols-5">
                          {/* Icon Side */}
                          <div className={`${colors.bg} p-6 md:p-8 flex flex-col items-center justify-center md:col-span-2`}>
                            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/20 mb-4">
                              <service.icon className="h-8 w-8 md:h-10 md:w-10 text-white" />
                            </div>
                            <h2 className="text-xl md:text-2xl font-bold text-white text-center mb-2">{service.title}</h2>
                            <p className="text-white/80 text-lg md:text-xl font-semibold">{service.price}</p>
                          </div>

                          {/* Content Side */}
                          <div className="md:col-span-3 p-6 md:p-8">
                            <p className="text-slate-600 mb-6 text-sm md:text-base">{service.longDescription}</p>
                            <ul className="space-y-3 mb-6">
                              {service.features.map((feature: string) => (
                                <li key={feature} className="flex items-center gap-3 text-slate-600 text-sm md:text-base">
                                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                            <Link href={service.href}>
                              <Button variant="outline" className={`${colors.text} border-current hover:bg-current hover:text-white`}>
                                {t.common.learnMore}
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-12 md:py-16 bg-slate-800">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
                <div>
                  <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl bg-amber-500/20 mb-3">
                    <MapPin className="h-5 w-5 md:h-6 md:w-6 text-amber-400" />
                  </div>
                  <p className="text-white font-bold text-lg md:text-xl">{t.services.trustStats.atNue}</p>
                  <p className="text-slate-400 text-xs md:text-sm">{t.services.trustStats.atNueDesc}</p>
                </div>
                <div>
                  <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl bg-amber-500/20 mb-3">
                    <Clock className="h-5 w-5 md:h-6 md:w-6 text-amber-400" />
                  </div>
                  <p className="text-white font-bold text-lg md:text-xl">{t.services.trustStats.fiveMin}</p>
                  <p className="text-slate-400 text-xs md:text-sm">{t.services.trustStats.fiveMinDesc}</p>
                </div>
                <div>
                  <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl bg-amber-500/20 mb-3">
                    <Shield className="h-5 w-5 md:h-6 md:w-6 text-amber-400" />
                  </div>
                  <p className="text-white font-bold text-lg md:text-xl">{t.services.trustStats.guarded}</p>
                  <p className="text-slate-400 text-xs md:text-sm">{t.services.trustStats.guardedDesc}</p>
                </div>
                <div>
                  <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl bg-green-500/20 mb-3">
                    <Key className="h-5 w-5 md:h-6 md:w-6 text-green-400" />
                  </div>
                  <p className="text-white font-bold text-lg md:text-xl">{t.services.trustStats.yourKey}</p>
                  <p className="text-slate-400 text-xs md:text-sm">{t.services.trustStats.yourKeyDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-800 mb-4">
                {t.services.ctaTitle}
              </h2>
              <p className="text-slate-500 mb-8 text-sm md:text-base">
                {t.services.ctaSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/#planner">
                  <Button variant="cta" size="lg" className="w-full sm:w-auto">
                    {t.services.ctaPrimary}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/kontakt">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    {t.services.ctaSecondary}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
