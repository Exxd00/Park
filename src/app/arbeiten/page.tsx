import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingButtons } from "@/components/layout/FloatingButtons";
import { GalleryGrid } from "@/components/pages/GalleryGrid";

export const metadata: Metadata = {
  title: "Galerie | ParkExpress24 | Flughafen Nürnberg",
  description: "Bilder unserer Parkanlage am Flughafen Nürnberg. Außenstellplatz, Hallenparkplatz und Shuttle-Service im Überblick.",
};

export default function ArbeitenPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 md:pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-800 to-slate-900 py-16 text-white">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-3xl font-bold sm:text-4xl">Unsere Anlage</h1>
              <p className="text-lg text-slate-300">
                Einblicke in unseren Parkservice am Flughafen Nürnberg
              </p>
            </div>
          </div>
        </section>

        <GalleryGrid />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
