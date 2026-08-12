import type { Metadata } from "next";
import LandingClient from "./LandingClient";
import { TEL_LANDING } from "@/lib/contact";

const BASE_URL = "https://3rcore.com";

export const metadata: Metadata = {
  title:
    "Google Ads en Lima | 3R Core — Más clientes, menos presupuesto quemado",
  description:
    "Agencia de performance y Google Ads en Lima. Convertimos tu inversión en clientes reales con campañas medibles, ROAS claro y reportes honestos. Pide tu diagnóstico gratis.",
  alternates: {
    canonical: `${BASE_URL}/performance-marketing`,
  },
  openGraph: {
    title: "Google Ads en Lima | 3R Core",
    description:
      "Más clientes, menos presupuesto quemado. Campañas de Google Ads y performance con ROI medible en Lima, Perú.",
    url: `${BASE_URL}/performance-marketing`,
    siteName: "3R Core",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/og/default.jpg`,
        width: 1200,
        height: 630,
        alt: "3R Core — Google Ads en Lima",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Ads en Lima | 3R Core",
    description:
      "Más clientes, menos presupuesto quemado. Campañas de Google Ads con ROI medible en Lima.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Gestión de campañas Google Ads",
  provider: {
    "@type": "Organization",
    name: "3R Core",
    url: BASE_URL,
    areaServed: "Lima, Perú",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Alameda de la Paz 187, primer piso",
      addressLocality: "La Molina",
      addressRegion: "Lima",
      addressCountry: "PE",
    },
    telephone: TEL_LANDING,
  },
  areaServed: { "@type": "City", name: "Lima" },
  url: `${BASE_URL}/performance-marketing`,
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LandingClient />
    </>
  );
}
