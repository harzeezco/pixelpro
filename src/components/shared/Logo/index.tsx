import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Logo({ ...props }) {
  return (
    <Link href='/'>
      <Image {...props} src='/svg/logo.svg' alt='logo' />
    </Link>
  );
}

export default Logo;
