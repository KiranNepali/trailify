import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import HomeAbout from "./HomeAbout";
import Services from "./Services";
import Banner from "./Banner";
import PopularExpedition from "./PopularExpedition";
import PopularTrekking from "./PopularTrekking";
import Reviews from "./Reviews";
import Preloader from "../Preloader";
type Props = {};

function HomeMain({}: any) {
  const [locoforbuild, setlocoforbuild] = useState<any>(null);
  useEffect(() => {
    let locomotiveScroll;

    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      locomotiveScroll = new LocomotiveScroll({
        el: document.querySelector("#ScrollElementId"),
        smooth: true,
      });

      setlocoforbuild(locomotiveScroll);
      if (locoforbuild) {
        console.log("for build");
      }
    })();
  }, []);
  return (
    <>
      <Preloader />
      <div className="w-full h-full">
        <Hero />
        <div className="md:w-10/12 w-11/12 mx-auto">
          <HomeAbout />
        </div>
        <div className="md:w-10/12 w-11/12 mx-auto">
          <Services />
        </div>
        <div className="w-full mx-auto">
          <PopularExpedition />
        </div>
        <div className="w-full mx-auto">
          <PopularTrekking />
        </div>
        <div className="w-full mx-auto">
          <Banner />
        </div>
        <div className="md:w-10/12 w-11/12 mx-auto">
          <Reviews />
        </div>
      </div>
    </>
  );
}

export default HomeMain;
