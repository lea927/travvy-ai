import React from "react";
import TripList from "./TripList";

const page = () => {
  return (
    <div>
      <h1 className='text-4xl font-bold mb-4'>Your Trips</h1>
      <TripList />
    </div>
  );
};

export default page;
