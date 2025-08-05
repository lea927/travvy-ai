"use client";

import { Info, Plane } from "lucide-react";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export type Day = {
  title: string;
  description: string;
  activities: {
    morning: {
      description: string;
      photo_query: string;
      activity_type: string;
    };
    afternoon: {
      description: string;
      photo_query: string;
      activity_type: string;
    };
    evening: {
      description: string;
      photo_query: string;
      activity_type: string;
    };
  };
  reminders: string[];
};

const ItineraryItem = ({
  day,
  isLastItem,
}: {
  day: Day;
  isLastItem: boolean;
}) => {
  return (
    <div className='relative pl-8'>
      {/* Timeline line */}
      {!isLastItem && (
        <div className='absolute h-full left-4 top-8 bottom-0 w-0.5 bg-primary opacity-90 z-0' />
      )}
      {/* Timeline header */}
      <div className='absolute left-0 z-10 flex gap-2 items-center'>
        <span className='rounded-full bg-primary shadow p-2'>
          <Plane size={20} className='text-primary-foreground' />
        </span>
      </div>
      {/* Timeline Content */}
      <Card className='mt-5 ml-5'>
        <CardHeader>
          <CardTitle>
            <h2 className='text-xl font-semibold inline'>{day.title}</h2>
          </CardTitle>
          <CardDescription className='text-muted-foreground'>
            {day.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Reminders */}
          <div className='mb-6'>
            <h4 className='font-semibold mb-2'>🔔 Reminders:</h4>
            {day.reminders.map((r, i) => (
              <div key={i} className='flex items-center gap-3 mb-1'>
                <Info className='w-5 h-5 text-accent-foreground mt-1' />
                <p className='text-muted-foreground'>{r}</p>
              </div>
            ))}
          </div>
          {Object.entries(day.activities).map(
            ([timeOfDay, activity], index) => (
              <div key={index} className='mb-4'>
                <Badge
                  className=' text-xs bg-primary opacity-70'
                  variant='default'
                >
                  {activity.activity_type}
                </Badge>
                <div className='flex gap-4 mt-2'>
                  <div className='border rounded-lg overflow-hidden mb-2 inline-block'>
                    <Image
                      src='/placeholder.png'
                      alt=''
                      width={100}
                      height={100}
                      className='object-contain'
                    />
                  </div>
                  <div>
                    <h3 className='font-semibold capitalize'>{timeOfDay}</h3>
                    <p className='text-muted-foreground text-sm'>
                      {activity.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ItineraryItem;
