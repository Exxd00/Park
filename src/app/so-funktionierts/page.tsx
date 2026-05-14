import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CalendarCheck,
  Car,
  Bus,
  Plane,
  ArrowRight,
  CheckCircle2,
  Phone
} from "lucide-react";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "So funktioniert's | ParkExpress24",
  description: "Erfahren Sie, wie einfach das Parken am Flughafen Nürnberg mit ParkExpress24 funktioniert. Von der Reservierung bis zur Rückkehr.",
};

const steps = [
  {
    number: "01",
    icon: CalendarCheck,
    title: "Planen & Reservieren",
    description: "Nutzen Sie unseren Reiseplaner, um zu sehen, wann Sie losfahren müssen. Dann reservieren Sie Ihren Stellplatz – einfach per Telefon oder WhatsApp.",
    details: [
      "Keine komplizierte Online-Buchung nötig",
      "Persönliche Bestätigung per Telefon",
      "Flexible Änderungen möglich",
    ],
  },
  {
    number: "02",
    icon: Car,
    title: "Ankommen & Parken",
    description: "Fahren Sie zu unserem Parkplatz. Unser Team erwartet Sie und weist Ihnen einen Stellplatz zu.",
    details: [
      "Genaue Anfahrtsbeschreibung bei Reservierung",
      "Freundliche Einweisung vor Ort",
      "Außenstellplatz oder Hallenparkplatz",
    ],
  },
  {
    number: "03",
    icon: Bus,
    title: "Shuttle zum Terminal",
    description: "Unser Shuttle bringt Sie in nur ca. 5 Minuten direkt zum Terminal des Flughafen Nürnberg. Ihr Gepäck fährt natürlich mit.",
    details: [
      "Shuttle fährt 24/7",
      "Kurze Wartezeiten",
      "Platz für Gepäck",
    ],
  },
  {
    number: "04",
    icon: Plane,
    title: "Entspannt abfliegen",
    description: "Sie sind rechtzeitig am Terminal – mit ausreichend Zeitpuffer für Check-in und Sicherheitskontrolle.",
    details: [
      "Ca. 90 Min. vor Abflug am Terminal",
      "Kein Stress, keine Hektik",
      "Guten Flug!",
    ],
  },
];

const returnSteps = [
  "Nach der Landung: Rufen Sie uns kurz an oder schreiben Sie uns eine WhatsApp.",
  "Wir holen Sie am Terminal ab – unser Shuttle wartet auf Sie.",
  "In 5 Minuten sind Sie zurück bei Ihrem Auto.",
  "Bezahlung vor Ort. Fertig. Gute Heimfahrt!",
];

export default function SoFunktioniertsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                So einfach funktioniert es
              </h1>
              <p className="text-lg text-slate-500">
                Von der Planung bis zur Rückkehr – wir machen den Weg zum Flughafen so einfach wie möglich.
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                {steps.map((step, index) => (
                  <div key={step.number} className="flex gap-6 md:gap-10">
                    {/* Step Number & Line */}
                    <div className="flex flex-col items-center">
                      <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-100 text-amber-600 font-bold text-lg">
                        {step.number}
                      </div>
                      {index < steps.length - 1 && (
                        <div className="w-0.5 h-full min-h-[100px] bg-slate-200 my-4" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-8">
                      <div className="flex items-center gap-3 mb-3">
                        <step.icon className="h-6 w-6 text-slate-400" />
                        <h2 className="text-xl font-bold text-slate-800">{step.title}</h2>
                      </div>
                      <p className="text-slate-600 mb-4">{step.description}</p>
                      <ul className="space-y-2">
                        {step.details.map((detail) => (
                          <li key={detail} className="flex items-center gap-2 text-sm text-slate-500">
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Return Process */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                  Nach Ihrer Rückkehr
                </h2>
                <p className="text-slate-500">
                  Auch die Rückfahrt ist unkompliziert
                </p>
              </div>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <ol className="space-y-4">
                    {returnSteps.map((step, index) => (
                      <li key={index} className="flex gap-4">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-sm font-semibold text-slate-600">
                          {index + 1}
                        </span>
                        <span className="text-slate-600 pt-1">{step}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                Bereit für Ihre Reise?
              </h2>
              <p className="text-slate-500 mb-8">
                Planen Sie jetzt Ihre Anreise zum Flughafen Nürnberg.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/#planner">
                  <Button variant="cta" size="lg">
                    Reise planen
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href={company.contact.phoneLink}>
                  <Button variant="outline" size="lg">
                    <Phone className="mr-2 h-5 w-5" />
                    Anrufen
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
