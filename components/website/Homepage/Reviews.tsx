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

type Props = {};

function Reviews({}: Props) {
  const swiperRef = useRef<any>();
  return (
    <div className="w-full py-[1rem] flex flex-col gap-20 justify-center items-center relative">
      <div className="w-10/12 mx-auto justify-between items-center flex">
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
        <h1 className="text-6xl relative tracking-wide title font-bold text-secondary-500">
          TOP-RATED REVIEWS
        </h1>
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
      {/* CARDS  */}
      <div className="w-10/12 mx-auto h-[50vh]    flex  justify-center relative items-center">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          loop={true}
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode]}
          className="mySwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] flex flex-col gap-3 h-auto p-3">
                <div className="flex justify-between">
                  <span className="flex text-primary-700">
                    <Icon
                      icon="mdi:comma"
                      className="w-[2rem] h-[2rem] object-cover object-center rotate-[180deg]"
                    />
                    <Icon
                      icon="mdi:comma"
                      className="w-[2rem] h-[2rem] object-cover object-center rotate-[180deg]"
                    />
                  </span>

                  {/* PROFILE  */}
                  <div className="w-[3.5rem]  h-[3.5rem] bg-zinc-700 overflow-hidden">
                    <Image
                      width={500}
                      height={500}
                      alt="client-img"
                      className="w-full h-full object-cover object-top"
                      src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    ></Image>
                  </div>
                </div>
                {/* review  */}
                <p className="text-secondary-400">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dignissimos et animi, tenetur sed in ex?
                </p>

                <div className="w-full flex flex-col">
                  {/* name  */}
                  <span className="title italic  tracking-wide">
                    JOHN CHAMLING
                  </span>
                  <div className="w-full flex  items-center justify-between">
                    <span className="text-[14px] font-medium text-secondary-400">Web Designer</span>
                    <span className="flex justify-center items-center  text-primary-500">
                      <Icon icon="material-symbols:star" />
                      <Icon icon="material-symbols:star" />
                      <Icon icon="material-symbols:star" />
                      <Icon icon="material-symbols:star" />
                      <Icon icon="material-symbols:star" />
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Reviews;

const slides = [
  "Slide 1",
  "Slide 2",
  "Slide 3",
  "Slide 4",
  "Slide 5",
  "Slide 6",
];
