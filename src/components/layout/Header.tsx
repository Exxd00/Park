"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Plane,
  Globe,
  ChevronDown,
  MapPin,
  Clock,
  Car,
  Users,
  Palmtree,
  Calendar,
  Building2,
  Shield,
  Sparkles,
  HelpCircle,
  Scale,
  Timer,
  Truck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";

// Pages with dark hero that need transparent header initially
const darkHeroPages = ["/"];

// Menu Data - Updated with all new SEO pages
const menuData = {
  services: {
    title: "Leistungen",
    items: [
      { name: "Außenstellplatz", href: "/leistungen/aussenstellplatz", icon: Car, desc: "Ab 6,90€/Tag" },
      { name: "Hallenparkplatz", href: "/leistungen/hallenparkplatz", icon: Building2, desc: "Ab 8,90€/Tag" },
      { name: "Shuttle-Service", href: "/leistungen/shuttle", icon: Plane, desc: "24/7 kostenlos" },
      { name: "So funktioniert's", href: "/so-funktionierts", icon: HelpCircle, desc: "In 4 Schritten" },
    ]
  },
  destinations: {
    title: "Reiseziele",
    popular: [
      { name: "Mallorca", href: "/ziel/mallorca" },
      { name: "Antalya", href: "/ziel/antalya" },
      { name: "Kreta", href: "/ziel/kreta" },
      { name: "Hurghada", href: "/ziel/hurghada" },
      { name: "Barcelona", href: "/ziel/barcelona" },
      { name: "Rom", href: "/ziel/rom" },
      { name: "Istanbul", href: "/ziel/istanbul" },
      { name: "London", href: "/ziel/london" },
    ],
    viewAll: { name: "Alle Reiseziele", href: "/ziel" }
  },
  cities: {
    title: "Städte",
    main: [
      { name: "Nürnberg", href: "/nuernberg" },
      { name: "Fürth", href: "/fuerth" },
      { name: "Erlangen", href: "/erlangen" },
      { name: "Schwabach", href: "/schwabach" },
      { name: "Herzogenaurach", href: "/herzogenaurach" },
      { name: "Neumarkt", href: "/neumarkt" },
    ],
    viewAll: { name: "Alle Städte", href: "/staedte" }
  },
  travelInfo: {
    title: "Reiseinfos",
    items: [
      { name: "Fluglinien", href: "/airline", icon: Plane, desc: "Ryanair, Lufthansa..." },
      { name: "Reisearten", href: "/reiseart", icon: Users, desc: "Business, Familie..." },
      { name: "Parkdauer", href: "/dauer", icon: Clock, desc: "1 Tag bis 1 Monat" },
      { name: "Saison & Feiertage", href: "/saison", icon: Calendar, desc: "Weihnachten, Sommer..." },
      { name: "Abflugzeiten", href: "/abflugzeit", icon: Timer, desc: "Früh, Mittag, Abend..." },
      { name: "Fahrzeugtypen", href: "/fahrzeug", icon: Truck, desc: "PKW, SUV, Wohnmobil..." },
    ]
  },
  info: {
    title: "Informationen",
    items: [
      { name: "Unsere Vorteile", href: "/vorteile", icon: Shield, desc: "Schlüssel behalten..." },
      { name: "Vergleiche", href: "/vergleich", icon: Scale, desc: "vs. Parkhaus, Taxi..." },
      { name: "Häufige Fragen", href: "/faq", icon: HelpCircle, desc: "Alle Antworten" },
      { name: "Alle Fragen", href: "/fragen", icon: Sparkles, desc: "Detaillierte FAQs" },
    ]
  }
};

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const pathname = usePathname();
  const { locale, setLocale, t } = useLanguage();
  const menuRef = useRef<HTMLDivElement>(null);

  // Check if current page has dark hero
  const hasDarkHero = darkHeroPages.includes(pathname);
  const showScrolledStyle = !hasDarkHero || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
        setShowLangMenu(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setMobileSubmenu(null);
    setActiveMenu(null);
  }, [pathname]);

  return (
    <header
      ref={menuRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showScrolledStyle
          ? "bg-white shadow-md py-2 sm:py-3"
          : "bg-transparent py-3 sm:py-4 md:py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1.5 sm:gap-2">
            <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-md sm:rounded-lg bg-amber-500">
              <Plane className="h-4 w-4 sm:h-4.5 sm:w-4.5 md:h-5 md:w-5 text-white transform -rotate-45" />
            </div>
            <div className="flex items-center gap-1">
              <span className={`text-sm sm:text-base md:text-lg font-bold tracking-tight transition-colors ${
                showScrolledStyle ? "text-slate-800" : "text-white"
              }`}>
                ParkExpress24
              </span>
              <span className={`text-[9px] sm:text-[10px] md:text-xs font-semibold px-1 py-0.5 rounded transition-colors ${
                showScrolledStyle
                  ? "bg-amber-100 text-amber-700"
                  : "bg-amber-500/20 text-amber-300"
              }`}>
                NUE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setActiveMenu(activeMenu === 'services' ? null : 'services')}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  showScrolledStyle
                    ? "text-slate-600 hover:text-amber-600 hover:bg-amber-50"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                Leistungen
                <ChevronDown className={`h-4 w-4 transition-transform ${activeMenu === 'services' ? 'rotate-180' : ''}`} />
              </button>

              {activeMenu === 'services' && (
                <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden">
                  <div className="p-2">
                    {menuData.services.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-amber-50 transition-colors"
                        onClick={() => setActiveMenu(null)}
                      >
                        <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                          <item.icon className="h-5 w-5 text-amber-600" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-800">{item.name}</p>
                          <p className="text-xs text-slate-500">{item.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="border-t border-slate-100 p-2">
                    <Link
                      href="/leistungen"
                      className="block px-3 py-2 text-sm text-amber-600 hover:bg-amber-50 rounded-lg font-medium"
                      onClick={() => setActiveMenu(null)}
                    >
                      Alle Leistungen ansehen →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Destinations Dropdown */}
            <div className="relative">
              <button
                onClick={() => setActiveMenu(activeMenu === 'destinations' ? null : 'destinations')}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  showScrolledStyle
                    ? "text-slate-600 hover:text-amber-600 hover:bg-amber-50"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                Reiseziele
                <ChevronDown className={`h-4 w-4 transition-transform ${activeMenu === 'destinations' ? 'rotate-180' : ''}`} />
              </button>

              {activeMenu === 'destinations' && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden">
                  <div className="p-3">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 px-2">Beliebte Ziele</p>
                    <div className="grid grid-cols-2 gap-1">
                      {menuData.destinations.popular.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="px-3 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700 rounded-lg transition-colors"
                          onClick={() => setActiveMenu(null)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-slate-100 p-2">
                    <Link
                      href={menuData.destinations.viewAll.href}
                      className="block px-3 py-2 text-sm text-amber-600 hover:bg-amber-50 rounded-lg font-medium"
                      onClick={() => setActiveMenu(null)}
                    >
                      {menuData.destinations.viewAll.name} →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Cities Dropdown */}
            <div className="relative">
              <button
                onClick={() => setActiveMenu(activeMenu === 'cities' ? null : 'cities')}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  showScrolledStyle
                    ? "text-slate-600 hover:text-amber-600 hover:bg-amber-50"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                Städte
                <ChevronDown className={`h-4 w-4 transition-transform ${activeMenu === 'cities' ? 'rotate-180' : ''}`} />
              </button>

              {activeMenu === 'cities' && (
                <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden">
                  <div className="p-2">
                    {menuData.cities.main.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700 rounded-lg transition-colors"
                        onClick={() => setActiveMenu(null)}
                      >
                        <MapPin className="h-4 w-4 text-slate-400" />
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="border-t border-slate-100 p-2">
                    <Link
                      href={menuData.cities.viewAll.href}
                      className="block px-3 py-2 text-sm text-amber-600 hover:bg-amber-50 rounded-lg font-medium"
                      onClick={() => setActiveMenu(null)}
                    >
                      {menuData.cities.viewAll.name} →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Travel Info Dropdown */}
            <div className="relative">
              <button
                onClick={() => setActiveMenu(activeMenu === 'travelInfo' ? null : 'travelInfo')}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  showScrolledStyle
                    ? "text-slate-600 hover:text-amber-600 hover:bg-amber-50"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                Reiseinfos
                <ChevronDown className={`h-4 w-4 transition-transform ${activeMenu === 'travelInfo' ? 'rotate-180' : ''}`} />
              </button>

              {activeMenu === 'travelInfo' && (
                <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden">
                  <div className="p-2">
                    {menuData.travelInfo.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-amber-50 transition-colors"
                        onClick={() => setActiveMenu(null)}
                      >
                        <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center">
                          <item.icon className="h-4 w-4 text-slate-600" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-800 text-sm">{item.name}</p>
                          <p className="text-xs text-slate-500">{item.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Info Dropdown */}
            <div className="relative">
              <button
                onClick={() => setActiveMenu(activeMenu === 'info' ? null : 'info')}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  showScrolledStyle
                    ? "text-slate-600 hover:text-amber-600 hover:bg-amber-50"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                Info
                <ChevronDown className={`h-4 w-4 transition-transform ${activeMenu === 'info' ? 'rotate-180' : ''}`} />
              </button>

              {activeMenu === 'info' && (
                <div className="absolute top-full right-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden">
                  <div className="p-2">
                    {menuData.info.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-amber-50 transition-colors"
                        onClick={() => setActiveMenu(null)}
                      >
                        <item.icon className="h-5 w-5 text-amber-500" />
                        <div>
                          <p className="font-medium text-slate-800 text-sm">{item.name}</p>
                          <p className="text-xs text-slate-500">{item.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="border-t border-slate-100 p-2">
                    <Link
                      href="/kontakt"
                      className="block px-3 py-2 text-sm text-amber-600 hover:bg-amber-50 rounded-lg font-medium"
                      onClick={() => setActiveMenu(null)}
                    >
                      Kontakt →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Right side: Language + CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher */}
            <div className="relative">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowLangMenu(!showLangMenu);
                }}
                className={`flex items-center gap-1 px-2 py-1.5 rounded-lg transition-all text-xs sm:text-sm font-medium ${
                  showScrolledStyle
                    ? "text-slate-600 hover:bg-slate-100"
                    : "text-white/90 hover:bg-white/10"
                }`}
                aria-label="Change language"
              >
                <Globe className="h-4 w-4" />
                <span className="uppercase hidden sm:inline">{locale}</span>
              </button>

              {showLangMenu && (
                <div className="absolute top-full right-0 mt-1 bg-white rounded-lg shadow-lg border border-slate-200 overflow-hidden min-w-[100px]">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setLocale("de");
                      setShowLangMenu(false);
                    }}
                    className={`w-full px-3 py-2 text-left text-sm hover:bg-slate-50 flex items-center gap-2 ${
                      locale === "de" ? "bg-amber-50 text-amber-700" : "text-slate-700"
                    }`}
                  >
                    <span className="text-base">🇩🇪</span>
                    <span>Deutsch</span>
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setLocale("en");
                      setShowLangMenu(false);
                    }}
                    className={`w-full px-3 py-2 text-left text-sm hover:bg-slate-50 flex items-center gap-2 ${
                      locale === "en" ? "bg-amber-50 text-amber-700" : "text-slate-700"
                    }`}
                  >
                    <span className="text-base">🇬🇧</span>
                    <span>English</span>
                  </button>
                </div>
              )}
            </div>

            {/* CTA Button */}
            <div className="hidden sm:block">
              <Link href="/#planner">
                <Button
                  size="sm"
                  className={`font-medium transition-all text-xs sm:text-sm h-8 sm:h-9 px-3 sm:px-4 ${
                    showScrolledStyle
                      ? "bg-amber-500 hover:bg-amber-600 text-white"
                      : "bg-white text-slate-800 hover:bg-amber-50"
                  }`}
                >
                  {t.nav.planNow}
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className={`lg:hidden p-1.5 sm:p-2 rounded-lg transition-colors ${
                showScrolledStyle
                  ? "text-slate-600 hover:bg-slate-100"
                  : "text-white hover:bg-white/10"
              }`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg max-h-[80vh] overflow-y-auto">
            <nav className="container mx-auto px-4 py-3">

              {/* Services Section */}
              <div className="border-b border-slate-100 pb-2 mb-2">
                <button
                  onClick={() => setMobileSubmenu(mobileSubmenu === 'services' ? null : 'services')}
                  className="w-full flex items-center justify-between py-2.5 px-3 text-slate-700 font-semibold text-sm"
                >
                  <span className="flex items-center gap-2">
                    <Car className="h-4 w-4 text-amber-500" />
                    Leistungen
                  </span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${mobileSubmenu === 'services' ? 'rotate-180' : ''}`} />
                </button>
                {mobileSubmenu === 'services' && (
                  <div className="ml-6 space-y-1 pb-2">
                    {menuData.services.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center justify-between py-2 px-3 text-slate-600 text-sm rounded-lg hover:bg-amber-50"
                        onClick={() => setIsOpen(false)}
                      >
                        <span>{item.name}</span>
                        <span className="text-xs text-amber-600">{item.desc}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Destinations Section */}
              <div className="border-b border-slate-100 pb-2 mb-2">
                <button
                  onClick={() => setMobileSubmenu(mobileSubmenu === 'destinations' ? null : 'destinations')}
                  className="w-full flex items-center justify-between py-2.5 px-3 text-slate-700 font-semibold text-sm"
                >
                  <span className="flex items-center gap-2">
                    <Palmtree className="h-4 w-4 text-amber-500" />
                    Reiseziele
                  </span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${mobileSubmenu === 'destinations' ? 'rotate-180' : ''}`} />
                </button>
                {mobileSubmenu === 'destinations' && (
                  <div className="ml-6 pb-2">
                    <div className="grid grid-cols-2 gap-1">
                      {menuData.destinations.popular.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="py-2 px-3 text-slate-600 text-sm rounded-lg hover:bg-amber-50"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                    <Link
                      href={menuData.destinations.viewAll.href}
                      className="block mt-2 py-2 px-3 text-amber-600 text-sm font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {menuData.destinations.viewAll.name} →
                    </Link>
                  </div>
                )}
              </div>

              {/* Cities Section */}
              <div className="border-b border-slate-100 pb-2 mb-2">
                <button
                  onClick={() => setMobileSubmenu(mobileSubmenu === 'cities' ? null : 'cities')}
                  className="w-full flex items-center justify-between py-2.5 px-3 text-slate-700 font-semibold text-sm"
                >
                  <span className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-amber-500" />
                    Städte
                  </span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${mobileSubmenu === 'cities' ? 'rotate-180' : ''}`} />
                </button>
                {mobileSubmenu === 'cities' && (
                  <div className="ml-6 pb-2">
                    <div className="grid grid-cols-2 gap-1">
                      {menuData.cities.main.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="py-2 px-3 text-slate-600 text-sm rounded-lg hover:bg-amber-50"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                    <Link
                      href={menuData.cities.viewAll.href}
                      className="block mt-2 py-2 px-3 text-amber-600 text-sm font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {menuData.cities.viewAll.name} →
                    </Link>
                  </div>
                )}
              </div>

              {/* Travel Info Section */}
              <div className="border-b border-slate-100 pb-2 mb-2">
                <button
                  onClick={() => setMobileSubmenu(mobileSubmenu === 'travelInfo' ? null : 'travelInfo')}
                  className="w-full flex items-center justify-between py-2.5 px-3 text-slate-700 font-semibold text-sm"
                >
                  <span className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-amber-500" />
                    Reiseinfos
                  </span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${mobileSubmenu === 'travelInfo' ? 'rotate-180' : ''}`} />
                </button>
                {mobileSubmenu === 'travelInfo' && (
                  <div className="ml-6 space-y-1 pb-2">
                    {menuData.travelInfo.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-2 py-2 px-3 text-slate-600 text-sm rounded-lg hover:bg-amber-50"
                        onClick={() => setIsOpen(false)}
                      >
                        <item.icon className="h-4 w-4 text-amber-500" />
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Info Section */}
              <div className="border-b border-slate-100 pb-2 mb-2">
                <button
                  onClick={() => setMobileSubmenu(mobileSubmenu === 'info' ? null : 'info')}
                  className="w-full flex items-center justify-between py-2.5 px-3 text-slate-700 font-semibold text-sm"
                >
                  <span className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-amber-500" />
                    Informationen
                  </span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${mobileSubmenu === 'info' ? 'rotate-180' : ''}`} />
                </button>
                {mobileSubmenu === 'info' && (
                  <div className="ml-6 space-y-1 pb-2">
                    {menuData.info.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-2 py-2 px-3 text-slate-600 text-sm rounded-lg hover:bg-amber-50"
                        onClick={() => setIsOpen(false)}
                      >
                        <item.icon className="h-4 w-4 text-amber-500" />
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Simple Link - Kontakt */}
              <Link
                href="/kontakt"
                className="flex items-center gap-2 py-2.5 px-3 text-slate-700 font-semibold text-sm hover:bg-amber-50 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Kontakt
              </Link>

              {/* CTA */}
              <div className="pt-3 mt-2 border-t">
                <Link href="/#planner" onClick={() => setIsOpen(false)}>
                  <Button variant="cta" size="sm" className="w-full h-10 text-sm">
                    {t.nav.planNow}
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
