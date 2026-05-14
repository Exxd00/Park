import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { ContactPageContent } from "@/components/pages/ContactPageContent";

export const metadata: Metadata = {
  title: "Kontakt | ParkExpress24 Flughafen Nürnberg",
  description: "Kontaktieren Sie ParkExpress24 für Fragen oder Reservierungen. Telefon, WhatsApp und E-Mail – wir antworten schnell.",
};

export default function KontaktPage() {
  return (
    <>
      <Header />
      <ContactPageContent />
      <Footer />
      <FloatingContact />
    </>
  );
}
