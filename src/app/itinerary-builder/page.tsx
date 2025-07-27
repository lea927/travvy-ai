"use client";

import React, { useEffect } from "react";
import ItineraryList from "./ItineraryList";
import ItineraryPhotos from "./ItineraryPhotos";
import { useSearchParams } from "next/navigation";
import type { Day } from "./ItineraryItem";
import { useQuery } from "@tanstack/react-query";
import { ClipLoader } from "react-spinners";
import Image from "next/image";

export type Itinerary = {
  title: string;
  description: string;
  location: string;
  days: Day[];
};

const ItineraryBuilder = () => {
  const searchParams = useSearchParams();
  const prompt = searchParams.get("prompt");
  console.log("Prompt from URL:", prompt);

  const fetchItinerary = async (prompt: string | null) => {
    if (!prompt) {
      throw new Error("Prompt is required.");
    }

    const response = await fetch("/api/itinerary-builder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userMessage: prompt }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch itinerary");
    }

    return response.json();
  };

  const {
    data: itinerary,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["itinerary", prompt],
    queryFn: () => fetchItinerary(prompt),
    select: (response) => response.data,
  });

  useEffect(() => {
    fetchItinerary(prompt);
  }, [prompt]);

  return (
    <>
      <div className='w-full h-screen max-w-4xl mx-auto p-6'>
        {isLoading && (
          <div className='text-center h-full flex items-center justify-center'>
            <div>
              <div className='mb-6'>
                <h2 className='text-5xl font-bold mb-2'>Loading</h2>
                <p>We&apos;re creating your itinerary...</p>
              </div>
              <ClipLoader
                color={getComputedStyle(
                  document.documentElement
                ).getPropertyValue("--primary")}
                size={60}
                aria-label='Loading Spinner'
                data-testid='loader'
              />
            </div>
          </div>
        )}
        {error && (
          <div className='text-center h-full flex items-center justify-center'>
            <div>
              <Image
                className='mx-auto'
                src='/error-rocket.png'
                alt=''
                width={300}
                height={300}
              />
              <h2 className='text-5xl font-bold mb-2'>
                Aaaah! Something went wrong
              </h2>
              <p className='text-muted-foreground'>
                <span className='block'>
                  Brace yourself till we get the error fixed.{" "}
                </span>
                <span>You may also refresh the page or try again later</span>
              </p>
            </div>
          </div>
        )}
        {itinerary && (
          <div className='w-full max-w-4xl mx-auto p-6'>
            <div className='bg-white shadow-md rounded-lg p-6 space-y-10'>
              <div>
                <h1 className='text-3xl font-bold text-center mb-2'>
                  {itinerary.title}
                </h1>
                <p className='text-gray-600 text-center mb-4 text-sm'>
                  {itinerary.description}
                </p>
                <p className='text-gray-600 text-center text-xs'>
                  {`Duration: ${itinerary.days.length} days | Location: ${itinerary.location}`}
                </p>
              </div>
              <ItineraryPhotos />
              <ItineraryList days={itinerary.days} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ItineraryBuilder;
