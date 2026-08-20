"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

// Hero del rediseño de Aymar (aprobado por el cliente, ago-2026). Solo se
// sirve en /es: los textos fijos van en español a propósito. El h1 del home
// vive en page.tsx (sr-only), por eso aquí los titulares son <p>.
export default function HeroHome() {
  const t = useTranslations("HeroHome");

  const handleScrollClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full min-h-[100svh] md:h-screen bg-[#16021B] overflow-hidden flex items-center">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/final.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60 z-[5] pointer-events-none" />

      {/* Contenedor Principal del Contenido */}
      <div className="relative z-20 w-full mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-center md:justify-between items-start md:items-center h-full gap-10 md:gap-0">
        
        {/* Lado Izquierdo: Textos Principales */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-left md:mt-16 md:mt-0 items-start">
          <p
            className="text-4xl sm:text-5xl md:text-7xl lg:text-[6rem] bg-gradient-to-r from-[#a630cd] to-[#f4266e] 
              bg-clip-text text-transparent font-bold tracking-tighter leading-tight"
            style={{ paintOrder: "stroke fill" }}
          >
            3R CORE
          </p>

          <p className="text-2xl sm:text-3xl md:text-6xl lg:text-[4.5rem] font-medium text-white leading-tight my-1">
            {t("agency2") || "Agencia"} <span className="italic font-serif font-light">{t("d") || "de"}</span>
          </p>

          <p
            className="text-3xl sm:text-4xl md:text-7xl lg:text-[6rem] bg-gradient-to-r from-[#f4266e] to-[#a630cd] 
              bg-clip-text text-transparent font-bold tracking-tighter leading-tight"
            style={{ paintOrder: "stroke fill" }}
          >
            {t("marketing") || "Marketing Digital"}
          </p>
        </div>

        {/* Lado Derecho: Botones y Subtítulo */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start md:items-end gap-5 mt-2">
          <p className="text-white text-[11px] md:text-xs tracking-[0.25em] font-semibold uppercase text-left md:text-right">
            Lima, Perú - Tu éxito, nuestro éxito
          </p>
          
          {/* En el diseño original eran <button> sin destino: se cablean como
              enlaces reales para que el CTA principal lleve al cotizador. */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto">
            <Link href="/cotizar" className="bg-gradient-to-r from-[#f4266e]  to-[#a630cd] hover:scale-105 transition-transform duration-300 text-white rounded-full px-10 py-3.5 font-semibold text-xs md:text-xs tracking-wider flex items-center justify-center gap-3 w-full sm:w-auto shadow-lg shadow-pink-500/20">
              COTIZAR MI PROYECTO
              <span className="text-lg leading-none font-normal">↗</span>
            </Link>
            <Link href="/servicios" className="border border-white/40 hover:bg-white/10 hover:border-white transition-all duration-300 text-white rounded-full px-8 py-3.5 font-bold text-xs md:text-sm tracking-wider flex items-center justify-center gap-3 w-full sm:w-auto">
              VER SERVICIOS
              <span className="text-lg leading-none font-normal">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Indicador de Navegación Inferior (Scroll) */}
      <div
        className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-20 cursor-pointer group flex flex-col items-center"
        onClick={handleScrollClick}
      >
        <div className="flex flex-col items-center gap-1">
          {/* Icono del Mouse */}
          <div className="relative w-6 h-9 md:w-7 md:h-10 border-[1.5px] border-white rounded-full flex items-start justify-center p-1 transition-colors group-hover:border-white">
            <div className="w-1 h-1.5 bg-white/70 rounded-full animate-bounce mt-0.5 group-hover:bg-white"></div>
          </div>
          
          {/* Texto de Navegar con punto rosa */}
          <div className="flex items-center gap-1.5 mt-2">
            <div className="w-1 h-1 bg-[#f4266e] rounded-full"></div>
            <span className="text-white text-[9px] md:text-[10px] font-medium tracking-[0.2em] uppercase transition-colors group-hover:text-white">
              Navegar
            </span>
          </div>

          {/* Flecha hacia abajo */}
          <svg
            className="w-4 h-4 text-white mt-1 transition-colors group-hover:text-white"
            viewBox="0 0 30 30"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>
    </div>
  );
}