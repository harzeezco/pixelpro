import Container from '@/app/components/container';
import React from 'react';
import TextGradient from '../../text-gradient';

function Features() {
  return (
    <section>
      <Container classNames='flex-col items-center'>
        <h1 className=''>
          Meet your new
          <TextGradient
            firstColor='#AC2EF8'
            secondColor='#AC2EF8'
            lastColor='#FF5993'
            text='AI design'
          />
          <br />
          <TextGradient
            firstColor='#AC2EF8'
            secondColor='#AC2EF8'
            lastColor='#FF5993'
            text='assistant'
          />
        </h1>
        <p>
          Save days of productivity by letting ClipDrop’s artificial
          intelligence do the boring and time-consuming tasks.
        </p>
      </Container>
    </section>
  );
}

export default Features;
