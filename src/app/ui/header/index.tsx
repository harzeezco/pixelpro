import Container from '@/app/components/container';
import Image from 'next/image';
import React from 'react';
import Nav from './nav';
import Button from '../button';

function Header() {
  return (
    <header>
      <Container classNames='justify-between items-center px-6 h-[96px]'>
        <Image src='/svg/logo.svg' width={132} height={32} alt='logo' />

        <nav className='hidden lg:flex'>
          <Nav />
        </nav>
        <div className='hidden lg:flex gap-x-5'>
          <Button variant='log-in'>Log in</Button>
          <Button variant='sign-up'>Sign up for free</Button>
        </div>
        <div className='lg:hidden'>
          <Image src='/svg/menu.svg' alt='' width={30} height={30} />
        </div>
      </Container>
    </header>
  );
}

export default Header;
