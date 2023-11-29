import Container from '@/components/shared/container';
import Image from 'next/image';
import React from 'react';
import ImageGallery from '@/components/image-swiper';
import UploadImageBox from '../../shared/upload-img-box';
import RandomImages from '../../shared/random-images';

function Hero() {
  return (
    <section>
      <Container className='grid md:grid-cols-[60%_40%]'>
        <div className='mt-2'>
          <h1 className='text-[42px] font-semibold leading-[50px] text-white md:text-[45px] lg:text-[75px] lg:leading-[85px]'>
            <span className='whitespace-nowrap'>Remove background</span> online
            in <span className='bg-blue-gradient'>1click</span>
          </h1>
          <UploadImageBox />
          <RandomImages />
        </div>
        <ImageGallery />
      </Container>
    </section>
  );
}

export default Hero;
