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
  ogImage?: { url: string; width?: number; height?: number; alt?: string }
}

export function generatePageMetadata(options: PageMetadataOptions): Metadata {
  const { locale, path, titleEs, titleEn, descriptionEs, descriptionEn, titleUs, descriptionUs, noindex, ogImage } = options
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
      languages: hreflangFor(path),
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
    ...(noindex && { robots: { index: false, follow: false } }),
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
