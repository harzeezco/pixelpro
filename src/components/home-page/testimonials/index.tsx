import Image from 'next/image';
import React from 'react';
import TestimonialDetails from './testimonial-details';

function Testimonials() {
  return (
    <section className='testimonial py-16'>
      <div className='px-7'>
        <div className='flex items-center justify-around mb-10'>
          <h1 className='text-7xl font-semibold'>
            <span className='text-yellow-500'>People love</span> PixelPro
          </h1>
          <div className='ml-10 flex items-center gap-4'>
            <button
              type='button'
              className='rounded-full bg-white h-[38px] w-[38px] flex items-center justify-center'
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
              className='rounded-full bg-white h-[38px] w-[38px] flex items-center justify-center'
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
          <TestimonialDetails />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
