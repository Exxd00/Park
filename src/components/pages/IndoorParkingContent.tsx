"use client";

import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle2, Warehouse, ArrowRight, Key, Shield, Clock,
  CloudRain, Snowflake, Camera, Car, Bus
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function IndoorParkingContent() {
  const { locale } = useLanguage();

  const content = {
    de: {
      badge: "Hallenparkplatz",
      title: "Überdacht parken am Flughafen Nürnberg",
      description: "Maximaler Schutz für Ihr Fahrzeug. In unserer überdachten Halle ist Ihr Auto vor Witterung geschützt – egal ob Sonne, Regen oder Schnee.",
      price: "Ab 8,90€/Tag",
      weatherProtection: "Wetterschutz",
      shuttle247: "24/7 Shuttle",
      planTrip: "Jetzt Reise planen",
      requestPrice: "Preis anfragen",
      benefitsTitle: "Ihre Vorteile in der Halle",
      faqTitle: "Häufige Fragen zum Hallenparkplatz",
      ctaTitle: "Premium-Schutz für Ihr Fahrzeug",
      ctaSubtitle: "Planen Sie Ihre Reise und sichern Sie sich einen Hallenplatz.",
      otherOptions: "Weitere Optionen",
      features: [
        { icon: CloudRain, title: "Wetterschutz", description: "Ihr Fahrzeug ist vor Regen, Hagel und Sonne geschützt." },
        { icon: Snowflake, title: "Kein Eiskratzen", description: "Im Winter kein Eis auf der Scheibe – direkt losfahren." },
        { icon: Camera, title: "Videoüberwachung", description: "Rund um die Uhr Kameraüberwachung für maximale Sicherheit." },
        { icon: Key, title: "Schlüssel bei Ihnen", description: "Sie parken selbst ein und behalten Ihren Schlüssel." },
        { icon: Clock, title: "24/7 Shuttle", description: "Kostenloser Transfer zum Terminal, zu jeder Zeit." },
        { icon: Shield, title: "Premium-Schutz", description: "Ideal für längere Reisen und hochwertige Fahrzeuge." },
      ],
      faq: [
        { q: "Für wen lohnt sich der Hallenparkplatz?", a: "Besonders für Langzeitparker, bei längeren Reisen oder wenn Sie ein hochwertiges Fahrzeug haben. Im Winter sparen Sie sich das Eiskratzen." },
        { q: "Wie hoch ist die Halle?", a: "Die Durchfahrtshöhe beträgt 2 Meter. Für höhere Fahrzeuge empfehlen wir den Außenstellplatz." },
        { q: "Kann ich auch spontan einen Hallenplatz bekommen?", a: "Die Hallenplätze sind begrenzt. Wir empfehlen eine frühzeitige Anfrage, besonders in der Ferienzeit." },
      ],
      otherOutdoor: { title: "Außenstellplatz", description: "Günstig parken ab 6,90€/Tag" },
      otherShuttle: { title: "Shuttle-Service", description: "24/7 kostenlos zum Terminal" },
    },
    en: {
      badge: "Indoor Parking",
      title: "Covered parking at Nuremberg Airport",
      description: "Maximum protection for your vehicle. In our covered hall, your car is protected from weather – whether sun, rain, or snow.",
      price: "From €6.50/day",
      weatherProtection: "Weather protection",
      shuttle247: "24/7 Shuttle",
      planTrip: "Plan your trip now",
      requestPrice: "Request price",
      benefitsTitle: "Your benefits in the hall",
      faqTitle: "Frequently asked questions about indoor parking",
      ctaTitle: "Premium protection for your vehicle",
      ctaSubtitle: "Plan your trip and secure an indoor spot.",
      otherOptions: "Other options",
      features: [
        { icon: CloudRain, title: "Weather protection", description: "Your vehicle is protected from rain, hail, and sun." },
        { icon: Snowflake, title: "No ice scraping", description: "No ice on windshield in winter – drive off immediately." },
        { icon: Camera, title: "Video surveillance", description: "24/7 camera surveillance for maximum security." },
        { icon: Key, title: "Key stays with you", description: "Park yourself and keep your key." },
        { icon: Clock, title: "24/7 Shuttle", description: "Free transfer to terminal, any time." },
        { icon: Shield, title: "Premium protection", description: "Ideal for longer trips and premium vehicles." },
      ],
      faq: [
        { q: "Who benefits from indoor parking?", a: "Especially long-term parkers, for longer trips, or if you have a premium vehicle. In winter, you save yourself ice scraping." },
        { q: "How high is the hall?", a: "The clearance height is 2 meters. For taller vehicles, we recommend outdoor parking." },
        { q: "Can I get an indoor spot spontaneously?", a: "Indoor spots are limited. We recommend early booking, especially during holiday season." },
      ],
      otherOutdoor: { title: "Outdoor Parking", description: "Affordable parking from €4.50/day" },
      otherShuttle: { title: "Shuttle Service", description: "24/7 free to terminal" },
    },
  };

  const t = content[locale];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-amber-50 to-amber-100/50">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-200 mb-4">
                    <Warehouse className="h-4 w-4 text-amber-600" />
                    <span className="text-amber-700 text-sm font-medium">{t.badge}</span>
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
                      <span className="text-sm font-medium">{t.weatherProtection}</span>
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
                    <div className="w-48 h-48 rounded-3xl bg-amber-500 flex items-center justify-center shadow-2xl">
                      <Warehouse className="h-24 w-24 text-white" />
                    </div>
                    <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-xl font-bold shadow-lg">
                      {locale === "de" ? "ab 8,90€/Tag" : "from €6.50/day"}
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
                {t.benefitsTitle}
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {t.features.map((feature) => (
                  <Card key={feature.title} className="border-slate-100">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4">
                        <feature.icon className="h-6 w-6 text-amber-600" />
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
        <section className="py-12 md:py-16 bg-amber-500">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">{t.ctaTitle}</h2>
              <p className="text-amber-100 mb-8">{t.ctaSubtitle}</p>
              <Link href="/#planner">
                <Button size="lg" className="bg-white text-amber-600 hover:bg-amber-50">
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
                <Link href="/leistungen/shuttle">
                  <Card className="border-green-200 hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-green-500 flex items-center justify-center flex-shrink-0">
                        <Bus className="h-7 w-7 text-white" />
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
