import React from 'react';
import { FOOTER_LINKS } from '@/lib/data';

function FooterNav() {
  return (
    <nav className='mb-10 mt-5'>
      <ul className='flex flex-col justify-between gap-x-10 gap-y-6 md:flex-row'>
        {FOOTER_LINKS.map((details) => (
          <li key={details.id}>
            <h1 className='mb-6 text-xl font-bold'>{details.title}</h1>
            <ul className='grid gap-4'>
              {details.links.map((link) => (
                <li className='whitespace-nowrap text-gray-500'>
                  {link.label}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default FooterNav;
