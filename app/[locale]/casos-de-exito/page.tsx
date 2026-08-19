import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { BASE_URL, generateBreadcrumbSchema } from "@/lib/metadata"
import ProtoPage from "@/components/proto/ProtoPage"

const PATH = '/casos-de-exito'

export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  const { locale } = await params
  // Solo existe en es: la página del prototipo habla de marcas trabajadas
  // desde Lima. Sin alternates: no hay versión us ni en.
  if (locale !== 'es') return { robots: { index: false, follow: false } }

  const title = "Casos de Éxito: Marcas que Trabajaron con Nosotros | 3R Core"
  const description = "Marcas reales que pasaron por 3R Core, qué se hizo en cada una y qué se entregó: webs, tiendas online, SEO, Google Ads, redes y branding. Sin gráficos inventados ni porcentajes incomprobables."

  return {
    title,
    description,
    alternates: { canonical: `${BASE_URL}/es${PATH}` },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/es${PATH}`,
      siteName: '3R Core',
      locale: 'es_PE',
      type: 'website',
      images: [{ url: `${BASE_URL}/og/default.jpg`, width: 1200, height: 630, alt: '3R Core - Casos de éxito' }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${BASE_URL}/og/default.jpg`],
    },
  }
}

export default async function CasosDeExitoPage({ params }: { params: any }) {
  const { locale } = await params
  if (locale !== 'es') notFound()

  const breadcrumbSchema = generateBreadcrumbSchema(
    [
      { name: 'Inicio', path: '' },
      { name: 'Casos de éxito', path: PATH },
    ],
    locale
  )

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ProtoPage frag="casos-de-exito" />
    </>
  )
}
