"use client";

import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle2, Bus, ArrowRight, Clock, MapPin,
  Phone, MessageCircle, Luggage, Users, Car, Warehouse
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function ShuttleServiceContent() {
  const { locale } = useLanguage();

  const content = {
    de: {
      badge: "Shuttle-Service",
      title: "Kostenloser Transfer zum Terminal",
      description: "Unser Shuttle-Service bringt Sie in nur 5 Minuten zum Flughafen Nürnberg – und holt Sie nach der Landung wieder ab. Rund um die Uhr, kostenlos.",
      freeIncluded: "Kostenlos inklusive",
      available247: "24/7 verfügbar",
      fiveMinTerminal: "5 Min. zum Terminal",
      planTrip: "Jetzt Reise planen",
      contact: "Kontakt",
      howItWorks: "So funktioniert's",
      benefitsTitle: "Shuttle-Service Vorteile",
      faqTitle: "Häufige Fragen zum Shuttle",
      ctaTitle: "Entspannt zum Flughafen",
      ctaSubtitle: "Planen Sie Ihre Reise und genießen Sie unseren kostenlosen Shuttle-Service.",
      parkingOptions: "Unsere Parkoptionen",
      steps: [
        { step: "1", title: "Ankommen & Parken", description: "Sie fahren zu unserem Parkplatz und stellen Ihr Auto ab." },
        { step: "2", title: "Shuttle zum Terminal", description: "Unser Shuttle bringt Sie in ca. 5 Minuten direkt zum Flughafen." },
        { step: "3", title: "Gute Reise!", description: "Genießen Sie Ihre Reise – Ihr Auto ist sicher bei uns." },
        { step: "4", title: "Rückfahrt", description: "Nach der Landung rufen Sie uns an – wir holen Sie sofort ab." },
      ],
      features: [
        { icon: Clock, title: "Rund um die Uhr", description: "24/7 verfügbar – auch nachts und am Wochenende." },
        { icon: MapPin, title: "5 Minuten zum Terminal", description: "Kurze Fahrt direkt zum Flughafen Nürnberg." },
        { icon: Luggage, title: "Platz für Gepäck", description: "Genügend Platz für Ihr Reisegepäck." },
        { icon: Users, title: "Für Gruppen", description: "Auch für Familien und größere Gruppen geeignet." },
        { icon: Phone, title: "Flexible Abholung", description: "Rufen Sie an wenn Sie gelandet sind – wir kommen sofort." },
        { icon: MessageCircle, title: "WhatsApp Kontakt", description: "Erreichen Sie uns auch per WhatsApp für schnelle Kommunikation." },
      ],
      faq: [
        { q: "Wie funktioniert die Abholung nach der Landung?", a: "Ganz einfach: Sie landen, holen Ihr Gepäck und rufen uns an oder schreiben per WhatsApp. Bis Sie draußen sind, wartet unser Shuttle bereits auf Sie." },
        { q: "Was ist bei Flugverspätung?", a: "Kein Problem! Unser Shuttle fährt rund um die Uhr. Egal wann Sie landen – wir holen Sie ab." },
        { q: "Muss ich den Shuttle extra bezahlen?", a: "Nein, der Shuttle-Service ist im Parkpreis enthalten – komplett kostenlos für Sie." },
      ],
      otherOutdoor: { title: "Außenstellplatz", description: "Günstig parken ab 6,90€/Tag" },
      otherIndoor: { title: "Hallenparkplatz", description: "Überdacht ab 8,90€/Tag" },
    },
    en: {
      badge: "Shuttle Service",
      title: "Free transfer to terminal",
      description: "Our shuttle service takes you to Nuremberg Airport in just 5 minutes – and picks you up after landing. Around the clock, free.",
      freeIncluded: "Free included",
      available247: "Available 24/7",
      fiveMinTerminal: "5 min. to terminal",
      planTrip: "Plan your trip now",
      contact: "Contact",
      howItWorks: "How it works",
      benefitsTitle: "Shuttle service benefits",
      faqTitle: "Frequently asked questions about the shuttle",
      ctaTitle: "Relaxed journey to the airport",
      ctaSubtitle: "Plan your trip and enjoy our free shuttle service.",
      parkingOptions: "Our parking options",
      steps: [
        { step: "1", title: "Arrive & Park", description: "Drive to our parking lot and park your car." },
        { step: "2", title: "Shuttle to terminal", description: "Our shuttle takes you directly to the airport in about 5 minutes." },
        { step: "3", title: "Have a great trip!", description: "Enjoy your trip – your car is safe with us." },
        { step: "4", title: "Return journey", description: "After landing, call us – we'll pick you up immediately." },
      ],
      features: [
        { icon: Clock, title: "Around the clock", description: "Available 24/7 – also at night and on weekends." },
        { icon: MapPin, title: "5 minutes to terminal", description: "Short ride directly to Nuremberg Airport." },
        { icon: Luggage, title: "Room for luggage", description: "Plenty of space for your travel luggage." },
        { icon: Users, title: "For groups", description: "Also suitable for families and larger groups." },
        { icon: Phone, title: "Flexible pickup", description: "Call when you've landed – we'll come right away." },
        { icon: MessageCircle, title: "WhatsApp contact", description: "Reach us via WhatsApp for quick communication." },
      ],
      faq: [
        { q: "How does pickup after landing work?", a: "Simple: You land, get your luggage, and call us or send a WhatsApp. By the time you're outside, our shuttle is already waiting for you." },
        { q: "What about flight delays?", a: "No problem! Our shuttle runs around the clock. No matter when you land – we'll pick you up." },
        { q: "Do I have to pay extra for the shuttle?", a: "No, the shuttle service is included in the parking price – completely free for you." },
      ],
      otherOutdoor: { title: "Outdoor Parking", description: "Affordable parking from €4.50/day" },
      otherIndoor: { title: "Indoor Parking", description: "Covered from €6.50/day" },
    },
  };

  const t = content[locale];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-green-50 to-green-100/50">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-200 mb-4">
                    <Bus className="h-4 w-4 text-green-600" />
                    <span className="text-green-700 text-sm font-medium">{t.badge}</span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                    {t.title}
                  </h1>
                  <p className="text-slate-600 mb-6">{t.description}</p>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle2 className="h-5 w-5" />
                      <span className="text-sm font-medium">{t.freeIncluded}</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle2 className="h-5 w-5" />
                      <span className="text-sm font-medium">{t.available247}</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle2 className="h-5 w-5" />
                      <span className="text-sm font-medium">{t.fiveMinTerminal}</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href="/#planner">
                      <Button variant="cta" size="lg" className="w-full sm:w-auto">
                        {t.planTrip}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                    <Link href="/kontakt">
                      <Button variant="outline" size="lg" className="w-full sm:w-auto">
                        {t.contact}
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="hidden md:flex justify-center">
                  <div className="relative">
                    <div className="w-48 h-48 rounded-3xl bg-green-500 flex items-center justify-center shadow-2xl">
                      <Bus className="h-24 w-24 text-white" />
                    </div>
                    <div className="absolute -bottom-4 -right-4 bg-amber-500 text-white px-4 py-2 rounded-xl font-bold shadow-lg">
                      24/7 Service
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 text-center mb-10">
                {t.howItWorks}
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                {t.steps.map((step) => (
                  <div key={step.step} className="text-center">
                    <div className="w-12 h-12 rounded-full bg-green-500 text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                      {step.step}
                    </div>
                    <h3 className="font-semibold text-slate-800 mb-2">{step.title}</h3>
                    <p className="text-slate-500 text-sm">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 md:py-20 bg-slate-50">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 text-center mb-10">
                {t.benefitsTitle}
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {t.features.map((feature) => (
                  <Card key={feature.title} className="border-slate-100 bg-white">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                        <feature.icon className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="font-semibold text-slate-800 mb-2">{feature.title}</h3>
                      <p className="text-slate-500 text-sm">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 text-center mb-10">
                {t.faqTitle}
              </h2>
              <div className="space-y-4">
                {t.faq.map((item) => (
                  <Card key={item.q} className="border-slate-200">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-slate-800 mb-2">{item.q}</h3>
                      <p className="text-slate-600 text-sm">{item.a}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-green-600">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">{t.ctaTitle}</h2>
              <p className="text-green-100 mb-8">{t.ctaSubtitle}</p>
              <Link href="/#planner">
                <Button size="lg" className="bg-white text-green-600 hover:bg-green-50">
                  {t.planTrip}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Other Services */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-lg md:text-xl font-bold text-slate-800 text-center mb-8">
                {t.parkingOptions}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/leistungen/aussenstellplatz">
                  <Card className="border-blue-200 hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-blue-500 flex items-center justify-center flex-shrink-0">
                        <Car className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800">{t.otherOutdoor.title}</h3>
                        <p className="text-slate-500 text-sm">{t.otherOutdoor.description}</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-slate-400 ml-auto" />
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/leistungen/hallenparkplatz">
                  <Card className="border-amber-200 hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-amber-500 flex items-center justify-center flex-shrink-0">
                        <Warehouse className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800">{t.otherIndoor.title}</h3>
                        <p className="text-slate-500 text-sm">{t.otherIndoor.description}</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-slate-400 ml-auto" />
                    </CardContent>
                  </Card>
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
