import Blog from '@/components/shared/blog';
import Features from '@/components/upscale-page/features';
import Hero from '@/components/upscale-page/hero';
import OtherProducts from '@/components/upscale-page/otherProducts';
import Product from '@/components/upscale-page/product';
import React from 'react';

function UpScale() {
  return (
    <main className='mt-14'>
      <Hero />
      <Product />
      <Features />
      <OtherProducts />
      <Blog />
    </main>
  );
}

export default UpScale;
