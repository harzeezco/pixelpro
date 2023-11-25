/* eslint-disable react/jsx-one-expression-per-line */
import Button from '@/components/shared/button';
import Container from '@/components/shared/container';
import Image from 'next/image';
import React from 'react';

const REMOVEBGHOWITWORKDETAILS = [
  {
    id: 0,
    img: 'remove-obj.png',
    title: 'Remove Objects',
    alt: 'Upload Image',
    label:
      'Remove any object, person, text, or defect from pictures in one click',
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

function OtherProducts() {
  return (
    <section>
      <Container>
        <h1 className='text-center text-4xl font-semibold lg:text-7xl'>
          Try Our Other <span className='bg-p-gradient'>Products</span>?
        </h1>
        <ul className='mt-12 grid grid-cols-3 gap-7'>
          {REMOVEBGHOWITWORKDETAILS.map((details) => (
            <li className='grid place-items-start gap-2 rounded-2xl bg-dark-700 p-4'>
              <Image
                src={`/png/remove-bg/other-product/${details.img}`}
                alt={details.alt}
                width={370}
                height={270}
              />
              <h5 className='text-lg font-medium md:text-2xl'>
                {details.title}
              </h5>
              <p className='mb-3 text-sm text-gray-500'>{details.label}</p>
              <Button variant='blue'>Try For Free</Button>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default OtherProducts;
