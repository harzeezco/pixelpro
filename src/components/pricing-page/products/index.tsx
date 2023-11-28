import Container from '@/components/shared/container';
import OtherProductsDetails from '@/components/shared/other-products-details';
import React from 'react';

const REMOVEBGHOWITWORKDETAILS = [
  {
    id: 0,
    img: 'remove-bg.png',
    title: 'Remove BG',
    alt: 'Upload Image',
    label:
      'Remove any Background, person, text, or defect from pictures in one click',
  },
  {
    id: 1,
    img: 'upscale.png',
    alt: 'Ai generated image',
    title: 'Upscale',
    label:
      'Modern AI is used by us to upscale and improve photos. Convert your SD photos to HD photos.',
  },
  {
    id: 2,
    img: 'relight.png',
    alt: 'Upload Image',
    title: 'Relight',
    label:
      'Modern AI is used by us to upscale and improve photos. Convert your normal photos to RGB photos.',
  },
];

function Products() {
  return (
    <section>
      <Container>
        <h1 className='text-center text-4xl font-semibold lg:text-7xl max-w-3xl mx-auto my-10'>
          Power up with our AI product suite
        </h1>
        <ul className='mt-12 grid grid-cols-3 gap-7'>
          {REMOVEBGHOWITWORKDETAILS.map((details) => (
            <OtherProductsDetails key={details.id} {...details} />
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default Products;
