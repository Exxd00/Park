"use client";

import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle2, Car, ArrowRight, Key, Clock,
  Sun, Fence, Camera, Euro, Warehouse
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function OutdoorParkingContent() {
  const { locale } = useLanguage();

  const content = {
    de: {
      badge: "Außenstellplatz",
      title: "Günstig parken am Flughafen Nürnberg",
      description: "Unser Außenstellplatz bietet Ihnen die wirtschaftlichste Parkmöglichkeit direkt am Flughafen. Sicher, beleuchtet und mit kostenlosem Shuttle zum Terminal.",
      price: "Ab 6,90€/Tag",
      keyWithYou: "Schlüssel bei Ihnen",
      shuttle247: "24/7 Shuttle",
      planTrip: "Jetzt Reise planen",
      requestPrice: "Preis anfragen",
      whatToExpect: "Was Sie erwarten können",
      faqTitle: "Häufige Fragen zum Außenstellplatz",
      ctaTitle: "Bereit für entspanntes Parken?",
      ctaSubtitle: "Planen Sie Ihre Reise und fragen Sie Ihren Außenstellplatz an.",
      otherOptions: "Weitere Optionen",
      features: [
        { icon: Fence, title: "Eingezäuntes Gelände", description: "Komplett umzäuntes Areal für maximale Sicherheit Ihres Fahrzeugs." },
        { icon: Camera, title: "Videoüberwachung", description: "24/7 Kameraüberwachung für Ihre Sicherheit." },
        { icon: Sun, title: "Tag & Nacht beleuchtet", description: "Vollständige Beleuchtung auch in der Nacht." },
        { icon: Key, title: "Schlüssel bei Ihnen", description: "Sie parken selbst ein und behalten Ihren Schlüssel." },
        { icon: Clock, title: "24/7 Shuttle", description: "Kostenloser Transfer zum Terminal, rund um die Uhr." },
        { icon: Euro, title: "Bestes Preis-Leistungs-Verhältnis", description: "Günstige Preise ohne versteckte Kosten." },
      ],
      faq: [
        { q: "Ist mein Auto draußen sicher?", a: "Ja. Das Gelände ist komplett eingezäunt, videoüberwacht und die ganze Nacht beleuchtet. Außerdem: Sie behalten Ihren Schlüssel – niemand kann Ihr Auto öffnen oder bewegen." },
        { q: "Was ist bei schlechtem Wetter?", a: "Ihr Auto steht unter freiem Himmel. Für vollständigen Wetterschutz empfehlen wir unseren Hallenparkplatz. Aber: Nach der Reise steht Ihr Auto genau so da, wie Sie es abgestellt haben." },
        { q: "Wie groß darf mein Fahrzeug sein?", a: "PKW aller Größen sind willkommen. Für Fahrzeuge über 2 Meter Höhe (Transporter, Wohnmobile) kontaktieren Sie uns bitte vorher." },
      ],
      otherIndoor: { title: "Hallenparkplatz", description: "Überdacht & geschützt ab 8,90€/Tag" },
      otherShuttle: { title: "Shuttle-Service", description: "24/7 kostenlos zum Terminal" },
    },
    en: {
      badge: "Outdoor Parking",
      title: "Affordable parking at Nuremberg Airport",
      description: "Our outdoor parking offers you the most economical parking option right at the airport. Secure, illuminated, and with free shuttle to the terminal.",
      price: "From €4.50/day",
      keyWithYou: "Key stays with you",
      shuttle247: "24/7 Shuttle",
      planTrip: "Plan your trip now",
      requestPrice: "Request price",
      whatToExpect: "What to expect",
      faqTitle: "Frequently asked questions about outdoor parking",
      ctaTitle: "Ready for relaxed parking?",
      ctaSubtitle: "Plan your trip and request your outdoor parking spot.",
      otherOptions: "Other options",
      features: [
        { icon: Fence, title: "Fenced premises", description: "Completely fenced area for maximum vehicle security." },
        { icon: Camera, title: "Video surveillance", description: "24/7 camera surveillance for your safety." },
        { icon: Sun, title: "Illuminated day & night", description: "Full lighting even at night." },
        { icon: Key, title: "Key stays with you", description: "Park yourself and keep your key." },
        { icon: Clock, title: "24/7 Shuttle", description: "Free transfer to terminal, around the clock." },
        { icon: Euro, title: "Best value for money", description: "Affordable prices with no hidden costs." },
      ],
      faq: [
        { q: "Is my car safe outside?", a: "Yes. The premises are completely fenced, video-monitored, and illuminated all night. Plus: You keep your key – nobody can open or move your car." },
        { q: "What about bad weather?", a: "Your car stands in the open air. For complete weather protection, we recommend our indoor parking. But: After your trip, your car will be exactly where you left it." },
        { q: "How big can my vehicle be?", a: "Cars of all sizes are welcome. For vehicles over 2 meters high (vans, motorhomes), please contact us beforehand." },
      ],
      otherIndoor: { title: "Indoor Parking", description: "Covered & protected from €6.50/day" },
      otherShuttle: { title: "Shuttle Service", description: "24/7 free to terminal" },
    },
  };

  const t = content[locale];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-blue-50 to-blue-100/50">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-200 mb-4">
                    <Car className="h-4 w-4 text-blue-600" />
                    <span className="text-blue-700 text-sm font-medium">{t.badge}</span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                    {t.title}
                  </h1>
                  <p className="text-slate-600 mb-6">{t.description}</p>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle2 className="h-5 w-5" />
                      <span className="text-sm font-medium">{t.price}</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle2 className="h-5 w-5" />
                      <span className="text-sm font-medium">{t.keyWithYou}</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle2 className="h-5 w-5" />
                      <span className="text-sm font-medium">{t.shuttle247}</span>
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
                        {t.requestPrice}
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="hidden md:flex justify-center">
                  <div className="relative">
                    <div className="w-48 h-48 rounded-3xl bg-blue-500 flex items-center justify-center shadow-2xl">
                      <Car className="h-24 w-24 text-white" />
                    </div>
                    <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-xl font-bold shadow-lg">
                      {locale === "de" ? "ab 6,90€/Tag" : "from €4.50/day"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 text-center mb-10">
                {t.whatToExpect}
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {t.features.map((feature) => (
                  <Card key={feature.title} className="border-slate-100">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                        <feature.icon className="h-6 w-6 text-blue-600" />
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
        <section className="py-12 md:py-20 bg-slate-50">
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
        <section className="py-12 md:py-16 bg-blue-600">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">{t.ctaTitle}</h2>
              <p className="text-blue-100 mb-8">{t.ctaSubtitle}</p>
              <Link href="/#planner">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
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
                {t.otherOptions}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
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
                <Link href="/leistungen/shuttle">
                  <Card className="border-green-200 hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-green-500 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800">{t.otherShuttle.title}</h3>
                        <p className="text-slate-500 text-sm">{t.otherShuttle.description}</p>
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
