import React from 'react';

function HeadLine({
  upperText = 'Create stunning visuals',
  bottomText = 'in seconds',
}: {
  upperText?: string;
  bottomText?: string;
}) {
  return (
    <h1 className='text-center text-[42px] font-semibold leading-[45px] text-white md:text-[55px] md:leading-[65px] lg:text-85 lg:leading-[98px]'>
      {upperText}
      <br />
      <span className='text-primary-gradient common-gradient-clx'>
        {bottomText}
      </span>
    </h1>
  );
}

HeadLine.defaultProps = {
  upperText: 'Create stunning visuals',
  bottomText: 'in seconds',
};

export default HeadLine;
