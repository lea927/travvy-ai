"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const MotionButton = motion(Button);

const Hero = () => {
  return (
    <div className='text-center'>
      <div className='px-14'>
        <h1 className='text-6xl font-bold text-center mt-10 mb-6'>
          <span className='block'>
            <span className='text-primary'>AI-powered</span> travel buddy
          </span>
          <span className='block'>
            turning ideas into ready-to-go itineraries,{" "}
            <span className='text-primary'>instantly.</span>
          </span>
        </h1>
      </div>
      <h2 className='text-muted-foreground'>
        <span className='block'>
          Skip the research rabbit hole. With Travvy.ai, create smart,
          personalized travel plans, export
        </span>
        <span className='block'>
          them in multiple formats, and share with friends — all in just a few
          clicks.
        </span>
      </h2>
      <div className='flex justify-center mt-8'>
        <MotionButton
          whileHover={{ y: -2 }}
          transition={{ duration: 0.05 }}
          className='mr-4 bg-secondary-foreground'
        >
          Get Started
        </MotionButton>
      </div>
      <div className='mt-8 flex justify-center'>
        <div className='rounded-xl shadow-md overflow-hidden w-[360px] h-[400px]'>
          <Image
            src='/travel.jpg'
            alt='Travel'
            width={360}
            height={400}
            className='object-cover w-full h-full'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
