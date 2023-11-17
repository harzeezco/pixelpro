import { NAV_LINKS } from '@/app/lib/data';
import React from 'react';
import { NavDetailsProp } from '@/app/lib/types';
import Links from './link';

type LinkProp = NavDetailsProp;

function Nav() {
  return (
    <ul className='flex items-center gap-x-7 font-normal'>
      {NAV_LINKS.map((details: LinkProp) => (
        <Links key={details.id} details={details} />
      ))}
    </ul>
  );
}

export default Nav;
