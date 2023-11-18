import React from 'react';
import Image from 'next/image';
import { COMPANIES } from '@/lib/data';
import './index.css';

function Companies() {
  return (
    <ul className='slides items-center gap-6 lg:flex'>
      {COMPANIES.map((details) => (
        <li key={details.id} className='cursor-pointer'>
          <Image
            src={`/png/companies/${details.img}`}
            alt={details.alt}
            height={90}
            width={174}
          />
        </li>
      ))}
    </ul>
  );
}

export default Companies;
