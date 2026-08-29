'use client';
import { useState, useEffect } from 'react';

interface UseIndividualPageLoaderOptions {
  timeout?: number; 
  minLoadingTime?: number; 
  checkVideos?: boolean; 
}

export function useIndividualPageLoader(options: UseIndividualPageLoaderOptions = {}) {
  const { 
    timeout = 4000, 
    minLoadingTime = 1000,
    checkVideos = true 
  } = options;
  
  const [isLoading, setIsLoading] = useState(true);
  const [startTime] = useState(Date.now());
  // 29-ago-2026. `isLoading` arrancaba en true, así que el overlay negro a
  // pantalla completa (z-9999, bg-black) se renderizaba TAMBIÉN EN EL SERVIDOR
  // y viajaba dentro del HTML. Para Google y para Lighthouse, el elemento más
  // grande de la primera pintura era una pantalla negra: en la medición del
  // 29-ago suponía entre el 83% y el 97% del LCP de las tres portadas.
  //
  // Con esta bandera el servidor no emite nada y el HTML llega con el contenido
  // real. El overlay sigue existiendo para el visitante —se monta al hidratar—
  // pero ya no es lo que se mide ni lo que ve un rastreador.
  const [montado, setMontado] = useState(false);

  useEffect(() => {
    setMontado(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const loadPageResources = async () => {
      const images = Array.from(document.querySelectorAll('img')).filter(img => {
        const rect = img.getBoundingClientRect();
        return rect.top < window.innerHeight + 1000; 
      });

      const videos = checkVideos 
        ? Array.from(document.querySelectorAll('video'))
        : [];

      const promises: Promise<void>[] = [];

      images.forEach(img => {
        if (!img.complete && img.src) {
          promises.push(
            new Promise<void>((resolve) => {
              const timer = setTimeout(() => resolve(), 3000);
              
              img.onload = () => {
                clearTimeout(timer);
                resolve();
              };
              
              img.onerror = () => {
                clearTimeout(timer);
                resolve();
              };
            })
          );
        }
      });

      videos.forEach(video => {
        if (video.readyState < 3) {
          promises.push(
            new Promise<void>((resolve) => {
              const timer = setTimeout(() => resolve(), 4000); 
              
              video.onloadeddata = () => {
                clearTimeout(timer);
                resolve();
              };
              
              video.onerror = () => {
                clearTimeout(timer);
                resolve();
              };
            })
          );
        }
      });

      const timeoutPromise = new Promise<void>((resolve) => {
        setTimeout(() => resolve(), timeout);
      });

      await Promise.race([
        Promise.all(promises),
        timeoutPromise
      ]);
      const elapsed = Date.now() - startTime;
      if (elapsed < minLoadingTime) {
        await new Promise(resolve => setTimeout(resolve, minLoadingTime - elapsed));
      }

      setIsLoading(false);
      
      setTimeout(() => {
        document.body.style.overflow = '';
      }, 500);
    };

    const timer = setTimeout(() => {
      loadPageResources();
    }, 100);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, [timeout, minLoadingTime, checkVideos, startTime]);

  return montado && isLoading;
}