import Image from "next/image";
import React from "react";

type Props = {};

export default function OurTeam({}: Props) {
  return (
    <div className="py-[5rem] w-full">
      <div className="grid h-[100vh] grid-cols-3">
        {/* one col  */}
        <div className="flex flex-col">
          {/* team 1 */}
          <div className="w-full h-[50%] bg-secondary-100 relative">
            {/* mask black  */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-[0.3] z-10"></div>
            {/* info  */}
            <div className="absolute w-[80%] text-left bottom-[10%] left-[5%] flex flex-col  justify-start items-start  z-20 text-secondary-50">
              <span className="font-medium title tracking-wide text-xl">
                Tenzing Sherpa
              </span>
              {/* role  */}
              <span className="font-medium">Trek Guide</span>
              {/* desc  */}
              <p className="text-sm text-secondary-100">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
                unde ullam! Voluptatem saepe nisi sapiente?
              </p>
              {/* icons  */}
              <div></div>
            </div>
            <Image
              width={1000}
              height={1000}
              alt="team-img"
              className="absolute w-full h-full object-cover object-center"
              src="https://images.unsplash.com/photo-1558724041-f4de24818f17?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ></Image>
          </div>
          {/* team 2 */}
          <div className="w-full h-[50%] bg-secondary-200 relative">
            {/* mask black  */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-[0.3] z-10"></div>
            {/* info  */}
            <div className="absolute w-[80%] text-left bottom-[10%] left-[5%] flex flex-col  justify-start items-start  z-20 text-secondary-50">
              <span className="font-medium title tracking-wide text-xl">
                Tenzing Sherpa
              </span>
              {/* role  */}
              <span className="font-medium">Trek Guide</span>
              {/* desc  */}
              <p className="text-sm text-secondary-100">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
                unde ullam! Voluptatem saepe nisi sapiente?
              </p>
              {/* icons  */}
              <div></div>
            </div>
            <Image
              width={1000}
              height={1000}
              alt="team-img"
              className="absolute w-full h-full object-cover object-center"
              src="https://images.unsplash.com/photo-1558724041-f4de24818f17?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ></Image>
          </div>
        </div>

        {/* COL 2 */}
        <div className="w-full relative h-full flex-col flex">
          {/* mask black  */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-[0.3] z-10"></div>
          {/* info  */}
          <div className="absolute w-[80%] text-left bottom-[10%] left-[5%] flex flex-col  justify-start items-start  z-20 text-secondary-50">
            <span className="font-medium title tracking-wide text-xl">
              Tenzing Sherpa
            </span>
            {/* role  */}
            <span className="font-medium">Trek Guide</span>
            {/* desc  */}
            <p className="text-sm text-secondary-100">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
              unde ullam! Voluptatem saepe nisi sapiente?
            </p>
            {/* icons  */}
            <div></div>
          </div>
          <div className="w-full h-[30%] z-20 relative bg-secondary-50 flex justify-center items-center title text-5xl font-semibold tracking-wide">
            OUR EXPERTISE
          </div>
          <Image
            width={1000}
            height={1000}
            alt="team-img"
            className="w-full h-[70%] object-cover object-center"
            src="https://images.unsplash.com/photo-1558724041-f4de24818f17?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          ></Image>
        </div>

        {/* three col  */}
        <div className="flex flex-col">
          {/* team 1 */}
          <div className="w-full h-[50%] bg-secondary-100 relative">
            {/* mask black  */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-[0.3] z-10"></div>
            {/* info  */}
            <div className="absolute w-[80%] text-left bottom-[10%] left-[5%] flex flex-col  justify-start items-start  z-20 text-secondary-50">
              <span className="font-medium title tracking-wide text-xl">
                Tenzing Sherpa
              </span>
              {/* role  */}
              <span className="font-medium">Trek Guide</span>
              {/* desc  */}
              <p className="text-sm text-secondary-100">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
                unde ullam! Voluptatem saepe nisi sapiente?
              </p>
              {/* icons  */}
              <div></div>
            </div>
            <Image
              width={1000}
              height={1000}
              alt="team-img"
              className="absolute w-full h-full object-cover object-center"
              src="https://images.unsplash.com/photo-1558724041-f4de24818f17?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ></Image>
          </div>
          {/* team 2 */}
          <div className="w-full h-[50%] bg-secondary-200 relative">
            {/* mask black  */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-[0.3] z-10"></div>
            {/* info  */}
            <div className="absolute w-[80%] text-left bottom-[10%] left-[5%] flex flex-col  justify-start items-start  z-20 text-secondary-50">
              <span className="font-medium title tracking-wide text-xl">
                Tenzing Sherpa
              </span>
              {/* role  */}
              <span className="font-medium">Trek Guide</span>
              {/* desc  */}
              <p className="text-sm text-secondary-100">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
                unde ullam! Voluptatem saepe nisi sapiente?
              </p>
              {/* icons  */}
              <div></div>
            </div>
            <Image
              width={1000}
              height={1000}
              alt="team-img"
              className="absolute w-full h-full object-cover object-center"
              src="https://images.unsplash.com/photo-1558724041-f4de24818f17?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
