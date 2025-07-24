"use client";

import { Info, Plane } from "lucide-react";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export type Day = {
  title: string;
  description: string;
  activities: {
    morning: {
      activity: string;
      photo_query: string;
      activity_type: string;
    };
    afternoon: {
      activity: string;
      photo_query: string;
      activity_type: string;
    };
    evening: {
      activity: string;
      photo_query: string;
      activity_type: string;
    };
  };
  reminders: string[];
};

const ItineraryItem = ({ day }: { day: Day }) => {
  return (
    <div>
      {/* Timeline header */}
      <div className='flex gap-2 items-center'>
        <span className='rounded-full bg-primary shadow p-2'>
          <Plane size={20} className='text-primary-foreground' />
        </span>
        <h2 className='text-xl font-semibold inline'>{day.title}</h2>
      </div>
      {/* Timeline Content */}
      <Card className='mt-5 ml-10'>
        <CardHeader>
          <CardTitle className='text-muted-foreground'>
            {day.description}
          </CardTitle>
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
                      {activity.activity}
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
