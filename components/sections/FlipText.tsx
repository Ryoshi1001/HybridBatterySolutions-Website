import React from 'react'
import { FlipWords } from "../ui/flip-words";

const FlipText = () => {
  const words = ["Toyota Prius", "Camry", "Nissan", "Chevy"];
 
  return (
    <div className="h-[10rem] flex justify-center items-center px-4 mx-auto">
      <div className="text-4xl xs:text-3xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Revitalize Your
        <FlipWords words={words} /> <br />
        by calling Hybrid Battery Solutions
      </div>
    </div>
  );
}

export default FlipText