import Container from '@/components/shared/container';
import Image from 'next/image';
import React from 'react';

function CTA({ img }: { img: string; }) {
  return (
    <section id='CTA'>
      <Container
        className='CTA mb-20 rounded-[20px] p-16'
        aria-labelledby='CTA'
      >
        <div className='grid items-center justify-between gap-5 gap-y-8 md:grid-cols-2 lg:px-10'>
          <div>
            <h1 className='mb-1 text-4xl font-semibold lg:text-6xl lg:leading-[70px]'>
              Go further with PixelPro
            </h1>
            <span className='text-sm text-gray-500 lg:pr-32'>
              Want to unlock even more features to make your photos shine? With
              PixelPro, you&apos;ll get access to useful features like Batch
              Editor, HD quality, Smart Resize, and more.
            </span>

            <div className='mt-7 flex gap-4'>
              <button type='button' className='transition-all active:scale-95'>
                <Image
                  src='/svg/app-store.svg'
                  alt='app store'
                  width={180}
                  height={96}
                />
              </button>
              <button type='button' className='transition-all active:scale-95'>
                <Image
                  src='/svg/google.svg'
                  alt='google play'
                  width={180}
                  height={96}
                />
              </button>
            </div>
          </div>
          <div>
            <Image src={`/png/${img}`} alt='' width={497} height={455} />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CTA;
