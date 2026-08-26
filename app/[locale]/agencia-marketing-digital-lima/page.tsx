import Link from "next/link"

interface Props { params: Promise<{ locale: string }> }

/**
 * Página madre del negocio: «agencia de marketing digital en Lima».
 *
 * Historia: existía, se consolidó el 15-jul-2026 con un 301 hacia /servicios y
 * el 25-ago el análisis con Search Console mostró el precio de esa decisión —
 * la búsqueda que DEFINE el negocio, «agencia de marketing digital lima»,
 * aparecía 179 veces al trimestre en posición 68,7 (séptima página) sin recibir
 * un solo clic, y la página que heredaba todo eso era un índice de 395 palabras
 * que Google no rastreaba desde el 23-jul.
 *
 * Reparto de papeles para que las dos páginas NO compitan entre sí, que era el
 * motivo legítimo de la consolidación:
 *   · /es/servicios → CATÁLOGO. Qué es cada servicio y cuánto cuesta.
 *   · esta página   → AGENCIA EN LIMA. Por qué contratar a 3R Core, cómo se
 *                     trabaja, a qué zonas y sectores se atiende, qué preguntan
 *                     antes de firmar. Ni una tabla de precios: enlaza a la del
 *                     catálogo.
 *
 * Reversible: basta devolver la entrada 301 a next.config.ts.
 */

import { COPY } from './copy'
import { setRequestLocale } from "next-intl/server"

export default async function LimaLandingPage({ params }: Props) {
  const { locale } = await params
  // Renderizado estático: sin esto next-intl marca la ruta como dinámica y
  // Vercel devuelve `no-store` en cada visita.
  setRequestLocale(locale);

  const t = locale === 'en' ? COPY.en : COPY.es

  const link = (href: string) => `/${locale}${href}`

  return (
    <main className="text-white">
      <section className="px-6 md:px-10 lg:px-20 pt-32 pb-16 max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-4">{t.eyebrow}</p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">{t.hero}</h1>
        <p className="local-intro text-lg md:text-xl text-white/80 max-w-3xl mb-8">{t.sub}</p>
        <div className="text-sm text-white/60 mb-9 space-y-1">
          <p>{t.addr}</p>
          <p>
            <a href={`tel:${t.phone.replace(/\s/g, '')}`} className="hover:text-white transition">{t.phone}</a>
            <span aria-hidden="true"> · </span>
            <a href={`mailto:${t.email}`} className="hover:text-white transition">{t.email}</a>
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href={link(t.ctaHref)} className="inline-block bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition">{t.cta}</Link>
          <Link href={link(t.ctaSecondaryHref)} className="inline-block border border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition">{t.ctaSecondary}</Link>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-20 py-16 max-w-6xl mx-auto border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.whyH2}</h2>
        <div className="space-y-5 max-w-3xl text-white/70 leading-relaxed">
          <p>{t.whyP1}</p>
          <p>{t.whyP2}</p>
          <p>{t.whyP3}</p>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-20 py-16 max-w-6xl mx-auto border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.servicesH2}</h2>
        <p className="text-white/60 max-w-3xl mb-10">{t.servicesP}</p>
        <ul className="grid md:grid-cols-2 gap-4">
          {t.services.map((s) => (
            <li key={s.href}>
              <Link href={link(s.href)} className="block border border-white/10 rounded-2xl p-6 hover:border-white/30 hover:bg-white/5 transition h-full">
                <h3 className="text-xl font-semibold mb-2">{s.name}</h3>
                <p className="text-white/70">{s.desc}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="px-6 md:px-10 lg:px-20 py-16 max-w-6xl mx-auto border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">{t.processH2}</h2>
        <ol className="grid md:grid-cols-2 gap-6">
          {t.process.map((p, i) => (
            <li key={p.t} className="border border-white/10 rounded-2xl p-6">
              <span className="text-[#E91E63] font-bold text-sm">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="text-xl font-semibold mt-2 mb-2">{p.t}</h3>
              <p className="text-white/70 leading-relaxed">{p.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="px-6 md:px-10 lg:px-20 py-16 max-w-6xl mx-auto border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.zonesH2}</h2>
        <p className="text-white/70 max-w-3xl mb-8 leading-relaxed">{t.zonesP}</p>
        <p className="text-white/60 max-w-3xl mb-6">{t.sectorsP}</p>
        <ul className="grid md:grid-cols-3 gap-4">
          {t.sectors.map((s) => (
            <li key={s.href}>
              <Link href={link(s.href)} className="block border border-white/10 rounded-2xl p-6 hover:border-white/30 hover:bg-white/5 transition h-full">
                <h3 className="text-lg font-semibold mb-2">{s.name}</h3>
                <p className="text-white/60 text-sm">{s.desc}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="px-6 md:px-10 lg:px-20 py-16 max-w-6xl mx-auto border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">{t.faqH2}</h2>
        <div className="space-y-6 max-w-3xl">
          {t.faq.map((f) => (
            <div key={f.q}>
              <h3 className="faq-question text-lg md:text-xl font-semibold mb-2">{f.q}</h3>
              <p className="faq-answer text-white/70 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-20 py-20 max-w-6xl mx-auto border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-bold mb-5">{t.closeH2}</h2>
        <p className="text-white/70 max-w-2xl mb-8 leading-relaxed">{t.closeP}</p>
        <Link href={link(t.ctaHref)} className="inline-block bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition mb-12">{t.cta}</Link>
        <h3 className="text-base font-semibold mb-4 text-white/90">{t.moreH3}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.more.map((m) => (
            <Link key={m.name} href={link(m.href)} className="block rounded-[14px] border border-white/10 p-4 hover:border-white/30 transition-colors">
              <span className="block text-white font-semibold text-sm mb-1">{m.name}</span>
              <span className="block text-white/45 text-xs leading-relaxed">{m.desc}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
