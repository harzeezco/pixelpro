import Container from '@/components/shared/container';
import Image from 'next/image';
import React from 'react';
import UploadImageBox from '../../shared/upload-img-box';
import RandomImages from '../../shared/random-images';

function Hero() {
  return (
    <section>
      <Container className='grid md:grid-cols-[60%_40%] items-center'>
        <div className='mt-2'>
          <h1 className='text-[42px] font-semibold leading-[50px] text-white md:text-[45px] lg:text-[75px] lg:leading-[85px]'>
            <span className='whitespace-nowrap'>Upscale, denoise and</span>{' '}
            enhance your images <span className='bg-purple-gradient'>FREE</span>
          </h1>
          <UploadImageBox />
          <RandomImages />
        </div>

        <Image
          src='/png/upscale/wow.png'
          alt=''
          width={596}
          height={439}
          className='h-[400px] w-[596px]'
        />
      </Container>
    </section>
  );
}

export default Hero;
