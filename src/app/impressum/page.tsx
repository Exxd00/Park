import { Metadata } from "next";
import { ImpressumContent } from "@/components/pages/ImpressumContent";

export const metadata: Metadata = {
  title: "Impressum | ParkExpress24",
  description: "Impressum und rechtliche Informationen von ParkExpress24.",
};

export default function ImpressumPage() {
  return <ImpressumContent />;
}
