import AllExpMain from "@/components/website/AllExpedition/AllExpMain";
import React from "react";

type Props = {};

function page({ params }: any) {
  const { distance } = params;

  return (
    <div>
      <AllExpMain distance={distance} />
    </div>
  );
}

export default page;
