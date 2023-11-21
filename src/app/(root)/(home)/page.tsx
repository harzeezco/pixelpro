import Features from '@/components/home-page/features';
import Hero from '@/components/home-page/hero';
import HowItWork from '@/components/home-page/how-it-work';
import Testimonials from '@/components/home-page/testimonials';
import TrustedCompanies from '@/components/home-page/trusted-companies';
import React from 'react';

export default function Home() {
  return (
    <div>
      <Hero />
      <TrustedCompanies />
      <Features />
      <HowItWork />
      <Testimonials />
    </div>
  );
}
