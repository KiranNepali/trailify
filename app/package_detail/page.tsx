"use client";
import PackageDetailMain from "@/components/website/PackageDetail/PackageDetailMain";
import React, { useEffect } from "react";

type Props = {};

function Page({}: Props) {
  useEffect(() => {
    scrollTo(0, 0);
  },[]);
  return (
    <div>
      <PackageDetailMain />
    </div>
  );
}

export default Page;
