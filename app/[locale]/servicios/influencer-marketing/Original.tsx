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

export default function InfluencerMarketing() {

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
        {isLoading && <PageLoader key="influencer-marketing-loader" />}
      </AnimatePresence>
      <main>
        <h1 className="sr-only">{tH1('influencers')}</h1>
        <div id="hero">
          <ServiceLanding namespace="InfluencerLanding" />
        </div>
        <ServiceFAQ namespace="InfluencerFAQ" count={8} />
        <SEOContentBlock
          namespace="InfluencerSEO"
          paragraphs={6}
          relatedLinks={[{ href: "/servicios/ugc", label: "Contenido UGC" }, { href: "/servicios/socialmedia", label: "Social Media" }, { href: "/servicios/tiktok-ads", label: "TikTok Ads" }, { href: "/servicios/relaciones-publicas", label: "Relaciones Públicas" }]}
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
