import { HowItWorkDetailsProps } from '@/lib/types';
import Image from 'next/image';
import React from 'react';

function HowItWorkDetails({ details }: HowItWorkDetailsProps) {
  return (
    <li className='flex items-start gap-5'>
      <Image
        src={`/png/how-it-work/${details.img}`}
        width={90}
        height={90}
        alt={details.alt}
        className='w-[90px] h-[75px]'
      />
      <div className='text-start'>
        <h3 className='text-[28px] font-semibold leading-9 mb-2'>
          {details.title}
        </h3>
        <p className='text-base text-gray-500'>{details.label}</p>
      </div>
    </li>
  );
}

export default HowItWorkDetails;
