import Image from "next/image";
import React from "react";

type Props = {};

function Banner({}: Props) {
  return (
    <div className="w-full my-[5rem] relative h-[60vh] flex  justify-center items-center">
      {/* mask */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-[0.3] z-10"></div>
      <Image
        width={1000}
        height={1000}
        src="https://images.unsplash.com/photo-1545787636-35db70ee2e6a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="banner-image"
        className="absolute top-0 left-0 bg-c w-full h-full object-cover object-bottom"
      ></Image>

      <div className="relative z-20 w-11/12 md:w-10/12 flex flex-col md:flex-row justify-between items-center gap-5 mx-auto">
        <div className="md:w-[50%] flex items-start justify-start flex-col gap-2">
          <span className="text-sm md:text-lg font-medium text-secondary-100">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus,
            pariatur.
          </span>
          <h1 className="text-3xl md:text-6xl tracking-wide title font-bold text-secondary-50">
            You Get Now Memorable Wonderful Outdoor Experiences
          </h1>
        </div>

        <div className="cursor-pointer w-[8rem] text-primary-50 whitespace-nowrap h-[8rem] p-1 border  border-primary-100 rounded-full flex justify-center items-center text-wrap text-center   text-sm">
          <span>CONTACT US</span>
        </div>
      </div>
    </div>
  );
}

export default Banner;
