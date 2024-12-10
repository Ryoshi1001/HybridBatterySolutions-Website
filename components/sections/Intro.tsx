/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/moving-border';

const Intro = () => {
  return (
    <>
      <section className="w-full h-fit">
        <div id="about" className="text-4xl xs:text-3xl text-gradient font-bold">
          About Us
        </div>

        <div className="flex flex-col gap-[20px]  justify-center items-center md:flex-row w-full h-full py-4">
          <div className="w-full md:w-2/5 md:h-full flex flex-col gap-1">
            <h1 className="font-bold text-4xl xs:text-3xl">
              Hybrid Battery Solutions of San Leandro{' '}
              <small className="text-xs text-gradient">
                Established in 2017
              </small>
            </h1>
            <p>
              Revitalize your hybrid vehicle's performance with our expert
              battery repair and reconditioning services. We extend battery
              life, enhance efficiency, and save you money.
            </p>
            <small className="italic">
              All our work is guaranteed, labor and installation is included.
            </small>
            <div className="mt-8 xs:self-center">
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 font-bold cursor-pointer"
              >
                <a href="tel:5104141929">Call Now</a>
              </Button>
            </div>
          </div>

          <div className="w-full md:w-3/5 md:h-full relative">
            <Image
              src={'/prius3.png'}
              width={1800}
              height={1800}
              alt="hybrid car"
              className="rounded-3xl"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
