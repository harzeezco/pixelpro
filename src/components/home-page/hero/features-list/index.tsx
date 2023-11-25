import Image from 'next/image';
import React from 'react';

const FEATURES: { id: number; label: string }[] = [
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

function FeaturesList() {
  return (
    <ul className='mb-8 mt-2 flex flex-wrap items-center justify-center gap-x-7 gap-y-4'>
      {FEATURES.map((feature) => (
        <li key={feature.id} className='flex items-center gap-x-3'>
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

export default FeaturesList;
