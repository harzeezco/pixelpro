import React from 'react';
import Container from '@/components/shared/container';
import HowItWorkDetails from './trending-details';

export const TRENDING_DATA = [
  {
    id: 0,
    img: 'photography.png',
    alt: 'photography',
    title: 'Achieving a Flawless White Background in Photography.',
    read: '11 min read',
  },
  {
    id: 1,
    img: 'flaw.png',
    alt: 'video',
    title: '10 Proven Approaches for Stunning Results',
    read: '20 min read',
  },
  {
    id: 2,
    img: 'camera.png',
    alt: 'tools',
    title: '10 Strategies for Seamless Background Removal',
    read: '13 min read',
  },
  {
    id: 3,
    img: 'decoration.png',
    alt: 'shape',
    title: 'Eliminate acne, wrinkles on the Face',
    read: '15 min read',
  },
];

function TrendingPost() {
  return (
    <Container>
      <h1 className='text-center text-[40px] font-semibold leading-10 lg:text-[54px] lg:leading-[60px]'>
        Trending
      </h1>

      <ul className='my-16 grid gap-x-24 gap-y-10 md:grid-cols-2'>
        {TRENDING_DATA.map((details) => (
          <HowItWorkDetails key={details.id} details={details} />
        ))}
      </ul>
    </Container>
  );
}

export default TrendingPost;
