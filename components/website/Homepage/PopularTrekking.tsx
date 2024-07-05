"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { Icon } from "@iconify/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./swiper.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// data
import TrekData from "@/data/TrekkingData";

type Props = {};

function PopularTrekking({}: Props) {
  const swiperRef = useRef<any>();
  return (
    <div className="w-full h-[110vh] flex justify-center items-center relative">
      {/* image  */}
      <div className="w-full h-[50vh] bg-zinc-200 absolute top-0 left-0 flex justify-center items-center">
        <Image
          width={1000}
          height={1000}
          src="https://images.unsplash.com/reserve/91JuTaUSKaMh2yjB1C4A_IMG_9284.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="expedition-image"
          className="absolute top-0 left-0 w-full h-[50vh] object-cover object-center"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-[0.5]"></div>

        <h1 className="text-3xl md:text-6xl relative tracking-wide title font-bold text-secondary-50">
          TRENDING TREKKING
        </h1>
      </div>

      {/* CARDS  */}
      <div className="w-11/12 md:w-9/12 mx-auto h-[60vh] mt-[10%] flex gap-2 justify-center relative items-center">
        <div
          onClick={() => {
            if (swiperRef.current) {
              swiperRef.current.slidePrev();
            }
          }}
          className="w-[2rem]  md:w-[2.5rem] h-[2rem] md:h-[2.5rem] hover:scale-105 duration-300 cursor-pointer overflow-hidden  text-secondary-700 hover:text-secondary-400"
        >
          <Icon
            icon="mynaui:fat-arrow-left"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          loop={true}
          speed={500}
          breakpoints={{
            924: {
              slidesPerView: 2,
              spaceBetween: 10,
            },

            1256: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1576: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode]}
          className="mySwiper"
        >
          {TrekData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="h-[80vh] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] flex flex-col gap-3  p-2">
                <div className="relative h-full">
                  <div className="px-4 text-secondary-50  z-10 text-sm py-1 text- bg-primary-600 absolute top-[3%] left-[3%]">
                    $120
                  </div>
                  {/* MASK  */}
                  <div className="bg-black h-full absolute top-0 left-0 w-full  opacity-[0.2]"></div>
                  <Image
                    width={1000}
                    height={1000}
                    src={item.img}
                    alt="expedition-image"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          onClick={() => {
            if (swiperRef.current) {
              swiperRef.current.slideNext();
            }
          }}
          className="w-[2rem]  md:w-[2.5rem] h-[2rem] md:h-[2.5rem] hover:scale-105 duration-300 cursor-pointer overflow-hidden  text-secondary-700 hover:text-secondary-400"
        >
          <Icon
            icon="mynaui:fat-arrow-right"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}

export default PopularTrekking;

const slides = [
  "Slide 1",
  "Slide 2",
  "Slide 3",
  "Slide 4",
  "Slide 5",
  "Slide 6",
];
