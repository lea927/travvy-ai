import React from "react";
import Image from "next/image";

const photos = [
  {
    url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1121&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const ItineraryPhotos = () => {
  return (
    <div className='flex gap-6 justify-center'>
      {photos.map((photo, index) => (
        <Image
          key={index}
          src={photo.url}
          alt={`Itinerary photo ${index + 1}`}
          width={300}
          height={300}
          className={`rounded-lg shadow-md object-cover ${index === 1 ? "rotate-2" : "-rotate-2"}`}
        />
      ))}
    </div>
  );
};

export default ItineraryPhotos;
