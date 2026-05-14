"use client";

import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Phone, MessageCircle } from "lucide-react";
import { company } from "@/data/company";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function FAQPageContent() {
  const { t } = useLanguage();

  const faqCategories = [
    {
      title: t.faqPage.categories.beforeTrip,
      questions: [
        { q: t.faqPage.questions.howToReserve.q, a: t.faqPage.questions.howToReserve.a },
        { q: t.faqPage.questions.payInAdvance.q, a: t.faqPage.questions.payInAdvance.a },
        { q: t.faqPage.questions.changeReservation.q, a: t.faqPage.questions.changeReservation.a },
        { q: t.faqPage.questions.whenToArrive.q, a: t.faqPage.questions.whenToArrive.a },
      ],
    },
    {
      title: t.faqPage.categories.travelDay,
      questions: [
        { q: t.faqPage.questions.findParking.q, a: t.faqPage.questions.findParking.a },
        { q: t.faqPage.questions.arriveLate.q, a: t.faqPage.questions.arriveLate.a },
        { q: t.faqPage.questions.shuttleFrequency.q, a: t.faqPage.questions.shuttleFrequency.a },
        { q: t.faqPage.questions.luggageSpace.q, a: t.faqPage.questions.luggageSpace.a },
      ],
    },
    {
      title: t.faqPage.categories.duringTrip,
      questions: [
        { q: t.faqPage.questions.carSafe.q, a: t.faqPage.questions.carSafe.a },
        { q: t.faqPage.questions.flightDelay.q, a: t.faqPage.questions.flightDelay.a },
        { q: t.faqPage.questions.returnChange.q, a: t.faqPage.questions.returnChange.a },
      ],
    },
    {
      title: t.faqPage.categories.afterReturn,
      questions: [
        { q: t.faqPage.questions.howPickup.q, a: t.faqPage.questions.howPickup.a },
        { q: t.faqPage.questions.returnDuration.q, a: t.faqPage.questions.returnDuration.a },
        { q: t.faqPage.questions.howToPay.q, a: t.faqPage.questions.howToPay.a },
      ],
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                {t.faqPage.title}
              </h1>
              <p className="text-lg text-slate-500">
                {t.faqPage.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              {faqCategories.map((category, categoryIndex) => (
                <div key={category.title} className={categoryIndex > 0 ? "mt-16" : ""}>
                  <h2 className="text-xl font-bold text-slate-800 mb-6">{category.title}</h2>
                  <div className="space-y-4">
                    {category.questions.map((faq, index) => (
                      <Card key={index} className="border border-slate-100">
                        <CardContent className="p-6">
                          <div className="flex gap-4">
                            <ChevronRight className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                            <div>
                              <h3 className="font-semibold text-slate-800 mb-2">{faq.q}</h3>
                              <p className="text-slate-500 text-sm">{faq.a}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="container px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">
                {t.faqPage.moreQuestions}
              </h2>
              <p className="text-slate-500 mb-8">
                {t.faqPage.helpText}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href={company.contact.phoneLink}>
                  <Button variant="outline" size="lg">
                    <Phone className="mr-2 h-5 w-5" />
                    {t.contact.call}
                  </Button>
                </a>
                <a href={company.contact.whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="whatsapp" size="lg">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    {t.contact.whatsapp}
                  </Button>
                </a>
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
