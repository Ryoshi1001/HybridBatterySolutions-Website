import React from 'react'
import { FlipWords } from "../ui/flip-words";

const FlipText = () => {
  const words = ["Prius Hybrid", "Camry Hybrid", "Nissan Hybrid", "Lexus Hybrid", "GMC Hybrid"];
 
  return (
    <div className="flex justify-center xs:items-start  items-center xs:justify-start mx-auto ">
      <div className="text-2xl xs:text-base font-normal md:mx-auto text-neutral-600 dark:text-neutral-400">
        <div className='text-3xl md:text-4xl'>
        <FlipWords words={words} />
        </div>
      </div>
    </div>
  );
}

export default FlipText