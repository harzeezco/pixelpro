import Container from '@/components/shared/container';
import Image from 'next/image';
import React from 'react';

function CTA() {
  return (
    <section>
      <Container classNames='CTA rounded-[20px] p-24'>
        <div className='grid items-center justify-between gap-5 px-10 md:grid-cols-2'>
          <div>
            <h1 className='text-6xl font-semibold lg:leading-[70px]'>
              Go further with PixelPro
            </h1>
            <span className='text-sm text-gray-500 lg:pr-32'>
              Want to unlock even more features to make your photos shine? With
              PixelPro, you&apos;ll get access to useful features like Batch
              Editor, HD quality, Smart Resize, and more.
            </span>

            <div className='mt-7 flex gap-4'>
              <button type='button'>
                <Image
                  src='/svg/app-store.svg'
                  alt='app store'
                  width={180}
                  height={96}
                />
              </button>
              <button type='button'>
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
            <Image src='/png/snap.png' alt='' width={497} height={455} />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CTA;
