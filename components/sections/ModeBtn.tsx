"use client"
import React, { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

const ModeBtn = () => {
  const {theme, setTheme} = useTheme()
  const [isMounted, setIsMounted] = useState(false);

  // Use effect to handle mounted state
  useEffect(() => {
    setIsMounted(true); // Set mounted state to true after the first render
  }, []);

  // Prevent rendering until mounted
  if (!isMounted) return null; // Prevent rendering until mounted


  return (
    <button
      className={`fixed top-3 right-3 border-[1px] z-30  rounded-lg p-1 cursor-pointer  transition-colors duration-300 
        ${theme === 'dark' ? 'border-yellow-50 bg-gray-800 text-white hover:bg-gray-700' : 'border-gray-800 bg-white text-black hover:bg-gray-200'}`}
      
      onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')}
      aria-label='toggle theme'
    >
      {theme === 'dark' ? <SunIcon className='w-5 h-5' /> : <MoonIcon className='w-5 h-5'  />}
    </button>
  );
};

export default ModeBtn;
