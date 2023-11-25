import React from 'react';
import Blog from '@/components/home-page/blog';
import CTA from '@/components/home-page/c-t-a';
import Features from '@/components/home-page/features';
import Hero from '@/components/home-page/hero';
import HowItWork from '@/components/home-page/how-it-work';
import Testimonials from '@/components/home-page/testimonials';
import TrustedCompanies from '@/components/home-page/trusted-companies';
import FAQ from '@/components/shared/faq';

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustedCompanies />
      <Features />
      <HowItWork />
      <Testimonials />
      <Blog />
      <FAQ />
      <CTA />
    </main>
  );
}
