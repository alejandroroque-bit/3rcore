import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"

export const revalidate = 3600

export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata({
    locale,
    path: '/servicios',
    titleEs: 'Servicios de Marketing Digital en Lima, Perú — Branding, SEO, Google Ads, Redes y Web | 3R Core',
    titleEn: 'Digital Marketing Services in Lima, Peru — Branding, SEO, Google Ads, Social Media & Web | 3R Core',
    descriptionEs: 'Catálogo completo de servicios de marketing digital de 3R Core en Lima, Perú: branding, manejo de redes sociales, Google Ads, posicionamiento SEO y desarrollo web. Estrategias personalizadas con reportes mensuales y resultados medibles.',
    descriptionEn: 'Full catalog of 3R Core digital marketing services in Lima, Peru: branding, social media management, Google Ads, SEO positioning and web development. Personalized strategies with monthly reports and measurable results.',
    titleUs: 'Servicios de Marketing Digital en Español para EE.UU. | 3R Core',
    descriptionUs: 'Catálogo completo de servicios de 3R Core para negocios en Estados Unidos: contenido UGC, influencer marketing, relaciones públicas, Google Ads, Meta Ads, SEO, branding y desarrollo web. Precios en dólares.',
  })
}

// Este layout ya NO inyecta JSON-LD: el CollectionPage + ItemList +
// BreadcrumbList del índice se heredaba en todas las páginas hijas
// /servicios/* (schema de otra URL + breadcrumb duplicado). Ese bloque vive
// ahora en lib/servicios-index-schema.ts y solo lo renderiza el índice
// (servicios/page.tsx).
export default function ServiciosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
