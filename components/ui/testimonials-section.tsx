/* eslint-disable react/no-unescaped-entities */
'use client';
// @ts-nocheck
import React, { useEffect, useMemo, useState } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
// import createGlobe from "cobe";
import { motion } from 'framer-motion';
import { IconBrandYoutubeFilled } from '@tabler/icons-react';
import Link from 'next/link';

import dynamic from 'next/dynamic';

const DynamicYelpReview = dynamic(() => import('../modules/YelpReview'), {
  ssr: false,
});

export default function FeaturesSectionDemo() {
  const features = [
    {
      title: 'Find Us On Yelp!',
      description: '',
      skeleton: <SkeletonOne />,
      className:
        'col-span-1 lg:col-span-5 border-b lg:border-r dark:border-neutral-800',
    },
    {
      title: 'Capture pictures of Our Repair Gallery',
      description:
        'Visual showcase of our hybrid battery repair expertise and precision work.',
      skeleton: <SkeletonTwo />,
      className: 'border-b col-span-1 lg:col-span-3 dark:border-neutral-800',
    },
    {
      title: 'Understanding Hybrid Technology',
      description:
        "Explore the innovative features and benefits of Toyota's hybrid systems.",
      skeleton: <SkeletonThree />,
      className:
        'col-span-1 lg:col-span-4 lg:border-r  dark:border-neutral-800',
    },
    {
      title: 'Check Our Business Profile on Google',
      description: '',
      skeleton: <SkeletonFour />,
      className: 'col-span-1 lg:col-span-4 border-b lg:border-none',
    },
  ];
  return (
    <div className="relative z-20 py-4 lg:py-10 max-w-[1440px] mx-auto">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          Packed with new reviews
        </h4>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          At Hybrid Battery Solutions we pride ourselves on delivering
          exceptional service and expertise in hybrid battery repair. Our
          customers are at the heart of what we do, and their experiences speak
          volumes about the quality of our work. In this section, you'll find
          heartfelt testimonials from satisfied clients who have trusted us with
          their hybrid battery needs.
        </p>
      </div>

      <div className="relative ">
        <div className="grid grid-cols-1 lg:grid-cols-8 mt-4 xl:border rounded-md dark:border-neutral-800">
          {features.map((feature, id) => (
            <FeatureCard key={id} className={feature.className}>
              <FeatureTitle>
                {feature.title}
                {id === 0 ? (
                  <Link
                    href={
                      'https://www.yelp.com/biz/hybrid-battery-solutions-san-leandro-ca'
                    }
                    target="_blank"
                  >
                    <Image
                      src="/yelp_burst.png"
                      alt="yelp review logo"
                      width={44}
                      height={44}
                      className="inline-block align-center object-contain pl-2"
                    />
                    <small className="align-bottom text-zinc-400 text-[12px]">
                      {' '}
                      click
                    </small>
                  </Link>
                ) : (
                  ''
                )}
                {id === 3 ? (
                  <Link
                    href={'https://maps.app.goo.gl/eFUn22Y58op2dXYo9'}
                    target="_blank"
                  >
                    <Image
                      src="/google_g_icon_download.png"
                      alt="google logo"
                      width={44}
                      height={44}
                      className="inline-block align-center object-contain pl-1"
                    />
                    <small className="align-bottom text-zinc-400 text-[12px] pl-1">
                      click
                    </small>
                  </Link>
                ) : (
                  ''
                )}
              </FeatureTitle>

              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className=" h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className=" max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        'text-sm md:text-base  max-w-4xl text-left mx-auto',
        'text-neutral-500 text-center font-normal dark:text-neutral-300',
        'text-left max-w-sm mx-0 md:text-sm my-2'
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  const images = [
    `<span class="yelp-review" data-review-id="mk7SxL4IvFTmrZJ_-nuZ0A" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=6rOmyieEpBjrcYpySg49CQ" rel="nofollow noopener">Cynthia F.</a>'s <a href="https://www.yelp.com/biz/hybrid-battery-solutions-san-leandro-ca?hrid=mk7SxL4IvFTmrZJ_-nuZ0A" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/xk1eB3wmWuWpiStZkD111A" rel="nofollow noopener">Hybrid Battery Solutions</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a><script src="https://www.yelp.com/embed/widgets.js" type="text/javascript" async></script></span>`,
    `<span class="yelp-review" data-review-id="_r98jgRZu-sUqDfrAO7zKg" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=qiQ_Q7KvnCmB-x0mEP2bgA" rel="nofollow noopener">Daniel M.</a>'s <a href="https://www.yelp.com/biz/hybrid-battery-solutions-san-leandro-ca?hrid=_r98jgRZu-sUqDfrAO7zKg" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/xk1eB3wmWuWpiStZkD111A" rel="nofollow noopener">Hybrid Battery Solutions</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a><script src="https://www.yelp.com/embed/widgets.js" type="text/javascript" async></script></span>`,
    `<span class="yelp-review" data-review-id="DPS_teiwiKhWJ7zr0kSaDw" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=atUm1BqFBrMXm_Hrpcgxlg" rel="nofollow noopener">Waseem M.</a>'s <a href="https://www.yelp.com/biz/hybrid-battery-solutions-san-leandro-ca?hrid=DPS_teiwiKhWJ7zr0kSaDw" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/xk1eB3wmWuWpiStZkD111A" rel="nofollow noopener">Hybrid Battery Solutions</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a><script src="https://www.yelp.com/embed/widgets.js" type="text/javascript" async></script></span>`,
    `<span class="yelp-review" data-review-id="hywknOODyCzCbfD8VADi4w" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=JCOfxEJnJLAu4Sa0TKfTHA" rel="nofollow noopener">Rich M.</a>'s <a href="https://www.yelp.com/biz/hybrid-battery-solutions-san-leandro-ca?hrid=hywknOODyCzCbfD8VADi4w" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/xk1eB3wmWuWpiStZkD111A" rel="nofollow noopener">Hybrid Battery Solutions</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a><script src="https://www.yelp.com/embed/widgets.js" type="text/javascript" async></script></span>`,
  ];

  const imageVariants = {
    whileHover: {
      scale: 1.04,
      rotate: 0, // Keep it static on hover
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0, // Keep it static on tap
      zIndex: 100,
    },
  };

  // useEffect(() => {
  //   // Generate random rotation values for each image
  //   const newRotationValues = images.map(() => Math.random() * 20 - 8);
  //   setRotationValues(newRotationValues);
  // }, [images]);

  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full p-5  mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
        <Link
          href="https://www.yelp.com/biz/hybrid-battery-solutions-san-leandro-ca"
          target="__blank"
        >
          <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
            {images.map((image, idx) => (
              <motion.div
                variants={imageVariants}
                key={idx}
                whileHover="whileHover"
                whileTap="whileTap"
                // @ts-expect-error: Suppressing type error for className

                className="rounded-xl mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
              >
                <DynamicYelpReview html={image} />
              </motion.div>
            ))}
          </div>
        </Link>
      </div>

      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <Link
      href="https://youtu.be/-yfPpIZYEjI"
      target="__blank"
      className="relative flex gap-10  h-full group/image"
    >
      <div className="w-full  mx-auto bg-transparent dark:bg-transparent group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  relative">
          {/* TODO */}
          <IconBrandYoutubeFilled className="h-20 w-20 absolute z-10 inset-0 text-red-500 m-auto " />
          <Image
            src="/lovehybrid1.jpg"
            alt="I love hybrid by Toyota on hood of hybrid vehicle"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-center rounded-sm blur-none group-hover/image:blur-md transition-all duration-200"
          />
        </div>
      </div>
    </Link>
  );
};

export const SkeletonTwo = () => {
  const [rotationValues, setRotationValues] = useState<number[]>([]);
  const [rotationValues2, setRotationValues2] = useState<number[]>([]);

  const images = useMemo(
    () => [
      '/services10.jpg',
      '/services1.jpg',
      '/services6.jpg',
      '/services7.jpg',
      '/services8.jpg',
      '/services9.jpg',
    ],
    []
  );

  const images2 = useMemo(
    () => [
      '/figmanissan.png',
      '/figmaprius1.png',
      '/figmaprius2.png',
      '/lovehybrid2.jpg',
      '/services10.jpg',
      '/services5.jpg',
    ],
    []
  );

  const attribute = [
    `<div>Photo By Hybrid Battery Solutions on Jan 27, 2019, via <a href='https://www.yelp.com/biz_photos/hybrid-battery-solutions-san-leandro-ca?select=ERdu-ba4LeJfrVkJubFMyQ&utm_campaign=www_photo_share_popup&utm_medium=copy_link&utm_source=%28direct%29'>Yelp</a></div>`,
    `<div>Photo By Daisy C. on Jan 6, 2022, via <a href='https://www.yelp.com/biz_photos/hybrid-battery-solutions-san-leandro-ca?select=xLvzm8jVBfLVeEfSN7hoVw&utm_campaign=www_photo_share_popup&utm_medium=copy_link&utm_source=%28direct%29'>Yelp</a></div>`,
    `<div>Photo By Hybrid Battery Solutions on May 24, 2018, via <a href='https://www.yelp.com/biz_photos/hybrid-battery-solutions-san-leandro-ca?select=utzt3PDOoNNDTcJyHgd_Hg&utm_campaign=www_photo_share_popup&utm_medium=copy_link&utm_source=%28direct%29'>Yelp</a></div>`,
    `<div>Photo By Hybrid Battery Solutions on May 24, 2018, via <a href='https://www.yelp.com/biz_photos/hybrid-battery-solutions-san-leandro-ca?select=hz0hX67kZ_jdbI1fzb-YBQ&utm_campaign=www_photo_share_popup&utm_medium=copy_link&utm_source=%28direct%29'>Yelp</a></div>`,
    `<div>Photo By Hybrid Battery Solutions on Jan 27, 2018, via <a href='https://www.yelp.com/biz_photos/hybrid-battery-solutions-san-leandro-ca?select=SYJIpQ7tKHrrVzaOjH-5MQ&utm_campaign=www_photo_share_popup&utm_medium=copy_link&utm_source=%28direct%29'>Yelp</a></div>`,
    `<div>Photo By Hybrid Battery Solutions on May 24, 2018, via <a href='https://www.yelp.com/biz_photos/hybrid-battery-solutions-san-leandro-ca?select=tSlhT9F2tyiUgtqutGIP4w&utm_campaign=www_photo_share_popup&utm_medium=copy_link&utm_source=%28direct%29'>Yelp</a></div>`,
    `<div>Photo By Hybrid Battery Solutions on Jan 27, 2019, via <a href='https://www.yelp.com/biz_photos/hybrid-battery-solutions-san-leandro-ca?select=DQhtUsp3s9e92yh-YlmQ_Q&utm_campaign=www_photo_share_popup&utm_medium=copy_link&utm_source=%28direct%29'>Yelp</a></div>`,
  ];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0, // Keep it static on hover
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0, // Keep it static on tap
      zIndex: 100,
    },
  };

  useEffect(() => {
    // Generate random rotation values for each image
    const newRotationValues = images.map(() => Math.random() * 20 - 10);
    setRotationValues(newRotationValues);
  }, [images]);

  useEffect(() => {
    // Generate random rotation values for each image
    const newRotationValues2 = images2.map(() => Math.random() * 20 - 8);
    setRotationValues2(newRotationValues2);
  }, [images2]);

  return (
    <div className="relative flex flex-col md:flex-row items-start p-8 md:p-2 gap-10 h-full overflow-hidden">
      <div className="flex flex-row md:flex-col md:ml-8 -ml-20 z-10">
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={'images-first' + idx}
            style={{
              rotate: rotationValues[idx] || 0, // Use the random value or default to 0 if not set yet
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            // @ts-expect-error: Suppressing type error for className

            className="h-auto w-20 md:w-44 rounded-xl -mr-4 md:-mr-12 lg:-mr-14 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden "
          >
            <Image
              src={image}
              alt="hybrid battery service repair images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-30 md:w-44 object-cover flex-shrink-0"
            />
            <div className="text-[10px] text-center mt-1 text-wrap break-words">
              {attribute[idx] && <DynamicYelpReview html={attribute[idx]} />}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row md:flex-col ">
        {images2.map((image, idx) => (
          <motion.div
            key={'images-second' + idx}
            style={{
              rotate: rotationValues2[idx] || 0, // Use the same random value here
            }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            // @ts-expect-error: Suppressing type error for className

            className="rounded-xl h-auto w-20 md:w-44 -mr-4 lg:-mr-14 mt-4 md:mt-6 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt="hybrid battery repair images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-30 md:w-44 object-cover flex-shrink-0"
            />
            <div className="text-[10px] text-center mt-1 text-wrap break-words">
              Hybrid Battery Solutions
              {/* {attribute[idx] && <DynamicYelpReview html={attribute[idx]} />} */}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-white dark:from-black to-transparent h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-white dark:from-black to-transparent h-full pointer-events-none" />
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <Link href="https://maps.app.goo.gl/eFUn22Y58op2dXYo9" target="_blank">
      <div className="h-60 md:h-80  flex flex-col  relative bg-transparent dark:bg-transparent mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12624.812802714483!2d-122.19593883009465!3d37.71490795200545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f854ee9c2ef8d%3A0x152799be537888e9!2sHybrid%20Battery%20Solutions!5e0!3m2!1sen!2sus!4v1733612999655!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Link>
  );
};
