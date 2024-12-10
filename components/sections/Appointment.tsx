'use client';
import React from 'react';
import FlipText from './FlipText';
import { Button } from '../ui/moving-border';

const Appointment = () => {
  return (
    <>
      <div className="text-4xl xs:text-3xl text-gradient font-bold">
        Appointment Scheduling
      </div>
      <FlipText />
      <div className="flex mt-4  items-center justify-center">
        <Button
          borderRadius="1.75rem"
          className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 font-bold"
        >
          <a href="tel:5104141929">Book Your Appointment</a>
        </Button>
      </div>
    </>
  );
};

export default Appointment;
