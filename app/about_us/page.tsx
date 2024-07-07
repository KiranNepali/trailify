"use client";
import AboutUsMain from "@/components/website/AboutUs/AboutUsMain";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    scrollTo(0, 0);
  },[]);
  return (
    <>
      <main>
        <AboutUsMain />
      </main>
    </>
  );
}
