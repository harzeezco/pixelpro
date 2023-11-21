import Blog from '@/components/home-page/blog';
import FAQ from '@/components/home-page/faq';
import Features from '@/components/home-page/features';
import Hero from '@/components/home-page/hero';
import HowItWork from '@/components/home-page/how-it-work';
import Testimonials from '@/components/home-page/testimonials';
import TrustedCompanies from '@/components/home-page/trusted-companies';
import React from 'react';

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
    </main>
  );
}
