import React from 'react';
import Companies from './companies';

function TrustedCompanies() {
  return (
    <section className='mb-24 bg-dark-700 pb-9 pt-16'>
      <h1 className='text-center text-lg font-medium md:text-2xl'>
        Trusted by 10k+ Business Partners
      </h1>

      <Companies />
    </section>
  );
}

export default TrustedCompanies;
