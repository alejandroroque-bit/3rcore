import ProtoPage from '@/components/proto/ProtoPage'
import Original from './Original'

// Rediseño aprobado: el mercado peruano (es) sirve la página del prototipo;
// us y en conservan su versión propia. La metadata sigue en el layout.tsx.
export default async function Page({ params }: { params: any }) {
  const { locale } = await params
  return locale === 'es' ? <ProtoPage frag="nosotros" /> : <Original />
}
