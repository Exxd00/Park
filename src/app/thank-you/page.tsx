import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThankYouContent } from "@/components/booking/ThankYouContent";

export const metadata: Metadata = {
  title: "Vielen Dank | ParkExpress24",
  description: "Vielen Dank für Ihre Reservierung. Wir bestätigen Ihre Buchung schnellstmöglich.",
};

export default function ThankYouPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 pt-16 md:pt-20">
        <ThankYouContent />
      </main>
      <Footer />
    </>
  );
}
