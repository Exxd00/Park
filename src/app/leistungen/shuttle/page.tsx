import { Metadata } from "next";
import { ShuttleServiceContent } from "@/components/pages/ShuttleServiceContent";

export const metadata: Metadata = {
  title: "Shuttle-Service | Parken Flughafen Nürnberg | ParkExpress24",
  description: "Kostenloser 24/7 Shuttle-Service zum Flughafen Nürnberg. 5 Minuten zum Terminal. Flexible Abholung nach Landung.",
};

export default function ShuttlePage() {
  return <ShuttleServiceContent />;
}
