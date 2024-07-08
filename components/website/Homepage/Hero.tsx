import Image from "next/image";
import React, { useRef } from "react";
import HeroBg from "@/public/Hero.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from "split-type";
// import {motion} from ""
type Props = {};

function Hero({}: Props) {
  useGSAP(() => {
    const splitHeroTitle = new SplitType(".hero-title");
    gsap.from(splitHeroTitle.chars, {
      delay: 1,
      opacity: 0,
      duration: 1.5,
      stagger: 0.05,
      ease: "power4.inOut",
    });
    gsap.from(".hero-scroll", {
      delay: 0.7,
      opacity: 0,
      duration: 1.5,
      ease: "sine.out",
    });

    gsap.to(".video-zoom", {
      rotate: 0,
      height: "100%",
      duration: 1,
      scaleY: "1",
      ease: "sine.out",
    });
    gsap.to(".video-zoom", {
      delay: "0.8",
      rotate: 0,
      width: "100%",
      duration: 1,
      scaleY: "1",
      ease: "sine.inOut",
    });
    gsap.to(".side-circle", {
      delay: "2",
      duration: 0.8,
      opacity: 1,
      stagger: 0.04,
      ease: "sine.inOut",
    });
  });
  return (
    <div className="w-full top-0 left-0 fixed  overflow-hidden  h-screen   flex text-secondary-50   justify-center items-center">
      {/* mask black  */}
      {/* <div className="w-full h-full absolute top-0 left-0 bg-black opacity-[0.5] z-10"></div> */}
      {/* hero bg image  */}

      {/* <div className="absolute bottom-10 opacity-0  side-circle  right-20 z-20 gap-10 flex  justify-center items-end flex-col">
        <div className="w-[3rem] h-[3rem] overflow-hidden rounded-full border-dotted p-1 border hover:w-[4rem] hover:h-[4rem] duration-200 cursor-pointer">
          <Image
            src={HeroBg}
            className="w-full h-full object-cover object-center rounded-full"
            alt=""
          ></Image>
        </div>
        <div className="w-[3rem] h-[3rem] overflow-hidden rounded-full border-dotted p-1 border hover:w-[4rem] hover:h-[4rem] duration-200 cursor-pointer">
          <Image
            src={HeroBg}
            className="w-full h-full object-cover object-center rounded-full"
            alt=""
          ></Image>
        </div>
        <div className="w-[3rem] h-[3rem] overflow-hidden rounded-full border-dotted p-1 border hover:w-[4rem] hover:h-[4rem] duration-200 cursor-pointer">
          <Image
            src={HeroBg}
            className="w-full h-full object-cover object-center rounded-full"
            alt=""
          ></Image>
        </div>
      </div>

      <div className="absolute top-10 left-20 opacity-0  side-circle  z-20 gap-10 flex  justify-center items-start flex-col">
        <div className="w-[3rem] h-[3rem] overflow-hidden rounded-full border-dotted p-1 border hover:w-[4rem] hover:h-[4rem] duration-200 cursor-pointer">
          <Image
            src={HeroBg}
            className="w-full h-full object-cover object-center rounded-full"
            alt=""
          ></Image>
        </div>
        <div className="w-[3rem] h-[3rem] overflow-hidden rounded-full border-dotted p-1 border hover:w-[4rem] hover:h-[4rem] duration-200 cursor-pointer">
          <Image
            src={HeroBg}
            className="w-full h-full object-cover object-center rounded-full"
            alt=""
          ></Image>
        </div>
        <div className="w-[3rem] h-[3rem] overflow-hidden rounded-full border-dotted p-1 border hover:w-[4rem] hover:h-[4rem] duration-200 cursor-pointer">
          <Image
            src={HeroBg}
            className="w-full h-full object-cover object-center rounded-full"
            alt=""
          ></Image>
        </div>
      </div> */}

      <video
        className="video-zoom absolute rotate-12 w-[30vw] scale-y-95 h-[20vh]  brightness-[0.3] z-10 object-cover object-center"
        autoPlay
        loop
        muted
      >
        <source src="/HeroBg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* text HEADINg  */}
      <div className="text-center  z-20  relative  w-11/12 md:w-10/12   mx-auto flex justify-center items-center flex-col gap-2">
        <h1
          // ref={heroTitle}
          className="text-5xl 3xl:text-6xl hero-title  tracking-wide title font-bold text-secondary-50"
        >
          Unseen Adventures <br /> Await
        </h1>
      </div>

      <div className="hero-scroll">
        <span className="absolute z-10 bottom-2 hero-scroll text-secondary-100  text-sm left-1/2 font-medium text-center   -translate-x-1/2">
          SCROLL <br /> DOWN
        </span>
        <div className="cursor-pointer  md:hover:w-[12rem] md:hover:h-[12rem] 3xl:hover:w-[14rem] 3xl:hover:h-[14rem] 3xl:w-[12rem] 3xl:h-[12rem]   duration-200 scroll-down absolute  md:w-[10rem] border-dotted whitespace-nowrap    md:h-[10rem]  border border-secondary-50 rounded-full flex justify-center items-start pt-[2%]  text-wrap text-center  z-20 left-[50%] bottom-[-10%] -translate-x-[50%] text-[14px] md:text-sm"></div>
      </div>
    </div>
  );
}

export default Hero;
