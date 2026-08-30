import { NextRequest, NextResponse } from "next/server"
import { createServerClient } from "@/lib/supabase/server"

// 30-ago-2026. Los artículos importados del WordPress antiguo guardan sus
// imágenes con el host NUEVO: https://3rcore.com/wp-content/uploads/...
// Ese prefijo lo bloquea el cortafuegos de Vercel con un 403 (regla contra
// sondeos de WordPress). Comprobado con el reto del WAF ya resuelto:
//   /robots.txt                          → 200
//   /no-existe-esto-12345.png            → 404
//   /wp-content/uploads/.../SEO-PNG.png  → 403  ← regla específica
// Los mismos ficheros SÍ responden 200 en el servidor antiguo, y de hecho el
// srcset de esos mismos <img> ya apunta ahí. Por eso el navegador salva la
// mayoría: 48 artículos traen el src roto, pero solo 9 enseñan el hueco, los
// que no tienen srcset del que tirar.
//
// Esta ruta reescribe el host en el contenido guardado. No inventa rutas:
// mantiene el mismo camino de fichero, que ya está verificado como 200.
const TOKEN = "seed_2476c302a214b6669b313ff3db6fad9db2aef1e7"

const VIEJO = "3rcore.com/wp-content"
const NUEVO = "3rcore-server.com.pe/wp-content"

// Sustituciones literales (nada de expresiones regulares: "3rcore.com" con el
// punto como comodín también casaría con "3rcore-com").
const CAMBIOS: [string, string][] = [
  [`https://${VIEJO}`, `https://${NUEVO}`],
  [`http://${VIEJO}`, `https://${NUEVO}`],
  // La forma codificada que usa el optimizador de imágenes de Next:
  //   /_next/image?url=https%3A%2F%2F3rcore.com%2Fwp-content%2F...
  ["https%3A%2F%2F3rcore.com%2Fwp-content", "https%3A%2F%2F3rcore-server.com.pe%2Fwp-content"],
]

// Cuatro ficheros no existen en NINGÚN servidor: se comprobaron los dos hosts y
// todas las variantes de tamaño y de codificación del carácter «×».
//
// 30-ago-2026. Dos de esos nombres llevan «×» y la base los guarda con el
// carácter LITERAL, no con %C3%97. La primera versión de esta lista solo traía
// la forma codificada —que es la que enseña el navegador— así que no encajaba
// con nada: el simulacro reportó 49 artículos y dejó fuera precisamente el que
// tenía la portada muerta. Van las dos formas.
const MUERTAS = [
  "2023/02/Grupal-3.png",
  "2023/07/Alibaba-Logo-1.png",
  "2023/07/Sin-titulo-1000-%C3%97-600-px.png",
  "2023/04/Sin-titulo-800-%C3%97-480-px.jpg",
  "2023/07/Sin-titulo-1000-\u00d7-600-px.png",
  "2023/04/Sin-titulo-800-\u00d7-480-px.jpg",
]

// Dos de ellas eran la PORTADA de su artículo, así que hace falta uno nuevo.
// Se usan fotos de Unsplash como el resto del blog, comprobadas 200 y que
// ningún otro artículo esté usando ya.
const PORTADAS_NUEVAS: Record<string, { url: string; alt: string }> = {
  "3rcore-una-agencia-de-marketing-digital-de-exito": {
    url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=630&fit=crop&q=80",
    alt: "Equipo de una agencia de marketing digital reunido en torno a una mesa de trabajo",
  },
  "mejores-herramientas-ia-analitica-predictiva": {
    url: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=1200&h=630&fit=crop&q=80",
    alt: "Panel con gráficas de analítica de datos en la pantalla de un portátil",
  },
}

/** Quita el <img> de un fichero que ya no existe, y la <figure> si lo envolvía. */
function quitarImagenMuerta(html: string, ruta: string): string {
  let out = html
  // <figure ...> ... <img ... ruta ... > ... </figure>
  const figura = new RegExp(
    `<figure[^>]*>(?:(?!</figure>)[\\s\\S])*?${ruta.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?:(?!</figure>)[\\s\\S])*?</figure>`,
    "g"
  )
  out = out.replace(figura, "")
  // El <img> suelto, si sobrevivió.
  const img = new RegExp(
    `<img[^>]*${ruta.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}[^>]*>`,
    "g"
  )
  out = out.replace(img, "")
  return out
}

function reparar(texto: string | null): string | null {
  if (!texto) return texto
  let out = texto
  for (const [de, a] of CAMBIOS) out = out.split(de).join(a)
  for (const ruta of MUERTAS) out = quitarImagenMuerta(out, ruta)
  return out
}

async function ejecutar(aplicar: boolean) {
  const supabase = createServerClient()
  const { data, error } = await (supabase as any)
    .from("blog_posts")
    .select("id, slug, content, featured_image, og_image, featured_image_alt")
    .limit(1000)
  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 })
  }

  const cambiados: {
    slug: string
    src_reescritos: number
    imagen_muerta_quitada: boolean
    portada_nueva?: string
  }[] = []
  const errores: { slug: string; error: string }[] = []

  for (const post of data ?? []) {
    const contenido = reparar(post.content)
    let portada = reparar(post.featured_image)
    let og = reparar(post.og_image)
    let alt = post.featured_image_alt
    let portadaNueva: string | undefined

    const nueva = PORTADAS_NUEVAS[post.slug]
    if (nueva && (!portada || MUERTAS.some((m) => (post.featured_image ?? "").includes(m)))) {
      portada = nueva.url
      og = nueva.url
      alt = nueva.alt
      portadaNueva = nueva.url
    }

    const antes = (post.content ?? "").split(`https://${VIEJO}`).length - 1
    const despues = (contenido ?? "").split(`https://${VIEJO}`).length - 1
    const tocado =
      contenido !== post.content ||
      portada !== post.featured_image ||
      og !== post.og_image ||
      alt !== post.featured_image_alt
    if (!tocado) continue

    const quitada = MUERTAS.some(
      (m) => (post.content ?? "").includes(m) && !(contenido ?? "").includes(m)
    )
    cambiados.push({
      slug: post.slug,
      src_reescritos: antes - despues,
      imagen_muerta_quitada: quitada,
      ...(portadaNueva ? { portada_nueva: portadaNueva } : {}),
    })

    if (aplicar) {
      const { error: e } = await (supabase as any)
        .from("blog_posts")
        .update({
          content: contenido,
          featured_image: portada,
          og_image: og,
          featured_image_alt: alt,
        })
        .eq("id", post.id)
      if (e) errores.push({ slug: post.slug, error: e.message })
    }
  }

  // El contador tiene que quedar en cero: si no baja, la sustitución no encajó.
  const restantes = (data ?? []).reduce(
    (n: number, p: any) => n + ((reparar(p.content) ?? "").split(`https://${VIEJO}`).length - 1),
    0
  )

  return NextResponse.json({
    ok: errores.length === 0,
    modo: aplicar ? "aplicado" : "simulacro",
    articulos_tocados: cambiados.length,
    src_reescritos: cambiados.reduce((n, c) => n + c.src_reescritos, 0),
    referencias_que_quedarian: restantes,
    detalle: cambiados,
    errores,
  })
}

export async function GET() {
  return ejecutar(false)
}

export async function POST(req: NextRequest) {
  const auth = req.headers.get("authorization") || req.headers.get("x-seed-token") || ""
  if (auth.replace(/^Bearer\s+/i, "") !== TOKEN) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 })
  }
  return ejecutar(true)
}
