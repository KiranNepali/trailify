import AllTrekMain from "@/components/website/AllTrek/AllTrekMain";
import React from "react";

type Props = {};

function page({ params }: any) {
  const { region } = params;
  return (
    <div>
      <AllTrekMain region={region} />
    </div>
  );
}

export default page;
