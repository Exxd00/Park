// ===========================================
// نظام SEO/AEO الشامل - Complete Market Coverage
// ===========================================

// المدن - Cities (25+ cities in Nuremberg metropolitan area)
export const cities = [
  // المدن الرئيسية - Main Cities
  { slug: "nuernberg", name: "Nürnberg", region: "Stadt", population: 520000, driveTime: 15, isMain: true },
  { slug: "fuerth", name: "Fürth", region: "Stadt", population: 130000, driveTime: 20, isMain: true },
  { slug: "erlangen", name: "Erlangen", region: "Stadt", population: 115000, driveTime: 25, isMain: true },
  { slug: "schwabach", name: "Schwabach", region: "Stadt", population: 42000, driveTime: 25, isMain: true },

  // المدن الثانوية - Secondary Cities
  { slug: "zirndorf", name: "Zirndorf", region: "Landkreis Fürth", population: 26000, driveTime: 22, isMain: false },
  { slug: "lauf", name: "Lauf an der Pegnitz", region: "Nürnberger Land", population: 27000, driveTime: 25, isMain: false },
  { slug: "roth", name: "Roth", region: "Landkreis Roth", population: 25000, driveTime: 30, isMain: false },
  { slug: "forchheim", name: "Forchheim", region: "Landkreis Forchheim", population: 32000, driveTime: 35, isMain: false },
  { slug: "ansbach", name: "Ansbach", region: "Stadt", population: 42000, driveTime: 45, isMain: false },
  { slug: "herzogenaurach", name: "Herzogenaurach", region: "Landkreis Erlangen-Höchstadt", population: 24000, driveTime: 30, isMain: false },
  { slug: "neumarkt", name: "Neumarkt i.d.OPf.", region: "Landkreis Neumarkt", population: 40000, driveTime: 40, isMain: false },
  { slug: "wendelstein", name: "Wendelstein", region: "Landkreis Roth", population: 16000, driveTime: 20, isMain: false },
  { slug: "stein", name: "Stein", region: "Landkreis Fürth", population: 14000, driveTime: 18, isMain: false },
  { slug: "oberasbach", name: "Oberasbach", region: "Landkreis Fürth", population: 18000, driveTime: 20, isMain: false },
  { slug: "langenzenn", name: "Langenzenn", region: "Landkreis Fürth", population: 11000, driveTime: 28, isMain: false },
  { slug: "cadolzburg", name: "Cadolzburg", region: "Landkreis Fürth", population: 11000, driveTime: 25, isMain: false },
  { slug: "burgthann", name: "Burgthann", region: "Nürnberger Land", population: 12000, driveTime: 22, isMain: false },
  { slug: "altdorf", name: "Altdorf bei Nürnberg", region: "Nürnberger Land", population: 15000, driveTime: 25, isMain: false },
  { slug: "feucht", name: "Feucht", region: "Nürnberger Land", population: 14000, driveTime: 18, isMain: false },
  { slug: "heroldsberg", name: "Heroldsberg", region: "Landkreis Erlangen-Höchstadt", population: 8000, driveTime: 15, isMain: false },
  { slug: "eckental", name: "Eckental", region: "Landkreis Erlangen-Höchstadt", population: 14000, driveTime: 20, isMain: false },
  { slug: "baiersdorf", name: "Baiersdorf", region: "Landkreis Erlangen-Höchstadt", population: 8000, driveTime: 22, isMain: false },
  { slug: "allersberg", name: "Allersberg", region: "Landkreis Roth", population: 8000, driveTime: 28, isMain: false },
  { slug: "georgensgmuend", name: "Georgensgmünd", region: "Landkreis Roth", population: 7000, driveTime: 32, isMain: false },
  { slug: "hilpoltstein", name: "Hilpoltstein", region: "Landkreis Roth", population: 14000, driveTime: 35, isMain: false },
];

// المدة - Parking Durations
export const durations = [
  { slug: "1-tag", name: "1 Tag", days: 1, priceFrom: 4.50, description: "Perfekt für Tagesausflüge und kurze Geschäftsreisen" },
  { slug: "2-3-tage", name: "2-3 Tage", days: 2.5, priceFrom: 9, description: "Ideal für ein verlängertes Wochenende" },
  { slug: "1-woche", name: "1 Woche", days: 7, priceFrom: 29, description: "Der Klassiker für den Urlaubsflug" },
  { slug: "2-wochen", name: "2 Wochen", days: 14, priceFrom: 49, description: "Für ausgedehnte Urlaube und längere Reisen" },
  { slug: "3-wochen", name: "3 Wochen", days: 21, priceFrom: 69, description: "Langzeiturlaub ohne Parksorgen" },
  { slug: "1-monat", name: "1 Monat", days: 30, priceFrom: 89, description: "Maximale Flexibilität für Langzeitreisende" },
  { slug: "langzeit", name: "Langzeitparken", days: 60, priceFrom: 149, description: "Für Auslandsaufenthalte und berufliche Reisen" },
];

// المواسم - Seasons & Holidays
export const seasons = [
  { slug: "weihnachten", name: "Weihnachten", months: [11, 12], icon: "🎄", demand: "sehr hoch", tip: "Früh buchen - begrenzte Plätze!" },
  { slug: "silvester", name: "Silvester & Neujahr", months: [12, 1], icon: "🎆", demand: "sehr hoch", tip: "Silvesterflüge sind sehr beliebt" },
  { slug: "ostern", name: "Ostern", months: [3, 4], icon: "🐣", demand: "hoch", tip: "Osterferien = Familienzeit" },
  { slug: "pfingsten", name: "Pfingsten", months: [5, 6], icon: "🌸", demand: "hoch", tip: "Beliebte Kurzurlaubszeit" },
  { slug: "sommerferien", name: "Sommerferien", months: [7, 8, 9], icon: "☀️", demand: "sehr hoch", tip: "Hauptreisezeit - rechtzeitig reservieren" },
  { slug: "herbstferien", name: "Herbstferien", months: [10, 11], icon: "🍂", demand: "mittel", tip: "Ideal für Städtereisen" },
  { slug: "fasching", name: "Fasching & Karneval", months: [2], icon: "🎭", demand: "mittel", tip: "Flucht vor dem Fasching?" },
  { slug: "brueckentage", name: "Brückentage", months: [5, 6, 10], icon: "🌉", demand: "hoch", tip: "Clever Urlaub nehmen" },
];

// الخطوط الجوية - Airlines flying from NUE
export const airlines = [
  { slug: "ryanair", name: "Ryanair", type: "Low-Cost", destinations: ["Mallorca", "Barcelona", "London", "Dublin"], popular: true },
  { slug: "eurowings", name: "Eurowings", type: "Low-Cost", destinations: ["Mallorca", "Antalya", "Kreta", "Split"], popular: true },
  { slug: "lufthansa", name: "Lufthansa", type: "Premium", destinations: ["Frankfurt", "München", "Wien", "Zürich"], popular: true },
  { slug: "corendon", name: "Corendon Airlines", type: "Charter", destinations: ["Antalya", "Hurghada", "Bodrum"], popular: true },
  { slug: "sundair", name: "SunExpress", type: "Charter", destinations: ["Antalya", "Izmir", "Hurghada", "Rhodos"], popular: true },
  { slug: "turkish-airlines", name: "Turkish Airlines", type: "Premium", destinations: ["Istanbul", "Ankara"], popular: false },
  { slug: "wizz-air", name: "Wizz Air", type: "Low-Cost", destinations: ["Budapest", "Bukarest", "Warschau"], popular: false },
  { slug: "aegean", name: "Aegean Airlines", type: "Premium", destinations: ["Athen", "Thessaloniki"], popular: false },
  { slug: "tui-fly", name: "TUI fly", type: "Charter", destinations: ["Mallorca", "Kanaren", "Ägypten", "Türkei"], popular: true },
  { slug: "condor", name: "Condor", type: "Charter", destinations: ["Kanaren", "Karibik", "Ägypten", "Malediven"], popular: true },
];

// الوجهات - Popular Destinations from NUE
export const destinations = [
  // إسبانيا - Spain
  { slug: "mallorca", name: "Mallorca", country: "Spanien", flightTime: "2h", season: "Ganzjährig", popular: true },
  { slug: "barcelona", name: "Barcelona", country: "Spanien", flightTime: "2h", season: "Ganzjährig", popular: true },
  { slug: "ibiza", name: "Ibiza", country: "Spanien", flightTime: "2h", season: "Mai-Okt", popular: true },
  { slug: "kanaren", name: "Kanarische Inseln", country: "Spanien", flightTime: "4h", season: "Ganzjährig", popular: true },
  { slug: "costa-brava", name: "Costa Brava", country: "Spanien", flightTime: "2h", season: "Mai-Okt", popular: false },

  // تركيا - Turkey
  { slug: "antalya", name: "Antalya", country: "Türkei", flightTime: "3h", season: "Apr-Nov", popular: true },
  { slug: "istanbul", name: "Istanbul", country: "Türkei", flightTime: "2.5h", season: "Ganzjährig", popular: true },
  { slug: "bodrum", name: "Bodrum", country: "Türkei", flightTime: "3h", season: "Mai-Okt", popular: false },
  { slug: "izmir", name: "Izmir", country: "Türkei", flightTime: "3h", season: "Apr-Nov", popular: false },

  // اليونان - Greece
  { slug: "kreta", name: "Kreta", country: "Griechenland", flightTime: "3h", season: "Apr-Okt", popular: true },
  { slug: "rhodos", name: "Rhodos", country: "Griechenland", flightTime: "3h", season: "Apr-Okt", popular: true },
  { slug: "korfu", name: "Korfu", country: "Griechenland", flightTime: "2h", season: "Mai-Okt", popular: false },
  { slug: "athen", name: "Athen", country: "Griechenland", flightTime: "2.5h", season: "Ganzjährig", popular: true },

  // إيطاليا - Italy
  { slug: "rom", name: "Rom", country: "Italien", flightTime: "1.5h", season: "Ganzjährig", popular: true },
  { slug: "mailand", name: "Mailand", country: "Italien", flightTime: "1h", season: "Ganzjährig", popular: true },
  { slug: "sardinien", name: "Sardinien", country: "Italien", flightTime: "2h", season: "Mai-Okt", popular: false },

  // مصر - Egypt
  { slug: "hurghada", name: "Hurghada", country: "Ägypten", flightTime: "4.5h", season: "Ganzjährig", popular: true },
  { slug: "sharm-el-sheikh", name: "Sharm el-Sheikh", country: "Ägypten", flightTime: "4h", season: "Ganzjährig", popular: false },

  // أخرى - Others
  { slug: "london", name: "London", country: "UK", flightTime: "2h", season: "Ganzjährig", popular: true },
  { slug: "paris", name: "Paris", country: "Frankreich", flightTime: "1.5h", season: "Ganzjährig", popular: true },
  { slug: "amsterdam", name: "Amsterdam", country: "Niederlande", flightTime: "1.5h", season: "Ganzjährig", popular: true },
  { slug: "dubai", name: "Dubai", country: "VAE", flightTime: "6h", season: "Okt-Apr", popular: true },
  { slug: "malediven", name: "Malediven", country: "Malediven", flightTime: "10h", season: "Nov-Apr", popular: false },
];

// أنواع السيارات - Vehicle Types
export const vehicleTypes = [
  { slug: "pkw", name: "PKW / Limousine", icon: "🚗", description: "Standard-Fahrzeuge bis 5m Länge", surcharge: 0 },
  { slug: "suv", name: "SUV / Geländewagen", icon: "🚙", description: "Sport Utility Vehicles und Crossover", surcharge: 0 },
  { slug: "kombi", name: "Kombi / Familienvan", icon: "🚐", description: "Familienautos und Kombis", surcharge: 0 },
  { slug: "van", name: "Transporter / Van", icon: "🚌", description: "Kleinbusse und Transporter", surcharge: 5 },
  { slug: "elektro", name: "Elektroauto", icon: "⚡", description: "E-Autos - Lademöglichkeit auf Anfrage", surcharge: 0 },
  { slug: "hybrid", name: "Hybrid-Fahrzeug", icon: "🔋", description: "Plug-in Hybrid und Hybrid", surcharge: 0 },
  { slug: "motorrad", name: "Motorrad", icon: "🏍️", description: "Motorräder und Roller", surcharge: -2 },
  { slug: "wohnmobil", name: "Wohnmobil", icon: "🚐", description: "Camper und Wohnmobile - Sonderstellplatz", surcharge: 10 },
];

// أوقات السفر - Travel Times
export const travelTimes = [
  { slug: "frueh-morgens", name: "Früh morgens", timeRange: "04:00 - 07:00", tip: "Weniger Verkehr, aber früh aufstehen!", popular: true },
  { slug: "morgens", name: "Morgens", timeRange: "07:00 - 10:00", tip: "Berufsverkehr beachten - mehr Zeit einplanen", popular: true },
  { slug: "mittags", name: "Mittags", timeRange: "10:00 - 14:00", tip: "Entspannte Anreise ohne Zeitdruck", popular: false },
  { slug: "nachmittags", name: "Nachmittags", timeRange: "14:00 - 18:00", tip: "Gute Zeit für Abendflüge", popular: true },
  { slug: "abends", name: "Abends", timeRange: "18:00 - 22:00", tip: "Nach der Arbeit zum Flughafen", popular: true },
  { slug: "nachts", name: "Nachts", timeRange: "22:00 - 04:00", tip: "24/7 Shuttle verfügbar!", popular: false },
];

// حالات الاستخدام - Use Cases
export const useCases = [
  {
    slug: "geschaeftsreise",
    name: "Geschäftsreise",
    icon: "💼",
    description: "Professioneller Service für Business-Reisende",
    benefits: ["Pünktlicher Shuttle", "Schlüssel behalten", "Flexibler Service", "Rechnung für Firma"],
    targetAudience: "Geschäftsleute und Vielreisende"
  },
  {
    slug: "familienurlaub",
    name: "Familienurlaub",
    icon: "👨‍👩‍👧‍👦",
    description: "Stressfreier Start in den Familienurlaub",
    benefits: ["Platz für Kindersitze", "Gepäckhilfe", "Kindgerechter Transfer", "Faire Familienpreise"],
    targetAudience: "Familien mit Kindern"
  },
  {
    slug: "kreuzfahrt",
    name: "Kreuzfahrt",
    icon: "🚢",
    description: "Langzeitparken für Kreuzfahrt-Urlauber",
    benefits: ["2-3 Wochen sicher parken", "Gepäckservice", "Flexible Rückholung", "Langzeitrabatte"],
    targetAudience: "Kreuzfahrt-Reisende"
  },
  {
    slug: "staedtetrip",
    name: "Städtetrip",
    icon: "🏙️",
    description: "Kurztrip ohne Parkplatzsuche am Flughafen",
    benefits: ["Schneller Check-in", "Günstige Kurzzeittarife", "Zentrale Lage", "Spontan buchbar"],
    targetAudience: "Städtereisende und Wochenend-Urlauber"
  },
  {
    slug: "gruppenreise",
    name: "Gruppenreise",
    icon: "👥",
    description: "Gemeinsam parken und fliegen",
    benefits: ["Gruppenrabatte", "Koordinierter Shuttle", "Mehrere Fahrzeuge", "Ein Ansprechpartner"],
    targetAudience: "Vereine, Gruppen und Freunde"
  },
  {
    slug: "alleinreisend",
    name: "Alleinreisend",
    icon: "🧳",
    description: "Sicher und bequem als Solo-Reisender",
    benefits: ["Sicherer Parkplatz", "Kein Schlüssel abgeben", "24/7 Erreichbarkeit", "Günstiger Single-Tarif"],
    targetAudience: "Alleinreisende und Singles"
  },
  {
    slug: "spontanreise",
    name: "Spontanreise",
    icon: "✈️",
    description: "Last-Minute gebucht? Kein Problem!",
    benefits: ["Kurzfristig buchbar", "Flexible Stornierung", "Sofort-Bestätigung", "WhatsApp-Buchung"],
    targetAudience: "Spontane und Last-Minute Reisende"
  },
  {
    slug: "vielreisende",
    name: "Vielreisende",
    icon: "🌍",
    description: "Stammkunden-Vorteile für Frequent Flyer",
    benefits: ["Treueprogramm", "Bevorzugte Behandlung", "Sonderkonditionen", "Persönlicher Service"],
    targetAudience: "Frequent Flyer und Geschäftsreisende"
  },
];

// المقارنات - Comparisons
export const comparisons = [
  {
    slug: "vs-parkhaus-flughafen",
    name: "vs. Parkhaus Flughafen",
    competitor: "Flughafen Parkhaus",
    ourAdvantages: ["Bis zu 50% günstiger", "Schlüssel bleibt bei Ihnen", "Persönlicher Service", "Keine langen Wege"],
    competitorAdvantages: ["Direkt am Terminal", "Keine Shuttle-Fahrt"],
    priceComparison: { us: "6,90€/Tag", them: "bis zu 25€/Tag" }
  },
  {
    slug: "vs-taxi",
    name: "vs. Taxi zum Flughafen",
    competitor: "Taxi",
    ourAdvantages: ["Keine Wartezeit bei Rückkehr", "Auto steht bereit", "Günstiger ab 3 Tagen", "Gepäck immer dabei"],
    competitorAdvantages: ["Kein eigenes Auto nötig", "Tür-zu-Tür"],
    priceComparison: { us: "6,90€/Tag", them: "40-80€ pro Fahrt" }
  },
  {
    slug: "vs-bahn",
    name: "vs. Bahn zum Flughafen",
    competitor: "S-Bahn / U-Bahn",
    ourAdvantages: ["Kein Gepäckschleppen", "Flexiblere Zeiten", "Bequemer mit Kindern", "Direkt zum Terminal"],
    competitorAdvantages: ["Günstig", "Keine Parkgebühren", "Umweltfreundlich"],
    priceComparison: { us: "6,90€/Tag", them: "5-15€ pro Person" }
  },
  {
    slug: "vs-freunde-familie",
    name: "vs. Bringen lassen",
    competitor: "Von Freunden/Familie bringen lassen",
    ourAdvantages: ["Niemand muss früh aufstehen", "Unabhängig", "Keine Verpflichtungen", "Auto steht bei Rückkehr bereit"],
    competitorAdvantages: ["Kostenlos", "Persönliche Verabschiedung"],
    priceComparison: { us: "6,90€/Tag", them: "Kostenlos (aber Gefälligkeit)" }
  },
  {
    slug: "vs-andere-parkplaetze",
    name: "vs. Andere Parkplätze",
    competitor: "Andere Flughafen-Parkplätze",
    ourAdvantages: ["Schlüssel behalten", "24/7 Shuttle", "Persönlicher Service", "Faire Preise"],
    competitorAdvantages: ["Verschiedene Anbieter zur Wahl"],
    priceComparison: { us: "6,90€/Tag", them: "4-12€/Tag" }
  },
];

// الميزات - Features
export const features = [
  {
    slug: "schluessel-behalten",
    name: "Schlüssel behalten",
    icon: "🔑",
    headline: "Ihr Schlüssel bleibt bei Ihnen",
    description: "Anders als bei vielen Parkplätzen geben Sie Ihren Schlüssel nicht ab. Maximale Sicherheit für Ihr Fahrzeug.",
    benefits: ["Keine Fremden im Auto", "Kein Risiko durch Dritte", "Versicherungsschutz bleibt bestehen", "Wertsachen können im Auto bleiben"],
    faq: [
      { q: "Warum ist das wichtig?", a: "Bei Schlüsselabgabe haben Dritte Zugang zu Ihrem Auto. Wir parken Ihr Auto nicht um - es bleibt genau dort stehen, wo Sie es abstellen." },
      { q: "Was ist mit Wertsachen?", a: "Da niemand anders Zugang hat, können Sie Wertsachen im verschlossenen Auto lassen." }
    ]
  },
  {
    slug: "24-7-shuttle",
    name: "24/7 Shuttle Service",
    icon: "🚐",
    headline: "Rund um die Uhr zum Terminal",
    description: "Unser kostenloser Shuttle bringt Sie 24 Stunden am Tag, 7 Tage die Woche zum Flughafen - auch bei Nachtflügen.",
    benefits: ["Kostenloser Transfer", "Nur 5 Minuten Fahrt", "Auch nachts verfügbar", "Pünktlich und zuverlässig"],
    faq: [
      { q: "Wie funktioniert der Shuttle?", a: "Nach dem Parken rufen Sie uns kurz an, und wir holen Sie innerhalb von 5 Minuten ab." },
      { q: "Was bei Verspätung?", a: "Wir tracken Ihren Flug und passen die Abholung automatisch an." }
    ]
  },
  {
    slug: "5-minuten-terminal",
    name: "5 Min zum Terminal",
    icon: "⏱️",
    headline: "In 5 Minuten am Terminal",
    description: "Direkte Lage am Flughafen Nürnberg. Vom Parkplatz bis zum Check-in in nur 5 Minuten.",
    benefits: ["Kürzeste Transferzeit", "Kein Stress", "Mehr Zeit am Gate", "Ideal bei knappen Umsteigezeiten"],
    faq: [
      { q: "Wie weit ist der Parkplatz entfernt?", a: "Nur 2 km vom Terminal - 5 Minuten Shuttle-Fahrt." }
    ]
  },
  {
    slug: "sichere-parkplaetze",
    name: "Sichere Parkplätze",
    icon: "🛡️",
    headline: "Maximale Sicherheit für Ihr Auto",
    description: "Umzäuntes Gelände mit Videoüberwachung und regelmäßigen Kontrollgängen.",
    benefits: ["Videoüberwachung 24/7", "Umzäuntes Gelände", "Regelmäßige Kontrollen", "Versicherter Parkplatz"],
    faq: [
      { q: "Ist mein Auto versichert?", a: "Ja, alle Stellplätze sind versichert. Zusätzlich bleibt Ihre eigene Versicherung bestehen, da Sie den Schlüssel behalten." }
    ]
  },
  {
    slug: "hallenparkplatz",
    name: "Hallenparkplatz",
    icon: "🏢",
    headline: "Überdacht und geschützt parken",
    description: "Schützen Sie Ihr Auto vor Wetter und neugierigen Blicken in unserer sicheren Halle.",
    benefits: ["Wetterschutz", "Extra Sicherheit", "Ideal für hochwertige Fahrzeuge", "Kein Vogelkot oder Baumharz"],
    faq: [
      { q: "Für wen ist die Halle geeignet?", a: "Ideal für alle, die ihr Auto bei längeren Reisen besonders schützen möchten - oder bei Fahrzeugen, die nicht in der Sonne stehen sollten." }
    ]
  },
  {
    slug: "flexible-buchung",
    name: "Flexible Buchung",
    icon: "📅",
    headline: "Buchen Sie, wie es Ihnen passt",
    description: "Online, telefonisch oder per WhatsApp - buchen Sie Ihren Parkplatz auf dem Weg, der Ihnen am besten passt.",
    benefits: ["Online-Buchung 24/7", "WhatsApp-Buchung", "Telefonische Reservierung", "Kurzfristige Buchungen möglich"],
    faq: [
      { q: "Wie kurzfristig kann ich buchen?", a: "Auch am selben Tag - rufen Sie einfach an oder schreiben Sie uns auf WhatsApp." }
    ]
  },
];

// الأسئلة الشائعة - FAQs (expanded for individual pages)
export const faqs = [
  // التسعير - Pricing
  {
    slug: "was-kostet-parken",
    category: "Preise",
    question: "Was kostet das Parken am Flughafen Nürnberg?",
    answer: "Unsere Preise starten ab 6,90€ pro Tag. Der überdachte Hallenparkplatz kostet ab 8,90€ pro Tag. Je länger Sie parken, desto günstiger wird der Tagespreis.",
    keywords: ["preis", "kosten", "günstig", "parken flughafen nürnberg kosten"]
  },
  {
    slug: "gibt-es-rabatte",
    category: "Preise",
    question: "Gibt es Rabatte für Langzeitparken?",
    answer: "Ja! Ab einer Woche Parkdauer erhalten Sie automatisch günstigere Tagespreise. Bei 2 Wochen oder länger wird es noch günstiger. Stammkunden profitieren von zusätzlichen Vorteilen.",
    keywords: ["rabatt", "langzeitparken", "günstig", "sparen"]
  },
  {
    slug: "wann-bezahlen",
    category: "Preise",
    question: "Wann muss ich bezahlen?",
    answer: "Die Bezahlung erfolgt bei Abholung Ihres Fahrzeugs. Sie können bar oder mit EC-Karte bezahlen. Bei Online-Buchung ist auch Vorkasse möglich.",
    keywords: ["bezahlung", "zahlung", "bar", "karte"]
  },

  // الحجز - Booking
  {
    slug: "wie-buchen",
    category: "Buchung",
    question: "Wie kann ich einen Parkplatz buchen?",
    answer: "Sie können telefonisch, per WhatsApp oder über unsere Website buchen. Wir bestätigen Ihre Reservierung innerhalb weniger Minuten.",
    keywords: ["buchen", "reservieren", "buchung"]
  },
  {
    slug: "kurzfristig-buchen",
    category: "Buchung",
    question: "Kann ich kurzfristig buchen?",
    answer: "Ja, Sie können auch am selben Tag noch buchen. Rufen Sie uns einfach an oder schreiben Sie uns auf WhatsApp. Bei hoher Auslastung empfehlen wir jedoch eine frühzeitige Reservierung.",
    keywords: ["kurzfristig", "spontan", "last minute"]
  },
  {
    slug: "stornierung",
    category: "Buchung",
    question: "Kann ich kostenlos stornieren?",
    answer: "Ja, Stornierungen sind bis 24 Stunden vor Anreise kostenlos möglich. Bei kürzeren Fristen sprechen Sie uns bitte an - wir finden meist eine Lösung.",
    keywords: ["stornierung", "abbrechen", "kostenlos stornieren"]
  },

  // الشاتل - Shuttle
  {
    slug: "wie-funktioniert-shuttle",
    category: "Shuttle",
    question: "Wie funktioniert der Shuttle-Service?",
    answer: "Nach dem Parken rufen Sie uns an, und wir holen Sie innerhalb von 5 Minuten ab. Der Shuttle bringt Sie direkt zum Terminal. Bei der Rückkehr rufen Sie uns vom Terminal an, und wir holen Sie sofort ab.",
    keywords: ["shuttle", "transfer", "abholen"]
  },
  {
    slug: "shuttle-nachts",
    category: "Shuttle",
    question: "Fährt der Shuttle auch nachts?",
    answer: "Ja, unser Shuttle-Service ist 24 Stunden am Tag, 7 Tage die Woche verfügbar - auch bei Nachtflügen. Egal wann Ihr Flug geht oder ankommt.",
    keywords: ["nachts", "nachtflug", "24 stunden", "rund um die uhr"]
  },
  {
    slug: "shuttle-dauer",
    category: "Shuttle",
    question: "Wie lange dauert die Shuttle-Fahrt?",
    answer: "Die Fahrt zum Terminal dauert nur etwa 5 Minuten. Der Shuttle wartet maximal 5 Minuten auf Sie.",
    keywords: ["dauer", "zeit", "wie lange"]
  },

  // السيارة - Vehicle
  {
    slug: "schluessel-abgeben",
    category: "Fahrzeug",
    question: "Muss ich meinen Autoschlüssel abgeben?",
    answer: "Nein! Bei uns behalten Sie Ihren Schlüssel. Ihr Auto wird nicht umgeparkt und niemand außer Ihnen hat Zugang zu Ihrem Fahrzeug.",
    keywords: ["schlüssel", "schluessel", "autoschlüssel", "abgeben"]
  },
  {
    slug: "auto-sicher",
    category: "Fahrzeug",
    question: "Ist mein Auto sicher?",
    answer: "Ja, unser Gelände ist umzäunt und videoüberwacht. Regelmäßige Kontrollgänge sorgen für zusätzliche Sicherheit. Da Sie den Schlüssel behalten, hat niemand Zugang zu Ihrem Fahrzeug.",
    keywords: ["sicher", "sicherheit", "diebstahl", "videoüberwachung"]
  },
  {
    slug: "grosse-fahrzeuge",
    category: "Fahrzeug",
    question: "Können auch große Fahrzeuge parken?",
    answer: "Ja, wir haben Stellplätze für alle Fahrzeugtypen - vom Kleinwagen bis zum Wohnmobil. Bei Sonderfahrzeugen sprechen Sie uns bitte vorher an.",
    keywords: ["wohnmobil", "transporter", "suv", "große autos"]
  },

  // الموقع - Location
  {
    slug: "wo-parkplatz",
    category: "Lage",
    question: "Wo befindet sich der Parkplatz?",
    answer: "Unser Parkplatz liegt nur 2 km vom Flughafen Nürnberg entfernt. Die genaue Adresse erhalten Sie bei der Buchung. Die Anfahrt ist einfach und gut ausgeschildert.",
    keywords: ["wo", "adresse", "lage", "standort"]
  },
  {
    slug: "anfahrt",
    category: "Lage",
    question: "Wie finde ich den Parkplatz?",
    answer: "Nach der Buchung erhalten Sie eine detaillierte Anfahrtsbeschreibung. Sie können auch einfach die Adresse in Ihr Navigationsgerät eingeben oder Google Maps nutzen.",
    keywords: ["anfahrt", "navigation", "route", "finden"]
  },

  // خدمات إضافية - Additional Services
  {
    slug: "gepaeck-hilfe",
    category: "Service",
    question: "Gibt es Hilfe beim Gepäck?",
    answer: "Unser Shuttle-Fahrer hilft Ihnen gerne beim Ein- und Ausladen Ihres Gepäcks. Bei besonders viel oder schwerem Gepäck sagen Sie bitte bei der Buchung Bescheid.",
    keywords: ["gepäck", "koffer", "hilfe", "service"]
  },
  {
    slug: "kindersitze",
    category: "Service",
    question: "Was ist mit Kindersitzen?",
    answer: "Kindersitze können Sie problemlos in Ihrem Auto lassen. Da niemand Zugang zu Ihrem Auto hat, bleiben sie sicher an Ort und Stelle.",
    keywords: ["kindersitz", "kinder", "familie"]
  },
  {
    slug: "flug-verspaetung",
    category: "Service",
    question: "Was passiert bei Flugverspätung?",
    answer: "Kein Problem! Wir tracken Ihren Flug und passen die Abholung automatisch an Ihre tatsächliche Ankunftszeit an. Sie müssen sich um nichts kümmern.",
    keywords: ["verspätung", "flugverspätung", "delay"]
  },
];

// Schema Types for AEO
export const schemaTypes = {
  localBusiness: {
    "@type": "LocalBusiness",
    name: "ParkExpress24",
    description: "Günstiger Parkplatz am Flughafen Nürnberg mit 24/7 Shuttle-Service",
    priceRange: "€€",
  },
  service: {
    "@type": "Service",
    serviceType: "Flughafen Parkplatz",
    provider: { "@type": "LocalBusiness", name: "ParkExpress24" },
  },
  faqPage: {
    "@type": "FAQPage",
  },
  howTo: {
    "@type": "HowTo",
    name: "So funktioniert Parken am Flughafen Nürnberg",
  },
};

// Helper functions
export function getCityBySlug(slug: string) {
  return cities.find(c => c.slug === slug);
}

export function getDurationBySlug(slug: string) {
  return durations.find(d => d.slug === slug);
}

export function getSeasonBySlug(slug: string) {
  return seasons.find(s => s.slug === slug);
}

export function getAirlineBySlug(slug: string) {
  return airlines.find(a => a.slug === slug);
}

export function getDestinationBySlug(slug: string) {
  return destinations.find(d => d.slug === slug);
}

export function getUseCaseBySlug(slug: string) {
  return useCases.find(u => u.slug === slug);
}

export function getComparisonBySlug(slug: string) {
  return comparisons.find(c => c.slug === slug);
}

export function getFeatureBySlug(slug: string) {
  return features.find(f => f.slug === slug);
}

export function getFaqBySlug(slug: string) {
  return faqs.find(f => f.slug === slug);
}

export function getVehicleTypeBySlug(slug: string) {
  return vehicleTypes.find(v => v.slug === slug);
}

export function getTravelTimeBySlug(slug: string) {
  return travelTimes.find(t => t.slug === slug);
}

// Generate all page slugs for sitemap
export function getAllPageSlugs() {
  return {
    cities: cities.map(c => c.slug),
    durations: durations.map(d => d.slug),
    seasons: seasons.map(s => s.slug),
    airlines: airlines.map(a => a.slug),
    destinations: destinations.map(d => d.slug),
    vehicleTypes: vehicleTypes.map(v => v.slug),
    travelTimes: travelTimes.map(t => t.slug),
    useCases: useCases.map(u => u.slug),
    comparisons: comparisons.map(c => c.slug),
    features: features.map(f => f.slug),
    faqs: faqs.map(f => f.slug),
  };
}
