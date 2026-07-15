'use client'

import { useEffect, useRef } from 'react'
import { Link } from '@/i18n/navigation'

/**
 * BlogCTA — bloque de conversión al final (y opcionalmente en medio) de cada blog.
 * Mapea el slug del post al servicio 3R Core más relevante y mide TODO en GTM
 * (dataLayer): blog_cta_view (impresión, 1 vez por visible), blog_cta_click
 * (clic al servicio) y blog_cta_whatsapp (clic a WhatsApp). Recursos propios,
 * sin terceros: el WhatsApp va al número de agenda y el botón lleva a la landing
 * de servicio (que captura con el formulario/panel propio).
 */

const WA_PHONE = '51987216703'

type ServiceKey =
  | 'web' | 'branding' | 'meta-ads' | 'tiktok-ads' | 'google-ads'
  | 'performance' | 'email' | 'seo' | 'social' | 'clinicas'
  | 'inmobiliarias' | 'ecommerce' | 'tiendas'

interface ServiceCTA {
  path: string
  es: { eyebrow: string; headline: string; sub: string; btn: string; wa: string }
  en: { eyebrow: string; headline: string; sub: string; btn: string; wa: string }
}

const SERVICES: Record<ServiceKey, ServiceCTA> = {
  web: {
    path: '/servicios/web-development',
    es: { eyebrow: 'Diseño y desarrollo web', headline: '¿Listo para una web que sí te traiga clientes?', sub: 'Diseñamos webs rápidas, optimizadas para Google y pensadas para convertir. Cotiza tu proyecto sin compromiso.', btn: 'Ver servicio de diseño web', wa: 'Cotizar mi web por WhatsApp' },
    en: { eyebrow: 'Web design & development', headline: 'Ready for a website that brings you clients?', sub: 'Fast, SEO-ready websites built to convert. Get a no-commitment quote.', btn: 'See web development service', wa: 'Quote my website on WhatsApp' },
  },
  branding: {
    path: '/servicios/branding',
    es: { eyebrow: 'Branding e identidad', headline: '¿Quieres una marca que se recuerde y venda?', sub: 'Construimos identidades visuales sólidas: logo, manual de marca y aplicaciones. Agenda una asesoría.', btn: 'Ver servicio de branding', wa: 'Agendar asesoría de branding' },
    en: { eyebrow: 'Branding & identity', headline: 'Want a brand people remember and buy from?', sub: 'Solid visual identities: logo, brand manual and applications. Book a consultation.', btn: 'See branding service', wa: 'Book a branding consultation' },
  },
  'meta-ads': {
    path: '/servicios/meta-ads',
    es: { eyebrow: 'Meta Ads · Facebook e Instagram', headline: '¿Quieres campañas en Facebook e Instagram con ROAS medible?', sub: 'Gestionamos tus Meta Ads con segmentación, retargeting y creatividades que venden. Cotiza tu campaña.', btn: 'Ver servicio de Meta Ads', wa: 'Cotizar campaña de Meta Ads' },
    en: { eyebrow: 'Meta Ads · Facebook & Instagram', headline: 'Want Facebook & Instagram campaigns with measurable ROAS?', sub: 'We run your Meta Ads with targeting, retargeting and creatives that convert. Get a quote.', btn: 'See Meta Ads service', wa: 'Quote a Meta Ads campaign' },
  },
  'tiktok-ads': {
    path: '/servicios/tiktok-ads',
    es: { eyebrow: 'TikTok Ads', headline: '¿Listo para vender en TikTok con anuncios que sí funcionan?', sub: 'Creatividad nativa + segmentación para llegar a compradores jóvenes. Cotiza tu campaña de TikTok Ads.', btn: 'Ver servicio de TikTok Ads', wa: 'Cotizar campaña de TikTok Ads' },
    en: { eyebrow: 'TikTok Ads', headline: 'Ready to sell on TikTok with ads that work?', sub: 'Native creative + targeting to reach young buyers. Quote your TikTok Ads campaign.', btn: 'See TikTok Ads service', wa: 'Quote a TikTok Ads campaign' },
  },
  'google-ads': {
    path: '/servicios/google-ads',
    es: { eyebrow: 'Google Ads · SEM', headline: '¿Quieres aparecer cuando tus clientes buscan hoy?', sub: 'Campañas de Google Ads con intención de compra y presupuesto optimizado. Cotiza tu cuenta.', btn: 'Ver servicio de Google Ads', wa: 'Cotizar campaña de Google Ads' },
    en: { eyebrow: 'Google Ads · SEM', headline: 'Want to show up when your clients search today?', sub: 'High-intent Google Ads campaigns with optimized budget. Get a quote.', btn: 'See Google Ads service', wa: 'Quote a Google Ads campaign' },
  },
  performance: {
    path: '/servicios/performance-marketing',
    es: { eyebrow: 'Performance Marketing', headline: '¿Quieres crecer con marketing que se mide en ventas, no en likes?', sub: 'Adquisición multicanal enfocada en ROI/ROAS, embudos y medición real. Habla con un estratega.', btn: 'Ver Performance Marketing', wa: 'Hablar con un estratega' },
    en: { eyebrow: 'Performance Marketing', headline: 'Want growth measured in sales, not likes?', sub: 'Multichannel acquisition focused on ROI/ROAS, funnels and real measurement. Talk to a strategist.', btn: 'See Performance Marketing', wa: 'Talk to a strategist' },
  },
  email: {
    path: '/servicios/email-marketing',
    es: { eyebrow: 'Email Marketing', headline: '¿Tu lista de contactos podría venderte más?', sub: 'Campañas y automatizaciones de email que nutren y convierten. Activa tu email marketing.', btn: 'Ver servicio de Email Marketing', wa: 'Activar mi email marketing' },
    en: { eyebrow: 'Email Marketing', headline: 'Could your contact list sell you more?', sub: 'Email campaigns and automations that nurture and convert. Get started.', btn: 'See Email Marketing service', wa: 'Start my email marketing' },
  },
  seo: {
    path: '/posicionamiento-seo',
    es: { eyebrow: 'Posicionamiento SEO', headline: '¿Quieres que Google te encuentre primero?', sub: 'SEO orgánico con estrategia de keywords, contenido y reportes mensuales desde S/1,500. Cotiza tu SEO.', btn: 'Ver servicio de SEO', wa: 'Cotizar mi posicionamiento SEO' },
    en: { eyebrow: 'SEO Positioning', headline: 'Want Google to find you first?', sub: 'Organic SEO with keyword strategy, content and monthly reports. Get a quote.', btn: 'See SEO service', wa: 'Quote my SEO' },
  },
  social: {
    path: '/servicios/socialmedia',
    es: { eyebrow: 'Social Media', headline: '¿Tus redes deberían traer clientes, no solo likes?', sub: 'Estrategia de contenido, diseño y gestión de redes que construye marca y vende. Cotiza tu plan.', btn: 'Ver servicio de Social Media', wa: 'Cotizar gestión de redes' },
    en: { eyebrow: 'Social Media', headline: 'Should your social bring clients, not just likes?', sub: 'Content strategy, design and social management that builds brand and sells. Get a quote.', btn: 'See Social Media service', wa: 'Quote social media management' },
  },
  clinicas: {
    path: '/servicios/marketing-clinicas',
    es: { eyebrow: 'Marketing para clínicas', headline: '¿Quieres llenar la agenda de tu clínica o consultorio?', sub: 'Captación de pacientes con Ads y redes medibles. Agenda una asesoría para tu clínica.', btn: 'Ver marketing para clínicas', wa: 'Agendar asesoría para mi clínica' },
    en: { eyebrow: 'Marketing for clinics', headline: 'Want to fill your clinic’s appointment book?', sub: 'Patient acquisition with measurable ads and social. Book a consultation.', btn: 'See marketing for clinics', wa: 'Book a consultation for my clinic' },
  },
  inmobiliarias: {
    path: '/servicios/marketing-inmobiliarias',
    es: { eyebrow: 'Marketing inmobiliario', headline: '¿Necesitas leads de calidad para tus proyectos?', sub: 'Generación de leads para inmobiliarias y desarrolladores. Agenda una asesoría.', btn: 'Ver marketing inmobiliario', wa: 'Agendar asesoría inmobiliaria' },
    en: { eyebrow: 'Real estate marketing', headline: 'Need quality leads for your projects?', sub: 'Lead generation for real estate developers and agencies. Book a consultation.', btn: 'See real estate marketing', wa: 'Book a real estate consultation' },
  },
  tiendas: {
    path: '/servicios/tiendas-virtuales',
    es: { eyebrow: 'Tiendas Virtuales · E-commerce', headline: '¿Listo para vender online con una tienda que sí convierte?', sub: 'Creamos tu tienda en Shopify, WooCommerce o Tiendanube con pagos locales, lista para vender. Cotiza tu tienda virtual.', btn: 'Ver servicio de tiendas virtuales', wa: 'Cotizar mi tienda virtual' },
    en: { eyebrow: 'Online Stores · E-commerce', headline: 'Ready to sell online with a store that converts?', sub: 'We build your store on Shopify, WooCommerce or Tiendanube with local payments, ready to sell. Get a quote.', btn: 'See online store service', wa: 'Quote my online store' },
  },
  ecommerce: {
    path: '/servicios/marketing-ecommerce',
    es: { eyebrow: 'Marketing para e-commerce', headline: '¿Quieres escalar las ventas de tu tienda online?', sub: 'Performance marketing para e-commerce: más ventas con inversión rentable. Cotiza tu estrategia.', btn: 'Ver marketing para e-commerce', wa: 'Cotizar estrategia de e-commerce' },
    en: { eyebrow: 'E-commerce marketing', headline: 'Want to scale your online store’s sales?', sub: 'Performance marketing for e-commerce: more sales, profitable spend. Get a quote.', btn: 'See e-commerce marketing', wa: 'Quote my e-commerce strategy' },
  },
}

// Mapeo explícito slug → servicio (31 posts actuales + los 5 nuevos).
const SLUG_MAP: Record<string, ServiceKey> = {
  'cuanto-cuesta-pagina-web-peru-2026': 'web',
  'shopify-vs-woocommerce-peru-2026': 'tiendas',
  // ---- cluster Tiendas Virtuales + SEO/SEM (2026-07) ----
  'cuanto-cuesta-tienda-virtual-peru-2026': 'tiendas',
  'como-crear-tienda-online-que-venda-peru': 'tiendas',
  'pasarelas-pago-tienda-online-peru': 'tiendas',
  'shopify-woocommerce-tiendanube-peru-cual-elegir': 'tiendas',
  'errores-crear-tienda-virtual-peru': 'tiendas',
  'seo-para-ecommerce-tienda-online-peru': 'seo',
  'google-ads-shopping-tiendas-online-peru': 'google-ads',
  'como-elegir-agencia-diseno-web-lima': 'web',
  'diseno-web-responsive-peru-2026': 'web',
  'mejores-paginas-web-peruanas-2026': 'web',
  'cuanto-cuesta-branding-peru-2026': 'branding',
  'diferencia-logo-identidad-visual-branding': 'branding',
  'manual-marca-estructura-plantilla': 'branding',
  'rebranding-vs-refresh-cuando-elegir': 'branding',
  'branding-emprendedores-peru-guia': 'branding',
  'meta-ads-pymes-peru-guia-primera-campana-rentable': 'meta-ads',
  'cuanto-cuesta-publicidad-facebook-instagram-peru-2026': 'meta-ads',
  'tiktok-ads-peru-2026-guia-completa-empezar-vender': 'tiktok-ads',
  'cuanto-cuesta-anunciar-tiktok-peru-cpm-cpa': 'tiktok-ads',
  'google-ads-negocios-lima-guia-captar-clientes': 'google-ads',
  'que-es-roas-como-calcularlo-negocio-peru': 'performance',
  'como-construir-embudo-ventas-rentable-ads-peru-2026': 'performance',
  'marketing-digital-clinicas-consultorios-peru-agenda': 'clinicas',
  'marketing-digital-inmobiliarias-peru-generar-leads-calidad': 'inmobiliarias',
  'marketing-ecommerce-peru-estrategia-ads-escalar-ventas': 'ecommerce',
  'marketing-digital-restaurantes-peru-redes-ads': 'social',
  'email-marketing-negocios-peruanos-2026-guia': 'email',
  'google-analytics-4-negocios-peruanos-que-medir': 'performance',
  'pixel-meta-api-conversiones-peru-configurar': 'meta-ads',
  'palabras-clave-negativas-google-ads-peru': 'google-ads',
  'posicionar-negocio-google-maps-lima': 'seo',
  'seo-vs-google-ads-peru-cual-conviene': 'seo',
  'plan-contenido-redes-sociales-peru-plantilla': 'social',
  'automatizaciones-email-ecommerce-peru': 'email',
  'meta-ads-clinicas-dentales-esteticas-lima': 'clinicas',
  'cac-ltv-roas-metricas-negocio-peru': 'performance',
  // ---- 5 blogs nuevos ----
  'cuanto-cobra-agencia-marketing-digital-peru-2026': 'performance',
  'como-elegir-agencia-marketing-digital-lima': 'performance',
  'cuanto-invertir-publicidad-online-peru-negocio': 'performance',
  'ideas-contenido-redes-sociales-negocios-peru': 'social',
  'como-conseguir-clientes-por-internet-peru': 'performance',
}

// Fallback por heurística de palabras clave (para slugs no mapeados).
function inferService(slug: string): ServiceKey {
  const s = slug.toLowerCase()
  if (/tiktok/.test(s)) return 'tiktok-ads'
  if (/(meta-ads|facebook|instagram|pixel)/.test(s)) return 'meta-ads'
  if (/(google-ads|adwords|sem|negativas)/.test(s)) return 'google-ads'
  if (/(seo|maps|posicion)/.test(s)) return 'seo'
  if (/(branding|logo|marca|rebranding)/.test(s)) return 'branding'
  if (/(tienda|ecommerce|e-commerce|shopify|woocommerce|tiendanube|pasarela|carrito)/.test(s)) return 'tiendas'
  if (/(web|landing|pagina)/.test(s)) return 'web'
  if (/email/.test(s)) return 'email'
  if (/(redes|social|contenido)/.test(s)) return 'social'
  if (/clinic/.test(s)) return 'clinicas'
  if (/inmobili/.test(s)) return 'inmobiliarias'
  if (/(ecommerce|tienda)/.test(s)) return 'ecommerce'
  return 'performance'
}

function pushDL(payload: Record<string, unknown>) {
  if (typeof window === 'undefined') return
  ;(window as any).dataLayer = (window as any).dataLayer || []
  ;(window as any).dataLayer.push(payload)
}

export default function BlogCTA({ slug, locale, variant = 'end' }: { slug: string; locale: string; variant?: 'end' | 'inline' }) {
  const isEn = locale === 'en'
  const key: ServiceKey = SLUG_MAP[slug] || inferService(slug)
  const svc = SERVICES[key]
  const t = isEn ? svc.en : svc.es
  const ref = useRef<HTMLDivElement>(null)
  const seen = useRef(false)

  const waMsg = encodeURIComponent(
    isEn
      ? `Hi, I read your article "${slug}" and I'm interested in ${t.eyebrow}.`
      : `Hola, leí su artículo sobre ${t.eyebrow} y quiero más información.`
  )
  const waUrl = `https://wa.me/${WA_PHONE}?text=${waMsg}`

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !seen.current) {
          seen.current = true
          pushDL({ event: 'blog_cta_view', blog_slug: slug, cta_service: key, cta_variant: variant, cta_target: svc.path })
          io.disconnect()
        }
      })
    }, { threshold: 0.4 })
    io.observe(el)
    return () => io.disconnect()
  }, [slug, key, variant, svc.path])

  const onServiceClick = () =>
    pushDL({ event: 'blog_cta_click', blog_slug: slug, cta_service: key, cta_variant: variant, cta_target: svc.path })
  const onWaClick = () =>
    pushDL({ event: 'blog_cta_whatsapp', blog_slug: slug, cta_service: key, cta_variant: variant })

  return (
    <div
      ref={ref}
      className="blog-cta not-prose my-14 rounded-[22px] border border-[#A21F8A]/30 bg-gradient-to-br from-[#2F0729] to-[#1A0417] p-8 md:p-10 relative overflow-hidden"
    >
      <div className="absolute -top-16 -right-16 w-56 h-56 bg-[#E91E63]/15 rounded-full blur-[90px] pointer-events-none" />
      <span className="text-[#E91E63] text-[10px] uppercase tracking-[0.3em] font-bold mb-3 block relative z-10">
        {t.eyebrow}
      </span>
      <p className="text-2xl md:text-3xl font-bold leading-tight text-white max-w-2xl relative z-10 mb-3">
        {t.headline}
      </p>
      <p className="text-white/60 text-sm md:text-base max-w-2xl relative z-10 mb-7">
        {t.sub}
      </p>
      <div className="flex flex-col sm:flex-row gap-3 relative z-10">
        <Link
          href={svc.path}
          onClick={onServiceClick}
          data-gtm="blog-cta-service"
          className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-[14px] font-bold uppercase tracking-[0.18em] text-[11px] text-white bg-gradient-to-r from-[#E91E63] to-[#9C27B0] hover:shadow-[0_18px_50px_rgba(233,30,99,0.35)] hover:-translate-y-0.5 transition-all duration-300"
        >
          {t.btn}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
            <path d="M1 7h12M13 7L8 2M13 7l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onWaClick}
          data-gtm="blog-cta-whatsapp"
          className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-[14px] font-bold uppercase tracking-[0.18em] text-[11px] text-white border border-white/20 hover:border-[#25d366] hover:text-[#25d366] transition-all duration-300"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" /></svg>
          {t.wa}
        </a>
      </div>
    </div>
  )
}
