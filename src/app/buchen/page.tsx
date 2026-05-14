import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookingForm } from "@/components/booking/BookingForm";

export const metadata: Metadata = {
  title: "Parkplatz buchen | Flughafen Nürnberg | ParkExpress24",
  description: "Buchen Sie jetzt Ihren Parkplatz am Flughafen Nürnberg. Außenstellplatz oder Hallenparkplatz mit 24/7 Shuttle-Service. Einfache Online-Reservierung.",
};

export default function BookingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 pt-16 md:pt-20">
        <div className="container py-12">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 text-center">
              <h1 className="heading-2 mb-3">Parkplatz reservieren</h1>
              <p className="text-slate-600">
                Sichern Sie sich Ihren Stellplatz am Flughafen Nürnberg
              </p>
            </div>
            <BookingForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
