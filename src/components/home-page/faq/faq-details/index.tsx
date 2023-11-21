/* eslint-disable jsx-a11y/label-has-associated-control */
import Image from 'next/image';
import React from 'react';

function FAQDetails({
  title,
  label,
  isOpen,
}: {
  title: string;
  label: string;
  isOpen: boolean;
}) {
  return (
    <article>
      <div>
        <h3>How to remove the background of a picture for free?</h3>
        <div>
          <Image src='/svg/open.svg' alt='' width={14} height={14} />
        </div>
      </div>
      <blockquote>
        To remove the background of a picture, go to
        PixelPro.co/remove-background, and upload your image. PixelPro will
        remove the background for you, and you will be able to download your HD
        image for free.
      </blockquote>
    </article>
  );
}

export default FAQDetails;
