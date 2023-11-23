import React from 'react';
import Hero from '@/components/remove-bg-page/hero';
import HowItWork from '@/components/remove-bg-page/how-it-work';
import ProductsRemove from '@/components/remove-bg-page/products-remove';
import Features from '@/components/remove-bg-page/features';

function RemoveBg() {
  return (
    <main>
      <Hero />
      <HowItWork />
      <ProductsRemove />
      <Features />
    </main>
  );
}

export default RemoveBg;
