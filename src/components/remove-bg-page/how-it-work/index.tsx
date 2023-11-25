/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Image from 'next/image';
import Container from '@/components/shared/container';
import { REMOVEBGHOWITWORKDETAILS } from '@/lib/data';

function HowItWork() {
  return (
    <section className='bg-dark-700'>
      <Container className='pt-16'>
        <h1 className='text-center text-4xl font-semibold lg:text-7xl'>
          <span>How It</span> <span className='bg-purple-gradient'>Works</span>?
        </h1>
        <p className='mx-auto mt-3 text-center text-base text-gray-500'>
          There are only 3 simple steps to remove Background from Image like a
          professional Editor.
        </p>
        <ul className='mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {REMOVEBGHOWITWORKDETAILS.map((details) => (
            <div>
              <Image
                src={`/png/remove-bg/how-it-work/${details.img}`}
                alt={details.alt}
                width={370}
                height={270}
                className='h-[270px]'
              />
              <h5 className='mb-2 mt-3 text-lg font-medium md:text-2xl'>
                {details.title}
              </h5>
              <p className='text-sm text-gray-500'>{details.label}</p>
            </div>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default HowItWork;
