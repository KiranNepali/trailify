import Image from "next/image";
import React from "react";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="w-full h-screen relative flex text-secondary-50  justify-center items-center">
      {/* mask black  */}
      <div className="w-full h-full absolute top-0 left-0 bg-black opacity-[0.5] z-10"></div>
      {/* hero bg image  */}
      <Image
        width={1000}
        height={1000}
        src="https://images.unsplash.com/photo-1504061770815-81c22ffcbaa7?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="hero-image"
        className="absolute top-0 left-0 w-full h-full object-cover object-center"
      ></Image>

      {/* text HEADINg  */}
      <div className="text-center relative z-20 mx-auto flex justify-center items-center flex-col gap-2">
        <p className="text-lg font-medium text-secondary-100">
          Extraordinary journey begins
        </p>
        <h1 className="text-6xl tracking-wide title font-bold text-secondary-50">
          Unseen Adventures <br /> Await
        </h1>
      </div>

      <div className="cursor-pointer absolute  bottom-10 w-[6rem] whitespace-nowrap h-[6rem] p-1 border border-primary-100 rounded-full flex justify-center items-center text-wrap text-center  z-20 left-[50%] -translate-x-[50%] text-sm">
        <span>SCROLL DOWN</span>
      </div>
    </div>
  );
}

export default Hero;
