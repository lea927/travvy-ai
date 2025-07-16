import React from "react";
import { pricingTiers } from "@/lib/pricingData";
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <div className='text-center p-14'>
      <h2 className='text-5xl font-bold mb-4'>
        {" "}
        <span className='text-primary'>Simple</span> Pricing for Everyone
      </h2>
      <p className='text-muted-foreground mb-17'>
        <span className='block'>
          Simple, flexible pricing — pay only when you need it.
        </span>
        <span className='block'>
          You can choose the one that suits your needs. Select from your
          favourite plan and get started instantly.
        </span>
      </p>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {pricingTiers.map((tier) => (
          <PricingCard key={tier.name} tier={tier} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
