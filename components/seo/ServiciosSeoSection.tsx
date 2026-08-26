import { Link } from '@/i18n/navigation'
import type { AppPathname } from '@/i18n/routing'

/**
 * Bloque de contenido SSR del índice de servicios.
 *
 * Por qué existe: tras la consolidación de julio, `/es/agencia-marketing-digital-lima`
 * pasó a redirigir aquí — y esta página tenía 395 palabras. Es un índice, no una
 * página capaz de rankear para «agencia de marketing digital lima» (179
 * impresiones/trimestre en posición 68,7 y cero clics). Además Google no la
 * rastreaba desde el 23-jul.
 *
 * Este bloque hace tres cosas a la vez:
 *   1. La lleva de 395 a más de 1.200 palabras con contenido real, no relleno:
 *      precios publicados, plazos y a quién sirve cada servicio.
 *   2. Enlaza LAS DIECISÉIS páginas de servicio desde el índice. Cinco estaban
 *      huérfanas y Google nunca las había rastreado (`lastCrawlTime` vacío):
 *      meta-ads, relaciones-publicas, influencer-marketing, casos-de-exito y
 *      preguntas.
 *   3. Responde en pasajes autosuficientes las preguntas de dinero que ya
 *      rankean sin recibir clics («cuánto cuesta…», posiciones 3-11 con CTR 0%).
 *
 * Todo el contenido sale de datos ya publicados por el cliente en /es/precios.
 * Se renderiza en el servidor: los bots de IA no ejecutan JavaScript.
 */

type Row = { name: string; price: string; detail: string; href: AppPathname }

const COPY = {
  es: {
    h2Precios: 'Cuánto cuesta cada servicio de marketing digital en Lima',
    introPrecios:
      'Publicamos los precios porque es la primera pregunta de cualquier empresa que busca agencia en Perú, y porque una cotización que tarda tres correos en llegar hace perder tiempo a todos. Estos son los importes netos en soles; las facturas peruanas suman el 18% de IGV. Ninguno lleva contrato de permanencia forzosa.',
    rows: [
      { name: 'Branding e identidad de marca', price: 'desde S/ 500', detail: 'Logotipo, manual de marca, paleta cromática, tipografía corporativa y aplicaciones esenciales. Se entrega la propuesta tras una sesión inicial de descubrimiento.', href: '/servicios/branding' },
      { name: 'Manejo de redes sociales', price: 'desde S/ 1,500 / mes', detail: 'Entre 8 y 12 piezas al mes para TikTok, Instagram, Facebook y LinkedIn, con Reels y TikToks editados, community management y reporte mensual.', href: '/servicios/socialmedia' },
      { name: 'Posicionamiento SEO', price: 'S/ 1,800 / mes', detail: 'Auditoría inicial, planificación, optimización on-page, escalamiento de contenidos y reporte mensual. Resultados progresivos, sin contratos forzosos.', href: '/posicionamiento-seo' },
      { name: 'Gestión de Google Ads', price: 'desde S/ 1,800 / mes', detail: 'Search, Performance Max, YouTube, Display, Shopping y remarketing. Aparte va el presupuesto de pauta, con un mínimo recomendado de S/ 1,500 al mes que se paga directamente a Google.', href: '/servicios/google-ads' },
      { name: 'Páginas web y landing pages', price: 'desde S/ 1,800', detail: 'Landing page con diseño a medida, SEO técnico y formulario. Una web corporativa de 5 a 8 secciones va de S/ 4,500 a S/ 9,000 según alcance.', href: '/servicios/web-development' },
      { name: 'Tiendas virtuales y e-commerce', price: 'desde S/ 6,500', detail: 'Tienda en Shopify o WooCommerce con catálogo, pasarela local (Culqi, Niubiz, Izipay o Mercado Pago), inventario y panel de administración. La implementación básica sobre Shopify o Tiendanube arranca desde S/ 1,500.', href: '/tiendas-virtuales-lima' },
    ] as Row[],
    presupuestoH3: 'Cuánto invierte al mes una empresa peruana',
    presupuesto:
      'Como referencia de mercado en Lima: un emprendimiento suele moverse entre S/ 2,500 y S/ 4,500 al mes, que cubre redes sociales más una campaña básica; una pyme entre S/ 5,000 y S/ 12,000, ya con estrategia integral de redes, Ads, SEO y mejoras web; y una empresa mediana entre S/ 12,000 y S/ 30,000, con producción de contenido propia y optimización de conversión. La diferencia entre esos escalones no es «más de lo mismo»: es cuántos canales se pueden sostener a la vez sin que ninguno quede a medias.',
    h2Especialidad: 'Servicios de captación por canal',
    introEspecialidad:
      'Cada canal se contrata por separado o dentro de una estrategia conjunta. Lo que no hacemos es venderlos todos por defecto: si un negocio vive del boca a boca y de Instagram, meterle Google Ads antes de tener la web lista es quemar presupuesto.',
    canales: [
      { name: 'Meta Ads (Facebook e Instagram)', detail: 'Prospección, retargeting, catálogos y mensajes directos a WhatsApp, con ROAS medible.', href: '/servicios/meta-ads' },
      { name: 'TikTok Ads', detail: 'Spark Ads y vídeo nativo con creadores propios para llegar a audiencias jóvenes.', href: '/servicios/tiktok-ads' },
      { name: 'Performance marketing', detail: 'Google, Meta y TikTok coordinados con medición de punta a punta y gestión por CAC y ROAS.', href: '/servicios/performance-marketing' },
      { name: 'Email marketing y automatización', detail: 'Flujos de bienvenida, recuperación de carritos, newsletters y CRM.', href: '/servicios/email-marketing' },
      { name: 'Contenido UGC', detail: 'Vídeo con creadores propios: ángulos de venta, guion por pieza y entregables listos para pauta.', href: '/servicios/ugc' },
      { name: 'Influencer marketing', detail: 'Selección de creadores por datos de audiencia, negociación de tarifas y medición del resultado.', href: '/servicios/influencer-marketing' },
      { name: 'Relaciones públicas', detail: 'Mapa de medios por relevancia comercial, identificación del ángulo noticiable y gestión de la publicación.', href: '/servicios/relaciones-publicas' },
    ] as { name: string; detail: string; href: AppPathname }[],
    h2Sectores: 'Marketing digital por sector',
    introSectores:
      'Hay tres sectores donde el trabajo cambia lo suficiente como para tener página propia, porque el embudo, la normativa y el coste por contacto no se parecen en nada al resto.',
    sectores: [
      { name: 'Clínicas y consultorios', detail: 'Google Ads de salud, SEO local y ficha de Google. Se mide en citas agendadas, no en seguidores.', href: '/servicios/marketing-clinicas' },
      { name: 'Inmobiliarias y proyectos', detail: 'Captación de leads con Meta Ads y Google Ads, landing por proyecto, CRM y seguimiento por WhatsApp con costo por lead medible.', href: '/servicios/marketing-inmobiliarias' },
      { name: 'E-commerce y tiendas online', detail: 'Google Shopping, Meta Ads con catálogo, email y optimización de conversión sobre Shopify, WooCommerce o VTEX.', href: '/servicios/marketing-ecommerce' },
    ] as { name: string; detail: string; href: AppPathname }[],
    h2Como: 'Cómo se trabaja con 3R Core',
    como:
      'Empezamos siempre por entender el negocio antes que el canal: qué margen deja cada venta, cuánto vale un cliente en el tiempo y qué está fallando hoy. De ahí sale el plan, no de una plantilla. Después se configura la medición — sin ella cualquier reporte es una opinión — y solo entonces se enciende el canal. Cada mes se entrega un reporte con lo que se hizo, lo que costó y lo que trajo. Somos una agencia peruana, con oficina en La Molina, Lima, y atendemos también a empresas de Estados Unidos en remoto a través de nuestra filial allí.',
    verMas: 'Ver el detalle',
    linksH3: 'Antes de decidir',
    links: [
      { name: 'Casos de éxito', detail: 'Proyectos reales de clientes, con lo que se hizo y el resultado.', href: '/casos-de-exito' },
      { name: 'Preguntas frecuentes', detail: 'Plazos, contratos, de quién es el trabajo y qué pasa si algo no funciona.', href: '/preguntas' },
      { name: 'Precios completos', detail: 'La tabla entera con planes, extras y presupuestos mensuales de referencia.', href: '/precios' },
      { name: 'Cotizador online', detail: 'Un estimado de tu proyecto en un minuto, sin dejar el correo.', href: '/cotizar' },
    ] as { name: string; detail: string; href: AppPathname }[],
  },
  en: {
    h2Precios: 'What each digital marketing service costs',
    introPrecios:
      'We publish prices because it is the first question every company asks, and because a quote that takes three emails to arrive wastes everyone’s time. Figures below are in U.S. dollars for U.S. clients, invoiced through our U.S. subsidiary. No forced retainers.',
    rows: [
      { name: 'Branding and visual identity', price: 'from $500', detail: 'Logo, brand manual, color palette, corporate typography and core applications, delivered after a discovery session.', href: '/servicios/branding' },
      { name: 'Social media management', price: 'from $800 / month', detail: '8 to 12 pieces a month for TikTok, Instagram, Facebook and LinkedIn, with edited Reels and TikToks, community management and a monthly report.', href: '/servicios/socialmedia' },
      { name: 'SEO', price: 'from $500 / month', detail: 'Audit, planning, on-page work, content scaling and monthly reporting. Progressive results, no lock-in.', href: '/posicionamiento-seo' },
      { name: 'Google Ads management', price: 'from $800 / month', detail: 'Search, Performance Max, YouTube, Display, Shopping and remarketing. Ad spend is separate and paid directly to Google.', href: '/servicios/google-ads' },
      { name: 'Websites and landing pages', price: 'custom scope', detail: 'Landing pages, corporate sites and bilingual builds with technical SEO and lead capture.', href: '/servicios/web-development' },
      { name: 'Online stores', price: 'custom scope', detail: 'Shopify or WooCommerce stores with catalog, payments, inventory and an admin panel.', href: '/tiendas-virtuales-lima' },
    ] as Row[],
    presupuestoH3: 'What a monthly engagement looks like',
    presupuesto:
      'Most U.S. clients start with one channel and one clear objective — usually UGC video plus paid social, or search plus a landing page — and add channels once the measurement is trustworthy. The step between tiers is not «more of the same»: it is how many channels can be sustained at once without any of them being half-done.',
    h2Especialidad: 'Acquisition services by channel',
    introEspecialidad:
      'Each channel can be hired on its own or inside a joint strategy. What we do not do is sell all of them by default: pushing paid search before the website converts is burning budget.',
    canales: [
      { name: 'Meta Ads (Facebook and Instagram)', detail: 'Prospecting, retargeting, catalogs and click-to-WhatsApp, with measurable ROAS.', href: '/servicios/meta-ads' },
      { name: 'TikTok Ads', detail: 'Spark Ads and native video with in-house creators.', href: '/servicios/tiktok-ads' },
      { name: 'Performance marketing', detail: 'Google, Meta and TikTok coordinated, with end-to-end measurement and CAC/ROAS management.', href: '/servicios/performance-marketing' },
      { name: 'Email marketing and automation', detail: 'Welcome flows, cart recovery, newsletters and CRM automation.', href: '/servicios/email-marketing' },
      { name: 'UGC content', detail: 'Video with in-house creators: selling angles, per-asset scripting and ad-ready deliverables.', href: '/servicios/ugc' },
      { name: 'Influencer marketing', detail: 'Creator selection on audience data, rate negotiation and result measurement.', href: '/servicios/influencer-marketing' },
      { name: 'Public relations', detail: 'Media mapping by commercial relevance, newsworthy angle identification and placement.', href: '/servicios/relaciones-publicas' },
    ] as { name: string; detail: string; href: AppPathname }[],
    h2Sectores: 'Digital marketing by industry',
    introSectores:
      'Three industries change the work enough to deserve their own page, because the funnel, the regulation and the cost per contact look nothing like the rest.',
    sectores: [
      { name: 'Clinics and medical practices', detail: 'Healthcare Google Ads, local SEO and Google Business Profile. Measured in booked appointments.', href: '/servicios/marketing-clinicas' },
      { name: 'Real estate', detail: 'Lead generation on Meta and Google Ads, per-project landing pages, CRM and follow-up with measurable cost per lead.', href: '/servicios/marketing-inmobiliarias' },
      { name: 'E-commerce', detail: 'Google Shopping, catalog-based Meta Ads, email and CRO on Shopify, WooCommerce or VTEX.', href: '/servicios/marketing-ecommerce' },
    ] as { name: string; detail: string; href: AppPathname }[],
    h2Como: 'How working with 3R Core goes',
    como:
      'We start with the business, not the channel: what margin each sale leaves, what a customer is worth over time and what is failing today. The plan comes from that, not from a template. Then measurement is set up — without it any report is an opinion — and only then does the channel go live. Every month you get a report with what was done, what it cost and what it brought. 3R Core is a Peruvian agency based in Lima that serves U.S. companies remotely through its U.S. subsidiary.',
    verMas: 'See the details',
    linksH3: 'Before you decide',
    links: [
      { name: 'Case studies', detail: 'Real client projects, what was done and what came out of it.', href: '/casos-de-exito' },
      { name: 'FAQ', detail: 'Timelines, contracts, who owns the work and what happens if something does not work.', href: '/preguntas' },
      { name: 'Full pricing', detail: 'The complete table with plans, add-ons and reference monthly budgets.', href: '/precios' },
      { name: 'Quote calculator', detail: 'An estimate for your project in a minute, without leaving your email.', href: '/cotizar' },
    ] as { name: string; detail: string; href: AppPathname }[],
  },
}

export default function ServiciosSeoSection({ locale }: { locale: string }) {
  // /us es español pero factura en dólares: comparte el texto de /es salvo la
  // referencia de presupuesto, que allí se dice en dólares.
  const t = locale === 'en' ? COPY.en : COPY.es
  const isUs = locale === 'us'

  return (
    <section className="relative z-10 px-6 md:px-12 py-16 md:py-24 max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-4xl font-semibold text-white mb-4 tracking-tight">{t.h2Precios}</h2>
      <p className="text-white/55 text-sm md:text-base leading-relaxed max-w-3xl mb-10">{t.introPrecios}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
        {t.rows.map((r) => (
          <div key={r.name} className="rounded-[18px] border border-white/10 bg-white/[0.03] p-6">
            <div className="flex items-baseline justify-between gap-4 mb-2">
              <h3 className="text-base md:text-lg font-semibold text-white">{r.name}</h3>
              <span className="text-[#E91E63] font-bold text-sm whitespace-nowrap">{r.price}</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-4">{r.detail}</p>
            <Link
              href={r.href}
              className="text-white/70 text-[11px] font-bold uppercase tracking-[0.18em] underline decoration-[#A21F8A]/50 underline-offset-4 hover:text-white transition-colors"
            >
              {t.verMas}
            </Link>
          </div>
        ))}
      </div>

      {!isUs && (
        <div className="rounded-[20px] border border-white/10 bg-white/[0.03] p-7 md:p-9 mb-16">
          <h3 className="text-lg md:text-xl font-semibold mb-3 text-white">{t.presupuestoH3}</h3>
          <p className="text-white/55 text-sm md:text-base leading-relaxed">{t.presupuesto}</p>
        </div>
      )}

      <h2 className="text-2xl md:text-4xl font-semibold text-white mb-4 tracking-tight">{t.h2Especialidad}</h2>
      <p className="text-white/55 text-sm md:text-base leading-relaxed max-w-3xl mb-10">{t.introEspecialidad}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
        {t.canales.map((c) => (
          <div key={c.name} className="rounded-[18px] border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-base font-semibold mb-2 text-white/90">{c.name}</h3>
            <p className="text-white/50 text-sm leading-relaxed mb-3">{c.detail}</p>
            <Link
              href={c.href}
              className="text-white/70 text-[11px] font-bold uppercase tracking-[0.18em] underline decoration-[#A21F8A]/50 underline-offset-4 hover:text-white transition-colors"
            >
              {t.verMas}
            </Link>
          </div>
        ))}
      </div>

      <h2 className="text-2xl md:text-4xl font-semibold text-white mb-4 tracking-tight">{t.h2Sectores}</h2>
      <p className="text-white/55 text-sm md:text-base leading-relaxed max-w-3xl mb-10">{t.introSectores}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
        {t.sectores.map((c) => (
          <div key={c.name} className="rounded-[18px] border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-base font-semibold mb-2 text-white/90">{c.name}</h3>
            <p className="text-white/50 text-sm leading-relaxed mb-3">{c.detail}</p>
            <Link
              href={c.href}
              className="text-white/70 text-[11px] font-bold uppercase tracking-[0.18em] underline decoration-[#A21F8A]/50 underline-offset-4 hover:text-white transition-colors"
            >
              {t.verMas}
            </Link>
          </div>
        ))}
      </div>

      <div className="rounded-[20px] border border-white/10 bg-white/[0.03] p-7 md:p-9">
        <h2 className="text-xl md:text-2xl font-semibold mb-3 text-white">{t.h2Como}</h2>
        <p className="text-white/55 text-sm md:text-base leading-relaxed mb-8">{t.como}</p>
        <h3 className="text-base font-semibold mb-4 text-white/90">{t.linksH3}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {t.links.map((l) => (
            <Link
              key={l.name}
              href={l.href}
              className="block rounded-[14px] border border-white/10 p-4 hover:border-[#A21F8A]/50 transition-colors"
            >
              <span className="block text-white font-semibold text-sm mb-1">{l.name}</span>
              <span className="block text-white/45 text-xs leading-relaxed">{l.detail}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
