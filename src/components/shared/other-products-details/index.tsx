import Image from 'next/image';
import React from 'react';
import Button from '../button';
import { CommonProps } from '@/lib/types';

function OtherProductsDetails({ img, alt, title, label }: CommonProps) {
  return (
    <li className='grid place-items-start gap-2 rounded-2xl bg-dark-700 p-4'>
      <Image
        src={`/png/other-product/${img}`}
        alt={alt}
        width={370}
        height={270}
      />
      <h5 className='text-lg font-medium md:text-2xl'>{title}</h5>
      <p className='mb-3 text-sm text-gray-500'>{label}</p>
      <Button variant='blue'>Try For Free</Button>
    </li>
  );
}

export default OtherProductsDetails;
