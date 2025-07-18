import TripListItem from "./TripListItem";

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
    <div className='max-w-5xl mx-auto py-10 px-4'>
      <h2 className='text-2xl font-bold mb-6 text-center'>Your Trips</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {trips.map((trip) => (
          <TripListItem key={trip.name} name={trip.name} date={trip.date} />
        ))}
      </div>
    </div>
  );
};

export default TripList;
