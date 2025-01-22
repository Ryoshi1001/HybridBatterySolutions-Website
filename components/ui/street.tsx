import Image from 'next/image';
import React from 'react';

const Street = () => {
  return (
    <div className="streetcard relative mt-10 sm:mt-14">
      <div className="streetshadow text-sm text-wrap"></div>
      <div className='w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] absolute -top-[100%] -right-4 sm:-top-[150%] sm:-right-8'>
        <Image
          fill
          sizes='(max-width: 639px) 200px, (min-width: 800px) 280px'
          src={'/roadcar.png'}
          alt="car hybrid"
          className="rotate-[3deg]"
       /> 
      </div>

      <div className="absolute bottom-3 left-3 text-xs ">
      ⚠️ Get Your Hybrid Back On The Road.<br></br>
        
      </div>
    </div>
  );
};

export default Street;
