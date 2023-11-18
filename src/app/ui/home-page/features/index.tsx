import React from 'react';
import Container from '@/app/components/container';
import FirstFeature from './feature_01';

function Features() {
  return (
    <section>
      <Container classNames='flex-col items-center'>
        <h1 className='text-7xl font-semibold text-center'>
          <span>Meet your new</span>
          <span className='wrap'> design</span>
          <br />
          <span className='wrap '>assistant</span>
        </h1>
        <p className='lg:max-w-lg text-center text-gray-500 text-base mt-3'>
          Save days of productivity by letting ClipDrop’s artificial
          intelligence do the boring and time-consuming tasks.
        </p>

        <div className='mt-20'>
          <FirstFeature />
        </div>
      </Container>
    </section>
  );
}

export default Features;
