import React from "react";
import AcitvityDetail from "./ActivityDetail";
import OtherActivities from "./OtherActivities";
import OtherActivitiesHero from "./OtherActivitiesHero";

type Props = {};

function OtherActivitiesMain({}: Props) {
  return (
    <div>
      <OtherActivitiesHero />
      <AcitvityDetail />
      <OtherActivities />
    </div>
  );
}

export default OtherActivitiesMain;
