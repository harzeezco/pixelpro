'use client';

/* eslint-disable operator-linebreak */

import Link from 'next/link';
import React, { useState } from 'react';
import { NavDetailsProp } from '@/lib/types';
import mergeClasses from '@/lib/utils';
import Popup from './pop-up';

type LinkProp = {
  details: NavDetailsProp;
};

function Links({ details }: LinkProp) {
  const [isPopup, setIsPopup] = useState(false);

  const linkStyles =
    'hover:bg-gray-100 transition-all ease-linear py-[10px] px-[20px] rounded-[38px]';

  return (
    <Link href={details.href}>
      {details.isPopup ? (
        <div
          onClick={() => setIsPopup(!isPopup)}
          onMouseEnter={() => setIsPopup(true)}
          className={mergeClasses('group flex items-center', linkStyles)}
          tabIndex={-1}
          role='button'
          aria-hidden
        >
          <button type='button'>{details.label}</button>

          <div
            style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
            className='h-[6px] w-[15px] ml-2 bg-white rotate-180 transition-rotate group-hover:rotate-0 group-hover:bg-blue-700'
          />

          <Popup isPopup={isPopup} />
        </div>
      ) : (
        <li className={linkStyles}>
          <span className='text-lg'>{details.label}</span>
        </li>
      )}
    </Link>
  );
}

export default Links;
