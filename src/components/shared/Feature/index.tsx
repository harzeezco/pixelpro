import Button from '@/components/shared/button';
import { FeatureDetailsProps } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function FeatureDetails({
  gradientPosition,
  className = '',
  gradientText,
  noGradientText,
  label,
  uniqueFeatures,
  href,
  img,
  layoutType = 'default',
  bottomText,
}: { layoutType: 'reverse' | 'default' } & FeatureDetailsProps) {
  return (
    <div className='grid grid-cols-2 justify-between items-center gap-y-10 md:flex-row md:gap-24'>
      <article className='flex flex-col items-start gap-2'>
        <h1 className='text-[40px] font-semibold leading-10 lg:text-[54px] lg:leading-[60px]'>
          {gradientPosition === 'top' && (
            <span className={`${className}`}>{gradientText}</span>
          )}{' '}
          {noGradientText}{' '}
          {gradientPosition === 'bottom' || gradientPosition === 'middle' ? (
            <span className={`${className}`}>{gradientText}</span>
          ) : null}{' '}
          {bottomText && <span>{bottomText}</span>}
        </h1>
        {label.map((item) => (
          <p className='my-3 text-base text-gray-500 lg:max-w-lg'>{item}</p>
        ))}
        <ul className='mb-5'>
          {uniqueFeatures.map((list) => (
            <li className='flex items-center gap-3 py-1'>
              <Image src='/svg/check.svg' alt='check' width={20} height={20} />
              <span>{list}</span>
            </li>
          ))}
        </ul>
        <Link href={href}>
          <Button variant='blue'>Try For Free</Button>
        </Link>
      </article>
      <div
        className={`${
          layoutType === 'default' ? 'order-first md:order-last' : 'order-first'
        }`}
      >
        <Image
          src={`/png/feature/${img}`}
          width={631}
          height={574}
          alt='a man wearing a cap'
        />
      </div>
    </div>
  );
}

export default FeatureDetails;
