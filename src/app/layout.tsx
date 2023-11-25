import React from 'react';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

const font = localFont({
  src: [
    {
      path: '../../public/fonts/Switzer-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Switzer-Medium.woff',
      weight: '500',
    },
    {
      path: '../../public/fonts/Switzer-Semibold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Switzer-Bold.woff',
      weight: '700',
      style: 'italic',
    },
  ],
});

export const metadata: Metadata = {
  title: 'PixelPro - Background Remover',
  description:
    'PixelPro - An AI website Removing background from Images without reducing quality',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${font.className} bg-body text-white`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
