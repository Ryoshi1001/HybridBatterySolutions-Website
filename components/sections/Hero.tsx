'use client';
import { useScroll, useTransform } from 'framer-motion';
import React from 'react';
import { GoogleGeminiEffect } from '../ui/google-gemini-effect';
import { Button } from '../ui/moving-border';
import Image from 'next/image';

const Hero = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref as React.RefObject<HTMLElement>,
    offset: ['start start', 'end start'],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <div
      className="h-screen w-full bg-gradient-radial from-gray-800 via-gray-900 to-black dark:border dark:border-white/[0.1] overflow-hidden relative flex flex-col"
      ref={ref}
    >
      <div className="flex-1 flex flex-col items-center justify-start pt-8  xs:pt-14 sm:pt-12 md:pt-16 lg:pt-14 xl:pt-34 z-10">
        <Image
          src={'/LOGOMinified.png'}
          width={248}
          height={248}
          alt="companylogo"
          className="rounded-full lg:hidden mb-4"
        />
        <p className="hidden text-base md:text-xl font-normal text-center text-neutral-400 max-w-xl mx-auto mb-4">
          Scroll ☝ up to see our services and contact information!
        </p>
        <Image
          src={'/LOGOMinified.png'}
          width={380}
          height={380}
          alt="companylogo"
          className="rounded-full hidden lg:block mb-4"
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <GoogleGeminiEffect
          description="Scroll ☝ Up To See Our Services and Contact Information!"
          title="Hybrid Battery Solutions"
          pathLengths={[
            pathLengthFirst,
            pathLengthSecond,
            pathLengthThird,
            pathLengthFourth,
            pathLengthFifth,
          ]}
        />
      </div>

      
      {/* Outer div for Bottom half content */}
      <div className="absolute inset-0 top-1/2 flex flex-col justify-center items-center z-10">

        {/* Inner div for actual content */}
        <div className="flex flex-col gap-4 flex-grow justify-center items-center pb-8 xs:pb-36 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-24">
          <div className="text-center">
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 font-bold px-3"
            >
              <a href="tel:5104141929">Request Service</a>
            </Button>
            <small className="align-bottom text-zinc-400 text-[12px] block italic mt-1">
              
            </small>
          </div>
          <h1 className="text-center text-lg font-bold lg:block lg:text-xl text-white">
          Bringing Life Back to Your Hybrid!
        </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
