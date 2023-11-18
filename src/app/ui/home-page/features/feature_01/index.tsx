import Button from '@/app/ui/button';
import Image from 'next/image';
import React from 'react';

function FirstFeature() {
  return (
    <div className='flex justify-between items-center gap-24'>
      <article className='flex flex-col gap-6 items-start'>
        <h1 className='text-6xl font-semibold'>
          Erase any
          <br />
          <span className='bg-gradient-to-r from-[#0095FF] to-[#0058FF] bg-clip-text text-transparent'>
            background
          </span>
        </h1>
        <p className='lg:max-w-lg text-gray-500 text-base'>
          Edit photos quickly and accurately without all the effort. PhotoRoom
          makes it easy to keep the focus on the foreground, plus it&apos;s 2x
          more accurate than other apps.
        </p>
        <Button variant='blue'>Try For Free</Button>
      </article>
      <Image
        src='/png/feature/capman.png'
        width={631}
        height={574}
        alt='a man wearing a cap'
      />
    </div>
  );
}

export default FirstFeature;
