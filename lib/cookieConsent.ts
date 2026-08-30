/**
 * Estado del aviso de cookies, compartido entre componentes.
 *
 * POR QUÉ EXISTE. El botón flotante de WhatsApp (`fixed bottom-6 right-6 z-50`)
 * y el aviso de cookies (`fixed bottom-0 w-full z-50`) se pintaban en la misma
 * esquina y con la misma capa. Medido con navegador el 30-ago-2026, el botón
 * verde tapaba entre el 19% y el 37% del botón «Aceptar todas»:
 *
 *     320 px → 36%   ·   390 px → 19%   ·   768 px → 37%   ·   1440 px → 29%
 *
 * No es solo estética: quien pulsaba la mitad derecha de «Aceptar todas» abría
 * WhatsApp en lugar de aceptar, así que no se daba el consentimiento y la
 * medición de GA4 y de Ads no llegaba a dispararse para esa visita. En una web
 * de agencia, perder la medición es perder la única prueba de que algo funciona.
 *
 * Lo cazó una CAPTURA, no una medida: el auditor daba las dos páginas por
 * buenas porque ninguna desbordaba.
 */

export const EVENTO_CONSENTIMIENTO = 'cookie-consent-resuelto'

export function consentimientoResuelto(): boolean {
  if (typeof window === 'undefined') return true
  try {
    return localStorage.getItem('cookie_consent') !== null
  } catch {
    // Navegación privada o cookies bloqueadas: no se estorba al usuario.
    return true
  }
}

/** Lo llama el aviso al cerrarse, para que el botón flotante vuelva a su sitio. */
export function avisarConsentimientoResuelto() {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new Event(EVENTO_CONSENTIMIENTO))
}
