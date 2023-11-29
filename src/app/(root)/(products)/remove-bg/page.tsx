import React from 'react';
import Hero from '@/components/remove-bg-page/hero';
import HowItWork from '@/components/remove-bg-page/how-it-work';
import ProductsRemove from '@/components/remove-bg-page/products-remove';
import Features from '@/components/remove-bg-page/features';
import OtherProducts from '@/components/remove-bg-page/other-products';
import FAQ from '@/components/shared/faq';

function RemoveBg() {
  return (
    <main className='mt-14'>
      <Hero />
      <HowItWork />
      <ProductsRemove />
      <Features />
      <OtherProducts />
      <FAQ />
    </main>
  );
}

export default RemoveBg;
