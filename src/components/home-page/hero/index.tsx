import React from 'react';
import Image from 'next/image';
import Container from '@/components/shared/container';
import Button from '@/components/shared/button';
import FeaturesList from './features-list';
import HeadLine from './hero-headline';
import './index.css';

function Hero() {
  return (
    <section className='relative' id='hero'>
      <Container className='grid place-items-center' aria-labelledby='hero'>
        <HeadLine />
        <FeaturesList />
        <Button variant='blue'>Try For Free</Button>
        <Image
          src='/png/video.png'
          alt=''
          width={1044}
          height={685}
          className='mt-16'
        />
      </Container>
    </section>
  );
}

export default Hero;
