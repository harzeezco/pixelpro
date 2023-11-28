import mergeClasses from '@/lib/utils';
import React, { ReactNode } from 'react';

type ButtonProp = {
  children: string | ReactNode;
  variant: string;
  large?: boolean;
};

function Button({
  children = null,
  variant = 'blue',
  large = false,
}: ButtonProp) {
  switch (variant) {
    case 'log-in':
      return (
        <button
          type='button'
          className='rounded-[30px] border-[1.5px] border-solid border-white bg-inherit px-[22px] py-2 transition-pop-up hover:bg-white hover:text-black'
        >
          {children}
        </button>
      );
    case 'sign-up':
      return (
        <button
          type='button'
          className='rounded-[18px] border-[1.5px] bg-white px-[18px] py-2 text-black transition-pop-up'
        >
          {children}
        </button>
      );
    case 'blue':
      return (
        <button
          type='button'
          className={mergeClasses(
            'btn-blue flex w-auto items-center justify-center rounded-[25px] border-none bg-blue-700 px-[30px] py-3 font-semibold text-white transition-pop-up',
            large ? 'w-full' : '',
          )}
        >
          {children}
        </button>
      );
    default:
      return null;
  }
}

export default Button;
