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
        className='h-[75px] w-[90px]'
      />
      <div className='text-start'>
        <h3 className='mb-2 text-[28px] font-semibold leading-9'>
          {details.title}
        </h3>
        <p className='text-base text-gray-500'>{details.label}</p>
      </div>
    </li>
  );
}

export default HowItWorkDetails;
