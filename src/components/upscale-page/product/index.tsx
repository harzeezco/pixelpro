import Button from '@/components/shared/button';
import Container from '@/components/shared/container';
import Image from 'next/image';
import React from 'react';

const PRODUCTS = ['People', 'Object', 'Icons', 'Products', 'Animals'];

function Product() {
  return (
    <section className='bg-dark-600'>
      <Container className='grid place-items-center pt-16'>
        <h1 className='text-center text-4xl font-semibold lg:text-6xl lg:leading-[75px]'>
          Upgrade and <span className='bg-pink-gradient'>4x</span>-enhance{' '}
          <br /> Your Images
        </h1>
        <p className='mx-auto mt-5 text-center text-base text-gray-500 lg:max-w-2xl'>
          Prepare your low-resolution photographs for all of your personal and
          professional purposes by enhancing them without sacrificing any
          detail.
        </p>

        <div className='my-14 grid place-items-center'>
          <Image
            src='/png/upscale/product.png'
            alt='Remove product'
            width={900}
            height={434}
          />
        </div>
      </Container>
    </section>
  );
}

export default Product;
