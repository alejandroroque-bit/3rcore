import {getRequestConfig} from 'next-intl/server';
import {hasLocale} from 'next-intl';
import {routing} from './routing';

type Dict = Record<string, unknown>

/**
 * Merge profundo: la base gana solo donde el override no dice nada.
 * Los arrays se sustituyen enteros (no se fusionan elemento a elemento): un
 * array de `items` con 6 bloques no debe mezclarse a medias con otro de 4.
 */
function deepMerge(base: Dict, override: Dict): Dict {
  const out: Dict = {...base}
  for (const [key, value] of Object.entries(override)) {
    const prev = out[key]
    if (
      value && typeof value === 'object' && !Array.isArray(value) &&
      prev && typeof prev === 'object' && !Array.isArray(prev)
    ) {
      out[key] = deepMerge(prev as Dict, value as Dict)
    } else {
      out[key] = value
    }
  }
  return out
}

export default getRequestConfig(async ({requestLocale}) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  // 'us' (es-US) hereda todo el español de Perú y sobrescribe únicamente lo que
  // cambia de mercado: moneda, medios de pago, teléfono, referencias locales.
  // Sin esto habría que mantener dos ficheros de 128 KB en paralelo y cualquier
  // clave olvidada saldría en pantalla como el literal "Namespace.clave".
  if (locale === 'us') {
    const base = (await import('../messages/es.json')).default as unknown as Dict
    const override = (await import('../messages/us.json')).default as unknown as Dict
    return {locale, messages: deepMerge(base, override) as any};
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
