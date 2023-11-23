import Button from '@/components/shared/button';
import Container from '@/components/shared/container';
import Image from 'next/image';
import React from 'react';

const PRODUCTS = ['People', 'Object', 'Icons', 'Products', 'Animals'];

function ProductsRemove() {
  return (
    <Container classNames='grid place-items-center'>
      <h1 className='text-center text-4xl font-semibold lg:text-6xl lg:leading-[75px]'>
        <span>Powerful</span> <span className='wrap'>AI Background</span>
        <br />
        Remover for Any Images
      </h1>
      <p className='mx-auto mt-5 text-center text-base text-gray-500 lg:max-w-2xl'>
        Instantly obtain transparent backgrounds to instantly remove backgrounds
        from any images. Permit you to change the backdrop and adjust the
        spectacular banners, product images, and profile to your own
        specifications.
      </p>
      <ul className='slides mt-10 items-center justify-center gap-6 lg:flex'>
        {PRODUCTS.map((product) => (
          <li key={product}>
            <Button variant='log-in'>{product}</Button>
          </li>
        ))}
      </ul>
      <div className='my-14 grid place-items-center'>
        <Image
          src='/png/remove-bg/product.png'
          alt='Remove product'
          width={900}
          height={434}
        />
      </div>
      <Button variant='blue'>Try For Free</Button>
    </Container>
  );
}

export default ProductsRemove;
