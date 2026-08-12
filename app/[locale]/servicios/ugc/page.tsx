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

import ScrollContactBtn from '@/components/ui/ScrollContactBtn'

export default function Ugc() {

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
        {isLoading && <PageLoader key="ugc-loader" />}
      </AnimatePresence>
      <main>
        <h1 className="sr-only">{tH1('ugc')}</h1>
        <div id="hero">
          <ServiceLanding namespace="UgcLanding" />
        </div>
        <ServiceFAQ namespace="UgcFAQ" count={8} />
        <SEOContentBlock
          namespace="UgcSEO"
          paragraphs={6}
          relatedLinks={[{ href: "/servicios/influencer-marketing", label: "Influencer Marketing" }, { href: "/servicios/tiktok-ads", label: "TikTok Ads" }, { href: "/servicios/meta-ads", label: "Meta Ads" }, { href: "/servicios/socialmedia", label: "Social Media" }]}
        />
        <ReviewsSection/>
        <ClientSection />
        <div id="contacto">
          <ContactForm/>
        </div>
        <ScrollContactBtn />
      </main>
    </>
  );
}
