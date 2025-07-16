import React from "react";
import { features } from "@/lib/features";
import Feature from "./Feature";

const Features = () => {
  return (
    <div className='text-center p-14'>
      <h2 className='text-5xl font-bold mb-4'>
        Plan the <span className='text-primary'>Perfect</span> Trip in Under 5
        Minutes.
      </h2>
      <p className='text-muted-foreground mb-14'>
        Let AI handle the details — from destinations to daily plans, all
        tailored just for you.
      </p>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {features.map((feature) => (
          <Feature key={feature.title} feature={feature} />
        ))}
      </div>
    </div>
  );
};

export default Features;
