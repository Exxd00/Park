export const company = {
  name: "ParkExpress24",
  slogan: "Nicht nur parken. Besser vorbereitet abfliegen.",
  description: "Pre-Flight Parking Service am Flughafen Nürnberg",
  fullDescription: "Parken + Shuttle + Zeitplanung vor dem Abflug",

  contact: {
    phone: "0151 241 477 79",
    phoneAlt: "0155 116 760 24",
    email: "info@park-express24.de",
    whatsapp: "0151 241 477 79",
    whatsappLink: "https://wa.me/4915124147779",
    phoneLink: "tel:+4915124147779",
    phoneAltLink: "tel:+4915511676024",
  },

  hours: {
    shuttle: "24/7",
    office: "Montag–Freitag 11:00–16:00",
  },

  location: {
    city: "Nürnberg",
    airport: "Flughafen Nürnberg (NUE)",
    serviceArea: "5–20 km rund um den Flughafen Nürnberg",
  },

  stats: {
    reviews: "2000+",
    transferTime: "ca. 5 Minuten",
    shuttleHours: "24/7",
  },

  features: [
    {
      title: "Shuttle 24/7",
      description: "Rund um die Uhr zum Terminal",
      icon: "bus"
    },
    {
      title: "ca. 5 Min. Transfer",
      description: "Schnell am Terminal",
      icon: "clock"
    },
    {
      title: "Außen & Halle",
      description: "Zwei Parkoptionen",
      icon: "car"
    },
    {
      title: "2000+ Bewertungen",
      description: "Zufriedene Kunden",
      icon: "star"
    },
    {
      title: "Klare Buchung",
      description: "Einfach online reservieren",
      icon: "calendar"
    },
    {
      title: "Transparente Abläufe",
      description: "Wissen, was Sie erwartet",
      icon: "check"
    }
  ],

  trustBadges: [
    "Shuttle 24/7",
    "ca. 5 Minuten zum Terminal",
    "Außenstellplatz & Hallenparkplatz",
    "2000+ Kundenbewertungen"
  ],

  reviews: [
    {
      name: "Michael S.",
      location: "Nürnberg",
      rating: 5,
      text: "Schneller Shuttle, freundlicher Service. Kann ich nur empfehlen!",
      date: "März 2026"
    },
    {
      name: "Sandra K.",
      location: "Fürth",
      rating: 5,
      text: "Alles hat reibungslos geklappt. Preis-Leistung stimmt.",
      date: "Februar 2026"
    },
    {
      name: "Thomas W.",
      location: "Erlangen",
      rating: 5,
      text: "Zum dritten Mal hier geparkt. Immer zuverlässig!",
      date: "Januar 2026"
    }
  ]
};

export const navigation = {
  main: [
    { name: "Leistungen", href: "/leistungen" },
    { name: "So funktioniert's", href: "/#wie-es-funktioniert" },
    { name: "Buchen", href: "/buchen" },
    { name: "Kontakt", href: "/kontakt" }
  ],
  services: [
    { name: "Außenstellplatz", href: "/service/aussenstellplatz" },
    { name: "Hallenparkplatz", href: "/service/hallenparkplatz" },
    { name: "Shuttle-Service", href: "/service/shuttle-service" }
  ],
  help: [
    { name: "So funktioniert's", href: "/#wie-es-funktioniert" },
    { name: "FAQ", href: "/#faq" },
    { name: "Kontakt", href: "/kontakt" }
  ],
  legal: [
    { name: "Impressum", href: "/impressum" },
    { name: "Datenschutz", href: "/datenschutz" }
  ]
};
