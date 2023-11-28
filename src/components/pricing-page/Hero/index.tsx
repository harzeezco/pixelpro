import React from 'react';
import Container from '../../shared/container';
import Switch from '../../ui/switch';
import Card from '../card';

const PRICING_DATA = [
  {
    id: 0,
    img: 'setting.svg',
    type: 'Free',
    monthlyPrice: 0,
    yearlyPrice: 0,
    plan: ['month', 'year'],
    getList: [
      '60 Credits',
      '15 GB Storage',
      '15 GB Bandwidth, or',
      'PixelPro Transformations 45',
      '13.5K Basic Transformations',
    ],
  },
  {
    id: 1,
    img: 'starter.svg',
    type: 'Starter',
    monthlyPrice: 19,
    yearlyPrice: 150,
    plan: ['month', 'year'],
    getList: [
      '400 Credits',
      '100 GB Storage',
      '100 GB Bandwidth, or',
      'PixelPro Transformations 400',
      '90K Basic Transformations',
      '24/7 Support',
    ],
  },
  {
    img: 'basic.svg',
    type: 'Basic',
    monthlyPrice: 79,
    yearlyPrice: 0,
    plan: ['month', 'year'],
    getList: [
      '1200 Credits',
      '500 GB Storage',
      '500 GB Bandwidth, or',
      'PixelPro Transformations 1200',
      '340K Basic Transformations',
      '24/7 Support',
    ],
  },
  {
    img: 'setting.svg',
    type: 'Premium',
    monthlyPrice: 299,
    yearlyPrice: 0,
    plan: ['month', 'year'],
    getList: [
      '6000 Credits',
      '1.8 TB Storage',
      '1.8 TB Bandwidth, or',
      'PixelPro Transformations 5000',
      '1.5MK Basic Transformations',
      '24/7 Support',
    ],
  },
];

function Hero() {
  return (
    <section>
      <Container className='text-center'>
        <h1 className='text-[42px] font-semibold leading-[50px] text-white md:text-[45px] lg:text-[75px] lg:leading-[85px]'>
          Plans and <span className='bg-pink-gradient'>Pricing</span>
        </h1>
        <p className='my-5 text-base text-gray-500'>
          Choose a plan that fits your requirements the best
        </p>
        <div className='flex items-center gap-3 justify-center font-medium'>
          <p className='text-2xl'>Monthly</p>
          <Switch />
          <p className='text-2xl'>Yearly</p>
          <span className='font-normal ml-3'>
            <span className='text-yellow-500'>15%</span> off for yearly
          </span>
        </div>
        <div className='grid grid-cols-4 gap-5 mt-16'>
          {PRICING_DATA.map((details) => (
            <Card {...details} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Hero;
