'use client';
import ContactForm from "@/components/layout/ContactForm";
import ContactAnchor from "@/components/layout/ContactAnchor";
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

import ScrollContactBtn from '@/components/ui/ScrollContactBtn'

export default function RelacionesPublicas() {

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
        {isLoading && <PageLoader key="relaciones-publicas-loader" />}
      </AnimatePresence>
      <main>
        <h1 className="sr-only">{tH1('pr')}</h1>
        <div id="hero">
          <ServiceLanding namespace="PrLanding" />
        </div>
        <ServiceFAQ namespace="PrFAQ" count={8} />
        <SEOContentBlock
          namespace="PrSEO"
          paragraphs={6}
          relatedLinks={[{ href: "/servicios/branding", label: "Branding" }, { href: "/servicios/influencer-marketing", label: "Influencer Marketing" }, { href: "/posicionamiento-seo", label: "SEO" }, { href: "/servicios/socialmedia", label: "Social Media" }]}
        />
        <ReviewsSection/>
        <ClientSection />
        <ContactAnchor>
          <ContactForm/>
        </ContactAnchor>
        <ScrollContactBtn />
      </main>
    </>
  );
}
