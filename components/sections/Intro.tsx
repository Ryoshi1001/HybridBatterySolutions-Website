/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/moving-border';

const Intro = () => {
  return (
    <>
      <section className="w-full h-auto">
        <h3 id="about" className="text-4xl xs:text-3xl text-gradient font-bold">
          About Us 
        </h3>
        <div className="flex flex-col xs:flex-col-reverse gap-[20px] justify-between items-center md:flex-row w-full h-full pt-6">
          <div className="w-full md:w-2/5 md:h-full flex flex-col gap-1">
            <h1 className="font-bold text-4xl xs:text-2xl">
              Hybrid Battery Solutions of San Leandro{' '}
              <small className="text-xs text-gradient">
                Established in 2017
              </small>
            </h1>
            <p>
              We specialize in{' '}
              <strong>hybrid battery sales, replacements, and repairs</strong>,
              providing you with a seamless experience tailored to your needs.
              Our expert battery repair and reconditioning services not only
              extend battery life but also enhance efficiency and save you
              money.  We have helped customers from San Jose, San Francisco, Fremont, Hayward, Santa Clara, Palo Alto and throughout the Bay Area.
            </p>
            <h2 className="font-bold pt-4 italic">Why Choose Us? </h2>
            <ul className="flex flex-col gap-1">
              <li>
                <strong className="text-gradient italic">
                  Expertise You Can Trust:
                </strong>{' '}
                Our skilled technicians are dedicated to extending the life of
                your hybrid battery while enhancing your vehicle's performance.
              </li>
              <li>
                <strong className="text-gradient italic">
                  Cost-Effective Solutions:
                </strong>{' '}
                Save money with our affordable repair and reconditioning
                services that restore your battery's efficiency without breaking
                the bank.
              </li>
              <li>
                <strong className="text-gradient italic">
                  Convenient Service Options:
                </strong>{' '}
                Enjoy the flexibility of on-site repairs or drop by our
                location—whichever works best for you!
              </li>
            </ul>
            <small className="italic pt-1 text-gradient">
              All our work is guaranteed, labor and installation is included.
              THERE ARE NO HIDDEN FEES.
            </small>
            <div className="pt-4 xs:self-center">
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 font-bold cursor-pointer px-3 aria-label"
                
              >
                <a href="tel:5104141929">Request Service</a>
              </Button>
              <p className="px-2 hidden lg:inline-block">
                {' '}
                click OR Call 1 ( 510 ) 414-1929
              </p>
            </div>
          </div>

          <div className="w-full md:w-3/5 bg-red-50 h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl relative">
            <Image
              src={'/lovehybrid2.jpg'}
              fill
              style={{
                objectFit: 'cover',
                objectPosition: 'calc(50% + 0px) center',
              }}
              alt="Toyota Prius Hybrid battery repair service"
              className="rounded-3xl"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
