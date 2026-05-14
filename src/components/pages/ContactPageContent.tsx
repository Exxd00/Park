"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MessageCircle, Clock, ArrowRight, MapPin } from "lucide-react";
import { company } from "@/data/company";
import { useLanguage } from "@/lib/i18n";

export function ContactPageContent() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen pt-20">
      {/* Hero - Compact */}
      <section className="py-10 md:py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-3 md:mb-4">
              {t.contact.pageTitle}
            </h1>
            <p className="text-slate-500 text-sm sm:text-base">
              {t.contact.pageSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact - Mobile Optimized */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto">
            {/* Primary Actions - Side by Side */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <a href={company.contact.phoneLink}>
                <Button variant="outline" className="w-full h-auto py-4 flex-col gap-2 border-2 border-slate-200 hover:border-amber-400 hover:bg-amber-50">
                  <Phone className="h-5 w-5 text-slate-600" />
                  <span className="text-xs sm:text-sm font-medium text-slate-800">{t.contact.call}</span>
                </Button>
              </a>
              <a href={company.contact.whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button className="w-full h-auto py-4 flex-col gap-2 bg-green-500 hover:bg-green-600 text-white">
                  <MessageCircle className="h-5 w-5" />
                  <span className="text-xs sm:text-sm font-medium">{t.contact.whatsapp}</span>
                </Button>
              </a>
            </div>

            {/* Contact Details - Compact Cards */}
            <div className="space-y-3">
              {/* Phone */}
              <Card className="border border-slate-100 shadow-sm">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-slate-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-slate-500 mb-0.5">{t.contact.phone}</p>
                    <a href={company.contact.phoneLink} className="text-sm sm:text-base font-semibold text-slate-800 hover:text-amber-600">
                      {company.contact.phone}
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="border border-slate-100 shadow-sm">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-slate-500 mb-0.5">{t.contact.email}</p>
                    <a href={`mailto:${company.contact.email}`} className="text-sm sm:text-base font-semibold text-slate-800 hover:text-amber-600 truncate block">
                      {company.contact.email}
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Hours */}
              <Card className="border border-slate-100 shadow-sm">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-amber-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-slate-500 mb-0.5">{t.contact.availability}</p>
                    <p className="text-sm font-medium text-slate-800">
                      {t.contact.shuttleAvailability}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Location */}
              <Card className="border border-slate-100 shadow-sm">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-slate-500 mb-0.5">{t.contact.location}</p>
                    <p className="text-sm font-medium text-slate-800">
                      {t.contact.locationValue}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Compact */}
      <section className="py-10 md:py-16 bg-slate-800">
        <div className="container px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3">
              {t.contact.ctaTitle}
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              {t.contact.ctaSubtitle}
            </p>
            <Link href="/#planner">
              <Button variant="cta" size="default" className="px-6">
                {t.contact.ctaButton}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
