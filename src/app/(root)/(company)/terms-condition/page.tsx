import Container from '@/components/shared/container';
import React from 'react';

const PRIVACYDETAILS = [
  {
    id: 0,
    title: '',
    label: [
      'The Terms and Conditions of use described here ("Terms") establish an agreement between Shopsense Retail Technologies Limited ("PixelPro," "we," "us," or "our"), a company incorporated under the Companies Act, 1956. Our registered office is situated at 9th Floor, 4093. PixelPro operates as a subsidiary of Reliance Retail Ventures Limited. These Terms apply to any individual or legal entity that accesses and/or uses the Platform in any manner (referred to as "you," "your," "User"), or utilizes any present or future service, functionality, or offer made available on the Platform ("Services"), as periodically updated.',
    ],
  },
  {
    id: 1,
    title: 'Limitation of Liability',
    label: [
      'PixelPro has developed a Web Application known as the website, which provides Users with a unified platform to manage, transform, and deliver their media using various tools and solutions available on the Platform. It offers a user-friendly solution for individuals and businesses working with images, significantly reducing the complexity, cost, and time required to deliver impressive visuals.',
    ],
  },
  {
    id: 2,
    title: 'License',
    label: [
      'We strongly discourage you to offer our plugins, modified or unmodified, for redistribution or resale of any kind. Moreover, you must be aware that the license key ensures that the plugin will work fine even if you have canceled your subscription. In case someone manages to download one of our plugins without a valid license key, the payment provider stores all his details for future reference and refunds only one month later.',
    ],
  },
  {
    id: 3,
    title: 'Ownership and Liability',
    label: [
      'Creators, marketers, developers, entrepreneurs, and anyone else can utilize the Platform to swiftly transition from concept to a live product, delivering visually captivating graphics without the complications of expensive licenses and convoluted workflows.',
      'With its extensive media storage, intuitive folder structures, and the ability to optimize images without code, PixelPro enables effective collaboration within teams. Developers can also integrate their systems using our. We strongly discourage you to offer our plugins, modified or unmodified, for redistribution or resale of any kind. Moreover, you must be aware that the license key ensures that the plugin will work fine even if you have canceled your subscription.',
    ],
  },
  {
    id: 4,
    title: 'Ownership and Liability',
    label: [
      'We strongly discourage you to offer our plugins, modified or unmodified, for redistribution or resale of any kind. Moreover, you must be aware that the license key ensures that the plugin will work fine even if you have canceled your subscription. In case someone manages to download one of our plugins without a valid license key, the payment provider stores all his details for future reference and refunds only one month later.',
      'Moreover, you must be aware that the license key ensures that the plugin will work fine even if you have canceled your subscription. In case someone manages to download one of our plugins without a valid license key, the payment provider stores all his details for future reference and refunds only one month later.',
    ],
  },
];

function TermsAndConditions() {
  return (
    <main className='mt-14'>
      <Container>
        {' '}
        <h1 className='text-center text-4xl font-semibold lg:text-5xl lg:leading-[75px]'>
          Terms and Conditions
        </h1>
        <p className='mx-auto mb-8 text-center text-base text-gray-500 lg:max-w-2xl'>
          PixelPro is administered and conducted by Shopsense
        </p>
        <hr className='border-gray-400' />
        <ul className='mt-10'>
          {PRIVACYDETAILS.map((details) => (
            <li key={details.id} className='mb-10'>
              <h3 className='text-2xl font-semibold'>{details.title}</h3>
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

export default TermsAndConditions;
