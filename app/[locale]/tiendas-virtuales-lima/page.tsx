import { Link } from "@/i18n/routing"
import type { AppPathname } from "@/i18n/routing"
import PillarWaCapture from "@/components/ui/PillarWaCapture"

interface Props { params: Promise<{ locale: string }> }

// Money page del pilar Tiendas Virtuales. Todo el contenido de precios,
// plazos y plataformas reusa EXACTAMENTE lo ya publicado en /precios y en el
// FAQPage schema de esta misma página (layout.tsx) — nada inventado.
const COPY: Record<string, any> = {
  es: {
    eyebrow: '3R Core · Tiendas Virtuales · Lima · Perú',
    h1: 'Agencia de Tiendas Virtuales en Lima, Perú',
    heroH2: 'Tu tienda online en Shopify, WooCommerce o Tiendanube, lista para vender',
    sub: 'Creamos tu tienda online en Shopify, WooCommerce o Tiendanube: pagos locales (Culqi, Niubiz, Izipay, Yape), catálogo cargado, SEO técnico y lista para vender. Desde S/1,500 de implementación, sin plantillas genéricas.',
    cta: 'Cotiza tu tienda online',
    why: 'Tienda + SEO + Google Ads bajo un mismo techo',
    whyDesc: 'A diferencia de quienes solo entregan una plantilla vacía, en 3R Core montamos tu e-commerce completo y lo conectamos con posicionamiento SEO y campañas de Google Ads y Google Shopping, para que tu tienda no solo exista: reciba tráfico que compra y venda desde el día uno. Una tienda sin tráfico es un local abierto en una calle vacía; por eso el mismo equipo que la construye es el que después la posiciona en Google y le trae compradores con publicidad medible.',
    pillars: 'Todo lo que dejamos listo en tu tienda',
    pillarsList: [
      { title: 'Plataforma a tu medida', desc: 'Elegimos entre Shopify (velocidad), WooCommerce (control total) o Tiendanube (pagos locales, accesible) según tu catálogo, integraciones y presupuesto — sin sesgo.' },
      { title: 'Pagos peruanos integrados', desc: 'Culqi, Niubiz, Izipay, Yape, PagoEfectivo y Mercado Pago configurados y probados para que cobres sin fricción en Perú.' },
      { title: 'SEO técnico de base', desc: 'URLs limpias, schema de producto, velocidad (Core Web Vitals), sitemap y metadatos para que Google entienda y muestre tu tienda.' },
      { title: 'Catálogo, envíos y medición', desc: 'Carga de productos con variantes y categorías, zonas y tarifas de envío, correos automáticos de pedido y Google Analytics 4 + píxeles listos.' },
    ],
    platforms: '¿Shopify, WooCommerce o Tiendanube? Te lo decimos sin sesgo',
    platformsIntro: 'No trabajamos casados con una sola plataforma: la elegimos según tu catálogo, tus integraciones y tu presupuesto. Esto es lo que pesa en la decisión:',
    platformsList: [
      { title: 'Shopify', desc: 'La más rápida y estable para empezar a vender ya. Hosting incluido, checkout probado y cientos de apps. Ideal si quieres velocidad de lanzamiento y un catálogo que crece. La mensualidad de la plataforma parte desde USD 39/mes.' },
      { title: 'WooCommerce', desc: 'Control total sobre WordPress: integraciones a medida, sin mensualidad de plataforma (pagas tu hosting) y libertad completa de diseño y funcionalidades. Ideal para catálogos con lógica propia o integraciones con tu sistema.' },
      { title: 'Tiendanube', desc: 'Fuerte en pagos locales y planes accesibles (desde ~S/89/mes). Pensada para Latinoamérica: métodos de pago y envíos locales resueltos. Ideal para emprendimientos que quieren empezar simple sin sacrificar cobros peruanos.' },
    ],
    platformsMore: 'Comparamos las tres a fondo en nuestra guía',
    platformsMoreLink: '/blogs/shopify-vs-woocommerce-peru-2026',
    platformsMoreAnchor: 'Shopify vs WooCommerce Perú 2026',
    pricing: '¿Cuánto cuesta crear una tienda virtual?',
    pricingIntro: 'Precios netos de implementación en soles peruanos (la factura electrónica suma 18% de IGV). Aparte va la mensualidad de la plataforma y las comisiones de la pasarela de pago.',
    pricingTiers: [
      { name: 'Tienda básica', price: 'desde S/1,500', platform: 'Shopify o Tiendanube', desc: 'Diseño sobre la plataforma, carga inicial de catálogo, pagos locales configurados y capacitación para administrarla.' },
      { name: 'Tienda profesional', price: 'desde S/2,500', platform: 'WooCommerce', desc: 'Control total sobre WordPress: diseño alineado a tu marca, catálogo con variantes, pagos y envíos configurados.' },
      { name: 'Tienda avanzada', price: 'desde S/6,500', platform: 'Shopify / WooCommerce', desc: 'Catálogos grandes, integraciones (facturación, inventario), automatizaciones y optimización de conversión.' },
      { name: 'E-commerce a medida', price: 'desde S/12,000', platform: 'A medida', desc: 'Desarrollo a medida con lógica propia: B2B, suscripciones, multialmacén o integraciones con tu ERP.' },
    ],
    pricingNote: 'Una tienda estándar con Shopify o Tiendanube suele estar lista en 2 a 4 semanas; una WooCommerce a medida o con muchas integraciones, de 5 a 8 semanas según el tamaño del catálogo y la entrega de contenido.',
    pricingLinks: 'Detalle completo en',
    methodology: 'Cómo trabajamos contigo',
    methodologyList: [
      { step: 'Paso 1', title: 'Diagnóstico y plataforma', desc: 'Entendemos tu negocio, catálogo y objetivos, y recomendamos la plataforma correcta (Shopify, WooCommerce o Tiendanube).' },
      { step: 'Paso 2', title: 'Diseño mobile-first', desc: 'Diseñamos una tienda clara, rápida y pensada para el celular (donde compra la mayoría en Perú) y alineada a tu marca.' },
      { step: 'Paso 3', title: 'Desarrollo e integraciones', desc: 'Montamos la tienda, cargamos el catálogo e integramos pagos locales, envíos, WhatsApp y medición.' },
      { step: 'Paso 4', title: 'Pruebas y lanzamiento', desc: 'Probamos cada flujo de compra en móvil y escritorio, verificamos pagos reales y publicamos tu tienda.' },
      { step: 'Paso 5', title: 'Capacitación y crecimiento', desc: 'Te capacitamos para administrarla y, si quieres, sumamos SEO y Google Ads para escalar las ventas con tráfico que compra.' },
    ],
    growth: 'Y cuando tu tienda está lista: tráfico que compra',
    growthDesc: 'Construir la tienda es la mitad del trabajo. La otra mitad es que aparezca cuando tus clientes buscan lo que vendes. Por eso los tres pilares de 3R Core trabajan juntos:',
    growthList: [
      { title: 'Posicionamiento SEO', desc: 'Optimizamos categorías, fichas de producto y contenido para que tu tienda aparezca en Google cuando buscan lo que vendes — tráfico orgánico que no depende de pauta.', path: '/posicionamiento-seo', anchor: 'Ver servicio de SEO' },
      { title: 'Google Ads y Google Shopping', desc: 'Campañas de búsqueda y Shopping con tus productos, presupuesto optimizado y conversiones medidas de punta a punta.', path: '/servicios/google-ads', anchor: 'Ver servicio de Google Ads' },
    ],
    coverage: 'Plataformas y pasarelas de pago que integramos',
    coverageList: ['Shopify', 'WooCommerce', 'Tiendanube', 'Culqi', 'Niubiz', 'Izipay', 'Yape', 'PagoEfectivo', 'Mercado Pago', 'Google Analytics 4'],
    faq: 'Preguntas frecuentes sobre tiendas virtuales',
    faqList: [
      { q: '¿Cuánto cuesta crear una tienda virtual en Perú?', a: 'La implementación profesional arranca desde S/1,500 e incluye diseño, carga de catálogo, pagos y configuración sobre Shopify o Tiendanube. Un e-commerce completo en Shopify o WooCommerce (catálogo amplio, pasarela de pago, inventario y panel de administración) arranca desde S/6,500, y con más integraciones o desarrollo a medida el rango llega hasta S/25,000. Aparte está la mensualidad de la plataforma (Shopify desde USD 39/mes, Tiendanube desde S/89/mes) o el hosting si es WooCommerce. El detalle completo está publicado en nuestra página de precios.' },
      { q: '¿Shopify, WooCommerce o Tiendanube: cuál me conviene?', a: 'Como agencia Shopify, WooCommerce y Tiendanube en Perú no trabajamos casados con una sola plataforma: depende de tu caso. Shopify es la más rápida y estable para vender ya. WooCommerce da control total e integraciones a medida. Tiendanube es fuerte en pagos locales y planes accesibles. En el diagnóstico te recomendamos la correcta, sin sesgo.' },
      { q: '¿Integran pagos peruanos como Yape, Culqi o Niubiz?', a: 'Sí. Configuramos y probamos Culqi, Niubiz, Izipay, Yape, PagoEfectivo y Mercado Pago según tu plataforma, para que tus clientes paguen como están acostumbrados en Perú.' },
      { q: '¿En cuánto tiempo tengo mi tienda lista?', a: 'Una tienda estándar con Shopify o Tiendanube suele estar lista en 2 a 4 semanas. Una tienda WooCommerce a medida o con muchas integraciones puede tomar de 5 a 8 semanas, según la cantidad de productos y la entrega de contenido.' },
      { q: '¿La tienda va a aparecer en Google?', a: 'La construimos con SEO técnico de base (URLs, schema de producto, velocidad, sitemap). Para posicionar de verdad y competir por búsquedas de compra recomendamos sumar nuestro servicio de posicionamiento SEO y/o campañas de Google Ads y Google Shopping.' },
      { q: '¿Trabajan con negocios fuera de Lima?', a: 'Sí, trabajamos con empresas de todo el Perú de forma remota. Todo el proceso (diseño, revisiones, capacitación) se hace por videollamada y accesos compartidos.' },
    ],
    guides: 'Guías para decidir con datos',
    guidesList: [
      { title: '¿Cuánto cuesta una tienda virtual en Perú? Precios 2026', path: '/blogs/cuanto-cuesta-tienda-virtual-peru-2026' },
      { title: 'Pasarelas de pago para tu tienda online en Perú', path: '/blogs/pasarelas-pago-tienda-online-peru' },
      { title: 'Shopify vs WooCommerce vs Tiendanube: cuál elegir', path: '/blogs/shopify-woocommerce-tiendanube-peru-cual-elegir' },
      { title: 'Errores al crear una tienda virtual en Perú', path: '/blogs/errores-crear-tienda-virtual-peru' },
      { title: '¿Cuánto cuesta mantener una tienda virtual?', path: '/blogs/cuanto-cuesta-mantener-tienda-virtual-peru-2026' },
      { title: '¿Tienda virtual propia o vender en marketplace?', path: '/blogs/tienda-virtual-o-vender-en-marketplace-peru' },
    ],
    contact: 'Cotización gratuita para tu tienda',
    contactCta: 'Cuéntanos qué vendes y a quién. Te recomendamos la plataforma correcta, te damos un presupuesto claro y, si quieres, un plan para traer tráfico que compra con SEO y Google Ads.',
    service: 'una tienda virtual',
  },
  // es-US: mismo texto en español, mercado y moneda de EE.UU.
  us: {
    eyebrow: '3R Core · Tiendas Virtuales · Lima · Perú',
    h1: 'Agencia de Tiendas Virtuales en Estados Unidos',
    heroH2: 'Tu tienda online en Shopify, WooCommerce o BigCommerce, lista para vender',
    sub: 'Creamos tu tienda online en Shopify, WooCommerce o BigCommerce: pagos locales (Stripe, PayPal, Shopify Payments, Yape), catálogo cargado, SEO técnico y lista para vender. Desde $650 de implementación, sin plantillas genéricas.',
    cta: 'Cotiza tu tienda online',
    why: 'Tienda + SEO + Google Ads bajo un mismo techo',
    whyDesc: 'A diferencia de quienes solo entregan una plantilla vacía, en 3R Core montamos tu e-commerce completo y lo conectamos con posicionamiento SEO y campañas de Google Ads y Google Shopping, para que tu tienda no solo exista: reciba tráfico que compra y venda desde el día uno. Una tienda sin tráfico es un local abierto en una calle vacía; por eso el mismo equipo que la construye es el que después la posiciona en Google y le trae compradores con publicidad medible.',
    pillars: 'Todo lo que dejamos listo en tu tienda',
    pillarsList: [
      { title: 'Plataforma a tu medida', desc: 'Elegimos entre Shopify (velocidad), WooCommerce (control total) o BigCommerce (pagos locales, accesible) según tu catálogo, integraciones y presupuesto — sin sesgo.' },
      { title: 'Pagos estadounidenses integrados', desc: 'Stripe, PayPal, Shopify Payments, Yape, PagoEfectivo y Mercado Pago configurados y probados para que cobres sin fricción en Estados Unidos.' },
      { title: 'SEO técnico de base', desc: 'URLs limpias, schema de producto, velocidad (Core Web Vitals), sitemap y metadatos para que Google entienda y muestre tu tienda.' },
      { title: 'Catálogo, envíos y medición', desc: 'Carga de productos con variantes y categorías, zonas y tarifas de envío, correos automáticos de pedido y Google Analytics 4 + píxeles listos.' },
    ],
    platforms: '¿Shopify, WooCommerce o BigCommerce? Te lo decimos sin sesgo',
    platformsIntro: 'No trabajamos casados con una sola plataforma: la elegimos según tu catálogo, tus integraciones y tu presupuesto. Esto es lo que pesa en la decisión:',
    platformsList: [
      { title: 'Shopify', desc: 'La más rápida y estable para empezar a vender ya. Hosting incluido, checkout probado y cientos de apps. Ideal si quieres velocidad de lanzamiento y un catálogo que crece. La mensualidad de la plataforma parte desde USD 39/mes.' },
      { title: 'WooCommerce', desc: 'Control total sobre WordPress: integraciones a medida, sin mensualidad de plataforma (pagas tu hosting) y libertad completa de diseño y funcionalidades. Ideal para catálogos con lógica propia o integraciones con tu sistema.' },
      { title: 'BigCommerce', desc: 'Fuerte en pagos locales y planes accesibles (desde ~$25/mes). Pensada para Latinoamérica: métodos de pago y envíos locales resueltos. Ideal para emprendimientos que quieren empezar simple sin sacrificar cobros estadounidenses.' },
    ],
    platformsMore: 'Comparamos las tres a fondo en nuestra guía',
    platformsMoreLink: '/blogs/shopify-vs-woocommerce-peru-2026',
    platformsMoreAnchor: 'Shopify vs WooCommerce Perú 2026',
    pricing: '¿Cuánto cuesta crear una tienda virtual?',
    pricingIntro: 'Precios netos de implementación en soles estadounidenses (la factura electrónica suma 18% de impuestos por estado). Aparte va la mensualidad de la plataforma y las comisiones de la pasarela de pago.',
    pricingTiers: [
      { name: 'Tienda básica', price: 'desde $650', platform: 'Shopify o BigCommerce', desc: 'Diseño sobre la plataforma, carga inicial de catálogo, pagos locales configurados y capacitación para administrarla.' },
      { name: 'Tienda profesional', price: 'desde $1,100', platform: 'WooCommerce', desc: 'Control total sobre WordPress: diseño alineado a tu marca, catálogo con variantes, pagos y envíos configurados.' },
      { name: 'Tienda avanzada', price: 'desde $1,750', platform: 'Shopify / WooCommerce', desc: 'Catálogos grandes, integraciones (facturación, inventario), automatizaciones y optimización de conversión.' },
      { name: 'E-commerce a medida', price: 'desde $3,200', platform: 'A medida', desc: 'Desarrollo a medida con lógica propia: B2B, suscripciones, multialmacén o integraciones con tu ERP.' },
    ],
    pricingNote: 'Una tienda estándar con Shopify o BigCommerce suele estar lista en 2 a 4 semanas; una WooCommerce a medida o con muchas integraciones, de 5 a 8 semanas según el tamaño del catálogo y la entrega de contenido.',
    pricingLinks: 'Detalle completo en',
    methodology: 'Cómo trabajamos contigo',
    methodologyList: [
      { step: 'Paso 1', title: 'Diagnóstico y plataforma', desc: 'Entendemos tu negocio, catálogo y objetivos, y recomendamos la plataforma correcta (Shopify, WooCommerce o BigCommerce).' },
      { step: 'Paso 2', title: 'Diseño mobile-first', desc: 'Diseñamos una tienda clara, rápida y pensada para el celular (donde compra la mayoría en Estados Unidos) y alineada a tu marca.' },
      { step: 'Paso 3', title: 'Desarrollo e integraciones', desc: 'Montamos la tienda, cargamos el catálogo e integramos pagos locales, envíos, WhatsApp y medición.' },
      { step: 'Paso 4', title: 'Pruebas y lanzamiento', desc: 'Probamos cada flujo de compra en móvil y escritorio, verificamos pagos reales y publicamos tu tienda.' },
      { step: 'Paso 5', title: 'Capacitación y crecimiento', desc: 'Te capacitamos para administrarla y, si quieres, sumamos SEO y Google Ads para escalar las ventas con tráfico que compra.' },
    ],
    growth: 'Y cuando tu tienda está lista: tráfico que compra',
    growthDesc: 'Construir la tienda es la mitad del trabajo. La otra mitad es que aparezca cuando tus clientes buscan lo que vendes. Por eso los tres pilares de 3R Core trabajan juntos:',
    growthList: [
      { title: 'Posicionamiento SEO', desc: 'Optimizamos categorías, fichas de producto y contenido para que tu tienda aparezca en Google cuando buscan lo que vendes — tráfico orgánico que no depende de pauta.', path: '/posicionamiento-seo', anchor: 'Ver servicio de SEO' },
      { title: 'Google Ads y Google Shopping', desc: 'Campañas de búsqueda y Shopping con tus productos, presupuesto optimizado y conversiones medidas de punta a punta.', path: '/servicios/google-ads', anchor: 'Ver servicio de Google Ads' },
    ],
    coverage: 'Plataformas y pasarelas de pago que integramos',
    coverageList: ['Shopify', 'WooCommerce', 'BigCommerce', 'Culqi', 'Niubiz', 'Izipay', 'Yape', 'PagoEfectivo', 'Mercado Pago', 'Google Analytics 4'],
    faq: 'Preguntas frecuentes sobre tiendas virtuales',
    faqList: [
      { q: '¿Cuánto cuesta crear una tienda virtual en Estados Unidos?', a: 'La implementación profesional arranca desde $650 e incluye diseño, carga de catálogo, pagos y configuración sobre Shopify o BigCommerce. Un e-commerce completo en Shopify o WooCommerce (catálogo amplio, pasarela de pago, inventario y panel de administración) arranca desde $1,750, y con más integraciones o desarrollo a medida el rango llega hasta $7,000. Aparte está la mensualidad de la plataforma (Shopify desde USD 39/mes, BigCommerce desde $25/mes) o el hosting si es WooCommerce. El detalle completo está publicado en nuestra página de precios.' },
      { q: '¿Shopify, WooCommerce o BigCommerce: cuál me conviene?', a: 'Como agencia Shopify, WooCommerce y BigCommerce en Estados Unidos no trabajamos casados con una sola plataforma: depende de tu caso. Shopify es la más rápida y estable para vender ya. WooCommerce da control total e integraciones a medida. BigCommerce es fuerte en pagos locales y planes accesibles. En el diagnóstico te recomendamos la correcta, sin sesgo.' },
      { q: '¿Integran pagos en dólares como Yape, Culqi o Niubiz?', a: 'Sí. Configuramos y probamos Stripe, PayPal, Shopify Payments, Yape, PagoEfectivo y Mercado Pago según tu plataforma, para que tus clientes paguen como están acostumbrados en Estados Unidos.' },
      { q: '¿En cuánto tiempo tengo mi tienda lista?', a: 'Una tienda estándar con Shopify o BigCommerce suele estar lista en 2 a 4 semanas. Una tienda WooCommerce a medida o con muchas integraciones puede tomar de 5 a 8 semanas, según la cantidad de productos y la entrega de contenido.' },
      { q: '¿La tienda va a aparecer en Google?', a: 'La construimos con SEO técnico de base (URLs, schema de producto, velocidad, sitemap). Para posicionar de verdad y competir por búsquedas de compra recomendamos sumar nuestro servicio de posicionamiento SEO y/o campañas de Google Ads y Google Shopping.' },
      { q: '¿Trabajan con negocios fuera de Lima?', a: 'Sí, trabajamos con empresas de todo el Perú de forma remota. Todo el proceso (diseño, revisiones, capacitación) se hace por videollamada y accesos compartidos.' },
    ],
    guides: 'Guías para decidir con datos',
    guidesList: [
      { title: '¿Cuánto cuesta una tienda virtual en Estados Unidos? Precios 2026', path: '/blogs/cuanto-cuesta-tienda-virtual-peru-2026' },
      { title: 'Pasarelas de pago para tu tienda online en Estados Unidos', path: '/blogs/pasarelas-pago-tienda-online-peru' },
      { title: 'Shopify vs WooCommerce vs BigCommerce: cuál elegir', path: '/blogs/shopify-woocommerce-tiendanube-peru-cual-elegir' },
      { title: 'Errores al crear una tienda virtual en Estados Unidos', path: '/blogs/errores-crear-tienda-virtual-peru' },
      { title: '¿Cuánto cuesta mantener una tienda virtual?', path: '/blogs/cuanto-cuesta-mantener-tienda-virtual-peru-2026' },
      { title: '¿Tienda virtual propia o vender en marketplace?', path: '/blogs/tienda-virtual-o-vender-en-marketplace-peru' },
    ],
    contact: 'Cotización gratuita para tu tienda',
    contactCta: 'Cuéntanos qué vendes y a quién. Te recomendamos la plataforma correcta, te damos un presupuesto claro y, si quieres, un plan para traer tráfico que compra con SEO y Google Ads.',
    service: 'una tienda virtual',
  },
  en: {
    eyebrow: '3R Core · Online Stores · Lima · Peru',
    h1: 'Online Store / E-commerce Agency in Lima, Peru',
    heroH2: 'Your online store on Shopify, WooCommerce or Tiendanube, ready to sell',
    sub: 'We build your online store on Shopify, WooCommerce or Tiendanube: local payments, loaded catalog, technical SEO and ready to sell. From $420 implementation, no generic templates.',
    cta: 'Get a store quote',
    why: 'Store + SEO + Google Ads under one roof',
    whyDesc: 'Unlike those who hand over an empty template, 3R Core builds your full e-commerce and connects it with SEO and Google Ads / Google Shopping, so your store doesn\'t just exist — it receives buying traffic and sells from day one. A store without traffic is a shop on an empty street; that\'s why the same team that builds it also ranks it on Google and brings buyers with measurable ads.',
    pillars: 'Everything we set up in your store',
    pillarsList: [
      { title: 'The right platform', desc: 'We choose Shopify (speed), WooCommerce (full control) or Tiendanube (local payments, accessible) based on your catalog, integrations and budget.' },
      { title: 'Local payments integrated', desc: 'Culqi, Niubiz, Izipay, Yape, PagoEfectivo and Mercado Pago configured and tested for frictionless checkout in Peru.' },
      { title: 'Baseline technical SEO', desc: 'Clean URLs, product schema, speed (Core Web Vitals), sitemap and metadata so Google understands and shows your store.' },
      { title: 'Catalog, shipping and tracking', desc: 'Product upload with variants and categories, shipping zones and rates, automated order emails and Google Analytics 4 + pixels ready.' },
    ],
    platforms: 'Shopify, WooCommerce or Tiendanube? Our unbiased take',
    platformsIntro: 'We are not married to a single platform: we pick it based on your catalog, integrations and budget. This is what drives the decision:',
    platformsList: [
      { title: 'Shopify', desc: 'The fastest and most stable way to start selling now. Hosting included, proven checkout and hundreds of apps. Platform plans start at $39/mo.' },
      { title: 'WooCommerce', desc: 'Full control on WordPress: custom integrations, no platform fee (you pay your hosting) and complete design freedom. Ideal for catalogs with custom logic.' },
      { title: 'Tiendanube', desc: 'Strong on local payments and accessible plans (from ~$24/mo). Built for Latin America: local payment methods and shipping solved.' },
    ],
    platformsMore: 'We compare all three in depth in our guide',
    platformsMoreLink: '/blogs/shopify-vs-woocommerce-peru-2026',
    platformsMoreAnchor: 'Shopify vs WooCommerce Peru 2026',
    pricing: 'How much does an online store cost?',
    pricingIntro: 'Net implementation prices. Platform monthly fees and payment gateway commissions are separate.',
    pricingTiers: [
      { name: 'Basic store', price: 'from $420', platform: 'Shopify or Tiendanube', desc: 'Design on the platform, initial catalog upload, local payments configured and training to manage it.' },
      { name: 'Professional store', price: 'from $700', platform: 'WooCommerce', desc: 'Full control on WordPress: brand-aligned design, catalog with variants, payments and shipping configured.' },
      { name: 'Advanced store', price: 'from $1,800', platform: 'Shopify / WooCommerce', desc: 'Large catalogs, integrations (invoicing, inventory), automations and conversion optimization.' },
      { name: 'Custom e-commerce', price: 'from $3,300', platform: 'Custom', desc: 'Custom development: B2B, subscriptions, multi-warehouse or ERP integrations.' },
    ],
    pricingNote: 'A standard Shopify or Tiendanube store is usually ready in 2 to 4 weeks; a custom WooCommerce build with many integrations takes 5 to 8 weeks, depending on catalog size and content delivery.',
    pricingLinks: 'Full detail at',
    methodology: 'How we work with you',
    methodologyList: [
      { step: 'Step 1', title: 'Diagnosis and platform', desc: 'We understand your business, catalog and goals, and recommend the right platform.' },
      { step: 'Step 2', title: 'Mobile-first design', desc: 'We design a clear, fast, mobile-first store aligned to your brand.' },
      { step: 'Step 3', title: 'Development and integrations', desc: 'We build the store, load the catalog and integrate payments, shipping, WhatsApp and tracking.' },
      { step: 'Step 4', title: 'Testing and launch', desc: 'We test every checkout flow on mobile and desktop, verify real payments and go live.' },
      { step: 'Step 5', title: 'Training and growth', desc: 'We train you and, if you want, add SEO and Google Ads to scale sales with buying traffic.' },
    ],
    growth: 'Once your store is live: traffic that buys',
    growthDesc: 'Building the store is half the job. The other half is showing up when your customers search for what you sell. That\'s why our three pillars work together:',
    growthList: [
      { title: 'SEO Positioning', desc: 'We optimize categories, product pages and content so your store shows up on Google — organic traffic that doesn\'t depend on ad spend.', path: '/posicionamiento-seo', anchor: 'See SEO service' },
      { title: 'Google Ads & Google Shopping', desc: 'Search and Shopping campaigns with your products, optimized budget and end-to-end conversion tracking.', path: '/servicios/google-ads', anchor: 'See Google Ads service' },
    ],
    coverage: 'Platforms and payment gateways we integrate',
    coverageList: ['Shopify', 'WooCommerce', 'Tiendanube', 'Culqi', 'Niubiz', 'Izipay', 'Yape', 'PagoEfectivo', 'Mercado Pago', 'Google Analytics 4'],
    faq: 'Online store FAQs',
    faqList: [
      { q: 'How much does it cost to build an online store in Peru?', a: 'Professional implementation starts from $420 and includes design, catalog upload, payments and setup. A complete e-commerce on Shopify or WooCommerce (large catalog, payment gateway, inventory and admin panel) starts from $1,750, and larger catalogs, integrations or custom development range up to $7,000. The platform monthly cost is separate (Shopify from $39/mo, Tiendanube from ~$24/mo) or hosting for WooCommerce.' },
      { q: 'Shopify, WooCommerce or Tiendanube — which is best for me?', a: 'As a Shopify, WooCommerce and Tiendanube agency in Peru we are not tied to a single platform — it depends on your case. Shopify is the fastest and most stable to start selling. WooCommerce gives full control and custom integrations. Tiendanube is strong on local payments and accessible plans. In the diagnosis we recommend the right one, without bias.' },
      { q: 'Do you integrate Peruvian payments like Yape, Culqi or Niubiz?', a: 'Yes. We configure and test Culqi, Niubiz, Izipay, Yape, PagoEfectivo and Mercado Pago based on your platform, so customers pay the way they are used to in Peru.' },
      { q: 'How long until my store is ready?', a: 'A standard Shopify or Tiendanube store is usually ready in 2 to 4 weeks. A custom WooCommerce store or one with many integrations can take 5 to 8 weeks, depending on catalog size and content delivery.' },
      { q: 'Will the store show up on Google?', a: 'We build it with baseline technical SEO (URLs, product schema, speed, sitemap). To truly rank for buying searches we recommend adding our SEO service and/or Google Ads and Google Shopping campaigns.' },
      { q: 'Do you work with businesses outside Lima?', a: 'Yes, we work remotely with companies across Peru. The whole process (design, reviews, training) happens over video calls and shared access.' },
    ],
    guides: 'Guides to decide with data',
    guidesList: [
      { title: 'How much does an online store cost in Peru? 2026 prices', path: '/blogs/cuanto-cuesta-tienda-virtual-peru-2026' },
      { title: 'Payment gateways for your online store in Peru', path: '/blogs/pasarelas-pago-tienda-online-peru' },
      { title: 'Shopify vs WooCommerce vs Tiendanube: which one', path: '/blogs/shopify-woocommerce-tiendanube-peru-cual-elegir' },
      { title: 'Mistakes when building an online store in Peru', path: '/blogs/errores-crear-tienda-virtual-peru' },
      { title: 'How much does it cost to maintain an online store?', path: '/blogs/cuanto-cuesta-mantener-tienda-virtual-peru-2026' },
      { title: 'Your own store or selling on a marketplace?', path: '/blogs/tienda-virtual-o-vender-en-marketplace-peru' },
    ],
    contact: 'Free quote for your store',
    contactCta: 'Tell us what you sell and to whom. We recommend the right platform, give you a clear budget and, if you want, a plan to bring buying traffic with SEO and Google Ads.',
    service: 'an online store',
  },
}

export default async function TiendasVirtualesLimaPage({ params }: Props) {
  const { locale } = await params
  const t = (COPY as any)[locale === 'en' ? 'en' : locale === 'us' ? 'us' : 'es']

  return (
    <main className="min-h-screen bg-black text-white">
      <h1 className="sr-only">{t.h1}</h1>
      <section className="px-6 md:px-10 lg:px-20 pt-32 pb-20 max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-4">{t.eyebrow}</p>
        {/* Heading visible distinto del H1 sr-only (antes ambos repetían el
            mismo texto → H1 y H2 idénticos en la misma página). */}
        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">{t.heroH2 ?? t.h1}</h2>
        <p className="seo-intro text-lg md:text-xl text-white/80 max-w-3xl mb-10">{t.sub}</p>
        <a href="#cotizar" className="inline-block bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition">{t.cta}</a>
      </section>

      <section className="px-6 md:px-10 lg:px-20 py-16 max-w-6xl mx-auto border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.why}</h2>
        <p className="text-white/70 max-w-3xl">{t.whyDesc}</p>
      </section>

      <section className="px-6 md:px-10 lg:px-20 py-16 max-w-6xl mx-auto border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">{t.pillars}</h2>
        <ul className="grid md:grid-cols-2 gap-4">
          {t.pillarsList.map((p: any, i: number) => (
            <li key={i} className="border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-white/70">{p.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="px-6 md:px-10 lg:px-20 py-16 max-w-6xl mx-auto border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.platforms}</h2>
        <p className="text-white/70 max-w-3xl mb-10">{t.platformsIntro}</p>
        <ul className="grid md:grid-cols-3 gap-4">
          {t.platformsList.map((p: any, i: number) => (
            <li key={i} className="border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-white/70">{p.desc}</p>
            </li>
          ))}
        </ul>
        <p className="text-white/60 mt-6">
          {t.platformsMore}:{' '}
          <Link href={t.platformsMoreLink as AppPathname} className="text-white underline underline-offset-4 hover:text-white/80 transition">{t.platformsMoreAnchor}</Link>.
        </p>
      </section>

      <section className="px-6 md:px-10 lg:px-20 py-16 max-w-6xl mx-auto border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.pricing}</h2>
        <p className="text-white/70 max-w-3xl mb-10">{t.pricingIntro}</p>
        <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.pricingTiers.map((tier: any, i: number) => (
            <li key={i} className="border border-white/10 rounded-2xl p-6 flex flex-col">
              <h3 className="text-lg font-semibold">{tier.name}</h3>
              <p className="text-2xl font-bold my-2">{tier.price}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-3">{tier.platform}</p>
              <p className="text-white/70 text-sm">{tier.desc}</p>
            </li>
          ))}
        </ul>
        <p className="text-white/60 mt-8 max-w-3xl">{t.pricingNote}</p>
        <p className="text-white/60 mt-2">
          {t.pricingLinks}{' '}
          <Link href="/precios" className="text-white underline underline-offset-4 hover:text-white/80 transition">{locale === 'en' ? 'Pricing' : 'Precios'}</Link>
          {' · '}
          <Link href={locale === "us"
              ? "/precios"
              : { pathname: "/blogs/[slug]", params: { slug: "cuanto-cuesta-tienda-virtual-peru-2026" } }} className="text-white underline underline-offset-4 hover:text-white/80 transition">{locale === 'en' ? 'Online store cost guide' : locale === 'us' ? 'Precios de tiendas online' : 'Guía de precios de tiendas virtuales'}</Link>
        </p>
      </section>

      <section className="px-6 md:px-10 lg:px-20 py-16 max-w-6xl mx-auto border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">{t.methodology}</h2>
        <ol className="space-y-4">
          {t.methodologyList.map((m: any, i: number) => (
            <li key={i} className="border border-white/10 rounded-2xl p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-1">{m.step}</p>
              <h3 className="text-xl font-semibold mb-2">{m.title}</h3>
              <p className="text-white/70">{m.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="px-6 md:px-10 lg:px-20 py-16 max-w-6xl mx-auto border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.growth}</h2>
        <p className="text-white/70 max-w-3xl mb-10">{t.growthDesc}</p>
        <ul className="grid md:grid-cols-2 gap-4">
          {t.growthList.map((g: any, i: number) => (
            <li key={i} className="border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-2">{g.title}</h3>
              <p className="text-white/70 mb-4">{g.desc}</p>
              <Link href={g.path as AppPathname} className="text-white underline underline-offset-4 hover:text-white/80 transition font-semibold">{g.anchor}</Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="px-6 md:px-10 lg:px-20 py-16 max-w-6xl mx-auto border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.coverage}</h2>
        <ul className="flex flex-wrap gap-2">
          {t.coverageList.map((d: string, i: number) => (
            <li key={i} className="px-4 py-2 border border-white/15 rounded-full text-sm text-white/80">{d}</li>
          ))}
        </ul>
      </section>

      <section className="px-6 md:px-10 lg:px-20 py-16 max-w-6xl mx-auto border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">{t.faq}</h2>
        <ul className="space-y-4">
          {t.faqList.map((f: any, i: number) => (
            <li key={i} className="border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-2">{f.q}</h3>
              <p className="text-white/70">{f.a}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="px-6 md:px-10 lg:px-20 py-16 max-w-6xl mx-auto border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">{t.guides}</h2>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.guidesList.map((g: any, i: number) => (
            <li key={i}>
              <Link href={g.path as AppPathname} className="block border border-white/10 rounded-2xl p-6 hover:border-white/30 transition h-full">
                <span className="text-white/90 font-medium">{g.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section id="cotizar" className="px-6 md:px-10 lg:px-20 py-20 max-w-6xl mx-auto border-t border-white/10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.contact}</h2>
        <p className="text-white/70 max-w-2xl mx-auto mb-10">{t.contactCta}</p>
        <PillarWaCapture locale={locale} service={t.service} />
      </section>
    </main>
  )
}
