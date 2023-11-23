/* eslint-disable react/jsx-one-expression-per-line */
import Container from '@/components/shared/container';
import Image from 'next/image';
import React from 'react';

const REMOVEBGHOWITWORKDETAILS = [
  {
    id: 0,
    img: 'upload.png',
    title: 'Upload  Image',
    alt: 'Upload Image',
    label:
      'Click the Upload Image button, drag or copy then paste your image to remove background from it',
  },
  {
    id: 1,
    img: 'ai.png',
    alt: 'Ai generated image',
    title: 'Remove automatically',
    label:
      'FocoClipping will remove BG automatically once the image is uploaded.',
  },
  {
    id: 2,
    img: 'free.png',
    alt: 'Upload Image',
    title: 'Download cut-out image',
    label:
      'Finally click the “Download” icon to freely download the transparent or white background image without any hassles.',
  },
];

function HowItWork() {
  return (
    <section className='mb-24 mt-32 bg-dark-600 p-16'>
      <Container classNames=''>
        <h1 className='text-center text-4xl font-semibold lg:text-7xl'>
          <span>How It</span> <span className='bg-purple-gradient'>Works</span>?
        </h1>
        <p className='mx-auto mt-3 text-center text-base text-gray-500'>
          There are only 3 simple steps to remove Background from Image like a
          professional Editor.
        </p>
        <ul className='mt-12 grid grid-cols-3 gap-7'>
          {REMOVEBGHOWITWORKDETAILS.map((details) => (
            <li>
              <Image
                src={`/png/remove-bg/how-it-work/${details.img}`}
                alt={details.alt}
                width={370}
                height={270}
              />
              <h5 className='mb-2 mt-3 text-lg font-medium md:text-2xl'>
                {details.title}
              </h5>
              <p className='text-sm text-gray-500'>{details.label}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default HowItWork;
