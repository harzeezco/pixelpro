import Image from 'next/image';
import React from 'react';

function HowItWorkDetails({ details }) {
  return (
    <li className='flex items-center gap-5'>
      <Image
        src={`/png/blog/${details.img}`}
        width={90}
        height={90}
        alt={details.alt}
        className='h-[90px] w-[90px] lg:h-[130px] lg:w-[130px]'
      />
      <div>
        <span className='text-gray-500'>{details.read}</span>
        <h3 className='mb-1 text-lg font-semibold leading-9 lg:text-[22px]'>
          {details.title}
        </h3>
      </div>
    </li>
  );
}

export default HowItWorkDetails;