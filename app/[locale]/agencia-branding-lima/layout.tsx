import type { Metadata } from "next"
import { generatePageMetadata, generateBreadcrumbSchema, BASE_URL } from "@/lib/metadata"
import { buildFAQPageSchema, buildSpeakableSchema, buildServiceSchema } from "@/lib/seoSchemas"

export const revalidate = 3600

export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata({
    locale,
    path: '/agencia-branding-lima',
    titleEs: 'Agencia de Branding en Lima — Logotipo, Identidad y Manual de Marca | 3R Core',
    titleEn: 'Branding Agency in Lima — Logo, Identity & Brand Manual | 3R Core',
    descriptionEs: 'Estudio de branding e identidad de marca en Lima, Perú: logotipo, paleta cromática, tipografía, manual de marca y aplicaciones desde S/500. Rebranding y naming para empresas en Perú y Estados Unidos.',
    descriptionEn: 'Branding and visual identity studio for US clients: logo, color palette, typography, brand manual and applications from $500. Rebranding and naming for companies in the United States.',
    ogImage: {
      url: 'https://3rcore.com/og/default.jpg',
      width: 1200,
      height: 630,
      alt: '3R Core - Agencia de Branding en Lima, Perú',
    },
  })
}

export default async function BrandingLimaLayout({ children, params }: { children: React.ReactNode; params: any }) {
  const { locale } = await params
  const isEn = locale === 'en'

  const breadcrumbSchema = generateBreadcrumbSchema(
    [
      { name: isEn ? 'Home' : 'Inicio', path: '' },
      { name: isEn ? 'Branding Agency in Lima' : 'Agencia de Branding en Lima', path: '/agencia-branding-lima' },
    ],
    locale
  )

  const serviceSchema = buildServiceSchema({
    locale,
    path: '/agencia-branding-lima',
    nameEs: 'Agencia de Branding en Lima',
    nameEn: 'Branding Agency for U.S. Brands',
    descriptionEs: 'Diseño de identidad de marca, logotipo, paleta cromática, tipografía, manual de marca, naming y aplicaciones desde Lima, Perú.',
    descriptionEn: 'Brand identity design, logo, color palette, typography, brand manual, naming and applications from Lima, Peru.',
    serviceType: 'Branding and Visual Identity',
    minPriceEs: 500,
    maxPriceEs: 12000,
    offerPriceEs: 500,
    offerPriceEn: 500,
    areaServed: ['PE', 'US'],
  })

  const faq = buildFAQPageSchema([
    {
      question: isEn ? 'How much does logo and branding design cost in Lima?' : '¿Cuánto cuesta diseñar un logo y branding en Lima?',
      answer: isEn
        ? 'Reference prices for US clients: Express logo $500, basic branding pack with manual $850, full brand identity (research + naming + logo + manual + applications) from $1,500 and rebranding from $2,500. Net prices in US Dollars.'
        : 'Precios referenciales: logo express S/500, pack branding básico con manual S/1,800, identidad de marca completa (research + naming + logo + manual + aplicaciones) desde S/4,500 y rebranding desde S/8,000. Precios netos, factura electrónica suma 18% de IGV.',
    },
    {
      question: isEn ? 'What is included in the brand manual?' : '¿Qué incluye el manual de marca?',
      answer: isEn
        ? 'Logo construction with safety margins and minimum sizes, primary and secondary color palette in print and digital values (Pantone, CMYK, RGB, HEX), corporate typography hierarchy, photography and illustration style, voice & tone, applications (business cards, social media, signage, merchandising) and use cases plus a "no’s" section.'
        : 'Construcción del logotipo con márgenes de seguridad y tamaños mínimos, paleta primaria y secundaria con valores impresos y digitales (Pantone, CMYK, RGB, HEX), jerarquía tipográfica, estilo fotográfico e ilustración, voz y tono, aplicaciones (tarjetas, redes, señalética, merchandising) y casos de uso más sección de "no se debe".',
    },
    {
      question: isEn ? 'Do you do naming and brand strategy?' : '¿Hacen naming y estrategia de marca?',
      answer: isEn
        ? 'Yes. Naming process includes positioning workshop, semantic territory map, brainstorming, shortlist of 8–12 names, linguistic and trademark availability check in INDECOPI (Peru) and USPTO (US), and final justification document for stakeholders.'
        : 'Sí. El proceso de naming incluye workshop de posicionamiento, mapa de territorios semánticos, brainstorming, shortlist de 8 a 12 nombres, chequeo lingüístico y de disponibilidad marcaria en INDECOPI (Perú) y USPTO (EE. UU.), y documento de justificación final para stakeholders.',
    },
    {
      question: isEn ? 'How long does a complete branding project take?' : '¿Cuánto tarda un proyecto completo de branding?',
      answer: isEn
        ? 'Express logo: 1 week. Basic branding pack: 2–3 weeks. Full brand identity: 6–8 weeks with research, two rounds of concept review and one of refinement. Rebranding with multiple touchpoints: 10–14 weeks.'
        : 'Logo express: 1 semana. Pack branding básico: 2–3 semanas. Identidad completa: 6–8 semanas con investigación, dos rondas de revisión de concepto y una de afinamiento. Rebranding con múltiples touchpoints: 10–14 semanas.',
    },
    {
      question: isEn ? 'Do you protect intellectual property?' : '¿Aseguran la propiedad intelectual del diseño?',
      answer: isEn
        ? 'Yes. Once the project is paid in full we transfer full rights to the client and deliver editable files (Adobe Illustrator, Figma, Photoshop) plus final formats (SVG, PDF, PNG, EPS). We never re-sell or reuse client logos.'
        : 'Sí. Al cierre del proyecto y con el pago completo transferimos todos los derechos al cliente y entregamos archivos editables (Adobe Illustrator, Figma, Photoshop) más formatos finales (SVG, PDF, PNG, EPS). No reciclamos ni revendemos logos de clientes.',
    },
    {
      question: isEn ? 'Do you register trademarks in INDECOPI?' : '¿Registran la marca en INDECOPI?',
      answer: isEn
        ? 'We do not file the registration ourselves (it is a legal step), but we deliver every document and digital asset that INDECOPI requires and coordinate with the client trademark lawyer. We have allied IP attorneys we can recommend if needed.'
        : 'No realizamos directamente el trámite (es un paso legal), pero entregamos toda la documentación y archivos digitales que INDECOPI exige y coordinamos con el abogado de marcas del cliente. Tenemos abogados de PI aliados que podemos recomendar si hace falta.',
    },
  ])

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${BASE_URL}/${locale}/agencia-branding-lima#webpage`,
    "url": `${BASE_URL}/${locale}/agencia-branding-lima`,
    "name": isEn ? 'Branding Agency in Lima — 3R Core' : 'Agencia de Branding en Lima — 3R Core',
    "inLanguage": isEn ? 'en' : 'es',
    "isPartOf": { "@id": `${BASE_URL}/#website` },
    "about": { "@id": `${BASE_URL}/#organization` },
    "speakable": buildSpeakableSchema(['h1', 'h2', '.brand-intro']),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([webPage, serviceSchema, faq, breadcrumbSchema]) }}
      />
      {children}
    </>
  )
}
