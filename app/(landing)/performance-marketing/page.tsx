import type { Metadata } from "next";
import LandingClient from "./LandingClient";
import { TEL_LANDING } from "@/lib/contact";
import { POSTAL_ADDRESS } from "@/lib/nap";

const BASE_URL = "https://3rcore.com";

export const metadata: Metadata = {
  title:
    "Google Ads en Lima | 3R Core — Más clientes, menos presupuesto quemado",
  description:
    "Agencia de performance y Google Ads en Lima. Convertimos tu inversión en clientes reales con campañas medibles, ROAS claro y reportes honestos. Pide tu diagnóstico gratis.",
  alternates: {
    canonical: `${BASE_URL}/performance-marketing`,
  },
  // 29-ago-2026. Esta landing vive fuera del sistema de idiomas, es indexable,
  // NO está en el sitemap y duplica a /es/servicios/performance-marketing, que
  // sí lo está. En 90 días recibió 536 sesiones, 527 de ellas de Google Ads: es
  // una landing de pago, y una landing de pago no necesita estar en el índice.
  // Se marca noindex —no se redirige— porque romper la URL costaría campañas.
  // `follow` se mantiene para que siga repartiendo sus enlaces internos.
  robots: { index: false, follow: true },
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
    address: POSTAL_ADDRESS,
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
