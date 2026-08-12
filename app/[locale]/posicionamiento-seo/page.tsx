// app/[locale]/posicionamiento-seo/page.tsx
import { getMessages } from "next-intl/server"
import type { Metadata } from "next"
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/metadata"
import { buildFAQPageSchema, buildServiceSchema, buildSpeakableWebPage } from "@/lib/seoSchemas"
import LandingClient from "./LandingClient"

export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata({
    locale,
    path: '/posicionamiento-seo',
    titleEs: 'Agencia SEO en Lima, Perú — Posicionamiento Web en Google | 3R Core',
    titleEn: 'SEO Agency for U.S. Brands | 3R Core',
    descriptionEs: 'Agencia de posicionamiento SEO en Lima, Perú. Auditoría, optimización, interlinks, contenido y escalamiento mensual. Inversión desde S/1,800/mes sin contratos forzosos.',
    descriptionEn: 'SEO for U.S. businesses: keyword research, technical SEO, content and link building in English and Spanish. From $500/month, no forced contracts.',
    titleUs: 'Agencia de Posicionamiento SEO en Español para EE.UU. | 3R Core',
    descriptionUs: 'Posicionamiento SEO en español e inglés para negocios en Estados Unidos: keyword research, SEO técnico, contenido y SEO local. Las búsquedas en español suelen tener menos competencia. Desde $500/mes sin contratos forzosos.',
    ogImage: {
      url: 'https://3rcore.com/og/posicionamiento-seo.jpg',
      width: 1200,
      height: 630,
      alt: 'Agencia SEO en Lima - 3R Core',
    },
  })
}

export default async function Posicionamientoseo({ params }: { params: any }) {
  const { locale } = await params
  const messages = (await getMessages()) as any
  const isEn = locale === "en"

  const serviceSchema = buildServiceSchema({
    locale,
    path: '/posicionamiento-seo',
    nameEs: 'Agencia de Posicionamiento SEO en Lima',
    nameEn: 'SEO Positioning Agency for U.S. Brands',
    descriptionEs: 'Servicio mensual de posicionamiento SEO orgánico en Google para empresas en Lima, Perú: auditoría, palabras clave, optimización on-page, interlinks, contenido y escalamiento con reporte mensual.',
    descriptionEn: 'Monthly organic SEO positioning service on Google for companies for U.S. Brands: audit, keyword research, on-page optimization, interlinks, content and scaling with monthly reporting.',
    serviceType: 'SEO / Search Engine Optimization',
    minPriceEs: 1800,
    offerPriceEs: 1800,
    offerPriceEn: 500,
    audienceTypes: ['Small business', 'Medium business', 'Enterprise', 'E-commerce', 'B2B', 'Local business'],
  })

  // hasOfferCatalog with the three SEO service blocks from SecondLandingSection (existing copy)
  const cards = messages?.SecondLandingSection?.cards ?? {}
  ;(serviceSchema as any).hasOfferCatalog = {
    "@type": "OfferCatalog",
    "name": isEn ? "SEO Services" : "Servicios SEO",
    "itemListElement": [
      { "@type": "Offer", "name": cards?.audit?.title, "description": (cards?.audit?.items ?? []).join(". ") },
      { "@type": "Offer", "name": cards?.interlinks?.title, "description": (cards?.interlinks?.items ?? []).join(". ") },
      { "@type": "Offer", "name": cards?.scaling?.title, "description": (cards?.scaling?.items ?? []).join(". ") },
    ],
  }

  const faqMessages = messages?.SEOFAQ?.faqs ?? {}
  const faqItems = Object.values(faqMessages).map((q: any) => ({
    question: q.question,
    answer: q.answer,
  }))
  const faqSchema = buildFAQPageSchema(faqItems)

  const breadcrumbSchema = generateBreadcrumbSchema(
    [
      { name: isEn ? 'Home' : 'Inicio', path: '' },
      { name: isEn ? 'SEO Positioning' : 'Posicionamiento SEO', path: '/posicionamiento-seo' },
    ],
    locale
  )

  // Nodo WebPage propio (tiendas, precios y cotizar ya lo tenían; esta página
  // era la única money page sin el suyo en el grafo).
  const webPageSchema = buildSpeakableWebPage({
    locale,
    path: '/posicionamiento-seo',
    nameEs: 'Agencia de Posicionamiento SEO en Lima — 3R Core',
    nameEn: 'SEO Positioning Agency for U.S. Brands — 3R Core',
    cssSelector: ['h1', 'h2', '.faq-answer'],
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([webPageSchema, serviceSchema, faqSchema, breadcrumbSchema]) }}
      />
      <LandingClient />
    </>
  )
}
