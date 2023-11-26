import React from 'react';
import CTA from '@/components/shared/c-t-a';
import Features from '@/components/home-page/features';
import Hero from '@/components/home-page/hero';
import HowItWork from '@/components/home-page/how-it-work';
import Testimonials from '@/components/home-page/testimonials';
import FAQ from '@/components/shared/faq';
import TrustedClients from '@/components/home-page/trusted-clients';
import Blog from '@/components/shared/blog';

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustedClients />
      <Features />
      <HowItWork />
      <Testimonials />
      <Blog />
      <FAQ />
      <CTA img='snap.png' />
    </main>
  );
}
