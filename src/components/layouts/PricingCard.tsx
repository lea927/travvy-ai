"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { PricingTier } from "@/lib/pricingData";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface PricingCardProps {
  tier: PricingTier;
}

const MotionButton = motion(Button);

const PricingCard = ({ tier }: PricingCardProps) => {
  return (
    <div className='relative max-w-sm mx-auto w-96'>
      <div className='absolute inset-0 scale-105 bg-muted rounded-3xl z-0' />
      <Card className='relative h-full flex flex-col z-10 rounded-3xl'>
        <CardHeader>
          <CardTitle className='text-lg'>
            <span className='inline-block border border-black rounded-full px-4 py-1'>
              {tier.name}
            </span>
          </CardTitle>
          <CardDescription className='text-5xl font-semibold mt-2 mb-4'>
            {tier.price}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className='mb-4 space-y-2 text-sm'>
            {tier.features.map((feature, idx) => (
              <li key={idx} className='flex items-center gap-2'>
                <span className='inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-white'>
                  {/* Check icon SVG */}
                  <svg
                    className='w-3 h-3'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth={2}
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className='mt-auto'>
          <MotionButton
            whileHover={{ y: -2 }}
            transition={{ duration: 0.05 }}
            className='w-full py-2 font-bold bg-secondary-foreground'
          >
            Get Started
          </MotionButton>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PricingCard;
