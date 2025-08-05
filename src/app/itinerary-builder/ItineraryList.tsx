"use client";

import React from "react";
import ItineraryItem from "./ItineraryItem";
import { Day } from "./ItineraryItem";

export type Days = {
  days: Day[];
};

const ItineraryList = ({ days }: Days) => {
  return (
    <div className='space-y-6'>
      {days.map((day, index) => (
        <ItineraryItem
          key={index}
          day={day}
          isLastItem={index === days.length - 1}
        />
      ))}
    </div>
  );
};

export default ItineraryList;
