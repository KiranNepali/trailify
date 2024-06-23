import Link from "next/link";
import React from "react";
import { Icon } from "@iconify/react";
import Ham from "@/public/hamburger.png";
import Image from "next/image";
type Props = {};

function Navbar({}: Props) {
  return (
    <div className="fixed z-50 text-secondary-500 top-0 left-0 w-full h-[5rem] bg-secondary-50">
      {/* LOGO  */}
      <div className="w-11/12 md:hidden  text-secondary-400   tracking-wide  mx-auto h-full flex  justify-between items-center gap-5">
        <h1 className="font-bold text-secondary-500">LOGO</h1>
        <Image width={500} height={500} src={Ham} alt="ham" className="w-[2rem] h-[1rem]  object-fit object-center  pr-1"></Image>
      </div>

      <div className="w-10/12  text-secondary-400   tracking-wide  mx-auto h-full hidden md:flex justify-between items-center gap-5">
        {/*  nav links  */}
        <div className="flex gap-5 text-[16px] title">
          <Link href="/">Home</Link>
          <Link href="about_us">About us</Link>
          <Link href="our_team">Our team</Link>
          <Link href="blogs">Blogs</Link>
          <Link href="certificates">Certificates</Link>
        </div>
        {/* LOGO  */}
        <h1 className="font-bold text-2xl title tracking-wide absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2">
          TRAILIFY
        </h1>
        <div className="flex gap-5  text-[16px]">
          <Link href="trek" className="group relative">
            <div className="flex justify-center items-center gap-1">
              <span className="title">Trekking</span>
              <Icon
                icon="gridicons:dropdown"
                className="w-[1.5rem] pb-1 pr-1 h-[1.5rem] object-cover object-center"
              />
            </div>
            <ul className="absolute hidden group-hover:block duration-300 top-[100%] left-[50%] translate-x-[-50%] whitespace-nowrap  bg-white shadow p-5">
              <li className="py-1">
                <div className="text-secondary-400 border-b border-primary-100 text-[13px] font-semibold uppercase hover:text-secondary-500 cursor-pointer">
                  Everest Base Camp Trek
                </div>
              </li>
              <li className="py-1">
                <div className="text-secondary-400 border-b border-primary-100 text-[13px] font-semibold uppercase hover:text-secondary-500 cursor-pointer">
                  Annapurna Circuit Trek
                </div>
              </li>
              <li className="py-1">
                <div className="text-secondary-400 border-b border-primary-100 text-[13px] font-semibold uppercase hover:text-secondary-500 cursor-pointer">
                  Langtang Valley Trek
                </div>
              </li>
              <li className="py-1">
                <div className="text-secondary-400 border-b border-primary-100 text-[13px] font-semibold uppercase hover:text-secondary-500 cursor-pointer">
                  Manaslu Circuit Trek
                </div>
              </li>
              <li className="py-1">
                <div className="text-secondary-400 border-b border-primary-100 text-[13px] font-semibold uppercase hover:text-secondary-500 cursor-pointer">
                  Upper Mustang Trek
                </div>
              </li>
            </ul>
          </Link>

          {/* expedition  */}
          <Link href="expedition" className="group relative">
            <div className="flex justify-center items-center gap-1">
              <span className="title">Expedition</span>
              <Icon
                icon="gridicons:dropdown"
                className="w-[1.5rem] pb-1 pr-1 h-[1.5rem] object-cover object-center"
              />
            </div>
            <ul className="absolute hidden group-hover:block duration-300 top-[100%] left-[50%] translate-x-[-50%] whitespace-nowrap  bg-white shadow p-5">
              <li className="py-1">
                <div className="border-b border-primary-100 text-secondary-400 text-[13px] font-semibold  hover:text-secondary-500 cursor-pointer">
                  5364m
                </div>
              </li>
              <li className="py-1">
                <div className="border-b border-primary-100 text-secondary-400 text-[13px] font-semibold  hover:text-secondary-500 cursor-pointer">
                  5416m
                </div>
              </li>
              <li className="py-1">
                <div className="border-b border-primary-100 text-secondary-400 text-[13px] font-semibold  hover:text-secondary-500 cursor-pointer">
                  4984m
                </div>
              </li>
              <li className="py-1">
                <div className="border-b border-primary-100 text-secondary-400 text-[13px] font-semibold  hover:text-secondary-500 cursor-pointer">
                  5160m
                </div>
              </li>
              <li className="py-1">
                <div className="border-b border-primary-100 text-secondary-400 text-[13px] font-semibold  hover:text-secondary-500 cursor-pointer">
                  3840m
                </div>
              </li>
            </ul>
          </Link>

          {/* other activities  */}
          <Link href="other_activities" className="group relative">
            <div className="flex justify-center items-center gap-1">
              <span className="title">Other Activities</span>
              <Icon
                icon="gridicons:dropdown"
                className="w-[1.5rem] pb-1 pr-1 h-[1.5rem] object-cover object-center"
              />
            </div>
            <ul className="absolute hidden group-hover:block duration-300 top-[100%] left-[50%] translate-x-[-50%] whitespace-nowrap  bg-white shadow p-5">
              <li className="py-1">
                <div className="border-b border-primary-100 text-secondary-400 text-[13px] font-semibold uppercase hover:text-secondary-500 cursor-pointer">
                  Heli Tour
                </div>
              </li>
              <li className="py-1">
                <div className="border-b border-primary-100 text-secondary-400 text-[13px] font-semibold uppercase hover:text-secondary-500 cursor-pointer">
                  Paragliding
                </div>
              </li>
              <li className="py-1">
                <div className="border-b border-primary-100 text-secondary-400 text-[13px] font-semibold uppercase hover:text-secondary-500 cursor-pointer">
                  Bungee Jumping
                </div>
              </li>
              <li className="py-1">
                <div className="border-b border-primary-100 text-secondary-400 text-[13px] font-semibold uppercase hover:text-secondary-500 cursor-pointer">
                  Mountain Biking
                </div>
              </li>
              <li className="py-1">
                <div className="border-b border-primary-100 text-secondary-400 text-[13px] font-semibold uppercase hover:text-secondary-500 cursor-pointer">
                  Rock Climbing
                </div>
              </li>
            </ul>
          </Link>

          {/* CONTACT US  */}
          <Link href="contact_us" className="group relative">
            <span className="title">Contact us</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
