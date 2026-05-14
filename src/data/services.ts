export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  features: string[];
  metaTitle: string;
  metaDescription: string;
  icon: string;
  faq: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    slug: "aussenstellplatz",
    name: "Außenstellplatz",
    shortDescription: "Günstig parken unter freiem Himmel",
    description: "Unser Außenstellplatz bietet Ihnen eine wirtschaftliche Parkmöglichkeit nahe dem Flughafen Nürnberg. Der Parkplatz ist beleuchtet, eingezäunt und wird regelmäßig kontrolliert. Mit unserem 24/7 Shuttle-Service gelangen Sie in ca. 5 Minuten zum Terminal.",
    features: [
      "Eingezäuntes Gelände",
      "Beleuchteter Parkplatz",
      "24/7 Shuttle-Service",
      "ca. 5 Min. zum Terminal",
      "Günstige Preise"
    ],
    metaTitle: "Außenstellplatz Flughafen Nürnberg | Günstig Parken | ParkExpress24",
    metaDescription: "Günstiger Außenstellplatz am Flughafen Nürnberg. Eingezäunt, beleuchtet, mit 24/7 Shuttle. Ideal für preisbewusste Reisende. Jetzt buchen!",
    icon: "car",
    faq: [
      {
        question: "Ist mein Auto auf dem Außenstellplatz sicher?",
        answer: "Ja, der Außenstellplatz ist eingezäunt, beleuchtet und wird regelmäßig kontrolliert. Ihr Fahrzeug ist bei uns in guten Händen."
      },
      {
        question: "Was kostet der Außenstellplatz?",
        answer: "Die Preise variieren je nach Reisedauer. Bei der Buchung sehen Sie den genauen Preis für Ihren gewünschten Zeitraum."
      }
    ]
  },
  {
    slug: "hallenparkplatz",
    name: "Hallenparkplatz",
    shortDescription: "Überdacht und geschützt parken",
    description: "Der Hallenparkplatz bietet optimalen Schutz für Ihr Fahrzeug während Ihrer Reise. Geschützt vor Witterungseinflüssen, ideal für längere Reisen oder empfindliche Fahrzeuge. Mit direktem Shuttle-Anschluss zum Flughafen Nürnberg.",
    features: [
      "Überdachter Stellplatz",
      "Schutz vor Witterung",
      "Ideal für Langzeitparken",
      "24/7 Shuttle-Service",
      "Höherer Komfort"
    ],
    metaTitle: "Hallenparkplatz Flughafen Nürnberg | Überdacht Parken | ParkExpress24",
    metaDescription: "Überdachter Hallenparkplatz am Flughafen Nürnberg. Schutz vor Witterung, ideal für Langzeitparken. Mit 24/7 Shuttle. Jetzt reservieren!",
    icon: "warehouse",
    faq: [
      {
        question: "Für wen eignet sich der Hallenparkplatz?",
        answer: "Der Hallenparkplatz ist ideal für längere Reisen, empfindliche Fahrzeuge oder wenn Sie einfach mehr Komfort wünschen."
      },
      {
        question: "Ist der Hallenparkplatz teurer?",
        answer: "Ja, der Hallenparkplatz ist etwas teurer als der Außenstellplatz, bietet dafür aber mehr Schutz und Komfort."
      }
    ]
  },
  {
    slug: "shuttle-service",
    name: "Shuttle-Service",
    shortDescription: "Kostenloser Transfer zum Terminal",
    description: "Unser Shuttle-Service bringt Sie bequem vom Parkplatz zum Terminal des Flughafen Nürnberg und zurück. Der Service ist 24/7 verfügbar und im Parkpreis enthalten. Die Fahrzeit beträgt nur ca. 5 Minuten.",
    features: [
      "24/7 verfügbar",
      "ca. 5 Min. Fahrzeit",
      "Im Preis enthalten",
      "Gepäcktransport",
      "Flexible Abholung"
    ],
    metaTitle: "Shuttle-Service Flughafen Nürnberg | 24/7 Transfer | ParkExpress24",
    metaDescription: "Kostenloser 24/7 Shuttle-Service zum Flughafen Nürnberg. Nur ca. 5 Minuten zum Terminal. Im Parkpreis enthalten. Jetzt buchen!",
    icon: "bus",
    faq: [
      {
        question: "Wie oft fährt der Shuttle?",
        answer: "Der Shuttle fährt nach Bedarf und passt sich Ihren Flugzeiten an. Bei der Buchung teilen Sie uns Ihre Zeiten mit."
      },
      {
        question: "Ist der Shuttle für alle Personen kostenlos?",
        answer: "Der Shuttle-Transfer ist für die im Buchungspreis enthaltenen Personen kostenlos. Die genaue Anzahl sehen Sie bei der Buchung."
      }
    ]
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map(service => service.slug);
}
