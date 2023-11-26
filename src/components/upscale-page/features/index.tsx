import React from 'react';
import Container from '@/components/shared/container';
import FeatureDetails from '@/components/shared/Feature';

const FEATURE_DATA = [
  {
    gradientText: 'Features',
    gradientPosition: 'bottom',
    noGradientText: 'Unique',
    bottomText: '',
    img: 'source-code.png',
    label: [
      'Upscale and enhance your images using our powerful AI technology with only a few clicks',
    ],
    uniqueFeatures: [
      'Automatic & Quick Results',
      'Increase Resolution',
      'Retain Details',
    ],
    href: '',
    className: 'bg-gradient',
  },
  {
    gradientText: 'Upscale',
    gradientPosition: 'top',
    noGradientText: "any Individual's Photo",
    bottomText: '',
    img: 'snapshot.png',
    label: [
      "Enhancement has never been this simple, but with AI's assistance, it can be completed in a matter of seconds without the need for pricy tools.",
    ],
    uniqueFeatures: [],
    href: '',
    className: 'bg-purple-gradient',
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
              layoutType={idx % 2 === 0 ? 'default' : 'reverse'}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Features;
