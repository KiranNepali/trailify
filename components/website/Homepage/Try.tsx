import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React, { useRef } from "react";

type Props = {};

function Try({}: Props) {
  const aboutUsContainerRef = useRef(null);
  // useGSAP(() => {
   
  // });
  return (
    <div ref={aboutUsContainerRef} className="w-full">
      <div className="w-full  mx-auto text-center py-[5rem]">
        <div className="flex flex-col gap-2 mb-[2rem]">
          <span className="text-sm uppercase">WHAT MAKES US DIFFERENT</span>
          <h1 className="text-6xl title font-semibold tracking-wide">
            WHY TRIVISION
          </h1>
        </div>

        {/* main  */}
        <div className="w-full grid grid-cols-3 gap-10 justify-center items-start">
          {/* left srvices   */}
          <div className="flex  flex-col mt-[40%] text-start gap-20">
            <p>
              Unforgettable experiences Creating your trip is entirely
              collaborative and our Travel Researchers are here for every step.
            </p>
            <p className="ml-[10%]">
              Unforgettable experiences Creating your trip is entirely
              collaborative and our Travel Researchers are here for every step.
            </p>
            <p className="ml-[40%]">
              Unforgettable experiences Creating your trip is entirely
              collaborative and our Travel Researchers are here for every step.
            </p>
          </div>

          {/* image  */}
          <div className="flex w-full  justify-center relative h-full items-start">
            <Image
              className="w-full md:w-[80%] -rotate-[2deg] object-cover object-center  md:h-[90%]"
              width={1000}
              height={1000}
              alt="about-us-img"
              src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ></Image>
            <Image
              className="w-full absolute bottom-[-5%] right-0 md:w-[15vw] rotate-[2deg] object-cover object-center  md:h-[40vh]"
              width={1000}
              height={1000}
              alt="about-us-img"
              src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ></Image>
          </div>

          {/* right srvices   */}
          <div className="flex mt-[20%] flex-col gap-5 text-start">
            <p>
              Unforgettable experiences Creating your trip is entirely
              collaborative and our Travel Researchers are here for every step.
            </p>
            <p>
              Unforgettable experiences Creating your trip is entirely
              collaborative and our Travel Researchers are here for every step.
            </p>
            <p>
              Unforgettable experiences Creating your trip is entirely
              collaborative and our Travel Researchers are here for every step.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Try;
