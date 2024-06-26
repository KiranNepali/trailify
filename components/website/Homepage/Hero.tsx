import Image from "next/image";
import React, { useRef } from "react";
import HeroBg from "@/public/Hero.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from "split-type";
type Props = {};

function Hero({}: Props) {
  // const heroTitle = useRef(null);
  useGSAP(() => {
    const splitHeroTitle = new SplitType(".hero-title");
    gsap.from(splitHeroTitle.chars, {
      opacity: 0,
      duration: 1.5,
      stagger: 0.03,
      ease: "power4.inOut",
    });
    gsap.from(".hero-desc", {
      opacity: 0,
      duration: 1,
      ease: "power4.inOut",
    });
    gsap.from(".hero-scroll", {
      opacity: 0,
      duration: 1,
      ease: "power4.inOut",
    });
  });
  return (
    <div className="w-full h-screen relative flex text-secondary-50  justify-center items-center">
      {/* mask black  */}
      <div className="w-full h-full absolute top-0 left-0 bg-black opacity-[0.5] z-10"></div>
      {/* hero bg image  */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover object-center"
        autoPlay
        loop
        muted
      >
        <source src="/HeroBg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* text HEADINg  */}
      <div className="text-center w-11/12 md:w-10/12 relative z-20 mx-auto flex justify-center items-center flex-col gap-2">
        <p className="text-lg hero-desc font-medium text-secondary-100">
          Extraordinary journey begins
        </p>
        <h1
          // ref={heroTitle}
          className="text-6xl hero-title tracking-wide title font-bold text-secondary-50"
        >
          Unseen Adventures <br /> Await
        </h1>
      </div>

      <div className="cursor-pointer hero-scroll hover:w-[8rem] hover:h-[8rem] duration-200 scroll-down absolute  bottom-10 w-[6rem] whitespace-nowrap h-[6rem] p-1 border border-primary-100 rounded-full flex justify-center items-center text-wrap text-center  z-20 left-[50%] -translate-x-[50%] text-sm">
        <span>
          SCROLL <br /> DOWN
        </span>
      </div>
    </div>
  );
}

export default Hero;
