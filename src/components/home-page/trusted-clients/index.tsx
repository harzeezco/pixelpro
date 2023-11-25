import React from 'react';
import ClientList from './clients-list';

function TrustedClients() {
  return (
    <section
      className='mb-20 bg-dark-700 pb-9 pt-16'
      aria-labelledby='trusted-clients'
    >
      <h1 className='text-center text-lg font-medium md:text-2xl'>
        Trusted by 10k+ Business Partners
      </h1>
      <ClientList />
    </section>
  );
}

export default TrustedClients;
