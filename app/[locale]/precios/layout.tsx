import type { Metadata } from "next"
import { generatePageMetadata, generateBreadcrumbSchema, BASE_URL } from "@/lib/metadata"
import { buildOfferCatalogSchema, buildSpeakableSchema } from "@/lib/seoSchemas"

export const revalidate = 3600

export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata({
    locale,
    path: '/precios',
    titleEs: 'Precios de Marketing Digital en Lima, Perú | 3R Core',
    titleEn: 'Pricing — Digital Marketing in USD | 3R Core',
    descriptionEs: 'Precios referenciales en Lima: branding desde S/500, SEO S/1,800/mes, Google Ads desde S/1,800/mes de gestión y webs desde S/1,800. Netos + 18% IGV.',
    descriptionEn: 'SEO $500/month, websites from $850 and online stores from $1,750. Net prices in U.S. dollars for clients based in the United States, with no mandatory contracts.',
    titleUs: 'Precios de Marketing Digital en Dólares | 3R Core',
    descriptionUs: 'Precios para negocios en Estados Unidos: SEO $500/mes, páginas web desde $850 y tiendas online desde $1,750. Precios netos en dólares, sin contratos forzosos.',
  })
}

export default async function PreciosLayout({ children, params }: { children: React.ReactNode; params: any }) {
  const { locale } = await params
  const isEn = locale === 'en'

  const breadcrumbSchema = generateBreadcrumbSchema(
    [
      { name: isEn ? 'Home' : 'Inicio', path: '' },
      { name: isEn ? 'Pricing' : 'Precios', path: '/precios' },
    ],
    locale
  )

  // 28-ago-2026. El OfferCatalog publicaba los siete servicios en los tres
  // mercados. En EE.UU. solo se venden tres (web, SEO y tiendas online) y las
  // páginas de los otros van con `noindex` allí: el schema estaba ofreciendo a
  // Google un catálogo que la propia web pide no indexar. Perú mantiene los
  // siete, que es donde sí se venden.
  const SOLO_PERU = ['Branding', 'Social Media Management', 'Google Ads / SEM']
  const catalogoCompleto = [
    { name: isEn ? 'Branding starter package' : 'Paquete branding inicial', priceEs: 500, priceEn: 500, serviceType: 'Branding', path: '/servicios/branding', descriptionEs: 'Identidad visual con logotipo, manual de marca, paleta cromática, tipografía y aplicaciones.', descriptionEn: 'Visual identity with logo, brand manual, color palette, typography and applications.' },
    { name: isEn ? 'Social media management' : 'Manejo de redes sociales', priceEs: 1500, priceEn: 800, serviceType: 'Social Media Management', path: '/servicios/socialmedia', descriptionEs: 'TikTok, Instagram, Facebook y LinkedIn con 8–12 piezas mensuales y reporte mensual.', descriptionEn: 'TikTok, Instagram, Facebook and LinkedIn with 8–12 pieces per month and monthly report.' },
    { name: isEn ? 'SEO positioning' : 'Posicionamiento SEO', priceEs: 1800, priceEn: 500, serviceType: 'SEO', path: '/posicionamiento-seo', descriptionEs: 'Auditoría, planificación, optimización, escalamiento y reportes mensuales sin contratos forzosos.', descriptionEn: 'Audit, planning, optimization, scaling and monthly reports with no mandatory contracts.' },
    { name: isEn ? 'Google Ads management' : 'Gestión Google Ads', priceEs: 1800, priceEn: 800, serviceType: 'Google Ads / SEM', path: '/servicios/google-ads', descriptionEs: 'Fee de gestión de Search, Performance Max, YouTube, Display y Shopping. La pauta se paga directamente a Google con un mínimo de S/1,500/mes.', descriptionUs: 'Fee de gestión de Search, Performance Max, YouTube, Display y Shopping. La pauta se paga directamente a Google con un mínimo de $400/mes.', descriptionEn: 'Management fee for Search, Performance Max, YouTube, Display and Shopping. Ad spend paid directly to Google with a minimum of $400/month.' },
    { name: isEn ? 'Landing page' : 'Landing page profesional', priceEs: 1800, priceEn: 850, serviceType: 'Web Development', path: '/servicios/web-development', descriptionEs: 'Landing page profesional con diseño a medida, SEO técnico básico y formulario de contacto.', descriptionEn: 'Professional landing page with custom design, basic technical SEO and contact form.' },
    { name: isEn ? 'Corporate website' : 'Web corporativa', priceEs: 4500, priceEn: 1200, serviceType: 'Web Development', path: '/servicios/web-development', descriptionEs: 'Web corporativa de 5–8 secciones. Rango S/4,500–9,000 según alcance.', descriptionUs: 'Web corporativa de 5–8 secciones. Rango $1,200–$2,400 según alcance.', descriptionEn: '5–8 section corporate site. Range $1,200–$2,400 depending on scope.' },
    { name: isEn ? 'E-commerce Shopify / WooCommerce' : 'E-commerce Shopify / WooCommerce', priceEs: 6500, priceEn: 1750, serviceType: 'Web Development', path: '/servicios/web-development', descriptionEs: 'Tienda online con catálogo, pasarela de pago (Culqi, Niubiz, Izipay o Mercado Pago), gestión de inventario y panel admin.', descriptionUs: 'Tienda online con catálogo, pasarela de pago (Stripe, PayPal o Shopify Payments), gestión de inventario y panel admin.', descriptionEn: 'Online store with catalog, payment gateway, inventory management and admin panel.' },
  ]
  const offerCatalog = buildOfferCatalogSchema(
    locale,
    locale === 'es' ? catalogoCompleto : catalogoCompleto.filter((o) => !SOLO_PERU.includes(o.serviceType))
  )

  const pricingPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${BASE_URL}/${locale}/precios#webpage`,
    "url": `${BASE_URL}/${locale}/precios`,
    "name": isEn ? 'Pricing — 3R Core' : 'Precios — 3R Core',
    "inLanguage": isEn ? 'en' : 'es',
    "isPartOf": { "@id": `${BASE_URL}/#website` },
    "about": { "@id": `${BASE_URL}/#organization` },
    "speakable": buildSpeakableSchema(['h1', 'h2', '.pricing-card']),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([pricingPageSchema, offerCatalog, breadcrumbSchema]) }}
      />
      {children}
    </>
  )
}
