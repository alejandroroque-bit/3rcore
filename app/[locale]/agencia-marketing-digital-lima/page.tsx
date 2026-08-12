import Link from "next/link"

interface Props { params: Promise<{ locale: string }> }

const COPY = {
  es: {
    hero: 'Agencia de Marketing Digital en Lima, Perú',
    sub: 'Branding, manejo de redes sociales, Google Ads, posicionamiento SEO y desarrollo web para empresas en Perú y Estados Unidos.',
    addr: '📍 Alameda de la Paz 187, primer piso, La Molina, Lima 15024',
    phone: '📞 +51 986 889 147',
    email: '✉️ info@3rcore.com',
    cta: 'Solicita tu cotización',
    contactPath: '/#contacto',
    why: 'Tres generaciones de experiencia, visión y tecnología',
    whyDesc: '3R Core combina Experiencia, Visión y Tecnología para crear estrategias de marketing digital personalizadas. Trabajamos como una agencia integral, no como servicios sueltos.',
    services: 'Servicios que ofrecemos desde Lima',
    serviceList: [
      { name: 'Branding e Identidad de Marca', desc: 'Logotipo, manual de marca, paleta cromática, tipografía y aplicaciones desde S/500.', href: '/agencia-branding-lima' },
      { name: 'Manejo de Redes Sociales', desc: 'Estrategia, diseño, Reels y TikToks, copywriting y community management desde S/1,500/mes.', href: '/agencia-redes-sociales-lima' },
      { name: 'Google Ads y SEM', desc: 'Search, Performance Max, YouTube, Display, Shopping y Remarketing con fee desde S/1,800/mes.', href: '/agencia-google-ads-lima' },
      { name: 'Posicionamiento SEO', desc: 'Keyword research, on-page, contenidos, link building y SEO técnico desde S/1,800/mes.', href: '/agencia-seo-lima' },
      { name: 'Diseño y Desarrollo Web', desc: 'Landing pages, sitios corporativos y e-commerce en Shopify, WooCommerce o Next.js a medida.', href: '/diseno-web-lima' },
    ],
    coverage: 'Cobertura',
    coverageDesc: 'Nuestra oficina está en La Molina, Lima. Atendemos clientes en Perú y Estados Unidos en español y en inglés.',
    contactCta: 'Trabaja con una agencia de marketing digital en Lima que combina diseño, tecnología y estrategia. Cuéntanos tu objetivo y armamos una cotización personalizada.',
    contact: 'Hablemos de tu marca',
  },
  en: {
    hero: 'Digital Marketing Agency in Lima, Peru',
    sub: 'Branding, social media management, Google Ads, SEO positioning and web development for businesses in Peru and the United States.',
    addr: '📍 Alameda de la Paz 187, primer piso, La Molina, Lima 15024',
    phone: '📞 +51 986 889 147',
    email: '✉️ info@3rcore.com',
    cta: 'Request a proposal',
    contactPath: '/#contacto',
    why: 'Three generations of experience, vision and technology',
    whyDesc: '3R Core combines Experience, Vision and Technology to build personalized digital marketing strategies. We work as an end-to-end agency, not as isolated services.',
    services: 'Services we offer from Lima',
    serviceList: [
      { name: 'Branding & Visual Identity', desc: 'Logo, brand manual, color palette, typography and applications from $500 USD for US clients.', href: '/agencia-branding-lima' },
      { name: 'Social Media Management', desc: 'Strategy, design, Reels and TikToks, copywriting and community management from $800/mo for US clients.', href: '/agencia-redes-sociales-lima' },
      { name: 'Google Ads & SEM', desc: 'Search, Performance Max, YouTube, Display, Shopping and Remarketing with fee from $800/mo for US clients.', href: '/agencia-google-ads-lima' },
      { name: 'SEO Positioning', desc: 'Keyword research, on-page, content, link building and technical SEO from $500/mo for US clients.', href: '/agencia-seo-lima' },
      { name: 'Web Design & Development', desc: 'Landing pages, corporate sites and e-commerce on Shopify, WooCommerce or custom Next.js.', href: '/diseno-web-lima' },
    ],
    coverage: 'Coverage',
    coverageDesc: 'Our office is in La Molina, Lima. We work with clients across Peru and the United States, in Spanish and English.',
    contactCta: 'Work with a digital marketing agency in Lima that combines design, technology and strategy. Tell us your goal and we build a custom proposal.',
    contact: 'Let’s talk about your brand',
  }
}

export default async function AgenciaLimaPage({ params }: Props) {
  const { locale } = await params
  const t = (COPY as any)[locale === 'en' ? 'en' : 'es']

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="px-6 md:px-10 lg:px-20 pt-32 pb-20 max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-4">3R Core · Lima · Perú</p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">{t.hero}</h1>
        <p className="local-intro text-lg md:text-xl text-white/80 max-w-3xl mb-6">{t.sub}</p>
        <div className="text-sm text-white/60 mb-8 space-y-1">
          <p>{t.addr}</p>
          <p>{t.phone}</p>
          <p>{t.email}</p>
        </div>
        <Link href={`/${locale}${t.contactPath}`} className="inline-block bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition">{t.cta}</Link>
      </section>

      <section className="px-6 md:px-10 lg:px-20 py-16 max-w-6xl mx-auto border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.why}</h2>
        <p className="text-white/70 max-w-3xl">{t.whyDesc}</p>
      </section>

      <section className="px-6 md:px-10 lg:px-20 py-16 max-w-6xl mx-auto border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">{t.services}</h2>
        <ul className="grid md:grid-cols-2 gap-4">
          {t.serviceList.map((s: any, i: number) => (
            <li key={i}>
              <Link href={`/${locale}${s.href}`} className="block border border-white/10 rounded-2xl p-6 hover:border-white/30 hover:bg-white/5 transition">
                <h3 className="text-xl font-semibold mb-2">{s.name}</h3>
                <p className="text-white/70">{s.desc}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="px-6 md:px-10 lg:px-20 py-16 max-w-6xl mx-auto border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.coverage}</h2>
        <p className="text-white/70 max-w-3xl">{t.coverageDesc}</p>
      </section>

      <section className="px-6 md:px-10 lg:px-20 py-20 max-w-6xl mx-auto border-t border-white/10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.contact}</h2>
        <p className="text-white/70 max-w-2xl mx-auto mb-8">{t.contactCta}</p>
        <Link href={`/${locale}${t.contactPath}`} className="inline-block bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition">{t.cta}</Link>
      </section>
    </main>
  )
}
