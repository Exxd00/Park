"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Was passiert bei Flugverspätung?",
    answer: "Kein Problem! Unser Shuttle-Service ist 24/7 verfügbar. Teilen Sie uns einfach Ihre neue Ankunftszeit mit und wir holen Sie wie gewohnt am Terminal ab. Es entstehen keine zusätzlichen Kosten.",
  },
  {
    question: "Was passiert bei sehr frühem Abflug?",
    answer: "Auch bei Frühflügen sind wir für Sie da. Unser Shuttle fährt rund um die Uhr. Geben Sie bei der Buchung einfach Ihre gewünschte Abholzeit an.",
  },
  {
    question: "Was passiert, wenn ich den Parkplatz nicht finde?",
    answer: "Bei der Buchungsbestätigung erhalten Sie eine genaue Adresse und Anfahrtsbeschreibung. Bei Fragen erreichen Sie uns jederzeit telefonisch unter 0151 241 477 79.",
  },
  {
    question: "Wie läuft die Rückfahrt?",
    answer: "Nach der Landung rufen Sie uns kurz an oder schreiben eine WhatsApp. Wir holen Sie dann am Terminal ab und bringen Sie zurück zu Ihrem Auto. Der Transfer dauert ca. 5 Minuten.",
  },
  {
    question: "Wie viele Personen sind im Shuttle enthalten?",
    answer: "Der Shuttle-Transfer ist für die bei der Buchung angegebenen Personen im Preis enthalten. Bei größeren Gruppen kontaktieren Sie uns bitte vorab.",
  },
  {
    question: "Was ist mit viel Gepäck?",
    answer: "Unser Shuttle bietet ausreichend Platz für normales Reisegepäck. Bei besonders großen Gepäckstücken oder Sperrgepäck empfehlen wir eine kurze Vorabinformation.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="section bg-white">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-2 mb-4">Was passiert, wenn...?</h2>
          <p className="mb-12 text-lg text-slate-600">
            Antworten auf häufige Fragen rund um Ihre Parkplatzreservierung
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl border-2 border-slate-100 bg-white px-6 shadow-sm data-[state=open]:border-amber-200 data-[state=open]:shadow-md"
              >
                <AccordionTrigger className="py-5 text-left font-semibold text-slate-800 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-slate-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
