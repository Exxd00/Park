"use client";

import Link from "next/link";
import { company } from "@/data/company";
import { Phone, Mail, MapPin, Plane, ExternalLink } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function Footer() {
  const { t } = useLanguage();

  const links = [
    { name: "FAQ", href: "/faq" },
    { name: "Reiseziele", href: "/ziel" },
    { name: "Airlines", href: "/airline" },
    { name: "Vorteile", href: "/vorteile" },
    { name: "Kontakt", href: "/kontakt" },
    { name: "Impressum", href: "/impressum" },
    { name: "Datenschutz", href: "/datenschutz" },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container px-4 py-6">
        <div className="max-w-5xl mx-auto">

          {/* Main Row: Brand + Links + CTA */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

            {/* Brand */}
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center">
                <Plane className="h-4 w-4 text-white -rotate-45" />
              </div>
              <span className="text-lg font-bold">
                Park<span className="text-amber-500">Express</span>
                <span className="text-slate-500">24</span>
              </span>
            </Link>

            {/* Links - Horizontal */}
            <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-400 hover:text-amber-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <a
              href="https://park-express24.de"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 text-slate-900 hover:bg-amber-400 transition-colors text-sm font-medium whitespace-nowrap"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Jetzt buchen
            </a>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-800 my-4" />

          {/* Bottom Row: Copyright + Contact */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <div className="flex items-center gap-4">
              <span>© {new Date().getFullYear()} ParkExpress24</span>
              <span className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                Flughafen Nürnberg
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a href={company.contact.phoneLink} className="flex items-center gap-1 hover:text-amber-400 transition-colors">
                <Phone className="h-3 w-3" />
                {company.contact.phone}
              </a>
              <a href={`mailto:${company.contact.email}`} className="flex items-center gap-1 hover:text-amber-400 transition-colors">
                <Mail className="h-3 w-3" />
                E-Mail
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
