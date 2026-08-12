import type { Metadata } from "next"
import { generatePageMetadata, generateBreadcrumbSchema, BASE_URL } from "@/lib/metadata"
import { buildPersonSchemas, buildSpeakableSchema } from "@/lib/seoSchemas"

export const revalidate = 3600

export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata({
    locale,
    path: '/nosotros',
    titleEs: 'Nosotros — Agencia de Marketing Digital en Lima, Perú | 3R Core',
    titleEn: 'About Us — A Peruvian Agency Serving the U.S. | 3R Core',
    descriptionEs: 'Conoce al equipo de 3R Core: Alejandro, Bruno y Piero Roque. Agencia familiar de marketing digital en La Molina, Lima, Perú. Branding, SEO, Google Ads, redes sociales y desarrollo web con visión de 3 generaciones.',
    descriptionEn: '3R Core is a family-run agency in Lima, Peru serving U.S. brands remotely through its U.S. subsidiary, on overlapping business hours and billing in USD.',
    titleUs: 'Nosotros — Agencia de Marketing Digital para EE.UU. | 3R Core',
    descriptionUs: 'Conoce al equipo de 3R Core: Alejandro, Bruno y Piero Roque. Agencia familiar con equipo propio en Lima que atiende a negocios de Estados Unidos en horario compatible y facturando en dólares.',
  })
}

export default async function NosotrosLayout({ children, params }: { children: React.ReactNode; params: any }) {
  const { locale } = await params
  const isEn = locale === 'en'

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${BASE_URL}/${locale}/nosotros#aboutpage`,
    "url": `${BASE_URL}/${locale}/nosotros`,
    "name": isEn ? "About 3R Core" : "Sobre 3R Core",
    "description": isEn
      ? "3R Core is a family-owned digital marketing agency in Lima, Peru combining Experience, Vision and Technology across branding, social media, SEO, Google Ads and web development."
      : "3R Core es una agencia familiar de marketing digital en Lima, Perú que combina Experiencia, Visión y Tecnología en branding, social media, SEO, Google Ads y desarrollo web.",
    "mainEntity": { "@id": `${BASE_URL}/#organization` },
    "inLanguage": isEn ? 'en' : 'es',
    "speakable": buildSpeakableSchema(['h1', 'h2', '.hidden-h1', '.about-intro']),
  }

  const personSchemas = buildPersonSchemas(locale, [
    {
      name: 'Alejandro Roque',
      role: isEn ? 'CEO at 3R Core' : 'CEO de 3R Core',
      image: '/images/Fundadores/AlejandroAlta1.webp',
    },
    {
      name: 'Bruno Roque',
      role: isEn ? 'Marketing Director at 3R Core' : 'Director de Marketing en 3R Core',
      image: '/images/Fundadores/BrunoAlta.webp',
    },
    {
      name: 'Piero Roque',
      role: isEn ? 'SEO & Google Ads Analyst at 3R Core' : 'Analista de SEO y Google Ads en 3R Core',
      image: '/images/Fundadores/PieroAlta.webp',
    },
  ])

  const breadcrumbSchema = generateBreadcrumbSchema(
    [
      { name: isEn ? 'Home' : 'Inicio', path: '' },
      { name: isEn ? 'About Us' : 'Nosotros', path: '/nosotros' },
    ],
    locale
  )

  const hiddenH1 = isEn
    ? 'Digital marketing agency in Lima, Peru — Roque family team: branding, SEO, Google Ads, social media and web development'
    : 'Agencia de marketing digital en Lima, Perú — equipo familiar Roque: branding, SEO, Google Ads, redes sociales y desarrollo web'

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([aboutSchema, breadcrumbSchema, ...personSchemas]) }}
      />
      <h1 className="sr-only">{hiddenH1}</h1>
      {children}
    </>
  )
}
