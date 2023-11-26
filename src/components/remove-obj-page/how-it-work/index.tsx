import React from 'react';
import Container from '@/components/shared/container';
import { REMOVEOBJHOWITWORKDETAILS } from '@/lib/data';
import HowItWorkDetails from '@/components/shared/how-it-work-details';

function HowItWork() {
  return (
    <section className='bg-dark-700'>
      <Container className='pt-16'>
        <h1 className='text-center text-4xl font-semibold lg:text-7xl'>
          <span>How It</span> <span className='bg-purple-gradient'>Works</span>?
        </h1>
        <p className='mx-auto mt-3 text-center text-base text-gray-500'>
          There are only 4 simple steps to remove object from Image like a
          professional Editor.
        </p>
        <ul className='mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4'>
          {REMOVEOBJHOWITWORKDETAILS.map((details) => (
           <HowItWorkDetails key={details.id} {...details} />
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default HowItWork;
