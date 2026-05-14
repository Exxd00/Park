import { Metadata } from "next";
import { OutdoorParkingContent } from "@/components/pages/OutdoorParkingContent";

export const metadata: Metadata = {
  title: "Außenstellplatz | Parken Flughafen Nürnberg | ParkExpress24",
  description: "Günstiger Außenstellplatz am Flughafen Nürnberg ab 6,90€/Tag. Eingezäunt, beleuchtet, 24/7 Shuttle. Schlüssel bleibt bei Ihnen.",
};

export default function AussenstellplatzPage() {
  return <OutdoorParkingContent />;
}
