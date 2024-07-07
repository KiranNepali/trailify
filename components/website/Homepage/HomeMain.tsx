"use client";
import React, { useEffect, useRef, useState } from "react";
import Hero from "./Hero";
import HomeAbout from "./HomeAbout";
import Services from "./Services";
import Banner from "./Banner";
import PopularExpedition from "./PopularExpedition";
import PopularTrekking from "./PopularTrekking";
import Reviews from "./Reviews";
import Lenis from "lenis";
import Try from "./Try";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NavHome from "./NavHome";
type Props = {};

gsap.registerPlugin(ScrollTrigger);
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

  useGSAP(() => {
    const tl1 = gsap.timeline({
      scrollTrigger: {
        // markers: true,
        start: "top top",
        end: "top top",
        trigger: ".hero-container",
        scrub: 1,
      },
    });
    tl1.from(".content-main", {
      translateY: "100vh",
      duration: 2,
      ease: "linear",
    });
  });

  const navContainerRef = useRef<any>(null);
  return (
    <>
      <div className=" w-full h-full">
        <NavHome navContainerRef={navContainerRef} />
        <div className="hero-container">
          <Hero />
        </div>

        <div className="w-full  content-main h-full bg-zinc-50 relative z-20">
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

          <Footer />
        </div>
      </div>
    </>
  );
}

export default HomeMain;
