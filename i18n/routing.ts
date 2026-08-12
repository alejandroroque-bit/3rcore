import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
 
export const routing = defineRouting({
  // 'us' = es-US: español para el negocio hispano de EE.UU. No se reutiliza /es
  // porque ese habla de soles, RUC, Yape y +51. Los mensajes de 'us' heredan de
  // es.json por deep-merge (ver i18n/request.ts) y solo sobrescriben lo que
  // cambia de mercado, así ninguna clave puede quedar sin traducir.
  locales: ['en', 'es', 'us'],

  defaultLocale: 'es',

  // El middleware emitía Link headers hreflang para TODAS las rutas, incluidos
  // los ~139 posts /es/blogs/* cuyo "alternate" EN no existe (devuelve 307 de
  // vuelta al ES) y un x-default apuntando a la URL sin locale (que también
  // redirige 307) → hreflang inválido a escala. Los hreflang correctos ya los
  // aportan el sitemap (páginas core, con x-default a /es) y el metadata de
  // cada post (solo idiomas realmente publicados).
  alternateLinks: false
});
 
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);