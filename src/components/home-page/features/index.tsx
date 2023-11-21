/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Container from '@/components/shared/container';
import { FEATURE_DATA } from '@/lib/data';
import FirstFeature from './feature-details';

function Features() {
  return (
    <section>
      <Container classNames=''>
        <h1 className='text-7xl font-semibold text-center'>
          <span>Meet your new</span> <span className='wrap'>design</span>
          <br />
          <span className='wrap'>assistant</span>
        </h1>
        <p className='lg:max-w-lg mx-auto text-gray-500 text-center text-base mt-3'>
          Save days of productivity by letting ClipDrop’s artificial
          intelligence do the boring and time-consuming tasks.
        </p>

        <div className='mt-20 flex flex-col md:gap-32 gap-20'>
          {FEATURE_DATA.map((details, idx) => (
            <FirstFeature
              key={details.className}
              details={details}
              layoutType={idx % 2 === 0 ? 'default' : 'reverse'}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Features;
