import ProtoPage from '@/components/proto/ProtoPage'
import Original from './Original'

// Rediseño aprobado (mix 18-ago): el mercado peruano (es) sirve la página del
// prototipo; us y en conservan su versión propia. La metadata y el schema
// siguen viviendo en el layout.tsx de esta ruta, igual para los tres locales.
export default async function Page({ params }: { params: any }) {
  const { locale } = await params
  return locale === 'es' ? <ProtoPage frag="servicios__relaciones-publicas" /> : <Original />
}
