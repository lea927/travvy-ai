"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const MotionButton = motion(Button);

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
  return (
    <motion.div
      className='text-center'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <motion.div variants={itemVariants} className='px-14'>
        <h1 className='text-6xl font-bold text-center mt-10 mb-6'>
          <span className='block'>
            <span className='text-primary'>AI-powered</span> travel buddy
          </span>
          <span className='block'>
            turning ideas into ready-to-go itineraries,{" "}
            <span className='text-primary'>instantly.</span>
          </span>
        </h1>
      </motion.div>
      <motion.h2 variants={itemVariants} className='text-muted-foreground'>
        <span className='block'>
          Skip the research rabbit hole. With Travvy.ai, create smart,
          personalized travel plans, export
        </span>
        <span className='block'>
          them in multiple formats, and share with friends — all in just a few
          clicks.
        </span>
      </motion.h2>
      <motion.div variants={itemVariants} className='flex justify-center mt-8'>
        <MotionButton
          whileHover={{ y: -2 }}
          transition={{ duration: 0.05 }}
          className='mr-4 bg-secondary-foreground'
        >
          Get Started
        </MotionButton>
      </motion.div>
      <motion.div variants={itemVariants} className='mt-8 flex justify-center'>
        <motion.div
          whileHover={{ rotate: 3 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className='rounded-xl shadow-md overflow-hidden w-[360px] h-[400px]'
        >
          <Image
            src='/travel.jpg'
            alt='Travel'
            width={360}
            height={400}
            className='object-cover w-full h-full'
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
