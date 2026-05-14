import { Metadata } from "next";
import { IndoorParkingContent } from "@/components/pages/IndoorParkingContent";

export const metadata: Metadata = {
  title: "Hallenparkplatz | Parken Flughafen Nürnberg | ParkExpress24",
  description: "Überdachter Hallenparkplatz am Flughafen Nürnberg ab 8,90€/Tag. Wetterschutz, 24/7 Shuttle. Schlüssel bleibt bei Ihnen.",
};

export default function HallenparkplatzPage() {
  return <IndoorParkingContent />;
}
