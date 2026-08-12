import type { Metadata } from "next"
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/metadata"
import { buildFAQPageSchema, buildServiceSchema } from "@/lib/seoSchemas"
import { getMessages } from "next-intl/server"

export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata({
    locale,
    path: '/servicios/relaciones-publicas',
    titleEs: "Agencia de Relaciones Públicas en Lima, Perú — Prensa y Reputación | 3R Core",
    titleEn: "Public Relations Agency — Press, Reputation and Crisis Response | 3R Core",
    titleUs: "Agencia de Relaciones Públicas en Español para EE.UU. | 3R Core",
    descriptionEs: "Relaciones públicas en Lima: estrategia de prensa, ángulos noticiables, redacción de notas, gestión con medios, preparación de voceros y gestión de crisis. Cobertura real, no notas pagadas.",
    descriptionEn: "Public relations for brands entering or growing in the U.S.: media mapping, newsworthy angles, press materials, one-to-one outreach, spokesperson prep and crisis response. Earned coverage, not paid placements.",
    descriptionUs: "Relaciones públicas en español para negocios en Estados Unidos: mapa de medios hispanos, ángulos noticiables, redacción, gestión con periodistas y manejo de crisis.",
  })
}

export default async function RelacionesPublicasLayout({ children, params }: { children: React.ReactNode; params: any }) {
  const { locale } = await params
  const messages = (await getMessages()) as any
  const isEn = locale === 'en'
  const faqMessages = messages?.PrFAQ?.faqs ?? {}

  const serviceSchema = buildServiceSchema({
    locale,
    path: '/servicios/relaciones-publicas',
    nameEs: "Agencia de Relaciones Públicas, Prensa y Reputación",
    nameEn: "Public Relations, Press and Reputation Agency",
    descriptionEs: "Servicio de relaciones públicas: mapa de medios por relevancia comercial, identificación de ángulos noticiables, redacción de notas de prensa y dossier, gestión y seguimiento uno a uno con periodistas, preparación de voceros, gestión de crisis de reputación y reporte de cobertura con enlaces obtenidos.",
    descriptionEn: "Public relations service: media mapping by commercial relevance, newsworthy angle identification, press release and media kit writing, one-to-one journalist outreach and follow-up, spokesperson preparation, reputation crisis management and coverage reporting including earned links.",
    serviceType: "Public Relations / Media Relations / Reputation Management",
    minPriceEs: 3000,
    maxPriceEs: 18000,
    offerPriceEs: 3000,
    offerPriceEn: 2000,
    audienceTypes: ["B2B", "Startups", "Corporate", "Consumer brands"],
  })

  const faqItems = Object.values(faqMessages).map((q: any) => ({
    question: q.question,
    answer: q.answer,
  }))
  const faqSchema = buildFAQPageSchema(faqItems)

  const breadcrumbSchema = generateBreadcrumbSchema(
    [
      { name: isEn ? 'Home' : 'Inicio', path: '' },
      { name: isEn ? 'Services' : 'Servicios', path: '/servicios' },
      { name: isEn ? "Public Relations" : "Relaciones Públicas", path: '/servicios/relaciones-publicas' },
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
