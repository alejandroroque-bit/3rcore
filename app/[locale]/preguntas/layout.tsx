import type { Metadata } from "next"
import { generatePageMetadata, generateBreadcrumbSchema, BASE_URL } from "@/lib/metadata"
import { buildSpeakableSchema } from "@/lib/seoSchemas"
import { getMessages } from "next-intl/server"

export const revalidate = 3600

export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata({
    locale,
    path: '/preguntas',
    titleEs: 'Preguntas Frecuentes — Marketing Digital, SEO, Google Ads y Web | 3R Core',
    titleEn: 'FAQ — Working With Our Peru-Based Team | 3R Core',
    descriptionEs: 'Respuestas a las preguntas más frecuentes sobre nuestros servicios de marketing digital en Lima, Perú: precios, plazos, contratos, branding, social media, Google Ads, SEO y desarrollo web.',
    descriptionEn: 'How a Peruvian agency serves U.S. clients: pricing in USD, time zones, contracts, invoicing through our U.S. subsidiary and who owns the work.',
    titleUs: 'Preguntas Frecuentes — Marketing Digital en Español para EE.UU. | 3R Core',
    descriptionUs: 'Respuestas a las preguntas más frecuentes sobre nuestros servicios para negocios en Estados Unidos: precios en dólares, plazos, contratos, contenido UGC, Google Ads, SEO y desarrollo web.',
  })
}

export default async function PreguntasLayout({ children, params }: { children: React.ReactNode; params: any }) {
  const { locale } = await params
  const isEn = locale === 'en'
  const messages = await getMessages() as any
  const faq = messages?.FAQ

  const breadcrumbSchema = generateBreadcrumbSchema(
    [{ name: isEn ? 'Home' : 'Inicio', path: '' }, { name: 'FAQ', path: '/preguntas' }],
    locale
  )

  const faqItems = faq?.faqs ? Object.values(faq.faqs).map((q: any) => ({
    "@type": "Question",
    "name": q.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": q.answer,
    },
  })) : []

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${BASE_URL}/${locale}/preguntas#faqpage`,
    "url": `${BASE_URL}/${locale}/preguntas`,
    "inLanguage": isEn ? 'en' : 'es',
    "mainEntity": faqItems,
    "speakable": buildSpeakableSchema(['h1', 'h2', '.faq-question', '.faq-answer']),
  }

  const hiddenH1 = isEn
    ? 'Frequently asked questions about digital marketing in Lima, Peru — pricing, branding, SEO, Google Ads, social media and web development'
    : 'Preguntas frecuentes sobre marketing digital en Lima, Perú — precios, branding, SEO, Google Ads, redes sociales y desarrollo web'

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, breadcrumbSchema]) }}
      />
      {children}
    </>
  )
}
