import createMiddleware from 'next-intl/middleware';
import type { NextRequest } from 'next/server';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const response = intlMiddleware(request);

  // ── Por qué se borra la cookie en las URLs con idioma ──────────────────
  // next-intl escribe una cookie NEXT_LOCALE en CADA respuesta. Cuando una
  // respuesta HTML lleva `set-cookie`, Vercel la marca
  // `private, no-cache, no-store` y no la guarda nunca en su red: medido el
  // 25-ago-2026, 3rcore.com devolvía `x-vercel-cache: MISS` SIEMPRE y calculaba
  // cada visita desde cero en Washington para un público que está en Lima
  // (0,65 s de respuesta).
  //
  // La cookie solo hace falta donde hay algo que detectar: en `/` (sin idioma
  // en la URL). En `/es/...`, `/en/...` y `/us/...` el idioma ya está en la
  // ruta, así que la cookie no aporta nada y solo impide la caché. Se borra
  // ahí y se conserva en la raíz, donde sí decide a dónde mandar al visitante.
  const hasLocalePrefix = /^\/(es|en|us)(\/|$)/.test(request.nextUrl.pathname);
  if (hasLocalePrefix) {
    response.headers.delete('set-cookie');
    return response;
  }

  const isProd = process.env.NODE_ENV === 'production';
  const setCookieHeaders = response.headers.getSetCookie?.() ?? [];
  if (setCookieHeaders.length > 0) {
    response.headers.delete('set-cookie');
    for (const cookie of setCookieHeaders) {
      let updated = cookie;
      if (isProd && !/;\s*Secure/i.test(updated)) {
        updated = `${updated}; Secure`;
      }
      if (!/;\s*SameSite=/i.test(updated)) {
        updated = `${updated}; SameSite=Lax`;
      }
      response.headers.append('set-cookie', updated);
    }
  }

  return response;
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: '/((?!api|trpc|_next|_vercel|admin|panel|performance-marketing|.*\\..*).*)'
};