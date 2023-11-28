'use client';

import Image from 'next/image';
import React, { useRef } from 'react';
import { useTransform, motion, useScroll } from 'framer-motion';
import { TestimonialProps } from '@/lib/types';
import mergeClasses from '@/lib/utils';

type TestimonialCardProps = {
  i: number;
  progress: any;
  range: number[];
  targetScale: number;
};

function Card({
  i,
  title,
  jobTitle,
  description,
  src,
  color,
  progress,
  range,
  targetScale,
  profileSrc,
}: TestimonialCardProps & TestimonialProps) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className='sticky top-0 flex h-screen items-center justify-center'
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={mergeClasses(
          'card top-[-25%] h-[500px] w-[800px] rounded-3xl grid grid-rows-[auto_1fr_auto]  gap-5 p-[50px] origin-top',
          color,
        )}
      >
        <Image
          style={{ scale: imageScale }}
          src={`/png/testimonial/${src}`}
          alt=''
          width={124}
          height={30}
        />
        <blockquote className='text-lg text-gray-500'>{description}</blockquote>

        <div className='flex items-center gap-3'>
          <Image
            src={`/png/testimonial/${profileSrc}`}
            alt=''
            width={70}
            height={70}
            className='rounded-full'
          />
          <div>
            <h4 className='text-2xl font-medium'>{title}</h4>
            <span className='text-gray-500'>{jobTitle}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Card;
