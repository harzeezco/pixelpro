/* eslint-disable react/jsx-one-expression-per-line */
import Image from 'next/image';
import React from 'react';
import Button from '@/components/shared/button';
import { FeatureProps } from '@/lib/types';
import Link from 'next/link';

function FeatureDetails({ details, layoutType = 'reverse' }: FeatureProps) {
  return (
    <div className='flex flex-col items-center justify-between gap-y-10 md:flex-row md:gap-24'>
      <article className='flex flex-col items-start gap-6'>
        <h1 className='text-[40px] font-semibold leading-10 lg:text-6xl lg:leading-[70px]'>
          <span className={`${details.className} inline-block `}>
            {details.headingWithGradient}
          </span>{' '}
          {details.headingWithTransparent}
        </h1>
        <p className='text-base text-gray-500 lg:max-w-lg'>
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
