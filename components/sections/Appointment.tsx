'use client';
import React from 'react';
import FlipText from './FlipText';
import { Button } from '../ui/moving-border';
import Street from '../ui/street';

const Appointment = () => {
  return (
    <>
      <div className="">
        <h3 className="text-4xl pb-4 xs:text-3xl text-gradient font-bold">
          Appointment Scheduling
        </h3>
        <div className='flex flex-col gap-4 max-w-4xl sm:text-center sm:mx-auto'>
        <h2 className="
        text-2xl lg:text-3xl lg:leading-tight sm:mx-auto tracking-tight font-medium text-black dark:text-white
        ">
            We Service All Major Hybrid Brands
          </h2>
        <p className=" text-gray-800 dark:text-white">
          Get your hybrid vehicle back on the road with our expert battery
          repair and replacement services. Scheduling your appointment is quick
          and easy!
        </p>

        <div>

          <p className="">
            Our skilled technicians are trained to handle hybrid batteries from
            all leading manufacturers. From Toyota to Nissan, we’ve got you
            covered!
          </p>
        </div>

        <FlipText />

        <p className="">
        Ready to revitalize your hybrid? Don’t hesitate—book your appointment now and let us restore your vehicle’s performance! We have been proudly serving customers in Castro Valley, San Lorenzo, Alameda, Union City, and surrounding areas for over 8 years for all their hybrid battery repair needs.
        </p>
        </div>
      </div>

      <div className="flex mt-4  items-center justify-center">
        <Button
          borderRadius="1.75rem"
          className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 font-bold px-3"
        >
          <a href="tel:5104141929">Request Service</a>
        </Button>
        <p className="px-2 hidden lg:inline-block">
          {' '}
          click OR Call 510-414-1929
        </p>
      </div>
      <div className="py-4 flex items-center justify-center">
        <Street />
      </div>
    </>
  );
};

export default Appointment;
