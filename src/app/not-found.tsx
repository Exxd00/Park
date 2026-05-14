import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 pt-16 md:pt-20">
        <div className="container flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
          <div className="mb-8 text-8xl font-bold text-slate-200">404</div>
          <h1 className="mb-4 text-2xl font-bold text-slate-800 sm:text-3xl">
            Seite nicht gefunden
          </h1>
          <p className="mb-8 max-w-md text-slate-600">
            Die gewünschte Seite existiert leider nicht oder wurde verschoben.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/">
              <Button variant="cta" size="lg" className="gap-2">
                <Home className="h-5 w-5" />
                Zur Startseite
              </Button>
            </Link>
            <Link href="/buchen">
              <Button variant="outline" size="lg" className="gap-2">
                <Search className="h-5 w-5" />
                Parkplatz buchen
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
