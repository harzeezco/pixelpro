import Button from '@/components/shared/button';
import mergeClasses from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

function Card({ img, type, monthlyPrice, yearlyPrice, plan, getList }) {
  return (
    <div
      className={mergeClasses(
        'p-5 grid gap-4 pt-8 place-items-center bg-dark-700 rounded-2xl border-2 border-solid border-gray-100 relative',
        type === 'Starter' ? 'starter' : '',
      )}
    >
      <div className='rounded-full p-4 flex items-center justify-center bg-gray-100'>
        <Image src={`/svg/${img}`} alt='' width={30} height={30} />
      </div>
      <p className='text-gray-500 text-2xl font-medium'>{type}</p>

      <h3 className='text-6xl font-semibold mt-2'>{`$${monthlyPrice}`}</h3>
      <span className='text-gray-500'>per {plan[0]}</span>
      <Button variant='blue' large>
        Sign up now
      </Button>

      <p className='mt-3 text-gray-500'>What's included?</p>
      <div className='border-t border-t-gray-300 w-full grid gap-3 pt-4'>
        {getList.map((item) => (
          <div className='flex items-center justify-start gap-2'>
            <Image src='/svg/marked.svg' alt='' width={20} height={20} />
            <p className='text-sm whitespace-nowrap'>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
