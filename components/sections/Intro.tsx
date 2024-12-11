/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/moving-border';

const Intro = () => {
  return (
    <>
      <section className="w-full h-auto">
        <div
          id="about"
          className="text-4xl xs:text-3xl text-gradient font-bold"
        >
          About Us
        </div>

        <div className="flex flex-col xs:flex-col-reverse gap-[20px]  justify-between items-center md:flex-row w-full h-full py-6">
          <div className="w-full md:w-2/5 md:h-full flex flex-col gap-1">
            <h1 className="font-bold text-4xl xs:text-3xl">
              Hybrid Battery Solutions of San Leandro{' '}
              <small className="text-xs text-gradient">
                Established in 2017
              </small>
              <Image
              src={'/logotransparent.png'}
              width={32}
              height={32}
              alt='logo'
              className='inline-block pl-2'
              /> 
            </h1>
            <p>
              We specialize in{' '}
              <strong>hybrid battery sales, replacements, and repairs</strong>,
              providing you with a seamless experience tailored to your needs.
              Our expert battery repair and reconditioning services not only
              extend battery life but also enhance efficiency and save you
              money.
            </p>
            <h2 className="font-bold pt-4 italic">Why Choose Us?</h2>
            <ul className="flex flex-col gap-1">
              <li>
                <strong className="text-gradient">
                  Expertise You Can Trust:
                </strong>{' '}
                Our skilled technicians are dedicated to extending the life of
                your hybrid battery while enhancing your vehicle's performance.
              </li>
              <li>
                <strong className="text-gradient">
                  Cost-Effective Solutions:
                </strong>{' '}
                Save money with our affordable repair and reconditioning
                services that restore your battery's efficiency without breaking
                the bank.
              </li>
              <li>
                <strong className="text-gradient">
                  Convenient Service Options:
                </strong>{' '}
                Enjoy the flexibility of on-site repairs or drop by our
                location—whichever works best for you!
              </li>
            </ul>
            <small className="italic pt-1 text-gradient">
              All our work is guaranteed, labor and installation is included.  NO HIDDEN FEES.
            </small>
            <div className="mt-8 xs:self-center">
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 font-bold cursor-pointer px-3"
              >
                <a href="tel:5104141929">Request Service</a>
              </Button>
            </div>
          </div>

          <div className="w-full md:w-3/5 bg-red-50 h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl relative">
            <Image
              src={'/prius3.png'}
              fill
              style={{ objectFit: 'cover', objectPosition: 'calc(50% + 0px) center' }}
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
