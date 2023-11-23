import React from 'react';
import Image from 'next/image';

const PROFILE_IMAGES = [
  {
    id: 0,
    img: '/png/remove-bg/profile/anthony.png',
    alt: 'anthony',
  },
  {
    id: 0,
    img: '/png/remove-bg/profile/hasan.png',
    alt: 'hasan',
  },
  {
    id: 0,
    img: '/png/remove-bg/profile/lebron.png',
    alt: 'lebron',
  },
  {
    id: 0,
    img: '/png/remove-bg/profile/nigga.png',
    alt: 'nigga',
  },
];

function RandomImages() {
  return (
    <div className='mt-5 flex flex-col items-center justify-center lg:ml-14 lg:max-w-sm'>
      <span className='flex items-center gap-2'>
        No image? Try one of these:{' '}
        <svg
          width='10'
          height='14'
          viewBox='0 0 8 12'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M4 1.5V10.5M4 10.5L7 7.5M4 10.5L1 7.5'
            stroke='#C3C3C3'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </span>
      <ul className='mt-3 flex items-center gap-3'>
        {PROFILE_IMAGES.map((details) => (
          <li>
            <Image src={details.img} alt={details.alt} width={90} height={90} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RandomImages;
