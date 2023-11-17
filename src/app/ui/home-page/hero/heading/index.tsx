import React from 'react';

function Heading() {
  return (
    <h1 className='text-white lg:text-85 lg:first-letter:leading-[98px] font-bold text-center text-[42px] leading-[50px] md:text-[55px]'>
      Create stunning visuals
      <br />
      <span>
        <svg
          className='lg:w-[45rem] w-[25rem] md:w-[35rem] mx-auto '
          viewBox='0 0 72 12'
          xmlns='http://www.w3.org/2000/svg'
        >
          <defs>
            <linearGradient id='G' spreadMethod='reflect'>
              <stop offset='0%' stopColor='#FFCB01' />
              <stop offset='50%' stopColor='#FFA500' />
              <stop offset='100%' stopColor='#FF5993' />
              <animateTransform
                attributeName='gradientTransform'
                type='translate'
                values='-0.5;1.5;-0.5'
                dur='5s'
                repeatDur='indefinite'
              />
            </linearGradient>
          </defs>

          <text
            x='50%'
            y='9'
            textAnchor='middle'
            fontFamily='consolas'
            fontSize='10'
            fill='url(#G)'
          >
            in seconds
          </text>
        </svg>
      </span>
    </h1>
  );
}

export default Heading;
