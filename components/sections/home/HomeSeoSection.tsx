import { Link } from '@/i18n/navigation'
import type { AppPathname } from "@/i18n/routing";

/**
 * HomeSeoSection — bloque de contenido del home renderizado 100% en el SERVIDOR.
 *
 * Motivo: el hero y las secciones visuales del home viven en HomeClient.tsx
 * ('use client') y se hidratan en el navegador, así que el HTML inicial del
 * home apenas traía ~218 palabras + el H1 sr-only. Googlebot renderiza JS y ve
 * el resto, pero (a) es frágil para el presupuesto de render y (b) los bots de
 * IA que NO ejecutan JS (GEO/AEO) recibían un home casi vacío. Esta sección
 * añade contenido semántico real (H2/H3, ~550 palabras, enlaces internos a los
 * 3 pilares y señales locales de Lima) directamente en el SSR, sin tocar la
 * experiencia animada de HomeClient. Es aditiva y reversible.
 */

type Pillar = { h: string; p: string; href: AppPathname; cta: string }

const COPY: Record<'es' | 'en' | 'us', {
  eyebrow: string
  h2: string
  intro: string
  definition: string
  pillars: Pillar[]
  secondaryH3: string
  secondary: { h: string; p: string; href: AppPathname }[]
  localH3: string
  local: string
  closing: string
  quoteCta: string
}> = {
  es: {
    eyebrow: 'Agencia de marketing digital en Lima, Perú',
    h2: 'Tiendas virtuales, SEO y Google Ads que traen clientes, no solo visitas',
    intro:
      'En 3R Core ayudamos a negocios y pymes del Perú a vender más por internet con tres pilares que trabajan juntos: creamos tu tienda virtual, te posicionamos en Google con SEO y gestionamos tus campañas de Google Ads. Todo con medición real, reportes mensuales y foco en el retorno de tu inversión (ROI), no en métricas de vanidad.',
    // Párrafo-definición citable (GEO): responde "¿qué es 3R Core?" con datos
    // concretos ya publicados en el sitio, en un solo pasaje autosuficiente.
    definition:
      '3R Core es una agencia de marketing digital fundada por los hermanos Alejandro, Bruno y Piero Roque, con oficina en La Molina, Lima (Alameda de la Paz 187, primer piso), que atiende a empresas de todo el Perú y de Estados Unidos. Está especializada en tiendas virtuales sobre Shopify, WooCommerce y Tiendanube (implementación desde S/1,500), posicionamiento SEO (S/1,800/mes) y gestión de Google Ads (desde S/1,800/mes), además de branding, redes sociales y desarrollo web, con precios publicados y sin contratos forzosos.',
    pillars: [
      {
        h: 'Tiendas virtuales y e-commerce',
        p: 'Diseñamos y desarrollamos tu tienda online en Shopify, WooCommerce o Tiendanube, con pasarelas de pago peruanas (Culqi, Niubiz, Izipay, Yape y Mercado Pago), lista para vender desde el primer día. Optimizada para móvil, rápida y pensada para convertir visitas en pedidos.',
        href: '/tiendas-virtuales-lima',
        cta: 'Ver tiendas virtuales en Lima',
      },
      {
        h: 'Posicionamiento SEO en Google',
        p: 'Trabajamos el posicionamiento orgánico de tu web con estrategia de palabras clave, contenido y SEO técnico para que tus clientes te encuentren cuando buscan lo que vendes. Reportes mensuales y resultados progresivos, sin contratos forzosos.',
        href: '/posicionamiento-seo',
        cta: 'Ver servicio de SEO',
      },
      {
        h: 'Google Ads y campañas SEM',
        p: 'Gestionamos tus campañas de Google Ads (Search, Performance Max, Shopping, YouTube y Remarketing) con intención de compra y presupuesto optimizado, para aparecer justo cuando tu cliente está listo para contratar o comprar.',
        href: '/servicios/google-ads',
        cta: 'Ver servicio de Google Ads',
      },
    ],
    secondaryH3: 'También te acompañamos en',
    secondary: [
      { h: 'Diseño y desarrollo web', p: 'Webs corporativas y landing pages rápidas, con SEO técnico y formularios que capturan leads.', href: '/servicios/web-development' },
      { h: 'Branding e identidad', p: 'Logo, manual de marca y aplicaciones para una marca que se recuerda y vende.', href: '/servicios/branding' },
      { h: 'Redes sociales', p: 'Estrategia, contenido y gestión de redes que construyen marca y generan comunidad.', href: '/servicios/socialmedia' },
    ],
    localH3: 'Marketing digital en Lima y todo el Perú',
    local:
      'Nuestra oficina está en La Molina (Alameda de la Paz 187, primer piso) y trabajamos con negocios de todos los distritos de Lima —San Isidro, Miraflores, Surco, San Borja, La Victoria, Los Olivos— y de provincias en todo el Perú. Atención de lunes a viernes de 9:00 a 18:00.',
    closing:
      '¿Tienes un negocio y quieres vender más online? Conversemos: armamos una propuesta a tu medida en la primera reunión, sin compromiso.',
    quoteCta: 'Calcula el estimado de tu proyecto',
  },
  // es-US: mismo idioma que Perú, otro mercado. Sin soles, sin pasarelas
  // peruanas y sin los distritos de Lima como señal local — aquí la señal
  // local es la comunidad hispana de EE.UU. y el huso horario compartido.
  us: {
    eyebrow: 'Agencia de marketing digital en español para Estados Unidos',
    h2: 'Campañas, contenido y tiendas online que traen clientes, no solo visitas',
    intro:
      'En 3R Core ayudamos a negocios en Estados Unidos a vender más entre el público hispano: producimos video UGC en español, gestionamos tus campañas de Google Ads y Meta, te posicionamos en Google para búsquedas en español y creamos tu tienda online. Todo con medición real, reportes mensuales y foco en el retorno de tu inversión, no en métricas de vanidad.',
    definition:
      '3R Core es una agencia de marketing digital fundada por los hermanos Alejandro, Bruno y Piero Roque que atiende a empresas de Estados Unidos con un equipo propio en Lima, Perú, en horario compatible con las zonas horarias estadounidenses. Está especializada en producción de video UGC, campañas de Google Ads y Meta, posicionamiento SEO en español e inglés (desde $500/mes) y tiendas online sobre Shopify y WooCommerce (desde $1,750), con precios publicados en dólares y sin contratos forzosos.',
    pillars: [
      {
        h: 'Contenido UGC en español',
        p: 'Producimos video con creadores hispanohablantes para tus campañas de Meta, TikTok y YouTube: ángulos de venta, guion, grabación, edición y variantes por plataforma. Derechos de uso publicitario incluidos por contrato.',
        href: '/servicios/ugc',
        cta: 'Ver producción de UGC',
      },
      {
        h: 'Campañas en español que sí convierten',
        p: 'Google Ads y Meta segmentados por idioma y ciudad, con anuncios escritos en español y no traducidos del inglés. La competencia por las búsquedas en español suele ser menor, así que el costo por clic tiende a ser más bajo para una intención de compra equivalente.',
        href: '/servicios/google-ads',
        cta: 'Ver servicio de Google Ads',
      },
      {
        h: 'SEO para búsquedas en español',
        p: 'Posicionamos tu sitio para lo que tu cliente busca en su idioma dentro de tu área de servicio, con la versión en español correctamente marcada para que Google la muestre a quien corresponde. Reportes mensuales y sin contratos forzosos.',
        href: '/posicionamiento-seo',
        cta: 'Ver servicio de SEO',
      },
    ],
    secondaryH3: 'También te acompañamos en',
    secondary: [
      { h: 'Diseño y desarrollo web', p: 'Sitios bilingües rápidos, con SEO técnico y formularios que capturan leads en los dos idiomas.', href: '/servicios/web-development' },
      { h: 'Branding e identidad', p: 'Logo, manual de marca y aplicaciones para una marca que se recuerda y vende.', href: '/servicios/branding' },
      { h: 'Influencer marketing', p: 'Campañas con creadores hispanos medidas por ventas, con atribución por enlace y código.', href: '/servicios/influencer-marketing' },
    ],
    localH3: 'Marketing en español para negocios hispanos en Estados Unidos',
    local:
      'Trabajamos con negocios en las áreas de mayor población hispana del país —Miami, Los Ángeles, Nueva York, Houston, Chicago y Dallas, entre otras— adaptando el español a la comunidad que atiendes en lugar de usar un español neutro que no le suena natural a nadie. Nuestro equipo está en Lima y opera en horario compatible con Estados Unidos: la diferencia con la costa este es de cero a una hora.',
    closing:
      '¿Tu publicidad está solo en inglés y tus clientes buscan en español? Conversemos: armamos una propuesta a tu medida, con precios en dólares, en la primera reunión.',
    quoteCta: 'Calcula el estimado de tu proyecto',
  },
  en: {
    eyebrow: 'Digital marketing agency in Lima, Peru',
    h2: 'Online stores, SEO and Google Ads that bring clients, not just visits',
    intro:
      'At 3R Core we help businesses in Peru sell more online with three pillars that work together: we build your online store, rank you on Google with SEO and run your Google Ads campaigns. Everything with real measurement, monthly reports and a focus on return on investment (ROI), not vanity metrics.',
    definition:
      '3R Core is a digital marketing agency founded by brothers Alejandro, Bruno and Piero Roque, based in La Molina, Lima, Peru (Alameda de la Paz 187, primer piso), serving businesses across Peru and the United States. It specializes in online stores on Shopify, WooCommerce and Tiendanube (implementation from $420), SEO positioning ($500/month) and Google Ads management (from $800/month), plus branding, social media and web development, with published pricing and no forced contracts.',
    pillars: [
      {
        h: 'Online stores & e-commerce',
        p: 'We design and build your online store on Shopify, WooCommerce or Tiendanube with local Peruvian payment gateways (Culqi, Niubiz, Izipay, Yape and Mercado Pago), ready to sell from day one. Mobile-first, fast and built to turn visits into orders.',
        href: '/tiendas-virtuales-lima',
        cta: 'See online stores in Lima',
      },
      {
        h: 'SEO positioning on Google',
        p: 'We grow your organic ranking with keyword strategy, content and technical SEO so your clients find you when they search for what you sell. Monthly reports and progressive results, no forced contracts.',
        href: '/posicionamiento-seo',
        cta: 'See SEO service',
      },
      {
        h: 'Google Ads & SEM campaigns',
        p: 'We manage your Google Ads campaigns (Search, Performance Max, Shopping, YouTube and Remarketing) with buying intent and optimized budget, to show up right when your client is ready to buy.',
        href: '/servicios/google-ads',
        cta: 'See Google Ads service',
      },
    ],
    secondaryH3: 'We also support you with',
    secondary: [
      { h: 'Web design & development', p: 'Fast corporate websites and landing pages, with technical SEO and lead-capturing forms.', href: '/servicios/web-development' },
      { h: 'Branding & identity', p: 'Logo, brand manual and applications for a brand people remember and buy from.', href: '/servicios/branding' },
      { h: 'Social media', p: 'Strategy, content and social management that build brand and community.', href: '/servicios/socialmedia' },
    ],
    localH3: 'Digital marketing in Lima and all of Peru',
    local:
      'Our office is in La Molina (Alameda de la Paz 187, primer piso) and we work with businesses across every district of Lima —San Isidro, Miraflores, Surco, San Borja, La Victoria, Los Olivos— and throughout Peru. Open Monday to Friday, 9:00 to 18:00.',
    closing:
      'Have a business and want to sell more online? Let’s talk: we build a tailored proposal in the first meeting, no commitment.',
    quoteCta: 'Estimate your project',
  },
}

export default function HomeSeoSection({ locale }: { locale: string }) {
  const t = COPY[locale === 'en' ? 'en' : locale === 'us' ? 'us' : 'es']

  return (
    <section
      aria-labelledby="home-seo-heading"
      className="relative z-10 bg-[#0D0010] text-white px-6 md:px-12 py-20 md:py-28"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-[11px] tracking-[0.35em] uppercase text-[#E91E63] font-medium mb-4">
          {t.eyebrow}
        </p>
        <h2
          id="home-seo-heading"
          className="text-2xl md:text-4xl font-bold leading-tight tracking-tight max-w-3xl mb-6"
        >
          {t.h2}
        </h2>
        <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-3xl mb-6">
          {t.intro}
        </p>
        <p className="text-white/45 text-sm leading-relaxed max-w-3xl mb-12">
          {t.definition}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {t.pillars.map((p) => (
            <div
              key={p.href}
              className="rounded-[20px] border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-[#A21F8A]/40"
            >
              <h3 className="text-lg font-semibold mb-3 text-white">{p.h}</h3>
              <p className="text-white/55 text-sm leading-relaxed mb-5">{p.p}</p>
              <Link
                href={p.href}
                className="inline-flex items-center gap-2 text-[#E91E63] text-[11px] font-bold uppercase tracking-[0.18em] hover:gap-3 transition-all"
              >
                {p.cta}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1 7h12M13 7L8 2M13 7l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <h3 className="text-[11px] uppercase tracking-[0.3em] text-white/40 font-bold mb-5">
          {t.secondaryH3}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {t.secondary.map((s) => (
            <div key={s.href} className="border-t border-white/10 pt-5">
              <h4 className="text-base font-semibold mb-2 text-white/90">{s.h}</h4>
              <p className="text-white/50 text-sm leading-relaxed mb-3">{s.p}</p>
              <Link
                href={s.href}
                className="text-white/70 text-[11px] font-bold uppercase tracking-[0.18em] underline decoration-[#A21F8A]/50 underline-offset-4 hover:text-white transition-colors"
              >
                {locale === 'en' ? 'Learn more' : 'Saber más'}
              </Link>
            </div>
          ))}
        </div>

        <div className="rounded-[20px] border border-white/10 bg-white/[0.03] p-7 md:p-9">
          <h3 className="text-lg md:text-xl font-semibold mb-3 text-white">{t.localH3}</h3>
          <p className="text-white/55 text-sm md:text-base leading-relaxed mb-4">{t.local}</p>
          <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6">{t.closing}</p>
          <Link
            href="/cotizar"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold uppercase tracking-[0.18em] text-[11px] text-white bg-gradient-to-r from-[#E91E63] to-[#9C27B0] hover:-translate-y-0.5 transition-all"
          >
            {t.quoteCta}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 7h12M13 7L8 2M13 7l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
