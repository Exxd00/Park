import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { PreFlightPlanner } from "@/components/sections/PreFlightPlanner";

export const metadata: Metadata = {
  title: "Zeitplanung | Wann losfahren zum Flughafen Nürnberg",
  description: "Berechnen Sie, wann Sie wirklich losfahren müssen, um Ihren Flug am Flughafen Nürnberg nicht zu verpassen. Kostenloser Reiseplaner.",
};

export default function ZeitplanungPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-slate-50 to-white">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Wann müssen Sie wirklich losfahren?
              </h1>
              <p className="text-lg text-slate-500">
                Planen Sie Ihre Anreise zum Flughafen Nürnberg – wir zeigen Ihnen den optimalen Zeitplan.
              </p>
            </div>
          </div>
        </section>

        {/* Planner */}
        <PreFlightPlanner />

        {/* Info Section */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">
                Warum gute Zeitplanung wichtig ist
              </h2>

              <div className="prose prose-slate max-w-none">
                <p>
                  Stress vor dem Flug entsteht oft durch Unsicherheit. Sie fragen sich:
                  "Bin ich rechtzeitig da?" oder "Habe ich genug Zeit für den Check-in?".
                </p>
                <p>
                  Mit unserem Reiseplaner wissen Sie genau, wann Sie losfahren müssen.
                  Wir berücksichtigen:
                </p>
                <ul>
                  <li>Die Fahrzeit von Ihrem Wohnort zum Parkplatz</li>
                  <li>Zeit zum Parken und Einsteigen in den Shuttle</li>
                  <li>Die ca. 5-minütige Shuttle-Fahrt zum Terminal</li>
                  <li>Ausreichend Puffer für Check-in und Sicherheitskontrolle</li>
                </ul>
                <p>
                  So beginnt Ihre Reise entspannt – nicht gehetzt.
                </p>
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
