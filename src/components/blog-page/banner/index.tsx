import React from 'react';
import './index.css';

function Banner() {
  return (
    <div
      id='banner'
      className='relative grid h-[40vh] w-full place-items-center'
    >
      <h1 className='text-center text-4xl font-semibold lg:text-5xl lg:leading-[75px]'>
        Our latest <span className='bg-pink-gradient'>blogs</span>
      </h1>
    </div>
  );
}

export default Banner;
