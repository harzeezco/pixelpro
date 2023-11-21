/* eslint-disable react/jsx-one-expression-per-line */
import Image from 'next/image';
import React from 'react';
import Button from '@/components/shared/button';
import { FeatureProps } from '@/lib/types';
import Link from 'next/link';

function FeatureDetails({ details, layoutType = 'reverse' }: FeatureProps) {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center md:gap-24 gap-y-10'>
      <article className='flex flex-col gap-6 items-start'>
        <h1 className='text-6xl font-semibold lg:leading-[70px]'>
          <span className={`${details.className} inline-block `}>
            {details.headingWithGradient}
          </span>{' '}
          {details.headingWithTransparent}
        </h1>
        <p className='lg:max-w-lg text-gray-500 text-base'>
          {details.paragraphs}
        </p>
        <Link href={details.href}>
          <Button variant='blue'>Try For Free</Button>
        </Link>
      </article>
      <div
        className={`${
          layoutType === 'default' ? 'order-first md:order-last' : 'order-first'
        }`}
      >
        <Image
          src={`/png/feature/${details.img}`}
          width={631}
          height={574}
          alt='a man wearing a cap'
        />
      </div>
    </div>
  );
}

export default FeatureDetails;
