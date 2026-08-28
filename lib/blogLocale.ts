/**
 * Locale del BLOG a partir del locale de la ruta.
 *
 * Hasta el 28-ago-2026 esto era `locale === 'en' ? 'en' : 'es'` repetido en
 * cinco ficheros, y tenía una consecuencia que no se había medido: /us servía
 * los posts peruanos en español y su canonical apuntaba a /es/blogs/…. Es
 * decir, el mercado hispano de EE.UU. —que es la mitad de la apuesta de
 * Estados Unidos— no podía tener un solo artículo propio: cualquier pieza
 * escrita para él terminaba indexada como contenido de Perú.
 *
 * Con 'us' como locale de primera clase, un post escrito para el negocio
 * hispano de EE.UU. vive en /us/blogs/<slug>, canonicaliza ahí y entra en el
 * sitemap de ese mercado.
 *
 * Los posts peruanos ('es') siguen sirviéndose en /us cuando /us no tiene
 * artículo propio para ese slug: ver getPost en blogs/[slug]/page.tsx.
 */
export type BlogLocale = 'es' | 'en' | 'us'

export function blogLocale(routeLocale: string): BlogLocale {
  if (routeLocale === 'en') return 'en'
  if (routeLocale === 'us') return 'us'
  return 'es'
}

/** Idioma real del contenido, para inLanguage/hreflang. 'us' es español. */
export function contentLanguage(loc: BlogLocale): string {
  return loc === 'en' ? 'en-US' : loc === 'us' ? 'es-US' : 'es-PE'
}
