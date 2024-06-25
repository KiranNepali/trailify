"use client";
import React from "react";
import LogoIcon from "@/public/fav icon.svg";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
type Props = {};

export default function Loading({}: Props) {
  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1, duration: 0.3 });
    tl.to(".logo-icon", {
      rotate: "360deg",
      ease: "back.inOut",
    });
    tl.to(".logo-icon", {
      scale: "1.3",
      ease: "expo.out",
    });
  });
  return (
    <div className="w-full h-screen flex  justify-center items-center">
      <div className="">
        <Image
          src={LogoIcon}
          alt="trek-nepal-logo-icon"
          className="logo-icon w-[3rem] h-[3rem] object-cover object-center"
        ></Image>
      </div>
    </div>
  );
}
