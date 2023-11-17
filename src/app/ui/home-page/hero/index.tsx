import React from 'react';
import Image from 'next/image';
import './index.css';
import Container from '@/app/components/container';
import Features from './features';
import Button from '../../button';
import Heading from './heading';

function Hero() {
  return (
    <section className='relative hero'>
      <Container classNames='flex-col items-center mt-14 pb-20'>
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
