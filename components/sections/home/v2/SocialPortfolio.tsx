import PizzaCard from "@/components/ui/pizzaCard";
import { useTranslations } from "next-intl";

export default function SocialPortfolio() {
  const t = useTranslations('SocialMediaHero');
  
  return (
    <main className="lg:py-10 xl:py-20 px-10 xl:px-4">
      <div className="max-w-6xl 2xl:mx-w-7xl mx-auto">
        
        {/* Cabecera con el diseño original y las proporciones exactas */}
        <div className="mb-16">
          {/* Tag / Número */}
          <div className="flex items-center gap-4 text-[#FF1A55] text-xs font-semibold tracking-widest uppercase mb-6">
            <span>04</span>
            <div className="w-12 h-[1px] bg-[#FF1A55]"></div>
            <span>CASOS</span>
          </div>

          {/* Título Principal */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter text-white mb-4">
            Proyectos con{" "}
            <br />
            <span 
              className="text-transparent inline-block relative pb-2" 
              style={{ 
                WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.4)',
              }}
            >
              marca propia
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#FF1A55]"></span>
            </span>
          </h2>

          {/* Texto Descriptivo */}
          <p className="text-white/60 text-sm md:text-base font-light leading-relaxed max-w-xl">
            Seis identidades completas del portafolio real. Pasa el cursor para ver la segunda pieza de cada una.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          
          <div className="grid gap-6">
            <PizzaCard
              media={[
                { type: "image", src: "/images/social/portafolioProye/img1.webp", alt: "Diseño de post para redes sociales - portafolio agencia 3R Core Lima" }
              ]}
              showDots={true}
              autoOnHover={false}
              className="aspect-[3/4] transition-all duration-500 ease-in-out"
            />

            <PizzaCard
              media={[
                { type: "video", src: "/videos/AguJuego.webm" },
                { type: "video", src: "/videos/As11.webm" },
              ]}
              autoOnHover={false}
              className="aspect-[3/5] transition-all duration-500 ease-in-out"
            />
          </div>

          <div className="grid gap-6">
            <PizzaCard
              media={[
                { type: "video", src: "/videos/AsDeOros102.webm" },
                { type: "video", src: "/videos/Galletas.webm" },
              ]}
              autoOnHover={true}
              className="aspect-[3/5] transition-all duration-500 ease-in-out"
            />
            <PizzaCard
              media={[
                { type: "image", src: "/images/social/portafolioProye/img5.webp", alt: "Contenido Instagram diseñado por agencia de social media en Lima - 3R Core" }
              ]}
              autoOnHover={true}
              className="aspect-[3/4] transition-all duration-500 ease-in-out"
            />
          </div>

          <div className="grid gap-6">
            <PizzaCard
              media={[
                { type: "image", src: "/images/social/portafolioProye/img3.webp", alt: "Grilla editorial de contenidos para redes sociales - agencia 3R Core Lima" }
              ]}
              autoOnHover={true}
              className="aspect-[3/4] transition-all duration-500 ease-in-out"
            />
            <PizzaCard
              media={[
                { type: "video", src: "/videos/Img3849.webm" },
                { type: "video", src: "/videos/Vide5.webm" }
              ]}
              autoOnHover={true}
              className="aspect-[3/5] transition-all duration-500 ease-in-out"
            />
          </div>

        </div>
      </div>
    </main>
  );
}