import Features from '@/components/home-page/features';
import Hero from '@/components/home-page/hero';
import TrustedCompanies from '@/components/home-page/trusted-companies';
import React from 'react';

export default function Home() {
  return (
    <div>
      <Hero />
      <TrustedCompanies />
      <Features />
    </div>
  );
}
