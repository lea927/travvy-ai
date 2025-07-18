import React from "react";
import TripListItem from "../my-trips/TripListItem";

const trips = [
  {
    name: "Paris Getaway",
    date: "July 2025",
  },
  {
    name: "Tokyo Adventure",
    date: "August 2025",
  },
  // ...more trips
];

const TripList = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
      {trips.map((trip) => (
        <TripListItem key={trip.name} name={trip.name} date={trip.date} />
      ))}
    </div>
  );
};

export default TripList;
