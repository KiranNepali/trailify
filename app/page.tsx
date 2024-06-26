"use client";
import HomeMain from "@/components/website/Homepage/HomeMain";
import { useEffect, useState } from "react";
// import Preloader from "@/components/website/Preloader";

export default function Home() {
  return (
    <>
      <main>
        <HomeMain />
        {/* <Preloader /> */}
      </main>
    </>
  );
}
