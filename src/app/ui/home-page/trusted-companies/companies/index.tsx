import React from 'react';
import Image from 'next/image';
import './index.css';

const COMPANIES = [
  {
    id: 0,
    img: 'adobe.png',
    href: 'https://www.adobe.com/',
    alt: 'adobe logo',
  },
  {
    id: 0,
    img: 'amazon.png',
    href: 'https://www.microsoft.com/',
    alt: 'amazon logo',
  },
  {
    id: 0,
    img: 'shopify.png',
    href: 'https://www.shopify.com/',
    alt: 'shopify logo',
  },
  {
    id: 0,
    img: 'shopee.png',
    href: 'https://shopee.com/',
    alt: 'shopee logo',
  },
  {
    id: 0,
    img: 'instagram.png',
    href: 'https://www.instagram.com/',
    alt: 'instagram logo',
  },
  {
    id: 0,
    img: 'figma.png',
    href: 'https://www.figma.com/',
    alt: 'figma logo',
  },
  {
    id: 0,
    img: 'adobe.png',
    href: 'https://www.adobe.com/',
    alt: 'adobe logo',
  },
  {
    id: 0,
    img: 'adobe.png',
    href: 'https://www.adobe.com/',
    alt: 'adobe logo',
  },
];

function Companies() {
  return (
    <ul className='slides items-center gap-6 lg:flex'>
      {COMPANIES.map((details) => (
        <li key={details.id} className='hover:scale-105 transition-all ease-in cursor-pointer'>
          <Image
            src={`/png/companies/${details.img}`}
            alt={details.alt}
            height={90}
            width={174}
          />
        </li>
      ))}
    </ul>
  );
}

export default Companies;
