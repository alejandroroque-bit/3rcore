import { NextRequest, NextResponse } from "next/server"
import { createServerClient } from "@/lib/supabase/server"
import { SEED_POSTS } from "@/lib/blog-seed/posts"

// One-shot token. After running the seed once, this route can be deleted.
const SEED_TOKEN = "seed_2476c302a214b6669b313ff3db6fad9db2aef1e7"

const INDEXNOW_KEY = "20cdaaacbcde738724ae0cf7fc05ebdb"
const HOST = "3rcore.com"
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`
const INDEXNOW_ENDPOINTS = [
  "https://api.indexnow.org/indexnow",
  "https://www.bing.com/indexnow",
  "https://yandex.com/indexnow",
]

async function pingIndexNow(urls: string[]) {
  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  }
  const results = await Promise.all(
    INDEXNOW_ENDPOINTS.map(async (endpoint) => {
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        })
        return { endpoint, status: res.status }
      } catch (e: any) {
        return { endpoint, status: 0, error: String(e?.message ?? e) }
      }
    })
  )
  return results
}

export async function POST(req: NextRequest) {
  const auth = req.headers.get("authorization") || req.headers.get("x-seed-token") || ""
  const token = auth.replace(/^Bearer\s+/i, "")
  if (token !== SEED_TOKEN) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 })
  }

  const supabase = createServerClient()
  const now = new Date().toISOString()
  // 28-ago-2026. Los cuatro artículos del lote anterior entraron con
  // published_at IDÉNTICO al milisegundo (2026-08-28T22:42:54.419Z los cuatro).
  // Eso es la huella de una publicación en lote y contradice la norma de
  // escalonar contenidos. Ahora cada artículo del lote recibe un sello propio,
  // separado media hora del anterior hacia atrás, en el orden del array.
  const stampFor = (i: number) =>
    new Date(new Date(now).getTime() - i * 30 * 60 * 1000).toISOString()
  const inserted: string[] = []
  const skipped: string[] = []
  const errors: { slug: string; error: string }[] = []

  for (let seedIndex = 0; seedIndex < SEED_POSTS.length; seedIndex++) {
    const post = SEED_POSTS[seedIndex]
    // Los posts antiguos no declaran locale: siguen siendo 'es'. Los escritos
    // para EE.UU. lo traen como 'en' y se publican en ese locale, con su
    // canonical apuntando a /en/ y no a /es/.
    const locale = post.locale ?? "es"
    const record = {
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      featured_image: post.featured_image,
      featured_image_alt: post.featured_image_alt,
      status: "published" as const,
      locale,
      meta_title: post.meta_title,
      meta_description: post.meta_description,
      og_title: post.og_title,
      og_description: post.og_description,
      og_image: post.featured_image,
      canonical_url: `https://3rcore.com/${locale}/blogs/${post.slug}`,
      robots: "index, follow",
      focus_keyword: post.focus_keyword,
      author_name: post.author_name,
      published_at: stampFor(seedIndex),
    }

    // Check if slug already exists
    const { data: existing } = await (supabase as any)
      .from("blog_posts")
      .select("id, content, meta_title, meta_description, title")
      .eq("slug", post.slug)
      .eq("locale", locale)
      .maybeSingle()

    if (existing?.id) {
      // Solo actualiza si el seed trae cambios reales. Antes cada re-seed
      // sobreescribía TODOS los posts con published_at = now → decenas de
      // artículos con el mismo timestamp al milisegundo (footprint de
      // publicación en lote y pérdida de la fecha real).
      const unchanged =
        existing.content === record.content &&
        existing.meta_title === record.meta_title &&
        existing.meta_description === record.meta_description &&
        existing.title === record.title
      if (unchanged) {
        skipped.push(`${post.slug} (unchanged)`)
        continue
      }
      // Al corregir el texto de un artículo NO se le cambia la fecha de
      // publicación: republicarlo cada vez que se toca una coma le da a Google
      // una señal de frescura falsa y borra su antigüedad real.
      const { published_at: _ignored, ...updateRecord } = record
      const { error } = await (supabase as any)
        .from("blog_posts")
        .update(updateRecord)
        .eq("id", existing.id)
      if (error) {
        errors.push({ slug: post.slug, error: error.message })
      } else {
        skipped.push(`${post.slug} (updated)`)
      }
    } else {
      const { error } = await (supabase as any).from("blog_posts").insert(record)
      if (error) {
        errors.push({ slug: post.slug, error: error.message })
      } else {
        inserted.push(post.slug)
      }
    }
  }

  // Ping IndexNow SOLO con URLs nuevas o modificadas (antes mandaba las 50+
  // en cada corrida aunque nada hubiera cambiado).
  const changedSlugs = [
    ...inserted,
    ...skipped.filter((s) => s.endsWith("(updated)")).map((s) => s.replace(" (updated)", "")),
  ]
  const localeBySlug = new Map(SEED_POSTS.map((p) => [p.slug, p.locale ?? "es"]))
  const blogUrls = changedSlugs.map(
    (slug) => `https://3rcore.com/${localeBySlug.get(slug) ?? "es"}/blogs/${slug}`
  )
  const indexnowResults = blogUrls.length ? await pingIndexNow(blogUrls) : []

  return NextResponse.json({
    ok: errors.length === 0,
    inserted,
    skipped_or_updated: skipped,
    errors,
    indexnow: indexnowResults,
    total_posts: SEED_POSTS.length,
  })
}

export async function GET() {
  return NextResponse.json({
    info: "Use POST with Authorization: Bearer <seed_token> to seed blogs.",
    posts_count: SEED_POSTS.length,
    slugs: SEED_POSTS.map((p) => p.slug),
  })
}
