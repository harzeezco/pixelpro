import Image from 'next/image';
import React from 'react';

const FEATURES = [
  {
    id: 0,
    label: 'Free Background Remover',
  },
  {
    id: 1,
    label: 'Remove Objects',
  },
  {
    id: 2,
    label: 'Image Upscale',
  },
];

function Features() {
  return (
    <ul className='flex items-center gap-x-7 justify-center mt-2 mb-8 flex-wrap gap-y-4'>
      {FEATURES.map((feature) => (
        <li key={feature.id} className='flex gap-x-3 items-center'>
          <Image
            src='/svg/verified.svg'
            width={20}
            height={20}
            alt='verified'
          />
          <span>{feature.label}</span>
        </li>
      ))}
    </ul>
  );
}

export default Features;
