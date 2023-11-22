import React from 'react';
import Image from 'next/image';
import Container from '@/components/shared/container';
import './index.css';
import Heading from './heading';
import Features from './features';
import Button from '../../shared/button';

function Hero() {
  return (
    <section className='relative' id='hero'>
      <Container classNames='mt-10 pb-20 text-center'>
        <Heading />
        <Features />
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
