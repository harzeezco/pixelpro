'use client';

import { useScroll } from 'framer-motion';
import React, { useRef } from 'react';
import { TESTIMONIALS } from '@/lib/data';
import Card from './testimonial-card';

function Testimonial() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <section ref={container} className='relative my-24'>
      <h1 className='mb-3 text-center text-7xl font-semibold'>
        <span className='text-yellow-500'>People love</span> PixelPro
      </h1>
      {TESTIMONIALS.map((project, i) => {
        const targetScale = 1 - (TESTIMONIALS.length - i) * 0.05;
        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </section>
  );
}

export default Testimonial;
