import Original from './Original'
import OriginalV2 from './OriginalV2'

// El cliente descartó la página del prototipo: el mercado peruano (es) sirve
// el rediseño de Aymar; us y en conservan su versión propia. La metadata
// sigue en el layout.tsx, y su h1 sr-only sigue gateado a locale !== 'es'
// porque el hero de la v2 trae su propio h1 visible.
export default async function Page({ params }: { params: any }) {
  const { locale } = await params
  return locale === 'es' ? <OriginalV2 /> : <Original />
}
