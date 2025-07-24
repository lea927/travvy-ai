"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      id='hero'
    >
      <motion.div variants={itemVariants} className='px-14'>
        <h1 className='text-7xl font-bold text-center mt-15 mb-6'>
          <span className='block'>
            <span className='text-primary'>AI-powered</span> travel buddy
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
      <div className='mt-12 flex justify-center'>
        <div className='rounded-2xl w-7/12 h-28 bg-[rgb(244,244,244)] relative p-1'>
          <Textarea
            className='w-full border-none resize-none shadow-none before:animate-typewriter focus-visible:border-none focus-visible:ring-0 focus-visible:outline-none'
            placeholder='Create a family-friendly 7-day trip to Tokyo with kids aged 8 and 12'
          />
          <Button
            variant='secondary'
            size='icon'
            className='size-8 cursor-pointer absolute bottom-2 right-2 shadow-none bg-primary rounded-full hover:opacity-60 hover:bg-primary transition-opacity duration-200'
          >
            <ArrowUp className='text-white' />
          </Button>
        </div>
      </div>
      <motion.div variants={itemVariants} className='mt-20 flex justify-center'>
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
