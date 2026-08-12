import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://3rcore.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // '/gracias' es la página de agradecimiento tras enviar el formulario.
        // Al traducir los slugs pasó a ser '/thank-you' en /en, así que esa
        // versión quedaba rastreable e indexable.
        disallow: ['/api/', '/gracias', '/thank-you', '/admin', '/admin/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
