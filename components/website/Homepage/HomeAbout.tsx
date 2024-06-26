import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useRef } from "react";
import SplitType from "split-type";

type Props = {};

gsap.registerPlugin(ScrollTrigger);
function HomeAbout({}: Props) {
  const aboutUsContainerRef = useRef(null);
  const aboutTitleRef = useRef<any>(null);
  const aboutDescRef = useRef<any>(null);
  const aboutButtonRef = useRef<any>(null);

  useGSAP(() => {
    const splitAboutTitle = new SplitType(aboutTitleRef.current);
    const splitAboutDesc = new SplitType(aboutDescRef.current);
    const tl = gsap.timeline({
      scrollTrigger: {
        // markers: true,
        start: "top 90%",
        end: "50% 50%",
        trigger: aboutUsContainerRef.current,
        scrub: 3,
      },
    });
    tl.from(
      aboutUsContainerRef.current,
      {
        opacity: 0,
        duration: 1,
      },
      "about"
    );
    tl.from(
      splitAboutTitle.lines,
      {
        // color: "grey",
        opacity: 0,
        stagger: 0.2,
        translateX: "50px",
        duration: 1,
        ease: "power4.inOut",
      },
      "about"
    );
    tl.from(
      splitAboutDesc.lines,
      {
        duration: 1,
        opacity: 0,
        ease: "power4.inOut",
        stagger: 0.3,
      },
      "about"
    );
    tl.from(
      aboutButtonRef.current,
      {
        delay: 0.1,
        translateY: "50px",
        opacity: 0,
        duration: 1,
        ease: "power4.inOut",
      },
      "about"
    );
  });
  return (
    <div
      ref={aboutUsContainerRef}
      className="w-full py-[2rem] md:py-0 flex md:h-screen  md:flex-row flex-col justify-center items-center gap-10"
    >
      {/* image  */}
      <Image
        className="w-full md:w-[40%] object-cover object-center h-[70vh] md:h-[70%]"
        width={1000}
        height={1000}
        alt="about-us-img"
        src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ></Image>

      {/* about us  */}
      <div className="w-full md:w-[40%] flex flex-col gap-2 items-start justify-center h-[70%]">
        <span className="text-secondary-500 about-intro text-lg font-medium">
          Our Introduction
        </span>
        <h2
          ref={aboutTitleRef}
          className="title text-secondary-500 font-semibold tracking-wide text-5xl"
        >
          Explore the Great <br /> Outdoors with TRAILIFY
        </h2>
        <p
          ref={aboutDescRef}
          className="text-secondary-400 inline-block about-desc"
        >
          TRAILIFY is your ultimate expedition partner, specializing in
          providing detailed information, expert advice, and a vibrant community
          for adventure enthusiasts.
        </p>
        <button
          ref={aboutButtonRef}
          className="px-10 py-3 text-secondary-50 font-medium   bg-primary-700 border-b-2  cursor-pointer mt-5"
        >
          Discover more
        </button>
      </div>
    </div>
  );
}

export default HomeAbout;
