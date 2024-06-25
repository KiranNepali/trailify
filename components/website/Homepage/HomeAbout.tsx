import Image from "next/image";
import React from "react";

type Props = {};

function HomeAbout({}: Props) {
  return (
    <div className="w-full py-[2rem] md:py-0 flex md:h-screen  md:flex-row flex-col justify-center items-center gap-10">
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
        <span className="text-secondary-500 text-lg font-medium">
          Our Introduction
        </span>
        <h2 className="title text-secondary-500 font-semibold tracking-wide text-5xl">
          Explore the Great <br /> Outdoors with TRAILIFY
        </h2>
        <p className="text-secondary-400">
          TRAILIFY is your ultimate expedition partner, specializing in
          providing detailed information, expert advice, and a vibrant community
          for adventure enthusiasts.
        </p>
        <button className="px-10 py-3 text-secondary-50 font-medium  bg-primary-500 border-b-2  cursor-pointer mt-5">
          Discover more
        </button>
      </div>
    </div>
  );
}

export default HomeAbout;
