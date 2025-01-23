'use client';
import React from 'react';
import { Carousel, Card } from '@/components/ui/apple-cards-carousel';

const Services = () => {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));
  return (
    <>
      <h3
        id="services"
        className="text-4xl xs:text-3xl text-gradient font-bold w-full"
      >
        Our Services
      </h3>

      <div className="w-full h-full py-4">
        <h2 className="max-w-7xl mx-auto text-2xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
          Comprehensive Care for Your Hybrid Vehicles
        </h2>
        <div className='grid grid-cols-2 mt-3 md:grid-cols-3 lg:grid-cols-5'>
          <p className='font-light text-shadow-strong text-sm'>Full Service Repair</p>
          <p className='font-light text-shadow-strong text-sm'>Invertor Replacement</p>
          <p className='font-light text-shadow-strong text-sm'>Red Triangle Warning</p>
          <p className='font-light text-shadow-strong text-sm'>Cluster Repair</p>
          <p className='font-light text-shadow-strong text-sm'>Error Messages</p>

          <p className='font-light text-shadow-strong text-sm'>Battery Cell Cleaning</p>
          <p className='font-light text-shadow-strong text-sm'>Battery Packs</p>

          <p className='font-light text-shadow-strong text-sm'>Water Pumps</p>
   
          <p className='font-light text-shadow-strong text-sm'>Battery Modules/Cells</p>

          <p className='font-light text-shadow-strong text-sm'>Battery Recycling</p>

        </div>

        <Carousel items={cards} />
      </div>
    </>
  );
};



const data = [
  {
    category: 'Full Service Repair',
    title: 'Comprehensive Solutions for Hybrid Battery Warnings.',
    src: '/PriusServices1.png',
  },
  {
    category: 'Red Triangle Warning',
    title: 'Hybrid System Warning Lights: Red Triangle',
    src: '/hybridwarningtriangle.png',
  },
  {
    category: 'Battery Modules',
    title: 'Physical Damage from Swollen, Corroded, or Malfunctioning Cells.',
    src: '/damagedcells.png',
  },
  {
    category: 'Battery Packs',
    title: 'Battery Repair, Exchanges, & New Manufacturer OEM installations.',
    src: '/services6.jpg',
  },
  {
    category: 'Error Messages',
    title: 'Check Hybrid System Warning Indicator Message.',
    src: '/services2.jpg',
  },
  {
    category: 'Inverter Replacement',
    title:
      'Restores Performance, Improves Fuel Efficiency, Prevents Further Damage To The Hybrid System.',
    src: '/services7.jpg',
  },
  {
    category: 'Instrument Cluster Repair',
    title:
      'Fix dashboard display issues, including speedometers, fuel indicators, and warning lights.',
    src: '/clusterrepair.jpg',
  },
  {
    category: 'Hybrid Battery Cell & Debris Service',
    title:
      "Enhance Your Hybrid Battery's Longevity with Our Expert Module Care Service.",
    src: '/services8.jpg',
  },
  {
    category: 'Water Pumps',
    title:
      'Water pump repair for ensuring proper circulation of coolant to prevent overheating..',
    src: '/waterpump.jpg',
  },
  {
    category: 'Battery Recycling',
    title:
      'Eco-Friendly Hybrid Battery Recycling: Drop Off Your Batteries for Responsible Disposal',
    src: '/batteryrecycling.png',
  },
];

export default Services;
