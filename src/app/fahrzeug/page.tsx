import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { vehicleTypes } from "@/data/seo-data";
import { Car, ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Fahrzeugtypen | Parken Flughafen Nürnberg",
  description: "Parkplätze für alle Fahrzeugtypen: PKW, SUV, Van, Wohnmobil, Elektroauto und mehr. Am Flughafen Nürnberg ab 6,90€/Tag.",
  keywords: ["wohnmobil parken flughafen nürnberg", "suv parken nue", "elektroauto parken flughafen"],
  alternates: { canonical: "https://park-express24.de/fahrzeug" },
};

export default function VehicleTypesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 md:pt-20">
        <section className="py-12 md:py-16 bg-gradient-to-b from-slate-900 to-slate-800">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-500/20 mb-6">
                <Car className="h-8 w-8 text-amber-400" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Parkplätze für alle Fahrzeugtypen</h1>
              <p className="text-lg text-slate-300">Egal welches Fahrzeug – wir haben den passenden Stellplatz</p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
              {vehicleTypes.map((vehicle) => (
                <Link key={vehicle.slug} href={`/fahrzeug/${vehicle.slug}`}
                  className="group p-6 rounded-2xl bg-slate-50 border-2 border-slate-100 hover:border-amber-300 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{vehicle.icon}</span>
                    <div>
                      <h3 className="font-bold text-slate-800 text-lg">{vehicle.name}</h3>
                      {vehicle.surcharge !== 0 && (
                        <p className={`text-sm ${vehicle.surcharge > 0 ? 'text-orange-600' : 'text-green-600'}`}>
                          {vehicle.surcharge > 0 ? `+${vehicle.surcharge}€/Tag` : `${vehicle.surcharge}€/Tag`}
                        </p>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">{vehicle.description}</p>
                  <div className="flex items-center text-amber-600 font-medium text-sm group-hover:gap-2 transition-all">
                    <span>Mehr erfahren</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-slate-900">
          <div className="container px-4 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Parkplatz für Ihr Fahrzeug</h2>
            <p className="text-slate-300 mb-8">Egal welches Auto – parken Sie günstig bei uns</p>
            <a href="https://park-express24.de" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold transition-all">
              <ExternalLink className="h-5 w-5" />Jetzt buchen
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
