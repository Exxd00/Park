export interface City {
  slug: string;
  name: string;
  distanceToAirport: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  faq: { question: string; answer: string }[];
}

export const cities: City[] = [
  {
    slug: "nuernberg",
    name: "Nürnberg",
    distanceToAirport: "ca. 5 km",
    description: "Direkt am Flughafen Nürnberg gelegen bieten wir Ihnen den kürzesten Weg zum Terminal. Starten Sie stressfrei in Ihren Urlaub oder Ihre Geschäftsreise mit ParkExpress24.",
    metaTitle: "Parken Flughafen Nürnberg | Shuttle & Parkplatz buchen | ParkExpress24",
    metaDescription: "Parken am Flughafen Nürnberg mit 24/7 Shuttle-Service. Nur ca. 5 Minuten zum Terminal. Außenstellplatz & Hallenparkplatz. Jetzt online buchen!",
    faq: [
      {
        question: "Wie weit ist der Parkplatz vom Flughafen Nürnberg entfernt?",
        answer: "Unser Parkplatz liegt nur ca. 5 Minuten mit dem Shuttle vom Flughafen Nürnberg entfernt. Der Transfer zum Terminal ist kostenlos im Preis enthalten."
      },
      {
        question: "Ist der Shuttle-Service rund um die Uhr verfügbar?",
        answer: "Ja, unser Shuttle-Service ist 24/7 verfügbar, auch bei Nacht- und Frühflügen. Wir passen uns Ihren Flugzeiten an."
      }
    ]
  },
  {
    slug: "fuerth",
    name: "Fürth",
    distanceToAirport: "ca. 12 km",
    description: "Von Fürth erreichen Sie unseren Parkplatz am Flughafen Nürnberg in nur wenigen Minuten. Parken Sie günstig und sicher mit ParkExpress24.",
    metaTitle: "Parken Flughafen Nürnberg für Fürther | Shuttle-Parkplatz buchen",
    metaDescription: "Parkplatz am Flughafen Nürnberg für Reisende aus Fürth. 24/7 Shuttle, sichere Stellplätze, einfache Buchung. Jetzt reservieren!",
    faq: [
      {
        question: "Wie lange dauert die Fahrt von Fürth zum Parkplatz?",
        answer: "Von Fürth erreichen Sie unseren Parkplatz in ca. 15-20 Minuten, je nach Verkehrslage."
      }
    ]
  },
  {
    slug: "erlangen",
    name: "Erlangen",
    distanceToAirport: "ca. 18 km",
    description: "Aus Erlangen kommend bieten wir Ihnen eine bequeme Parkmöglichkeit nahe dem Flughafen Nürnberg. Mit unserem Shuttle sind Sie schnell am Terminal.",
    metaTitle: "Parken Flughafen Nürnberg für Erlanger | Günstig & Sicher",
    metaDescription: "Parkplatz am Flughafen Nürnberg für Reisende aus Erlangen. Schneller Shuttle-Transfer, sichere Parkplätze. Online buchen!",
    faq: [
      {
        question: "Lohnt sich der Parkplatz für Reisende aus Erlangen?",
        answer: "Ja, gerade für längere Reisen sparen Sie im Vergleich zu den teuren Flughafenparkplätzen. Die Anfahrt von ca. 20 Minuten lohnt sich."
      }
    ]
  },
  {
    slug: "schwabach",
    name: "Schwabach",
    distanceToAirport: "ca. 20 km",
    description: "Reisende aus Schwabach profitieren von unseren günstigen Parkgebühren am Flughafen Nürnberg. Sicher, schnell und unkompliziert.",
    metaTitle: "Parken Flughafen Nürnberg für Schwabacher | ParkExpress24",
    metaDescription: "Günstiges Parken am Flughafen Nürnberg für Reisende aus Schwabach. 24/7 Shuttle-Service, einfache Online-Buchung.",
    faq: [
      {
        question: "Wie funktioniert die Anfahrt aus Schwabach?",
        answer: "Über die A73 erreichen Sie uns in ca. 20-25 Minuten. Bei der Buchung erhalten Sie die genaue Adresse und Anfahrtsbeschreibung."
      }
    ]
  },
  {
    slug: "zirndorf",
    name: "Zirndorf",
    distanceToAirport: "ca. 15 km",
    description: "Von Zirndorf zum Flughafen Nürnberg – mit ParkExpress24 starten Sie entspannt in den Urlaub. Shuttle-Service rund um die Uhr.",
    metaTitle: "Parken Flughafen Nürnberg für Zirndorfer | Shuttle-Parking",
    metaDescription: "Parkplatz am Flughafen Nürnberg für Reisende aus Zirndorf. Außenstellplatz oder Hallenparkplatz mit 24/7 Shuttle.",
    faq: [
      {
        question: "Gibt es Parkplätze für alle Fahrzeuggrößen?",
        answer: "Ja, wir bieten Stellplätze für alle gängigen PKW-Größen. Bei größeren Fahrzeugen kontaktieren Sie uns bitte vorab."
      }
    ]
  }
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find(city => city.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cities.map(city => city.slug);
}
