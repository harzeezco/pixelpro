'use client';

import Image from 'next/image';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function HeroImage() {
  const containerRef = useRef(null);
  const container = useInView(containerRef);
  console.log(container);

  return (
    <motion.div
      className='hero-image relative'
      ref={containerRef}
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ stiffness: 1 }}
    >
      <Image src='/png/top.png' width={1044} height={56} alt='' />
      {/* <Image src='/png/rec.png' width={1044} height={630} alt='' /> */}
      <div className='absolute left-20 top-1/4'>
        <Image src='/png/upload.png' width={328} height={324} alt='' />
      </div>
      <div className='absolute right-1/2 top-1/3 translate-x-1/2'>
        <Image
          src='/png/ai.png'
          width={328}
          height={324}
          alt=''
          className='h-[324px] w-[328px]'
        />
      </div>
      <div className='absolute right-5 top-1/4'>
        <Image src='/png/bg.png' width={328} height={324} alt='' />
      </div>
    </motion.div>
  );
}

export default HeroImage;
