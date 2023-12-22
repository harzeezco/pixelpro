import Container from '@/components/shared/container';
import React from 'react';

const PRIVACYDETAILS = [
  {
    id: 0,
    title: 'General',
    label: [
      'PixelPro is administered and conducted by Shopsense Retail Technologies Limited ("PixelPro," "we," "us," or "our"), an organization incorporated under the Companies Act, 1988. Our registered office is located at 9th Floor, Ajit Nagar, Konderite,  4093. PixelPro operates as a subsidiary of Reliance Retail Ventures Limited.',
    ],
  },
  {
    id: 1,
    title: 'Type of Information Collected',
    label: [
      'You may be requested to provide your information whenever you visit, access, use, or browse the Platform. We may share this information and utilize it in accordance with the guidelines outlined in this Privacy Policy. Additionally, we may combine it with other information to deliver and enhance our Services, content, and advertising.',
    ],
  },
  {
    id: 2,
    title: 'Use of Information Collected',
    label: [
      'You may be requested to provide your information whenever you visit, access, use, or browse the Platform. We may share this information and utilize it in accordance with the guidelines outlined in this Privacy Policy. Additionally',
      'PixelPro is administered and conducted by Shopsense Retail Technologies Limited You may be requested to provide your information whenever you visit, access, use, or browse the Platform. We may share this information and utilize it in accordance with the guidelines outlined in this Privacy Policy. Additionally',
    ],
  },
  {
    id: 3,
    title: 'Disclosure & Storage of Information Collected',
    label: [
      'You may be requested to provide your information whenever you visit, access, use, or browse the Platform. We may share this information and utilize it in accordance with the guidelines outlined in this Privacy Policy.',
      'You may be requested to provide your information whenever you visit, access, use, or browse the Platform.We may share this information and utilize it in accordance with the guidelines outlined in this Privacy Policy. Additionally, we may combine it with other information to deliver and enhance our Services, content, and advertising.',
    ],
  },
  {
    id: 4,
    title: 'Security',
    label: [
      'You may be requested to provide your information whenever you visit, access, use, or browse the Platform. We may share this information and utilize it in accordance with the guidelines outlined in this Privacy Policy.',
    ],
  },
  {
    id: 5,
    title: 'Cookies Policy',
    label: [
      'You may be requested to provide your information whenever you visit, access, use, or browse the Platform. We may share this information and utilize it in accordance with the guidelines outlined in this Privacy Policy.',
    ],
  },
];

function PrivacyPolicy() {
  return (
    <main className='mt-14'>
      <Container>
        {' '}
        <h1 className='mb-3 text-center text-4xl font-semibold lg:text-5xl lg:leading-[75px]'>
          Privacy Policy
        </h1>
        <p className='mx-auto mb-8 mt-5 text-center text-base text-gray-500 lg:max-w-2xl'>
          This privacy policy explains how we use information from our customers
          and how we save, delete and use it. Our goal is to gain your trust.
        </p>
        <hr className='border-gray-400' />
        <ul className='mt-10'>
          {PRIVACYDETAILS.map((details, idx) => (
            <li key={details.id} className='mb-10'>
              <h3 className='text-2xl font-semibold'>
                {`${idx + 1}. ${details.title}`}
              </h3>
              {details.label.map((label) => (
                <p className='py-2 text-gray-500'>{label}</p>
              ))}
            </li>
          ))}
        </ul>
      </Container>
    </main>
  );
}

export default PrivacyPolicy;
