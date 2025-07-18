import React from "react";
import TripList from "./TripList";
import DashboardHeader from "../dashboard/DashboardHeader";

const Page = () => {
  return (
    <div className='max-w-inherit mx-auto py-10 px-4'>
      <DashboardHeader />
      <TripList />
    </div>
  );
};

export default Page;
