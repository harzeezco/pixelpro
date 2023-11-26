import React from 'react';
import Container from '@/components/shared/container';
import { REMOVEBGHOWITWORKDETAILS } from '@/lib/data';
import HowItWorkDetails from '@/components/shared/how-it-work-details';

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
            <HowItWorkDetails key={details.id} {...details} />
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default HowItWork;
