import React from 'react';

type TextGradientProp = {
  text: string;
  firstColor: string;
  secondColor: string;
  lastColor: string;
};

function TextGradient({
  text = '',
  firstColor = '',
  secondColor = '',
  lastColor = '',
}: TextGradientProp) {
  return (
    <svg
      className='lg:w-[45rem] w-[25rem] md:w-[35rem] mx-auto'
      viewBox='0 0 72 12'
      xmlns='http://www.w3.org/2000/svg'
    >
      <defs>
        <linearGradient id='G' spreadMethod='reflect'>
          <stop offset='0%' stopColor={firstColor} />
          <stop offset='50%' stopColor={secondColor} />
          <stop offset='100%' stopColor={lastColor} />
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
        fontSize='10'
        fill='url(#G)'
        fontFamily='inherit'
        className='font-semibold'
      >
        {text}
      </text>
    </svg>
  );
}

export default TextGradient;
