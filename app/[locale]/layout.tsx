import type { Metadata } from "next";
import { Poppins } from "next/font/google"; 
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import CookieBanner from "@/components/layout/CookieBanners";

import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import { getMessages } from "next-intl/server";

import ParticlesBackground from "@/components/ui/AnimatedBackground";
import ReactLenis from "lenis/react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"], 
  variable: "--font-poppins", 
  display: 'swap',
});
const lenisOptions = {
    lerp: 0.1,          
    duration: 1.5,       
    smoothWheel: true,  
    wheelMultiplier: 0.5,  
    touchMultiplier: 2,  
    infinite: false,    
  }

export const metadata: Metadata = {
  title: "3RCORE",
  description: "Agencia de Marketing",
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: any
}) {
  const {locale} = await params;
  
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  
  const messages = await getMessages();

  return (
    <html lang={locale} >
      <ReactLenis root options={lenisOptions}>
      <body className={`${poppins.className} text-white`} suppressHydrationWarning={true}>
        <div className="noise-overlay" />
        
        <ParticlesBackground />
        
        <NextIntlClientProvider locale={locale} messages={messages}>
            <Navbar />
            <main className="flex flex-col relative z-10">
              <div className="noise-global" />
              {children}
            </main>
            <Footer />
          
          <CookieBanner />

        </NextIntlClientProvider>
      </body>
      </ReactLenis>
    </html>
  );
}