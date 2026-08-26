/**
 * NAP — Name, Address, Phone. Una sola fuente para todo el sitio.
 *
 * Por qué existe este fichero (26-ago-2026): la web publicaba DOS direcciones
 * distintas a la vez, y eso hace daño real al posicionamiento local — Google
 * necesita que el nombre, la dirección y el teléfono coincidan en todas partes
 * para fiarse de la ficha.
 *
 *   A) «Alameda de la Paz 187, primer piso, Urb El Remanso, La Molina, Lima 15024»
 *      → JSON-LD del sitio, pie de página, políticas, términos y la landing.
 *   B) «Calle Las Caobas 170, Ofic. 400, Urb El Remanso, La Molina, Lima 15024»
 *      → preguntas frecuentes (es y en) y public/llms.txt.
 *
 * Las dos coinciden en urbanización, distrito, ciudad y código postal; solo
 * cambia la calle. Aquí se centraliza la versión A porque es la que estaba en
 * más sitios y en el marcado estructurado, PERO ESO NO ES UNA DECISIÓN
 * TÉCNICA: hace falta que 3R Core confirme cuál es la buena.
 *
 * 🔧 CUANDO LO CONFIRMEN: se cambia `STREET` aquí y queda arreglado el JSON-LD,
 * el pie y la landing de una vez. Faltará ajustar a mano los textos legales de
 * `messages/*.json` (políticas y términos, donde la dirección forma parte del
 * texto legal) y la respuesta q6 de las preguntas frecuentes.
 *
 * Mientras tanto, `public/llms.txt` y la página madre solo publican el
 * distrito: dar una calle sin confirmar a un motor de IA que la va a citar es
 * peor que no dar ninguna.
 */

export const NAP = {
  name: '3R Core - Agencia de Marketing Digital',
  legalName: '3R Core Agencia de Marketing',
  ruc: '20609008217',
  street: 'Alameda de la Paz 187, primer piso',
  district: 'La Molina',
  region: 'Lima',
  postalCode: '15024',
  country: 'PE',
  /** Coordenadas ya publicadas en el JSON-LD del sitio. */
  lat: -12.0913,
  lng: -76.9494,
  email: 'info@3rcore.com',
  /** Horario publicado en las FAQ y en el JSON-LD: L-V 09:00-18:00. */
  opens: '09:00',
  closes: '18:00',
  days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
} as const

/** PostalAddress de Schema.org, idéntica en todas las páginas que la declaren. */
export const POSTAL_ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: NAP.street,
  addressLocality: NAP.district,
  addressRegion: NAP.region,
  postalCode: NAP.postalCode,
  addressCountry: NAP.country,
} as const
