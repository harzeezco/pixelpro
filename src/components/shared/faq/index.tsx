/* eslint-disable no-confusing-arrow */

'use client';

import Container from '@/components/shared/container';
import React, { useState } from 'react';
import FAQDetails from './faq-details';

const FAQ_ASKED_QUESTIONS = [
  {
    id: 0,
    title: 'How to remove the background of a picture for free?',
    label:
      'To remove the background of a picture, go to PixelPro.co/remove-background, and upload your image. PixelPro will remove the background for you, and you will be able to download your HD image for free.',
    isOpen: false,
  },
  {
    id: 1,
    title: 'How to remove an object from a picture?',
    label:
      'To remove the background of a picture, go to PixelPro.co/remove-background, and upload your image. PixelPro will remove the background for you, and you will be able to download your HD image for free.',
    isOpen: false,
  },
  {
    id: 2,
    title: 'How to remove a person from a picture?',
    label:
      'To remove the background of a picture, go to PixelPro.co/remove-background, and upload your image. PixelPro will remove the background for you, and you will be able to download your HD image for free.',
    isOpen: false,
  },
  {
    id: 3,
    title: 'How to remove watermark?',
    label:
      'To remove the background of a picture, go to PixelPro.co/remove-background, and upload your image. PixelPro will remove the background for you, and you will be able to download your HD image for free.',
    isOpen: false,
  },
  {
    id: 4,
    title: 'How to remove background from picture on iPhone?',
    label:
      'To remove the background of a picture, go to PixelPro.co/remove-background, and upload your image. PixelPro will remove the background for you, and you will be able to download your HD image for free.',
    isOpen: false,
  },
  {
    id: 5,
    title: 'How to remove background from picture on Android?',
    label:
      'To remove the background of a picture, go to PixelPro.co/remove-background, and upload your image. PixelPro will remove the background for you, and you will be able to download your HD image for free.',
    isOpen: false,
  },
];

function FAQ() {
  const [questions, setQuestions] = useState(FAQ_ASKED_QUESTIONS);

  const handleQuestion = (id: number) => {
    setQuestions((prev) =>
      prev.map((question) =>
        question.id === id
          ? { ...question, isOpen: !question.isOpen }
          : { ...question },
      ),
    );
  };

  return (
    <section id='FAQ'>
      <Container aria-labelledby='FAQ' className='mt-10'>
        <h1 className='text-secondary-gradient common-gradient-clx text-center text-4xl font-semibold lg:text-7xl'>
          FAQs
        </h1>
        <div className='mt-14'>
          {questions?.map((details) => (
            <FAQDetails
              key={details.id}
              details={details}
              onClick={handleQuestion}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FAQ;
