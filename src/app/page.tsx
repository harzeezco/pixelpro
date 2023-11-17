import React from 'react';
import Hero from './ui/home-page/hero';
import TrustedCompanies from './ui/home-page/trusted-companies';
import Features from './ui/home-page/features';

export default function Home() {
  return (
    <div>
      <Hero />
      <TrustedCompanies />
      <Features />
    </div>
  );
}
