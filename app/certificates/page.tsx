"use client";
import CertificatesMain from "@/components/website/Certificates/CertificatesMain";
import React, { useEffect } from "react";

type Props = {};

function Page({}: Props) {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <div>
      <CertificatesMain />
    </div>
  );
}

export default Page;
