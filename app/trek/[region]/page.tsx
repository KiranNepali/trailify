"use client";
import AllTrekMain from "@/components/website/AllTrek/AllTrekMain";
import React, { useEffect } from "react";

type Props = {};

function Page({ params }: any) {
  const { region } = params;
  useEffect(() => {
    scrollTo(0, 0);
  },[]);
  return (
    <div>
      <AllTrekMain region={region} />
    </div>
  );
}

export default Page;
