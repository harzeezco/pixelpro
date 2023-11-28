import React from 'react';
import Features from '@/components/remove-obj-page/features';
import Hero from '@/components/remove-obj-page/hero';
import HowItWork from '@/components/remove-obj-page/how-it-work';
import OtherProducts from '@/components/remove-obj-page/other-products';
import CTA from '@/components/shared/c-t-a';

function RemoveObj() {
  return (
    <main>
      <Hero />
      <HowItWork />
      <Features />
      <OtherProducts />
      <CTA img='snapshot-1.png' />
    </main>
  );
}

export default RemoveObj;
