import React from 'react';
import Image from 'next/image';
import mergeClasses from '@/app/lib/utils';
import { POPUPDETAILS } from '@/app/lib/data';

type PopupProp = {
  isPopup: boolean;
};

function Popup({ isPopup }: PopupProp) {
  return (
    <div
      className={mergeClasses(
        'flex gap-x-3 w-full max-w-[670px] mx-auto bg-gray-100 top-20 py-7 px-3 items-center rounded-lg fixed left-[25%] transition-pop-up ease-in-out',
        isPopup ? 'h-[140px] opacity-1 visible' : 'opacity-0 invisible',
      )}
      aria-hidden='true'
    >
      {POPUPDETAILS.map((details) => (
        <div key={details.id} className='relative'>
          <Image
            src={`/png/pop-up/${details.img}`}
            width={170}
            height={130}
            alt={details.alt}
            className='w-[190px]'
          />
          <span
            className={mergeClasses(
              'absolute top-1/2 left-1/2 transform -translate-y-1/2 translate-x-[-50%] whitespace-nowrap font-semibold',
            )}
          >
            {details.title}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Popup;
