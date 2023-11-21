import Container from '@/components/shared/container';
import React from 'react';
import { HOWITWORK_DATA } from '@/lib/data';
import Button from '@/components/shared/button';
import HowItWorkDetails from './how-it-work-details';

function HowItWork() {
  return (
    <section className='bg-dark-700 mt-20 text-center'>
      <Container classNames='py-24'>
        <ul className='grid md:grid-cols-2 gap-x-24 gap-y-10 mb-16'>
          {HOWITWORK_DATA.map((details) => (
            <HowItWorkDetails key={details.id} details={details} />
          ))}
        </ul>

        <Button variant='blue'>Try for free</Button>
      </Container>
    </section>
  );
}

export default HowItWork;
