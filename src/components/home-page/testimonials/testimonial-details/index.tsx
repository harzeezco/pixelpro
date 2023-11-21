import Image from 'next/image';
import React from 'react';

function TestimonialDetails() {
  return (
    <article className='grid grid-rows-[auto_1fr_auto] gap-5 rounded-[20px] bg-white  p-5 text-black'>
      <Image
        src='/png/testimonial/iceberg.png'
        alt=''
        width={124}
        height={30}
      />
      <blockquote className='text-gray-500'>
        “With Popwork, I have access to all the important information of my
        team. With Popwork, I have access to all the important. With Popwork, I
        have access to all the important information of my team. With Popwork”
      </blockquote>
      <div className='flex gap-3'>
        <Image
          src='/png/testimonial/profile.png'
          alt=''
          width={56}
          height={56}
        />
        <div>
          <h4>Aliénor Behaghel</h4>
          <span className='text-gray-500'>Co Founder at webdesign.gdn</span>
        </div>
      </div>
    </article>
  );
}

export default TestimonialDetails;
