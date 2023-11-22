import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FooterNav from './nav';
import Container from '../shared/container';

function Footer() {
  return (
    <footer className='mt-24 bg-dark-700 pb-12 pt-24'>
      <Container classNames='grid lg:grid-cols-[37%_63%] mb-14'>
        <div className='max-w-[74%]'>
          <Link href='/' className='mb-3 inline-block'>
            <Image
              src='/svg/logo.svg'
              width={132}
              height={62}
              alt='logo'
              className='w-[190px]'
            />
          </Link>
          <span className='block py-2 text-sm'>
            PixelPro is a smart AI background removal and image editor tool that
            lets you edit single or bulk images with precision.
          </span>
        </div>
        <FooterNav />
      </Container>
      <div className='text-center'>
        <span>
          Copyright <span>{new Date().getFullYear()}</span> zeezco.dev
        </span>
      </div>
    </footer>
  );
}

export default Footer;
