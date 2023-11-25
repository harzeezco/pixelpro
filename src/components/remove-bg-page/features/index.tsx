import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/shared/button';
import Container from '@/components/shared/container';

const FEATURE_DATA = [
  {
    headingWithGradient: 'Backgrounds Remove',
    headingWithGradientPosition: 'top',
    headingWithTransparent: 'in a matter of seconds',
    img: 'capman.png',
    paragraphs:
      ['Our online background remover quickly spots the subject in any photograph and produces a clean cutout for you.'],
    href: '',
    className: 'bg-blue-gradient',
  },
  {
    headingWithGradient: 'integrations',
    headingWithGradientPosition: 'bottom',
    headingWithTransparent: 'Speed up your workflow with our',
    img: 'tools.png',
    paragraphs: [
      'Instantly remove unwanted objects and defects. With just a swipe of your fingertip, you can make sure your snapshots are flawless.',
      "To enhance your productivity and workflow, we've also integrated plugins straight into the top design tools, software, applications, and eCommerce platforms.",
    ],
    href: '',
    className: 'bg-gradient',
  },
];

function Features() {
  return (
    <section className='my-10'>
      <Container>
        <ul className='grid gap-20'>
          {FEATURE_DATA.map((details) => (
            <div className='grid grid-cols-2 justify-between gap-y-10 md:flex-row md:gap-24'>
              <article className='flex flex-col items-start gap-2'>
                <h1 className='text-[40px] font-semibold leading-10 lg:text-[54px] lg:leading-[55px]'>
                  {details.headingWithGradientPosition === 'top' && (
                    <span className={`${details.className} inline-block`}>
                      {details.headingWithGradient}
                    </span>
                  )}{' '}
                  {details.headingWithTransparent}{' '}
                  {details.headingWithGradientPosition === 'bottom' && (
                    <span className={`${details.className} inline-block`}>
                      {details.headingWithGradient}
                    </span>
                  )}
                </h1>
                {details.paragraphs.map((paragraph) => (
                  <p className='mb-4 text-base text-gray-500 lg:max-w-lg'>
                    {paragraph}
                  </p>
                ))}
                <Link href={details.href}>
                  <Button variant='blue'>Try For Free</Button>
                </Link>
              </article>
              <div
                className={`${
                  details.headingWithGradientPosition === 'bottom'
                    ? 'order-first'
                    : 'order-last'
                }`}
              >
                <Image
                  src={`/png/remove-bg/${details.img}`}
                  width={631}
                  height={574}
                  alt='a man wearing a cap'
                />
              </div>
            </div>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default Features;
