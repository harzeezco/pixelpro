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
        className='h-[50px] w-[60px] lg:h-[75px] lg:w-[90px]'
      />
      <div>
        <h3 className='mb-1 text-lg font-semibold leading-9 lg:text-[28px]'>
          {details.title}
        </h3>
        <p className='text-gray-500'>{details.label}</p>
      </div>
    </li>
  );
}

export default HowItWorkDetails;
