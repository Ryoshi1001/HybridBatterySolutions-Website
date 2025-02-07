import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ChatQr = () => {
  return (
    <>
      <section className="w-full h-auto">
        <h2 id="about" className="text-4xl xs:text-3xl text-gradient font-bold">
          Live Chat
        </h2>
        <h3 className="font-bold text-4xl xs:text-2xl">
        Instant Hybrid Battery Support at Your Fingertips{' '} 
        </h3>
        <p className="text-xl text-gradient mb-3">Prefer Text ? Scan QR or Tap on Mobile to Chat Now</p>

        <div className="flex flex-col xs:flex-col-reverse gap-[20px] justify-between items-center md:flex-row w-full h-full max-w-4xl mx-auto">
          <div className="w-full md:w-3/5 md:h-full flex flex-col gap-1">
            <h2 className="font-bold underline">Available Hours</h2>
            <h2 className="font-bold">Monday-Saturday: 9AM - 5PM</h2>
            <h2 className="font-bold italic">
              Fast, Convenient, and Professional Service
            </h2>
            <ul className="flex flex-col gap-1">
              <li>
                <strong className="text-gradient italic">
                  Quick Appointment Scheduling
                </strong>{' '}
                <p>✓ Book your service with our expert technicians in minutes</p>
                <p>
                ✓ Extend hybrid battery life & boost vehicle performance
                </p>
              </li>
              <li>
                <strong className="text-gradient italic">
                  Instant Answers to Your Questions
                </strong>{' '}
                <p>✓ Get expert advice on hybrid battery care & maintenance</p>
                <p>
                ✓ Learn about our cost-effective repair & services
                </p>
              </li>
              <li>
                <strong className="text-gradient italic">
                  Efficient Remote Pre-Diagnostics
                </strong>{' '}
                <p>✓ Save time with preliminary assessments before visit</p>
                <p>✓ Identify potential issues and solutions quickly</p>
              </li>
            </ul>
            <small className="italic pt-1 text-gradient">
              <li>✓ All work backed by our satisfaction guarantee</li>
              <li>✓ Transparent pricing - No hidden fees</li>
              <li>✓ Labor and installation always included</li>
            </small>
            <p className="italic pt-1 text-gradient">
              Scan now for immediate assistance and start maximizing your
              hybrid&apos;s potential!
            </p>
          </div>

          <div className="w-full h-[200px] bg-gray-800 md:w-2/5 md:h-[250px] lg:h-[300px] rounded-3xl relative aspect-square">
            <Link href={'tel:5104141929'} className="">
              <Image
                src={'/MessageQRCode.png'}
                fill
                style={{
                  objectFit: 'contain',
                  objectPosition: 'calc(50% + 0px) center',
                }}
                alt="Toyota Prius Hybrid battery repair service"
                className="rounded-3xl py-8 px-3"
              />
            </Link>
          </div>
          <div></div>
        </div>
      </section>
    </>
  );
};

export default ChatQr;
