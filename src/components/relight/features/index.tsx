import React from 'react';
import Container from '@/components/shared/container';
import FeatureDetails from '@/components/shared/Feature';

const FEATURE_DATA = [
  {
    gradientText: 'RGB effects',
    gradientPosition: 'bottom',
    noGradientText: 'Light up your photos with',
    bottomText: '',
    img: 'snapshot-1.png',
    label: [
      "Enhancement has never been this simple, but with AI's assistance, it can be completed in a matter of seconds without the need for pricy tools.",
    ],
    uniqueFeatures: [],
    href: '',
    className: 'bg-pink-gradient',
  },
  {
    gradientText: 'PixelPro!',
    gradientPosition: 'bottom',
    noGradientText: 'Effortlessly Color Any Image with',
    bottomText: '',
    img: 'snapshot-2.png',
    label: [
      "Enhancement has never been this simple, but with AI's assistance, it can be completed in a matter of seconds without the need for pricy tools.",
    ],
    uniqueFeatures: [],
    href: '',
    className: 'bg-blue-gradient',
  },
];

function Features() {
  return (
    <section className='my-10 pt-20'>
      <Container>
        <div className='grid gap-32'>
          {FEATURE_DATA.map((details, idx) => (
            <FeatureDetails
              {...details}
              layoutType={idx % 2 === 0 ? 'reverse' : 'default'}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Features;
