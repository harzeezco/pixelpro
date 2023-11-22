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
    console.log(id);
    setQuestions((prev) =>
      prev.map((question) =>
        question.id === id
          ? { ...question, isOpen: !question.isOpen }
          : { ...question },
      ),
    );
  };

  return (
    <section className='my-32'>
      <Container classNames=''>
        <h1 className='wrap text-center text-7xl font-semibold'>FAQs</h1>
        <div className='mt-16'>
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
