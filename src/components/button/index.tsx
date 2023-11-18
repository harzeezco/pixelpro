import React, { ReactNode } from 'react';

type ButtonProp = {
  children: string | ReactNode;
  variant: string;
};

function Button({ children = null, variant = 'blue' }: ButtonProp) {
  switch (variant) {
    case 'log-in':
      return (
        <button
          type='button'
          className='rounded-[18px] py-2 px-[18px] bg-inherit hover:bg-white transition-pop-up hover:text-black border-[1.5px] border-white border-solid'
        >
          {children}
        </button>
      );
    case 'sign-up':
      return (
        <button
          type='button'
          className='rounded-[18px] py-2 px-[18px] bg-white transition-pop-up text-black border-[1.5px]'
        >
          {children}
        </button>
      );
    case 'blue':
      return (
        <button
          type='button'
          className='rounded-[25px] py-3 px-[30px] bg-blue-700 transition-pop-up text-white border-none font-semibold w-auto'
        >
          {children}
        </button>
      );
    default:
      return null;
  }
}

export default Button;
