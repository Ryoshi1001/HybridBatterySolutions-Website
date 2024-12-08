'use client';
import React from 'react';
import { BackgroundGradient } from '../ui/background-gradient';
import { IconAppWindow } from '@tabler/icons-react';
import Image from 'next/image';
const Vehicles = () => {
  return (
    <div>
      <div id='vehicles' className="text-4xl pl4 text-gradient font-bold">
        Vehicle Make/Model
      </div>
      <div className="flex items-center justify-center flex-wrap gap-4 py-8 px-4">
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <Image
            src={`/prius3.png`}
            alt="jordans"
            height="400"
            width="400"
            className="object-contain"
          />
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            Toyota Prius (2004-2009, 2010-2016)
          </p>

          <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-6">
            Expert hybrid battery solutions for Toyota Prius models 2004-2009
            and 2010-2016. Our specialized services include battery cell repair,
            reconditioning, and replacement. Whether you're experiencing a few
            damaged cells or a complete battery failure, we offer cost-effective
            solutions to get your Prius back on the road
          </p>
          <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
            <span>Buy now </span>
            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
              $100
            </span>
          </button>
        </BackgroundGradient>
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <Image
            src={`/camry1.png`}
            alt="jordans"
            height="400"
            width="400"
            className="object-contain"
          />
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            Toyota Camry Hybrid (2007-2011, 2012-2015)
          </p>

          <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-6">
            Specialized hybrid battery solutions for Toyota Camry Hybrid models
            2007-2011 and 2012-2015. Our services include battery pack
            reconditioning, individual cell replacement, and full battery
            rebuilds using high-capacity cells. We address issues like reduced
            fuel efficiency, warning lights, and complete battery failure,
            restoring your Camry Hybrid's performance and extending its
            lifespan. Our process involves thorough diagnostics, rigorous
            testing, and optimization of each battery module to ensure peak
            capacity and longevity.
          </p>
          <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
            <span>Buy now </span>
            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
              $100
            </span>
          </button>
        </BackgroundGradient>
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <Image
            src={`/nissan2.png`}
            alt="jordans"
            height="400"
            width="400"
            className="object-contain"
          />
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            Nissan Altima (2007-2015) & Lexus Models Also
          </p>

          <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-6">
            Comprehensive hybrid battery solutions for Nissan Altima models
            2007-2015 and various Lexus hybrid vehicles. Our services include
            battery pack reconditioning, cell replacement, and full rebuilds. We
            address issues like reduced fuel efficiency, warning lights, and
            complete battery failure, restoring your vehicle's performance and
            extending its hybrid system lifespan. Our process involves thorough
            diagnostics and meticulous testing to optimize each battery module.
          </p>
          <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
            <span>Buy now </span>
            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
              $100
            </span>
          </button>
        </BackgroundGradient>
      </div>
    </div>
  );
};

export default Vehicles;
