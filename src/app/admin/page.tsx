"use client";

import { useState, useEffect } from "react";
import {
  Lock,
  FileText,
  Image,
  Map,
  Download,
  ExternalLink,
  Globe,
  Shield,
  Copy,
  Check,
  Eye,
  EyeOff,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ADMIN_PASSWORD = "Leavemealone2003+";
const SESSION_KEY = "parkexpress24-admin-auth";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const session = sessionStorage.getItem(SESSION_KEY);
    if (session === "authenticated") {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem(SESSION_KEY, "authenticated");
      setError("");
    } else {
      setError("Falsches Passwort");
      setPassword("");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem(SESSION_KEY);
  };

  const copyToClipboard = (text: string, itemId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(itemId);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-500" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
        <Card className="w-full max-w-md border-slate-700 bg-slate-800/50 backdrop-blur">
          <CardHeader className="text-center pb-2">
            <div className="mx-auto w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-amber-500" />
            </div>
            <CardTitle className="text-2xl text-white">Admin Bereich</CardTitle>
            <p className="text-slate-400 text-sm mt-1">
              Zugang nur für autorisierte Benutzer
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Passwort
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full h-12 px-4 pr-12 rounded-xl bg-slate-700/50 border-2 border-slate-600 text-white placeholder:text-slate-500 focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="••••••••••••"
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {error && (
                  <p className="text-red-400 text-sm mt-2">{error}</p>
                )}
              </div>
              <Button
                type="submit"
                className="w-full h-12 bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold"
              >
                <Lock className="h-4 w-4 mr-2" />
                Anmelden
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center">
                <Shield className="h-5 w-5 text-slate-900" />
              </div>
              Admin Dashboard
            </h1>
            <p className="text-slate-400 mt-1">ParkExpress24 Verwaltungsbereich</p>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="border-slate-600 text-slate-300 hover:bg-slate-700"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Abmelden
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Sitemap Section */}
          <Card className="border-slate-700 bg-slate-800/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Map className="h-5 w-5 text-amber-500" />
                Sitemap
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-slate-400 text-sm">
                XML Sitemap für Suchmaschinen-Indexierung
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors group"
                >
                  <span className="text-slate-300 text-sm">sitemap.xml</span>
                  <ExternalLink className="h-4 w-4 text-slate-500 group-hover:text-amber-500" />
                </a>
                <button
                  onClick={() => copyToClipboard("https://park-express24.de/sitemap.xml", "sitemap")}
                  className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors"
                >
                  <span className="text-slate-300 text-sm truncate mr-2">
                    https://park-express24.de/sitemap.xml
                  </span>
                  {copiedItem === "sitemap" ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4 text-slate-500" />
                  )}
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Robots.txt Section */}
          <Card className="border-slate-700 bg-slate-800/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <FileText className="h-5 w-5 text-amber-500" />
                Robots.txt
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-slate-400 text-sm">
                Anweisungen für Web-Crawler
              </p>
              <a
                href="/robots.txt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors group"
              >
                <span className="text-slate-300 text-sm">robots.txt</span>
                <ExternalLink className="h-4 w-4 text-slate-500 group-hover:text-amber-500" />
              </a>
            </CardContent>
          </Card>

          {/* Languages Section */}
          <Card className="border-slate-700 bg-slate-800/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Globe className="h-5 w-5 text-amber-500" />
                Sprachen
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-slate-400 text-sm">
                Verfügbare Sprachversionen
              </p>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg">
                  <span className="text-2xl">🇩🇪</span>
                  <div>
                    <p className="text-white font-medium">Deutsch</p>
                    <p className="text-slate-500 text-xs">Primäre Sprache</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg">
                  <span className="text-2xl">🇬🇧</span>
                  <div>
                    <p className="text-white font-medium">English</p>
                    <p className="text-slate-500 text-xs">Sekundäre Sprache</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Logo Downloads */}
          <Card className="border-slate-700 bg-slate-800/50 backdrop-blur md:col-span-2">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Image className="h-5 w-5 text-amber-500" />
                Logo & Branding
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-400 text-sm">
                Logo-Dateien zum Download
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {/* SVG Favicon */}
                <div className="p-4 bg-slate-700/50 rounded-xl">
                  <div className="flex items-center justify-center p-6 bg-slate-800 rounded-lg mb-3">
                    <div className="w-16 h-16 bg-amber-500 rounded-xl flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 -rotate-45">
                        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-medium">Favicon SVG</p>
                      <p className="text-slate-500 text-xs">Vektor-Format</p>
                    </div>
                    <a
                      href="/favicon.svg"
                      download="parkexpress24-favicon.svg"
                      className="p-2 bg-amber-500 hover:bg-amber-600 rounded-lg transition-colors"
                    >
                      <Download className="h-4 w-4 text-slate-900" />
                    </a>
                  </div>
                </div>

                {/* Logo Text */}
                <div className="p-4 bg-slate-700/50 rounded-xl">
                  <div className="flex items-center justify-center p-6 bg-slate-800 rounded-lg mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 -rotate-45">
                          <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
                        </svg>
                      </div>
                      <span className="text-white font-bold text-lg">ParkExpress24</span>
                      <span className="bg-amber-500/20 text-amber-400 text-xs font-semibold px-1.5 py-0.5 rounded">NUE</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-medium">Logo mit Text</p>
                      <p className="text-slate-500 text-xs">Markenzeichen</p>
                    </div>
                    <button
                      onClick={() => copyToClipboard("ParkExpress24", "logotext")}
                      className="p-2 bg-slate-600 hover:bg-slate-500 rounded-lg transition-colors"
                    >
                      {copiedItem === "logotext" ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4 text-white" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Important Links */}
          <Card className="border-slate-700 bg-slate-800/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <ExternalLink className="h-5 w-5 text-amber-500" />
                Wichtige Links
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-slate-400 text-sm">
                Direkte Links zu Seiten
              </p>
              <div className="flex flex-col gap-2">
                {[
                  { name: "Startseite", href: "/" },
                  { name: "Leistungen", href: "/leistungen" },
                  { name: "Kontakt", href: "/kontakt" },
                  { name: "FAQ", href: "/faq" },
                  { name: "Impressum", href: "/impressum" },
                  { name: "Datenschutz", href: "/datenschutz" },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors group"
                  >
                    <span className="text-slate-300 text-sm">{link.name}</span>
                    <ExternalLink className="h-4 w-4 text-slate-500 group-hover:text-amber-500" />
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card className="border-slate-700 bg-slate-800/50 backdrop-blur lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <FileText className="h-5 w-5 text-amber-500" />
                Kontaktdaten
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { label: "Telefon", value: "0151 241 477 79", id: "phone" },
                  { label: "Telefon Alt.", value: "0155 116 760 24", id: "phone2" },
                  { label: "E-Mail", value: "info@park-express24.de", id: "email" },
                  { label: "WhatsApp", value: "+49 151 241 477 79", id: "whatsapp" },
                  { label: "Website", value: "https://park-express24.de", id: "website" },
                  { label: "Standort", value: "Flughafen Nürnberg (NUE)", id: "location" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => copyToClipboard(item.value, item.id)}
                    className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors text-left"
                  >
                    <div>
                      <p className="text-slate-500 text-xs">{item.label}</p>
                      <p className="text-white text-sm">{item.value}</p>
                    </div>
                    {copiedItem === item.id ? (
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                    ) : (
                      <Copy className="h-4 w-4 text-slate-500 flex-shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Brand Colors */}
          <Card className="border-slate-700 bg-slate-800/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <div className="w-5 h-5 bg-amber-500 rounded" />
                Markenfarben
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex flex-col gap-2">
                {[
                  { name: "Primary (Amber)", color: "#f59e0b", id: "amber" },
                  { name: "Dark", color: "#1e293b", id: "dark" },
                  { name: "Text", color: "#334155", id: "text" },
                  { name: "Success", color: "#22c55e", id: "green" },
                ].map((c) => (
                  <button
                    key={c.id}
                    onClick={() => copyToClipboard(c.color, c.id)}
                    className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex-shrink-0"
                      style={{ backgroundColor: c.color }}
                    />
                    <div className="flex-1 text-left">
                      <p className="text-white text-sm">{c.name}</p>
                      <p className="text-slate-500 text-xs uppercase">{c.color}</p>
                    </div>
                    {copiedItem === c.id ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4 text-slate-500" />
                    )}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-slate-500 text-sm">
          <p>ParkExpress24 Admin Dashboard</p>
          <p className="text-xs mt-1">© 2026 Alle Rechte vorbehalten</p>
        </div>
      </div>
    </div>
  );
}
