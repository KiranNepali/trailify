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
import ExpData from "@/data/ExpeditionData";
import Link from "next/link";
type Props = {};

function PopularExpedition({}: Props) {
  const swiperRef = useRef<any>();
  return (
    <div className="w-full h-[110vh] flex justify-center items-center relative">
      {/* image  */}
      <div className="w-full h-[50vh] bg-zinc-200 absolute top-0 left-0 flex justify-center items-center">
        <Image
          width={1000}
          height={1000}
          src="https://images.unsplash.com/photo-1517934274943-d1749ff2d7a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="expedition-image"
          className="absolute top-0 left-0 w-full h-[50vh] object-cover object-top"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-[0.5]"></div>
        <h1 className="text-3xl md:text-6xl relative tracking-wide title font-bold text-secondary-50">
          TRENDING EXPEDITION
        </h1>
      </div>

      {/* CARDS  */}
      <div className="w-11/12 md:w-9/12 mx-auto h-[60vh] mt-[10%] flex  justify-center relative items-center">
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
          autoplay={{ delay: 2000 }}
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
          speed={500}
          loop={true}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode]}
          className="mySwiper"
        >
          {ExpData.map((item, index) => (
            <SwiperSlide key={index}>
              <Link href="/package_detail">
                <div className="shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] flex flex-col gap-3 h-auto p-2">
                  <div className="relative">
                    <div className="px-4 text-secondary-50 z-10 text-sm py-1 text- bg-primary-600 absolute top-[3%] left-[3%]">
                      $120
                    </div>
                    {/* MASK  */}
                    <div className="bg-black absolute top-0 left-0 w-full h-full opacity-[0.2]"></div>
                    <Image
                      width={1000}
                      height={1000}
                      src={item.img}
                      alt="expedition-image"
                      className="w-full h-[30vh] object-cover object-center"
                    />
                  </div>
                  <div className="w-full flex relative flex-col gap-2">
                    {/* distanc days  */}
                    <div className="w-full absolute top-[-10%]  left-0 translate-y-[-50%] flex justify-center items-center">
                      <div className="w-[70%] h-[2rem] text-sm font-medium  px-[10%] text-secondary-400  bg-secondary-100 flex justify-between items-center">
                        <span className="flex  items-center gap-1">
                          <Icon icon="carbon:time" /> <span>5 days</span>
                        </span>
                        <span>|</span>
                        <span>259km</span>
                      </div>
                    </div>
                    <span className="title text-xl pt-[1.5rem] text-secondary-500 tracking-wide">
                      {item.name}
                    </span>
                    <p className="text-sm text-secondary-400">{item.desc}</p>

                    <div className="w-full flex pb-2 justify-between">
                      <span className="text-sm  py-2 ">View details</span>
                      <span className="flex justify-center items-center  text-primary-600">
                        <Icon icon="material-symbols:star" />
                        <Icon icon="material-symbols:star" />
                        <Icon icon="material-symbols:star" />
                        <Icon icon="material-symbols:star" />
                        <Icon icon="material-symbols:star" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
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

export default PopularExpedition;
