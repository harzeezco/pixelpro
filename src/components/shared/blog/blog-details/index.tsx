import React from 'react';
import { BlogDetailsProps } from '@/lib/types';
import Image from 'next/image';

function BlogDetails({ details }: BlogDetailsProps) {
  return (
    <li>
      <article className='grid gap-4'>
        <Image
          src={`/png/blog/${details.img}`}
          alt=''
          height={370}
          width={560}
          className='h-[370px] w-[560px]'
        />
        <button type='button'>
          <h3 className='text-left text-[28px] font-semibold leading-9'>
            {details.title}
          </h3>
        </button>
        <p className='text-left text-sm text-gray-500 lg:pr-16'>
          {details.text}
        </p>
        <div className='mt-2 flex items-center gap-4'>
          <Image
            src={`/png/blog/profile/${details.profileImg}`}
            alt={details.profileName}
            width={44}
            height={44}
          />
          <p>{details.profileName}</p>
        </div>
      </article>
    </li>
  );
}

export default BlogDetails;
