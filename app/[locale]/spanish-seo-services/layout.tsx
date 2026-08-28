import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { BASE_URL, generateBreadcrumbSchema } from "@/lib/metadata"
import { buildFAQPageSchema, buildServiceSchema } from "@/lib/seoSchemas"
import { getMessages } from "next-intl/server"

const PATH = '/spanish-seo-services'

export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  const { locale } = await params
  // Página de un solo mercado: no tiene versión en español, así que no lleva
  // bloque de alternates ni x-default. Declararlos apuntaría a URLs que no
  // existen.
  if (locale !== 'en') return { robots: { index: false, follow: false } }

  const title = "Spanish SEO Services for U.S. Businesses | 3R Core"
  const description = "Spanish SEO at $500/month: native Spanish keyword research, hreflang repair, Spanish pages written from scratch and Google Business Profile in Spanish. No mandatory contract."

  return {
    title,
    description,
    alternates: { canonical: `${BASE_URL}/en${PATH}` },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/en${PATH}`,
      siteName: '3R Core',
      locale: 'en_US',
      type: 'website',
      images: [{ url: `${BASE_URL}/og/default.jpg`, width: 1200, height: 630, alt: '3R Core - Spanish SEO Services' }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${BASE_URL}/og/default.jpg`],
    },
  }
}

export default async function SpanishSeoServicesLayout({ children, params }: { children: React.ReactNode; params: any }) {
  const { locale } = await params
  // Solo existe en inglés. En /es y /us devuelve 404 en lugar de servir una
  // copia sin traducir que competiría con /servicios/*.
  if (locale !== 'en') notFound()

  const messages = (await getMessages()) as any
  const faqMessages = messages?.SpanishSeoFAQ?.faqs ?? {}

  const serviceSchema = buildServiceSchema({
    locale,
    path: PATH,
    nameEs: "Servicios de SEO en Espanol para Negocios de Estados Unidos",
    nameEn: "Spanish SEO Services for U.S. Businesses",
    descriptionEs: "Servicios de SEO en espanol para negocios de Estados Unidos: investigacion de palabras clave nativa, reparacion de hreflang, paginas escritas en espanol y ficha de Google en espanol, con reporte mensual.",
    descriptionEn: "Spanish SEO services for U.S. businesses at $500 USD per month: keyword research run natively in Spanish rather than translated, technical audit and reciprocal hreflang repair, Spanish pages written against Spanish search intent, internal linking, Google Business Profile managed in Spanish, and a monthly report with Spanish traffic reported separately. No mandatory contract.",
    serviceType: "Spanish SEO / Multilingual Search Engine Optimization",
    offerPriceEn: 500,
    // Página de un solo mercado: areaServed sin PE. Por defecto buildServiceSchema
    // declara ["PE","US"], y en una página cuyo mercado es Estados Unidos, Perú
    // dentro del área servida es ruido que contradice al propio texto.
    areaServed: ["US"],
    audienceTypes: ["Small business", "E-commerce", "D2C brands", "Local business", "B2B"],
  })

  const faqItems = Object.values(faqMessages).map((q: any) => ({
    question: q.question,
    answer: q.answer,
  }))
  const faqSchema = buildFAQPageSchema(faqItems)

  const breadcrumbSchema = generateBreadcrumbSchema(
    [
      { name: 'Home', path: '' },
      { name: 'Spanish SEO Services', path: PATH },
    ],
    locale
  )

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceSchema, faqSchema, breadcrumbSchema]) }}
      />
      {children}
    </>
  )
}
