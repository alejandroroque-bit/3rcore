import type { Metadata } from "next"
import { generatePageMetadata, generateBreadcrumbSchema, BASE_URL } from "@/lib/metadata"
import { buildServiceItemList, buildSpeakableSchema } from "@/lib/seoSchemas"
import { COPY } from "./copy"

export const revalidate = 3600

export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata({
    locale,
    path: '/agencia-marketing-digital-lima',
    titleEs: 'Agencia de Marketing Digital en Lima, Perú | 3R Core',
    titleEn: 'Digital Marketing Agency in Lima, Peru | 3R Core',
    descriptionEs: 'Agencia peruana con oficina en La Molina. Precios publicados, sin permanencia y el trabajo es tuyo desde el primer día. 4,7★ en 42 reseñas de Google.',
    descriptionEn: 'Peruvian agency in La Molina, Lima. Published pricing, no lock-in and you own the work from day one. 4.7 stars from 42 Google reviews.',
    ogImage: {
      url: 'https://3rcore.com/og/default.jpg',
      width: 1200,
      height: 630,
      alt: '3R Core - Agencia de Marketing Digital en Lima, Perú',
    },
  })
}

export default async function LimaLandingLayout({ children, params }: { children: React.ReactNode; params: any }) {
  const { locale } = await params
  const isEn = locale === 'en'

  const breadcrumbSchema = generateBreadcrumbSchema(
    [
      { name: isEn ? 'Home' : 'Inicio', path: '' },
      { name: isEn ? 'Digital Marketing Agency in Lima' : 'Agencia de Marketing Digital en Lima', path: '/agencia-marketing-digital-lima' },
    ],
    locale
  )

  const itemList = buildServiceItemList({
    locale,
    items: [
      { name: isEn ? 'Branding & Visual Identity in Lima' : 'Branding e Identidad de Marca en Lima', path: '/agencia-branding-lima', description: isEn ? 'Logo, brand manual and corporate identity from $500 USD for US clients.' : 'Logotipo, manual de marca e identidad corporativa desde S/500.' },
      { name: isEn ? 'Social Media Management in Lima' : 'Manejo de Redes Sociales en Lima', path: '/agencia-redes-sociales-lima', description: isEn ? 'Content strategy and community management for Instagram, TikTok, Facebook and LinkedIn from $800/month for US clients.' : 'Estrategia y community management para Instagram, TikTok, Facebook y LinkedIn desde S/1,500/mes.' },
      { name: isEn ? 'Google Ads in Lima' : 'Google Ads en Lima', path: '/agencia-google-ads-lima', description: isEn ? 'Search, Performance Max, YouTube, Display and Shopping campaigns. Management fee from $800/month for US clients.' : 'Campañas Search, Performance Max, YouTube, Display y Shopping. Fee de gestión desde S/1,800/mes.' },
      { name: isEn ? 'SEO Lima' : 'SEO en Lima', path: '/agencia-seo-lima', description: isEn ? 'Organic SEO positioning on Google from $500/month for US clients.' : 'Posicionamiento orgánico en Google desde S/1,800/mes.' },
      { name: isEn ? 'Web Design Lima' : 'Diseño Web Lima', path: '/diseno-web-lima', description: isEn ? 'Landing pages, corporate sites and e-commerce on Shopify, WooCommerce or custom Next.js.' : 'Landing pages, sitios corporativos y e-commerce en Shopify, WooCommerce o Next.js a medida.' },
    ],
  })

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${BASE_URL}/${locale}/agencia-marketing-digital-lima#localbusiness`,
    "name": "3R Core - Agencia de Marketing Digital en Lima",
    "url": `${BASE_URL}/${locale}/agencia-marketing-digital-lima`,
    "image": `${BASE_URL}/og/default.jpg`,
    "logo": `${BASE_URL}/icons/LogoFull.webp`,
    "telephone": "+51 986 889 147",
    "email": "info@3rcore.com",
    "priceRange": "S/500 - S/15,000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Alameda de la Paz 187, primer piso",
      "addressLocality": "La Molina",
      "addressRegion": "Lima",
      "postalCode": "15024",
      "addressCountry": "PE"
    },
    "areaServed": [
      { "@type": "Country", "name": "PE" },
      { "@type": "Country", "name": "US" },
    ],
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "09:00",
      "closes": "18:00",
    }],
    "speakable": buildSpeakableSchema(['h1', 'h2', '.local-intro']),
  }

  // FAQPage con las MISMAS preguntas que se ven en la página (COPY compartido):
  // marcar preguntas que el visitante no encuentra en pantalla es justo lo que
  // Google considera marcado engañoso.
  const t = locale === 'en' ? COPY.en : COPY.es
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${BASE_URL}/${locale}/agencia-marketing-digital-lima#faqpage`,
    "url": `${BASE_URL}/${locale}/agencia-marketing-digital-lima`,
    "inLanguage": isEn ? 'en' : 'es',
    "mainEntity": t.faq.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([localBusinessSchema, itemList, breadcrumbSchema, faqSchema]) }}
      />
      {children}
    </>
  )
}
