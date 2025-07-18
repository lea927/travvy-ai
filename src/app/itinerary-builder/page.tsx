"use client";

import React, { useState } from "react";
import DashboardHeader from "../dashboard/DashboardHeader";
import { Button } from "@/components/ui/button";

const ItineraryBuilder = () => {
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [interests, setInterests] = useState("");
  const [loading, setLoading] = useState(false);

  // Placeholder for AI response
  const [itinerary, setItinerary] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate AI response
    setTimeout(() => {
      setItinerary("Your AI-powered itinerary will appear here!");
      setLoading(false);
    }, 2000);
  };

  return (
    <div className='max-w-xl mx-auto py-10 px-4'>
      <DashboardHeader />
      <h1 className='text-3xl font-bold mb-6 text-center'>Create New Trip</h1>
      <form
        className='bg-muted rounded-xl p-6 shadow-md space-y-6'
        onSubmit={handleSubmit}
      >
        <div>
          <label className='block font-semibold mb-2'>Destination</label>
          <input
            type='text'
            className='w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring focus:border-primary'
            placeholder='e.g. Paris, Tokyo'
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
        </div>
        <div className='flex gap-4'>
          <div className='flex-1'>
            <label className='block font-semibold mb-2'>Start Date</label>
            <input
              type='date'
              className='w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring focus:border-primary'
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </div>
          <div className='flex-1'>
            <label className='block font-semibold mb-2'>End Date</label>
            <input
              type='date'
              className='w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring focus:border-primary'
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </div>
        </div>
        <div>
          <label className='block font-semibold mb-2'>
            Interests / Preferences
          </label>
          <input
            type='text'
            className='w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring focus:border-primary'
            placeholder='e.g. Foodie, Museums, Adventure'
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
          />
        </div>
        <Button
          type='submit'
          className='w-full py-2 font-bold bg-primary text-white rounded-full'
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Itinerary"}
        </Button>
      </form>
      {itinerary && (
        <div className='mt-8 bg-white rounded-xl p-6 shadow-md'>
          <h2 className='text-xl font-bold mb-2'>AI-Generated Itinerary</h2>
          <p>{itinerary}</p>
        </div>
      )}
    </div>
  );
};

export default ItineraryBuilder;
