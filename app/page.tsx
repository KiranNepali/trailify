"use client";
import HomeMain from "@/components/website/Homepage/HomeMain";
import { useEffect, useState } from "react";

export default function Home() {
  // const [locoforbuild, setlocoforbuild] = useState<any>(null);

  // useEffect(() => {
  //   let mounted = true; // Flag to track if component is mounted

  //   const initializeScroll = async () => {
  //     const LocomotiveScroll = (await import("locomotive-scroll")).default;

  //     const scrollInstance = new LocomotiveScroll({
  //       el: document.querySelector("#ScrollElementId"),
  //       smooth: true,
  //     });

  //     if (mounted) {
  //       setlocoforbuild(scrollInstance);
  //     }
  //   };

  //   initializeScroll();

  //   return () => {
  //     mounted = false; // Clean-up function to prevent memory leaks
  //     if (locoforbuild) {
  //       locoforbuild.destroy(); // Clean up the scroll instance when component unmounts
  //     }
  //   };
  // }, [locoforbuild]); // Empty dependency array means this effect runs only once on mount

  return (
    <>
      <main id="ScrollElementId">
        <HomeMain />
      </main>
    </>
  );
}
