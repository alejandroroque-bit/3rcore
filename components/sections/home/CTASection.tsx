"use client";
import { playfair, playfair as trirong, poppins } from "@/lib/fonts"

import { useRef } from "react";
import { WA_MAIN } from "@/lib/contact";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);




const StatsAndCTA = () => {
  const t = useTranslations("CTA");

  const phoneNumber = WA_MAIN;
  const message = "Hola vengo de la página web, quiero agendar una reunión.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // ✅ CIFRAS CONFIRMADAS POR EL CLIENTE (31-ago-2026): +1000 marcas,
  // +3 países, +5 años. Son la ÚNICA fuente para cualquier cifra corporativa
  // del sitio; si alguna página dice otra cosa, la que está mal es la página.
  //
  // Antes de esa confirmación la web publicaba CUATRO cifras distintas de la
  // misma empresa: «+5000 BRANDS» aquí en /en, «+1000 MARCAS» en /es y /us con
  // el mismo rótulo, «+120 marcas trabajadas» en la landing de performance y
  // «ocho años y 150 proyectos» en las FAQ de los tres mercados. Quien comparaba
  // dos páginas dejaba de creerse las dos. Los «150 proyectos» se retiraron: el
  // cliente no los confirmó y contradicen las mil marcas.
  const stats = [
    { id: 1, endValue: 1000, label: t("labelClients"), prefix: "+" },
    { id: 2, endValue: 5, label: t("labelExperience"), prefix: "+" },
    { id: 3, endValue: 3, label: t("labelCountries"), prefix: "+" },
  ];

  const containerRef = useRef(null);
  const numbersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(
    () => {
      gsap.from(".stat-item", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".stats-container",
          start: "top 85%",
        },
      });

      stats.forEach((stat, index) => {
        const element = numbersRef.current[index];
        if (!element) return;
        const counter = { val: 0 };
        gsap.to(counter, {
          val: stat.endValue,
          duration: 2.5,
          ease: "power3.out",
          scrollTrigger: { trigger: ".stats-container", start: "top 85%" },
          onUpdate: () => {
            element.textContent = Math.ceil(counter.val).toString();
          },
        });
      });

      const ctaTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".cta-card-container",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      ctaTl
        .from(".cta-bg", {
          scaleX: 0.8,
          opacity: 0,
          duration: 1.5,
          ease: "expo.out",
        })
        .from(
          ".cta-content",
          {
            y: 40,
            opacity: 0,
            duration: 1,
          },
          "-=1",
        )
        .from(
          ".cta-image-wrapper",
          {
            x: 100,
            scale: 0.8,
            opacity: 0,
            duration: 1.2,
            ease: "back.out(1.2)",
          },
          "-=0.8",
        );

    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="w-full py-8 lg:py-12 2xl:py-16 px-10 lg:px-4 flex flex-col items-center lg:gap-10  xl:gap-20 2xl:gap-40  overflow-hidden"
    >
      <div className="stats-container flex flex-col md:flex-row justify-center items-center gap-10 lg:gap-30 md:gap-15 xl:gap-40 w-full max-w-5xl">
        {stats.map((stat, index) => (
          <div
            key={stat.id}
            className="stat-item text-center flex flex-col items-center"
          >
            <div
              className={`text-[#D11E68] text-5xl xl:text-7xl ${trirong.className} italic font-bold mb-3`}
            >
              <span>{stat.prefix}</span>
              {/* SSR con el valor real: antes renderizaba "0" y los bots que
                  no ejecutan JS leían "+0 marcas trabajadas, +0 años…" (dato
                  negativo activo para LLMs). GSAP lo anima desde 0 al entrar
                  en viewport igual que antes. */}
              <span
                ref={(el) => {
                  if (el) numbersRef.current[index] = el;
                }}
              >
                {stat.endValue}
              </span>
            </div>
            <p
              className={`text-white text-xs lg:text-sm tracking-[0.2em] font-medium ${poppins.className} opacity-80`}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
      <div className="cta-card-container w-full xl  md:max-w-3xl lg:max-w-4xl 2xl:max-w-7xl relative md:h-[200px] lg:h-[220px] 2xl:h-[300px] 2xl:h-[250px]  flex items-center">
        <div className="cta-bg absolute inset-0 bg-gradient-to-r from-[#4a0d3d] to-[#120214] rounded-[3rem] shadow-2xl overflow-hidden pointer-events-none mt-5">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#D11E68] opacity-20 blur-[100px]"></div>
        </div>

        <div className="cta-content relative z-10 w-full flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-12">
          <div className="flex flex-col items-start text-left md:w-1/2 space-y-8">
            <div className="text-white text-xl md:text-xl 2xl:text-4xl leading-tight mb-2 hidden md:block">
              <h3 className={`${poppins.className}  font-normal mb-4 text-white `}>
                <span style={{ 
                  backgroundColor: '#A21F8A', 
                  padding: '2px 10px', 
                  borderRadius: '2px' 
                }}>
                  {t("titleLine1")}
                </span>
              </h3>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3" 
            >
              <button
                className={`
                ${poppins.className}  
                relative inline-flex items-center justify-center px-5 xl:px-10 py-2 xl:py-4 
                overflow-hidden text-[16px] md:text-[10px] xl:text-xs md:font-bold uppercase tracking-[0.2em] text-white 
                border border-white/30 rounded-[10px] transition-all duration-500 
                group/btn hover:border-transparent 
              `}
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#E91E63] to-[#9C27B0] transition-transform duration-300 ease-out -translate-x-full group-hover/btn:translate-x-0"></span>

                <span className="relative z-10 transition-colors duration-300">
                  {t("ctaButton")}
                </span>
              </button>
            </a>
          </div>

          <div className="md:w-1/2 flex justify-center hidden md:block md:justify-end relative group">
            <div
              className="cta-image-wrapper relative 
                            w-[280px] h-[200px]   /* Tamaño más grande */
                            xl:w-[450px] xl:h-[250px] 
                            z-30 drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)]"
            >
              <Image
                src="/images/monitor.webp"
                alt="iMac Display"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsAndCTA;
