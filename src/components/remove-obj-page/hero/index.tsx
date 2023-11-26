import Image from "next/image";
import React from "react";
import Container from "@/components/shared/container";
import RandomImages from "@/components/shared/random-images";
import UploadImageBox from "@/components/shared/upload-img-box";

function Hero() {
  return (
    <section>
      <Container className='grid md:grid-cols-[60%_40%]'>
        <div className='mt-2'>
          <h1 className='text-[42px] font-semibold leading-[50px] text-white md:text-[45px] lg:text-[75px] lg:leading-[85px]'>
            <span className='whitespace-nowrap'>
              <span className='bg-pink-gradient'>Remove object</span>{' '}
              <span>from</span>
            </span>{' '}
            your Pictures in Seconds
          </h1>
          <UploadImageBox />
          <RandomImages />
        </div>
        <Image
          src='/png/remove-obj/tourist.png'
          alt=''
          width={596}
          height={439}
          className='h-[500px] w-[596px]'
        />
      </Container>
    </section>
  );
}

export default Hero;
