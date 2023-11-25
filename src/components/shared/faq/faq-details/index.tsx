/* eslint-disable jsx-a11y/label-has-associated-control */
import mergeClasses from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

type FAQDetailsProps = {
  details: {
    title: string;
    label: string;
    isOpen: boolean;
    id: number;
  };
};

type Onclprop = {
  onClick: (id: number) => void;
};

function FAQDetails({ details, onClick }: FAQDetailsProps & Onclprop) {
  return (
    <article
      className='mx-auto my-5 max-w-[770px] cursor-pointer rounded-[10px] bg-dark-700 p-4'
      onClick={() => onClick(details.id)}
      role='presentation'
    >
      <div className='flex items-center justify-between gap-8'>
        <h3 className='text-base font-medium md:text-[20px] md:leading-9'>
          {details.title}
        </h3>
        <div
          className={mergeClasses(
            'flex items-center justify-center rounded-full p-2 border border-solid border-[#E8E8E8] transition-all',
            details.isOpen ? 'bg-white' : 'bg-inherit',
          )}
        >
          <Image
            src={`${details.isOpen ? '/svg/open.svg' : '/svg/close.svg'}`}
            alt=''
            width={14}
            height={14}
            className='h-[14px]'
          />
        </div>
      </div>
      <blockquote
        className={mergeClasses(
          details.isOpen
            ? 'opacity-100 visible pt-4 pb-6'
            : 'h-0 opacity-0 invisible',
          'transition-all text-gray-500',
        )}
      >
        {details.label}
      </blockquote>
    </article>
  );
}

export default FAQDetails;
