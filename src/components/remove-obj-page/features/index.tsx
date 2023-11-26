import React from 'react';
import Container from '@/components/shared/container';
import FeatureDetails from '@/components/shared/Feature';

const FEATURE_DATA = [
  {
    gradientText: 'Onlookers',
    gradientPosition: 'middle',
    noGradientText: 'Remove',
    bottomText: 'from Pictures',
    img: 'feature-tourist.png',
    label: [
      "Unintentional visitors may appear in your stunning trip photograph. After the figures are taken out of the pictures, you may add more stickers or use filters from BeautyPlus' editing programs to give them a final polish.",
    ],
    uniqueFeatures: [],
    href: '',
    className: 'bg-blue-gradient',
  },
  {
    gradientText: 'Friend',
    gradientPosition: 'bottom',
    noGradientText: 'Remove Your',
    bottomText: '',
    img: 'feature-tour.png',
    label: [
      "Even after relationships have deteriorated, there are some locations and memories that may be cherished forever. Using the Object Remover tool, we can assist you in saving your pictures and preserving those memories. Cut undesirable individuals from photographs as if they didn't exist.",
    ],
    uniqueFeatures: [],
    href: '',
    className: 'bg-gradient',
  },
];

function Features() {
  return (
    <section className='my-10 pt-20'>
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
