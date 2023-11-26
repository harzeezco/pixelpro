import { CommonProps } from '@/lib/types';
import Image from 'next/image';
import React from 'react';

function HowItWorkDetails({ img, alt, title, label }: CommonProps) {
  return (
    <li>
      <Image
        src={`/png/${img}`}
        alt={alt}
        width={370}
        height={270}
        className='h-[270px]'
      />
      <h5 className='mb-2 mt-3 text-lg font-medium md:text-2xl'>{title}</h5>
      <p className='text-sm text-gray-500'>{label}</p>
    </li>
  );
}

export default HowItWorkDetails;
