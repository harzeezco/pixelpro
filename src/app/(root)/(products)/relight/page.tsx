import React from 'react';
import Features from '@/components/relight/features';
import Hero from '@/components/relight/hero';
import OtherProducts from '@/components/relight/otherproducts';
import FAQ from '@/components/shared/faq';

function Relight() {
  return (
    <main className='mt-14'>
      <Hero />
      <Features />
      <OtherProducts />
      <FAQ />
    </main>
  );
}

export default Relight;
