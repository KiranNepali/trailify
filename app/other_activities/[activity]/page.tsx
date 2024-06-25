"use client"
import OtherActivitiesMain from "@/components/website/OtherActivities/OtherActivitiesMain";
import React from "react";

type Props = {};

function page({params}: any) {
  const { activity}=params
  return (
    <div>
      <OtherActivitiesMain activity={activity} />
    </div>
  );
}

export default page;
