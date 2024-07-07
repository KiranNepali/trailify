"use client";
import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Logo from "@/public/Trivision-whitetext.svg";
import Image from "next/image";
type Props = {};

function Footer({}: Props) {
  return (
    <>
      <footer className="w-full bg-secondary-50 relative border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-14 grid grid-cols-12 gap-x-5 gap-y-8">
            <div className="col-span-full xl:col-span-3 relative bg-gradient-to-r from-primary-800 to-primary-300 2xl gap-12 p-6 xl:w-72 h-96 flex flex-col justify-center items-center">
              {/* LOGO  */}
              <div className="">
                <Image
                  src={Logo}
                  alt="trek-nepal-logo"
                  className="w-[8rem] h-[3rem] object-fit object-center"
                ></Image>
              </div>
              <p className="text-center text-gray-200">
                Trusted in more than 100 countries & 5 million customers. Have
                any query? contact us we are here for you.
              </p>

              <div className="flex space-x-4 sm:justify-center  ">
                <a href="" target="_blank">
                  <Icon
                    icon="ic:baseline-facebook"
                    className="w-[2rem] h-[3rem] object-cover object-center text-white"
                  />
                </a>
                <a href="" target="_blank">
                  <Icon
                    icon="mdi:twitter"
                    className="w-[2rem] h-[3rem] object-cover object-center text-white"
                  />
                </a>
                <a href="" target="_blank">
                  <Icon
                    icon="mdi:instagram"
                    className="w-[2rem] h-[3rem] object-cover object-center text-white"
                  />
                </a>
              </div>
            </div>

            <div className="block text-center xl:text-left xl:py-16 col-span-full min-[500px]:col-span-6 md:col-span-4 xl:col-span-3 xl:pl-5">
              <h4 className="title tracking-wide text-lg text-gray-900 font-medium mb-9">
                Get In Touch
              </h4>
              <ul className="text-gray-900 transition-all duration-500 grid gap-6">
                <li>support@trivision.com</li>
                <li>+977 98********</li>
                <li>Kapan-3, Kathmandu, Nepal</li>
              </ul>
            </div>
            <div className="block xl:py-16 col-span-full min-[500px]:col-span-6 md:col-span-4 xl:col-span-3">
              <h4 className="title tracking-wide text-lg text-gray-900 font-medium mb-9 text-center xl:text-left">
                Quick Links
              </h4>
              <div className="flex gap-6 xl:gap-12 max-xl:justify-center">
                <ul className="text-gray-600 transition-all duration-500 grid gap-6">
                  <li>
                    <a href="javascript:;">Home</a>
                  </li>
                  <li>
                    <a href="javascript:;">About us</a>
                  </li>
                  <li>
                    <a href="javascript:;">Our team</a>
                  </li>
                  <li>
                    <a href="javascript:;">Certificates</a>
                  </li>
                </ul>
                <ul className="text-gray-600 transition-all duration-500 grid gap-6">
                  <li>
                    <a href="javascript:;">Blogs</a>
                  </li>
                  <li>
                    <a href="javascript:;">Trekking </a>
                  </li>
                  <li>
                    <a href="javascript:;">Expedition</a>
                  </li>
                  <li>
                    <a href="javascript:;">Contact us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="block xl:py-16 col-span-full md:col-span-4 xl:col-span-3">
              <h4 className="title tracking-wide text-lg text-gray-900 font-medium mb-9 text-center xl:text-left">
                Newsletter
              </h4>
              <div className="grid gap-7 ">
                <input
                  type="text"
                  name="email"
                  className="py-2 px-4 border border-gray-300 shadow-sm h-14 text-lg text-gray-800  w-full  xl:w-64 placeholder:text-gray-400 focus:outline-none"
                  placeholder="Enter email.."
                />
                <button
                  type="submit"
                  className="flex gap-2 justify-center items-center py-3.5 px-7  text-white bg-primary-600 shadow-md w-fit transition-all duration-500 mx-auto xl:mx-0 hover:bg-primary-400"
                >
                  Subscribe
                  <svg
                    width="17"
                    height="13"
                    viewBox="0 0 17 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.5 6.88281L14.8333 6.88281M10.6667 11.8828L15.0774 7.47207C15.3552 7.19429 15.4941 7.0554 15.4941 6.88281C15.4941 6.71022 15.3552 6.57133 15.0774 6.29356L10.6667 1.88281"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="py-4 border-t">
          <div className="flex items-center justify-center">
            <span className="text-sm text-gray-800 ">
              Copyright@2024 All Right Reserved by{" "}
              <a href="https://webxnep.com/">webX</a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
