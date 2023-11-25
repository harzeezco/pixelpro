import React from 'react';
import Image from 'next/image';
import Container from '../shared/container';
import Nav from './nav';
import Button from '../shared/button';
import Logo from '../shared/Logo';

function Header() {
  return (
    <header>
      <Container className='flex h-[96px] items-center justify-between p-14 pb-0'>
        <Logo width={132} height={32} />

        <nav className='hidden lg:flex'>
          <Nav />
        </nav>
        <div className='hidden gap-x-5 lg:flex'>
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
