/**
 * Titles y descripciones de blog escritos a mano para las URLs que YA rankean
 * y no reciben clics.
 *
 * De dónde sale la lista (Search Console, 90 días, 25-ago-2026): estos posts
 * están en posiciones 4 a 7 —media pantalla— con CTR entre 0,2% y 1,8%, cuando
 * lo esperable en esa posición ronda el 4-8%. Cuando alguien está en el puesto
 * 4 y no le hacen clic, el problema no es el posicionamiento: es lo que se lee
 * en el resultado. Solo `cuanto-cuesta-pagina-web-peru-2026` acumula 4.195
 * apariciones y 17 visitas.
 *
 * Qué cambia respecto al meta que trae Supabase: el snippet dice la CIFRA. En
 * una búsqueda que empieza por «cuánto cuesta», el resultado que enseña el
 * precio se lleva el clic. Los importes son los publicados por el cliente en
 * /es/precios — ni uno inventado.
 *
 * Cómo mandar: esto tiene prioridad sobre `meta_title` / `meta_description` de
 * la base. Para devolver el control al CMS, basta borrar la entrada.
 *
 * Deliberadamente NO se toca «características de la publicidad» (2.694
 * apariciones, posición 7,4): es público escolar. Subirle el CTR inflaría las
 * estadísticas sin traer un solo cliente.
 */

export interface BlogSeoOverride {
  title: string
  description: string
}

export const BLOG_SEO_OVERRIDES: Record<string, BlogSeoOverride> = {
  'cuanto-cuesta-pagina-web-peru-2026': {
    title: '¿Cuánto cuesta una página web en Perú? Precios 2026',
    description:
      'Landing desde S/1,800, web corporativa entre S/4,500 y S/9,000 y tienda online desde S/6,500. Qué incluye cada rango y qué encarece el presupuesto.',
  },
  'cuanto-cuesta-branding-peru-2026': {
    title: '¿Cuánto cuesta el branding en Perú? Precios 2026',
    description:
      'Una identidad con logotipo y manual de marca arranca desde S/500. Qué entra en ese precio, qué sube la factura y cómo saber si te cobran de más.',
  },
  'cuanto-cuesta-publicidad-facebook-instagram-peru-2026': {
    title: 'Cuánto cuesta la publicidad en Facebook en Perú 2026',
    description:
      'Qué se le paga a Meta y qué a la agencia, cuánto hace falta para arrancar en Perú y los errores que disparan el costo por resultado.',
  },
  'cuanto-cuesta-tienda-virtual-peru-2026': {
    title: '¿Cuánto cuesta una tienda virtual en Perú? 2026',
    description:
      'Implementación en Shopify o Tiendanube desde S/1,500 y e-commerce completo desde S/6,500. Qué incluye cada opción y qué se paga aparte.',
  },
  'cuanto-cuesta-mantener-tienda-virtual-peru-2026': {
    title: '¿Cuánto cuesta mantener una tienda virtual en Perú?',
    description:
      'Hosting, dominio, pasarela de pago, plantilla y soporte: la suma real de mantener una tienda online en Perú cada mes, sin sorpresas al final.',
  },
  'cuanto-cuesta-community-manager-redes-lima-2026': {
    title: '¿Cuánto cuesta un community manager en Lima? 2026',
    description:
      'Freelance, agencia o alguien en planilla: qué cobra cada opción en Lima y qué incluye. Con agencia, la gestión de redes arranca desde S/1,500 al mes.',
  },
  'cuanto-cuesta-agencia-seo-lima-2026': {
    title: '¿Cuánto cuesta una agencia SEO en Lima? Precios 2026',
    description:
      'El SEO con agencia en Lima arranca desde S/1,800 al mes. Qué entra en ese fee, cuánto tarda de verdad en verse y qué promesas son señal de humo.',
  },
  'cuanto-cuesta-google-ads-lima-agencia-2026': {
    title: '¿Cuánto cuesta Google Ads con agencia en Lima? 2026',
    description:
      'Fee de gestión desde S/1,800 al mes más un presupuesto de pauta mínimo de S/1,500 que se paga directo a Google. Qué cubre exactamente cada parte.',
  },
  'cuanto-cuesta-anunciar-tiktok-peru-cpm-cpa': {
    title: '¿Cuánto cuesta anunciar en TikTok en Perú? CPM y CPA',
    description:
      'Presupuesto mínimo para arrancar, cómo se forman el CPM y el CPA en Perú y cuánto hace falta para que la campaña salga de la fase de aprendizaje.',
  },
  'agencia-shopify-peru-que-hace-cuanto-cuesta': {
    title: 'Agencia Shopify en Perú: qué hace y cuánto cuesta',
    description:
      'Qué hace exactamente una agencia Shopify, qué puedes resolver tú solo y cuánto cuesta. Una tienda completa con pasarela local arranca desde S/6,500.',
  },
  'tarifas-publicidad-digital-peru-2026-google-meta-tiktok-linkedin': {
    title: 'Tarifas de publicidad digital en Perú 2026',
    description:
      'Google, Meta, TikTok y LinkedIn comparados: presupuesto mínimo por canal, a qué público llega cada uno y cuál conviene según lo que vendas.',
  },
  'tiktok-ads-peru-2026-guia-completa-empezar-vender': {
    title: 'TikTok Ads en Perú: guía para empezar a vender',
    description:
      'Cómo montar tu primera campaña de TikTok Ads en Perú paso a paso: cuenta, píxel, formatos, presupuesto y qué mirar en la primera semana.',
  },
  'mejores-paginas-web-peruanas-2026': {
    title: 'Las mejores páginas web peruanas de 2026',
    description:
      'Webs peruanas que sí funcionan, mirando diseño, velocidad y conversión — y qué conviene copiarles antes de rehacer la tuya desde cero.',
  },
  // 18.825 apariciones, posición 6,5 y CTR 0,77%. Ojo: es público escolar, no
  // clientes. Se arregla el snippet porque cuesta cero, no porque vaya a
  // vender: el valor real de esta URL es el CTA hacia los servicios.
  'parafrasist-la-mejor-herramienta-para-resumir-textos': {
    title: 'Parafrasist: cómo funciona y para qué sirve de verdad',
    description:
      'Cómo funciona Parafrasist para reescribir y resumir textos, en qué acierta, dónde falla y qué tener en cuenta antes de usarlo en un trabajo.',
  },
}

export function getBlogSeoOverride(slug: string, locale: string): BlogSeoOverride | null {
  // Solo /es: los posts en inglés son otros y no arrastran este historial.
  if (locale === 'en') return null
  return BLOG_SEO_OVERRIDES[slug] ?? null
}
