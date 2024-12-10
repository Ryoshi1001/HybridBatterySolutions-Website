import React from 'react'
import { FlipWords } from "../ui/flip-words";

const FlipText = () => {
  const words = ["Toyota Prius","Nissan Altima", "Toyota Camry", "Lexus Hybrid"];
 
  return (
    <div className="py-8 flex justify-center items-center xs:justify-start mx-auto ">
      <div className="text-4xl xs:text-xl font-normal md:mx-auto text-neutral-600 dark:text-neutral-400">
        Revitalize Your
        <FlipWords words={words} /> <br />
        by calling Hybrid Battery Solutions
      </div>
    </div>
  );
}

export default FlipText