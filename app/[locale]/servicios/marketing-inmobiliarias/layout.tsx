import type { Metadata } from "next"
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/metadata"
import { buildFAQPageSchema, buildServiceSchema } from "@/lib/seoSchemas"
import { getMessages } from "next-intl/server"

export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata({
    locale,
    path: '/servicios/marketing-inmobiliarias',
    titleEs: "Marketing Digital para Inmobiliarias en Lima, Perú | 3R Core",
    titleEn: 'Real Estate Marketing for U.S. Agents | 3R Core',
    descriptionEs: "Agencia de marketing digital para inmobiliarias y proyectos en Lima, Perú: Meta Ads y Google Ads para captar leads de departamentos, CRM y seguimiento por WhatsApp con costo por lead medible.",
    descriptionEn: 'Lead generation for U.S. real estate run from Lima, Peru: Meta and Google Ads for listings, CRM follow-up and measurable cost per qualified lead.',
    titleUs: 'Marketing Digital para Inmobiliarias y Agentes en EE.UU. | 3R Core',
    descriptionUs: 'Marketing digital en español para inmobiliarias y agentes en Estados Unidos: Meta Ads y Google Ads para captar compradores hispanos, CRM y seguimiento por WhatsApp con costo por lead medible.',
    ogImage: {
      url: 'https://3rcore.com/og/google-ads.jpg',
      width: 1200,
      height: 630,
      alt: '3R Core - Real Estate Marketing',
    },
  })
}

export default async function MarketingInmobiliariasLayout({ children, params }: { children: React.ReactNode; params: any }) {
  const { locale } = await params
  const messages = (await getMessages()) as any
  const isEn = locale === 'en'
  const faqMessages = messages?.MarketingInmobiliariasFAQ?.faqs ?? {}

  const serviceSchema = buildServiceSchema({
    locale,
    path: '/servicios/marketing-inmobiliarias',
    nameEs: "Marketing Digital para Inmobiliarias en Lima",
    nameEn: "Digital Marketing for Real Estate in Lima",
    descriptionEs: "Marketing digital para inmobiliarias, desarrolladoras y proyectos en Lima y Perú: campañas de captación de leads en Meta Ads y Google Ads, landing pages de proyecto, integración con CRM y seguimiento por WhatsApp con costo por lead medible.",
    descriptionEn: "Digital marketing for real estate developers and projects in Lima and Peru: lead generation campaigns on Meta Ads and Google Ads, project landing pages, CRM integration and WhatsApp follow-up with measurable cost per lead.",
    serviceType: "Real Estate Marketing / Lead Generation",
    minPriceEs: 3000,
    maxPriceEs: 15000,
    offerPriceEs: 3000,
    offerPriceEn: 850,
    audienceTypes: ["Real estate developers", "Brokers", "Property projects"],
  })

  const faqItems = Object.values(faqMessages).map((q: any) => ({
    question: q.question,
    answer: q.answer,
  }))
  const faqSchema = buildFAQPageSchema(faqItems)

  const breadcrumbSchema = generateBreadcrumbSchema(
    [{ name: isEn ? 'Home' : 'Inicio', path: '' }, { name: isEn ? 'Services' : 'Servicios', path: '/servicios' }, { name: isEn ? "Real Estate Marketing" : "Marketing Inmobiliario", path: '/servicios/marketing-inmobiliarias' }],
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
