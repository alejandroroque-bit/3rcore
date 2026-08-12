import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { BASE_URL, generateBreadcrumbSchema } from "@/lib/metadata"
import { buildFAQPageSchema, buildServiceSchema } from "@/lib/seoSchemas"
import { getMessages } from "next-intl/server"

const PATH = '/marketing-para-negocios-hispanos'

export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  const { locale } = await params
  // Solo existe en es-US. Sin alternates: no hay versión peruana ni inglesa
  // de esta página, y declararlas apuntaría a URLs inexistentes.
  if (locale !== 'us') return { robots: { index: false, follow: false } }

  const title = "Marketing Digital en Español para Negocios Hispanos en EE.UU. | 3R Core"
  const description = "Agencia de marketing digital en español para negocios hispanos en Estados Unidos: campañas de Google Ads y Meta en español, video UGC con creadores hispanohablantes, SEO en español y páginas bilingües. Precios en dólares."

  return {
    title,
    description,
    alternates: { canonical: `${BASE_URL}/us${PATH}` },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/us${PATH}`,
      siteName: '3R Core',
      locale: 'es_US',
      type: 'website',
      images: [{ url: `${BASE_URL}/og/default.jpg`, width: 1200, height: 630, alt: '3R Core - Marketing en español para Estados Unidos' }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${BASE_URL}/og/default.jpg`],
    },
  }
}

export default async function HispanicLayout({ children, params }: { children: React.ReactNode; params: any }) {
  const { locale } = await params
  if (locale !== 'us') notFound()

  const messages = (await getMessages()) as any
  const faqMessages = messages?.HispanicFAQ?.faqs ?? {}

  const serviceSchema = buildServiceSchema({
    locale,
    path: PATH,
    nameEs: "Marketing Digital en Español para Negocios Hispanos en Estados Unidos",
    nameEn: "Spanish-language Digital Marketing for Hispanic Businesses in the United States",
    descriptionEs: "Servicio de marketing digital en español para negocios que atienden al público hispano en Estados Unidos: campañas de Google Ads y Meta segmentadas por idioma y ciudad, producción de video UGC con creadores hispanohablantes, posicionamiento SEO para búsquedas en español, sitios bilingües correctamente marcados y captación por WhatsApp con medición completa.",
    descriptionEn: "Spanish-language digital marketing for businesses serving Hispanic audiences in the United States: language- and city-targeted Google Ads and Meta campaigns, UGC video with Spanish-speaking creators, Spanish-language SEO, correctly marked bilingual websites and WhatsApp lead capture with full tracking.",
    serviceType: "Hispanic Marketing / Spanish-language Digital Marketing",
    offerPriceEn: 900,
    audienceTypes: ["Local business", "E-commerce", "Healthcare", "Legal services", "Home services"],
  })

  const faqItems = Object.values(faqMessages).map((q: any) => ({
    question: q.question,
    answer: q.answer,
  }))
  const faqSchema = buildFAQPageSchema(faqItems)

  const breadcrumbSchema = generateBreadcrumbSchema(
    [
      { name: 'Inicio', path: '' },
      { name: 'Marketing para negocios hispanos', path: PATH },
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
