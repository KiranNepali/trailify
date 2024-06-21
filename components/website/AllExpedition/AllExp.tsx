import Image from "next/image";
import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
type Props = {};

function AllExp({}: Props) {
  return (
    <div className="w-full py-[5rem]">
      {/* TITLE  */}
      <h1 className="text-2xl relative tracking-wide title font-semibold italic text-secondary-500">
        Everest TREKKING
      </h1>
      {/* desc  */}
      <p className="text-[17px] pb-[2rem]  text-secondary-400 font-medium">
        Nepal, a land teeming with majestic mountains, boasts around 1,500 peaks
        soaring above 8,000 meters. Among these giants, the renowned
        Kanchenjunga stands tall at 8,586 meters, proudly holding its title as
        the world&apos;s third highest mountain.
      </p>

      {/* available treKs  */}
      <div className="w-full pb-[5rem] flex flex-col gap-3">
        {/* title  */}
        {/* <h1 className="text-6xl  w-full text-center relative tracking-wide title font-semibold  text-secondary-500">
          Available treks
        </h1> */}
        <div className="w-full grid grid-cols-4  gap-5">
          {trekData.map((item, index) => (
            <div
              key={index}
              className="w-full p-2  flex flex-col justify-start items-start gap-3 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]   "
            >
              {/* img  */}
              <Image
                width={1000}
                height={1000}
                src="https://images.unsplash.com/photo-1545787636-35db70ee2e6a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="banner-image"
                className="w-full h-full object-cover object-bottom"
              ></Image>

              {/* desc  */}
              <div className="flex w-full flex-col gap-2">
                {/* title   */}
                <span className="text-md title font-semibold tracking-wider">
                  EVERSET TREKKING
                </span>
                {/* short intro  */}
                <p className="text-sm font-medium text-secondary-400">
                  {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,commodi ad. Perferendis commodi corporis corrupti iusto. Et cumomnis assumenda excepturi eius quae non inventore rem, autofficiis neque sapiente.".slice(
                    0,
                    100
                  )}
                  ...
                </p>

                <div className="flex gap-1 text-sm font-medium">
                  <div className="flex gap-1  items-center">
                    <Icon icon="mdi:language" className="text-primary-500" />
                    <span>Expedition</span>
                  </div>
                  <div className="flex gap-1  items-center">
                    <Icon
                      icon="material-symbols-light:no-meals-rounded"
                      className="text-primary-500"
                    />
                    <span>8 days</span>
                  </div>
                </div>
              </div>

              {/* price  */}
              <div className="flex flex-col w-full gap-2">
                <span className="font-bold text-xl text-secondary-500">
                  $100
                </span>

                <div className="flex flex-col w-full whitespace-nowrap  text-[12px] font-semibold text-sm gap-1">
                  <span className="font-bold">Price for:</span>
                  <span>1 person</span>
                  <span>8 days</span>
                </div>

                <Link href="/package_detail">
                  <button className="w-full py-3 bg-gradient-to-tr from-primary-600 to-primary-400 text-sm font-medium text-secondary-100">
                    View more
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllExp;

const trekData = ["Slide 1", "Slide 2", "Slide 3", "Slide 4"];
