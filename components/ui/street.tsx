import Image from 'next/image';
import React from 'react';

const Street = () => {
  return (
    <div className="streetcard relative mt-10 sm:mt-14">
      <div className="streetshadow text-sm text-wrap"></div>
      <div className='w-[180px] h-[120px] sm:w-[240px] sm:h-[160px] absolute -top-[64%] right-4 sm:-top-[100%] sm:-right-18'>
        <Image
          fill
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
