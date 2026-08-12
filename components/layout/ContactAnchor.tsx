"use client"

import { useLocale } from "next-intl"

/**
 * Contenedor del formulario de contacto con el ancla en el idioma del locale.
 *
 * El id estaba fijado como "contacto", así que en /en el botón de contacto
 * dejaba la URL en `/en/pricing#contacto`: una palabra en español dentro de
 * una URL inglesa, visible en la barra de direcciones y en cualquier enlace
 * que alguien copie.
 *
 * Mantiene también el ancla histórica en español como span oculto: hay
 * enlaces antiguos y campañas apuntando a #contacto que deben seguir
 * funcionando en cualquier idioma.
 */
export default function ContactAnchor({ children }: { children: React.ReactNode }) {
  const locale = useLocale()
  const isEn = locale === "en"

  return (
    <div id={isEn ? "contact" : "contacto"}>
      {isEn && <span id="contacto" aria-hidden="true" />}
      {children}
    </div>
  )
}
