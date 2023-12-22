import React from 'react';
import Image from 'next/image';
import Container from '@/components/shared/container';
import Button from '@/components/shared/button';
import FeaturesList from './features-list';
import HeadLine from './hero-headline';
import './index.css';
import HeroImage from '@/components/ui/hero-image';

function Hero() {
  return (
    <section className='relative' id='hero'>
      <Container className='grid place-items-center' aria-labelledby='hero'>
        <HeadLine />
        <FeaturesList />
        <Button variant='blue'>Try For Free</Button>
        <div className='mt-24'>
          <HeroImage />
        </div>
      </Container>
    </section>
  );
}

export default Hero;
