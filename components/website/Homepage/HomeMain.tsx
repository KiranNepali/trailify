"use client";
import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import HomeAbout from "./HomeAbout";
import Services from "./Services";
import Banner from "./Banner";
import PopularExpedition from "./PopularExpedition";
import PopularTrekking from "./PopularTrekking";
import Reviews from "./Reviews";
import Lenis from "lenis";
type Props = {};

function HomeMain({}: any) {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: any) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);
  return (
    <>
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
