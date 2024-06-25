import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";

type Props = {};

function Preloader({}: Props) {
  const preloaderContainerRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const splitText = new SplitType(".text-preloader");
    const tl = gsap.timeline();
    tl.from(splitText.chars, {
      opacity: 0,
      duration: 2,
      stagger: 0.05,
      ease: "back.inOut",
    });
    tl.to(splitText.chars, {
      opacity: 0,
      duration: 0.5,
      stagger: 0.03,
      ease: "expo.inOut",
    });
    tl.to(preloaderContainerRef.current, {
      opacity: 0,
      display: "none",
      duration: 0.1,
      ease: "power4.inOut",
    });
  });

  return (
    <div
      ref={preloaderContainerRef}
      className="fixed top-0 left-0 w-full text-center h-screen bg-secondary-50 z-[100] title text-5xl flex justify-center items-center"
    >
      <span className="w-full  text-preloader tracking-wider font-semibold text-primary-500">
        LOADING FOR YOUR NEXT ADVENTURE...
      </span>
    </div>
  );
}

export default Preloader;
