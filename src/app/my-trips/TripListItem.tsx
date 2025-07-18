import React from "react";
import { Button } from "@/components/ui/button";

interface TripListItemProps {
  name: string;
  date: string;
}

const TripListItem = ({ name, date }: TripListItemProps) => {
  return (
    <div className='bg-muted rounded-xl p-6 shadow-sm'>
      <h3 className='font-bold text-lg mb-2'>{name}</h3>
      <p className='text-muted-foreground mb-2'>{date}</p>
      <Button size='sm' className='bg-primary text-white rounded-full'>
        View
      </Button>
    </div>
  );
};

export default TripListItem;
