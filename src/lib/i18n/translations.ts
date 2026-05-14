export type Locale = "de" | "en";

export const translations = {
  de: {
    // Navigation
    nav: {
      howItWorks: "Ablauf",
      services: "Leistungen",
      faq: "FAQ",
      contact: "Kontakt",
      planNow: "Jetzt planen",
    },

    // Hero Section
    hero: {
      badge: "Flughafen Nürnberg · NUE",
      title: "Morgen früh geht Ihr Flug.",
      subtitle: "Wissen Sie schon, wann Sie losfahren müssen?",
      description: "Kein Rätselraten mehr. Geben Sie Ihre Flugzeit ein – wir berechnen genau, wann Sie von zuhause losfahren sollten. Mit Zeitpuffer, Shuttle und allem.",
      keyFeature: "Ihr Schlüssel bleibt bei Ihnen – immer.",
      cta: "Jetzt Abfahrtszeit berechnen",
      ctaSubtext: "Kostenlos · Keine Anmeldung",
      features: {
        shuttle: "24/7 Shuttle zum Terminal",
        distance: "5 Minuten zum Flughafen",
        security: "Bewacht & eingezäunt",
      },
      trust: "Vertraut von über",
      customers: "2.000+ Reisenden",
      region: "aus Nürnberg, Fürth, Erlangen und der Region",
    },

    // Pre-Flight Planner
    planner: {
      title: "Wann müssen Sie losfahren?",
      subtitle: "Flugdaten eingeben, Zeitplan erhalten.",
      flightDate: "Flugdatum",
      flightTime: "Abflugzeit",
      origin: "Startort",
      persons: "Personen",
      selectDate: "Datum wählen",
      selectTime: "Zeit wählen",
      selectCity: "Stadt wählen",
      calculate: "Plan berechnen",
      person: "Person",
      personsLabel: "Personen",
      resultTitle: "Ihr Flughafen-Plan",
      departure: "Abfahrt",
      parking: "Parkplatz",
      arrive: "Ankommen",
      shuttle: "Shuttle",
      terminal: "Terminal",
      keyStays: "Schlüssel bleibt bei Ihnen",
      planReady: "Plan steht. Parkplatz anfragen?",
      whatsapp: "WhatsApp",
      newCalculation: "Neue Berechnung",
    },

    // Why Different Section
    whyDifferent: {
      badge: "Warum ParkExpress24?",
      title: "Ihr Parkplatz am Flughafen Nürnberg.",
      subtitle: "Anders als andere.",
      yourKey: "Ihr Schlüssel",
      yourKeyDesc: "Sie parken selbst und schließen ab. Niemand fährt Ihr Auto.",
      fiveMin: "5 Min",
      fiveMinDesc: "Shuttle rund um die Uhr. Direkt zum Flughafen Nürnberg.",
      secure: "24/7 Sicher",
      secureDesc: "Eingezäunt, Kameraüberwachung, beleuchtet.",
      atNue: "Am NUE",
      atNueDesc: "Vor Ort am Flughafen. Direkte Ansprechpartner.",
      comparison: "Der Unterschied",
      us: "Wir",
      others: "Andere",
      comparisonItems: {
        keyWithCustomer: "Schlüssel beim Kunden",
        shuttle247: "24/7 Shuttle",
        directContact: "Direkte Ansprechpartner",
        clearPrices: "Klare Preise",
      },
      questions: "Fragen?",
      call: "Anrufen",
    },

    // Trust Indicators
    trust: {
      badge: "Das sagen unsere Kunden",
      title: "Echte Erfahrungen am Flughafen Nürnberg",
      customers: "Kunden",
      shuttle: "Shuttle",
      rating: "Bewertung",
      terminal: "Terminal",
      footer: "Über 2000 zufriedene Kunden am Flughafen Nürnberg",
    },

    // Not For Everyone Section
    notForEveryone: {
      title: "Ehrlich gesagt: Nicht für jeden.",
      subtitle: "Passt ParkExpress24 zu Ihnen?",
      no: "Nein",
      yes: "Ja",
      notForYou: {
        dropOff: "Jemand bringt Sie zum Flughafen",
        preferTaxi: "Sie fahren lieber mit Taxi/Bahn",
        tallVehicle: "Fahrzeug höher als 2m",
        otherAirport: "Anderer Flughafen als NUE",
      },
      forYou: {
        driveSelf: "Sie fahren mit dem Auto zum NUE",
        securePark: "Sicherer Parkplatz für die Reise",
        keepKey: "Schlüssel lieber selbst behalten",
        clearPlan: "Klarer Plan für die Anreise",
      },
    },

    // What Happens If Section
    whatHappensIf: {
      badge: "Ihre Fragen",
      title: "Was passiert, wenn...?",
      subtitle: "Ehrliche Antworten auf Ihre Sorgen.",
      questions: {
        giveKey: {
          title: "Schlüssel abgeben?",
          answer: "Nein! Sie behalten Ihren Schlüssel. Parken selbst ein, schließen ab. Niemand fährt Ihr Auto.",
        },
        flightDelay: {
          title: "Flugverspätung?",
          answer: "Kein Problem. Shuttle fährt 24/7. Wir holen Sie ab, egal wann Sie landen.",
        },
        earlyDeparture: {
          title: "Früher Abflug?",
          answer: "Auch nachts. Shuttle fährt durchgehend. Einfach bei Ankunft melden.",
        },
        carSafe: {
          title: "Auto sicher?",
          answer: "Eingezäuntes Gelände, Kameraüberwachung, beleuchtet. Ihr Auto ist sicher.",
        },
        notFound: {
          title: "Nicht gefunden?",
          answer: "GPS-Koordinaten bei der Buchung. Direkte Telefonnummer bei Fragen.",
        },
        muchLuggage: {
          title: "Viel Gepäck?",
          answer: "Shuttle hält direkt am Auto. Gepäck bleibt bei Ihnen bis zum Terminal.",
        },
      },
      moreQuestions: "Noch Fragen?",
    },

    // Request Section
    request: {
      badge: "Plan steht. Jetzt Parkplatz sichern.",
      title: "Parkplatz anfragen",
      subtitle: "Unverbindlich. Preis & Verfügbarkeit folgt.",
      parkingType: "Parkplatzart",
      outdoor: "Außen",
      indoor: "Halle",
      from: "ab",
      arrival: "Anreise",
      departure: "Rückreise",
      phone: "Telefon",
      yourNumber: "Ihre Nummer",
      submit: "Parkplatz anfragen",
      nonBinding: "Unverbindlich. Preis wird bestätigt.",
      success: "Anfrage gesendet!",
      successMessage: "Wir melden uns schnellstmöglich.",
      newRequest: "Neue Anfrage",
    },

    // Contact Section
    contact: {
      title: "Fragen? Wir helfen gerne.",
      subtitle: "Kontaktieren Sie uns – wir antworten schnell und unkompliziert.",
      orEmail: "Oder schreiben Sie uns:",
      pageTitle: "Kontakt",
      pageSubtitle: "Fragen? Reservierung? Wir helfen gerne.",
      call: "Anrufen",
      whatsapp: "WhatsApp",
      phone: "Telefon",
      email: "E-Mail",
      availability: "Erreichbarkeit",
      shuttleAvailability: "Shuttle: 24/7",
      location: "Standort",
      locationValue: "Direkt am Flughafen Nürnberg (NUE)",
      ctaTitle: "Bereit für Ihre Reise?",
      ctaSubtitle: "Planen Sie Ihre Anfahrt zum Flughafen.",
      ctaButton: "Jetzt Reise planen",
    },

    // Footer
    footer: {
      tagline: "Parkplatz am Flughafen Nürnberg. Schlüssel bleibt bei Ihnen. 24/7 Shuttle.",
      location: "Direkt am Flughafen Nürnberg",
      call: "Anrufen",
      email: "E-Mail",
      navigation: "Navigation",
      legal: "Rechtliches",
      howItWorks: "So funktioniert's",
      services: "Leistungen",
      faq: "FAQ",
      contact: "Kontakt",
      imprint: "Impressum",
      privacy: "Datenschutz",
      alsoFor: "Auch für Reisende aus:",
      copyright: "ParkExpress24",
      airport: "Flughafen Nürnberg (NUE)",
    },

    // Common
    common: {
      learnMore: "Mehr erfahren",
      bookNow: "Jetzt buchen",
      close: "Schließen",
      back: "Zurück",
      next: "Weiter",
      min: "Min.",
    },

    // Services Page
    services: {
      pageTitle: "Unsere Leistungen",
      pageSubtitle: "Alles für eine entspannte Anreise zum Flughafen Nürnberg. Wählen Sie Ihre Parkart.",
      keyUsp: "Bei allen Optionen: Ihr Schlüssel bleibt bei Ihnen",
      outdoor: {
        title: "Außenstellplatz",
        shortTitle: "Außen",
        price: "ab 6,90€/Tag",
        description: "Wirtschaftliche Parkmöglichkeit unter freiem Himmel. Ideal für preisbewusste Reisende.",
        longDescription: "Unser Außenstellplatz bietet Ihnen eine kostengünstige und sichere Parkmöglichkeit direkt am Flughafen Nürnberg. Das Gelände ist eingezäunt, beleuchtet und wird rund um die Uhr überwacht.",
        features: [
          "Eingezäuntes, beleuchtetes Gelände",
          "24/7 Shuttle-Service inklusive",
          "Günstiges Preis-Leistungs-Verhältnis",
          "Für alle Fahrzeuggrößen geeignet",
          "Schlüssel bleibt bei Ihnen",
        ],
      },
      indoor: {
        title: "Hallenparkplatz",
        shortTitle: "Halle",
        price: "ab 8,90€/Tag",
        description: "Überdachter Stellplatz für mehr Schutz. Ideal für längere Reisen oder empfindliche Fahrzeuge.",
        longDescription: "Ihr Fahrzeug steht sicher und geschützt in unserer überdachten Halle. Perfekt für Langzeitparker und alle, die maximalen Schutz für ihr Fahrzeug wünschen.",
        features: [
          "Vollständiger Wetterschutz",
          "24/7 Shuttle-Service inklusive",
          "Ideal für Langzeitparken",
          "Videoüberwachung",
          "Schlüssel bleibt bei Ihnen",
        ],
      },
      shuttle: {
        title: "Shuttle-Service",
        shortTitle: "Shuttle",
        price: "Kostenlos",
        description: "Unser Transfer bringt Sie direkt zum Terminal und holt Sie nach der Landung wieder ab.",
        longDescription: "Unser kostenloser Shuttle-Service fährt rund um die Uhr. In nur 5 Minuten sind Sie am Terminal. Nach Ihrer Landung rufen Sie uns an – wir holen Sie sofort ab.",
        features: [
          "Rund um die Uhr verfügbar (24/7)",
          "ca. 5 Minuten zum Terminal",
          "Platz für Ihr Gepäck",
          "Flexible Abholung nach Landung",
          "Persönlicher Service",
        ],
      },
      trustStats: {
        atNue: "Direkt am NUE",
        atNueDesc: "Flughafen Nürnberg",
        fiveMin: "5 Minuten",
        fiveMinDesc: "zum Terminal",
        guarded: "24/7 bewacht",
        guardedDesc: "Videoüberwachung",
        yourKey: "Ihr Schlüssel",
        yourKeyDesc: "bleibt bei Ihnen",
      },
      ctaTitle: "Bereit für eine stressfreie Anreise?",
      ctaSubtitle: "Berechnen Sie zuerst Ihren Flughafen-Plan, dann fragen Sie Ihren Parkplatz an.",
      ctaPrimary: "Jetzt Reise planen",
      ctaSecondary: "Kontakt aufnehmen",
    },

    // FAQ Page
    faqPage: {
      title: "Häufige Fragen",
      subtitle: "Alles, was Sie über das Parken am Flughafen Nürnberg wissen möchten.",
      categories: {
        beforeTrip: "Vor der Reise",
        travelDay: "Am Reisetag",
        duringTrip: "Während der Reise",
        afterReturn: "Nach der Rückkehr",
      },
      questions: {
        howToReserve: {
          q: "Wie reserviere ich einen Parkplatz?",
          a: "Rufen Sie uns an oder schreiben Sie uns eine WhatsApp. Wir bestätigen Ihre Reservierung persönlich – keine komplizierten Online-Formulare.",
        },
        payInAdvance: {
          q: "Muss ich im Voraus bezahlen?",
          a: "Nein. Sie bezahlen nach Ihrer Rückkehr, wenn Sie Ihr Auto abholen.",
        },
        changeReservation: {
          q: "Kann ich meine Reservierung ändern oder stornieren?",
          a: "Ja, kontaktieren Sie uns einfach. Wir sind flexibel und finden eine Lösung.",
        },
        whenToArrive: {
          q: "Wann sollte ich am Parkplatz sein?",
          a: "Nutzen Sie unseren Reiseplaner – er zeigt Ihnen genau, wann Sie losfahren sollten, damit Sie entspannt ankommen.",
        },
        findParking: {
          q: "Wie finde ich den Parkplatz?",
          a: "Bei der Reservierung erhalten Sie eine genaue Adresse und Anfahrtsbeschreibung. Bei Fragen rufen Sie uns einfach an.",
        },
        arriveLate: {
          q: "Was passiert, wenn ich zu spät ankomme?",
          a: "Rufen Sie uns an. Unser Shuttle wartet auf Sie und bringt Sie so schnell wie möglich zum Terminal.",
        },
        shuttleFrequency: {
          q: "Wie oft fährt der Shuttle?",
          a: "Der Shuttle fährt nach Bedarf – wir passen uns Ihren Zeiten an. Kein starrer Fahrplan.",
        },
        luggageSpace: {
          q: "Ist Platz für mein Gepäck?",
          a: "Ja, unser Shuttle hat genügend Platz für normales Reisegepäck. Bei Sperrgepäck informieren Sie uns bitte vorher.",
        },
        carSafe: {
          q: "Ist mein Auto sicher?",
          a: "Ja. Unser Parkplatz ist eingezäunt und beleuchtet. Sie können entspannt reisen.",
        },
        flightDelay: {
          q: "Was passiert, wenn mein Flug Verspätung hat?",
          a: "Kein Problem. Unser Shuttle fährt 24/7. Rufen Sie uns an, wenn Sie landen – wir holen Sie ab.",
        },
        returnChange: {
          q: "Was ist, wenn sich meine Rückreise ändert?",
          a: "Kontaktieren Sie uns einfach. Wir passen uns Ihren neuen Zeiten an.",
        },
        howPickup: {
          q: "Wie funktioniert die Abholung?",
          a: "Nach der Landung rufen Sie uns an oder schreiben eine WhatsApp. Wir holen Sie am Terminal ab und bringen Sie zu Ihrem Auto.",
        },
        returnDuration: {
          q: "Wie lange dauert die Rückfahrt?",
          a: "Die Shuttle-Fahrt zum Parkplatz dauert ca. 5 Minuten.",
        },
        howToPay: {
          q: "Wie bezahle ich?",
          a: "Sie bezahlen bei der Abholung Ihres Autos – bar oder nach Absprache.",
        },
      },
      moreQuestions: "Noch Fragen?",
      helpText: "Wir helfen Ihnen gerne persönlich weiter.",
    },

    // Service Detail Pages
    serviceDetail: {
      planTrip: "Jetzt Reise planen",
      requestPrice: "Preis anfragen",
      contact: "Kontakt",
      whatToExpect: "Was Sie erwarten können",
      faqTitle: "Häufige Fragen",
      readyForParking: "Bereit für entspanntes Parken?",
      otherOptions: "Weitere Optionen",
      parkingOptions: "Unsere Parkoptionen",

      // Outdoor parking
      outdoor: {
        badge: "Außenstellplatz",
        title: "Günstig parken am Flughafen Nürnberg",
        description: "Unser Außenstellplatz bietet Ihnen die wirtschaftlichste Parkmöglichkeit direkt am Flughafen. Sicher, beleuchtet und mit kostenlosem Shuttle zum Terminal.",
        price: "Ab 6,90€/Tag",
        keyWithYou: "Schlüssel bei Ihnen",
        shuttle247: "24/7 Shuttle",
        faqSectionTitle: "Häufige Fragen zum Außenstellplatz",
        ctaTitle: "Bereit für entspanntes Parken?",
        ctaSubtitle: "Planen Sie Ihre Reise und fragen Sie Ihren Außenstellplatz an.",
        features: {
          fenced: { title: "Eingezäuntes Gelände", description: "Komplett umzäuntes Areal für maximale Sicherheit Ihres Fahrzeugs." },
          camera: { title: "Videoüberwachung", description: "24/7 Kameraüberwachung für Ihre Sicherheit." },
          illuminated: { title: "Tag & Nacht beleuchtet", description: "Vollständige Beleuchtung auch in der Nacht." },
          key: { title: "Schlüssel bei Ihnen", description: "Sie parken selbst ein und behalten Ihren Schlüssel." },
          shuttle: { title: "24/7 Shuttle", description: "Kostenloser Transfer zum Terminal, rund um die Uhr." },
          value: { title: "Bestes Preis-Leistungs-Verhältnis", description: "Günstige Preise ohne versteckte Kosten." },
        },
        faq: {
          safe: { q: "Ist mein Auto draußen sicher?", a: "Ja. Das Gelände ist komplett eingezäunt, videoüberwacht und die ganze Nacht beleuchtet. Außerdem: Sie behalten Ihren Schlüssel – niemand kann Ihr Auto öffnen oder bewegen." },
          weather: { q: "Was ist bei schlechtem Wetter?", a: "Ihr Auto steht unter freiem Himmel. Für vollständigen Wetterschutz empfehlen wir unseren Hallenparkplatz. Aber: Nach der Reise steht Ihr Auto genau so da, wie Sie es abgestellt haben." },
          size: { q: "Wie groß darf mein Fahrzeug sein?", a: "PKW aller Größen sind willkommen. Für Fahrzeuge über 2 Meter Höhe (Transporter, Wohnmobile) kontaktieren Sie uns bitte vorher." },
        },
      },

      // Indoor parking
      indoor: {
        badge: "Hallenparkplatz",
        title: "Überdacht parken am Flughafen Nürnberg",
        description: "Maximaler Schutz für Ihr Fahrzeug. In unserer überdachten Halle ist Ihr Auto vor Witterung geschützt – egal ob Sonne, Regen oder Schnee.",
        price: "Ab 8,90€/Tag",
        weatherProtection: "Wetterschutz",
        shuttle247: "24/7 Shuttle",
        faqSectionTitle: "Häufige Fragen zum Hallenparkplatz",
        benefitsTitle: "Ihre Vorteile in der Halle",
        ctaTitle: "Premium-Schutz für Ihr Fahrzeug",
        ctaSubtitle: "Planen Sie Ihre Reise und sichern Sie sich einen Hallenplatz.",
        features: {
          weather: { title: "Wetterschutz", description: "Ihr Fahrzeug ist vor Regen, Hagel und Sonne geschützt." },
          noIce: { title: "Kein Eiskratzen", description: "Im Winter kein Eis auf der Scheibe – direkt losfahren." },
          camera: { title: "Videoüberwachung", description: "Rund um die Uhr Kameraüberwachung für maximale Sicherheit." },
          key: { title: "Schlüssel bei Ihnen", description: "Sie parken selbst ein und behalten Ihren Schlüssel." },
          shuttle: { title: "24/7 Shuttle", description: "Kostenloser Transfer zum Terminal, zu jeder Zeit." },
          premium: { title: "Premium-Schutz", description: "Ideal für längere Reisen und hochwertige Fahrzeuge." },
        },
        faq: {
          worthIt: { q: "Für wen lohnt sich der Hallenparkplatz?", a: "Besonders für Langzeitparker, bei längeren Reisen oder wenn Sie ein hochwertiges Fahrzeug haben. Im Winter sparen Sie sich das Eiskratzen." },
          height: { q: "Wie hoch ist die Halle?", a: "Die Durchfahrtshöhe beträgt 2 Meter. Für höhere Fahrzeuge empfehlen wir den Außenstellplatz." },
          spontaneous: { q: "Kann ich auch spontan einen Hallenplatz bekommen?", a: "Die Hallenplätze sind begrenzt. Wir empfehlen eine frühzeitige Anfrage, besonders in der Ferienzeit." },
        },
      },

      // Shuttle service
      shuttle: {
        badge: "Shuttle-Service",
        title: "Kostenloser Transfer zum Terminal",
        description: "Unser Shuttle-Service bringt Sie in nur 5 Minuten zum Flughafen Nürnberg – und holt Sie nach der Landung wieder ab. Rund um die Uhr, kostenlos.",
        freeIncluded: "Kostenlos inklusive",
        available247: "24/7 verfügbar",
        fiveMinTerminal: "5 Min. zum Terminal",
        howItWorks: "So funktioniert's",
        benefitsTitle: "Shuttle-Service Vorteile",
        faqSectionTitle: "Häufige Fragen zum Shuttle",
        ctaTitle: "Entspannt zum Flughafen",
        ctaSubtitle: "Planen Sie Ihre Reise und genießen Sie unseren kostenlosen Shuttle-Service.",
        steps: {
          arrive: { title: "Ankommen & Parken", description: "Sie fahren zu unserem Parkplatz und stellen Ihr Auto ab." },
          toTerminal: { title: "Shuttle zum Terminal", description: "Unser Shuttle bringt Sie in ca. 5 Minuten direkt zum Flughafen." },
          travel: { title: "Gute Reise!", description: "Genießen Sie Ihre Reise – Ihr Auto ist sicher bei uns." },
          return: { title: "Rückfahrt", description: "Nach der Landung rufen Sie uns an – wir holen Sie sofort ab." },
        },
        features: {
          allDay: { title: "Rund um die Uhr", description: "24/7 verfügbar – auch nachts und am Wochenende." },
          fiveMin: { title: "5 Minuten zum Terminal", description: "Kurze Fahrt direkt zum Flughafen Nürnberg." },
          luggage: { title: "Platz für Gepäck", description: "Genügend Platz für Ihr Reisegepäck." },
          groups: { title: "Für Gruppen", description: "Auch für Familien und größere Gruppen geeignet." },
          flexible: { title: "Flexible Abholung", description: "Rufen Sie an wenn Sie gelandet sind – wir kommen sofort." },
          whatsapp: { title: "WhatsApp Kontakt", description: "Erreichen Sie uns auch per WhatsApp für schnelle Kommunikation." },
        },
        faq: {
          pickup: { q: "Wie funktioniert die Abholung nach der Landung?", a: "Ganz einfach: Sie landen, holen Ihr Gepäck und rufen uns an oder schreiben per WhatsApp. Bis Sie draußen sind, wartet unser Shuttle bereits auf Sie." },
          delay: { q: "Was ist bei Flugverspätung?", a: "Kein Problem! Unser Shuttle fährt rund um die Uhr. Egal wann Sie landen – wir holen Sie ab." },
          cost: { q: "Muss ich den Shuttle extra bezahlen?", a: "Nein, der Shuttle-Service ist im Parkpreis enthalten – komplett kostenlos für Sie." },
        },
      },

      // Other services links
      otherOutdoor: { title: "Außenstellplatz", description: "Günstig parken ab 6,90€/Tag" },
      otherIndoor: { title: "Hallenparkplatz", description: "Überdacht & geschützt ab 8,90€/Tag" },
      otherIndoorAlt: { title: "Hallenparkplatz", description: "Überdacht ab 8,90€/Tag" },
      otherShuttle: { title: "Shuttle-Service", description: "24/7 kostenlos zum Terminal" },
    },

    // Legal Pages
    legal: {
      imprint: "Impressum",
      privacy: "Datenschutzerklärung",
      imprintTitle: "Impressum",
      privacyTitle: "Datenschutzerklärung",
    },

    // Impressum Page
    impressum: {
      title: "Impressum",
      accordingTo: "Angaben gemäß § 5 TMG",
      preFlightService: "Pre-Flight Parking Service",
      contactTitle: "Kontakt",
      phone: "Telefon",
      phoneAlt: "Telefon (alternativ)",
      email: "E-Mail",
      responsible: "Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV",
      euDispute: "EU-Streitschlichtung",
      euDisputeText: "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:",
      euDisputeLink: "https://ec.europa.eu/consumers/odr/",
      emailAbove: "Unsere E-Mail-Adresse finden Sie oben im Impressum.",
      consumerDispute: "Verbraucherstreitbeilegung/Universalschlichtungsstelle",
      consumerDisputeText: "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
      contentLiability: "Haftung für Inhalte",
      contentLiabilityText1: "Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.",
      contentLiabilityText2: "Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.",
      linkLiability: "Haftung für Links",
      linkLiabilityText: "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.",
      copyright: "Urheberrecht",
      copyrightText: "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.",
    },

    // Datenschutz Page
    datenschutz: {
      title: "Datenschutzerklärung",
      overview: "1. Datenschutz auf einen Blick",
      generalNotes: "Allgemeine Hinweise",
      generalNotesText: "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.",
      dataCollection: "Datenerfassung auf dieser Website",
      dataCollectionQuestion: "Wer ist verantwortlich für die Datenerfassung auf dieser Website?",
      dataCollectionAnswer: "Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.",
      hosting: "2. Hosting",
      hostingText: "Wir hosten die Inhalte unserer Website bei einem externen Dienstleister (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.",
      generalInfo: "3. Allgemeine Hinweise und Pflichtinformationen",
      privacyTitle: "Datenschutz",
      privacyText: "Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.",
      responsibleParty: "Hinweis zur verantwortlichen Stelle",
      responsiblePartyText: "Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:",
      dataCollectionOnSite: "4. Datenerfassung auf dieser Website",
      contactForm: "Kontaktformular und Buchungsanfragen",
      contactFormText1: "Wenn Sie uns per Kontaktformular oder Buchungsformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Formular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.",
      contactFormText2: "Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.",
      contactVia: "Anfrage per E-Mail, Telefon oder WhatsApp",
      contactViaText: "Wenn Sie uns per E-Mail, Telefon oder WhatsApp kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.",
      yourRights: "5. Ihre Rechte",
      yourRightsText1: "Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten.",
      yourRightsText2: "Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.",
      analytics: "6. Analyse-Tools und Werbung",
      analyticsText: "Diese Website nutzt möglicherweise Analyse-Tools zur statistischen Auswertung der Besucherzugriffe. Nähere Informationen dazu finden Sie in den folgenden Abschnitten.",
      googleAnalytics: "Google Analytics",
      googleAnalyticsText: "Diese Website kann Google Analytics nutzen, einen Webanalysedienst der Google LLC. Die Nutzung erfolgt auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.",
      ssl: "7. SSL- bzw. TLS-Verschlüsselung",
      sslText: "Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von \"http://\" auf \"https://\" wechselt.",
      lastUpdated: "Stand:",
    },
  },

  en: {
    // Navigation
    nav: {
      howItWorks: "How It Works",
      services: "Services",
      faq: "FAQ",
      contact: "Contact",
      planNow: "Plan Now",
    },

    // Hero Section
    hero: {
      badge: "Nuremberg Airport · NUE",
      title: "Your flight leaves tomorrow morning.",
      subtitle: "Do you know when to leave home?",
      description: "No more guesswork. Enter your flight time – we calculate exactly when you should leave home. Buffer time, shuttle, everything included.",
      keyFeature: "Your key stays with you – always.",
      cta: "Calculate Departure Time",
      ctaSubtext: "Free · No Registration",
      features: {
        shuttle: "24/7 Shuttle to Terminal",
        distance: "5 Minutes to Airport",
        security: "Guarded & Fenced",
      },
      trust: "Trusted by over",
      customers: "2,000+ Travelers",
      region: "from Nuremberg, Fürth, Erlangen and the region",
    },

    // Pre-Flight Planner
    planner: {
      title: "When should you leave?",
      subtitle: "Enter flight details, get your timeline.",
      flightDate: "Flight Date",
      flightTime: "Departure Time",
      origin: "Starting Point",
      persons: "Passengers",
      selectDate: "Select date",
      selectTime: "Select time",
      selectCity: "Select city",
      calculate: "Calculate Plan",
      person: "Person",
      personsLabel: "Passengers",
      resultTitle: "Your Airport Plan",
      departure: "Leave Home",
      parking: "Parking",
      arrive: "Arrive",
      shuttle: "Shuttle",
      terminal: "Terminal",
      keyStays: "Key stays with you",
      planReady: "Plan ready. Request parking spot?",
      whatsapp: "WhatsApp",
      newCalculation: "New Calculation",
    },

    // Why Different Section
    whyDifferent: {
      badge: "Why ParkExpress24?",
      title: "Your parking at Nuremberg Airport.",
      subtitle: "Different from the rest.",
      yourKey: "Your Key",
      yourKeyDesc: "You park yourself and lock. Nobody drives your car.",
      fiveMin: "5 Min",
      fiveMinDesc: "Shuttle around the clock. Direct to Nuremberg Airport.",
      secure: "24/7 Secure",
      secureDesc: "Fenced, camera surveillance, illuminated.",
      atNue: "At NUE",
      atNueDesc: "On-site at the airport. Direct contact persons.",
      comparison: "The Difference",
      us: "Us",
      others: "Others",
      comparisonItems: {
        keyWithCustomer: "Key stays with customer",
        shuttle247: "24/7 Shuttle",
        directContact: "Direct contact persons",
        clearPrices: "Transparent pricing",
      },
      questions: "Questions?",
      call: "Call",
    },

    // Trust Indicators
    trust: {
      badge: "What Our Customers Say",
      title: "Real Experiences at Nuremberg Airport",
      customers: "Customers",
      shuttle: "Shuttle",
      rating: "Rating",
      terminal: "Terminal",
      footer: "Over 2,000 satisfied customers at Nuremberg Airport",
    },

    // Not For Everyone Section
    notForEveryone: {
      title: "Honestly: Not for everyone.",
      subtitle: "Is ParkExpress24 right for you?",
      no: "No",
      yes: "Yes",
      notForYou: {
        dropOff: "Someone is dropping you at the airport",
        preferTaxi: "You prefer taxi or public transport",
        tallVehicle: "Vehicle taller than 2m",
        otherAirport: "Flying from a different airport than NUE",
      },
      forYou: {
        driveSelf: "You're driving to NUE yourself",
        securePark: "Secure parking for your trip",
        keepKey: "Prefer to keep your key",
        clearPlan: "Clear plan for your journey",
      },
    },

    // What Happens If Section
    whatHappensIf: {
      badge: "Your Questions",
      title: "What happens if...?",
      subtitle: "Honest answers to your concerns.",
      questions: {
        giveKey: {
          title: "Hand over keys?",
          answer: "Never! You keep your key. Park yourself, lock up. Nobody drives your car.",
        },
        flightDelay: {
          title: "Flight delay?",
          answer: "No problem. Shuttle runs 24/7. We pick you up whenever you land.",
        },
        earlyDeparture: {
          title: "Early departure?",
          answer: "Even at night. Shuttle runs continuously. Just notify us on arrival.",
        },
        carSafe: {
          title: "Is my car safe?",
          answer: "Fenced premises, camera surveillance, illuminated. Your car is secure.",
        },
        notFound: {
          title: "Can't find it?",
          answer: "GPS coordinates with booking. Direct phone number for questions.",
        },
        muchLuggage: {
          title: "Lots of luggage?",
          answer: "Shuttle stops right at your car. Luggage stays with you to the terminal.",
        },
      },
      moreQuestions: "More questions?",
    },

    // Request Section
    request: {
      badge: "Plan ready. Secure your spot now.",
      title: "Request Parking",
      subtitle: "Non-binding. Price & availability to follow.",
      parkingType: "Parking Type",
      outdoor: "Outdoor",
      indoor: "Indoor",
      from: "from",
      arrival: "Arrival",
      departure: "Return",
      phone: "Phone",
      yourNumber: "Your number",
      submit: "Request Parking",
      nonBinding: "Non-binding. Price will be confirmed.",
      success: "Request sent!",
      successMessage: "We'll get back to you shortly.",
      newRequest: "New Request",
    },

    // Contact Section
    contact: {
      title: "Questions? We're here to help.",
      subtitle: "Contact us – we respond quickly and straightforwardly.",
      orEmail: "Or write to us:",
      pageTitle: "Contact",
      pageSubtitle: "Questions? Reservation? We're happy to help.",
      call: "Call",
      whatsapp: "WhatsApp",
      phone: "Phone",
      email: "Email",
      availability: "Availability",
      shuttleAvailability: "Shuttle: 24/7",
      location: "Location",
      locationValue: "Right at Nuremberg Airport (NUE)",
      ctaTitle: "Ready for your trip?",
      ctaSubtitle: "Plan your journey to the airport.",
      ctaButton: "Plan your trip now",
    },

    // Footer
    footer: {
      tagline: "Parking at Nuremberg Airport. Key stays with you. 24/7 Shuttle.",
      location: "Right at Nuremberg Airport",
      call: "Call",
      email: "Email",
      navigation: "Navigation",
      legal: "Legal",
      howItWorks: "How It Works",
      services: "Services",
      faq: "FAQ",
      contact: "Contact",
      imprint: "Imprint",
      privacy: "Privacy Policy",
      alsoFor: "Also for travelers from:",
      copyright: "ParkExpress24",
      airport: "Nuremberg Airport (NUE)",
    },

    // Common
    common: {
      learnMore: "Learn More",
      bookNow: "Book Now",
      close: "Close",
      back: "Back",
      next: "Next",
      min: "min.",
    },

    // Services Page
    services: {
      pageTitle: "Our Services",
      pageSubtitle: "Everything for a relaxed journey to Nuremberg Airport. Choose your parking option.",
      keyUsp: "With all options: Your key stays with you",
      outdoor: {
        title: "Outdoor Parking",
        shortTitle: "Outdoor",
        price: "from €6.90/day",
        description: "Economical open-air parking option. Ideal for budget-conscious travelers.",
        longDescription: "Our outdoor parking offers you an affordable and secure parking option right at Nuremberg Airport. The premises are fenced, illuminated, and monitored around the clock.",
        features: [
          "Fenced, illuminated premises",
          "24/7 shuttle service included",
          "Great value for money",
          "Suitable for all vehicle sizes",
          "Key stays with you",
        ],
      },
      indoor: {
        title: "Indoor Parking",
        shortTitle: "Indoor",
        price: "from €8.90/day",
        description: "Covered parking for extra protection. Ideal for longer trips or sensitive vehicles.",
        longDescription: "Your vehicle is safe and protected in our covered hall. Perfect for long-term parkers and anyone wanting maximum protection for their vehicle.",
        features: [
          "Complete weather protection",
          "24/7 shuttle service included",
          "Ideal for long-term parking",
          "Video surveillance",
          "Key stays with you",
        ],
      },
      shuttle: {
        title: "Shuttle Service",
        shortTitle: "Shuttle",
        price: "Free",
        description: "Our transfer takes you directly to the terminal and picks you up after landing.",
        longDescription: "Our free shuttle service runs around the clock. You'll be at the terminal in just 5 minutes. After landing, call us – we'll pick you up immediately.",
        features: [
          "Available around the clock (24/7)",
          "Approx. 5 minutes to terminal",
          "Room for your luggage",
          "Flexible pickup after landing",
          "Personal service",
        ],
      },
      trustStats: {
        atNue: "Right at NUE",
        atNueDesc: "Nuremberg Airport",
        fiveMin: "5 Minutes",
        fiveMinDesc: "to terminal",
        guarded: "24/7 guarded",
        guardedDesc: "Video surveillance",
        yourKey: "Your Key",
        yourKeyDesc: "stays with you",
      },
      ctaTitle: "Ready for a stress-free journey?",
      ctaSubtitle: "First calculate your airport plan, then request your parking spot.",
      ctaPrimary: "Plan your trip now",
      ctaSecondary: "Get in touch",
    },

    // FAQ Page
    faqPage: {
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about parking at Nuremberg Airport.",
      categories: {
        beforeTrip: "Before Your Trip",
        travelDay: "On Travel Day",
        duringTrip: "During Your Trip",
        afterReturn: "After Your Return",
      },
      questions: {
        howToReserve: {
          q: "How do I reserve a parking spot?",
          a: "Call us or send a WhatsApp. We confirm your reservation personally – no complicated online forms.",
        },
        payInAdvance: {
          q: "Do I need to pay in advance?",
          a: "No. You pay when you pick up your car after returning.",
        },
        changeReservation: {
          q: "Can I change or cancel my reservation?",
          a: "Yes, simply contact us. We're flexible and will find a solution.",
        },
        whenToArrive: {
          q: "When should I arrive at the parking lot?",
          a: "Use our trip planner – it shows you exactly when to leave so you arrive relaxed.",
        },
        findParking: {
          q: "How do I find the parking lot?",
          a: "With your reservation you'll receive an exact address and directions. Call us if you have any questions.",
        },
        arriveLate: {
          q: "What happens if I arrive late?",
          a: "Call us. Our shuttle will wait for you and take you to the terminal as quickly as possible.",
        },
        shuttleFrequency: {
          q: "How often does the shuttle run?",
          a: "The shuttle runs on demand – we adapt to your schedule. No fixed timetable.",
        },
        luggageSpace: {
          q: "Is there room for my luggage?",
          a: "Yes, our shuttle has plenty of space for normal travel luggage. Please let us know in advance about oversized items.",
        },
        carSafe: {
          q: "Is my car safe?",
          a: "Yes. Our parking lot is fenced and illuminated. You can travel with peace of mind.",
        },
        flightDelay: {
          q: "What happens if my flight is delayed?",
          a: "No problem. Our shuttle runs 24/7. Call us when you land – we'll pick you up.",
        },
        returnChange: {
          q: "What if my return plans change?",
          a: "Simply contact us. We adapt to your new schedule.",
        },
        howPickup: {
          q: "How does pickup work?",
          a: "After landing, call us or send a WhatsApp. We'll pick you up at the terminal and take you to your car.",
        },
        returnDuration: {
          q: "How long does the return journey take?",
          a: "The shuttle ride to the parking lot takes about 5 minutes.",
        },
        howToPay: {
          q: "How do I pay?",
          a: "You pay when picking up your car – cash or by arrangement.",
        },
      },
      moreQuestions: "More questions?",
      helpText: "We're happy to help you personally.",
    },

    // Legal Pages
    legal: {
      imprint: "Imprint",
      privacy: "Privacy Policy",
      imprintTitle: "Imprint",
      privacyTitle: "Privacy Policy",
    },
  },
} as const;

export type TranslationKey = keyof typeof translations.de;
