import type { Metadata } from "next"
import { pathnames } from "@/i18n/routing"

export const BASE_URL = 'https://3rcore.com'

export const DEFAULT_OG_IMAGE = {
  url: `${BASE_URL}/og/default.jpg`,
  width: 1200,
  height: 630,
  alt: '3R Core - Agencia de Marketing Digital',
}

/**
 * Traduce una ruta interna (siempre en español, como las carpetas de
 * app/[locale]) al slug que ve el usuario en ese locale.
 * `/posicionamiento-seo` + 'en' -> `/seo-agency`.
 */
export function localizedPath(path: string, locale: string): string {
  const entry = (pathnames as Record<string, string | Record<string, string>>)[path]
  if (!entry) return path
  if (typeof entry === 'string') return entry
  return entry[locale] ?? path
}

/** URL absoluta y ya localizada. */
export function localizedUrl(path: string, locale: string): string {
  const p = localizedPath(path, locale)
  return `${BASE_URL}/${locale}${p === '/' ? '' : p}`
}

/**
 * hreflang del cluster completo. Se usa en TODAS las páginas core para que
 * Google vea un grupo coherente: mismo set de alternates en las tres versiones.
 * Cada alternate apunta al slug REAL de su locale — declarar
 * `/en/posicionamiento-seo` cuando esa URL redirige a `/en/seo-agency` sería
 * un hreflang hacia una redirección, que Google descarta.
 * x-default apunta a /en (no a /es): el visitante sin idioma resuelto es, por
 * volumen medido, internacional — EE.UU. dio 400 sesiones en 89 días sin haber
 * trabajado nunca ese mercado.
 */
export function hreflangFor(path: string) {
  const es = localizedUrl(path, 'es')
  const us = localizedUrl(path, 'us')
  const en = localizedUrl(path, 'en')
  return {
    'es': es,
    'es-PE': es,
    'es-US': us,
    'en': en,
    'en-US': en,
    'x-default': en,
  }
}

/**
 * hreflang restringido: solo los locales que de verdad se indexan. Se conserva
 * el x-default apuntando al primero de la lista.
 */
export function hreflangSolo(path: string, locales: string[]) {
  const out: Record<string, string> = {}
  const mapa: Record<string, string[]> = { es: ['es', 'es-PE'], us: ['es-US'], en: ['en', 'en-US'] }
  for (const loc of locales) {
    const url = localizedUrl(path, loc)
    for (const etiqueta of (mapa[loc] ?? [loc])) out[etiqueta] = url
  }
  out['x-default'] = localizedUrl(path, locales[0])
  return out
}

interface PageMetadataOptions {
  locale: string
  path: string
  titleEs: string
  titleEn: string
  descriptionEs: string
  descriptionEn: string
  /** es-US. Si no se pasa, cae al texto de Perú. */
  titleUs?: string
  descriptionUs?: string
  noindex?: boolean
  /**
   * Limita el hreflang a los idiomas indicados. Hace falta cuando una página
   * solo se indexa en un locale: declarar un alternate hacia una URL noindex es
   * una señal contradictoria — Google descarta el par y lo puede reportar como
   * error de hreflang. Ejemplo: /agencia-marketing-digital-lima solo compite en
   * /es; /en y /us existen pero van noindex,follow.
   */
  onlyLocales?: string[]
  ogImage?: { url: string; width?: number; height?: number; alt?: string }
}

export function generatePageMetadata(options: PageMetadataOptions): Metadata {
  const { locale, path, titleEs, titleEn, descriptionEs, descriptionEn, titleUs, descriptionUs, noindex, onlyLocales, ogImage } = options
  const isEn = locale === 'en'
  const isUs = locale === 'us'
  const title = isEn ? titleEn : isUs ? (titleUs ?? titleEs) : titleEs
  const description = isEn ? descriptionEn : isUs ? (descriptionUs ?? descriptionEs) : descriptionEs
  const image = ogImage ?? DEFAULT_OG_IMAGE

  return {
    title,
    description,
    alternates: {
      canonical: localizedUrl(path, locale),
      languages: onlyLocales ? hreflangSolo(path, onlyLocales) : hreflangFor(path),
    },
    openGraph: {
      title,
      description,
      url: localizedUrl(path, locale),
      siteName: '3R Core',
      locale: isEn ? 'en_US' : isUs ? 'es_US' : 'es_PE',
      type: 'website',
      images: [
        {
          url: image.url,
          width: image.width ?? 1200,
          height: image.height ?? 630,
          alt: image.alt ?? title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image.url],
    },
    // noindex pero SÍ follow: estas páginas no compiten en el índice de /en
    // y /us, pero sus enlaces internos deben seguir repartiendo autoridad
    // hacia las tres que sí se venden allí.
    ...(noindex && { robots: { index: false, follow: true } }),
  }
}

export function generateBreadcrumbSchema(items: { name: string; path: string }[], locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": localizedUrl(item.path, locale),
    })),
  }
}
