import type { MetadataRoute } from "next";
import {
  cities,
  durations,
  seasons,
  airlines,
  destinations,
  useCases,
  comparisons,
  features,
  faqs,
  vehicleTypes,
  travelTimes
} from "@/data/seo-data";

const BASE_URL = "https://park-express24.de";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  // الصفحات الرئيسية - Main Pages
  const mainPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: currentDate, changeFrequency: "daily", priority: 1.0 },
    { url: `${BASE_URL}/buchen`, lastModified: currentDate, changeFrequency: "daily", priority: 0.95 },
    { url: `${BASE_URL}/leistungen`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/kontakt`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/faq`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE_URL}/so-funktionierts`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/staedte`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/vergleich`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/zeitplanung`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/impressum`, lastModified: currentDate, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/datenschutz`, lastModified: currentDate, changeFrequency: "yearly", priority: 0.3 },
  ];

  // صفحات الخدمات - Service Pages
  const servicePages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/leistungen/aussenstellplatz`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/leistungen/hallenparkplatz`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/leistungen/shuttle`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.85 },
  ];

  // صفحات المدن - City Pages (25+ cities)
  const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${BASE_URL}/${city.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: city.isMain ? 0.9 : 0.75,
  }));

  // صفحات المدن + الخدمات - City + Service Combinations
  const cityServicePages: MetadataRoute.Sitemap = cities
    .filter(city => city.isMain)
    .flatMap((city) => [
      { url: `${BASE_URL}/${city.slug}/aussenstellplatz`, lastModified: currentDate, changeFrequency: "monthly" as const, priority: 0.7 },
      { url: `${BASE_URL}/${city.slug}/hallenparkplatz`, lastModified: currentDate, changeFrequency: "monthly" as const, priority: 0.7 },
    ]);

  // صفحات المدة - Duration Pages
  const durationPages: MetadataRoute.Sitemap = durations.map((duration) => ({
    url: `${BASE_URL}/dauer/${duration.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  // صفحات المواسم - Season Pages
  const seasonPages: MetadataRoute.Sitemap = seasons.map((season) => ({
    url: `${BASE_URL}/saison/${season.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // صفحات الخطوط الجوية - Airline Pages
  const airlinePages: MetadataRoute.Sitemap = airlines.map((airline) => ({
    url: `${BASE_URL}/airline/${airline.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: airline.popular ? 0.7 : 0.6,
  }));

  // صفحات الوجهات - Destination Pages
  const destinationPages: MetadataRoute.Sitemap = destinations.map((dest) => ({
    url: `${BASE_URL}/ziel/${dest.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: dest.popular ? 0.75 : 0.6,
  }));

  // صفحات أنواع السيارات - Vehicle Type Pages
  const vehiclePages: MetadataRoute.Sitemap = vehicleTypes.map((vehicle) => ({
    url: `${BASE_URL}/fahrzeug/${vehicle.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // صفحات أوقات السفر - Travel Time Pages
  const timePages: MetadataRoute.Sitemap = travelTimes.map((time) => ({
    url: `${BASE_URL}/abflugzeit/${time.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: time.popular ? 0.65 : 0.55,
  }));

  // صفحات حالات الاستخدام - Use Case Pages
  const useCasePages: MetadataRoute.Sitemap = useCases.map((useCase) => ({
    url: `${BASE_URL}/reiseart/${useCase.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  // صفحات المقارنة - Comparison Pages
  const comparisonPages: MetadataRoute.Sitemap = comparisons.map((comparison) => ({
    url: `${BASE_URL}/vergleich/${comparison.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // صفحات الميزات - Feature Pages
  const featurePages: MetadataRoute.Sitemap = features.map((feature) => ({
    url: `${BASE_URL}/vorteile/${feature.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  // صفحات الأسئلة الشائعة - FAQ Pages
  const faqPages: MetadataRoute.Sitemap = faqs.map((faq) => ({
    url: `${BASE_URL}/fragen/${faq.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // صفحات الفهارس - Index Pages
  const indexPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/dauer`, lastModified: currentDate, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${BASE_URL}/saison`, lastModified: currentDate, changeFrequency: "monthly" as const, priority: 0.75 },
    { url: `${BASE_URL}/airline`, lastModified: currentDate, changeFrequency: "monthly" as const, priority: 0.75 },
    { url: `${BASE_URL}/ziel`, lastModified: currentDate, changeFrequency: "monthly" as const, priority: 0.75 },
    { url: `${BASE_URL}/fahrzeug`, lastModified: currentDate, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/abflugzeit`, lastModified: currentDate, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/reiseart`, lastModified: currentDate, changeFrequency: "monthly" as const, priority: 0.75 },
    { url: `${BASE_URL}/vorteile`, lastModified: currentDate, changeFrequency: "monthly" as const, priority: 0.75 },
    { url: `${BASE_URL}/fragen`, lastModified: currentDate, changeFrequency: "weekly" as const, priority: 0.8 },
  ];

  // جمع كل الصفحات - Combine all pages
  return [
    ...mainPages,
    ...servicePages,
    ...indexPages,
    ...cityPages,
    ...cityServicePages,
    ...durationPages,
    ...seasonPages,
    ...airlinePages,
    ...destinationPages,
    ...vehiclePages,
    ...timePages,
    ...useCasePages,
    ...comparisonPages,
    ...featurePages,
    ...faqPages,
  ];
}

// دالة لحساب عدد الصفحات - Function to count pages
export function getSitemapStats() {
  return {
    mainPages: 11,
    servicePages: 3,
    indexPages: 9,
    cityPages: cities.length,
    cityServicePages: cities.filter(c => c.isMain).length * 2,
    durationPages: durations.length,
    seasonPages: seasons.length,
    airlinePages: airlines.length,
    destinationPages: destinations.length,
    vehiclePages: vehicleTypes.length,
    timePages: travelTimes.length,
    useCasePages: useCases.length,
    comparisonPages: comparisons.length,
    featurePages: features.length,
    faqPages: faqs.length,
    get total() {
      return this.mainPages + this.servicePages + this.indexPages +
             this.cityPages + this.cityServicePages + this.durationPages +
             this.seasonPages + this.airlinePages + this.destinationPages +
             this.vehiclePages + this.timePages + this.useCasePages +
             this.comparisonPages + this.featurePages + this.faqPages;
    }
  };
}
