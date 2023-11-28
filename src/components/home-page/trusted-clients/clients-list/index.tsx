import React from 'react';
import Image from 'next/image';
import { COMPANIES } from '@/lib/data';
import './index.css';

function ClientList() {
  return (
    <ul
      className='items-center gap-6 flex'
      title='Swipe to view more clients'
      id='slides'
    >
      {COMPANIES.map((details) => (
        <li
          key={details.id}
          className='relative shrink-0 scale-100 cursor-pointer pr-1 text-lg'
          title={details.alt}
        >
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

export default ClientList;
