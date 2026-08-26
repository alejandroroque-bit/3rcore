/**
 * Textos de la página madre «agencia de marketing digital en Lima».
 * Viven aparte porque el layout los necesita para construir el FAQPage del
 * JSON-LD: si el marcado y la página se escriben por separado acaban
 * diciendo cosas distintas, que es exactamente lo que Google penaliza.
 */

type Item = { name: string; desc: string; href: string }

export const COPY = {
  es: {
    eyebrow: '3R Core · La Molina, Lima · Perú',
    hero: 'Agencia de marketing digital en Lima',
    sub: 'Somos una agencia peruana con oficina en La Molina. Trabajamos con empresas de todo el Perú y, a través de nuestra filial, con negocios de Estados Unidos. Branding, redes sociales, Google Ads, posicionamiento SEO, tiendas virtuales y desarrollo web.',
    addr: 'Alameda de la Paz 187, primer piso, La Molina, Lima 15024',
    phone: '+51 986 889 147',
    email: 'info@3rcore.com',
    cta: 'Cotiza tu proyecto',
    ctaHref: '/cotizar',
    ctaSecondary: 'Ver precios de cada servicio',
    ctaSecondaryHref: '/precios',

    whyH2: 'Qué hace distinta a esta agencia',
    whyP1: 'La mayoría de agencias en Lima venden horas de gestión. Nosotros vendemos un resultado que se pueda contar: cuántas personas llegaron, cuántas escribieron y cuánto costó cada una. Por eso lo primero que se configura en cualquier proyecto no es una campaña, es la medición — sin ella, cualquier reporte mensual es una opinión bien maquetada.',
    whyP2: '3R Core la fundaron los hermanos Alejandro y Piero Roque, y sigue siendo una agencia familiar: el que responde el WhatsApp es el que trabaja la cuenta, no un ejecutivo intermedio. Eso limita cuántos clientes se pueden llevar a la vez, y es una decisión consciente. Los precios están publicados en la web, no hay contratos de permanencia forzosa y el trabajo entregado —marca, web, cuentas publicitarias— es propiedad del cliente desde el primer día.',
    whyP3: 'Tenemos 4,7 estrellas sobre 42 reseñas verificadas en Google, de clientes en Perú y en Estados Unidos. No es un sello que nos hayamos puesto nosotros: está en la ficha pública y se puede leer entera.',

    servicesH2: 'Los servicios que se contratan desde Lima',
    servicesP: 'Cada uno se puede contratar suelto o dentro de una estrategia conjunta. En la página de cada servicio está el detalle de qué incluye, el plazo y el precio.',
    services: [
      { name: 'Branding e identidad de marca', desc: 'Logotipo, manual de marca, paleta y tipografía. Desde S/500, con la propuesta entregada tras una sesión de descubrimiento.', href: '/servicios/branding' },
      { name: 'Manejo de redes sociales', desc: 'De 8 a 12 piezas al mes en TikTok, Instagram, Facebook y LinkedIn, con community management y reporte. Desde S/1,500 al mes.', href: '/servicios/socialmedia' },
      { name: 'Google Ads y SEM', desc: 'Search, Performance Max, YouTube, Display, Shopping y remarketing. Fee desde S/1,800 al mes, más el presupuesto de pauta.', href: '/servicios/google-ads' },
      { name: 'Posicionamiento SEO', desc: 'Auditoría, plan, optimización on-page, contenidos y reporte mensual. S/1,800 al mes, sin contrato forzoso.', href: '/posicionamiento-seo' },
      { name: 'Diseño y desarrollo web', desc: 'Landing pages desde S/1,800 y webs corporativas de 5 a 8 secciones entre S/4,500 y S/9,000.', href: '/servicios/web-development' },
      { name: 'Tiendas virtuales', desc: 'Shopify, WooCommerce o Tiendanube con pasarela local, inventario y panel. E-commerce completo desde S/6,500.', href: '/tiendas-virtuales-lima' },
    ] as Item[],

    processH2: 'Cómo se trabaja una cuenta, paso a paso',
    process: [
      { t: 'Primero el negocio, no el canal', d: 'Antes de proponer nada preguntamos qué margen deja cada venta, cuánto vale un cliente en el tiempo y de dónde salen hoy los que llegan. Un negocio que vive del boca a boca y de Instagram no necesita Google Ads el primer mes: necesita que su web convierta.' },
      { t: 'Se instala la medición', d: 'Analítica, eventos de contacto y, cuando hay campañas, conversiones enlazadas a la cuenta publicitaria. Es la parte menos vistosa y la que decide si el resto sirve de algo.' },
      { t: 'Se enciende un canal y se deja madurar', d: 'Abrir cinco frentes a la vez con presupuesto de uno es la forma más rápida de no saber qué funcionó. Se empieza por el canal con más probabilidad de dar retorno y se amplía cuando los números lo justifican.' },
      { t: 'Reporte mensual con las tres cifras que importan', d: 'Qué se hizo, qué costó y qué trajo. Sin gráficos de impresiones que no significan nada. Si un mes salió mal, el reporte lo dice.' },
    ],

    zonesH2: 'A qué zonas y sectores atendemos',
    zonesP: 'La oficina está en La Molina y trabajamos con empresas de toda Lima Metropolitana —San Isidro, Miraflores, Surco, San Borja, La Victoria, Los Olivos, Callao— y de provincias, en remoto. También atendemos a negocios de Estados Unidos en español y en inglés, a través de nuestra filial allí, en horario compatible y facturando en dólares.',
    sectorsP: 'Hay tres sectores con página propia porque su embudo, su normativa y su coste por contacto no se parecen al resto:',
    sectors: [
      { name: 'Clínicas y consultorios', desc: 'Se mide en citas agendadas, no en seguidores.', href: '/servicios/marketing-clinicas' },
      { name: 'Inmobiliarias y proyectos', desc: 'Captación de leads con costo por lead medible y seguimiento en CRM.', href: '/servicios/marketing-inmobiliarias' },
      { name: 'E-commerce y tiendas online', desc: 'Shopping, catálogo, email y optimización de la conversión.', href: '/servicios/marketing-ecommerce' },
    ] as Item[],

    faqH2: 'Lo que se pregunta antes de contratar',
    faq: [
      { q: '¿Cuánto cuesta contratar una agencia de marketing digital en Lima?', a: 'Como referencia mensual de mercado: un emprendimiento se mueve entre S/2,500 y S/4,500, una pyme entre S/5,000 y S/12,000, y una empresa mediana entre S/12,000 y S/30,000. Por servicio suelto: SEO S/1,800 al mes, gestión de Google Ads desde S/1,800 más pauta, redes sociales desde S/1,500, branding desde S/500 y webs desde S/1,800.' },
      { q: '¿Cuánto tarda en verse un resultado?', a: 'Depende del canal. Google Ads y Meta Ads dan datos la primera semana y decisiones sólidas al mes. El SEO es otra escala: los primeros movimientos se ven entre el segundo y el tercer mes, y el resultado serio a partir del sexto. Quien prometa primeros puestos en treinta días está vendiendo otra cosa.' },
      { q: '¿Hay contrato de permanencia?', a: 'No. Los servicios mensuales se renuevan mes a mes. Si el trabajo no convence, no hay penalidad por parar.' },
      { q: '¿De quién son la web, la marca y las cuentas publicitarias?', a: 'Del cliente, siempre y desde el principio. Las cuentas de Google Ads, Meta y Analytics se crean a nombre de la empresa y nosotros entramos como gestores. Si algún día la relación termina, no hay nada que reclamar.' },
      { q: '¿Atienden a empresas fuera de Lima?', a: 'Sí. Trabajamos en remoto con empresas de todo el Perú y con negocios de Estados Unidos a través de nuestra filial, en español y en inglés.' },
    ],

    closeH2: 'Hablemos de tu proyecto',
    closeP: 'Cuéntanos qué vendes y qué está fallando hoy. Salimos con una propuesta con alcance y precio, no con una presentación de cincuenta láminas. Si no somos la agencia adecuada para lo que necesitas, también lo decimos.',
    moreH3: 'Antes de escribirnos',
    more: [
      { name: 'Casos de éxito', desc: 'Proyectos reales con lo que se hizo y el resultado.', href: '/casos-de-exito' },
      { name: 'Precios completos', desc: 'La tabla entera de planes, extras y presupuestos.', href: '/precios' },
      { name: 'Todos los servicios', desc: 'El catálogo con el detalle de cada uno.', href: '/servicios' },
      { name: 'Preguntas frecuentes', desc: 'Plazos, contratos y qué pasa si algo no funciona.', href: '/preguntas' },
    ] as Item[],
  },
  en: {
    eyebrow: '3R Core · La Molina, Lima · Peru',
    hero: 'Digital marketing agency in Lima, Peru',
    sub: 'A Peruvian agency with its office in La Molina, Lima. We work with companies across Peru and — through our U.S. subsidiary — with businesses in the United States. Branding, social media, Google Ads, SEO, online stores and web development.',
    addr: 'Alameda de la Paz 187, first floor, La Molina, Lima 15024',
    phone: '+51 986 889 147',
    email: 'info@3rcore.com',
    cta: 'Get a quote',
    ctaHref: '/quote',
    ctaSecondary: 'See pricing per service',
    ctaSecondaryHref: '/pricing',

    whyH2: 'What makes this agency different',
    whyP1: 'Most agencies sell hours of management. We sell a result you can count: how many people arrived, how many wrote in and what each one cost. That is why the first thing set up on any account is not a campaign — it is measurement. Without it, a monthly report is a well-designed opinion.',
    whyP2: '3R Core was founded by brothers Alejandro and Piero Roque and is still a family agency: whoever answers your message is the person working on the account. That limits how many clients can be taken on at once, and it is a deliberate choice. Prices are published, there are no forced retainers, and everything delivered — brand, site, ad accounts — belongs to the client from day one.',
    whyP3: 'We hold 4.7 stars from 42 verified Google reviews, left by clients in Peru and the United States. It is a public profile anyone can read in full.',

    servicesH2: 'Services delivered from Lima',
    servicesP: 'Each one can be hired on its own or inside a joint strategy. Every service page has the scope, the timeline and the price.',
    services: [
      { name: 'Branding and visual identity', desc: 'Logo, brand manual, palette and typography, delivered after a discovery session.', href: '/services/branding' },
      { name: 'Social media management', desc: '8 to 12 pieces a month across TikTok, Instagram, Facebook and LinkedIn, with community management and reporting.', href: '/services/social-media' },
      { name: 'Google Ads and SEM', desc: 'Search, Performance Max, YouTube, Display, Shopping and remarketing. Ad spend is separate.', href: '/services/google-ads' },
      { name: 'SEO', desc: 'Audit, plan, on-page work, content and monthly reporting. No lock-in.', href: '/seo-agency' },
      { name: 'Web design and development', desc: 'Landing pages, corporate sites and bilingual builds with technical SEO.', href: '/services/web-development' },
      { name: 'Online stores', desc: 'Shopify, WooCommerce or Tiendanube with payments, inventory and an admin panel.', href: '/ecommerce-development' },
    ] as Item[],

    processH2: 'How an account is run, step by step',
    process: [
      { t: 'Business first, channel second', d: 'Before proposing anything we ask what margin each sale leaves, what a customer is worth over time and where today’s customers come from. A business living off word of mouth does not need paid search in month one — it needs a site that converts.' },
      { t: 'Measurement gets installed', d: 'Analytics, contact events and, where there are campaigns, conversions wired to the ad account. It is the least glamorous part and the one that decides whether the rest means anything.' },
      { t: 'One channel goes live and is left to mature', d: 'Opening five fronts with one front’s budget is the fastest way to never know what worked. We start with the channel most likely to return and expand when the numbers justify it.' },
      { t: 'A monthly report with the three figures that matter', d: 'What was done, what it cost and what it brought. No impression charts that mean nothing. If a month went badly, the report says so.' },
    ],

    zonesH2: 'Where we work and who we work with',
    zonesP: 'The office is in La Molina and we serve companies across Metropolitan Lima — San Isidro, Miraflores, Surco, San Borja, La Victoria, Los Olivos, Callao — and the rest of Peru remotely. We also serve U.S. businesses in Spanish and English through our U.S. subsidiary, on overlapping hours and invoiced in USD.',
    sectorsP: 'Three industries have their own page because their funnel, regulation and cost per contact look nothing like the rest:',
    sectors: [
      { name: 'Clinics and medical practices', desc: 'Measured in booked appointments, not followers.', href: '/services/healthcare-marketing' },
      { name: 'Real estate', desc: 'Lead generation with measurable cost per lead and CRM follow-up.', href: '/services/real-estate-marketing' },
      { name: 'E-commerce', desc: 'Shopping, catalog feeds, email and conversion optimization.', href: '/services/ecommerce-marketing' },
    ] as Item[],

    faqH2: 'What people ask before signing',
    faq: [
      { q: 'What does hiring a digital marketing agency cost?', a: 'It depends on the mix. Most U.S. engagements start with one channel and one clear objective and grow from there. Every service page publishes its own starting price in USD.' },
      { q: 'How long until results show?', a: 'It depends on the channel. Paid search and paid social give data in week one and solid decisions within a month. SEO is a different scale: first movements between month two and three, serious results from month six. Anyone promising top rankings in thirty days is selling something else.' },
      { q: 'Is there a lock-in contract?', a: 'No. Monthly services renew month to month, with no penalty for stopping.' },
      { q: 'Who owns the site, the brand and the ad accounts?', a: 'The client, always and from the start. Google Ads, Meta and Analytics accounts are created under the company’s name and we come in as managers.' },
      { q: 'Do you work with companies outside Peru?', a: 'Yes. We serve U.S. businesses in Spanish and English through our U.S. subsidiary.' },
    ],

    closeH2: 'Let’s talk about your project',
    closeP: 'Tell us what you sell and what is failing today. You get a proposal with scope and price, not a fifty-slide deck. If we are not the right agency for what you need, we say that too.',
    moreH3: 'Before you write',
    more: [
      { name: 'Case studies', desc: 'Real projects, what was done and what came out of it.', href: '/services' },
      { name: 'Pricing', desc: 'The full table of plans, add-ons and budgets.', href: '/pricing' },
      { name: 'All services', desc: 'The catalogue with the detail of each one.', href: '/services' },
      { name: 'FAQ', desc: 'Timelines, contracts and what happens if something does not work.', href: '/faq' },
    ] as Item[],
  },
}

