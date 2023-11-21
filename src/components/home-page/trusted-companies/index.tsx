import React from 'react';
import Companies from './companies';

function TrustedCompanies() {
  return (
    <section className='pt-16 pb-9 bg-dark-700 mb-24'>
      <h1 className='md:text-2xl text-lg text-center font-medium'>
        Trusted by 10k+ Business Partners
      </h1>

      <Companies />
    </section>
  );
}

export default TrustedCompanies;
