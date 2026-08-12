import type { Metadata } from "next"
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/metadata"
import { buildFAQPageSchema, buildServiceSchema } from "@/lib/seoSchemas"
import { getMessages } from "next-intl/server"

export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata({
    locale,
    path: '/servicios/marketing-ecommerce',
    titleEs: "Marketing Digital para E-commerce y Tiendas Online en Perú | 3R Core",
    titleEn: "Digital Marketing for E-commerce & Online Stores in Peru | 3R Core",
    descriptionEs: "Agencia de marketing digital para e-commerce y tiendas online en Perú: Google Shopping, Meta Ads, catálogos, email marketing y CRO para escalar ventas con ROAS medible.",
    descriptionEn: "Digital marketing agency for e-commerce and online stores in Peru: Google Shopping, Meta Ads, catalogs, email marketing and CRO to scale sales with measurable ROAS.",
    titleUs: 'Marketing Digital para E-commerce y Tiendas Online en EE.UU. | 3R Core',
    descriptionUs: 'Marketing digital para tiendas online en Estados Unidos: Google Shopping, Meta Ads, catálogos, email marketing y CRO para escalar ventas con ROAS medible, en español e inglés.',
  })
}

export default async function MarketingEcommerceLayout({ children, params }: { children: React.ReactNode; params: any }) {
  const { locale } = await params
  const messages = (await getMessages()) as any
  const isEn = locale === 'en'
  const faqMessages = messages?.MarketingEcommerceFAQ?.faqs ?? {}

  const serviceSchema = buildServiceSchema({
    locale,
    path: '/servicios/marketing-ecommerce',
    nameEs: "Marketing Digital para E-commerce y Tiendas Online en Perú",
    nameEn: "Digital Marketing for E-commerce and Online Stores in Peru",
    descriptionEs: "Marketing digital para e-commerce y tiendas online en Perú (Shopify, WooCommerce, VTEX): Google Shopping y Performance Max, Meta Ads con catálogo, email marketing, CRO y optimización por ROAS con reportes mensuales.",
    descriptionEn: "Digital marketing for e-commerce and online stores in Peru (Shopify, WooCommerce, VTEX): Google Shopping and Performance Max, Meta Ads with catalog, email marketing, CRO and ROAS optimization with monthly reports.",
    serviceType: "E-commerce Marketing / Growth",
    minPriceEs: 2500,
    maxPriceEs: 15000,
    offerPriceEs: 2500,
    offerPriceEn: 700,
    audienceTypes: ["E-commerce", "Retail", "Consumer brands", "D2C"],
  })

  const faqItems = Object.values(faqMessages).map((q: any) => ({
    question: q.question,
    answer: q.answer,
  }))
  const faqSchema = buildFAQPageSchema(faqItems)

  const breadcrumbSchema = generateBreadcrumbSchema(
    [{ name: isEn ? 'Home' : 'Inicio', path: '' }, { name: isEn ? 'Services' : 'Servicios', path: '/servicios' }, { name: isEn ? "E-commerce Marketing" : "Marketing E-commerce", path: '/servicios/marketing-ecommerce' }],
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
