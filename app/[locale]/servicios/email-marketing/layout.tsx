import type { Metadata } from "next"
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/metadata"
import { buildFAQPageSchema, buildServiceSchema } from "@/lib/seoSchemas"
import { getMessages } from "next-intl/server"

export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata({
    locale,
    path: '/servicios/email-marketing',
    titleEs: "Agencia de Email Marketing y Automatización en Lima, Perú | 3R Core",
    titleEn: 'Email Marketing & Automation Agency for U.S. Brands | 3R Core',
    descriptionEs: "Agencia de email marketing y automatización en Lima, Perú: flujos automáticos, newsletters, segmentación y CRM. Recupera carritos, fideliza clientes y vende en piloto automático.",
    descriptionEn: 'Email marketing and automation for U.S. businesses: automated flows, newsletters, segmentation and CRM integration. Recover carts, retain customers and sell on autopilot.',
    titleUs: 'Agencia de Email Marketing y Automatización para EE.UU. | 3R Core',
    descriptionUs: 'Email marketing y automatización en español e inglés para negocios en Estados Unidos: flujos automáticos, newsletters, segmentación y CRM. Recupera carritos y fideliza clientes.',
  })
}

export default async function EmailMarketingLayout({ children, params }: { children: React.ReactNode; params: any }) {
  const { locale } = await params
  const messages = (await getMessages()) as any
  const isEn = locale === 'en'
  const faqMessages = messages?.EmailMarketingFAQ?.faqs ?? {}

  const serviceSchema = buildServiceSchema({
    locale,
    path: '/servicios/email-marketing',
    nameEs: "Email Marketing y Automatización en Lima",
    nameEn: "Email Marketing and Automation in Lima",
    descriptionEs: "Estrategia, diseño y gestión de email marketing y automatización para empresas en Lima y Perú: flujos de bienvenida, recuperación de carritos, newsletters, segmentación y automatización con CRM.",
    descriptionEn: "Strategy, design and management of email marketing and automation for companies in Lima and Peru: welcome flows, cart recovery, newsletters, segmentation and CRM automation.",
    serviceType: "Email Marketing / Marketing Automation / CRM",
    minPriceEs: 1200,
    maxPriceEs: 6000,
    offerPriceEs: 1200,
    offerPriceEn: 350,
    audienceTypes: ["E-commerce", "B2B", "SaaS", "Small business"],
  })

  const faqItems = Object.values(faqMessages).map((q: any) => ({
    question: q.question,
    answer: q.answer,
  }))
  const faqSchema = buildFAQPageSchema(faqItems)

  const breadcrumbSchema = generateBreadcrumbSchema(
    [{ name: isEn ? 'Home' : 'Inicio', path: '' }, { name: isEn ? 'Services' : 'Servicios', path: '/servicios' }, { name: isEn ? "Email Marketing" : "Email Marketing", path: '/servicios/email-marketing' }],
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
