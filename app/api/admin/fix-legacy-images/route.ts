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

// ---------------------------------------------------------------------------
// Texto alternativo
//
// 30-ago-2026. 43 imágenes del cuerpo de 13 artículos importados de WordPress
// se guardaron con alt="". No las describe nadie: ni el lector con lector de
// pantalla, ni Google Imágenes, ni un modelo que cite el artículo.
//
// El atributo `title` que dejó WordPress NO sirve como alt: en la mitad de los
// casos es el nombre del fichero ("descarga (2)", "images", "a (1)") y en dos
// casos MIENTE — la imagen titulada "Gráfico de velocidad de carga" es un
// cohete despegando de un portátil, y una titulada "Habilidades de un social
// media manager" es en realidad una pizarra con la matriz DAFO.
//
// Por eso cada una se miró antes de escribir su texto. Se describe lo que se ve.
// ---------------------------------------------------------------------------
const ALT: Record<string, Record<string, string>> = {
  "10-mejores-productos-para-vender-a-tu-negocio": {
    "amazon_a_black_noto_email_v2016_us-main._CB624175556_.png": "Logo de Amazon",
    "logo_ebay_principal.jpg": "Logo de eBay",
    "eci-triangulo-logo.png": "Logo de El Corte Inglés",
    "images.png": "Logo de Fnac",
    "descarga-2.png": "Logo de Privalia",
    "mercadolibre-og.png": "Logo de Mercado Libre",
    "descarga-3.png": "Logo de Etsy",
    "walmart-marketplace-feature-1.jpg": "Logo de Walmart Marketplace",
    "descarga-4.png": "Logo de Shopify",
  },
  "temas-importantes-para-abordar-con-cliente": {
    "image-2.png": "Ilustración de una persona lanzando un dardo a una diana, sobre la definición de objetivos con el cliente",
    "image-3.png": "Lupa que selecciona a un grupo de personas entre varios grupos, sobre la definición del público objetivo",
    "image-4.png": "Ilustración de una persona revisando un panel de informes y gráficas en su ordenador",
    "image-5.png": "Ilustración de iconos de herramientas, calculadora y billetes unidos por líneas, sobre el presupuesto del proyecto",
    "image-6.png": "Ilustración del recorrido de una campaña de marketing digital, con megáfono, diana y dispositivos",
    "image-7-1024x361.png": "Ilustración de un panel de control con métricas en la pantalla de un ordenador",
    "image-8.png": "Diagrama circular de un plan de contingencia: análisis de riesgos, estrategias de recuperación, desarrollo de estrategias, desarrollo de procedimientos, pruebas y entrenamiento, y plan de mantenimiento",
    "image-9.png": "Ilustración de varias cabezas de perfil rodeadas de iconos de ideas y de comunicación",
  },
  "seo-y-sem-importancia": {
    "SEO-PNG.png": "Lupa que amplía la palabra SEO sobre la pantalla de un ordenador con gráficas",
    "GoogleMyBusiness1.png": "Ficha de 3R Core en Google Business Profile, con su dirección en La Molina y su horario",
    "GoogleMyBusiness2.png": "Sección de productos, categorías y preguntas de la ficha de 3R Core en Google Business Profile",
    "Blog3RCoreAgenciaDeMarketing.png": "Página del blog de 3R Core con sus artículos publicados",
    "Resultado3RCORE.png": "Resultado de 3R Core en la búsqueda de Google, con su título y su descripción",
    "DirectorioAgenciaDeMarketing.png": "Ficha de 3R Core en el directorio de empresas Cylex",
    "Backlinks3R.png": "Gráfico del crecimiento del comercio electrónico en Perú, con datos de la Cámara Peruana de Comercio Electrónico",
  },
  "tendencias-en-diseno-de-paginas-web-para-2024": {
    "Imagen-de-un-sitio-web-responsivo-en-diferentes-dispositivos.png": "Un mismo sitio web mostrado en portátil, tableta y móvil, con el diseño adaptado a cada pantalla",
    "Grafico-de-velocidad-de-carga-de-una-pagina-web.png": "Ilustración de un cohete despegando desde un portátil, sobre la velocidad de carga de una página web",
    "Ejemplo-de-un-formulario.png": "Formulario de contacto de una web, con los campos de datos junto a un mapa de ubicación",
  },
  "la-importancia-de-un-manual-de-marca-para-tu-negocio": {
    "Imagen-de-la-paleta-de-colores.jpg": "Manos revisando muestras de color sobre una mesa para elegir la paleta de una marca",
    "Imagen-de-disenadora.jpg": "Diseñadora trabajando en el logotipo de una marca en la pantalla de su ordenador",
    "Imagen-de-elementos-graficos.jpg": "Ilustración de los elementos gráficos de una marca: tipografía, formas, iconos y color",
  },
  "metricool": {
    "2.-Definicion-Metricool_SUB.webp": "Portada de la sección «¿Qué es Metricool?», con la web de la herramienta abierta en un portátil",
    "3.-Planes-Metricool_SUB.webp": "Portada de la sección «¿Qué planes ofrece Metricool?», con la página de precios de la herramienta",
    "4.-Herramienta-Metricool_SUB.webp": "Portada de la sección «Metricool como herramienta digital», con métricas de redes sociales en pantalla",
  },
  "como-crear-un-brochure-impactante-para-tu-empresa": {
    "Imagenes-de-reuniones-de-trabajo-o-sesiones-de-brainstorming-en-una-agencia-de-marketing.jpg": "Tres personas de una agencia de marketing trabajando juntas alrededor de un portátil",
    "imagen-del-proceso-de-creacion-de-un-brochure.jpg": "Persona diseñando un brochure en un programa de edición gráfica en su portátil",
  },
  "estrategias-efectivas-para-la-gestion-de-redes-sociales": {
    "Captura-de-pantalla-de-Hootsuite-en-uso.png": "Calendario de publicaciones programadas en una herramienta de gestión de redes sociales",
    "Imagen-de-una-estrategia-de-contenido-visual.jpg": "Equipo revisando una parrilla de contenido visual en una pantalla",
  },
  "mejores-campanas-marketing-digital-ejemplos-2023": {
    "image.png": "Tuit de Oreo durante el apagón de la Super Bowl de 2013, con el mensaje «You can still dunk in the dark»",
    "image-1.png": "Grupo de personas volcándose cubos de agua helada sobre la cabeza en el Ice Bucket Challenge de la ELA",
  },
  "perfil-de-social-manager-para-agencia-de-marketing": {
    "4.jpg": "Portada de la sección «¿Qué es un social media manager?», con un equipo reunido en una oficina",
    "a-1.jpg": "Portada de la sección «Habilidades de un social media manager», con un diagrama de competencias",
  },
  "como-hacer-un-analisis-dafo-para-tu-negocio": {
    "a-2.jpg": "Pizarra con la matriz DAFO en inglés: fortalezas, debilidades, oportunidades y amenazas",
  },
  "ventas-tienda-online": {
    "Ecommerce-SEO.jpg": "Ilustración de una tienda online con carrito de compra, gráficas y dispositivos",
  },
}

/** Rellena el alt de las imágenes que lo tienen vacío. No toca las que ya lo traen. */
function ponerAlt(html: string, slug: string): { html: string; puestos: number } {
  const mapa = ALT[slug]
  if (!mapa) return { html, puestos: 0 }
  let puestos = 0
  const out = html.replace(/<img\b[^>]*>/g, (tag) => {
    const src = /src="([^"]*)"/.exec(tag)
    if (!src) return tag
    const fichero = decodeURIComponent(src[1].split("?")[0].split("/").pop() || "")
    const texto = mapa[fichero]
    if (!texto) return tag
    const yaTiene = /alt="[^"]+"/.test(tag)
    if (yaTiene) return tag
    puestos++
    return /alt=""/.test(tag)
      ? tag.replace('alt=""', `alt="${texto}"`)
      : tag.replace(/<img\b/, `<img alt="${texto}"`)
  })
  return { html: out, puestos }
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
    alt_rellenados: number
    imagen_muerta_quitada: boolean
    portada_nueva?: string
  }[] = []
  const errores: { slug: string; error: string }[] = []

  for (const post of data ?? []) {
    const reparado = reparar(post.content)
    const conAlt = ponerAlt(reparado ?? "", post.slug)
    const contenido = post.content === null ? null : conAlt.html
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
      alt_rellenados: conAlt.puestos,
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
    alt_rellenados: cambiados.reduce((n, c) => n + c.alt_rellenados, 0),
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
