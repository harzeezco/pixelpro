import Container from '@/components/shared/container';
import React from 'react';
import { HOWITWORK_DATA } from '@/lib/data';
import Button from '@/components/shared/button';
import HowItWorkDetails from './how-it-work-details';

function HowItWork() {
  return (
    <section className='mt-20 bg-dark-700 text-center'>
      <Container classNames='py-24'>
        <ul className='mb-16 grid gap-x-24 gap-y-10 md:grid-cols-2'>
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
