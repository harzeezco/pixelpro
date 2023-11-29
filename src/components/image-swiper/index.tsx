'use client';

import React, { useState } from 'react';
// Gallery
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { wrap } from 'popmotion';
import mergeClasses from '@/lib/utils';
import Image5 from '../../../public/png/free.png';
import Image1 from '../../../public/png/yellow-man.png';
import Image2 from '../../../public/png/ai.png';
import Image3 from '../../../public/png/upload.png';
import Image4 from '../../../public/png/capman.png';

const ImageGalleryPhotos = [
  {
    image: Image1,
    description: 'Yellow bus in the city.',
    alt: 'Image of me',
    rotate: 'rotate-6',
    width: 'auto',
    height: 320,
  },
  {
    image: Image2,
    description: 'Beautiful corridor in a city...',
    alt: 'Image of me',
    rotate: 'rotate-6',
    width: 220,
    height: 220,
  },

  {
    image: Image3,
    description: 'Pretty mountain view.',
    alt: 'Image of me',
    rotate: 'rotate-6',
    width: 220,
    height: 220,
  },
  {
    image: Image4,
    description: 'Cool car at the beach.',
    alt: 'Image of me',
    rotate: 'rotate-6',
    width: 220,
    height: 220,
  },
  {
    image: Image5,
    description: 'My pretty palm tree view.',
    alt: 'Image of me',
    rotate: 'rotate-6',
    width: 220,
    height: 220,
  },
];
const sliderVariants = {
  incoming: (direction) => ({
    // if the direction is from the right
    x: direction > 0 ? '100%' : '-100%',
    scale: 1.2,
    opacity: 0,
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  // if the direction is from the right
  exit: (direction) => ({
    x: direction > 0 ? '-100%' : '100%',
    scale: 1,
    opacity: 0.2,
  }),
};

const sliderTransition = {
  duration: 0.5,
  ease: [0.56, 0.03, 0.12, 1.04],
};

export default function ImageGallery() {
  // Using an array to keep track of two states
  const [[imageCount, direction], setImageCount] = useState([0, 0]);
  // wrap accepts a range, defined as a min and max
  // Third value is returned if it lies between the range else its wrapped back to the first
  const activeImageIndex = wrap(0, ImageGalleryPhotos.length, imageCount);

  // sets the new state
  const swipeToImage = (swipeDirection) => {
    setImageCount([imageCount + swipeDirection, swipeDirection]);
  };
  // Pulling to the right is positive
  // Pulling to the left is negative
  // Define a threshold and if the drag exceeds then we swipe
  const dragEndHandler = (dragInfo) => {
    // You can see more details on dragInfo
    // console.log(dragInfo.offset.x);
    const draggedDistance = dragInfo.offset.x;
    const swipeThreshold = 50;
    if (draggedDistance > swipeThreshold) {
      swipeToImage(-1);
    } else if (draggedDistance < -swipeThreshold) {
      swipeToImage(1);
    }
  };

  return (
    <>
      {' '}
      {/* Dont want animation on page load */}
      <AnimatePresence initial={false} custom={direction}>
        <div
          className='flex flex-col items-center justify-center gap-8'
          style={{ '--index': 1 }}
        >
          <div className='drag relative flex w-full  max-w-lg items-center justify-center'>
            <motion.div
              // Must be unique
              key={imageCount}
              // Used to alter behavior
              custom={direction}
              variants={sliderVariants}
              initial='incoming'
              animate='active'
              exit='exit'
              transition={sliderTransition}
              // Only on x axis
              drag='x'
              // End of the window either side
              dragConstraints={{ left: 0, right: 0 }}
              // The degree of movement allowed outside constraints.
              dragElastic={1}
              // gives delta, offset,point, and velocity
              onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
              className='relative z-40 flex cursor-grabbing flex-col items-center justify-center'
            >
              <Image
                src={ImageGalleryPhotos[activeImageIndex].image}
                alt={ImageGalleryPhotos[activeImageIndex].alt}
                width={ImageGalleryPhotos[activeImageIndex].width}
                height={ImageGalleryPhotos[activeImageIndex].height}
                placeholder='blur'
                className={mergeClasses(
                  'relative inset-0 shadow-md pointer-events-none top-4 left-8 rounded-lg',
                  ImageGalleryPhotos[activeImageIndex].rotate,
                )}
                style={{
                  height: ImageGalleryPhotos[activeImageIndex].height,
                  width: ImageGalleryPhotos[activeImageIndex].width,
                }}
              />
            </motion.div>
          </div>
        </div>
      </AnimatePresence>
    </>
  );
}
