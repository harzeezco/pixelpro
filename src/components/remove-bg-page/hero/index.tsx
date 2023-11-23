import Container from '@/components/shared/container';
import Image from 'next/image';
import React from 'react';
import UploadImageBox from './upload-img-box';
import RandomImages from './random-images';

function Hero() {
  return (
    <section>
      <Container classNames='grid md:grid-cols-[70%_30%]'>
        <div className='mt-12'>
          <h1 className='text-[42px] font-semibold leading-[50px] text-white md:text-[45px] lg:text-[75px] lg:leading-[85px]'>
            Remove background online in{' '}
            <span className='bg-blue-gradient'>1click</span>
          </h1>
          <UploadImageBox />
          <RandomImages />
        </div>
        <div>
          <Image
            src='/png/remove-bg/remove-bg.png'
            alt=''
            width={596}
            height={439}
          />
        </div>
      </Container>
    </section>
  );
}

export default Hero;
