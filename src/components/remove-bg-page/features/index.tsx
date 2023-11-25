import React from 'react';
import Container from '@/components/shared/container';
import FeatureDetails from '@/components/shared/Feature';

const FEATURE_DATA = [
  {
    gradientText: 'Backgrounds Remove',
    gradientPosition: 'top',
    noGradientText: 'in a matter of seconds',
    bottomText: '',
    img: 'capman.png',
    label: [
      'Our online background remover quickly spots the subject in any photograph and produces a clean cutout for you.',
    ],
    uniqueFeatures: [
      'Automatic & Quick Results',
      'Increase Resolution',
      'Retain Details',
    ],
    href: '',
    className: 'bg-blue-gradient',
  },
  {
    gradientText: 'integrations',
    gradientPosition: 'bottom',
    noGradientText: 'Speed up your workflow with our',
    bottomText: '',
    img: 'tools.png',
    label: [
      'Instantly remove unwanted objects and defects. With just a swipe of your fingertip, you can make sure your snapshots are flawless.',
      "To enhance your productivity and workflow, we've also integrated plugins straight into the top design tools, software, applications, and eCommerce platforms.",
    ],
    uniqueFeatures: [],
    href: '',
    className: 'bg-gradient',
  }
];

function Features() {
  return (
    <section className='my-10'>
      <Container>
        <div className='grid gap-20'>
          {FEATURE_DATA.map((details, idx) => (
            <FeatureDetails
              {...details}
              layoutType={idx % 2 === 0 ? 'default' : 'reverse'}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Features;
