/* eslint-disable react/no-unescaped-entities */
'use client';
import React from 'react';
import { BackgroundGradient } from '../ui/background-gradient';
import Image from 'next/image';
const Vehicles = () => {
  return (
    <div>
      <h3
        id="vehicles"
        className="text-4xl xs:text-3xl  text-gradient font-bold"
      >
        Vehicle Make/Model
      </h3>
      <div className="flex items-center justify-center flex-wrap gap-4 py-4">
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-8 bg-white dark:bg-zinc-900">
        <div className='w-[auto] h-[auto] xs:h-[auto] overflow-hidden'>
    <Image
        src={`/figmaprius1.png`}
        alt="Toyota Prius Gen 2 and Gen 3 hybrid vehicle"
        height="400"
        width="400"
        className="object-cover rounded-t-[22px]"
    />
</div>
          <p className="text-base sm:text-lg text-black mt-4 mb-2 dark:text-neutral-200 font-bold text-shadow-strong">
            Toyota Prius Gen 2 (2004-2009) <br/>
            Toyota Prius Gen 3 (2010-2015)
          </p>

          <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-6">
            Generation 2 (2004-2009) The second generation of the Toyota Prius
            debuted as a hatchback, with a 1.5L engine and utilized a
            nickel-metal hydride battery for efficient performance. Generation 3
            (2010-2015) The third generation improved upon its predecessor with
            enhanced efficiency and performance while retaining a similar
            design. This generation featured better aerodynamics, contributing
            to increased fuel efficiency.
          </p>
          <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
            <span>Battery Type</span>
            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white uppercase">
              Nickel-Metal Hydride (NiMH)
            </span>
          </button>
        </BackgroundGradient>
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-8 bg-white dark:bg-zinc-900">
        <div className='w-[auto] h-[auto] xs:h-[auto] overflow-hidden'>
    <Image
        src={`/figmaprius2.png`}
        alt="Toyota Prius Gen 2 and Gen 3 hybrid vehicle"
        height="400"
        width="400"
        className="object-cover rounded-t-[22px]"
    />
</div>
          <p className="text-base sm:text-lg text-black mt-4 mb-2 dark:text-neutral-200 font-bold text-shadow-strong">
            Toyota Prius Gen 4 (Post-2016) (XW50)
          </p>

          <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-6">
            Marked by a more aggressive design, Toyota introduced lithium-ion
            batteries in higher trims, improving fuel efficiency and
            performance. Whether you're experiencing a few damaged cells or a
            complete battery failure, we offer cost-effective solutions to get
            your Prius back on the road
          </p>
          <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
            <span>Battery Type</span>
            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white uppercase">
              Lithium-Ion (Li-ion)
            </span>
          </button>
        </BackgroundGradient>
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-8 bg-white dark:bg-zinc-900">
          <Image
            src={`/figmacamry1.png`}
            alt="Toyota Camry Hybrid Generation 1 hybrid vehicle"
            height="400"
            width="400"
         className="object-contain rounded-t-[22px]"
          />
          <p className="text-base sm:text-lg text-black mt-4 mb-2 dark:text-neutral-200 font-bold text-shadow-strong">
            Toyota Camry Hybrid Gen 1 (2007-2011) (XV40)
          </p>

          <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-6">
            The Toyota Camry Hybrid made its debut in 2007, equipped with a 2.4L
            engine combined with an electric motor, achieving a combined EPA
            fuel economy rating of up to 34 mpg. This generation offered a roomy
            interior along with standard safety features, making it an appealing
            choice for hybrid vehicle enthusiasts.
          </p>
          <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
            <span>Battery Type </span>
            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white uppercase">
              Nickel-Metal Hydride (NiMH)
            </span>
          </button>
        </BackgroundGradient>
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-8 bg-white dark:bg-zinc-900">
          <Image
            src={`/figmacamry2.png`}
            alt="Toyota Camry Generation 2 hybrid vehicle"
            height="400"
            width="400"
            className="object-contain rounded-t-[22px]"
          />
          <p className="text-base sm:text-lg text-black mt-4 mb-2 dark:text-neutral-200 font-bold text-shadow-strong">
            Toyota Camry Hybrid Gen 2 (2012-2017) (XV50)
          </p>

          <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-6">
            The 2012-2017 Toyota Camry Hybrid introduced a more powerful 2.5L
            engine paired with advanced hybrid technology, achieving a combined
            fuel economy of up to 40 mpg. This generation featured refreshed
            styling and enhanced safety systems, significantly improving overall
            performance and comfort for drivers and passengers alike.
          </p>
          <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
            <span>Battery Type</span>
            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white uppercase">
              Lithium-Ion (Li-ion)
            </span>
          </button>
        </BackgroundGradient>
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-8 bg-white dark:bg-zinc-900">
          <Image
            src={`/figmanissan.png`}
            alt="Nissan Altima Generation 1 Generation 2 hybrid vehicle"
            height="400"
            width="400"
            className="object-contain rounded-t-[22px]"
          />
          <p className="text-base sm:text-lg text-black mt-4 mb-2 dark:text-neutral-200 font-bold text-shadow-strong">
            Nissan Altima Gen 1 (2007-2011)<br/> Nissan Altima Gen 2  (2012-2015)
          </p>

          <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-6">
            The Nissan Altima Hybrid made its debut in 2007, featuring a 2.5L
            four-cylinder engine combined with an electric motor. The second
            generation of the Altima Hybrid continued from 2012 to 2015, though
            it saw limited production. This generation maintained a strong focus
            on fuel efficiency while introducing enhanced styling and advanced
            technology features. The hybrid system was designed for better
            integration with the vehicle's overall performance, providing a
            seamless driving experience.
          </p>
          <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
            <span>Battery Type</span>
            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white uppercase">
              Nickel-Metal Hydride (NiMH)
            </span>
          </button>
        </BackgroundGradient>
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-8 bg-white dark:bg-zinc-900">
          <Image
            src={`/figmalexus.png`}
            alt="Lexus and GMC hybrid vehicle"
            height="400"
            width="400"
          className="object-contain rounded-t-[22px]"
          />
          <p className="text-base sm:text-lg text-black mt-4 mb-2 dark:text-neutral-200 font-bold text-shadow-strong">
            Select Lexus & GMC Hybrid Models
           
          </p>
          <br></br>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-6">
            The GMC hybrid lineup has evolved over the years, offering a range
            of vehicles that combine fuel efficiency with the brand's signature
            power and performance. GMC hybrids integrate advanced hybrid
            technology with traditional gasoline engines, allowing for improved
            fuel economy without sacrificing capability.
          </p>
          <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
            <span>Battery Type</span>
            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
              Nickel-Metal Hydride (NiMH)
            </span>
          </button>
        </BackgroundGradient>
      </div>
    </div>
  );
};

export default Vehicles;
