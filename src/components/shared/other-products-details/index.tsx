'use client';

import Image from 'next/image';
import React, { ReactElement, useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';
import Button from '../button';
import { CommonProps } from '@/lib/types';

function OtherProductsDetails({ img, alt, title, label }: CommonProps) {
  const tiltRef = React.useRef<HTMLElement | null>(null);

  useEffect(() => {
    const tiltNode = tiltRef.current;
    VanillaTilt.init(tiltNode, {
      max: 25,
      speed: 400,
      'max-glare': 0.5,
      transition: true,
    });

    return () => tiltNode.vanillaTilt.destroy();
  }, []);
  return (
    <li
      className='grid place-items-start gap-2 rounded-2xl bg-dark-700 p-4'
      ref={tiltRef}
    >
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
