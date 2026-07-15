'use client';
import ContactForm from "@/components/layout/ContactForm";
import ClientSection from "@/components/layout/ClientSection";
import ReviewsSection from "@/components/layout/ReviewsSection";
import ServiceLanding from "@/components/sections/servicios/generic/ServiceLanding";
import ServiceFAQ from "@/components/seo/ServiceFAQ";
import SEOContentBlock from "@/components/seo/SEOContentBlock";
import { useScrollToSection } from '@/components/ui/useScrollToSection';
import { useTranslations } from 'next-intl';

import { useIndividualPageLoader } from '@/components/layout/useIndividualPageLoader'
import { AnimatePresence } from 'framer-motion';
import PageLoader from '@/components/layout/PageLoader';

import WhatsAppBtn from '@/components/ui/WhatsAppBtn';
import ScrollContactBtn from '@/components/ui/ScrollContactBtn'

export default function TiendasVirtuales() {

  useScrollToSection();
  const isLoading = useIndividualPageLoader({
      timeout: 4000,
      minLoadingTime: 1200,
      checkVideos: true
    });
  const tH1 = useTranslations('HiddenH1');

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <PageLoader key="home-loader" />}
      </AnimatePresence>
      <main>
        <h1 className="sr-only">{tH1('tiendasvirtuales')}</h1>
        <div id="hero">
          <ServiceLanding namespace="TiendasVirtualesLanding" />
        </div>
        <ServiceFAQ namespace="TiendasVirtualesFAQ" count={8} />
        <SEOContentBlock
          namespace="TiendasVirtualesSEO"
          paragraphs={6}
          relatedLinks={[{ href: "/posicionamiento-seo", label: "Posicionamiento SEO" }, { href: "/servicios/google-ads", label: "Google Ads" }, { href: "/servicios/web-development", label: "Diseño Web" }, { href: "/servicios/marketing-ecommerce", label: "Marketing E-commerce" }]}
        />
        <ReviewsSection/>
        <ClientSection />
        <div id="contacto">
          <ContactForm/>
        </div>
        <ScrollContactBtn />
        <WhatsAppBtn />
      </main>
    </>
  );
}
