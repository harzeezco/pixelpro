/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Container from '@/components/shared/container';
import { FEATURE_DATA } from '@/lib/data';
import FeatureDetails from '@/components/shared/Feature';

function Features() {
  return (
    <section id='features'>
      <Container aria-labelledby='features'>
        <h1 className='text-center text-4xl font-semibold lg:text-7xl'>
          <span>Meet your new</span>{' '}
          <span className='text-secondary-gradient common-gradient-clx'>
            design
          </span>
          <br />
          <span className='text-secondary-gradient common-gradient-clx'>
            assistant
          </span>
        </h1>
        <p className='mx-auto mt-3 text-center text-base text-gray-500 lg:max-w-lg'>
          Save days of productivity by letting ClipDrop’s artificial
          intelligence do the boring and time-consuming tasks.
        </p>

        <div className='mt-20 flex flex-col gap-20 md:gap-28'>
          {FEATURE_DATA.map((details, idx) => (
            <FeatureDetails
              key={details.className}
              {...details}
              layoutType={idx % 2 === 0 ? 'default' : 'reverse'}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Features;
