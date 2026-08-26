import Original from './Original'
import OriginalV2 from './OriginalV2'
import { setRequestLocale } from "next-intl/server"

// El cliente descartó la página del prototipo: el mercado peruano (es) sirve
// el rediseño de Aymar; us y en conservan su versión propia. La metadata
// sigue en el layout.tsx, y su h1 sr-only sigue gateado a locale !== 'es'
// porque el hero de la v2 trae su propio h1 visible.
export default async function Page({ params }: { params: any }) {
  const { locale } = await params
  // Renderizado estático: sin esto next-intl marca la ruta como dinámica y
  // Vercel devuelve `no-store` en cada visita.
  setRequestLocale(locale);

  return locale === 'es' ? <OriginalV2 /> : <Original />
}
