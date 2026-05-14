import { Metadata } from "next";
import { DatenschutzContent } from "@/components/pages/DatenschutzContent";

export const metadata: Metadata = {
  title: "Datenschutz | ParkExpress24",
  description: "Datenschutzerklärung von ParkExpress24. Informationen zum Umgang mit Ihren personenbezogenen Daten.",
};

export default function DatenschutzPage() {
  return <DatenschutzContent />;
}
