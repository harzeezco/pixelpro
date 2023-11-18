import React from 'react';
import { NavDetailsProp } from '@/lib/types';
import { NAV_LINKS } from '@/lib/data';
import Links from './link';

type LinkProp = NavDetailsProp;

function Nav() {
  return (
    <ul className='flex items-center gap-x-4 font-normal'>
      {NAV_LINKS.map((details: LinkProp) => (
        <Links key={details.id} details={details} />
      ))}
    </ul>
  );
}

export default Nav;
