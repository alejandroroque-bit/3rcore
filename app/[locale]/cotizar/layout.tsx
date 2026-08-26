import type { Metadata } from "next"
import { generatePageMetadata, generateBreadcrumbSchema, BASE_URL } from "@/lib/metadata"

export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata({
    locale,
    path: '/cotizar',
    titleEs: 'Cotizador online: precio de tu proyecto | 3R Core',
    titleEn: 'Instant Quote Calculator in USD | 3R Core',
    descriptionEs: 'Cuánto te costaría tu tienda virtual, web, SEO, Google Ads o branding en Perú. Estimado en un minuto, sin dejar el correo y sin compromiso.',
    descriptionEn: 'Estimate a reference price in U.S. dollars for your online store, website, SEO, Google Ads, branding or social media in under a minute.',
    titleUs: 'Cotizador online en dólares | 3R Core',
    descriptionUs: 'Cuánto te costaría tu tienda online, web, SEO, Google Ads o branding en dólares. Estimado en un minuto, sin dejar el correo y sin compromiso.',
  })
}

export default async function CotizarLayout({ children, params }: { children: React.ReactNode; params: any }) {
  const { locale } = await params
  const isEn = locale === 'en'

  const breadcrumbSchema = generateBreadcrumbSchema(
    [
      { name: isEn ? 'Home' : 'Inicio', path: '' },
      { name: isEn ? 'Quote calculator' : 'Cotizador', path: '/cotizar' },
    ],
    locale
  )

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${BASE_URL}/${locale}/cotizar#webpage`,
    "url": `${BASE_URL}/${locale}/cotizar`,
    "name": isEn ? 'Online quote calculator — 3R Core' : 'Cotizador online — 3R Core',
    "inLanguage": isEn ? 'en' : 'es',
    "isPartOf": { "@id": `${BASE_URL}/#website` },
    "publisher": { "@id": `${BASE_URL}/#organization` },
    "description": isEn
      ? 'Reference-price calculator for online stores, websites, SEO, Google Ads, branding and social media in Lima, Peru.'
      : 'Calculadora de estimado referencial para tiendas virtuales, webs, SEO, Google Ads, branding y redes sociales en Lima, Perú.',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([webPageSchema, breadcrumbSchema]) }}
      />
      {children}
    </>
  )
}
