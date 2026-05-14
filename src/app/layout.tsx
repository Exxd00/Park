import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://park-express24.de"),
  title: {
    default: "ParkExpress24 Nürnberg | Parken Flughafen Nürnberg",
    template: "%s | ParkExpress24 Nürnberg",
  },
  description: "Parken am Flughafen Nürnberg (NUE): Schlüssel bleibt bei Ihnen, 24/7 Shuttle, 5 Min. zum Terminal. Günstig & sicher parken. Jetzt Flughafen-Plan berechnen!",
  keywords: ["parken flughafen nürnberg", "parkplatz flughafen nürnberg", "parken nue", "flughafen nürnberg parken günstig", "langzeitparken flughafen nürnberg", "shuttle parking nürnberg"],
  authors: [{ name: "ParkExpress24 Nürnberg" }],
  creator: "ParkExpress24 Nürnberg",
  publisher: "ParkExpress24 Nürnberg",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://park-express24.de",
    siteName: "ParkExpress24 Nürnberg",
    title: "ParkExpress24 Nürnberg | Parken Flughafen Nürnberg",
    description: "Parken am Flughafen Nürnberg: Schlüssel bleibt bei Ihnen, 24/7 Shuttle, 5 Min. zum Terminal.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ParkExpress24 Nürnberg | Parken Flughafen Nürnberg",
    description: "Parken am Flughafen Nürnberg mit 24/7 Shuttle-Service.",
  },
  verification: {
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://park-express24.de",
  },
};

// Local Business Schema for Google Search
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://park-express24.de",
  name: "ParkExpress24 Nürnberg",
  description: "Parken am Flughafen Nürnberg (NUE) mit 24/7 Shuttle-Service. Schlüssel bleibt bei Ihnen. 5 Minuten zum Terminal.",
  url: "https://park-express24.de",
  telephone: "+4915124147779",
  email: "info@park-express24.de",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nürnberg",
    addressRegion: "Bayern",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "49.4987",
    longitude: "11.0670",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  priceRange: "€€",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "2000",
  },
  areaServed: [
    { "@type": "City", name: "Nürnberg" },
    { "@type": "City", name: "Fürth" },
    { "@type": "City", name: "Erlangen" },
    { "@type": "City", name: "Schwabach" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Parkplätze am Flughafen Nürnberg",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Außenstellplatz",
          description: "Günstiger Parkplatz unter freiem Himmel mit 24/7 Shuttle",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Hallenparkplatz",
          description: "Überdachter Parkplatz mit 24/7 Shuttle",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.variable}>
      <head>
        <meta name="theme-color" content="#1e293b" />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BJPMB3V0HK"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BJPMB3V0HK');
          `}
        </Script>
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
