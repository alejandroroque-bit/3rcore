/* Cascarón que mete una página del prototipo dentro del layout REAL de
   3R Core: navbar, pie y comportamiento del cliente sin tocar una coma.
   El contenido va aislado bajo `.proto`, y proto.css está reescrito para
   que ninguna de sus reglas escape a las páginas del cliente. */
import fs from 'fs';
import path from 'path';
import Script from 'next/script';
import '@/app/proto.css';

export default function ProtoPage({ frag }: { frag: string }) {
  const ruta = path.join(process.cwd(), 'proto-html', `${frag}.html`);
  const html = fs.readFileSync(ruta, 'utf8');
  return (
    <>
      <div className="proto" dangerouslySetInnerHTML={{ __html: html }} />
      <Script src="/proto/proto.js" strategy="afterInteractive" />
    </>
  );
}
