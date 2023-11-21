import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from '../shared/container';
import Nav from './nav';
import Button from '../shared/button';

function Header() {
  return (
    <header>
      <Container classNames='justify-between items-center px-6 h-[96px] flex'>
        <Link href='/'>
          <Image src='/svg/logo.svg' width={132} height={32} alt='logo' />
        </Link>

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
