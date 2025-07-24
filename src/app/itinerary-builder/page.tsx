"use client";

import { Info, Plane } from "lucide-react";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
const ItineraryBuilder = () => {
  const itinerary = {
    title: "5-Day Taiwan Itinerary: Taipei & Kaohsiung",
    description:
      "Experience the highlights of Taipei and Kaohsiung over five days, from towering skyscrapers to serene temples, hot springs, and lively night markets.",
    location: "Taiwan",
    days: [
      {
        title: "Arrival and Taipei Skyline",
        description:
          "Settle into Taipei and take in its modern skyline followed by a vibrant night market visit.",
        activities: {
          morning: {
            activity:
              "Arrive at Taoyuan International Airport and transfer to Taipei city center",
            photo_query: "Taoyuan International Airport MRT train",
            activity_type: "Travel",
          },
          afternoon: {
            activity:
              "Visit Taipei 101 Observatory for a panoramic view of the city skyline",
            photo_query: "Taipei 101 observatory view",
            activity_type: "Attraction",
          },
          evening: {
            activity:
              "Explore Raohe Street Night Market and sample local street food",
            photo_query: "Raohe Street Night Market food stalls",
            activity_type: "Activity",
          },
        },
        reminders: [
          "Purchase an EasyCard for MRT and buses",
          "Keep small change for street vendors",
        ],
      },
      {
        title: "Culture and Hot Springs",
        description:
          "Delve into imperial Chinese art, unwind in natural hot springs, and explore a trendy shopping district.",
        activities: {
          morning: {
            activity:
              "Discover ancient Chinese artifacts at the National Palace Museum",
            photo_query: "National Palace Museum artifacts hall",
            activity_type: "Attraction",
          },
          afternoon: {
            activity:
              "Relax at Beitou Hot Springs and tour the Hot Spring Museum",
            photo_query: "Beitou Hot Spring Museum",
            activity_type: "Attraction",
          },
          evening: {
            activity: "Shop and dine in Ximending pedestrian shopping district",
            photo_query: "Ximending shopping street at night",
            activity_type: "Activity",
          },
        },
        reminders: [
          "Bring swimwear and towel for hot springs",
          "Wear comfortable walking shoes",
        ],
      },
      {
        title: "Transit to Kaohsiung and Lotus Pond",
        description:
          "Travel south by high-speed rail then visit Kaohsiung’s iconic lotus-covered pond and pagodas.",
        activities: {
          morning: {
            activity:
              "Take the Taiwan High Speed Rail from Taipei to Kaohsiung",
            photo_query: "Taiwan High Speed Rail train interior",
            activity_type: "Travel",
          },
          afternoon: {
            activity: "Visit the Dragon and Tiger Pagodas at Lotus Pond",
            photo_query: "Dragon and Tiger Pagodas Lotus Pond Kaohsiung",
            activity_type: "Attraction",
          },
          evening: {
            activity: "Enjoy a romantic cruise on Love River with city lights",
            photo_query: "Love River cruise Kaohsiung night",
            activity_type: "Activity",
          },
        },
        reminders: [
          "Book HSR tickets in advance",
          "Check Love River cruise schedule",
        ],
      },
      {
        title: "Cijin Island and Night Market",
        description:
          "Explore a coastal island with lighthouse views and feast on fresh seafood before an evening market stroll.",
        activities: {
          morning: {
            activity: "Ferry to Cijin Island and climb the Cijin Lighthouse",
            photo_query: "Cijin Island ferry Taiwan",
            activity_type: "Travel",
          },
          afternoon: {
            activity: "Sample fresh seafood at Cijin Street Market",
            photo_query: "Cijin street seafood market",
            activity_type: "Activity",
          },
          evening: {
            activity: "Browse stalls at Liuhe Night Market",
            photo_query: "Liuhe Night Market Kaohsiung",
            activity_type: "Activity",
          },
        },
        reminders: [
          "Bring sunscreen on the ferry",
          "Have small bills for market purchases",
        ],
      },
      {
        title: "Spiritual Grandeur and Departure",
        description:
          "Visit a grand Buddhist complex, admire stunning public art, then enjoy skyline views and depart.",
        activities: {
          morning: {
            activity:
              "Explore the Fo Guang Shan Buddha Museum and its impressive halls",
            photo_query: "Fo Guang Shan Buddha Museum Taiwan",
            activity_type: "Attraction",
          },
          afternoon: {
            activity:
              "Admire the Dome of Light at Formosa Boulevard MRT Station",
            photo_query: "Formosa Boulevard Dome of Light",
            activity_type: "Attraction",
          },
          evening: {
            activity:
              "Ascend the 85 Sky Tower for sunset views then transfer to Kaohsiung Airport",
            photo_query: "85 Sky Tower Kaohsiung sunset view",
            activity_type: "Travel",
          },
        },
        reminders: [
          "Dress modestly at religious sites",
          "Allow extra time for airport transfer",
        ],
      },
    ],
  };

  return (
    <div className='w-full max-w-4xl mx-auto p-6'>
      <div className='bg-white shadow-md rounded-lg p-6'>
        <h1 className='text-3xl font-bold text-center mb-2'>
          {itinerary.title}
        </h1>
        <p className='text-gray-600 text-center mb-4 text-sm'>
          {itinerary.description}
        </p>
        <p className='text-gray-600 text-center mb-4 text-xs'>
          {`Duration: ${itinerary.days.length} days | Location: ${itinerary.location}`}
        </p>
        {/* Timeline */}
        <div>
          {/* Timeline item */}
          <div>
            {/* Timeline header */}
            <div className='flex gap-2 items-center'>
              <span className='rounded-full bg-primary shadow p-2'>
                <Plane size={20} className='text-primary-foreground' />
              </span>
              <h2 className='text-xl font-semibold inline'>
                {itinerary.days[0].title}
              </h2>
            </div>
            {/* Timeline Content */}
            <Card className='mt-5 ml-10'>
              <CardHeader>
                <CardTitle className='text-muted-foreground'>
                  {itinerary.days[0].description}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Reminders */}
                <div className='mb-6'>
                  <h4 className='font-semibold mb-2'>🔔 Reminders:</h4>
                  {itinerary.days[0].reminders.map((r, i) => (
                    <div key={i} className='flex items-center gap-3 mb-1'>
                      <Info className='w-5 h-5 text-accent-foreground mt-1' />
                      <p className='text-muted-foreground'>{r}</p>
                    </div>
                  ))}
                </div>
                {Object.entries(itinerary.days[0].activities).map(
                  ([timeOfDay, activity], index) => (
                    <div key={index} className='mb-4'>
                      <Badge
                        className=' text-xs bg-primary opacity-80'
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
                          <h3 className='font-semibold capitalize'>
                            {timeOfDay}
                          </h3>
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
        </div>
      </div>
    </div>
  );
};

export default ItineraryBuilder;
