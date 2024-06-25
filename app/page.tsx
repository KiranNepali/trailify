"use client";
import HomeMain from "@/components/website/Homepage/HomeMain";
import { useEffect, useState } from "react";
// import Preloader from "@/components/website/Preloader";

export default function Home() {
  // const [locoforbuild, setlocoforbuild] = useState<any>(null);
  // useEffect(() => {
  //   let locomotiveScroll;

  //   (async () => {
  //     const LocomotiveScroll = (await import("locomotive-scroll")).default;

  //     locomotiveScroll = new LocomotiveScroll({
  //       el: document.querySelector("#ScrollElementId"), // Specify your scroll container element
  //       smooth: true,
  //     });

  //     setlocoforbuild(locomotiveScroll);
  //     if (locoforbuild) {
  //       console.log("for build");
  //     }
  //   })();
  // });
  return (
    <>
      <main>
        <HomeMain />
        {/* <Preloader /> */}
      </main>
    </>
  );
}
