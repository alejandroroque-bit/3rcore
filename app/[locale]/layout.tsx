import { poppins } from "@/lib/fonts"
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import CookieBanner from "@/components/layout/CookieBanners";
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { getMessages } from "next-intl/server";
import ParticlesBackground from "@/components/ui/AnimatedBackground";
import WhatsAppBtn from "@/components/ui/WhatsAppBtn";
import { TEL_MAIN } from "@/lib/contact";
import { localizedUrl } from "@/lib/metadata";
import ReactLenis from "lenis/react";
import Script from "next/script";


const lenisOptions = {
  lerp: 0.1,
  duration: 1.5,
  smoothWheel: true,
  wheelMultiplier: 0.5,
  touchMultiplier: 2,
  infinite: false,
}

const BASE_URL = 'https://3rcore.com'

// Un solo sitio, tres audiencias distintas:
//   /es → Perú (es-PE): soles, RUC, Yape/Plin.
//   /en → marcas de EE.UU. que compran producción nearshore en inglés.
//   /us → negocio hispano en EE.UU. (es-US): español, USD, sin referencias peruanas.
// El bloque hreflang es idéntico en las tres para que Google resuelva el cluster.
export const HREFLANG = (path = '') => ({
  'es': `${BASE_URL}/es${path}`,
  'es-PE': `${BASE_URL}/es${path}`,
  'es-US': `${BASE_URL}/us${path}`,
  'en': `${BASE_URL}/en${path}`,
  'en-US': `${BASE_URL}/en${path}`,
  // x-default pasa de /es a /en: el visitante sin idioma resuelto es, por
  // volumen, internacional (USA = 400 sesiones/89 d sin trabajar el mercado).
  'x-default': `${BASE_URL}/en${path}`,
})

export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  const { locale } = await params;

  const title = locale === 'en'
    ? "Peru-Based Marketing Agency for U.S. Brands | 3R Core"
    : locale === 'us'
      ? "Agencia de Marketing Digital para Negocios Hispanos en EE.UU. | 3R Core"
      : "Agencia de Tiendas Virtuales, SEO y Google Ads en Lima, Perú | 3R Core"

  const description = locale === 'en'
    ? "Peruvian agency with a U.S. subsidiary: websites, SEO and online stores for U.S. brands, built remotely from Lima on U.S. hours and invoiced in USD."
    : locale === 'us'
      ? "Agencia de marketing digital en español para negocios hispanos en Estados Unidos. Video UGC, campañas de Google Ads y Meta, SEO en español y tiendas online. Precios en dólares, atención en tu horario y reportes mensuales."
      : "Agencia de tiendas virtuales, posicionamiento SEO y Google Ads (SEM) en Lima, Perú. Creamos tu tienda online (Shopify, WooCommerce, Tiendanube), te posicionamos en Google y gestionamos campañas que venden. ROI medible y reportes mensuales."

  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: HREFLANG(),
    },
    openGraph: {
      title: locale === 'en'
        ? "3R Core | Websites, SEO and Online Stores for U.S. Brands"
        : locale === 'us'
          ? "3R Core | Marketing Digital en Español para EE.UU."
          : "3R Core | Agencia de Marketing Digital en Lima",
      description: locale === 'en'
        ? "Websites, SEO and online stores for U.S. brands, built by our team in Lima through our U.S. subsidiary. U.S. hours, fixed scopes in USD."
        : locale === 'us'
          ? "Marketing digital en español para negocios hispanos en Estados Unidos: video UGC, Google Ads, Meta Ads, SEO y tiendas online. Precios en dólares."
          : "Agencia de marketing digital en Lima, Perú. Diseño web, manejo de redes sociales, Google Ads, posicionamiento SEO y branding con ROI medible.",
      url: `${BASE_URL}/${locale}`,
      siteName: "3R Core",
      locale: locale === 'en' ? 'en_US' : locale === 'us' ? 'es_US' : 'es_PE',
      type: 'website',
      images: [
        {
          url: `${BASE_URL}/og/default.jpg`,
          width: 1200,
          height: 630,
          alt: locale === 'en'
            ? '3R Core - Websites, SEO and Online Stores'
            : '3R Core - Agencia de Marketing Digital',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: locale === 'en'
        ? "3R Core - Websites, SEO and Online Stores"
        : "3R Core - Agencia de Marketing Digital",
      description: locale === 'en'
        ? "Websites, SEO and online stores for U.S. brands — Peruvian team, U.S. subsidiary, fixed scopes in USD."
        : "Combinamos Experiencia, Visión y Tecnología en estrategias de marketing digital.",
      images: [`${BASE_URL}/og/default.jpg`],
    },
    metadataBase: new URL(BASE_URL),
  }
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: any
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness", "MarketingAgency"],
    "@id": `${BASE_URL}/#organization`,
    "name": "3R Core - Agencia de Marketing Digital",
    "alternateName": ["3R Core Marketing Agency", "3R Core Agencia de Marketing", "3RCore"],
    "legalName": "3R Core Agencia de Marketing",
    "url": BASE_URL,
    "logo": {
      "@type": "ImageObject",
      "url": `${BASE_URL}/icons/LogoFull.webp`,
      "width": 600,
      "height": 300
    },
    "image": [
      `${BASE_URL}/icons/LogoFull.webp`,
      `${BASE_URL}/og/default.jpg`,
      `${BASE_URL}/og/branding.jpg`,
      `${BASE_URL}/og/web-development.jpg`,
      `${BASE_URL}/og/socialmedia.jpg`,
      `${BASE_URL}/og/google-ads.jpg`,
      `${BASE_URL}/og/agencia-seo-lima.jpg`
    ],
    "description": locale === 'en'
      ? "Digital marketing agency in Lima, Peru. We combine Experience, Vision, and Technology into strategies: Branding, Social Media, SEO, Google Ads & Web Development."
      : "Agencia de marketing digital en Lima, Perú. Combinamos Experiencia, Visión y Tecnología en estrategias: Branding, Social Media, SEO, Google Ads y Desarrollo Web.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Alameda de la Paz 187, primer piso",
      "addressLocality": "La Molina",
      "addressRegion": "Lima",
      "postalCode": "15024",
      "addressCountry": "PE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -12.0913,
      "longitude": -76.9494
    },
    "telephone": TEL_MAIN,
    "email": "info@3rcore.com",
    "identifier": {
      "@type": "PropertyValue",
      "propertyID": "RUC",
      "name": "RUC",
      "value": "20609008217"
    },
    "taxID": "20609008217",
    "vatID": "20609008217",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "telephone": TEL_MAIN,
        "email": "info@3rcore.com",
        "availableLanguage": ["Spanish", "English"],
        "areaServed": ["PE", "US"]
      },
      {
        "@type": "ContactPoint",
        "contactType": "sales",
        "telephone": TEL_MAIN,
        "email": "info@3rcore.com",
        "availableLanguage": ["Spanish", "English"],
        "areaServed": ["PE", "US"]
      }
    ],
    "sameAs": [
      "https://www.facebook.com/3Rcore/",
      "https://www.instagram.com/3rcore_/",
      "https://www.linkedin.com/company/3r-core/",
      "https://www.tiktok.com/@3rcore",
      "https://pe.linkedin.com/company/3r-core"
    ],
    "areaServed": [
      { "@type": "Country", "name": "Peru" },
      { "@type": "Country", "name": "United States" },
      { "@type": "City", "name": "Lima" },
      { "@type": "AdministrativeArea", "name": "Lima Metropolitana" }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": -12.0913,
        "longitude": -76.9494
      },
      "geoRadius": 50000
    },
    "priceRange": "$$",
    "currenciesAccepted": "PEN, USD",
    "paymentAccepted": "Cash, Credit Card, Debit Card, Bank Transfer, Yape, Plin, BCP, Interbank, BBVA, Scotiabank",
    "slogan": locale === 'en'
      ? "Experience, Vision & Technology"
      : "Experiencia, Visión y Tecnología",
    "knowsAbout": [
      "Branding",
      "Corporate Branding",
      "Brand Identity Design",
      "Logo Design",
      "Visual Identity",
      "Social Media Marketing",
      "Social Media Management",
      "Community Management",
      "Content Marketing",
      "Content Strategy",
      "Editorial Calendar",
      "Search Engine Optimization",
      "Local SEO",
      "Technical SEO",
      "Link Building",
      "Google Ads",
      "Search Engine Marketing",
      "Performance Marketing",
      "Pay-per-click Advertising",
      "Meta Ads",
      "Facebook Ads",
      "Instagram Ads",
      "TikTok Ads",
      "TikTok Advertising",
      "Email Marketing",
      "Email Marketing Automation",
      "Healthcare Marketing",
      "Marketing for Clinics",
      "Dental Marketing",
      "Real Estate Marketing",
      "Marketing for Real Estate",
      "E-commerce Marketing",
      "Web Development",
      "Web Design",
      "UX/UI Design",
      "E-commerce",
      "Shopify",
      "WooCommerce",
      "Next.js Development",
      "WordPress Development",
      "Landing Page Design",
      "Conversion Rate Optimization",
      "Marketing Automation",
      "Digital Marketing",
      "Inbound Marketing",
      "Brand Strategy",
      "Startup Marketing",
      "Tech Innovation"
    ],
    "founder": [
      {
        "@type": "Person",
        "name": "Alejandro Roque",
        "jobTitle": locale === 'en' ? "CEO" : "CEO / Director General",
        "worksFor": { "@id": `${BASE_URL}/#organization` }
      },
      {
        "@type": "Person",
        "name": "Piero Roque",
        "jobTitle": locale === 'en' ? "SEO / Ads Director" : "Director SEO / Ads",
        "worksFor": { "@id": `${BASE_URL}/#organization` }
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": locale === 'en' ? "Digital Marketing Services" : "Servicios de Marketing Digital",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": locale === 'en' ? "Corporate Branding" : "Branding Corporativo",
            "url": localizedUrl('/servicios/branding', locale),
            "serviceType": "Branding / Visual Identity"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": locale === 'en' ? "Social Media Management" : "Gestión de Redes Sociales",
            "url": localizedUrl('/servicios/socialmedia', locale),
            "serviceType": "Social Media Management"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": locale === 'en' ? "Google Ads / SEM" : "Google Ads / SEM",
            "url": localizedUrl('/servicios/google-ads', locale),
            "serviceType": "Google Ads / SEM"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": locale === 'en' ? "Web Development & E-commerce" : "Desarrollo Web y E-commerce",
            "url": localizedUrl('/servicios/web-development', locale),
            "serviceType": "Web Development / E-commerce"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": locale === 'en' ? "SEO Positioning" : "Posicionamiento SEO",
            "url": localizedUrl('/posicionamiento-seo', locale),
            "serviceType": "SEO / Search Engine Optimization"
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": locale === 'en' ? 500 : 1800,
            "priceCurrency": locale === 'en' ? "USD" : "PEN",
            "valueAddedTaxIncluded": false
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": locale === 'en' ? "Meta Ads (Facebook & Instagram)" : "Meta Ads (Facebook e Instagram)",
            "url": localizedUrl('/servicios/meta-ads', locale),
            "serviceType": "Meta Ads / Facebook & Instagram Advertising"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "TikTok Ads",
            "url": localizedUrl('/servicios/tiktok-ads', locale),
            "serviceType": "TikTok Advertising"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Performance Marketing",
            "url": localizedUrl('/servicios/performance-marketing', locale),
            "serviceType": "Performance Marketing / ROI-ROAS"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Email Marketing",
            "url": localizedUrl('/servicios/email-marketing', locale),
            "serviceType": "Email Marketing / Automation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": locale === 'en' ? "Marketing for Clinics" : "Marketing para Clínicas",
            "url": localizedUrl('/servicios/marketing-clinicas', locale),
            "serviceType": "Healthcare Marketing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": locale === 'en' ? "Marketing for Real Estate" : "Marketing para Inmobiliarias",
            "url": localizedUrl('/servicios/marketing-inmobiliarias', locale),
            "serviceType": "Real Estate Marketing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": locale === 'en' ? "Marketing for E-commerce" : "Marketing para E-commerce",
            "url": localizedUrl('/servicios/marketing-ecommerce', locale),
            "serviceType": "E-commerce Marketing"
          }
        }
      ]
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    "name": "3R Core",
    "alternateName": "3R Core - Agencia de Marketing Digital",
    "url": BASE_URL,
    "publisher": { "@id": `${BASE_URL}/#organization` },
    "inLanguage": ["es", "en"],
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${BASE_URL}/${locale}/blogs?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  }

  const navItems = locale === 'en'
    ? [
        { name: "Home", url: `${BASE_URL}/en` },
        { name: "About Us", url: localizedUrl('/nosotros', 'en') },
        { name: "Services", url: localizedUrl('/servicios', 'en') },
        { name: "Web Design & Development", url: localizedUrl('/servicios/web-development', 'en') },
        { name: "Social Media Management", url: localizedUrl('/servicios/socialmedia', 'en') },
        { name: "Corporate Branding", url: localizedUrl('/servicios/branding', 'en') },
        { name: "Google Ads", url: localizedUrl('/servicios/google-ads', 'en') },
        { name: "SEO Positioning", url: localizedUrl('/posicionamiento-seo', 'en') },
        { name: "UGC Content Production", url: localizedUrl('/servicios/ugc', 'en') },
        { name: "Influencer Marketing", url: localizedUrl('/servicios/influencer-marketing', 'en') },
        { name: "Public Relations", url: localizedUrl('/servicios/relaciones-publicas', 'en') },
        { name: "Blog", url: `${BASE_URL}/en/blogs` },
        { name: "FAQ", url: localizedUrl('/preguntas', 'en') },
      ]
    : [
        // Vale para /es y /us: el prefijo sale del locale, no está fijado a "es".
        { name: "Inicio", url: `${BASE_URL}/${locale}` },
        { name: "Nosotros", url: localizedUrl('/nosotros', locale) },
        { name: "Servicios", url: localizedUrl('/servicios', locale) },
        { name: "Diseño y Desarrollo Web", url: localizedUrl('/servicios/web-development', locale) },
        { name: "Manejo de Redes Sociales", url: localizedUrl('/servicios/socialmedia', locale) },
        { name: "Branding Corporativo", url: localizedUrl('/servicios/branding', locale) },
        { name: "Google Ads", url: localizedUrl('/servicios/google-ads', locale) },
        { name: "Posicionamiento SEO", url: localizedUrl('/posicionamiento-seo', locale) },
        { name: "Contenido UGC", url: localizedUrl('/servicios/ugc', locale) },
        { name: "Influencer Marketing", url: localizedUrl('/servicios/influencer-marketing', locale) },
        { name: "Relaciones Públicas", url: localizedUrl('/servicios/relaciones-publicas', locale) },
        { name: "Blog", url: `${BASE_URL}/${locale}/blogs` },
        { name: "Preguntas Frecuentes", url: localizedUrl('/preguntas', locale) },
      ]

  const siteNavigationSchema = navItems.map((item) => ({
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "name": item.name,
    "url": item.url,
  }))

  return (
    <html lang={locale === 'us' ? 'es-US' : locale === 'es' ? 'es-PE' : 'en-US'}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationSchema, websiteSchema, ...siteNavigationSchema]) }}
        />
      </head>
      <ReactLenis root options={lenisOptions}>
        <body className={`${poppins.className} text-white`} suppressHydrationWarning={true}>
          <div className="noise-overlay" />
          <ParticlesBackground />
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Navbar />
            <main className="flex flex-col relative z-10">
              <div className="noise-global" />
              {children}
            </main>
            <Footer />
            <CookieBanner />
            {/* Botón flotante de WhatsApp GLOBAL (con medición whatsapp_click).
                Se monta una sola vez aquí para cubrir TODAS las páginas —
                incluidos los 135 blogs y /tiendas-virtuales-lima, donde vive el
                tráfico orgánico y antes no había ninguna vía de contacto. */}
            <WhatsAppBtn />
          </NextIntlClientProvider>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-54VJ6F97"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
          <Script
            id="gtm"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-54VJ6F97');`
            }}
          />
          <Script
            id="ga4-loader"
            strategy="afterInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=G-SQBPMGH3BM"
          />
          <Script
            id="ga4-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SQBPMGH3BM');`
            }}
          />
        </body>
      </ReactLenis>
    </html>
  );
}
