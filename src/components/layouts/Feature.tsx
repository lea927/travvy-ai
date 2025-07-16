"use client";

import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

import type { Feature as FeatureType } from "@/lib/features";

interface FeatureProps {
  feature: FeatureType;
}

const titleVariants = {
  hover: { x: 4 },
};

const Feature = ({ feature }: FeatureProps) => {
  return (
    <motion.div className='h-full' whileHover='hover'>
      <Card>
        <CardHeader>
          <div className='text-3xl mb-2'>{feature.icon}</div>
          <motion.div variants={titleVariants}>
            <CardTitle className='text-lg'>{feature.title}</CardTitle>
          </motion.div>
          <CardDescription>{feature.description}</CardDescription>
        </CardHeader>
      </Card>
    </motion.div>
  );
};

export default Feature;
