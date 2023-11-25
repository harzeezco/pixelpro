import Image from 'next/image';
import React from 'react';
import TestimonialDetails from './testimonial-details';

function Testimonials() {
  return (
    <section className='testimonial mb-20 py-16'>
      <div className='px-7'>
        <div className='mb-10 flex items-center justify-around'>
          <h1 className='text-7xl font-semibold'>
            <span className='text-yellow-500'>People love</span> PixelPro
          </h1>
          <div className='ml-10 flex items-center gap-4'>
            <button
              type='button'
              className='flex h-[38px] w-[38px] items-center justify-center rounded-full bg-white'
            >
              <Image
                src='/svg/arrow-right.svg'
                alt='arrow-left'
                width={20}
                height={20}
              />
            </button>
            <button
              type='button'
              className='flex h-[38px] w-[38px] items-center justify-center rounded-full bg-white'
            >
              <Image
                src='/svg/arrow-left.svg'
                alt='arrow-left'
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>
        <div className='flex gap-5'>
          <TestimonialDetails />
          <TestimonialDetails />
          {/* <TestimonialDetails /> */}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
