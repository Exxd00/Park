import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { PreFlightPlanner } from "@/components/sections/PreFlightPlanner";
import { WhyDifferent } from "@/components/sections/WhyDifferent";
import { WhatHappensIf } from "@/components/sections/WhatHappensIf";
import { TrustIndicators } from "@/components/sections/TrustIndicators";
import { NotForEveryone } from "@/components/sections/NotForEveryone";
import { RequestSection } from "@/components/sections/RequestSection";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { LocationSection } from "@/components/sections/LocationSection";

export const metadata: Metadata = {
  title: "Parken Flughafen Nürnberg | Günstig & Sicher | ParkExpress24",
  description: "Parken am Flughafen Nürnberg (NUE): Schlüssel bleibt bei Ihnen, 24/7 Shuttle, 5 Min. zum Terminal. Berechnen Sie Ihren persönlichen Flughafen-Plan. Günstig parken ab Nürnberg, Fürth, Erlangen.",
  keywords: "parken flughafen nürnberg, parkplatz flughafen nürnberg, parken nue, flughafen nürnberg parken günstig, langzeitparken flughafen nürnberg, shuttle parking nürnberg, parken flughafen nürnberg erfahrungen, parkplatz nürnberg airport",
  openGraph: {
    title: "Parken Flughafen Nürnberg | ParkExpress24",
    description: "Ihr Parkplatz am Flughafen Nürnberg: Schlüssel bleibt bei Ihnen, 24/7 Shuttle, 5 Min. zum Terminal.",
    type: "website",
    locale: "de_DE",
  },
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <PreFlightPlanner />
        <WhyDifferent />
        <TrustIndicators />
        <NotForEveryone />
        <WhatHappensIf />
        <RequestSection />
        <LocationSection variant="hero" />
        <ContactCTA />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
