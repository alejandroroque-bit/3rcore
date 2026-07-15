import type { Metadata } from "next"
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/metadata"
import { buildFAQPageSchema, buildServiceSchema } from "@/lib/seoSchemas"
import { getMessages } from "next-intl/server"

export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata({
    locale,
    path: '/servicios/tiendas-virtuales',
    titleEs: "Agencia de Tiendas Virtuales en Lima, Perú — Crea tu Tienda Online | 3R Core",
    titleEn: "Online Store / E-commerce Agency in Lima, Peru — Build Your Store | 3R Core",
    descriptionEs: "Agencia de tiendas virtuales en Lima, Perú: creamos tu tienda online en Shopify, WooCommerce o Tiendanube, con pagos locales (Culqi, Niubiz, Izipay, Yape), SEO técnico y lista para vender. Desde S/1,500.",
    descriptionEn: "Online store agency in Lima, Peru: we build your e-commerce on Shopify, WooCommerce or Tiendanube with local payments, technical SEO and ready to sell. From $420.",
  })
}

export default async function TiendasVirtualesLayout({ children, params }: { children: React.ReactNode; params: any }) {
  const { locale } = await params
  const messages = (await getMessages()) as any
  const isEn = locale === 'en'
  const faqMessages = messages?.TiendasVirtualesFAQ?.faqs ?? {}

  const serviceSchema = buildServiceSchema({
    locale,
    path: '/servicios/tiendas-virtuales',
    nameEs: "Agencia de Tiendas Virtuales (E-commerce) en Lima",
    nameEn: "Online Store / E-commerce Agency in Lima",
    descriptionEs: "Diseño y desarrollo de tiendas virtuales para empresas en Lima y Perú: Shopify, WooCommerce y Tiendanube, integración de pasarelas de pago locales, SEO técnico, velocidad y conversión, con soporte y capacitación.",
    descriptionEn: "Design and development of online stores for companies in Lima and Peru: Shopify, WooCommerce and Tiendanube, local payment gateways, technical SEO, speed and conversion, with support and training.",
    serviceType: "E-commerce development / Online store creation",
    priceRange: "S/1,500 - S/25,000",
    offerPriceEs: 1500,
    offerPriceEn: 420,
    audienceTypes: ["E-commerce", "Retail", "B2C", "B2B"],
  })

  const faqItems = Object.values(faqMessages).map((q: any) => ({
    question: q.question,
    answer: q.answer,
  }))
  const faqSchema = buildFAQPageSchema(faqItems)

  const breadcrumbSchema = generateBreadcrumbSchema(
    [{ name: isEn ? 'Home' : 'Inicio', path: '' }, { name: isEn ? 'Services' : 'Servicios', path: '/servicios' }, { name: isEn ? "Online Stores" : "Tiendas Virtuales", path: '/servicios/tiendas-virtuales' }],
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
