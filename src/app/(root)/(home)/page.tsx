import React from 'react';
import CTA from '@/components/shared/c-t-a';
import Features from '@/components/home-page/features';
import Hero from '@/components/home-page/hero';
import HowItWork from '@/components/home-page/how-it-work';
import FAQ from '@/components/shared/faq';
import TrustedClients from '@/components/home-page/trusted-clients';
import Blog from '@/components/shared/blog';
import Testimonial from '@/components/home-page/testimonial';

export default function Home() {
  return (
    <main className='mt-14'>
      <Hero />
      <TrustedClients />
      <Features />
      <HowItWork />
      <Testimonial />
      <Blog />
      <FAQ />
      <CTA img='snap.png' />
    </main>
  );
}
