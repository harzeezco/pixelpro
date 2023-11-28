import React from 'react';
import Hero from '@/components/pricing-page/Hero';
import FAQ from '@/components/shared/faq';
import Products from '@/components/pricing-page/products';

function PricingPage() {
  return (
    <main>
      <Hero />
      <Products />
      <FAQ />
    </main>
  );
}

export default PricingPage;
