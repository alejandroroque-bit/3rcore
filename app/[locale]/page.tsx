import { getTranslations, setRequestLocale } from "next-intl/server"
import HomeClient from "./HomeClient"
import HomeClientV2 from "./HomeClientV2"
import HomeSeoSection from "@/components/sections/home/HomeSeoSection"
import SsrReviews from "@/components/seo/SsrReviews"
import { buildServiceItemList, buildSpeakableWebPage } from "@/lib/seoSchemas"

export default async function HomePage({ params }: { params: any }) {
  const { locale } = await params
  // Renderizado estático: sin esto next-intl marca la ruta como dinámica y
  // Vercel devuelve `no-store` en cada visita.
  setRequestLocale(locale);

  const isEn = locale === 'en'
  const tH1 = await getTranslations({ locale, namespace: "HiddenH1" })

  const itemListSchema = buildServiceItemList({
    locale,
    items: [
      {
        name: isEn ? "Web Design & Development" : "Diseño y Desarrollo Web",
        path: "/servicios/web-development",
        description: isEn ? "Custom websites, landing pages and e-commerce." : "Sitios web a medida, landing pages y e-commerce.",
      },
      {
        name: isEn ? "Social Media Management" : "Manejo de Redes Sociales",
        path: "/servicios/socialmedia",
        description: isEn ? "Strategy, content and community management." : "Estrategia, contenido y community management.",
      },
      {
        name: isEn ? "Corporate Branding" : "Branding Corporativo",
        path: "/servicios/branding",
        description: isEn ? "Visual identity, logo and brand book." : "Identidad visual, logotipo y manual de marca.",
      },
      {
        name: isEn ? "Google Ads" : "Google Ads",
        path: "/servicios/google-ads",
        description: isEn ? "SEM campaigns with measurable ROI." : "Campañas SEM con ROI medible.",
      },
      {
        name: isEn ? "SEO Positioning" : "Posicionamiento SEO",
        path: "/posicionamiento-seo",
        description: isEn ? "Organic Google ranking and authority building." : "Ranking orgánico en Google y construcción de autoridad.",
      },
    ],
  })

  const speakableSchema = buildSpeakableWebPage({
    locale,
    path: "",
    nameEs: "3R Core — Agencia de Marketing Digital en Lima",
    nameEn: "3R Core — Digital Marketing Agency in Lima",
    cssSelector: ["h1", "h2"],
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([itemListSchema, speakableSchema]) }}
      />
      {/* El cliente descartó la home del prototipo: /es y /us sirven el
          rediseño de Aymar (HomeClientV2; en /us el grid baja a los 3
          servicios de ese mercado con precios en dólares); /en conserva la
          home original en inglés. Todas comparten el h1 sr-only y el bloque
          semántico SSR. */}
      <h1 className="sr-only">{tH1("home")}</h1>
      {locale === 'en' ? <HomeClient /> : <HomeClientV2 />}
      {/* Contenido semántico del home renderizado en el servidor (SSR real):
          pilares + señales locales para Googlebot y bots de IA que no ejecutan
          JS. HomeClient (arriba) es 'use client' y se hidrata en el navegador. */}
      <HomeSeoSection locale={locale} />
      {/* Reputación en el HTML inicial: el carrusel de reseñas es cliente y los
          bots de IA no ejecutan JS. Mismas reseñas que el JSON-LD. */}
      <SsrReviews locale={locale} />
    </>
  )
}
