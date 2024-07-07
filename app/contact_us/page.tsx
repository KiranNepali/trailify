"use client";
import ContactUs from "@/components/website/ContactUs/ContactUs";
import React, { useEffect } from "react";

type Props = {};

function page({}: Props) {
  useEffect(() => {
    scrollTo(0, 0);
  },[]);
  return (
    <div>
      <ContactUs />
    </div>
  );
}

export default page;
