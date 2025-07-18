"use client";

import React from "react";
import DashboardQuickLinks from "./DashboardQuickLinks";
import DashboardHeader from "./DashboardHeader";
import { Button } from "@/components/ui/button";
import TripList from "../my-trips/TripList";
import { useRouter } from "next/navigation";
import Link from "next/dist/client/link";

const Dashboard = () => {
  const router = useRouter();
  return (
    <div className='max-w-5xl mx-auto py-10 px-4'>
      <DashboardHeader />
      <header className='mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
        <div>
          <h1 className='text-4xl font-bold mb-2'>Welcome back!</h1>
          <p className='text-muted-foreground'>
            Overview of your recent and upcoming itineraries.
          </p>
        </div>
        <Button
          className='px-6 py-2 text-lg font-semibold bg-primary text-white rounded-full shadow-md hover:bg-primary/90 transition'
          onClick={() => router.push("/itinerary-builder")}
        >
          + Create New Trip
        </Button>
      </header>
      <DashboardQuickLinks />
      <section className='mt-10'>
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-2xl font-bold'>Your Itineraries</h2>
          <Link
            href='/my-trips'
            className='text-primary font-semibold hover:underline transition-colors text-base'
          >
            View All
          </Link>
        </div>
        <TripList />
      </section>
    </div>
  );
};

export default Dashboard;
