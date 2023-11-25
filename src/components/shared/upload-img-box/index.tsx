import Button from '@/components/shared/button';
import React from 'react';

function UploadImageBox() {
  return (
    <div className='mt-10 flex max-w-lg flex-col items-center gap-2 rounded-2xl border-[1.5px] border-dotted border-white bg-gray-100 p-8'>
      <Button variant='blue'>
        <span className='mr-2 inline-block rounded-full bg-white p-[5px]'>
          <svg
            width='10'
            height='10'
            viewBox='0 0 10 10'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1 5L9 5M5 1L5 9'
              stroke='#0058FF'
              strokeWidth='1.4'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </span>{' '}
        Upload Image
      </Button>
      <span className='text-sm font-medium text-gray-500'>
        Drop an image or paste
      </span>
    </div>
  );
}

export default UploadImageBox;
