/**
 * Medición con filtro de tráfico automatizado.
 *
 * Contexto (análisis del 25-ago-2026 con GSC + GA4 reales): GA4 declaraba 276
 * keyEvents en 30 días, pero al desglosarlos por país × canal con
 * `userEngagementDuration` aparecía la firma inconfundible de un bot —
 * 177 sesiones desde Irán con 134 «conversiones» y CERO segundos de
 * permanencia, más Países Bajos, Singapur, China y Rusia con 1 s. En total
 * ~174 de las 276 conversiones (63%) no eran personas, y el evento inflado era
 * `whatsapp_click`, que se dispara en un simple clic sobre un enlace.
 *
 * Mientras el panel diga 15% de conversión nadie va a tocar la web. Este
 * módulo es el filtro en origen: un evento de conversión solo llega al
 * dataLayer / GA4 si lo produjo una persona.
 *
 * Tres condiciones, todas baratas y ninguna visible para el visitante:
 *   1. `event.isTrusted` — el clic lo generó el navegador, no un script.
 *   2. Interacción previa real (pointerdown / keydown / scroll / touchstart)
 *      o al menos MIN_DWELL_MS en la página. Los bots detectados convertían
 *      con 0 s de permanencia; una persona nunca.
 *   3. El documento está visible (no una pestaña abierta en segundo plano por
 *      un crawler headless).
 *
 * NO es un muro anti-robot: no bloquea, no reta, no cambia nada de lo que ve
 * el visitante ni de lo que rastrea Googlebot. Solo decide si el evento cuenta.
 */

const MIN_DWELL_MS = 2000

let humanSeen = false
let armedAt = 0

function arm() {
  if (typeof window === 'undefined' || armedAt) return
  armedAt = Date.now()
  const mark = () => { humanSeen = true }
  const opts = { passive: true, once: true } as AddEventListenerOptions
  window.addEventListener('pointerdown', mark, opts)
  window.addEventListener('keydown', mark, opts)
  window.addEventListener('touchstart', mark, opts)
  window.addEventListener('wheel', mark, opts)
  window.addEventListener('scroll', mark, opts)
}

if (typeof window !== 'undefined') arm()

/** ¿Hay señales de que quien dispara esto es una persona? */
export function isHumanInteraction(e?: { isTrusted?: boolean } | null): boolean {
  if (typeof window === 'undefined') return false
  arm()
  // Un clic sintético (Puppeteer/Playwright vía JS, o `el.click()`) no es trusted.
  if (e && e.isTrusted === false) return false
  if (typeof document !== 'undefined' && document.visibilityState === 'hidden') return false
  if (humanSeen) return true
  return Date.now() - armedAt >= MIN_DWELL_MS
}

type Payload = Record<string, unknown>

/**
 * Empuja un evento al dataLayer SIEMPRE (para depurar y para eventos de
 * navegación), pero marca `human: false` cuando no supera el filtro. En GTM/GA4
 * la conversión debe condicionarse a `human == true`.
 */
export function pushDataLayer(event: string, params: Payload = {}, human = true) {
  if (typeof window === 'undefined') return
  const w = window as any
  w.dataLayer = w.dataLayer || []
  w.dataLayer.push({ event, human, ...params })
}

/**
 * Evento de CONVERSIÓN. Si no hay señales humanas no se envía: es la diferencia
 * entre un panel que dice la verdad y uno que cuenta robots.
 * Devuelve `true` si el evento se envió.
 */
export function trackConversion(
  event: string,
  params: Payload = {},
  e?: { isTrusted?: boolean } | null
): boolean {
  if (typeof window === 'undefined') return false
  if (!isHumanInteraction(e)) {
    // Se deja rastro sin contaminar la conversión: así se puede medir cuánto
    // tráfico automatizado hay sin que infle los keyEvents.
    pushDataLayer(`${event}_bot`, params, false)
    return false
  }
  pushDataLayer(event, params, true)
  const gtag = (window as any).gtag
  if (typeof gtag === 'function') gtag('event', event, params)
  return true
}
