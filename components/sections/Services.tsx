"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
 


const Services = () => {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));
  return (
    <>
       <div id="services" className="text-4xl xs:text-3xl  pl4 text-gradient font-bold w-full">Services</div> 

       <div className="w-full h-full py-4">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Get to know your Hybrid.
      </h2>
      <Carousel items={cards} />
    </div>
    </>

  )
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};
 
const data = [
  {
    category: "Repair",
    title: "Any Hybrid Battery Related Warning.",
    src: "/prius4.jpg",
    content: <DummyContent />,
  },
  {
    category: "The Triangle",
    title: "Red/Yellow Triangle with Engine Light.",
    src: "/services1.jpg",
    content: <DummyContent />,
  },
  {
    category: "Error Message",
    title: "Hybrid System Warning.",
    src: "/services2.jpg",
    content: <DummyContent />,
  },

  {
    category: "Modules",
    title: "Cell Damage.",
    src: "/services4.jpg",
    content: <DummyContent />,
  },
  {
    category: "Replacement",
    title: "Swap Your Battery Pack.",
    src: "/services6.jpg",
    content: <DummyContent />,
  },
  // {
  //   category: "Hiring",
  //   title: "Hiring for a Staff Software Engineer",
  //   src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   content: <DummyContent />,
  // },
];

export default Services